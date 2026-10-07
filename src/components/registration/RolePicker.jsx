import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";

// The five MLBB lanes, in draft order. The values are stored on the entry exactly as written.
const MLBB_ROLES = [
  {
    value: "Gold lane",
    short: "Gold",
    icon: "https://media.base44.com/images/public/6ac5d321f4c314d5b46ac183/85e965d84_gold.png",
  },
  {
    value: "EXP lane",
    short: "EXP",
    icon: "https://media.base44.com/images/public/6ac5d321f4c314d5b46ac183/5fd555cc4_exp.png",
  },
  {
    value: "Jungler",
    short: "Jungle",
    icon: "https://media.base44.com/images/public/6ac5d321f4c314d5b46ac183/60caacf70_junggle.png",
  },
  {
    value: "Mid lane",
    short: "Mid",
    icon: "https://media.base44.com/images/public/6ac5d321f4c314d5b46ac183/e1edf8eab_mid.png",
  },
  {
    value: "Roamer",
    short: "Roam",
    icon: "https://media.base44.com/images/public/6ac5d321f4c314d5b46ac183/f301c3349_roam.png",
  },
];

export default function RolePicker({ value, onChange, label = "Role", className }) {
  return (
    <div className={className}>
      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">{label}</p>
      <div className="mt-2 grid grid-cols-5 gap-2">
        {MLBB_ROLES.map((role) => {
          const selected = value === role.value;
          return (
            <button
              key={role.value}
              type="button"
              aria-pressed={selected}
              title={role.value}
              onClick={() => onChange(selected ? "" : role.value)}
              className={cn(
                "flex flex-col items-center gap-2 border px-1 py-2 transition-colors",
                selected
                  ? "border-primary bg-primary/10"
                  : "border-border bg-background/40 hover:border-primary/40",
              )}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-foreground/95 p-1">
                <Image src={role.icon} alt="" fittingType="fit" className="h-full w-full object-contain" />
              </span>
              <span
                className={cn(
                  "font-mono text-[10px] uppercase tracking-[0.14em]",
                  selected ? "text-primary" : "text-muted-foreground",
                )}
              >
                {role.short}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}