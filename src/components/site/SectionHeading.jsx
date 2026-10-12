import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}) {
  const centered =
    align === "center";

  return (
    <div
      className={cn(
        "max-w-3xl",
        centered &&
          "mx-auto text-center",
        className,
      )}
    >
      {/* Eyebrow */}
      <div
        className={cn(
          "flex items-center gap-3",
          centered &&
            "justify-center",
        )}
      >
        <span className="h-px w-8 bg-primary/80" />

        <span className="font-mono text-[10px] uppercase tracking-[0.34em] text-primary sm:text-[11px]">
          {eyebrow}
        </span>

        <span
          aria-hidden
          className="h-1.5 w-1.5 rotate-45 border border-primary/50 bg-primary/10"
        />
      </div>

      {/* Title */}
      <h2 className="mt-5 font-display text-4xl font-bold uppercase leading-[0.9] tracking-[0.02em] text-foreground sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      {/* Accent rule */}
      <div
        className={cn(
          "mt-5 h-px w-24 bg-gradient-to-r from-primary/80 via-primary/35 to-transparent",
          centered &&
            "mx-auto bg-gradient-to-r from-transparent via-primary/60 to-transparent",
        )}
      />

      {/* Description */}
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}