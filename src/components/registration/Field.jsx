import {
  errorClass,
  labelClass,
} from "@/components/registration/fieldStyles";

export default function Field({
  label,
  htmlFor,
  error,
  hint,
  className = "",
  children,
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className={labelClass}
      >
        {label}
      </label>

      <div className="mt-2.5">
        {children}
      </div>

      {error ? (
        <div className="mt-2 flex items-start gap-2">
          <span
            aria-hidden
            className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-destructive"
          />

          <p className={errorClass}>
            {error}
          </p>
        </div>
      ) : hint ? (
        <p className="mt-2 font-mono text-[9px] uppercase leading-relaxed tracking-[0.12em] text-muted-foreground/80">
          {hint}
        </p>
      ) : null}
    </div>
  );
}