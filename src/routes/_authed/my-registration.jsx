import {
  createFileRoute,
  Link,
} from "@tanstack/react-router";

import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Clock3,
  CreditCard,
  ExternalLink,
  Gamepad2,
  GraduationCap,
  MapPin,
  Pencil,
  Phone,
  ShieldCheck,
  UserRound,
  Users,
  XCircle,
} from "lucide-react";

import { supabase } from "@/api/supabaseClient";
import { Button } from "@/components/ui/button";
import { listMyRegistrations } from "@/lib/server-fns";

export const Route = createFileRoute(
  "/_authed/my-registration",
)({
  loader: async () => {
    return await listMyRegistrations();
  },

  head: () => ({
    meta: [
      {
        title:
          "My Registration — Project S+",
      },
    ],
  }),

  component: MyRegistrationPage,
});

const STATUS_STYLES = {
  pending:
    "border-primary/40 bg-primary/10 text-primary",

  approved:
    "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",

  verified:
    "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",

  rejected:
    "border-destructive/40 bg-destructive/10 text-destructive",
};

function StatusBadge({
  status,
}) {
  const value =
    status ?? "pending";

  return (
    <span
      className={`border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] ${
        STATUS_STYLES[
          value
        ] ??
        STATUS_STYLES.pending
      }`}
    >
      {value}
    </span>
  );
}

function formatDate(
  value,
) {
  if (!value) {
    return "—";
  }

  const date =
    new Date(value);

  if (
    Number.isNaN(
      date.getTime(),
    )
  ) {
    return value;
  }

  return date.toLocaleString(
    "en-PH",
    {
      dateStyle: "medium",
      timeStyle: "short",
    },
  );
}

function formatBirthdate(
  value,
) {
  if (!value) {
    return "—";
  }

  const date =
    new Date(
      `${value}T00:00:00`,
    );

  if (
    Number.isNaN(
      date.getTime(),
    )
  ) {
    return value;
  }

  return date.toLocaleDateString(
    "en-PH",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );
}

function getPublicUrl(
  bucket,
  path,
) {
  if (!path) {
    return "";
  }

  const {
    data,
  } = supabase.storage
    .from(bucket)
    .getPublicUrl(path);

  return (
    data?.publicUrl ??
    ""
  );
}

