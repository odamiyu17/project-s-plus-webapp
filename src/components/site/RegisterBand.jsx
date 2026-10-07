import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
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
    <section className="relative isolate overflow-hidden">
      <Image
        src={FIST_IMAGE}
        alt="Bronze fist striking dark stone with lightning-like sparks"
        fittingType="fill"
        className="absolute inset-0 h-full w-full opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/50" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-primary">05 — Claim your slot</p>
          </div>
          <h2 className="mt-5 font-display text-3xl font-bold uppercase leading-[0.95] tracking-[0.02em] text-foreground sm:text-5xl">
            The bracket closes when the slots are gone
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Free entry, limited slots. Staff review every entry within 48 hours — the form takes a squad captain about
            three minutes on a phone.
          </p>

          <ul className="mt-8 space-y-3">
            {CHECKLIST.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground sm:text-base">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-primary" />
                {item}
              </li>
            ))}
          </ul>

          <Button
            asChild
            size="lg"
            className="glow-pulse mt-10 h-14 rounded-none px-8 font-mono text-xs uppercase tracking-[0.22em]"
          >
            <Link to="/join">
              Register Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}