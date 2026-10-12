import {
  ArrowRight,
  Plus,
} from "lucide-react";

import { Link } from "@tanstack/react-router";

export default function OpenSlotCard({
  slot,
}) {
  return (
    <Link
      to="/join"
      className="
        card-interactive
        group
        relative
        flex
        h-full
        min-h-[220px]
        flex-col
        items-center
        justify-center
        gap-3
        border
        border-dashed
        border-border/80
        p-6
        text-center
      "
    >
      <div
        className="
          card-interactive-icon
          grid
          h-10
          w-10
          place-items-center
          border
          border-primary/30
          bg-primary/5
          text-primary
          transition-all
          duration-300
          group-hover:border-primary/70
          group-hover:bg-primary/10
        "
      >
        <Plus
          className="h-4 w-4"
          strokeWidth={1.8}
        />
      </div>

      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground transition-colors duration-300 group-hover:text-foreground/70">
        Slot{" "}
        {String(slot).padStart(
          2,
          "0",
        )}
      </span>

      <span className="card-interactive-shift font-display text-lg font-bold uppercase tracking-[0.08em] text-foreground">
        Open squad slot
      </span>

      <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
        Claim it

        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
      </span>

      <div
        aria-hidden
        className="
          absolute
          inset-x-6
          bottom-5
          h-px
          origin-center
          scale-x-0
          bg-gradient-to-r
          from-transparent
          via-primary/70
          to-transparent
          transition-transform
          duration-500
          group-hover:scale-x-100
        "
      />
    </Link>
  );
}