const REALMS = [
  {
    id: "mlbb",
    logo: "/images/games/mlbb-logo.png",
    name: "Mobile Legends: Bang Bang",
    tagline: "5v5 squad bracket",
    detail:
      "16 squad slots · a full roster of five · best-of-three until the grand final",
  },
  {
    id: "tekken8",
    logo: "/images/games/tekken8-logo.png",
    name: "TEKKEN 8",
    tagline: "Solo fighter bracket",
    detail:
      "32 fighter slots · 1v1 double elimination · best-of-five finals",
  },
];

export default function RealmStep({
  value,
  onSelect,
}) {
  return (
    <fieldset>
      <div className="flex flex-col gap-3 border-b border-border/45 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <legend className="font-mono text-[10px] uppercase tracking-[0.28em] text-primary">
            Step 01 — Choose your realm
          </legend>

          <h2 className="mt-2 font-display text-3xl font-bold uppercase leading-[0.95] tracking-[0.03em] text-foreground sm:text-4xl">
            Pick your battleground
          </h2>
        </div>

        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
          2 competitive divisions
        </span>
      </div>

      <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        One entry per competitor or squad.
        Pick the bracket you're fighting in —
        staff can move you later if needed.
      </p>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        {REALMS.map((realm, index) => {
          const active =
            value === realm.id;

          return (
            <button
              key={realm.id}
              type="button"
              aria-pressed={active}
              onClick={() =>
                onSelect(realm.id)
              }
              className={`
                card-interactive
                card-interactive-glow
                group
                relative
                flex
                min-h-[260px]
                flex-col
                items-start
                overflow-hidden
                border
                p-6
                text-left
                backdrop-blur-md
                transition-all
                duration-300
                ${
                  active
                    ? "border-primary/60 bg-primary/[0.07] shadow-[0_0_30px_-22px_hsl(var(--primary)/0.7)]"
                    : "border-border/55 bg-card/35 hover:border-primary/40 hover:bg-card/50"
                }
              `}
            >
              {/* top sheen */}
              <div
                aria-hidden
                className={`
                  pointer-events-none
                  absolute
                  inset-x-6
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-primary/55
                  to-transparent
                  transition-opacity
                  duration-300
                  ${
                    active
                      ? "opacity-100"
                      : "opacity-50 group-hover:opacity-80"
                  }
                `}
              />

              {/* ambient glow */}
              <div
                aria-hidden
                className={`
                  pointer-events-none
                  absolute
                  -right-14
                  -top-14
                  h-36
                  w-36
                  rounded-full
                  bg-primary
                  blur-3xl
                  transition-opacity
                  duration-500
                  ${
                    active
                      ? "opacity-[0.07]"
                      : "opacity-[0.025] group-hover:opacity-[0.05]"
                  }
                `}
              />

              {/* faint division number */}
              <span
                aria-hidden
                className="pointer-events-none absolute right-4 top-3 font-display text-7xl font-bold leading-none text-primary/[0.035]"
              >
                {String(
                  index + 1,
                ).padStart(
                  2,
                  "0",
                )}
              </span>

              {/* logo */}
              <div
                className={`
                  relative
                  grid
                  h-14
                  w-14
                  place-items-center
                  border
                  bg-background/25
                  p-2
                  transition-all
                  duration-300
                  ${
                    active
                      ? "border-primary/45"
                      : "border-border/50 group-hover:border-primary/35"
                  }
                `}
              >
                <img
                  src={realm.logo}
                  alt={`${realm.name} logo`}
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* labels */}
              <span className="mt-6 font-mono text-[9px] uppercase tracking-[0.22em] text-primary/70">
                Division{" "}
                {String(
                  index + 1,
                ).padStart(
                  2,
                  "0",
                )}
              </span>

              <span className="card-interactive-shift mt-2 font-display text-2xl font-bold uppercase leading-tight tracking-[0.04em] text-foreground">
                {realm.name}
              </span>

              <span className="mt-2 font-mono text-[9px] uppercase tracking-[0.22em] text-primary">
                {realm.tagline}
              </span>

              <span className="mt-4 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/75">
                {realm.detail}
              </span>

              {/* selected state */}
              <div className="mt-auto pt-6">
                <span
                  className={`
                    inline-flex
                    items-center
                    border
                    px-3
                    py-2
                    font-mono
                    text-[8px]
                    uppercase
                    tracking-[0.2em]
                    transition-all
                    duration-300
                    ${
                      active
                        ? "border-primary/40 bg-primary/[0.08] text-primary"
                        : "border-border/40 bg-background/20 text-muted-foreground group-hover:border-primary/25 group-hover:text-primary/80"
                    }
                  `}
                >
                  {active
                    ? "Selected"
                    : "Select division"}
                </span>
              </div>

              {/* corner accent */}
              <span
                aria-hidden
                className={`
                  pointer-events-none
                  absolute
                  bottom-0
                  right-0
                  h-7
                  w-7
                  border-b
                  border-r
                  transition-all
                  duration-300
                  ${
                    active
                      ? "border-primary/45"
                      : "border-primary/15 group-hover:h-10 group-hover:w-10 group-hover:border-primary/35"
                  }
                `}
              />
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}