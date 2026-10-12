import { createFileRoute } from "@tanstack/react-router";

import FormatSection from "@/components/site/FormatSection";
import HeroSection from "@/components/site/HeroSection";
import PrizesSection from "@/components/site/PrizesSection";
import RegisterBand from "@/components/site/RegisterBand";
import TeamsVault from "@/components/site/TeamsVault";
import TournamentFacts from "@/components/site/TournamentFacts";

import { listPublicEntries } from "@/lib/server-fns";

const BACKGROUND_SHAPES = Array.from(
  { length: 14 },
  (_, index) => index,
);

export const Route = createFileRoute("/_site/")({
  loader: () => listPublicEntries(),

  // Fresh vault on every visit.
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
    <main className="project-home relative isolate min-h-screen overflow-hidden">
      {/* =====================================================
          GLOBAL HOMEPAGE ATMOSPHERE

          Fixed behind every homepage section so the gradient
          and floating shapes feel continuous while scrolling.
          ===================================================== */}
      <div
        aria-hidden="true"
        className="project-home-atmosphere"
      >
        {/* Gold ambient glow */}
        <div className="project-home-gradient-glow project-home-gradient-glow-gold" />

        {/* Emerald ambient glow */}
        <div className="project-home-gradient-glow project-home-gradient-glow-green" />

        {/* Floating geometric shapes */}
        <ul className="project-home-shapes">
          {BACKGROUND_SHAPES.map(
            (shape) => (
              <li
                key={shape}
                className="project-home-shape"
              />
            ),
          )}
        </ul>
      </div>

      {/* =====================================================
          HOMEPAGE CONTENT
          ===================================================== */}
      <div className="relative z-10">
        <HeroSection
          entries={entries}
        />

        <TournamentFacts />

        <FormatSection />

        <PrizesSection />

        <TeamsVault
          entries={entries}
        />

        <RegisterBand />
      </div>
    </main>
  );
}