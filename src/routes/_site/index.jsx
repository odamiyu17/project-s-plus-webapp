import { createFileRoute } from "@tanstack/react-router";

import Reveal from "@/components/motion/Reveal";

import FormatSection from "@/components/site/FormatSection";
import HeroSection from "@/components/site/HeroSection";
import PrizesSection from "@/components/site/PrizesSection";
import RegisterBand from "@/components/site/RegisterBand";
import TeamsVault from "@/components/site/TeamsVault";
import TournamentFacts from "@/components/site/TournamentFacts";

import { listPublicEntries } from "@/lib/server-fns";

export const Route = createFileRoute("/_site/")({
  loader: () => listPublicEntries(),

  // Fresh vault on every visit —
  // newly approved squads must appear immediately.
  shouldReload: true,

  head: () => ({
    meta: [
      {
        title:
          "HAGIT Esports Tournament — Project S+",
      },
      {
        name: "description",
        content:
          "Mobile Legends: Bang Bang 5v5 squads and TEKKEN 8 solo fighters. ₱60,000 prize pool, free entry, limited slots — register for the HAGIT Esports Tournament, powered by Project S+.",
      },
      {
        property: "og:title",
        content:
          "HAGIT Esports Tournament — Project S+",
      },
      {
        property: "og:description",
        content:
          "MLBB 5v5 and TEKKEN 8 brackets. Free entry, limited slots.",
      },
      {
        property: "og:type",
        content: "website",
      },
    ],
  }),

  component: LandingPage,
});

function LandingPage() {
  const entries =
    Route.useLoaderData();

  return (
    <main>
      {/* HERO */}
      <Reveal
        distance={18}
        duration={550}
      >
        <HeroSection
          entries={entries}
        />
      </Reveal>

      {/* TOURNAMENT OVERVIEW */}
      <Reveal
        delay={60}
        distance={24}
        duration={650}
      >
        <TournamentFacts />
      </Reveal>

      {/* FORMAT */}
      <Reveal
        delay={80}
        direction="right"
        distance={28}
        duration={650}
      >
        <FormatSection />
      </Reveal>

      {/* PRIZES */}
      <Reveal
        delay={100}
        direction="left"
        distance={28}
        duration={650}
      >
        <PrizesSection />
      </Reveal>

      {/* ROSTER VAULT */}
      <Reveal
        delay={80}
        distance={24}
        duration={650}
      >
        <TeamsVault
          entries={entries}
        />
      </Reveal>

      {/* FINAL CTA */}
      <Reveal
        delay={80}
        distance={20}
        duration={600}
      >
        <RegisterBand />
      </Reveal>
    </main>
  );
}