import {
  Calendar,
  MapPin,
  Ticket,
  Trophy,
} from "lucide-react";

import SectionHeading from "@/components/site/SectionHeading";

const FACTS = [
  {
    icon: Calendar,
    label: "Dates",
    value: "Nov 14 – 28, 2026",
    detail:
      "Qualifiers online, finals on stage",
  },
  {
    icon: Trophy,
    label: "Brackets",
    value: "MLBB + TEKKEN 8",
    detail:
      "16 squads · 32 solo fighters",
  },
  {
    icon: Ticket,
    label: "Entry",
    value: "Free",
    detail:
      "Registration closes Nov 8, 2026",
  },
  {
    icon: MapPin,
    label: "Venue",
    value: "Online → HAGIT Arena",
    detail:
      "Grand finals played on-site",
  },
];

export default function TournamentFacts() {
  return (
    <section
      id="tournament"
      className="relative scroll-mt-24 border-b border-border/50 py-16 sm:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/[0.06] to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeading
          eyebrow="01 — The event"
          title="Forged in the HAGIT arena"
          description="Two brackets, one stage. Squads of five grind through the MLBB group stage while solo fighters survive a double-elimination TEKKEN 8 bracket — both chasing the first Project S+ title."
        />

        <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {FACTS.map((fact) => {
            const Icon = fact.icon;

            return (
              <article
                key={fact.label}
                className="card-interactive card-interactive-glow group relative min-h-[176px] border border-border/60 bg-card/45 p-5 backdrop-blur-md sm:min-h-[190px] sm:p-6"
              >
                {/* soft top sheen */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-60"
                />

                {/* icon block */}
                <div className="flex h-10 w-10 items-center justify-center border border-primary/20 bg-primary/[0.05] transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/[0.08]">
                  <Icon
                    className="card-interactive-icon h-5 w-5 text-primary"
                    strokeWidth={1.7}
                  />
                </div>

                <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground sm:mt-6 sm:text-xs sm:tracking-[0.24em]">
                  {fact.label}
                </p>

                <p className="card-interactive-shift mt-2 font-display text-2xl font-bold uppercase leading-tight tracking-[0.035em] text-foreground">
                  {fact.value}
                </p>

                <p className="mt-2 text-sm leading-6 text-muted-foreground sm:text-[15px]">
                  {fact.detail}
                </p>

                {/* subtle corner accent */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute bottom-0 right-0 h-6 w-6 border-b border-r border-primary/20 transition-all duration-300 group-hover:h-8 group-hover:w-8 group-hover:border-primary/40"
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}