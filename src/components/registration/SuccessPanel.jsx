import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SuccessPanel({ game, reference }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mt-12 border border-primary/40 bg-secondary/30 p-6 sm:p-10"
    >
      <div className="flex items-center gap-3">
        <CheckCircle2 className="h-5 w-5 text-primary" strokeWidth={1.8} />
        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-primary">Transmission received</p>
      </div>

      <h2 className="mt-5 font-display text-3xl font-bold uppercase leading-[0.95] tracking-[0.02em] text-foreground sm:text-5xl">
        Deployment confirmed
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
        Your {game === "mlbb" ? "squad" : "fighter"} entry is in the staff queue. Every roster is verified before it goes
        live — approved entries appear on the roster vault of the tournament page within 48 hours.
      </p>

      <div className="mt-9 flex flex-wrap items-end gap-x-10 gap-y-6">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Reference code</p>
          <p className="mt-2 font-display text-2xl font-bold tracking-[0.18em] text-primary">{reference}</p>
        </div>
        <Button asChild size="lg" className="h-14 rounded-none px-8 font-mono text-xs uppercase tracking-[0.22em]">
          <Link to="/" hash="roster">
            Back to the arena <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}