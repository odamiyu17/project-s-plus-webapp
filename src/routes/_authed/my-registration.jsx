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
    <div className="motion-fade flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
      <div className="group relative grid h-24 w-24 shrink-0 place-items-center overflow-hidden border border-primary/20 bg-card/35 backdrop-blur-sm sm:h-28 sm:w-28">
        {logoUrl ? (
          <img
            src={logoUrl}
            alt={`${
              registration.team_name ||
              "Team"
            } logo`}
            className="h-full w-full object-contain p-3 transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <Users className="h-8 w-8 text-primary/50" />
        )}
      </div>

      <div className="min-w-0">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          Team Identity
        </p>

        <h3 className="mt-2 break-words font-display text-2xl font-bold uppercase tracking-[0.03em] text-foreground sm:text-3xl">
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
      className={`min-w-0 rounded-none border border-border/35 bg-background/15 p-3 ${className}`}
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
    <article className="card-interactive card-interactive-glow motion-rise group relative min-w-0 overflow-hidden border border-border/55 bg-background/25 backdrop-blur-sm">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent"
      />
      <header className="relative flex flex-col items-start gap-3 border-b border-border/50 bg-card/35 px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-4 sm:py-4">
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
          className={`border px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.18em] ${
            isMain
              ? "border-primary/35 bg-primary/[0.06] text-primary"
              : "border-border/50 bg-background/15 text-muted-foreground"
          }`}
        >
          {isMain
            ? "Main"
            : "Sub"}
        </span>
      </header>

      <div className="p-3 sm:p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
          <div className="h-24 w-24 shrink-0 overflow-hidden border border-primary/20 bg-card/30 sm:h-28 sm:w-28">
            {photoUrl ? (
              <img
                src={
                  photoUrl
                }
                alt={
                  player.ign ||
                  `Player ${index + 1}`
                }
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            ) : (
              <div className="grid h-full w-full place-items-center">
                <UserRound className="h-9 w-9 text-primary/40" />
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <p className="break-words font-display text-lg font-bold uppercase tracking-[0.04em] text-foreground sm:text-xl">
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
                className="inline-flex max-w-full items-start gap-1.5 break-all text-primary hover:underline"
              >
                <span className="min-w-0 break-all">
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

      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-6 w-6 border-b border-r border-primary/15 transition-all duration-300 group-hover:h-9 group-hover:w-9 group-hover:border-primary/35"
      />
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
    <div className="motion-fade flex flex-col gap-5 sm:flex-row sm:gap-6">
      <div className="group relative h-32 w-32 shrink-0 overflow-hidden border border-primary/20 bg-card/30 sm:h-40 sm:w-40">
        {photoUrl ? (
          <img
            src={photoUrl}
            alt={
              registration.player_name ||
              "TEKKEN 8 fighter"
            }
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
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

        <h3 className="mt-2 break-words font-display text-xl font-bold uppercase tracking-[0.04em] text-foreground sm:text-2xl">
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
    <section className="border-t border-border/45 bg-background/10 px-4 py-5 sm:px-6 sm:py-6">
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
    <main className="relative min-h-screen overflow-x-hidden pb-20 sm:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-gradient-to-b from-primary/[0.025] via-transparent to-transparent"
      />

      <header className="relative border-b border-border/50 bg-card/20 backdrop-blur-sm">
        <div className="motion-rise mx-auto max-w-6xl px-3 py-10 sm:px-8 sm:py-20">
          <Link
            to="/"
            className="mb-6 inline-flex items-center font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary sm:mb-8 sm:text-[10px] sm:tracking-[0.2em]"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />

            Back to Site
          </Link>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="h-px w-8 bg-primary/80" />

            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-primary sm:text-[10px] sm:tracking-[0.3em]">
              Competitor Portal
            </p>

            <span
              aria-hidden
              className="h-1.5 w-1.5 rotate-45 border border-primary/50 bg-primary/10"
            />
          </div>

          <h1 className="mt-4 max-w-full break-words font-display text-4xl font-bold uppercase leading-[0.92] tracking-[0.02em] text-foreground sm:text-6xl sm:tracking-[0.03em] lg:text-7xl">
            My Registration
          </h1>

          <div className="mt-5 h-px w-24 bg-gradient-to-r from-primary/80 via-primary/35 to-transparent" />

          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            View your tournament
            entry, complete roster,
            registration status, and
            payment verification
            status.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-3 py-7 sm:px-8 sm:py-10">
        {!registrations.length ? (
          <div className="card-interactive card-interactive-glow motion-scale-in relative overflow-hidden border border-dashed border-border/55 bg-card/30 p-6 text-center backdrop-blur-md sm:p-10">
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
              className="motion-press mt-6 w-full sm:w-auto"
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
                registrationIndex,
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
                    className={`card-interactive card-interactive-glow motion-rise relative overflow-hidden border border-border/55 bg-card/40 backdrop-blur-md ${
                      registrationIndex === 0
                        ? ""
                        : registrationIndex === 1
                          ? "motion-delay-1"
                          : registrationIndex === 2
                            ? "motion-delay-2"
                            : "motion-delay-3"
                    }`}
                  >
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent"
                    />
                    {/* ENTRY HEADER */}
                    <div className="relative border-b border-border/50 p-4 sm:p-6">
                      <div className="flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:justify-between">
                        <div>
                          <p className="break-words font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground sm:text-[10px] sm:tracking-[0.22em]">
                            {isSquad
                              ? "MLBB Squad"
                              : "TEKKEN 8 Fighter"}

                            {" · "}

                            {
                              registration.reference_code
                            }
                          </p>

                          <h2 className="mt-2 break-words font-display text-2xl font-bold uppercase leading-tight text-foreground sm:text-3xl">
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
                    <div className="grid gap-3 border-b border-border/45 p-4 sm:p-6 md:grid-cols-2">
                      <section className="motion-scale-in relative min-w-0 overflow-hidden border border-border/45 bg-background/20 p-4 sm:p-6">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="h-4 w-4 text-primary" />

                          <p className="break-words font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground sm:text-[10px] sm:tracking-[0.22em]">
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

                      <section className="motion-scale-in motion-delay-1 relative min-w-0 overflow-hidden border border-border/45 bg-background/20 p-4 sm:p-6">
                        <div className="flex items-center gap-2">
                          <CreditCard className="h-4 w-4 text-primary" />

                          <p className="break-words font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground sm:text-[10px] sm:tracking-[0.22em]">
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
                    <section className="p-4 sm:p-6">
                      {isSquad ? (
                        <>
                          <TeamIdentity
                            registration={
                              registration
                            }
                          />

                          <div className="mt-8 border-t border-border/45 pt-6">
                            <div className="flex flex-col items-start gap-2 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-3">
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
                              <div className="mt-5 grid gap-4 lg:grid-cols-2">
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
                              <p className="mt-5 border border-dashed border-border/55 bg-background/15 p-5 text-sm text-muted-foreground">
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
                    <div className="flex flex-col items-stretch gap-4 border-t border-border/45 bg-background/10 px-4 py-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:px-6">
                      <div className="flex min-w-0 items-start gap-2 text-xs leading-5 text-muted-foreground sm:items-center">
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
                          className="motion-press w-full text-primary sm:w-auto"
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