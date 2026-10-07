import { errorClass, labelClass } from "@/components/registration/fieldStyles";

export default function Field({ label, htmlFor, error, hint, className = "", children }) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className={labelClass}>
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {error ? <p className={errorClass}>{error}</p> : hint ? <p className="mt-2 text-xs text-muted-foreground">{hint}</p> : null}
    </div>
  );
}