import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

import { requireUser } from "@/lib/auth-middleware";
import { supabase } from "@/api/supabaseClient";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ---------------------------------------------------------
// REGISTRATION VALIDATION
// ---------------------------------------------------------

const RegistrationInput = z
  .object({
    game: z.enum(["mlbb", "tekken8"]),

    team_name: z
      .string()
      .trim()
      .min(2)
      .max(60)
      .optional(),

    team_tag: z
      .string()
      .trim()
      .min(2)
      .max(6)
      .optional(),

    region: z
      .string()
      .trim()
      .max(40)
      .optional(),

    roster: z
      .array(
        z.object({
          ign: z
            .string()
            .trim()
            .min(1)
            .max(40),

          game_id: z
            .string()
            .trim()
            .min(1)
            .max(40),

          role: z
            .string()
            .trim()
            .max(24)
            .optional(),
        }),
      )
      .max(6)
      .optional(),

    player_name: z
      .string()
      .trim()
      .max(80)
      .optional(),

    in_game_id: z
      .string()
      .trim()
      .max(40)
      .optional(),

    contact_name: z
      .string()
      .trim()
      .min(2)
      .max(80),

    contact_email: z
      .string()
      .trim()
      .max(120)
      .regex(
        EMAIL_RE,
        "Enter a valid email address",
      ),

    contact_phone: z
      .string()
      .trim()
      .max(30)
      .optional(),

    discord: z
      .string()
      .trim()
      .max(40)
      .optional(),

    payment_method: z.enum([
      "gcash",
      "bank",
    ]),

    payment_receipt_path: z
      .string()
      .trim()
      .regex(
        /^receipts\/[a-zA-Z0-9._-]+$/,
        "Invalid receipt path",
      ),

    payment_reference: z
      .string()
      .trim()
      .max(100)
      .optional(),
  })
  .superRefine((value, ctx) => {
    if (value.game === "mlbb") {
      if (!value.team_name) {
        ctx.addIssue({
          code: "custom",
          path: ["team_name"],
          message:
            "Team name is required",
        });
      }

      if (
        (value.roster ?? []).length !== 5
      ) {
        ctx.addIssue({
          code: "custom",
          path: ["roster"],
          message:
            "Exactly five starters are required",
        });
      }
    } else if (!value.in_game_id) {
      ctx.addIssue({
        code: "custom",
        path: ["in_game_id"],
        message:
          "In-game ID is required",
      });
    }
  });

// ---------------------------------------------------------
// EDITABLE REGISTRATION VALIDATION
// ---------------------------------------------------------

const EditableRegistrationInput = z
  .object({
    game: z.enum(["mlbb", "tekken8"]),

    team_name: z
      .string()
      .trim()
      .min(2)
      .max(60)
      .optional(),

    team_tag: z
      .string()
      .trim()
      .min(2)
      .max(6)
      .optional(),

    region: z
      .string()
      .trim()
      .max(40)
      .optional(),

    roster: z
      .array(
        z.object({
          ign: z
            .string()
            .trim()
            .min(1)
            .max(40),

          game_id: z
            .string()
            .trim()
            .min(1)
            .max(40),

          role: z
            .string()
            .trim()
            .max(24)
            .optional(),
        }),
      )
      .max(6)
      .optional(),

    player_name: z
      .string()
      .trim()
      .max(80)
      .optional(),

    in_game_id: z
      .string()
      .trim()
      .max(40)
      .optional(),

    contact_name: z
      .string()
      .trim()
      .min(2)
      .max(80),

    contact_email: z
      .string()
      .trim()
      .max(120)
      .regex(
        EMAIL_RE,
        "Enter a valid email address",
      ),

    contact_phone: z
      .string()
      .trim()
      .max(30)
      .optional(),

    discord: z
      .string()
      .trim()
      .max(40)
      .optional(),
  })
  .superRefine((value, ctx) => {
    if (value.game === "mlbb") {
      if (!value.team_name) {
        ctx.addIssue({
          code: "custom",
          path: ["team_name"],
          message:
            "Team name is required",
        });
      }

      if (
        (value.roster ?? []).length !== 5
      ) {
        ctx.addIssue({
          code: "custom",
          path: ["roster"],
          message:
            "Exactly five starters are required",
        });
      }
    } else if (!value.in_game_id) {
      ctx.addIssue({
        code: "custom",
        path: ["in_game_id"],
        message:
          "In-game ID is required",
      });
    }
  });

