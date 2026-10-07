import { createFileRoute } from "@tanstack/react-router";
import RegistrationWizard from "@/components/registration/RegistrationWizard";

export const Route = createFileRoute("/_site/join")({
  head: () => ({
    meta: [
      { title: "Register — HAGIT Esports Tournament" },
      {
        name: "description",
        content:
          "Free entry for MLBB squads of five and TEKKEN 8 solo fighters. Submit your roster and tournament staff verify it within 48 hours.",
      },
    ],
  }),
  component: JoinPage,
});

function JoinPage() {
  return (
    <main className="pb-24">
      <header className="relative overflow-hidden border-b border-primary/15 bg-secondary/25">
        <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 py-14 sm:px-8 sm:py-20">
          <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-primary">The Crucible</p>
          <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-[0.9] tracking-[0.02em] text-foreground sm:text-6xl">
            Register your entry
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Mobile Legends: Bang Bang squads of five, or TEKKEN 8 fighters flying solo. Entry is free — slots are limited
            and staff verify every roster before it enters the vault.
          </p>
        </div>
      </header>

      <RegistrationWizard />
    </main>
  );
}