import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function SuccessPanel({
  game,
  reference,
}) {
  const entryType =
    game === "mlbb"
      ? "Squad"
      : "Fighter";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 18,
        scale: 0.99,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="card-interactive card-interactive-glow relative mt-12 overflow-hidden border border-primary/35 bg-card/45 p-6 backdrop-blur-md sm:p-10"
    >
      {/* top sheen */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
      />

      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/[0.07] blur-[100px]"
      />

      {/* faint success mark */}
      <CheckCircle2
        aria-hidden
        strokeWidth={1}
        className="pointer-events-none absolute right-6 top-6 h-28 w-28 text-primary/[0.025] sm:h-36 sm:w-36"
      />

      <div className="relative">
        {/* status */}
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center border border-primary/30 bg-primary/[0.06]">
            <CheckCircle2
              className="h-4 w-4 text-primary"
              strokeWidth={1.8}
            />
          </span>

          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-primary">
              Transmission received
            </p>

            <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.18em] text-muted-foreground">
              Registration successfully submitted
            </p>
          </div>
        </div>

        {/* title */}
        <h2 className="mt-7 max-w-3xl font-display text-4xl font-bold uppercase leading-[0.9] tracking-[0.02em] text-foreground sm:text-5xl lg:text-6xl">
          Deployment confirmed
        </h2>

        <div className="mt-5 h-px w-24 bg-gradient-to-r from-primary/80 via-primary/35 to-transparent" />

        {/* description */}
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Your{" "}
          {game === "mlbb"
            ? "squad"
            : "fighter"}{" "}
          entry is now in the staff review
          queue. Approved entries will appear
          in the Roster Vault once verification
          is complete.
        </p>

        {/* summary */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <div className="relative overflow-hidden border border-border/50 bg-background/20 p-5">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
              Entry type
            </p>

            <p className="mt-2 font-display text-2xl font-bold uppercase tracking-[0.05em] text-foreground">
              {entryType}
            </p>

            <span
              aria-hidden
              className="pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-b border-r border-primary/15"
            />
          </div>

          <div className="relative overflow-hidden border border-primary/30 bg-primary/[0.04] p-5">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
              Reference code
            </p>

            <p className="mt-2 break-all font-display text-2xl font-bold tracking-[0.16em] text-primary">
              {reference}
            </p>

            <span
              aria-hidden
              className="pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-b border-r border-primary/30"
            />
          </div>
        </div>

        {/* next step note */}
        <div className="mt-6 flex items-start gap-3 border border-border/40 bg-background/15 px-4 py-3">
          <span
            aria-hidden
            className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-primary/50"
          />

          <p className="text-xs leading-relaxed text-muted-foreground">
            Keep your reference code for
            future registration or payment
            follow-ups with tournament staff.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button
            asChild
            size="lg"
            className="group"
          >
            <Link
              to="/"
              hash="roster"
            >
              Back to the arena

              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>

          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
            Staff review pending
          </p>
        </div>
      </div>

      {/* corner accent */}
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-9 w-9 border-b border-r border-primary/25"
      />
    </motion.div>
  );
}