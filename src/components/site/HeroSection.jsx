import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import Reveal from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";

const HERO_IMAGE = "/images/site/hero.png";
const SQUAD_SLOTS = 16;
const FIGHTER_SLOTS = 32;

export default function HeroSection({
  entries = [],
}) {
  const squads = entries.filter(
    (entry) => entry.game === "mlbb",
  ).length;

  const fighters = entries.filter(
    (entry) => entry.game !== "mlbb",
  ).length;

  const stats = [
    {
      label: "Prize pool",
      value: "₱60,000",
    },
    {
      label: "MLBB squad slots",
      value: `${Math.max(
        SQUAD_SLOTS - squads,
        0,
      )} left`,
    },
    {
      label: "TEKKEN 8 slots",
      value: `${Math.max(
        FIGHTER_SLOTS - fighters,
        0,
      )} left`,
    },
    {
      label: "Entry fee",
      value: "₱250",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden border-b border-border/70">
      {/* Background image */}
      <Image
        src={HERO_IMAGE}
        alt="Esports competitor gripping a mobile device mid-match"
        fittingType="fill"
        className="absolute inset-0 h-full w-full scale-[1.03] opacity-50 transition-transform duration-[8000ms] ease-out hover:scale-[1.07]"
      />

      {/* Background overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/85 to-background/40" />

      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/70" />

      {/* Animated ambient gold glow */}
      <div
        aria-hidden
        className="hero-glow pointer-events-none absolute -right-32 top-10 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-[120px]"
      />

      <div
        aria-hidden
        className="hero-glow-delayed pointer-events-none absolute -left-40 bottom-0 h-[24rem] w-[24rem] rounded-full bg-primary/5 blur-[120px]"
      />

      {/* Diagonal energy line */}
      <div
        aria-hidden
        className="hero-energy-line pointer-events-none absolute inset-y-0 left-1/2 hidden w-px rotate-[14deg] bg-gradient-to-b from-transparent via-primary/50 to-transparent lg:block"
      />

      {/* Very subtle grid */}
      <div
        aria-hidden
        className="hero-grid pointer-events-none absolute inset-0 opacity-[0.05]"
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
        {/* Eyebrow */}
        <Reveal
          delay={80}
          distance={16}
          duration={500}
        >
          <div className="flex items-center gap-3">
            <span className="hero-rule h-px w-10 bg-primary" />

            <p className="font-mono text-[10px] uppercase tracking-[0.38em] text-primary sm:text-[11px]">
              Hagit Esports Tournament ·
              Season 01
            </p>
          </div>
        </Reveal>

        {/* Main title */}
        <Reveal
          delay={150}
          distance={22}
          duration={600}
        >
          <h1 className="mt-6 font-display text-[clamp(3.2rem,13vw,9.5rem)] font-bold uppercase leading-[0.82] tracking-[0.01em] text-foreground">
            Project{" "}
            <span className="hero-title-accent relative inline-block text-primary">
              S+
            </span>
          </h1>
        </Reveal>

        {/* Description */}
        <Reveal
          delay={230}
          distance={20}
          duration={600}
        >
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-xl">
            Mobile Legends: Bang Bang
            squads. TEKKEN 8 solo
            fighters. One arena where the
            next HAGIT champion is forged.
          </p>
        </Reveal>

        {/* CTA buttons */}
        <Reveal
          delay={310}
          distance={18}
          duration={600}
        >
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="group glow-pulse h-14 rounded-none px-8 font-mono text-xs uppercase tracking-[0.22em] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_hsl(var(--primary)/0.24)] active:translate-y-0 active:scale-[0.98]"
            >
              <Link to="/join">
                Register Now

                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 rounded-none border-border bg-background/40 px-8 font-mono text-xs uppercase tracking-[0.22em] text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-secondary/50 hover:text-foreground active:translate-y-0 active:scale-[0.98]"
            >
              <Link
                to="/"
                hash="roster"
              >
                See the roster
              </Link>
            </Button>
          </div>
        </Reveal>

        {/* Registration note */}
        <Reveal
          delay={370}
          distance={15}
          duration={550}
        >
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
            Registration closes Nov 8,
            2026 · Online qualifiers,
            grand finals on-site
          </p>
        </Reveal>

        {/* Stats */}
        <dl className="mt-14 grid grid-cols-2 gap-px border border-border/70 bg-border/60 sm:mt-16 sm:grid-cols-4">
          {stats.map(
            (stat, index) => (
              <Reveal
                key={stat.label}
                delay={
                  420 + index * 80
                }
                distance={20}
                duration={550}
              >
                <div className="group relative h-full overflow-hidden bg-background/80 p-5 backdrop-blur-sm transition-all duration-300 hover:bg-secondary/40 sm:p-6">
                  {/* Hover glow */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent" />

                    <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
                  </div>

                  <dt className="relative font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                    {stat.label}
                  </dt>

                  <dd className="relative mt-2 font-display text-xl font-bold uppercase tracking-wide text-primary transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl">
                    {stat.value}
                  </dd>
                </div>
              </Reveal>
            ),
          )}
        </dl>
      </div>
    </section>
  );
}