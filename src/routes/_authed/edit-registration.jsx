import {
  createFileRoute,
  Link,
  useNavigate,
  useRouter,
} from "@tanstack/react-router";

import {
  ArrowLeft,
  CheckCircle2,
  CreditCard,
  ImageUp,
  Save,
} from "lucide-react";

import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast } from "sonner";

import { supabase } from "@/api/supabaseClient";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  listMyRegistrations,
  updateMyPayment,
  updateMyRegistration,
} from "@/lib/server-fns";

export const Route = createFileRoute(
  "/_authed/edit-registration",
)({
  validateSearch: (search) => ({
    id:
      typeof search.id === "string"
        ? search.id
        : "",
  }),

  loader: async () => {
    return await listMyRegistrations();
  },

  head: () => ({
    meta: [
      {
        title:
          "Edit Registration — Project S+",
      },
    ],
  }),

  component: EditRegistrationPage,
});

const MLBB_ROLES = [
  "EXP",
  "Gold",
  "Jungle",
  "Mid",
  "Roam",
];

const MAX_RECEIPT_SIZE =
  5 * 1024 * 1024;

const ALLOWED_RECEIPT_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
];

function EditRegistrationPage() {
  const registrations =
    Route.useLoaderData();

  const { id } =
    Route.useSearch();

  const router =
    useRouter();

  const navigate =
    useNavigate();

  const updateRegistration =
    useServerFn(
      updateMyRegistration,
    );

  const updatePayment =
    useServerFn(
      updateMyPayment,
    );

  const registration =
    registrations.find(
      (item) => item.id === id,
    );

  if (!registration) {
    return (
      <main className="min-h-screen px-4 py-24">
        <div className="mx-auto max-w-2xl border border-border/80 bg-card/60 p-8 text-center">
          <h1 className="font-display text-3xl font-bold uppercase text-foreground">
            Registration not found
          </h1>

          <p className="mt-4 text-sm text-muted-foreground">
            This registration does not
            exist or does not belong to
            your account.
          </p>

          <Button
            asChild
            className="mt-6 rounded-none"
          >
            <Link to="/my-registration">
              Back to My Registration
            </Link>
          </Button>
        </div>
      </main>
    );
  }

  if (
    registration.status !==
    "pending"
  ) {
    return (
      <main className="min-h-screen px-4 py-24">
        <div className="mx-auto max-w-2xl border border-border/80 bg-card/60 p-8 text-center">
          <h1 className="font-display text-3xl font-bold uppercase text-foreground">
            Editing locked
          </h1>

          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            Only pending registrations
            can be edited. This entry is
            currently{" "}
            <span className="uppercase text-primary">
              {registration.status}
            </span>
            .
          </p>

          <Button
            asChild
            className="mt-6 rounded-none"
          >
            <Link to="/my-registration">
              Back to My Registration
            </Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <EditRegistrationForm
      registration={
        registration
      }
      updateRegistration={
        updateRegistration
      }
      updatePayment={
        updatePayment
      }
      router={router}
      navigate={navigate}
    />
  );
}

function EditRegistrationForm({
  registration,
  updateRegistration,
  updatePayment,
  router,
  navigate,
}) {
  const isSquad =
    registration.game ===
    "mlbb";

  const paymentLocked =
    registration.payment_status ===
    "verified";

  const [busy, setBusy] =
    useState(false);

  const [values, setValues] =
    useState({
      team_name:
        registration.team_name ??
        "",

      team_tag:
        registration.team_tag ??
        "",

      region:
        registration.region ??
        "",

      player_name:
        registration.player_name ??
        "",

      in_game_id:
        registration.in_game_id ??
        "",

      contact_name:
        registration.contact_name ??
        "",

      contact_email:
        registration.contact_email ??
        "",

      contact_phone:
        registration.contact_phone ??
        "",

      discord:
        registration.discord ??
        "",

      payment_method:
        registration.payment_method ||
        "gcash",

      payment_reference:
        registration.payment_reference ??
        "",
    });

  const [roster, setRoster] =
    useState(() => {
      if (!isSquad) {
        return [];
      }

      const existing =
        Array.isArray(
          registration.roster,
        )
          ? registration.roster
          : [];

      return Array.from(
        { length: 5 },
        (_, index) => ({
          ign:
            existing[index]?.ign ??
            "",

          game_id:
            existing[index]
              ?.game_id ?? "",

          role:
            existing[index]?.role ??
            MLBB_ROLES[index] ??
            "",
        }),
      );
    });

  const [
    replacementReceipt,
    setReplacementReceipt,
  ] = useState(null);

  function changeValue(
    key,
    value,
  ) {
    setValues((current) => ({
      ...current,
      [key]: value,
    }));
  }

  function changePlayer(
    index,
    key,
    value,
  ) {
    setRoster((current) =>
      current.map(
        (player, playerIndex) =>
          playerIndex === index
            ? {
                ...player,
                [key]: value,
              }
            : player,
      ),
    );
  }

  function handleReceiptChange(
    event,
  ) {
    const file =
      event.target.files?.[0];

    if (!file) {
      setReplacementReceipt(
        null,
      );

      return;
    }

    if (
      !ALLOWED_RECEIPT_TYPES.includes(
        file.type,
      )
    ) {
      toast.error(
        "Receipt must be a JPEG, PNG, or WEBP image",
      );

      event.target.value = "";

      return;
    }

    if (
      file.size >
      MAX_RECEIPT_SIZE
    ) {
      toast.error(
        "Receipt image must be 5MB or smaller",
      );

      event.target.value = "";

      return;
    }

    setReplacementReceipt(
      file,
    );
  }

  function validate() {
    if (
      !values.contact_name.trim()
    ) {
      return "Contact name is required";
    }

    if (
      !values.contact_email.trim()
    ) {
      return "Contact email is required";
    }

    if (isSquad) {
      if (
        !values.team_name.trim()
      ) {
        return "Team name is required";
      }

      for (
        let index = 0;
        index < roster.length;
        index += 1
      ) {
        if (
          !roster[
            index
          ].ign.trim()
        ) {
          return `Player ${
            index + 1
          } IGN is required`;
        }

        if (
          !roster[
            index
          ].game_id.trim()
        ) {
          return `Player ${
            index + 1
          } Game ID is required`;
        }
      }
    } else if (
      !values.in_game_id.trim()
    ) {
      return "In-game ID is required";
    }

    return null;
  }

  async function uploadReceipt(
    file,
  ) {
    const extension =
      file.name
        .split(".")
        .pop()
        ?.toLowerCase() ||
      "jpg";

    const path =
      `receipts/${crypto.randomUUID()}.${extension}`;

    const {
      error: uploadError,
    } = await supabase.storage
      .from("payment-receipts")
      .upload(path, file, {
        cacheControl: "3600",
        upsert: false,
        contentType: file.type,
      });

    if (uploadError) {
      console.error(
        "Replacement receipt upload failed:",
        uploadError,
      );

      throw new Error(
        uploadError.message ||
          "Unable to upload replacement receipt",
      );
    }

    return path;
  }

  async function handleSubmit(
    event,
  ) {
    event.preventDefault();

    const validationError =
      validate();

    if (validationError) {
      toast.error(
        validationError,
      );

      return;
    }

    setBusy(true);

    try {
      // -------------------------------------
      // UPDATE REGISTRATION DETAILS
      // -------------------------------------

      const registrationPayload =
        {
          game:
            registration.game,

          region:
            values.region.trim(),

          contact_name:
            values.contact_name.trim(),

          contact_email:
            values.contact_email.trim(),

          contact_phone:
            values.contact_phone.trim(),

          discord:
            values.discord.trim(),
        };

      if (isSquad) {
        registrationPayload.team_name =
          values.team_name.trim();

        registrationPayload.team_tag =
          values.team_tag
            .trim()
            .toUpperCase();

        registrationPayload.roster =
          roster.map(
            (player) => ({
              ign:
                player.ign.trim(),

              game_id:
                player.game_id.trim(),

              role:
                player.role.trim(),
            }),
          );
      } else {
        registrationPayload.player_name =
          values.player_name.trim();

        registrationPayload.in_game_id =
          values.in_game_id.trim();
      }

      await updateRegistration({
        data: {
          id:
            registration.id,

          registration:
            registrationPayload,
        },
      });

      // -------------------------------------
      // CHECK WHETHER PAYMENT CHANGED
      // -------------------------------------

      const paymentMethodChanged =
        !paymentLocked &&
        values.payment_method !==
          registration.payment_method;

      const paymentReferenceChanged =
        !paymentLocked &&
        values.payment_reference.trim() !==
          (
            registration.payment_reference ??
            ""
          ).trim();

      const paymentChanged =
        paymentMethodChanged ||
        paymentReferenceChanged ||
        Boolean(
          replacementReceipt,
        );

      // -------------------------------------
      // UPLOAD NEW RECEIPT IF SELECTED
      // -------------------------------------

      if (
        paymentChanged &&
        !paymentLocked
      ) {
        let receiptPath;

        if (
          replacementReceipt
        ) {
          receiptPath =
            await uploadReceipt(
              replacementReceipt,
            );
        }

        const paymentData = {
          id:
            registration.id,

          payment_method:
            values.payment_method,

          payment_reference:
            values.payment_reference.trim(),
        };

        if (receiptPath) {
          paymentData.payment_receipt_path =
            receiptPath;
        }

        await updatePayment({
          data: paymentData,
        });
      }

      await router.invalidate();

      toast.success(
        paymentChanged
          ? "Registration and payment details updated"
          : "Registration updated successfully",
      );

      await navigate({
        to: "/my-registration",
      });
    } catch (error) {
      console.error(
        "Registration update failed:",
        error,
      );

      toast.error(
        error?.message ||
          "Unable to update registration",
      );
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="min-h-screen pb-24">
      <header className="border-b border-border/70 bg-secondary/20">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-8 sm:py-16">
          <Link
            to="/my-registration"
            className="inline-flex items-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />

            My Registration
          </Link>

          <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
            Edit Submission
          </p>

          <h1 className="mt-3 font-display text-4xl font-bold uppercase text-foreground sm:text-5xl">
            {isSquad
              ? "Edit Your Squad"
              : "Edit Your Fighter"}
          </h1>

          <p className="mt-4 text-sm text-muted-foreground">
            Reference{" "}
            <span className="text-primary">
              {
                registration.reference_code
              }
            </span>
          </p>

          <div className="mt-5 border border-primary/20 bg-primary/5 p-4">
            <p className="text-sm leading-6 text-muted-foreground">
              You can edit this
              submission while its
              registration status is
              pending. Once tournament
              staff approves or rejects
              the entry, editing will be
              locked.
            </p>
          </div>
        </div>
      </header>

      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-4xl px-4 py-10 sm:px-8"
      >
        {/* ENTRY DETAILS */}

        <section className="border border-border/80 bg-card/50 p-5 sm:p-7">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
            Entry Details
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {isSquad ? (
              <>
                <Field
                  label="Team Name"
                  value={
                    values.team_name
                  }
                  onChange={(value) =>
                    changeValue(
                      "team_name",
                      value,
                    )
                  }
                  maxLength={60}
                />

                <Field
                  label="Team Tag"
                  value={
                    values.team_tag
                  }
                  onChange={(value) =>
                    changeValue(
                      "team_tag",
                      value,
                    )
                  }
                  maxLength={6}
                />
              </>
            ) : (
              <>
                <Field
                  label="Player Name"
                  value={
                    values.player_name
                  }
                  onChange={(value) =>
                    changeValue(
                      "player_name",
                      value,
                    )
                  }
                  maxLength={80}
                />

                <Field
                  label="In-Game ID"
                  value={
                    values.in_game_id
                  }
                  onChange={(value) =>
                    changeValue(
                      "in_game_id",
                      value,
                    )
                  }
                  maxLength={40}
                />
              </>
            )}

            <Field
              label="Region"
              value={values.region}
              onChange={(value) =>
                changeValue(
                  "region",
                  value,
                )
              }
              maxLength={40}
            />
          </div>
        </section>

        {/* MLBB ROSTER */}

        {isSquad ? (
          <section className="mt-6 border border-border/80 bg-card/50 p-5 sm:p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
              Squad Roster
            </p>

            <div className="mt-6 space-y-5">
              {roster.map(
                (
                  player,
                  index,
                ) => (
                  <div
                    key={index}
                    className="border border-border/70 bg-background/50 p-4"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Player{" "}
                      {index + 1}
                    </p>

                    <div className="mt-4 grid gap-4 md:grid-cols-3">
                      <Field
                        label="IGN"
                        value={
                          player.ign
                        }
                        onChange={(
                          value,
                        ) =>
                          changePlayer(
                            index,
                            "ign",
                            value,
                          )
                        }
                        maxLength={
                          40
                        }
                      />

                      <Field
                        label="Game ID"
                        value={
                          player.game_id
                        }
                        onChange={(
                          value,
                        ) =>
                          changePlayer(
                            index,
                            "game_id",
                            value,
                          )
                        }
                        maxLength={
                          40
                        }
                      />

                      <div className="space-y-2">
                        <Label>
                          Role
                        </Label>

                        <select
                          value={
                            player.role
                          }
                          onChange={(
                            event,
                          ) =>
                            changePlayer(
                              index,
                              "role",
                              event
                                .target
                                .value,
                            )
                          }
                          className="h-10 w-full rounded-none border border-input bg-background px-3 text-sm text-foreground outline-none focus:border-primary"
                        >
                          {MLBB_ROLES.map(
                            (
                              role,
                            ) => (
                              <option
                                key={
                                  role
                                }
                                value={
                                  role
                                }
                              >
                                {role}
                              </option>
                            ),
                          )}
                        </select>
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>
          </section>
        ) : null}

        {/* CONTACT */}

        <section className="mt-6 border border-border/80 bg-card/50 p-5 sm:p-7">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
            Contact Information
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <Field
              label="Contact Name"
              value={
                values.contact_name
              }
              onChange={(value) =>
                changeValue(
                  "contact_name",
                  value,
                )
              }
              maxLength={80}
            />

            <Field
              label="Contact Email"
              type="email"
              value={
                values.contact_email
              }
              onChange={(value) =>
                changeValue(
                  "contact_email",
                  value,
                )
              }
              maxLength={120}
            />

            <Field
              label="Contact Phone"
              value={
                values.contact_phone
              }
              onChange={(value) =>
                changeValue(
                  "contact_phone",
                  value,
                )
              }
              maxLength={30}
            />

            <Field
              label="Discord"
              value={
                values.discord
              }
              onChange={(value) =>
                changeValue(
                  "discord",
                  value,
                )
              }
              maxLength={40}
            />
          </div>
        </section>

        {/* PAYMENT */}

        <section className="mt-6 border border-border/80 bg-card/50 p-5 sm:p-7">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-primary" />

                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
                  Payment Details
                </p>
              </div>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {paymentLocked
                  ? "Your payment has already been verified by tournament staff."
                  : "You may update your payment reference or upload a replacement receipt."}
              </p>
            </div>

            {paymentLocked ? (
              <div className="flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-emerald-400">
                <CheckCircle2 className="h-4 w-4" />

                <span className="font-mono text-[10px] uppercase tracking-[0.18em]">
                  Verified
                </span>
              </div>
            ) : (
              <span className="border border-primary/30 bg-primary/10 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                {
                  registration.payment_status
                }
              </span>
            )}
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label>
                Payment Method
              </Label>

              <select
                value={
                  values.payment_method
                }
                disabled={
                  paymentLocked
                }
                onChange={(event) =>
                  changeValue(
                    "payment_method",
                    event.target.value,
                  )
                }
                className="h-10 w-full rounded-none border border-input bg-background px-3 text-sm text-foreground outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="gcash">
                  GCash
                </option>

                <option value="bank">
                  Bank Transfer
                </option>
              </select>
            </div>

            <Field
              label="Payment Reference"
              value={
                values.payment_reference
              }
              disabled={
                paymentLocked
              }
              onChange={(value) =>
                changeValue(
                  "payment_reference",
                  value,
                )
              }
              maxLength={100}
            />
          </div>

          <div className="mt-6 border border-border/70 bg-background/50 p-5">
            <div className="flex items-center gap-2">
              <ImageUp className="h-4 w-4 text-primary" />

              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground">
                Payment Receipt
              </p>
            </div>

            <p className="mt-3 text-sm text-muted-foreground">
              Current receipt:{" "}
              <span className="text-foreground">
                {registration.has_payment_receipt
                  ? "Uploaded"
                  : "No receipt uploaded"}
              </span>
            </p>

            {!paymentLocked ? (
              <>
                <div className="mt-5">
                  <Label htmlFor="replacement-receipt">
                    Replace Receipt
                  </Label>

                  <Input
                    id="replacement-receipt"
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    onChange={
                      handleReceiptChange
                    }
                    className="mt-2 rounded-none file:mr-4 file:border-0 file:bg-transparent file:text-sm file:text-foreground"
                  />
                </div>

                <p className="mt-3 text-xs leading-5 text-muted-foreground">
                  JPEG, PNG, or WEBP
                  only. Maximum file
                  size: 5MB.
                </p>

                {replacementReceipt ? (
                  <div className="mt-4 border border-primary/20 bg-primary/5 p-3">
                    <p className="text-xs text-muted-foreground">
                      New receipt
                      selected:
                    </p>

                    <p className="mt-1 break-all text-sm text-foreground">
                      {
                        replacementReceipt.name
                      }
                    </p>
                  </div>
                ) : null}
              </>
            ) : (
              <p className="mt-4 text-xs leading-5 text-muted-foreground">
                Receipt replacement is
                disabled because this
                payment has already been
                verified.
              </p>
            )}

            {registration.payment_status ===
            "rejected" ? (
              <div className="mt-5 border border-destructive/30 bg-destructive/5 p-4">
                <p className="text-sm leading-6 text-destructive">
                  Your previous payment
                  was rejected. Update
                  the payment details or
                  upload a new receipt
                  and it will be sent
                  back for verification.
                </p>
              </div>
            ) : null}
          </div>
        </section>

        {/* ACTIONS */}

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border/70 pt-6">
          <Button
            asChild
            type="button"
            variant="ghost"
            className="h-11 rounded-none px-4 font-mono text-[10px] uppercase tracking-[0.2em]"
          >
            <Link to="/my-registration">
              Cancel
            </Link>
          </Button>

          <Button
            type="submit"
            disabled={busy}
            className="h-11 rounded-none px-6 font-mono text-[10px] uppercase tracking-[0.2em]"
          >
            <Save className="mr-2 h-4 w-4" />

            {busy
              ? "Saving..."
              : "Save Changes"}
          </Button>
        </div>
      </form>
    </main>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  maxLength,
  disabled = false,
}) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>

      <Input
        type={type}
        value={value}
        maxLength={maxLength}
        disabled={disabled}
        onChange={(event) =>
          onChange(
            event.target.value,
          )
        }
        className="rounded-none"
      />
    </div>
  );
}