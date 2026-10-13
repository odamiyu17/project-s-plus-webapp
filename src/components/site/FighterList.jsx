import { useEffect, useMemo, useState } from "react";

import Reveal from "@/components/motion/Reveal";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SLIDE =
  "basis-full pl-4 sm:basis-1/2 lg:basis-1/3";

const AUTOPLAY_DELAY = 3200;

function FighterCard({
  fighter,
  slot,
}) {
  return (
    <article className="card-interactive group relative flex h-full min-h-[150px] items-center gap-4 overflow-hidden border border-border/55 bg-card/40 p-4 backdrop-blur-md sm:min-h-[160px] sm:p-5">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent opacity-70"
      />

      <span className="card-interactive-icon grid h-11 w-11 shrink-0 place-items-center border border-primary/25 bg-primary/[0.035] font-mono text-[10px] font-medium tracking-[0.18em] text-primary transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/[0.07]">
        {String(slot).padStart(
          2,
          "0",
        )}
      </span>

      <div className="min-w-0 flex-1">
        <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-primary/60">
          Solo Fighter
        </p>

        <p className="card-interactive-shift mt-1 truncate font-display text-lg font-bold uppercase tracking-[0.04em] text-foreground">
          {fighter.in_game_id ||
            fighter.player_name}
        </p>

        <p className="mt-1 truncate font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-300 group-hover:text-foreground/70">
          {fighter.region ||
            "TEKKEN 8"}
        </p>
      </div>

      <div
        aria-hidden
        className="ml-auto h-1.5 w-1.5 shrink-0 rotate-45 bg-primary/35 transition-all duration-300 group-hover:scale-125 group-hover:bg-primary"
      />

      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-b border-r border-primary/15 transition-all duration-300 group-hover:h-7 group-hover:w-7 group-hover:border-primary/35"
      />
    </article>
  );
}

function OpenFighterSlotCard({
  slot,
}) {
  return (
    <article className="card-interactive group relative flex h-full min-h-[150px] items-center gap-4 overflow-hidden border border-dashed border-primary/20 bg-card/25 p-4 backdrop-blur-md sm:min-h-[160px] sm:p-5">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
      />

      <span className="grid h-11 w-11 shrink-0 place-items-center border border-primary/20 bg-primary/[0.025] font-mono text-[10px] tracking-[0.18em] text-primary/70 transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/[0.05] group-hover:text-primary">
        {String(slot).padStart(
          2,
          "0",
        )}
      </span>

      <div className="min-w-0 flex-1">
        <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-primary/50">
          Fighter Slot
        </p>

        <p className="mt-1 font-display text-lg font-bold uppercase tracking-[0.04em] text-foreground/80 transition-colors duration-300 group-hover:text-foreground">
          Open Fighter Slot
        </p>

        <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
          Awaiting verified entry
        </p>
      </div>

      <div
        aria-hidden
        className="ml-auto h-1.5 w-1.5 shrink-0 rotate-45 border border-primary/30 transition-all duration-300 group-hover:scale-125 group-hover:border-primary group-hover:bg-primary/25"
      />

      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-b border-r border-primary/10 transition-all duration-300 group-hover:h-7 group-hover:w-7 group-hover:border-primary/30"
      />
    </article>
  );
}

export default function FighterList({
  fighters = [],
  openFighters = 0,
  totalSlots = 32,
}) {
  const [api, setApi] = useState(null);
  const [isPaused, setIsPaused] =
    useState(false);

  const openSlots = useMemo(() => {
    const availableSlots = Math.max(
      Math.min(
        openFighters,
        totalSlots - fighters.length,
      ),
      0,
    );

    return Array.from(
      { length: availableSlots },
      (_, index) =>
        fighters.length + index + 1,
    );
  }, [
    fighters.length,
    openFighters,
    totalSlots,
  ]);

  const totalCards =
    fighters.length + openSlots.length;

  useEffect(() => {
    if (!api || isPaused) {
      return undefined;
    }

    if (typeof window === "undefined") {
      return undefined;
    }

    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

    if (reduceMotion || totalCards <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      api.scrollNext();
    }, AUTOPLAY_DELAY);

    return () => {
      window.clearInterval(timer);
    };
  }, [api, isPaused, totalCards]);

  function pauseAutoplay() {
    setIsPaused(true);
  }

  function resumeAutoplay() {
    setIsPaused(false);
  }

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
      }}
      className="relative mt-8"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
      onFocusCapture={pauseAutoplay}
      onBlurCapture={(event) => {
        if (
          !event.currentTarget.contains(
            event.relatedTarget,
          )
        ) {
          resumeAutoplay();
        }
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-4 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
      />

      <CarouselContent>
        {fighters.map(
          (fighter, index) => (
            <CarouselItem
              key={fighter.id}
              className={SLIDE}
            >
              <Reveal
                delay={Math.min(
                  index * 55,
                  260,
                )}
                distance={16}
                duration={500}
                className="h-full"
              >
                <div className="h-full">
                  <FighterCard
                    fighter={fighter}
                    slot={index + 1}
                  />
                </div>
              </Reveal>
            </CarouselItem>
          ),
        )}

        {openSlots.map(
          (slotNumber, index) => (
            <CarouselItem
              key={`fighter-open-${slotNumber}`}
              className={SLIDE}
            >
              <Reveal
                delay={Math.min(
                  (fighters.length +
                    index) *
                    35,
                  320,
                )}
                distance={16}
                duration={500}
                className="h-full"
              >
                <div className="h-full">
                  <OpenFighterSlotCard
                    slot={slotNumber}
                  />
                </div>
              </Reveal>
            </CarouselItem>
          ),
        )}
      </CarouselContent>

      <Reveal
        delay={140}
        distance={12}
        duration={480}
      >
        <div className="mt-7 flex flex-col gap-4 border-t border-border/35 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <CarouselPrevious
              className="
                static
                left-auto
                top-auto
                h-10
                w-10
                translate-y-0
                rounded-none
                border-border/60
                bg-card/35
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-primary/50
                hover:bg-primary/[0.06]
                hover:text-primary
                hover:shadow-[0_0_18px_hsl(var(--primary)/0.12)]
                active:translate-y-0
                active:scale-95
              "
            />

            <CarouselNext
              className="
                static
                right-auto
                top-auto
                h-10
                w-10
                translate-y-0
                rounded-none
                border-border/60
                bg-card/35
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-primary/50
                hover:bg-primary/[0.06]
                hover:text-primary
                hover:shadow-[0_0_18px_hsl(var(--primary)/0.12)]
                active:translate-y-0
                active:scale-95
              "
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span
              aria-hidden
              className={`h-1.5 w-1.5 rotate-45 ${
                isPaused
                  ? "bg-muted-foreground/50"
                  : "bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.45)]"
              }`}
            />

            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground sm:text-[10px] sm:tracking-[0.22em]">
              {isPaused
                ? "Autoplay paused · drag or swipe"
                : `Autoplay · ${totalCards} fighter slots`}
            </span>
          </div>
        </div>
      </Reveal>
    </Carousel>
  );
}
