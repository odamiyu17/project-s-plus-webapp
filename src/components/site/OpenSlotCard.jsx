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
      className="card-interactive card-interactive-glow group relative flex h-full min-h-[260px] flex-col items-center justify-center overflow-hidden border border-dashed border-border/55 bg-card/25 p-6 text-center backdrop-blur-md"
    >
      {/* top sheen */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent opacity-70"
      />

      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-14 right-[-3rem] h-32 w-32 rounded-full bg-primary/[0.035] blur-3xl transition-all duration-500 group-hover:bg-primary/[0.075]"
      />

      {/* faint slot number */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-4 top-3 font-display text-6xl font-bold leading-none text-primary/[0.035]"
      >
        {String(slot).padStart(
          2,
          "0",
        )}
      </span>

      {/* add icon */}
      <div className="card-interactive-icon relative grid h-12 w-12 place-items-center border border-primary/25 bg-primary/[0.04] text-primary transition-all duration-300 group-hover:border-primary/55 group-hover:bg-primary/[0.08]">
        <Plus
          className="h-5 w-5"
          strokeWidth={1.8}
        />
      </div>

      <span className="mt-5 font-mono text-[9px] uppercase tracking-[0.28em] text-primary/70">
        Slot{" "}
        {String(slot).padStart(
          2,
          "0",
        )}
      </span>

      <span className="card-interactive-shift mt-2 font-display text-xl font-bold uppercase tracking-[0.07em] text-foreground">
        Open squad slot
      </span>

      <span className="mt-2 max-w-[220px] text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
        Your squad could be the next
        verified entry on the board.
      </span>

      <span className="mt-5 inline-flex items-center gap-2 border border-primary/20 bg-primary/[0.03] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.22em] text-primary transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/[0.07]">
        Claim it

        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
      </span>

      {/* bottom accent */}
      <div
        aria-hidden
        className="absolute inset-x-8 bottom-5 h-px origin-center scale-x-0 bg-gradient-to-r from-transparent via-primary/70 to-transparent transition-transform duration-500 group-hover:scale-x-100"
      />

      {/* corner accent */}
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-7 w-7 border-b border-r border-primary/15 transition-all duration-300 group-hover:h-10 group-hover:w-10 group-hover:border-primary/40"
      />
    </Link>
  );
}