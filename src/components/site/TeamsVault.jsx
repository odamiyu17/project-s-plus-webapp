import { Link } from "@tanstack/react-router";

import FighterList from "@/components/site/FighterList";
import SectionHeading from "@/components/site/SectionHeading";
import VaultCarousel from "@/components/site/VaultCarousel";
import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";

const SQUAD_IMAGE = "/images/site/squad.png";

const SQUAD_SLOTS = 16;
const FIGHTER_SLOTS = 32;

export default function TeamsVault({
  entries = [],
}) {
  const squads = entries.filter(
    (entry) => entry.game === "mlbb",
  );

  const fighters = entries.filter(
    (entry) => entry.game !== "mlbb",
  );

  const openSquads = Math.max(
    SQUAD_SLOTS - squads.length,
    0,
  );

  const openFighters = Math.max(
    FIGHTER_SLOTS - fighters.length,
    0,
  );

  return (
    <section
      id="roster"
      className="relative scroll-mt-24 overflow-hidden border-b border-border/50 py-20 sm:py-28"
    >
      {/* Background artwork */}
      <Image
        src={SQUAD_IMAGE}
        alt=""
        fittingType="fill"
        className="pointer-events-none absolute inset-0 h-full w-full scale-[1.02] opacity-[0.07] mix-blend-luminosity transition-transform duration-[8000ms] ease-out"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/25 via-background/45 to-background/30"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/[0.02] via-transparent to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeading
          eyebrow="04 — Roster vault"
          title="The squads already locked in"
          description="Verified entries only. Every roster is checked by tournament staff before it appears on this board."
        />

        {/* =====================================================
            VAULT STATUS
            ===================================================== */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:max-w-2xl">
          <div className="card-interactive group relative overflow-hidden border border-border/55 bg-card/40 px-5 py-4 backdrop-blur-md">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent"
            />

            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
              MLBB Squads
            </p>

            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-display text-3xl font-bold text-primary">
                {String(
                  squads.length,
                ).padStart(2, "0")}
              </span>

              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                / {SQUAD_SLOTS} locked
              </span>
            </div>

            <div className="mt-3 h-px overflow-hidden bg-border/40">
              <div
                className="h-full bg-primary/60 transition-all duration-500"
                style={{
                  width: `${
                    (squads.length /
                      SQUAD_SLOTS) *
                    100
                  }%`,
                }}
              />
            </div>
          </div>

          <div className="card-interactive group relative overflow-hidden border border-border/55 bg-card/40 px-5 py-4 backdrop-blur-md">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent"
            />

            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
              TEKKEN 8 Fighters
            </p>

            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-display text-3xl font-bold text-primary">
                {String(
                  fighters.length,
                ).padStart(2, "0")}
              </span>

              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                / {FIGHTER_SLOTS} locked
              </span>
            </div>

            <div className="mt-3 h-px overflow-hidden bg-border/40">
              <div
                className="h-full bg-primary/60 transition-all duration-500"
                style={{
                  width: `${
                    (fighters.length /
                      FIGHTER_SLOTS) *
                    100
                  }%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* =====================================================
            MLBB DIVISION
            ===================================================== */}
        <div className="mt-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-primary/70">
                Team Division
              </p>

              <h3 className="mt-1 font-display text-2xl font-bold uppercase tracking-[0.06em] text-foreground sm:text-3xl">
                MLBB Squads
              </h3>
            </div>

            <div className="border border-border/50 bg-card/35 px-4 py-2 backdrop-blur-sm">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                <span className="text-primary">
                  {openSquads}
                </span>{" "}
                slots remaining
              </p>
            </div>
          </div>

          <div
            aria-hidden
            className="mt-5 h-px w-full bg-gradient-to-r from-primary/30 via-border/40 to-transparent"
          />

          {squads.length ? (
            <VaultCarousel
              squads={squads}
              openSquads={openSquads}
            />
          ) : (
            <div className="card-interactive card-interactive-glow group relative mt-8 flex flex-col items-start gap-6 overflow-hidden border border-border/60 bg-card/45 p-8 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent"
              />

              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-primary/70">
                  Squad Board
                </p>

                <p className="card-interactive-shift mt-2 font-display text-2xl font-bold uppercase tracking-[0.05em] text-foreground">
                  The vault is still sealed
                </p>

                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  All {SQUAD_SLOTS} squad
                  slots are open. Register
                  your team and your name
                  goes on this board once
                  staff approve your roster.
                </p>
              </div>

              <Button
                asChild
                className="h-12 shrink-0 rounded-none px-6 font-mono text-[10px] uppercase tracking-[0.22em] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_hsl(var(--primary)/0.18)] active:translate-y-0 active:scale-[0.98]"
              >
                <Link to="/join">
                  Register now
                </Link>
              </Button>

              <span
                aria-hidden
                className="pointer-events-none absolute bottom-0 right-0 h-8 w-8 border-b border-r border-primary/20 transition-all duration-300 group-hover:h-11 group-hover:w-11 group-hover:border-primary/45"
              />
            </div>
          )}
        </div>

        {/* =====================================================
            TEKKEN DIVISION
            ===================================================== */}
        <div className="mt-20 border-t border-border/35 pt-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-primary/70">
                Solo Division
              </p>

              <h3 className="mt-1 font-display text-2xl font-bold uppercase tracking-[0.06em] text-foreground sm:text-3xl">
                TEKKEN 8 Fighters
              </h3>
            </div>

            <div className="border border-border/50 bg-card/35 px-4 py-2 backdrop-blur-sm">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                <span className="text-primary">
                  {openFighters}
                </span>{" "}
                slots remaining
              </p>
            </div>
          </div>

          <div
            aria-hidden
            className="mt-5 h-px w-full bg-gradient-to-r from-primary/30 via-border/40 to-transparent"
          />

          <FighterList
            fighters={fighters}
          />
        </div>
      </div>
    </section>
  );
}