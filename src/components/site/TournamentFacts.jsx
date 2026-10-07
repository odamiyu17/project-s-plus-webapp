import { Calendar, MapPin, Ticket, Trophy } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";

const FACTS = [
  { icon: Calendar, label: "Dates", value: "Nov 14 – 28, 2026", detail: "Qualifiers online, finals on stage" },
  { icon: Trophy, label: "Brackets", value: "MLBB + TEKKEN 8", detail: "16 squads · 32 solo fighters" },
  { icon: Ticket, label: "Entry", value: "Free", detail: "Registration closes Nov 8, 2026" },
  { icon: MapPin, label: "Venue", value: "Online → HAGIT Arena", detail: "Grand finals played on-site" },
];

export default function TournamentFacts() {
  return (
    <section id="tournament" className="scroll-mt-24 border-b border-border/70 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeading
          eyebrow="01 — The event"
          title="Forged in the HAGIT arena"
          description="Two brackets, one stage. Squads of five grind through the MLBB group stage while solo fighters survive a double-elimination TEKKEN 8 bracket — both chasing the first Project S+ title."
        />

        <div className="mt-14 grid gap-px border border-border/70 bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
          {FACTS.map((fact) => {
            const Icon = fact.icon;
            return (
              <div key={fact.label} className="bg-card/70 p-6">
                <Icon className="h-5 w-5 text-primary" strokeWidth={1.7} />
                <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                  {fact.label}
                </p>
                <p className="mt-2 font-display text-lg font-bold uppercase tracking-[0.04em] text-foreground">
                  {fact.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{fact.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}