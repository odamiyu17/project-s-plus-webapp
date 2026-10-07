import Field from "@/components/registration/Field";
import { inputClass, labelClass } from "@/components/registration/fieldStyles";
import { Input } from "@/components/ui/input";

export default function ContactFields({ values, errors, onChange, game }) {
  const who = game === "mlbb" ? "captain" : "fighter";

  return (
    <fieldset className="space-y-6">
      <legend className={labelClass}>Step 03 — How we reach you</legend>
      <p className="-mt-2 text-sm leading-relaxed text-muted-foreground">
        We use these only to confirm your slot, schedule your series and send the bracket. Nothing is shown publicly.
      </p>

      <Field label={`${who === "captain" ? "Captain" : "Contact"} name`} htmlFor="contact_name" error={errors.contact_name}>
        <Input
          id="contact_name"
          value={values.contact_name}
          onChange={onChange("contact_name")}
          placeholder="Name we should ask for"
          autoComplete="name"
          className={inputClass}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" htmlFor="contact_email" error={errors.contact_email}>
          <Input
            id="contact_email"
            type="email"
            value={values.contact_email}
            onChange={onChange("contact_email")}
            placeholder="you@email.com"
            autoComplete="email"
            className={inputClass}
          />
        </Field>
        <Field label="Mobile number" htmlFor="contact_phone" hint="Optional but fastest">
          <Input
            id="contact_phone"
            type="tel"
            value={values.contact_phone}
            onChange={onChange("contact_phone")}
            placeholder="0917 000 0000"
            autoComplete="tel"
            className={inputClass}
          />
        </Field>
      </div>

      <Field label="Discord handle" htmlFor="discord" hint="Optional">
        <Input id="discord" value={values.discord} onChange={onChange("discord")} placeholder="@yourhandle" className={inputClass} />
      </Field>
    </fieldset>
  );
}