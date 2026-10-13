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
    accent:
      "from-emerald-500/[0.12] via-primary/[0.04] to-transparent",
    glow:
      "bg-emerald-500/[0.07]",
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
    accent:
      "from-amber-500/[0.10] via-primary/[0.04] to-transparent",
    glow:
      "bg-amber-500/[0.06]",
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
    stage: "Entry Phase",
    state: "open",
  },
  {
    date: "Nov 14 – 15",
    label: "MLBB group stage",
    detail:
      "Sixteen squads, best-of-three, played online",
    stage: "Stage One",
    state: "upcoming",
  },
  {
    date: "Nov 21",
    label: "TEKKEN 8 bracket",
    detail:
      "Double elimination, best-of-three, played online",
    stage: "Stage Two",
    state: "upcoming",
  },
  {
    date: "Nov 28",
    label: "Grand finals",
    detail:
      "Best-of-five, live on the HAGIT stage",
    stage: "Final Stage",
    state: "final",
  },
];

export default function FormatSection() {
  return (
    <section
      id="format"
      className="relative isolate scroll-mt-24 overflow-hidden border-b border-border/50 py-16 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,hsl(var(--primary)/0.055),transparent_25%),radial-gradient(circle_at_84%_42%,hsl(var(--primary)/0.035),transparent_24%),linear-gradient(to_bottom,transparent,hsl(var(--primary)/0.012),transparent)]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(hsl(var(--primary)/0.35)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.35)_1px,transparent_1px)] [background-size:44px_44px]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-primary/[0.035] blur-[120px]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -right-28 top-[32rem] h-80 w-80 rounded-full bg-primary/[0.03] blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <div className="motion-rise">
          <SectionHeading
          eyebrow="02 — Format"
          title="Two realms, one proving ground"
            description="Pick your bracket. Both run on the same rulebook: verified rosters, best-of series, and no second chances once the playoff bracket is drawn."
          />
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-2">
          {BRACKETS.map((bracket, bracketIndex) => (
            <article
              key={bracket.game}
              className={`card-interactive card-interactive-glow group relative flex flex-col overflow-hidden border border-primary/10 bg-card/45 shadow-[0_24px_70px_-50px_hsl(var(--primary)/0.5)] backdrop-blur-xl transition-[transform,border-color,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_34px_90px_-56px_hsl(var(--primary)/0.6)] motion-rise ${
                bracketIndex === 0
                  ? "motion-delay-1"
                  : "motion-delay-2"
              }`}
            >
              <div
                aria-hidden
                className={`pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b ${bracket.accent} opacity-70 transition-opacity duration-500 group-hover:opacity-100`}
              />

              <div
                aria-hidden
                className={`pointer-events-none absolute -right-16 -top-20 z-0 h-52 w-52 rounded-full ${bracket.glow} blur-[90px] transition-transform duration-700 group-hover:scale-125`}
              />
              {/* top sheen */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-8 top-0 z-30 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-80 transition-all duration-500 group-hover:inset-x-4 group-hover:opacity-100"
              />

              {/* image */}
              <div className="relative h-48 overflow-hidden border-b border-primary/10 sm:h-60 lg:h-64">
                <Image
                  src={bracket.image}
                  alt={bracket.imageAlt}
                  fittingType="fill"
                  className="card-interactive-image absolute inset-0 h-full w-full scale-[1.02] opacity-55 transition-[transform,opacity,filter] duration-700 ease-out group-hover:scale-[1.07] group-hover:opacity-90 group-hover:saturate-125"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-r from-background/35 via-transparent to-background/10" />

                <div
                  aria-hidden
                  className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(transparent_50%,rgba(255,255,255,0.45)_50%)] [background-size:100%_4px]"
                />

                <div
                  aria-hidden
                  className="absolute -left-1/2 top-0 h-full w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent opacity-0 blur-sm transition-all duration-700 group-hover:left-[115%] group-hover:opacity-100"
                />

                <div className="absolute bottom-5 left-5 right-5 z-10 sm:bottom-6 sm:left-6 sm:right-6">
                  <div className="inline-flex border border-primary/25 bg-background/45 px-3 py-1.5 shadow-[inset_0_1px_0_hsl(var(--primary)/0.05)] backdrop-blur-md">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary sm:text-[11px] sm:tracking-[0.24em]">
                      {bracket.tagline}
                    </p>
                  </div>

                  <h3 className="card-interactive-shift mt-3 max-w-[90%] font-display text-2xl font-bold uppercase leading-[0.95] tracking-[0.025em] text-foreground drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)] sm:text-3xl lg:text-4xl">
                    {bracket.game}
                  </h3>
                </div>
              </div>

              {/* format details */}
              <div className="relative flex-1 bg-gradient-to-b from-background/[0.06] to-transparent">
                <div className="flex items-center justify-between border-b border-border/35 px-5 py-3 sm:px-7">
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground sm:text-[10px]">
                    Bracket Protocol
                  </span>

                  <span className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-primary/80 sm:text-[10px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.6)]" />
                    Active Format
                  </span>
                </div>

                <ul className="p-5 sm:p-7">
                {bracket.lines.map((line, index) => (
                  <li
                    key={line}
                    className="group/row relative flex items-center gap-3.5 border-b border-border/35 py-3.5 text-sm leading-6 text-muted-foreground transition-all duration-300 last:border-b-0 hover:pl-1 hover:text-foreground sm:gap-4 sm:text-[15px]"
                  >
                    <span className="font-mono text-[10px] tracking-[0.14em] text-primary/70 transition-colors duration-300 group-hover/row:text-primary">
                      {String(index + 1).padStart(
                        2,
                        "0",
                      )}
                    </span>

                    <span className="h-1.5 w-1.5 rotate-45 bg-primary transition-all duration-300 group-hover/row:scale-150 group-hover/row:shadow-[0_0_14px_hsl(var(--primary)/0.7)]" />

                    <span className="transition-[color,transform] duration-300 group-hover/row:translate-x-0.5 group-hover/row:text-foreground">
                      {line}
                    </span>
                  </li>
                ))}
                </ul>
              </div>

              {/* corner accent */}
              <span
                aria-hidden
                className="pointer-events-none absolute bottom-0 right-0 h-8 w-8 border-b border-r border-primary/25 transition-all duration-500 group-hover:h-14 group-hover:w-14 group-hover:border-primary/55"
              />
            </article>
          ))}
        </div>

        {/* ROAD TO THE FINAL */}
        <div className="motion-rise motion-delay-3 relative mt-16 overflow-hidden border border-primary/10 bg-card/30 p-4 shadow-[0_26px_80px_-54px_hsl(var(--primary)/0.5)] backdrop-blur-2xl sm:mt-20 sm:p-7 lg:p-8">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
          />

          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 top-8 h-52 w-52 rounded-full bg-primary/[0.045] blur-[100px]"
          />

          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-primary/[0.025] blur-[110px]"
          />

          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-primary/[0.015] to-transparent"
          />
          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Tournament Journey
              </p>

              <h3 className="mt-1 font-mono text-xs uppercase tracking-[0.24em] text-primary sm:tracking-[0.28em]">
                Road to the final
              </h3>
            </div>

            <div className="flex items-center gap-3 sm:min-w-[240px] sm:justify-end">
              <span
                aria-hidden
                className="h-px flex-1 bg-gradient-to-r from-primary/35 to-transparent"
              />

              <span className="inline-flex items-center gap-2 border border-primary/20 bg-background/20 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-primary/80 backdrop-blur-sm sm:text-[10px]">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.55)]" />
                4 Milestones
              </span>
            </div>
          </div>

          <ol className="relative mt-6 border-l border-primary/15 sm:mt-8">
            <span
              aria-hidden
              className="pointer-events-none absolute -left-px top-0 h-full w-px bg-gradient-to-b from-primary/80 via-primary/35 to-primary/5"
            />

            <span
              aria-hidden
              className="pointer-events-none absolute -left-[2px] top-0 h-[24%] w-[3px] bg-gradient-to-b from-primary via-primary/45 to-transparent blur-[1px]"
            />
            {SCHEDULE.map((row, index) => (
              <li
                key={row.label}
                className={`group relative py-3 pl-6 motion-rise sm:py-4 sm:pl-7 ${
                  index === 0
                    ? "motion-delay-1"
                    : index === 1
                      ? "motion-delay-2"
                      : index === 2
                        ? "motion-delay-3"
                        : "motion-delay-4"
                }`}
              >
                <span
                  aria-hidden
                  className={`absolute -left-[6px] top-7 h-3 w-3 rotate-45 border bg-background shadow-[0_0_0_4px_hsl(var(--background))] transition-all duration-300 group-hover:scale-125 ${
                    row.state === "open"
                      ? "border-primary bg-primary shadow-[0_0_18px_hsl(var(--primary)/0.5)]"
                      : row.state === "final"
                        ? "border-primary/70 bg-primary/20"
                        : "border-primary/40"
                  }`}
                />

                <span
                  aria-hidden
                  className="absolute left-0 top-[1.88rem] h-px w-5 bg-primary/40 transition-all duration-300 group-hover:w-8 group-hover:bg-primary"
                />

                <div className="relative overflow-hidden border border-border/35 bg-background/15 p-4 transition-[transform,border-color,background-color,box-shadow] duration-300 group-hover:translate-x-1 group-hover:border-primary/20 group-hover:bg-background/22 group-hover:shadow-[0_14px_36px_-30px_hsl(var(--primary)/0.4)] sm:p-5">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                  />

                  <div className="grid gap-3 sm:grid-cols-[170px_minmax(0,1fr)_auto] sm:items-center sm:gap-5">
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                        {row.stage}
                      </span>

                      <span className="mt-1 block font-mono text-[11px] uppercase tracking-[0.16em] text-primary sm:text-xs sm:tracking-[0.18em]">
                        {String(index + 1).padStart(
                          2,
                          "0",
                        )}
                        {" · "}
                        {row.date}
                      </span>
                    </div>

                    <div className="min-w-0">
                      <span className="block font-display text-xl font-bold uppercase tracking-[0.03em] text-foreground transition-[transform,color] duration-300 group-hover:translate-x-1 group-hover:text-primary sm:text-2xl">
                        {row.label}
                      </span>

                      <span className="mt-1 block max-w-xl text-sm leading-6 text-muted-foreground transition-colors duration-300 group-hover:text-foreground/85 sm:text-[15px]">
                        {row.detail}
                      </span>
                    </div>

                    <span
                      className={`inline-flex w-fit items-center gap-2 border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] sm:justify-self-end ${
                        row.state === "open"
                          ? "border-primary/30 bg-primary/[0.07] text-primary"
                          : row.state === "final"
                            ? "border-primary/25 bg-primary/[0.04] text-primary/80"
                            : "border-border/45 bg-background/15 text-muted-foreground"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          row.state === "open"
                            ? "bg-primary shadow-[0_0_9px_hsl(var(--primary)/0.6)]"
                            : row.state === "final"
                              ? "bg-primary/75"
                              : "bg-muted-foreground/55"
                        }`}
                      />

                      {row.state === "open"
                        ? "Entry Open"
                        : row.state === "final"
                          ? "Finale"
                          : "Upcoming"}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <span
            aria-hidden
            className="pointer-events-none absolute bottom-0 right-0 h-10 w-10 border-b border-r border-primary/25"
          />
        </div>
      </div>
    </section>
  );
}