function TeamIdentity({
  registration,
}) {
  const logoUrl =
    getPublicUrl(
      "team-logos",
      registration.team_logo_path,
    );

  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
      <div className="grid h-24 w-24 shrink-0 place-items-center overflow-hidden border border-border/80 bg-background/70">
        {logoUrl ? (
          <img
            src={logoUrl}
            alt={`${
              registration.team_name ||
              "Team"
            } logo`}
            className="h-full w-full object-contain p-2"
          />
        ) : (
          <Users className="h-8 w-8 text-primary/50" />
        )}
      </div>

      <div className="min-w-0">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          Team Identity
        </p>

        <h3 className="mt-2 font-display text-2xl font-bold uppercase tracking-[0.03em] text-foreground">
          {registration.team_name ||
            "Unnamed Squad"}
        </h3>

        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
          {registration.team_tag ? (
            <span>
              Tag:{" "}
              <span className="text-foreground">
                {
                  registration.team_tag
                }
              </span>
            </span>
          ) : null}

          {registration.region ? (
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-primary" />

              {
                registration.region
              }
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function DetailItem({
  label,
  children,
  icon: Icon,
  className = "",
}) {
  return (
    <div
      className={`min-w-0 ${className}`}
    >
      <p className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
        {Icon ? (
          <Icon className="h-3 w-3 text-primary/80" />
        ) : null}

        {label}
      </p>

      <div className="mt-1 break-words text-sm text-foreground">
        {children ||
          "—"}
      </div>
    </div>
  );
}

function PlayerCard({
  player,
  index,
}) {
  const photoUrl =
    getPublicUrl(
      "player-photos",
      player.player_photo_path,
    );

  const rosterType =
    player.roster_type ||
    (index < 5
      ? "main"
      : "substitute");

  const isMain =
    rosterType ===
    "main";

  return (
    <article className="overflow-hidden border border-border/80 bg-background/70">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-border/70 bg-secondary/20 px-4 py-3">
        <div>
          <p className="font-display text-lg font-bold uppercase tracking-[0.04em] text-foreground">
            Player{" "}
            {index + 1}
          </p>

          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
            {isMain
              ? "Main Roster"
              : "Substitute"}
          </p>
        </div>

        <span
          className={`border px-2 py-1 font-mono text-[9px] uppercase tracking-[0.18em] ${
            isMain
              ? "border-primary/40 bg-primary/5 text-primary"
              : "border-border text-muted-foreground"
          }`}
        >
          {isMain
            ? "Main"
            : "Sub"}
        </span>
      </header>

      <div className="p-4 sm:p-5">
        <div className="flex flex-col gap-5 sm:flex-row">
          <div className="h-28 w-28 shrink-0 overflow-hidden border border-border/80 bg-secondary/20">
            {photoUrl ? (
              <img
                src={
                  photoUrl
                }
                alt={
                  player.ign ||
                  `Player ${index + 1}`
                }
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="grid h-full w-full place-items-center">
                <UserRound className="h-9 w-9 text-primary/40" />
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <p className="font-display text-xl font-bold uppercase tracking-[0.04em] text-foreground">
              {player.ign ||
                "No IGN"}
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              {player.full_name ||
                "No full name"}
            </p>

            {player.role ? (
              <span className="mt-3 inline-flex border border-primary/30 bg-primary/5 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-primary">
                {
                  player.role
                }
              </span>
            ) : null}
          </div>
        </div>

        <div className="mt-5 grid gap-4 border-t border-border/60 pt-5 sm:grid-cols-2 lg:grid-cols-3">
          <DetailItem
            label="Full Name"
            icon={
              UserRound
            }
          >
            {
              player.full_name
            }
          </DetailItem>

          <DetailItem
            label="MLID"
            icon={
              Gamepad2
            }
          >
            {
              player.game_id
            }
          </DetailItem>

          <DetailItem
            label="Birthdate"
            icon={
              CalendarDays
            }
          >
            {formatBirthdate(
              player.birthdate,
            )}
          </DetailItem>

          <DetailItem
            label="Age"
          >
            {player.age !==
              undefined &&
            player.age !==
              null
              ? `${player.age} years old`
              : "—"}
          </DetailItem>

          <DetailItem
            label="Contact Number"
            icon={Phone}
          >
            {player.contact_number ? (
              <a
                href={`tel:${player.contact_number}`}
                className="transition-colors hover:text-primary"
              >
                {
                  player.contact_number
                }
              </a>
            ) : (
              "—"
            )}
          </DetailItem>

          <DetailItem
            label="School"
            icon={
              GraduationCap
            }
          >
            {player.school ||
              "Not provided"}
          </DetailItem>

          <DetailItem
            label="Organization"
          >
            {player.organization ||
              "Not provided"}
          </DetailItem>

          <DetailItem
            label="Facebook"
            className="sm:col-span-2"
          >
            {player.facebook_link ? (
              <a
                href={
                  player.facebook_link
                }
                target="_blank"
                rel="noreferrer"
                className="inline-flex max-w-full items-center gap-1.5 break-all text-primary hover:underline"
              >
                <span className="truncate">
                  {
                    player.facebook_link
                  }
                </span>

                <ExternalLink className="h-3.5 w-3.5 shrink-0" />
              </a>
            ) : (
              "—"
            )}
          </DetailItem>
        </div>
      </div>
    </article>
  );
}

function TekkenDetails({
  registration,
}) {
  const photoUrl =
    getPublicUrl(
      "player-photos",
      registration.player_photo_path,
    );

  return (
    <div className="flex flex-col gap-6 sm:flex-row">
      <div className="h-40 w-40 shrink-0 overflow-hidden border border-border/80 bg-secondary/20">
        {photoUrl ? (
          <img
            src={photoUrl}
            alt={
              registration.player_name ||
              "TEKKEN 8 fighter"
            }
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="grid h-full w-full place-items-center">
            <UserRound className="h-12 w-12 text-primary/40" />
          </div>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          Fighter
        </p>

        <h3 className="mt-2 font-display text-2xl font-bold uppercase tracking-[0.04em] text-foreground">
          {registration.in_game_id ||
            "Unnamed Fighter"}
        </h3>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <DetailItem
            label="Full Name"
            icon={
              UserRound
            }
          >
            {
              registration.player_name
            }
          </DetailItem>

          <DetailItem
            label="In-game ID"
            icon={
              Gamepad2
            }
          >
            {
              registration.in_game_id
            }
          </DetailItem>

          <DetailItem
            label="Region / City"
            icon={MapPin}
          >
            {registration.region ||
              "Not provided"}
          </DetailItem>
        </div>
      </div>
    </div>
  );
}

function ContactDetails({
  registration,
}) {
  return (
    <section className="border-t border-border/70 px-5 py-5 sm:px-6">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        Main Contact
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <DetailItem
          label="Contact Person"
          icon={UserRound}
        >
          {
            registration.contact_name
          }
        </DetailItem>

        <DetailItem label="Email">
          {registration.contact_email ? (
            <a
              href={`mailto:${registration.contact_email}`}
              className="break-all transition-colors hover:text-primary"
            >
              {
                registration.contact_email
              }
            </a>
          ) : (
            "—"
          )}
        </DetailItem>

        <DetailItem
          label="Mobile"
          icon={Phone}
        >
          {registration.contact_phone ? (
            <a
              href={`tel:${registration.contact_phone}`}
              className="transition-colors hover:text-primary"
            >
              {
                registration.contact_phone
              }
            </a>
          ) : (
            "Not provided"
          )}
        </DetailItem>

        <DetailItem label="Discord">
          {registration.discord ||
            "Not provided"}
        </DetailItem>
      </div>
    </section>
  );
}

function MyRegistrationPage() {
  const registrations =
    Route.useLoaderData();

  return (
    <main className="min-h-screen pb-24">
      <header className="border-b border-border/70 bg-secondary/20">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-8 sm:py-20">
          <Link
            to="/"
            className="mb-8 inline-flex items-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />

            Back to Site
          </Link>

          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
            Competitor Portal
          </p>

          <h1 className="mt-3 font-display text-4xl font-bold uppercase tracking-[0.03em] text-foreground sm:text-6xl">
            My Registration
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            View your tournament
            entry, complete roster,
            registration status, and
            payment verification
            status.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-8">
        {!registrations.length ? (
          <div className="border border-dashed border-border/80 p-10 text-center">
            <Users className="mx-auto h-8 w-8 text-primary" />

            <h2 className="mt-5 font-display text-2xl font-bold uppercase text-foreground">
              No registration yet
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted-foreground">
              You haven't submitted
              a tournament
              registration using
              this account yet.
            </p>

            <Button
              asChild
              className="mt-6 h-11 rounded-none px-6 font-mono text-[10px] uppercase tracking-[0.2em]"
            >
              <Link to="/join">
                Register now
              </Link>
            </Button>
          </div>
        ) : (
          <div className="space-y-8">
            {registrations.map(
              (
                registration,
              ) => {
                const isSquad =
                  registration.game ===
                  "mlbb";

                const canEdit =
                  registration.status ===
                  "pending";

                return (
                  <article
                    key={
                      registration.id
                    }
                    className="border border-border/80 bg-card/60"
                  >
                    {/* ENTRY HEADER */}
                    <div className="border-b border-border/70 p-5 sm:p-6">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                            {isSquad
                              ? "MLBB Squad"
                              : "TEKKEN 8 Fighter"}

                            {" · "}

                            {
                              registration.reference_code
                            }
                          </p>

                          <h2 className="mt-2 font-display text-2xl font-bold uppercase text-foreground sm:text-3xl">
                            {isSquad
                              ? registration.team_name ||
                                "Unnamed Squad"
                              : registration.in_game_id ||
                                registration.player_name ||
                                "Unnamed Fighter"}
                          </h2>

                          <p className="mt-2 text-sm text-muted-foreground">
                            Submitted{" "}
                            {formatDate(
                              registration.created_at,
                            )}
                          </p>
                        </div>

                        <StatusBadge
                          status={
                            registration.status
                          }
                        />
                      </div>
                    </div>

                    {/* STATUS */}
                    <div className="grid gap-px bg-border/60 md:grid-cols-2">
                      <section className="bg-background/80 p-5 sm:p-6">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="h-4 w-4 text-primary" />

                          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                            Registration
                          </p>
                        </div>

                        <div className="mt-4">
                          <StatusBadge
                            status={
                              registration.status
                            }
                          />
                        </div>

                        <p className="mt-4 text-sm leading-6 text-muted-foreground">
                          {registration.status ===
                          "approved"
                            ? "Your registration has been approved by tournament staff."
                            : registration.status ===
                                "rejected"
                              ? "Your registration was rejected. Contact tournament staff if you need assistance."
                              : "Your registration is waiting for staff review."}
                        </p>
                      </section>

                      <section className="bg-background/80 p-5 sm:p-6">
                        <div className="flex items-center gap-2">
                          <CreditCard className="h-4 w-4 text-primary" />

                          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                            Payment
                          </p>
                        </div>

                        <div className="mt-4">
                          <StatusBadge
                            status={
                              registration.payment_status
                            }
                          />
                        </div>

                        <div className="mt-4 space-y-2 text-sm">
                          <p className="text-muted-foreground">
                            Method:{" "}
                            <span className="uppercase text-foreground">
                              {registration.payment_method ||
                                "—"}
                            </span>
                          </p>

                          <p className="text-muted-foreground">
                            Reference:{" "}
                            <span className="text-foreground">
                              {registration.payment_reference ||
                                "Not provided"}
                            </span>
                          </p>

                          <p className="text-muted-foreground">
                            Receipt:{" "}
                            <span className="text-foreground">
                              {registration.has_payment_receipt
                                ? "Uploaded"
                                : "Not uploaded"}
                            </span>
                          </p>
                        </div>
                      </section>
                    </div>

                    {/* REGISTRATION DATA */}
                    <section className="p-5 sm:p-6">
                      {isSquad ? (
                        <>
                          <TeamIdentity
                            registration={
                              registration
                            }
                          />

                          <div className="mt-8 border-t border-border/70 pt-6">
                            <div className="flex flex-wrap items-end justify-between gap-3">
                              <div>
                                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
                                  Full Roster
                                </p>

                                <h3 className="mt-1 font-display text-2xl font-bold uppercase tracking-[0.04em] text-foreground">
                                  7 Players
                                </h3>
                              </div>

                              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                                5 Main · 2
                                Substitute
                              </p>
                            </div>

                            {Array.isArray(
                              registration.roster,
                            ) &&
                            registration
                              .roster
                              .length ? (
                              <div className="mt-5 grid gap-5 lg:grid-cols-2">
                                {registration.roster.map(
                                  (
                                    player,
                                    index,
                                  ) => (
                                    <PlayerCard
                                      key={`${
                                        player.ign ||
                                        "player"
                                      }-${index}`}
                                      player={
                                        player
                                      }
                                      index={
                                        index
                                      }
                                    />
                                  ),
                                )}
                              </div>
                            ) : (
                              <p className="mt-5 border border-dashed border-border/70 p-5 text-sm text-muted-foreground">
                                No roster
                                information
                                available.
                              </p>
                            )}
                          </div>
                        </>
                      ) : (
                        <TekkenDetails
                          registration={
                            registration
                          }
                        />
                      )}
                    </section>

                    {/* MAIN CONTACT */}
                    <ContactDetails
                      registration={
                        registration
                      }
                    />

                    {/* FOOTER */}
                    <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border/70 px-5 py-4 sm:px-6">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        {registration.status ===
                        "approved" ? (
                          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                        ) : registration.status ===
                          "rejected" ? (
                          <XCircle className="h-4 w-4 text-destructive" />
                        ) : (
                          <Clock3 className="h-4 w-4 text-primary" />
                        )}

                        Last updated{" "}
                        {formatDate(
                          registration.updated_at,
                        )}
                      </div>

                      {canEdit ? (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="h-10 rounded-none border-primary/40 px-4 font-mono text-[10px] uppercase tracking-[0.2em] text-primary hover:bg-primary/10 hover:text-primary"
                        >
                          <Link
                            to="/edit-registration"
                            search={{
                              id:
                                registration.id,
                            }}
                          >
                            <Pencil className="mr-2 h-3.5 w-3.5" />

                            Edit Submission
                          </Link>
                        </Button>
                      ) : (
                        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                          Editing locked
                        </span>
                      )}
                    </div>
                  </article>
                );
              },
            )}
          </div>
        )}
      </div>
    </main>
  );
}