// ---------------------------------------------------------
// HELPERS
// ---------------------------------------------------------

function withoutBlanks(record) {
  const cleaned = {};

  for (const [key, value] of Object.entries(
    record,
  )) {
    if (
      value === undefined ||
      value === null ||
      value === ""
    ) {
      continue;
    }

    if (Array.isArray(value)) {
      const items = value.filter(Boolean);

      if (!items.length) {
        continue;
      }

      cleaned[key] = items;
      continue;
    }

    cleaned[key] = value;
  }

  return cleaned;
}

const makeReference = () =>
  `S+${crypto
    .randomUUID()
    .replace(/-/g, "")
    .slice(0, 6)
    .toUpperCase()}`;

/**
 * Create a Supabase client that acts as the currently
 * logged-in user.
 *
 * This is important for RLS. The normal public Supabase
 * client uses the publishable key only, so PostgreSQL sees
 * it as anon.
 */
function getAuthenticatedSupabase() {
  const request = getRequest();

  const authorization =
    request.headers.get("authorization");

  return createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env
      .VITE_SUPABASE_PUBLISHABLE_KEY,
    {
      global: {
        headers: authorization
          ? {
              Authorization:
                authorization,
            }
          : {},
      },

      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    },
  );
}

// ---------------------------------------------------------
// SUBMIT REGISTRATION
// ---------------------------------------------------------

export const submitRegistration =
  createServerFn({
    method: "POST",
  })
    .middleware([requireUser])
    .validator(RegistrationInput)
    .handler(
      async ({ data, context }) => {
        if (!context.user?.id) {
          throw Object.assign(
            new Error(
              "You must be signed in to register",
            ),
            {
              status: 401,
            },
          );
        }

        const id =
          crypto.randomUUID();

        const reference =
          makeReference();

        const { error } =
          await supabase
            .from("registrations")
            .insert({
              id,

              user_id:
                context.user.id,

              ...withoutBlanks(data),

              status: "pending",

              payment_status:
                "pending",

              reference_code:
                reference,
            });

        if (error) {
          console.error(
            "Registration insert failed:",
            error,
          );

          throw new Error(
            error.message ||
              "Unable to submit registration",
          );
        }

        return {
          id,
          reference_code:
            reference,
        };
      },
    );

// ---------------------------------------------------------
// PUBLIC ROSTER
// ---------------------------------------------------------

export const listPublicEntries =
  createServerFn({
    method: "GET",
  }).handler(async () => {
    const {
      data: rows,
      error,
    } = await supabase
      .from("registrations")
      .select(
        `
          id,
          game,
          team_name,
          team_tag,
          region,
          player_name,
          in_game_id,
          roster,
          updated_at
        `,
      )
      .eq("status", "approved")
      .order("updated_at", {
        ascending: false,
      })
      .limit(200);

    if (error) {
      console.error(
        "Public registrations fetch failed:",
        error,
      );

      throw new Error(
        error.message ||
          "Unable to load registrations",
      );
    }

    return (rows ?? []).map(
      (row) => ({
        id: row.id,
        game: row.game,

        team_name:
          row.team_name ?? "",

        team_tag:
          row.team_tag ?? "",

        region:
          row.region ?? "",

        player_name:
          row.player_name ?? "",

        in_game_id:
          row.in_game_id ?? "",

        roster:
          Array.isArray(row.roster)
            ? row.roster.map(
                (player) => ({
                  ign:
                    player?.ign ??
                    "",

                  game_id:
                    player?.game_id ??
                    "",

                  role:
                    player?.role ??
                    "",
                }),
              )
            : [],
      }),
    );
  });

// ---------------------------------------------------------
// CURRENT USER REGISTRATIONS
// ---------------------------------------------------------

