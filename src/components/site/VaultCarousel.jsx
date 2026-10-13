import { useEffect, useMemo, useState } from "react";

import Reveal from "@/components/motion/Reveal";
import OpenSlotCard from "@/components/site/OpenSlotCard";
import SquadCard from "@/components/site/SquadCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SLIDE =
  "basis-full pl-4 sm:basis-1/2 lg:basis-1/3";

const AUTOPLAY_DELAY = 3600;

export default function VaultCarousel({
  squads = [],
  openSquads = 0,
  totalSlots = 16,
}) {
  const [api, setApi] = useState(null);
  const [isPaused, setIsPaused] =
    useState(false);

  const openSlides = useMemo(() => {
    const availableSlots = Math.max(
      Math.min(
        openSquads,
        totalSlots - squads.length,
      ),
      0,
    );

    return Array.from(
      { length: availableSlots },
      (_, index) =>
        squads.length + index + 1,
    );
  }, [
    openSquads,
    squads.length,
    totalSlots,
  ]);

  const totalCards =
    squads.length + openSlides.length;

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
      className="relative mt-10"
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
      {/* Subtle board line */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-4 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"
      />

      <CarouselContent>
        {squads.map(
          (squad, index) => (
            <CarouselItem
              key={squad.id}
              className={SLIDE}
            >
              <Reveal
                delay={Math.min(
                  index * 70,
                  280,
                )}
                distance={18}
                duration={550}
              >
                <div className="h-full">
                  <SquadCard
                    squad={squad}
                    index={index}
                  />
                </div>
              </Reveal>
            </CarouselItem>
          ),
        )}

        {openSlides.map(
          (slotNumber, index) => (
            <CarouselItem
              key={`open-${slotNumber}`}
              className={SLIDE}
            >
              <Reveal
                delay={Math.min(
                  (squads.length +
                    index) *
                    45,
                  360,
                )}
                distance={18}
                duration={550}
              >
                <div className="h-full">
                  <OpenSlotCard
                    slot={slotNumber}
                  />
                </div>
              </Reveal>
            </CarouselItem>
          ),
        )}
      </CarouselContent>

      <Reveal
        delay={150}
        distance={12}
        duration={500}
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
                : `Autoplay · ${totalCards} tournament slots`}
            </span>
          </div>
        </div>
      </Reveal>
    </Carousel>
  );
}
