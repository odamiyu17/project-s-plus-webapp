import SectionHeading from "@/components/site/SectionHeading";
import { Image } from "@/components/ui/image";

const ARENA_IMAGE = "/images/site/arena.png";
const FIST_IMAGE = "/images/site/fist.png";

const BRACKETS = [
  {
    game: "Mobile Legends: Bang Bang",
    tagline: "5v5 squad bracket",
    image: ARENA_IMAGE,
    imageAlt:
      "Futuristic obsidian arena floor with glowing emerald energy veins",
    lines: [
      "One squad of five",
      "16 team slots",
      "Group stage, best-of-three",
      "Playoffs single elimination",
      "Grand final best-of-five",
    ],
  },
  {
    game: "TEKKEN 8",
    tagline: "Solo fighter bracket",
    image: FIST_IMAGE,
    imageAlt:
      "Bronze fist striking dark stone, sparks fracturing like lightning",
    lines: [
      "Solo entry, no team needed",
      "32 fighter slots",
      "Double elimination",
      "Every set best-of-three",
      "Grand final best-of-five",
    ],
  },
];

const SCHEDULE = [
  {
    date: "Oct 7 – Nov 8",
    label: "Registration window",
    detail:
      "Free entry for MLBB squads and TEKKEN 8 fighters",
  },
  {
    date: "Nov 14 – 15",
    label: "MLBB group stage",
    detail:
      "Sixteen squads, best-of-three, played online",
  },
  {
    date: "Nov 21",
    label: "TEKKEN 8 bracket",
    detail:
      "Double elimination, best-of-three, played online",
  },
  {
    date: "Nov 28",
    label: "Grand finals",
    detail:
      "Best-of-five, live on the HAGIT stage",
  },
];

export default function FormatSection() {
  return (
    <section
      id="format"
      className="relative scroll-mt-24 border-b border-border/50 py-16 sm:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.012] to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeading
          eyebrow="02 — Format"
          title="Two realms, one proving ground"
          description="Pick your bracket. Both run on the same rulebook: verified rosters, best-of series, and no second chances once the playoff bracket is drawn."
        />

        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 lg:grid-cols-2">
          {BRACKETS.map((bracket) => (
            <article
              key={bracket.game}
              className="card-interactive card-interactive-glow group relative flex flex-col overflow-hidden border border-border/60 bg-card/45 backdrop-blur-md"
            >
              {/* top sheen */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-8 top-0 z-20 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent opacity-70"
              />

              {/* image */}
              <div className="relative h-44 overflow-hidden border-b border-border/50 sm:h-56">
                <Image
                  src={bracket.image}
                  alt={bracket.imageAlt}
                  fittingType="fill"
                  className="card-interactive-image absolute inset-0 h-full w-full opacity-60 group-hover:opacity-90"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="inline-flex border border-primary/20 bg-background/30 px-3 py-1 backdrop-blur-sm">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary sm:text-[11px] sm:tracking-[0.24em]">
                      {bracket.tagline}
                    </p>
                  </div>

                  <h3 className="card-interactive-shift mt-3 font-display text-2xl font-bold uppercase leading-tight tracking-[0.025em] text-foreground sm:text-3xl">
                    {bracket.game}
                  </h3>
                </div>
              </div>

              {/* format details */}
              <ul className="flex-1 p-5 sm:p-7">
                {bracket.lines.map((line, index) => (
                  <li
                    key={line}
                    className="group/row flex items-center gap-3.5 border-b border-border/35 py-3.5 text-sm leading-6 text-muted-foreground last:border-b-0 sm:gap-4 sm:text-[15px]"
                  >
                    <span className="font-mono text-[10px] tracking-[0.14em] text-primary/70 transition-colors duration-300 group-hover/row:text-primary">
                      {String(index + 1).padStart(
                        2,
                        "0",
                      )}
                    </span>

                    <span className="h-1.5 w-1.5 rotate-45 bg-primary transition-all duration-300 group-hover/row:scale-125 group-hover/row:shadow-[0_0_10px_hsl(var(--primary)/0.5)]" />

                    <span className="transition-colors duration-300 group-hover/row:text-foreground">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>

              {/* corner accent */}
              <span
                aria-hidden
                className="pointer-events-none absolute bottom-0 right-0 h-7 w-7 border-b border-r border-primary/20 transition-all duration-300 group-hover:h-10 group-hover:w-10 group-hover:border-primary/40"
              />
            </article>
          ))}
        </div>

        {/* ROAD TO THE FINAL */}
        <div className="mt-16 sm:mt-20">
          <div className="flex items-center gap-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.24em] text-primary sm:tracking-[0.28em]">
              Road to the final
            </h3>

            <span
              aria-hidden
              className="h-px flex-1 bg-gradient-to-r from-primary/35 to-transparent"
            />
          </div>

          <ol className="mt-6 border-l border-border/50 sm:mt-8">
            {SCHEDULE.map((row, index) => (
              <li
                key={row.label}
                className="group relative grid gap-2 py-4 pl-6 sm:grid-cols-[185px_1fr] sm:items-baseline sm:gap-7 sm:py-5 sm:pl-7"
              >
                <span
                  aria-hidden
                  className="absolute -left-[4px] top-[1.65rem] h-2 w-2 rotate-45 border border-primary/40 bg-background transition-all duration-300 group-hover:border-primary group-hover:bg-primary"
                />

                <span
                  aria-hidden
                  className="absolute left-0 top-[1.88rem] h-px w-5 bg-primary/45 transition-all duration-300 group-hover:w-7 group-hover:bg-primary"
                />

                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary sm:text-xs sm:tracking-[0.2em]">
                  {String(index + 1).padStart(
                    2,
                    "0",
                  )}
                  {" · "}
                  {row.date}
                </span>

                <span>
                  <span className="block font-display text-xl font-bold uppercase tracking-[0.035em] text-foreground transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl">
                    {row.label}
                  </span>

                  <span className="mt-1 block max-w-xl text-sm leading-6 text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80 sm:text-[15px]">
                    {row.detail}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}