export const listMyRegistrations =
  createServerFn({
    method: "GET",
  })
    .middleware([requireUser])
    .handler(
      async ({ context }) => {
        const userSupabase =
          getAuthenticatedSupabase();

        const {
          data: items,
          error,
        } = await userSupabase
          .from("registrations")
          .select(
            `
              id,
              game,
              team_name,
              team_tag,
              region,
              roster,
              player_name,
              in_game_id,
              contact_name,
              contact_email,
              contact_phone,
              discord,
              status,
              reference_code,
              payment_method,
              payment_status,
              payment_reference,
              payment_receipt_path,
              created_at,
              updated_at
            `,
          )
          .eq(
            "user_id",
            context.user.id,
          )
          .order("created_at", {
            ascending: false,
          });

        if (error) {
          console.error(
            "User registrations fetch failed:",
            error,
          );

          throw new Error(
            error.message ||
              "Unable to load your registrations",
          );
        }

        return (items ?? []).map(
          (item) => ({
            ...item,

            has_payment_receipt:
              Boolean(
                item.payment_receipt_path,
              ),

            payment_receipt_path:
              undefined,
          }),
        );
      },
    );

// ---------------------------------------------------------
// UPDATE CURRENT USER REGISTRATION
// ---------------------------------------------------------

export const updateMyRegistration =
  createServerFn({
    method: "POST",
  })
    .middleware([requireUser])
    .validator(
      z.object({
        id: z.string().uuid(),

        registration:
          EditableRegistrationInput,
      }),
    )
    .handler(
      async ({ data, context }) => {
        const userSupabase =
          getAuthenticatedSupabase();

        // Confirm ownership and status first.
        const {
          data: existing,
          error: lookupError,
        } = await userSupabase
          .from("registrations")
          .select(
            `
              id,
              user_id,
              status
            `,
          )
          .eq("id", data.id)
          .eq(
            "user_id",
            context.user.id,
          )
          .single();

        if (
          lookupError ||
          !existing
        ) {
          throw Object.assign(
            new Error(
              "Registration not found",
            ),
            {
              status: 404,
            },
          );
        }

        if (
          existing.status !==
          "pending"
        ) {
          throw Object.assign(
            new Error(
              "Only pending registrations can be edited",
            ),
            {
              status: 409,
            },
          );
        }

        const form =
          data.registration;

        const common = {
          game: form.game,

          region:
            form.region?.trim() ||
            null,

          contact_name:
            form.contact_name.trim(),

          contact_email:
            form.contact_email.trim(),

          contact_phone:
            form.contact_phone?.trim() ||
            null,

          discord:
            form.discord?.trim() ||
            null,

          updated_at:
            new Date().toISOString(),
        };

        const updateData =
          form.game === "mlbb"
            ? {
                ...common,

                team_name:
                  form.team_name?.trim() ||
                  null,

                team_tag:
                  form.team_tag
                    ?.trim()
                    .toUpperCase() ||
                  null,

                roster: (
                  form.roster ?? []
                ).map((player) => ({
                  ign:
                    player.ign.trim(),

                  game_id:
                    player.game_id.trim(),

                  role:
                    player.role?.trim() ||
                    "",
                })),

                // Remove TEKKEN-only fields.
                player_name: null,
                in_game_id: null,
              }
            : {
                ...common,

                player_name:
                  form.player_name?.trim() ||
                  null,

                in_game_id:
                  form.in_game_id?.trim() ||
                  null,

                // Remove MLBB-only fields.
                team_name: null,
                team_tag: null,
                roster: null,
              };

        const {
          data: updated,
          error: updateError,
        } = await userSupabase
          .from("registrations")
          .update(updateData)
          .eq("id", data.id)
          .eq(
            "user_id",
            context.user.id,
          )
          .eq(
            "status",
            "pending",
          )
          .select("*")
          .single();

        if (updateError) {
          console.error(
            "User registration update failed:",
            updateError,
          );

          throw new Error(
            updateError.message ||
              "Unable to update your registration",
          );
        }

        return updated;
      },
    );

// ---------------------------------------------------------
// ADMIN / STAFF QUEUE
// ---------------------------------------------------------

export const listRegistrations =
  createServerFn({
    method: "GET",
  })
    .middleware([requireUser])
    .handler(
      async ({ context }) => {
        if (
          context.user?.role !==
          "admin"
        ) {
          return {
            authorized: false,
            items: [],
          };
        }

        const adminSupabase =
          getAuthenticatedSupabase();

        const {
          data: items,
          error,
        } = await adminSupabase
          .from("registrations")
          .select("*")
          .order("created_at", {
            ascending: false,
          })
          .limit(300);

        if (error) {
          console.error(
            "Admin registration fetch failed:",
            error,
          );

          throw new Error(
            error.message ||
              "Unable to load registrations",
          );
        }

        return {
          authorized: true,
          items:
            items ?? [],
        };
      },
    );

