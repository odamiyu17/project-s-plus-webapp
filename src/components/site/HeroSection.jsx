import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";

const HERO_IMAGE = "/images/site/hero.png";
const SQUAD_SLOTS = 16;
const FIGHTER_SLOTS = 32;

export default function HeroSection({ entries = [] }) {
  const squads = entries.filter((entry) => entry.game === "mlbb").length;
  const fighters = entries.filter((entry) => entry.game !== "mlbb").length;

  const stats = [
    { label: "Prize pool", value: "₱60,000" },
    { label: "MLBB squad slots", value: `${Math.max(SQUAD_SLOTS - squads, 0)} left` },
    { label: "TEKKEN 8 slots", value: `${Math.max(FIGHTER_SLOTS - fighters, 0)} left` },
    { label: "Entry fee", value: "₱250" },
  ];

  return (
    <section className="relative isolate overflow-hidden border-b border-border/70">
      <Image
        src={HERO_IMAGE}
        alt="Esports competitor gripping a mobile device mid-match"
        fittingType="fill"
        className="absolute inset-0 h-full w-full opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/85 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/70" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px rotate-[14deg] bg-gradient-to-b from-transparent via-primary/40 to-transparent lg:block"
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-primary" />
          <p className="font-mono text-[10px] uppercase tracking-[0.38em] text-primary sm:text-[11px]">
            Hagit Esports Tournament · Season 01
          </p>
        </div>

        <h1 className="mt-6 font-display text-[clamp(3.2rem,13vw,9.5rem)] font-bold uppercase leading-[0.82] tracking-[0.01em] text-foreground">
          Project <span className="text-primary">S+</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-xl">
          Mobile Legends: Bang Bang squads. TEKKEN 8 solo fighters. One arena where the next HAGIT champion is forged.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button
            asChild
            size="lg"
            className="glow-pulse h-14 rounded-none px-8 font-mono text-xs uppercase tracking-[0.22em]"
          >
            <Link to="/join">
              Register Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-14 rounded-none border-border bg-background/40 px-8 font-mono text-xs uppercase tracking-[0.22em] text-foreground hover:bg-secondary/50 hover:text-foreground"
          >
            <Link to="/" hash="roster">
              See the roster
            </Link>
          </Button>
        </div>

        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
          Registration closes Nov 8, 2026 · Online qualifiers, grand finals on-site
        </p>

        <dl className="mt-14 grid grid-cols-2 gap-px border border-border/70 bg-border/60 sm:mt-16 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-background/80 p-5 backdrop-blur-sm sm:p-6">
              <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{stat.label}</dt>
              <dd className="mt-2 font-display text-xl font-bold uppercase tracking-wide text-primary sm:text-2xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}