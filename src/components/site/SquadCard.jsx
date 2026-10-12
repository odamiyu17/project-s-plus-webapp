import { Users } from "lucide-react";

import { supabase } from "@/api/supabaseClient";

function getTeamLogoUrl(
  path,
) {
  if (!path) {
    return "";
  }

  const { data } =
    supabase.storage
      .from("team-logos")
      .getPublicUrl(path);

  return (
    data?.publicUrl ??
    ""
  );
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
    Array.isArray(
      squad.roster,
    )
      ? squad.roster.filter(
          (player) =>
            player.roster_type ===
              "main" ||
            !player.roster_type,
        )
      : [];

  const substitutes =
    Array.isArray(
      squad.roster,
    )
      ? squad.roster.filter(
          (player) =>
            player.roster_type ===
            "substitute",
        )
      : [];

  return (
    <article className="group flex h-full flex-col border border-border/80 bg-card/70 p-5 transition-all duration-300 hover:border-primary/60 hover:bg-secondary/40">
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-muted-foreground">
          Squad{" "}
          {String(
            index + 1,
          ).padStart(
            2,
            "0",
          )}
        </span>

        {squad.team_tag ? (
          <span className="border border-primary/40 px-2 py-1 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
            {
              squad.team_tag
            }
          </span>
        ) : null}
      </div>

      {/* TEAM IDENTITY */}
      <div className="mt-5 flex items-center gap-4">
        <div className="grid h-20 w-20 shrink-0 place-items-center overflow-hidden border border-border/80 bg-background/70 transition-transform duration-300 group-hover:scale-[1.03]">
          {logoUrl ? (
            <img
              src={logoUrl}
              alt={`${
                squad.team_name ||
                "Team"
              } logo`}
              className="h-full w-full object-contain p-2"
            />
          ) : (
            <Users className="h-7 w-7 text-primary/40" />
          )}
        </div>

        <div className="min-w-0">
          <h3 className="font-display text-2xl font-bold uppercase leading-tight tracking-[0.02em] text-foreground">
            {
              squad.team_name
            }
          </h3>

          {squad.region ? (
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {
                squad.region
              }
            </p>
          ) : null}
        </div>
      </div>

      {/* MAIN ROSTER */}
      {mainPlayers.length ? (
        <div className="mt-5 border-t border-border/70 pt-4">
          <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
            Main Roster
          </p>

          <ul className="space-y-3">
            {mainPlayers.map(
              (
                player,
                playerIndex,
              ) => (
                <li
                  key={`main-${player.ign}-${playerIndex}`}
                  className="flex items-baseline justify-between gap-3"
                >
                  <span className="min-w-0 truncate text-sm text-foreground">
                    {player.ign ||
                      `Player ${playerIndex + 1}`}
                  </span>

                  {player.role ? (
                    <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-primary/90">
                      {
                        player.role
                      }
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
        <div className="mt-4 border-t border-border/50 pt-4">
          <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
            Substitutes
          </p>

          <ul className="space-y-3">
            {substitutes.map(
              (
                player,
                playerIndex,
              ) => (
                <li
                  key={`sub-${player.ign}-${playerIndex}`}
                  className="flex items-baseline justify-between gap-3"
                >
                  <span className="min-w-0 truncate text-sm text-muted-foreground">
                    {player.ign ||
                      `Substitute ${playerIndex + 1}`}
                  </span>

                  {player.role ? (
                    <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-primary/70">
                      {
                        player.role
                      }
                    </span>
                  ) : null}
                </li>
              ),
            )}
          </ul>
        </div>
      ) : null}
    </article>
  );
}