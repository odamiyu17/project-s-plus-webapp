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
        <div className="card-interactive mt-8 border border-dashed border-border/80 p-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            No fighters verified yet —
            the TEKKEN 8 bracket fills up
            as soon as staff approve the
            first solo entries.
          </p>
        </div>
      </Reveal>
    );
  }

  return (
    <ul className="mt-8 grid gap-px border border-border/70 bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
      {fighters.map(
        (fighter, index) => (
          <li
            key={fighter.id}
            className="bg-card/70"
          >
            <Reveal
              delay={index * 60}
              distance={16}
              duration={500}
              className="h-full"
            >
              <div className="card-interactive group flex h-full items-center gap-4 bg-card/70 p-4">
                <span
                  className="
                    card-interactive-icon
                    grid
                    h-10
                    w-10
                    shrink-0
                    place-items-center
                    border
                    border-primary/40
                    font-display
                    text-sm
                    font-bold
                    text-primary
                    transition-colors
                    duration-300
                    group-hover:border-primary/80
                    group-hover:bg-primary/10
                  "
                >
                  {String(
                    index + 1,
                  ).padStart(
                    2,
                    "0",
                  )}
                </span>

                <div className="min-w-0">
                  <p className="card-interactive-shift truncate font-display text-base font-bold uppercase tracking-[0.04em] text-foreground">
                    {fighter.in_game_id ||
                      fighter.player_name}
                  </p>

                  <p className="mt-0.5 truncate font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 group-hover:text-foreground/70">
                    {fighter.region ||
                      "TEKKEN 8"}
                  </p>
                </div>

                <div
                  aria-hidden
                  className="
                    ml-auto
                    h-1.5
                    w-1.5
                    shrink-0
                    rotate-45
                    bg-primary/40
                    transition-all
                    duration-300
                    group-hover:scale-125
                    group-hover:bg-primary
                  "
                />
              </div>
            </Reveal>
          </li>
        ),
      )}
    </ul>
  );
}