import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireUser } from "@/lib/auth-middleware";
import { supabase } from "@/api/supabaseClient";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// A public endpoint, so every value is bounded before it reaches the database.
const RegistrationInput = z
  .object({
    game: z.enum(["mlbb", "tekken8"]),

    team_name: z.string().trim().min(2).max(60).optional(),
    team_tag: z.string().trim().min(2).max(6).optional(),
    region: z.string().trim().max(40).optional(),

    roster: z
      .array(
        z.object({
          ign: z.string().trim().min(1).max(40),
          game_id: z.string().trim().min(1).max(40),
          role: z.string().trim().max(24).optional(),
        }),
      )
      .max(6)
      .optional(),

    player_name: z.string().trim().max(80).optional(),
    in_game_id: z.string().trim().max(40).optional(),

    contact_name: z.string().trim().min(2).max(80),

    contact_email: z
      .string()
      .trim()
      .max(120)
      .regex(EMAIL_RE, "Enter a valid email address"),

    contact_phone: z.string().trim().max(30).optional(),
    discord: z.string().trim().max(40).optional(),
  })
  .superRefine((value, ctx) => {
    if (value.game === "mlbb") {
      if (!value.team_name) {
        ctx.addIssue({
          code: "custom",
          path: ["team_name"],
          message: "Team name is required",
        });
      }

      if ((value.roster ?? []).length !== 5) {
        ctx.addIssue({
          code: "custom",
          path: ["roster"],
          message: "Exactly five starters are required",
        });
      }
    } else if (!value.in_game_id) {
      ctx.addIssue({
        code: "custom",
        path: ["in_game_id"],
        message: "In-game ID is required",
      });
    }
  });

// Empty optional fields are left out entirely so a record never stores blanks.
function withoutBlanks(record) {
  const cleaned = {};

  for (const [key, value] of Object.entries(record)) {
    if (value === undefined || value === null || value === "") {
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

// ---------------------------------------------------------
// SUBMIT REGISTRATION
// ---------------------------------------------------------

export const submitRegistration = createServerFn({ method: "POST" })
  .validator(RegistrationInput)
  .handler(async ({ data }) => {
    const id = crypto.randomUUID();
    const reference = makeReference();

    const { error } = await supabase
      .from("registrations")
      .insert({
        id,
        ...withoutBlanks(data),
        status: "pending",
        reference_code: reference,
      });

    if (error) {
      console.error("Registration insert failed:", error);

      throw new Error(
        error.message || "Unable to submit registration",
      );
    }

    return {
      id,
      reference_code: reference,
    };
  });

// ---------------------------------------------------------
// PUBLIC ROSTER
// Only approved registrations are returned.
// Contact information is intentionally excluded.
// ---------------------------------------------------------

export const listPublicEntries = createServerFn({
  method: "GET",
}).handler(async () => {
  const { data: rows, error } = await supabase
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
    console.error("Public registrations fetch failed:", error);

    throw new Error(
      error.message || "Unable to load registrations",
    );
  }

  return (rows ?? []).map((row) => ({
    id: row.id,
    game: row.game,

    team_name: row.team_name ?? "",
    team_tag: row.team_tag ?? "",
    region: row.region ?? "",

    player_name: row.player_name ?? "",
    in_game_id: row.in_game_id ?? "",

    roster: Array.isArray(row.roster)
      ? row.roster.map((player) => ({
          ign: player?.ign ?? "",
          game_id: player?.game_id ?? "",
          role: player?.role ?? "",
        }))
      : [],
  }));
});

// ---------------------------------------------------------
// STAFF REGISTRATION QUEUE
// ---------------------------------------------------------

export const listRegistrations = createServerFn({
  method: "GET",
})
  .middleware([requireUser])
  .handler(async ({ context }) => {
    if (context.user?.role !== "admin") {
      return {
        authorized: false,
        items: [],
      };
    }

    const { data: items, error } = await supabase
      .from("registrations")
      .select("*")
      .order("created_at", {
        ascending: false,
      })
      .limit(300);

    if (error) {
      console.error("Staff registration fetch failed:", error);

      throw new Error(
        error.message || "Unable to load registrations",
      );
    }

    return {
      authorized: true,
      items: items ?? [],
    };
  });

// ---------------------------------------------------------
// UPDATE REGISTRATION STATUS
// ---------------------------------------------------------

export const setRegistrationStatus = createServerFn({
  method: "POST",
})
  .middleware([requireUser])
  .validator(
    z.object({
      id: z.string().min(1).max(64),

      status: z.enum([
        "approved",
        "rejected",
        "pending",
      ]),
    }),
  )
  .handler(async ({ data, context }) => {
    if (context.user?.role !== "admin") {
      throw Object.assign(
        new Error("Staff access required"),
        {
          status: 403,
        },
      );
    }

    const reviewedAt = new Date().toISOString();

    const { data: updated, error } = await supabase
      .from("registrations")
      .update({
        status: data.status,
        reviewed_at: reviewedAt,
        reviewed_by: context.user.email ?? "",
        updated_at: reviewedAt,
      })
      .eq("id", data.id)
      .select("id, status")
      .single();

    if (error) {
      console.error("Registration status update failed:", error);

      throw new Error(
        error.message ||
          "Unable to update registration status",
      );
    }

    return {
      id: updated.id,
      status: updated.status,
    };
  });