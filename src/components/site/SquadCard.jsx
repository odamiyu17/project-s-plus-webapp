export default function SquadCard({ squad, index }) {
  return (
    <article className="group flex h-full flex-col border border-border/80 bg-card/70 p-5 transition-all duration-300 hover:border-primary/60 hover:bg-secondary/40">
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-muted-foreground">
          Squad {String(index + 1).padStart(2, "0")}
        </span>
        {squad.team_tag ? (
          <span className="border border-primary/40 px-2 py-1 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
            {squad.team_tag}
          </span>
        ) : null}
      </div>

      <h3 className="mt-4 font-display text-2xl font-bold uppercase leading-tight tracking-[0.02em] text-foreground">
        {squad.team_name}
      </h3>
      {squad.region ? (
        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{squad.region}</p>
      ) : null}

      <ul className="mt-5 space-y-3 border-t border-border/70 pt-4">
        {squad.roster.map((player, playerIndex) => (
          <li key={`${player.ign}-${playerIndex}`} className="flex items-baseline justify-between gap-3">
            <span className="min-w-0">
              <span className="block truncate text-sm text-foreground">{player.ign}</span>
              {player.game_id ? (
                <span className="block truncate font-mono text-[10px] tracking-[0.14em] text-muted-foreground">
                  ID {player.game_id}
                </span>
              ) : null}
            </span>
            {player.role ? (
              <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-primary/90">
                {player.role}
              </span>
            ) : null}
          </li>
        ))}
      </ul>
    </article>
  );
}