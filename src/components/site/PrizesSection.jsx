import SectionHeading from "@/components/site/SectionHeading";

const PRIZES = [
  {
    game: "Mobile Legends: Bang Bang",
    total: "₱42,000",
    tiers: [
      {
        place: "Champion",
        amount: "₱25,000",
      },
      {
        place: "Runner-up",
        amount: "₱12,000",
      },
      {
        place: "Third place",
        amount: "₱5,000",
      },
    ],
  },
  {
    game: "TEKKEN 8",
    total: "₱18,000",
    tiers: [
      {
        place: "Champion",
        amount: "₱12,000",
      },
      {
        place: "Runner-up",
        amount: "₱4,000",
      },
      {
        place: "Third place",
        amount: "₱2,000",
      },
    ],
  },
];

export default function PrizesSection() {
  return (
    <section
      id="prizes"
      className="relative scroll-mt-24 overflow-hidden border-b border-border/50 py-20 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.015] to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeading
          eyebrow="03 — Prizes"
          title="₱60,000 on the table"
          description="Paid out in cash, split across both brackets. Champions also carry the first Project S+ title into the next HAGIT circuit event."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {PRIZES.map((prize, prizeIndex) => (
            <article
              key={prize.game}
              className="card-interactive card-interactive-glow group relative overflow-hidden border border-border/60 bg-card/45 p-6 backdrop-blur-md sm:p-8"
            >
              {/* top sheen */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/55 to-transparent opacity-70"
              />

              {/* subtle prize glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/[0.055] blur-3xl transition-all duration-500 group-hover:bg-primary/[0.09]"
              />

              {/* faint number */}
              <span
                aria-hidden
                className="pointer-events-none absolute right-5 top-3 font-display text-7xl font-bold leading-none text-primary/[0.035] sm:text-8xl"
              >
                0{prizeIndex + 1}
              </span>

              {/* heading */}
              <div className="relative flex flex-wrap items-start justify-between gap-5 border-b border-border/45 pb-6">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-primary/70 sm:text-[10px]">
                    Prize Pool
                  </p>

                  <h3 className="card-interactive-shift mt-2 font-display text-2xl font-bold uppercase tracking-[0.05em] text-foreground sm:text-3xl">
                    {prize.game}
                  </h3>
                </div>

                <div className="border border-primary/20 bg-primary/[0.04] px-4 py-3 text-right backdrop-blur-sm transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/[0.07]">
                  <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-muted-foreground">
                    Total
                  </p>

                  <p className="mt-1 font-display text-2xl font-bold tracking-[0.04em] text-primary sm:text-3xl">
                    {prize.total}
                  </p>
                </div>
              </div>

              {/* prize tiers */}
              <ol className="relative mt-3">
                {prize.tiers.map((tier, index) => (
                  <li
                    key={tier.place}
                    className="group/tier grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-border/35 py-5 last:border-b-0"
                  >
                    <div className="flex h-9 w-9 items-center justify-center border border-primary/15 bg-primary/[0.035] font-mono text-[9px] tracking-[0.16em] text-primary/70 transition-all duration-300 group-hover/tier:border-primary/35 group-hover/tier:text-primary">
                      {String(index + 1).padStart(
                        2,
                        "0",
                      )}
                    </div>

                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground transition-all duration-300 group-hover/tier:translate-x-1 group-hover/tier:text-foreground sm:text-[11px]">
                      {tier.place}
                    </span>

                    <span className="font-display text-xl font-bold tracking-[0.04em] text-primary transition-all duration-300 group-hover/tier:translate-x-1 group-hover/tier:drop-shadow-[0_0_10px_hsl(var(--primary)/0.25)] sm:text-2xl">
                      {tier.amount}
                    </span>
                  </li>
                ))}
              </ol>

              {/* corner accent */}
              <span
                aria-hidden
                className="pointer-events-none absolute bottom-0 right-0 h-7 w-7 border-b border-r border-primary/20 transition-all duration-300 group-hover:h-10 group-hover:w-10 group-hover:border-primary/45"
              />
            </article>
          ))}
        </div>

        <div className="mt-8 flex max-w-3xl items-start gap-4 border-l border-primary/25 pl-5">
          <span
            aria-hidden
            className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-primary/70"
          />

          <p className="text-sm leading-relaxed text-muted-foreground">
            Prize pool shown in Philippine pesos, paid to the registered
            captain or fighter. Rosters must match the approved line-up at
            every stage — substitutes are handled by tournament staff
            before each series.
          </p>
        </div>
      </div>
    </section>
  );
}