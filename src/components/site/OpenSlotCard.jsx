import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export default function OpenSlotCard({ slot }) {
  return (
    <Link
      to="/join"
      className="flex h-full min-h-[220px] flex-col items-center justify-center gap-3 border border-dashed border-border/80 p-6 text-center transition-colors hover:border-primary/60 hover:bg-secondary/20"
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
        Slot {String(slot).padStart(2, "0")}
      </span>
      <span className="font-display text-lg font-bold uppercase tracking-[0.08em] text-foreground">
        Open squad slot
      </span>
      <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
        Claim it <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </Link>
  );
}