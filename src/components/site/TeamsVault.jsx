import FighterList from "@/components/site/FighterList";
import SectionHeading from "@/components/site/SectionHeading";
import VaultCarousel from "@/components/site/VaultCarousel";
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
      className="relative scroll-mt-24 overflow-hidden border-b border-border/50 py-16 sm:py-24"
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
        <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:max-w-2xl">
          <div className="card-interactive group relative overflow-hidden border border-border/55 bg-card/40 px-4 py-4 backdrop-blur-md sm:px-5">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent"
            />

            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:text-xs sm:tracking-[0.2em]">
              MLBB Squads
            </p>

            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-display text-3xl font-bold text-primary">
                {String(
                  squads.length,
                ).padStart(2, "0")}
              </span>

              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:text-[11px] sm:tracking-[0.16em]">
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

          <div className="card-interactive group relative overflow-hidden border border-border/55 bg-card/40 px-4 py-4 backdrop-blur-md sm:px-5">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent"
            />

            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:text-xs sm:tracking-[0.2em]">
              TEKKEN 8 Fighters
            </p>

            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-display text-3xl font-bold text-primary">
                {String(
                  fighters.length,
                ).padStart(2, "0")}
              </span>

              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:text-[11px] sm:tracking-[0.16em]">
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
        <div className="mt-14 sm:mt-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary/75 sm:text-xs sm:tracking-[0.2em]">
                Team Division
              </p>

              <h3 className="mt-1 font-display text-2xl font-bold uppercase tracking-[0.04em] text-foreground sm:text-3xl">
                MLBB Squads
              </h3>
            </div>

            <div className="border border-border/50 bg-card/35 px-4 py-2.5 backdrop-blur-sm">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:text-[11px]">
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

          <VaultCarousel
            squads={squads}
            openSquads={openSquads}
            totalSlots={SQUAD_SLOTS}
          />
        </div>

        {/* =====================================================
            TEKKEN DIVISION
            ===================================================== */}
        <div className="mt-16 border-t border-border/35 pt-14 sm:mt-20 sm:pt-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary/75 sm:text-xs sm:tracking-[0.2em]">
                Solo Division
              </p>

              <h3 className="mt-1 font-display text-2xl font-bold uppercase tracking-[0.04em] text-foreground sm:text-3xl">
                TEKKEN 8 Fighters
              </h3>
            </div>

            <div className="border border-border/50 bg-card/35 px-4 py-2.5 backdrop-blur-sm">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:text-[11px]">
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
            openFighters={openFighters}
            totalSlots={FIGHTER_SLOTS}
          />
        </div>
      </div>
    </section>
  );
}