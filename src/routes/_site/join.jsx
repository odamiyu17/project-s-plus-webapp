import { createFileRoute } from "@tanstack/react-router";

import RegistrationWizard from "@/components/registration/RegistrationWizard";
import {
  AuthGateError,
  requireSignedIn,
} from "@/components/auth/AuthGate";

export const Route = createFileRoute("/_site/join")({
  ssr: false,

  beforeLoad: requireSignedIn,

  errorComponent: AuthGateError,

  head: () => ({
    meta: [
      {
        title:
          "Register — HAGIT Esports Tournament",
      },
      {
        name: "description",
        content:
          "Register your MLBB squad or TEKKEN 8 entry for the HAGIT Esports Tournament.",
      },
    ],
  }),

  component: JoinPage,
});

function JoinPage() {
  return (
    <main className="pb-24">
      <header className="relative overflow-hidden border-b border-primary/15 bg-secondary/25">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-4xl px-4 py-14 sm:px-8 sm:py-20">
          <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-primary">
            The Crucible
          </p>

          <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-[0.9] tracking-[0.02em] text-foreground sm:text-6xl">
            Register your entry
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Mobile Legends: Bang Bang squads of five,
            or TEKKEN 8 fighters flying solo. Complete
            your registration and payment, then tournament
            staff will review your entry.
          </p>
        </div>
      </header>

      <RegistrationWizard />
    </main>
  );
}