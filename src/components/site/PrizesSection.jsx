import SectionHeading from "@/components/site/SectionHeading";

const PRIZES = [
  {
    game: "Mobile Legends: Bang Bang",
    total: "₱42,000",
    tiers: [
      { place: "Champion", amount: "₱25,000" },
      { place: "Runner-up", amount: "₱12,000" },
      { place: "Third place", amount: "₱5,000" },
    ],
  },
  {
    game: "TEKKEN 8",
    total: "₱18,000",
    tiers: [
      { place: "Champion", amount: "₱12,000" },
      { place: "Runner-up", amount: "₱4,000" },
      { place: "Third place", amount: "₱2,000" },
    ],
  },
];

export default function PrizesSection() {
  return (
    <section id="prizes" className="relative scroll-mt-24 overflow-hidden border-b border-border/70 bg-secondary/20 py-20 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeading
          eyebrow="03 — Prizes"
          title="₱60,000 on the table"
          description="Paid out in cash, split across both brackets. Champions also carry the first Project S+ title into the next HAGIT circuit event."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {PRIZES.map((prize) => (
            <div key={prize.game} className="border border-border/80 bg-card/70 p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-border/70 pb-5">
                <h3 className="font-display text-xl font-bold uppercase tracking-[0.06em] text-foreground">
                  {prize.game}
                </h3>
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">{prize.total}</span>
              </div>
              <ul className="mt-2">
                {prize.tiers.map((tier) => (
                  <li key={tier.place} className="flex items-center justify-between gap-4 border-b border-border/50 py-4 last:border-b-0">
                    <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                      {tier.place}
                    </span>
                    <span className="font-display text-xl font-bold tracking-[0.04em] text-primary">{tier.amount}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Prize pool shown in Philippine pesos, paid to the registered captain or fighter. Rosters must match the
          approved line-up at every stage — substitutes are handled by tournament staff before each series.
        </p>
      </div>
    </section>
  );
}