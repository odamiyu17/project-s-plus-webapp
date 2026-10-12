import { Users } from "lucide-react";

import { supabase } from "@/api/supabaseClient";

function getTeamLogoUrl(path) {
  if (!path) {
    return "";
  }

  const { data } =
    supabase.storage
      .from("team-logos")
      .getPublicUrl(path);

  return data?.publicUrl ?? "";
}

export default function SquadCard({
  squad,
  index,
}) {
  const logoUrl =
    getTeamLogoUrl(
      squad.team_logo_path,
    );

  const mainPlayers =
    Array.isArray(squad.roster)
      ? squad.roster.filter(
          (player) =>
            player.roster_type ===
              "main" ||
            !player.roster_type,
        )
      : [];

  const substitutes =
    Array.isArray(squad.roster)
      ? squad.roster.filter(
          (player) =>
            player.roster_type ===
            "substitute",
        )
      : [];

  return (
    <article className="card-interactive card-interactive-glow group relative flex h-full flex-col overflow-hidden border border-border/60 bg-card/45 p-5 backdrop-blur-md sm:p-6">
      {/* top sheen */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-70"
      />

      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-primary/[0.05] blur-3xl transition-all duration-500 group-hover:bg-primary/[0.085]"
      />

      {/* squad number / tag */}
      <div className="relative flex items-start justify-between gap-4">
        <span className="font-mono text-[9px] uppercase tracking-[0.26em] text-muted-foreground sm:text-[10px]">
          Squad{" "}
          {String(index + 1).padStart(
            2,
            "0",
          )}
        </span>

        {squad.team_tag ? (
          <span className="border border-primary/25 bg-primary/[0.04] px-2.5 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-primary transition-all duration-300 group-hover:border-primary/45 group-hover:bg-primary/[0.07] sm:text-[10px]">
            {squad.team_tag}
          </span>
        ) : null}
      </div>

      {/* TEAM IDENTITY */}
      <div className="relative mt-5 flex items-center gap-4">
        <div className="relative grid h-20 w-20 shrink-0 place-items-center overflow-hidden border border-border/60 bg-background/45 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/35 group-hover:bg-background/55 sm:h-24 sm:w-24">
          {logoUrl ? (
            <img
              src={logoUrl}
              alt={`${
                squad.team_name ||
                "Team"
              } logo`}
              className="h-full w-full object-contain p-2.5 transition-transform duration-500 group-hover:scale-[1.05]"
            />
          ) : (
            <Users className="h-7 w-7 text-primary/40" />
          )}

          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-3 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
          />
        </div>

        <div className="min-w-0">
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-primary/70">
            Team Identity
          </p>

          <h3 className="card-interactive-shift mt-1 truncate font-display text-2xl font-bold uppercase leading-tight tracking-[0.03em] text-foreground sm:text-3xl">
            {squad.team_name ||
              "Unnamed Squad"}
          </h3>

          {squad.region ? (
            <p className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px]">
              {squad.region}
            </p>
          ) : null}
        </div>
      </div>

      {/* MAIN ROSTER */}
      {mainPlayers.length ? (
        <div className="relative mt-6 border-t border-border/45 pt-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-primary/80">
              Main Roster
            </p>

            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
              {String(
                mainPlayers.length,
              ).padStart(2, "0")}
            </span>
          </div>

          <ul className="space-y-1">
            {mainPlayers.map(
              (
                player,
                playerIndex,
              ) => (
                <li
                  key={`main-${player.ign}-${playerIndex}`}
                  className="group/player grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-border/25 py-2.5 last:border-b-0"
                >
                  <span className="font-mono text-[8px] tracking-[0.16em] text-primary/50">
                    {String(
                      playerIndex + 1,
                    ).padStart(
                      2,
                      "0",
                    )}
                  </span>

                  <span className="min-w-0 truncate text-sm text-foreground transition-all duration-300 group-hover/player:translate-x-1">
                    {player.ign ||
                      `Player ${playerIndex + 1}`}
                  </span>

                  {player.role ? (
                    <span className="shrink-0 border border-primary/15 bg-primary/[0.025] px-2 py-1 font-mono text-[8px] uppercase tracking-[0.16em] text-primary/80 transition-colors duration-300 group-hover/player:border-primary/30 group-hover/player:text-primary sm:text-[9px]">
                      {player.role}
                    </span>
                  ) : null}
                </li>
              ),
            )}
          </ul>
        </div>
      ) : null}

      {/* SUBSTITUTES */}
      {substitutes.length ? (
        <div className="relative mt-5 border-t border-border/35 pt-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
              Substitutes
            </p>

            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
              {String(
                substitutes.length,
              ).padStart(2, "0")}
            </span>
          </div>

          <ul className="space-y-1">
            {substitutes.map(
              (
                player,
                playerIndex,
              ) => (
                <li
                  key={`sub-${player.ign}-${playerIndex}`}
                  className="group/player grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-border/20 py-2.5 last:border-b-0"
                >
                  <span className="font-mono text-[8px] tracking-[0.16em] text-muted-foreground/60">
                    S
                    {String(
                      playerIndex + 1,
                    ).padStart(
                      2,
                      "0",
                    )}
                  </span>

                  <span className="min-w-0 truncate text-sm text-muted-foreground transition-all duration-300 group-hover/player:translate-x-1 group-hover/player:text-foreground">
                    {player.ign ||
                      `Substitute ${playerIndex + 1}`}
                  </span>

                  {player.role ? (
                    <span className="shrink-0 border border-border/50 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.16em] text-primary/65 transition-colors duration-300 group-hover/player:border-primary/25 group-hover/player:text-primary sm:text-[9px]">
                      {player.role}
                    </span>
                  ) : null}
                </li>
              ),
            )}
          </ul>
        </div>
      ) : null}

      {/* corner accent */}
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-7 w-7 border-b border-r border-primary/20 transition-all duration-300 group-hover:h-10 group-hover:w-10 group-hover:border-primary/45"
      />
    </article>
  );
}