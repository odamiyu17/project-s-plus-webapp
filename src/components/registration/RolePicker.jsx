import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";

// The five MLBB lanes, in draft order.
// The values are stored on the entry exactly as written.
const MLBB_ROLES = [
  {
    value: "Gold lane",
    short: "Gold",
    icon: "/images/roles/gold.png",
  },
  {
    value: "EXP lane",
    short: "EXP",
    icon: "/images/roles/exp.png",
  },
  {
    value: "Jungler",
    short: "Jungle",
    icon: "/images/roles/junggle.png",
  },
  {
    value: "Mid lane",
    short: "Mid",
    icon: "/images/roles/mid.png",
  },
  {
    value: "Roamer",
    short: "Roam",
    icon: "/images/roles/roam.png",
  },
];

export default function RolePicker({
  value,
  onChange,
  label = "Role",
  className,
}) {
  return (
    <div className={className}>
      <div className="flex items-end justify-between gap-3">
        <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground sm:text-[10px]">
          {label}
        </p>

        <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-muted-foreground/60">
          Optional
        </span>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-5">
        {MLBB_ROLES.map(
          (role, index) => {
            const selected =
              value === role.value;

            return (
              <button
                key={role.value}
                type="button"
                aria-pressed={selected}
                title={role.value}
                onClick={() =>
                  onChange(
                    selected
                      ? ""
                      : role.value,
                  )
                }
                className={cn(
                  [
                    "card-interactive",
                    "group",
                    "relative",
                    "flex",
                    "min-h-[112px]",
                    "flex-col",
                    "items-center",
                    "justify-center",
                    "overflow-hidden",
                    "border",
                    "px-2",
                    "py-3",
                    "text-center",
                    "transition-all",
                    "duration-300",
                  ].join(" "),
                  selected
                    ? "border-primary/55 bg-primary/[0.07] shadow-[0_0_24px_-18px_hsl(var(--primary)/0.65)]"
                    : "border-border/50 bg-background/20 hover:border-primary/35 hover:bg-primary/[0.035]",
                )}
              >
                {/* Top accent */}
                <div
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent transition-opacity duration-300",
                    selected
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-70",
                  )}
                />

                {/* Role number */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-2 top-1.5 font-mono text-[7px] tracking-[0.14em] text-primary/25"
                >
                  {String(
                    index + 1,
                  ).padStart(
                    2,
                    "0",
                  )}
                </span>

                {/* Icon */}
                <span
                  className={cn(
                    "grid h-11 w-11 place-items-center border p-1.5 transition-all duration-300",
                    selected
                      ? "border-primary/40 bg-primary/[0.07]"
                      : "border-border/50 bg-foreground/95 group-hover:border-primary/30",
                  )}
                >
                  <Image
                    src={role.icon}
                    alt=""
                    fittingType="fit"
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </span>

                {/* Role name */}
                <span
                  className={cn(
                    "mt-3 font-mono text-[9px] uppercase tracking-[0.14em] transition-colors duration-300",
                    selected
                      ? "text-primary"
                      : "text-muted-foreground group-hover:text-foreground/80",
                  )}
                >
                  {role.short}
                </span>

                {/* Selection indicator */}
                <span
                  aria-hidden
                  className={cn(
                    "mt-2 h-1.5 w-1.5 rotate-45 transition-all duration-300",
                    selected
                      ? "scale-100 bg-primary"
                      : "scale-75 bg-primary/20 group-hover:scale-100 group-hover:bg-primary/50",
                  )}
                />

                {/* Corner accent */}
                <span
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b border-r transition-all duration-300",
                    selected
                      ? "border-primary/40"
                      : "border-primary/10 group-hover:h-6 group-hover:w-6 group-hover:border-primary/30",
                  )}
                />
              </button>
            );
          },
        )}
      </div>
    </div>
  );
}