// ---------------------------------------------------------
// APPROVE / REJECT REGISTRATION
// ---------------------------------------------------------

export const setRegistrationStatus =
  createServerFn({
    method: "POST",
  })
    .middleware([requireUser])
    .validator(
      z.object({
        id: z
          .string()
          .min(1)
          .max(64),

        status: z.enum([
          "approved",
          "rejected",
          "pending",
        ]),
      }),
    )
    .handler(
      async ({ data, context }) => {
        if (
          context.user?.role !==
          "admin"
        ) {
          throw Object.assign(
            new Error(
              "Staff access required",
            ),
            {
              status: 403,
            },
          );
        }

        const adminSupabase =
          getAuthenticatedSupabase();

        const now =
          new Date().toISOString();

        const {
          data: updated,
          error,
        } = await adminSupabase
          .from("registrations")
          .update({
            status: data.status,

            reviewed_at: now,

            reviewed_by:
              context.user.email ??
              "",

            updated_at: now,
          })
          .eq("id", data.id)
          .select(
            "id, status",
          )
          .single();

        if (error) {
          console.error(
            "Registration status update failed:",
            error,
          );

          throw new Error(
            error.message ||
              "Unable to update registration status",
          );
        }

        return {
          id: updated.id,
          status:
            updated.status,
        };
      },
    );

// ---------------------------------------------------------
// PAYMENT VERIFICATION
// ---------------------------------------------------------

export const setPaymentStatus =
  createServerFn({
    method: "POST",
  })
    .middleware([requireUser])
    .validator(
      z.object({
        id: z
          .string()
          .min(1)
          .max(64),

        status: z.enum([
          "pending",
          "verified",
          "rejected",
        ]),
      }),
    )
    .handler(
      async ({ data, context }) => {
        if (
          context.user?.role !==
          "admin"
        ) {
          throw Object.assign(
            new Error(
              "Staff access required",
            ),
            {
              status: 403,
            },
          );
        }

        const adminSupabase =
          getAuthenticatedSupabase();

        const {
          data: updated,
          error,
        } = await adminSupabase
          .from("registrations")
          .update({
            payment_status:
              data.status,

            updated_at:
              new Date().toISOString(),
          })
          .eq("id", data.id)
          .select(
            "id, payment_status",
          )
          .single();

        if (error) {
          console.error(
            "Payment status update failed:",
            error,
          );

          throw new Error(
            error.message ||
              "Unable to update payment status",
          );
        }

        return {
          id: updated.id,

          payment_status:
            updated.payment_status,
        };
      },
    );

// ---------------------------------------------------------
// PRIVATE PAYMENT RECEIPT
// ---------------------------------------------------------

export const getPaymentReceiptUrl =
  createServerFn({
    method: "POST",
  })
    .middleware([requireUser])
    .validator(
      z.object({
        id: z
          .string()
          .min(1)
          .max(64),
      }),
    )
    .handler(
      async ({ data, context }) => {
        if (
          context.user?.role !==
          "admin"
        ) {
          throw Object.assign(
            new Error(
              "Staff access required",
            ),
            {
              status: 403,
            },
          );
        }

        const adminSupabase =
          getAuthenticatedSupabase();

        const {
          data: registration,
          error:
            registrationError,
        } = await adminSupabase
          .from("registrations")
          .select(
            "payment_receipt_path",
          )
          .eq("id", data.id)
          .single();

        if (
          registrationError
        ) {
          console.error(
            "Receipt lookup failed:",
            registrationError,
          );

          throw new Error(
            registrationError.message ||
              "Unable to find payment receipt",
          );
        }

        if (
          !registration?.payment_receipt_path
        ) {
          throw new Error(
            "No payment receipt has been uploaded",
          );
        }

        const {
          data: signed,
          error:
            signedUrlError,
        } =
          await adminSupabase.storage
            .from(
              "payment-receipts",
            )
            .createSignedUrl(
              registration.payment_receipt_path,
              300,
            );

        if (signedUrlError) {
          console.error(
            "Receipt signed URL failed:",
            signedUrlError,
          );

          throw new Error(
            signedUrlError.message ||
              "Unable to open payment receipt",
          );
        }

        return {
          signedUrl:
            signed.signedUrl,
        };
      },
    );