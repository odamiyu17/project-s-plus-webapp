import SectionHeading from "@/components/site/SectionHeading";
import { Image } from "@/components/ui/image";

const ARENA_IMAGE = "https://media.base44.com/images/public/6ac5d321f4c314d5b46ac183/5c426ecd0_generated_image.png";
const FIST_IMAGE = "https://media.base44.com/images/public/6ac5d321f4c314d5b46ac183/6a0ed3c0e_generated_image.png";

const BRACKETS = [
  {
    game: "Mobile Legends: Bang Bang",
    tagline: "5v5 squad bracket",
    image: ARENA_IMAGE,
    imageAlt: "Futuristic obsidian arena floor with glowing emerald energy veins",
    lines: ["One squad of five", "16 team slots", "Group stage, best-of-three", "Playoffs single elimination", "Grand final best-of-five"],
  },
  {
    game: "TEKKEN 8",
    tagline: "Solo fighter bracket",
    image: FIST_IMAGE,
    imageAlt: "Bronze fist striking dark stone, sparks fracturing like lightning",
    lines: ["Solo entry, no team needed", "32 fighter slots", "Double elimination", "Every set best-of-three", "Grand final best-of-five"],
  },
];

const SCHEDULE = [
  { date: "Oct 7 – Nov 8", label: "Registration window", detail: "Free entry for MLBB squads and TEKKEN 8 fighters" },
  { date: "Nov 14 – 15", label: "MLBB group stage", detail: "Sixteen squads, best-of-three, played online" },
  { date: "Nov 21", label: "TEKKEN 8 bracket", detail: "Double elimination, best-of-three, played online" },
  { date: "Nov 28", label: "Grand finals", detail: "Best-of-five, live on the HAGIT stage" },
];

export default function FormatSection() {
  return (
    <section id="format" className="scroll-mt-24 border-b border-border/70 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeading
          eyebrow="02 — Format"
          title="Two realms, one proving ground"
          description="Pick your bracket. Both run on the same rulebook: verified rosters, best-of series, and no second chances once the playoff bracket is drawn."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {BRACKETS.map((bracket) => (
            <article key={bracket.game} className="group flex flex-col border border-border/80 bg-card/70">
              <div className="relative h-44 overflow-hidden border-b border-border/70 sm:h-52">
                <Image
                  src={bracket.image}
                  alt={bracket.imageAlt}
                  fittingType="fill"
                  className="absolute inset-0 h-full w-full opacity-70 transition-opacity duration-500 group-hover:opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">{bracket.tagline}</p>
                  <h3 className="mt-2 font-display text-2xl font-bold uppercase leading-tight tracking-[0.02em] text-foreground">
                    {bracket.game}
                  </h3>
                </div>
              </div>
              <ul className="flex-1 p-6">
                {bracket.lines.map((line) => (
                  <li key={line} className="flex items-center gap-3 border-b border-border/50 py-3 text-sm text-muted-foreground last:border-b-0">
                    <span className="h-1.5 w-1.5 rotate-45 bg-primary" />
                    {line}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.32em] text-primary">Road to the final</h3>
          <ol className="mt-8 border-l border-border/80">
            {SCHEDULE.map((row) => (
              <li key={row.label} className="relative grid gap-1 py-5 pl-6 sm:grid-cols-[180px_1fr] sm:items-baseline sm:gap-6">
                <span aria-hidden className="absolute left-0 top-6 h-px w-4 bg-primary/60" />
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">{row.date}</span>
                <span>
                  <span className="block font-display text-lg font-bold uppercase tracking-[0.04em] text-foreground">
                    {row.label}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">{row.detail}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}