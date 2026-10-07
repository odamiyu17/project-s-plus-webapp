export default function FighterList({ fighters }) {
  if (!fighters.length) {
    return (
      <p className="mt-8 border border-dashed border-border/80 p-6 text-sm leading-relaxed text-muted-foreground">
        No fighters verified yet — the TEKKEN 8 bracket fills up as soon as staff approve the first solo entries.
      </p>
    );
  }

  return (
    <ul className="mt-8 grid gap-px border border-border/70 bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
      {fighters.map((fighter, index) => (
        <li key={fighter.id} className="flex items-center gap-4 bg-card/70 p-4">
          <span className="grid h-10 w-10 shrink-0 place-items-center border border-primary/40 font-display text-sm font-bold text-primary">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="min-w-0">
            <p className="truncate font-display text-base font-bold uppercase tracking-[0.04em] text-foreground">
              {fighter.in_game_id || fighter.player_name}
            </p>
            <p className="truncate font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {fighter.region || "TEKKEN 8"}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}