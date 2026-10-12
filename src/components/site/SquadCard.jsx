export default function SquadCard({
  squad,
  index,
}) {
  return (
    <article className="card-interactive group flex h-full flex-col border border-border/80 bg-card/70 p-5">
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-muted-foreground transition-colors duration-300 group-hover:text-foreground/70">
          Squad{" "}
          {String(index + 1).padStart(
            2,
            "0",
          )}
        </span>

        {squad.team_tag ? (
          <span
            className="
              border
              border-primary/40
              px-2
              py-1
              font-display
              text-[11px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-primary
              transition-all
              duration-300
              group-hover:border-primary/80
              group-hover:bg-primary/10
              group-hover:shadow-[0_0_14px_hsl(var(--primary)/0.12)]
            "
          >
            {squad.team_tag}
          </span>
        ) : null}
      </div>

      <h3 className="card-interactive-shift mt-4 font-display text-2xl font-bold uppercase leading-tight tracking-[0.02em] text-foreground">
        {squad.team_name}
      </h3>

      {squad.region ? (
        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 group-hover:text-foreground/70">
          {squad.region}
        </p>
      ) : null}

      <ul className="mt-5 space-y-1 border-t border-border/70 pt-4">
        {squad.roster.map(
          (player, playerIndex) => (
            <li
              key={`${player.ign}-${playerIndex}`}
              className="
                group/player
                flex
                items-baseline
                justify-between
                gap-3
                border-b
                border-border/30
                py-2
                transition-all
                duration-300
                last:border-b-0
                hover:translate-x-1
              "
            >
              <span className="min-w-0">
                <span className="block truncate text-sm text-foreground transition-colors duration-300 group-hover/player:text-primary">
                  {player.ign}
                </span>

                {player.game_id ? (
                  <span className="block truncate font-mono text-[10px] tracking-[0.14em] text-muted-foreground">
                    ID {player.game_id}
                  </span>
                ) : null}
              </span>

              {player.role ? (
                <span
                  className="
                    shrink-0
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[0.18em]
                    text-primary/90
                    transition-all
                    duration-300
                    group-hover/player:text-primary
                  "
                >
                  {player.role}
                </span>
              ) : null}
            </li>
          ),
        )}
      </ul>

      <div
        aria-hidden
        className="
          mt-auto
          pt-4
        "
      >
        <div
          className="
            h-px
            w-full
            origin-left
            scale-x-0
            bg-gradient-to-r
            from-primary/80
            via-primary/30
            to-transparent
            transition-transform
            duration-500
            group-hover:scale-x-100
          "
        />
      </div>
    </article>
  );
}