import Reveal from "@/components/motion/Reveal";

export default function FighterList({
  fighters,
}) {
  if (!fighters.length) {
    return (
      <Reveal
        distance={16}
        duration={500}
      >
        <div className="card-interactive card-interactive-glow group relative mt-8 overflow-hidden border border-dashed border-border/60 bg-card/35 p-6 backdrop-blur-md sm:p-8">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent"
          />

          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-primary/70">
            Fighter Board
          </p>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            No fighters verified yet —
            the TEKKEN 8 bracket fills up
            as soon as staff approve the
            first solo entries.
          </p>

          <span
            aria-hidden
            className="pointer-events-none absolute bottom-0 right-0 h-7 w-7 border-b border-r border-primary/20 transition-all duration-300 group-hover:h-10 group-hover:w-10 group-hover:border-primary/40"
          />
        </div>
      </Reveal>
    );
  }

  return (
    <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {fighters.map(
        (fighter, index) => (
          <li
            key={fighter.id}
            className="h-full"
          >
            <Reveal
              delay={index * 60}
              distance={16}
              duration={500}
              className="h-full"
            >
              <article className="card-interactive group relative flex h-full items-center gap-4 overflow-hidden border border-border/55 bg-card/40 p-4 backdrop-blur-md sm:p-5">
                {/* Top sheen */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent opacity-70"
                />

                {/* Fighter number */}
                <span className="card-interactive-icon grid h-11 w-11 shrink-0 place-items-center border border-primary/25 bg-primary/[0.035] font-mono text-[10px] font-medium tracking-[0.18em] text-primary transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/[0.07]">
                  {String(
                    index + 1,
                  ).padStart(
                    2,
                    "0",
                  )}
                </span>

                {/* Fighter identity */}
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-primary/60">
                    Solo Fighter
                  </p>

                  <p className="card-interactive-shift mt-1 truncate font-display text-lg font-bold uppercase tracking-[0.04em] text-foreground">
                    {fighter.in_game_id ||
                      fighter.player_name}
                  </p>

                  <p className="mt-1 truncate font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-300 group-hover:text-foreground/70">
                    {fighter.region ||
                      "TEKKEN 8"}
                  </p>
                </div>

                {/* Accent mark */}
                <div
                  aria-hidden
                  className="ml-auto h-1.5 w-1.5 shrink-0 rotate-45 bg-primary/35 transition-all duration-300 group-hover:scale-125 group-hover:bg-primary"
                />

                {/* Corner accent */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-b border-r border-primary/15 transition-all duration-300 group-hover:h-7 group-hover:w-7 group-hover:border-primary/35"
                />
              </article>
            </Reveal>
          </li>
        ),
      )}
    </ul>
  );
}