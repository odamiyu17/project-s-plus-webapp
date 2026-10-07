import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import FighterList from "@/components/site/FighterList";
import SectionHeading from "@/components/site/SectionHeading";
import VaultCarousel from "@/components/site/VaultCarousel";

const SQUAD_IMAGE = "/images/site/squad.png";
const SQUAD_SLOTS = 16;
const FIGHTER_SLOTS = 32;

export default function TeamsVault({ entries = [] }) {
  const squads = entries.filter((entry) => entry.game === "mlbb");
  const fighters = entries.filter((entry) => entry.game !== "mlbb");
  const openSquads = Math.max(SQUAD_SLOTS - squads.length, 0);
  const openFighters = Math.max(FIGHTER_SLOTS - fighters.length, 0);

  return (
    <section id="roster" className="relative scroll-mt-24 overflow-hidden border-b border-border/70 py-20 sm:py-28">
      <Image
        src={SQUAD_IMAGE}
        alt=""
        fittingType="fill"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-15"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeading
          eyebrow="04 — Roster vault"
          title="The squads already locked in"
          description="Verified entries only. Every roster is checked by tournament staff before it appears on this board."
        />

        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          <span>
            <span className="text-primary">{String(squads.length).padStart(2, "0")}</span> / {SQUAD_SLOTS} MLBB squads
            locked
          </span>
          <span>
            <span className="text-primary">{String(fighters.length).padStart(2, "0")}</span> / {FIGHTER_SLOTS} TEKKEN
            fighters locked
          </span>
        </div>

        {squads.length ? (
          <VaultCarousel squads={squads} openSquads={openSquads} />
        ) : (
          <div className="mt-10 flex flex-col items-start gap-6 border border-border/80 bg-card/60 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-xl font-bold uppercase tracking-[0.06em] text-foreground">
                The vault is still sealed
              </p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                All {SQUAD_SLOTS} squad slots are open. Register your five and your name goes on this board the moment
                staff approve your roster.
              </p>
            </div>
            <Button asChild className="h-12 shrink-0 rounded-none px-6 font-mono text-[11px] uppercase tracking-[0.22em]">
              <Link to="/join">Register now</Link>
            </Button>
          </div>
        )}

        <div className="mt-16">
          <h3 className="font-display text-xl font-bold uppercase tracking-[0.08em] text-foreground sm:text-2xl">
            TEKKEN 8 fighters
          </h3>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            {openFighters} slots remaining
          </p>
          <FighterList fighters={fighters} />
        </div>
      </div>
    </section>
  );
}