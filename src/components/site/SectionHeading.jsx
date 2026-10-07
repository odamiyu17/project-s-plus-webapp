import { cn } from "@/lib/utils";

export default function SectionHeading({ eyebrow, title, description, align = "left", className }) {
  const centered = align === "center";

  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center", className)}>
      <div className={cn("flex items-center gap-3", centered && "justify-center")}>
        <span className="h-px w-8 bg-primary" />
        <span className="font-mono text-[11px] uppercase tracking-[0.34em] text-primary">{eyebrow}</span>
      </div>
      <h2 className="mt-5 font-display text-3xl font-bold uppercase leading-[0.95] tracking-[0.02em] text-foreground sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}