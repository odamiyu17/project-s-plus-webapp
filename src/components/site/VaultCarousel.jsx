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

// How many "still open" tiles trail
// the verified squads on the board.
const OPEN_SLOT_TILES = 3;

const SLIDE =
  "basis-full pl-4 sm:basis-1/2 lg:basis-1/3";

export default function VaultCarousel({
  squads = [],
  openSquads = 0,
}) {
  const openSlides = Array.from({
    length: Math.min(
      openSquads,
      OPEN_SLOT_TILES,
    ),
  });

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="relative mt-10"
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
                delay={index * 70}
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
          (_, slot) => (
            <CarouselItem
              key={`open-${slot}`}
              className={SLIDE}
            >
              <Reveal
                delay={
                  (squads.length +
                    slot) *
                  70
                }
                distance={18}
                duration={550}
              >
                <div className="h-full">
                  <OpenSlotCard
                    slot={
                      squads.length +
                      slot +
                      1
                    }
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

          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="h-1.5 w-1.5 rotate-45 bg-primary/60"
            />

            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground sm:text-[10px]">
              Drag or swipe to scroll the board
            </span>
          </div>
        </div>
      </Reveal>
    </Carousel>
  );
}