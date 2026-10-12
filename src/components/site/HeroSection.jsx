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
    <section className="relative isolate overflow-hidden border-b border-border/50">
      {/* Background image */}
      <Image
        src={HERO_IMAGE}
        alt="Esports competitor gripping a mobile device mid-match"
        fittingType="fill"
        className="absolute inset-0 h-full w-full scale-[1.03] object-cover opacity-35 mix-blend-luminosity transition-transform duration-[8000ms] ease-out hover:scale-[1.06]"
      />

      {/* Main depth overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/95 via-background/72 to-background/30" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/15 to-background/45" />

      {/* Project S+ tint */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/[0.025] via-transparent to-primary/[0.012]" />

      {/* Animated glows */}
      <div
        aria-hidden
        className="hero-glow pointer-events-none absolute -right-40 top-0 h-[32rem] w-[32rem] rounded-full bg-primary/[0.075] blur-[130px]"
      />

      <div
        aria-hidden
        className="hero-glow-delayed pointer-events-none absolute -left-44 bottom-[-8rem] h-[26rem] w-[26rem] rounded-full bg-primary/[0.035] blur-[120px]"
      />

      {/* Energy accent */}
      <div
        aria-hidden
        className="hero-energy-line pointer-events-none absolute inset-y-0 left-[58%] hidden w-px rotate-[14deg] bg-gradient-to-b from-transparent via-primary/40 to-transparent lg:block"
      />

      {/* Grid */}
      <div
        aria-hidden
        className="hero-grid pointer-events-none absolute inset-0 opacity-[0.025]"
      />

      {/* Faint oversized branding */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-2rem] top-20 hidden select-none font-display text-[16rem] font-bold uppercase leading-none tracking-[-0.05em] text-primary/[0.018] xl:block"
      >
        S+
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24 lg:pb-28 lg:pt-28">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <Reveal
            delay={80}
            distance={16}
            duration={500}
          >
            <div className="flex items-center gap-3">
              <span className="hero-rule h-px w-10 bg-primary" />

              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary sm:text-xs sm:tracking-[0.32em]">
                Hagit Esports Tournament ·
                Season 01
              </p>

              <span
                aria-hidden
                className="h-1.5 w-1.5 rotate-45 border border-primary/50 bg-primary/10"
              />
            </div>
          </Reveal>

          {/* Main title */}
          <Reveal
            delay={150}
            distance={22}
            duration={600}
          >
            <h1 className="mt-6 max-w-5xl font-display text-[clamp(3.5rem,13vw,10rem)] font-bold uppercase leading-[0.78] tracking-[-0.015em] text-foreground">
              Project{" "}
              <span className="hero-title-accent relative inline-block text-primary">
                S+
              </span>
            </h1>
          </Reveal>

          {/* Accent rule */}
          <Reveal
            delay={200}
            distance={14}
            duration={500}
          >
            <div className="mt-6 flex items-center gap-3">
              <span className="h-px w-20 bg-gradient-to-r from-primary via-primary/60 to-transparent" />

              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary/70 sm:text-[11px]">
                Passion · Purpose · Competition
              </span>
            </div>
          </Reveal>

          {/* Description */}
          <Reveal
            delay={250}
            distance={20}
            duration={600}
          >
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
              Mobile Legends: Bang Bang
              squads. TEKKEN 8 solo
              fighters. One arena where the
              next HAGIT champion is forged.
            </p>
          </Reveal>

          {/* CTA buttons */}
          <Reveal
            delay={320}
            distance={18}
            duration={600}
          >
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="group glow-pulse motion-press h-14 w-full rounded-none px-8 font-mono text-[11px] uppercase tracking-[0.2em] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_hsl(var(--primary)/0.24)] active:translate-y-0 active:scale-[0.98] sm:w-auto"
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
                className="motion-press h-14 w-full rounded-none border-border/60 bg-card/30 px-8 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/[0.05] hover:text-foreground active:translate-y-0 active:scale-[0.98] sm:w-auto"
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
            delay={380}
            distance={15}
            duration={550}
          >
            <div className="mt-6 flex items-start gap-3">
              <span
                aria-hidden
                className="mt-[0.35rem] h-1.5 w-1.5 shrink-0 rotate-45 bg-primary/60"
              />

              <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] text-muted-foreground sm:text-[11px] sm:tracking-[0.2em]">
                Registration closes Nov 8,
                2026 · Online qualifiers,
                grand finals on-site
              </p>
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <dl className="mt-14 grid grid-cols-2 gap-3 sm:mt-18 sm:grid-cols-4">
          {stats.map(
            (stat, index) => (
              <Reveal
                key={stat.label}
                delay={
                  430 + index * 80
                }
                distance={20}
                duration={550}
              >
                <div className="card-interactive group relative h-full overflow-hidden border border-border/55 bg-card/40 p-4 backdrop-blur-md sm:p-6">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent opacity-70"
                  />

                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/[0.045] blur-2xl transition-all duration-500 group-hover:bg-primary/[0.08]"
                  />

                  <dt className="relative font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-300 group-hover:text-foreground sm:text-[11px] sm:tracking-[0.2em]">
                    {stat.label}
                  </dt>

                  <dd className="card-interactive-shift relative mt-2.5 font-display text-2xl font-bold uppercase tracking-[0.035em] text-primary sm:mt-3 sm:text-3xl">
                    {stat.value}
                  </dd>

                  <span
                    aria-hidden
                    className="pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-b border-r border-primary/15 transition-all duration-300 group-hover:h-7 group-hover:w-7 group-hover:border-primary/35"
                  />
                </div>
              </Reveal>
            ),
          )}
        </dl>
      </div>
    </section>
  );
}