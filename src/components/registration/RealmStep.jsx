import { Gamepad2, Swords } from "lucide-react";

const REALMS = [
  {
    id: "mlbb",
    icon: Swords,
    name: "Mobile Legends: Bang Bang",
    tagline: "5v5 squad bracket",
    detail: "16 squad slots · a full roster of five · best-of-three until the grand final",
  },
  {
    id: "tekken8",
    icon: Gamepad2,
    name: "TEKKEN 8",
    tagline: "Solo fighter bracket",
    detail: "32 fighter slots · 1v1 double elimination · best-of-five finals",
  },
];

export default function RealmStep({ value, onSelect }) {
  return (
    <fieldset>
      <legend className="font-mono text-[11px] uppercase tracking-[0.32em] text-primary">Step 01 — Choose your realm</legend>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        One entry per competitor or squad. Pick the bracket you're fighting in — staff can move you later if needed.
      </p>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        {REALMS.map((realm) => {
          const Icon = realm.icon;
          const active = value === realm.id;
          return (
            <button
              key={realm.id}
              type="button"
              aria-pressed={active}
              onClick={() => onSelect(realm.id)}
              className={`flex flex-col items-start gap-3 border p-6 text-left transition-all duration-300 ${
                active
                  ? "border-primary bg-secondary/60"
                  : "border-border/80 bg-background/40 hover:border-primary/60 hover:bg-secondary/30"
              }`}
            >
              <Icon className="h-7 w-7 text-primary" strokeWidth={1.6} />
              <span className="font-display text-lg font-bold uppercase leading-tight tracking-[0.04em] text-foreground">
                {realm.name}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">{realm.tagline}</span>
              <span className="text-sm leading-relaxed text-muted-foreground">{realm.detail}</span>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}