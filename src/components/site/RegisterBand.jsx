import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import Reveal from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";

const FIST_IMAGE = "/images/site/fist.png";

const CHECKLIST = [
  "A full squad of five, or a single fighter for TEKKEN 8",
  "In-game IDs for every player on the roster",
  "One contact channel we can reach you on",
];

export default function RegisterBand() {
  return (
    <section className="relative isolate overflow-hidden border-t border-border/40">
      {/* Background artwork */}
      <Image
        src={FIST_IMAGE}
        alt="Bronze fist striking dark stone with lightning-like sparks"
        fittingType="fill"
        className="absolute inset-0 h-full w-full scale-[1.02] opacity-25 mix-blend-luminosity"
      />

      {/* Background treatment */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/45" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-background/30" />

      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-primary/[0.055] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-24">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <Reveal
            distance={14}
            duration={500}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-primary/80" />

              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary sm:text-xs sm:tracking-[0.3em]">
                05 — Claim your slot
              </p>

              <span
                aria-hidden
                className="h-1.5 w-1.5 rotate-45 border border-primary/50 bg-primary/10"
              />
            </div>
          </Reveal>

          {/* Heading */}
          <Reveal
            delay={80}
            distance={18}
            duration={550}
          >
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold uppercase leading-[0.92] tracking-[0.015em] text-foreground sm:text-5xl lg:text-6xl">
              The bracket closes when the
              slots are gone
            </h2>
          </Reveal>

          {/* Accent rule */}
          <Reveal
            delay={130}
            distance={12}
            duration={500}
          >
            <div className="mt-5 h-px w-24 bg-gradient-to-r from-primary/80 via-primary/35 to-transparent" />
          </Reveal>

          {/* Description */}
          <Reveal
            delay={170}
            distance={16}
            duration={500}
          >
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Free entry, limited slots.
              Staff review every entry
              within 48 hours — the form
              takes a squad captain about
              three minutes on a phone.
            </p>
          </Reveal>

          {/* Checklist */}
          <Reveal
            delay={230}
            distance={16}
            duration={500}
          >
            <ul className="mt-7 grid gap-3 sm:mt-8 sm:grid-cols-3">
              {CHECKLIST.map(
                (item, index) => (
                  <li
                    key={item}
                    className="card-interactive group relative overflow-hidden border border-border/50 bg-card/35 p-4 backdrop-blur-sm sm:p-5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center border border-primary/25 bg-primary/[0.04] font-mono text-[10px] text-primary">
                        {String(
                          index + 1,
                        ).padStart(
                          2,
                          "0",
                        )}
                      </span>

                      <span className="text-sm leading-6 text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80 sm:text-[15px]">
                        {item}
                      </span>
                    </div>

                    <span
                      aria-hidden
                      className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b border-r border-primary/15 transition-all duration-300 group-hover:h-6 group-hover:w-6 group-hover:border-primary/35"
                    />
                  </li>
                ),
              )}
            </ul>
          </Reveal>

          {/* CTA */}
          <Reveal
            delay={300}
            distance={16}
            duration={550}
          >
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="group glow-pulse motion-press h-14 w-full px-8 sm:w-auto"
              >
                <Link to="/join">
                  Register Now

                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>

              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:text-[11px] sm:tracking-[0.18em]">
                Limited slots · Staff verified
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}