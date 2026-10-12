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
      className="mt-10"
    >
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
        <div className="mt-6 flex items-center justify-between gap-4">
          <div className="flex gap-2">
            <CarouselPrevious
              className="
                static
                left-auto
                top-auto
                h-10
                w-10
                translate-y-0
                rounded-none
                border-border/80
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-primary/60
                hover:bg-secondary/60
                hover:text-primary
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
                border-border/80
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-primary/60
                hover:bg-secondary/60
                hover:text-primary
                active:translate-y-0
                active:scale-95
              "
            />
          </div>

          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Drag or swipe to scroll the
            board
          </span>
        </div>
      </Reveal>
    </Carousel>
  );
}