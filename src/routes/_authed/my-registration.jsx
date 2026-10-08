import {
  createFileRoute,
  Link,
} from "@tanstack/react-router";

import {
  CheckCircle2,
  Clock3,
  CreditCard,
  ShieldCheck,
  Users,
  XCircle,
} from "lucide-react";

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

  rejected:
    "border-destructive/40 bg-destructive/10 text-destructive",
};

function StatusBadge({ status }) {
  const value =
    status ?? "pending";

  return (
    <span
      className={`border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] ${
        STATUS_STYLES[value] ??
        STATUS_STYLES.pending
      }`}
    >
      {value}
    </span>
  );
}

function formatDate(value) {
  if (!value) {
    return "—";
  }

  return new Date(value).toLocaleString(
    "en-PH",
    {
      dateStyle: "medium",
      timeStyle: "short",
    },
  );
}

function MyRegistrationPage() {
  const registrations =
    Route.useLoaderData();

  return (
    <main className="min-h-screen pb-24">
      <header className="border-b border-border/70 bg-secondary/20">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-8 sm:py-20">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
            Competitor Portal
          </p>

          <h1 className="mt-3 font-display text-4xl font-bold uppercase tracking-[0.03em] text-foreground sm:text-6xl">
            My Registration
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            View your tournament entry,
            registration status, and payment
            verification status.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-8">
        {!registrations.length ? (
          <div className="border border-dashed border-border/80 p-10 text-center">
            <Users className="mx-auto h-8 w-8 text-primary" />

            <h2 className="mt-5 font-display text-2xl font-bold uppercase text-foreground">
              No registration yet
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted-foreground">
              You haven't submitted a tournament
              registration using this account yet.
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
          <div className="space-y-6">
            {registrations.map(
              (registration) => {
                const isSquad =
                  registration.game ===
                  "mlbb";

                return (
                  <article
                    key={registration.id}
                    className="border border-border/80 bg-card/60"
                  >
                    <div className="border-b border-border/70 p-5 sm:p-6">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                            {isSquad
                              ? "MLBB Squad"
                              : "TEKKEN 8 Fighter"}
                            {" · "}
                            {registration.reference_code}
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

                    <div className="p-5 sm:p-6">
                      {isSquad &&
                      Array.isArray(
                        registration.roster,
                      ) ? (
                        <>
                          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                            Squad
                          </p>

                          <div className="mt-4 grid gap-px border border-border/60 bg-border/60 sm:grid-cols-2">
                            {registration.roster.map(
                              (
                                player,
                                index,
                              ) => (
                                <div
                                  key={`${player.ign}-${index}`}
                                  className="bg-background/80 px-4 py-3"
                                >
                                  <p className="text-sm font-medium text-foreground">
                                    {index +
                                      1}
                                    .{" "}
                                    {
                                      player.ign
                                    }
                                  </p>

                                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                                    {
                                      player.game_id
                                    }

                                    {player.role
                                      ? ` · ${player.role}`
                                      : ""}
                                  </p>
                                </div>
                              ),
                            )}
                          </div>
                        </>
                      ) : (
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                            Fighter
                          </p>

                          <p className="mt-3 text-lg font-medium text-foreground">
                            {registration.player_name ||
                              "—"}
                          </p>

                          <p className="mt-1 text-sm text-muted-foreground">
                            In-game ID:{" "}
                            {registration.in_game_id ||
                              "—"}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/70 px-5 py-4 sm:px-6">
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