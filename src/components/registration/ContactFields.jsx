import Field from "@/components/registration/Field";

import {
  inputClass,
  labelClass,
} from "@/components/registration/fieldStyles";

import { Input } from "@/components/ui/input";

export default function ContactFields({
  values,
  errors,
  onChange,
  game,
  stepNumber = 3,
}) {
  const who =
    game === "mlbb"
      ? "captain"
      : "fighter";

  return (
    <fieldset className="space-y-8">
      {/* =====================================================
          STEP HEADING
          ===================================================== */}
      <div className="flex flex-col gap-3 border-b border-border/45 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <legend className="font-mono text-[10px] uppercase tracking-[0.28em] text-primary">
            Step{" "}
            {String(
              stepNumber,
            ).padStart(
              2,
              "0",
            )}{" "}
            — How we reach you
          </legend>

          <h2 className="mt-2 font-display text-3xl font-bold uppercase leading-[0.95] tracking-[0.03em] text-foreground sm:text-4xl">
            Stay connected
          </h2>
        </div>

        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
          Private contact details
        </span>
      </div>

      <p className="-mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        We use these only to
        confirm your slot,
        schedule your series and
        send the bracket. Nothing
        is shown publicly.
      </p>

      {/* =====================================================
          CONTACT IDENTITY
          ===================================================== */}
      <div className="card-interactive card-interactive-glow relative overflow-hidden border border-border/55 bg-background/20 p-5 backdrop-blur-sm sm:p-6">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent"
        />

        <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-primary/70">
          Primary Contact
        </p>

        <div className="mt-5">
          <Field
            label={`${
              who ===
              "captain"
                ? "Captain"
                : "Contact"
            } name`}
            htmlFor="contact_name"
            error={
              errors.contact_name
            }
          >
            <Input
              id="contact_name"
              value={
                values.contact_name
              }
              onChange={
                onChange(
                  "contact_name",
                )
              }
              placeholder="Name we should ask for"
              autoComplete="name"
              className={
                inputClass
              }
            />
          </Field>
        </div>

        <span
          aria-hidden
          className="pointer-events-none absolute bottom-0 right-0 h-6 w-6 border-b border-r border-primary/15"
        />
      </div>

      {/* =====================================================
          CONTACT CHANNELS
          ===================================================== */}
      <div className="grid gap-5 border-t border-border/35 pt-8 sm:grid-cols-2">
        <Field
          label="Email"
          htmlFor="contact_email"
          error={
            errors.contact_email
          }
        >
          <Input
            id="contact_email"
            type="email"
            value={
              values.contact_email
            }
            onChange={
              onChange(
                "contact_email",
              )
            }
            placeholder="you@email.com"
            autoComplete="email"
            className={
              inputClass
            }
          />
        </Field>

        <Field
          label="Mobile number"
          htmlFor="contact_phone"
          hint="Optional but fastest"
        >
          <Input
            id="contact_phone"
            type="tel"
            value={
              values.contact_phone
            }
            onChange={
              onChange(
                "contact_phone",
              )
            }
            placeholder="0917 000 0000"
            autoComplete="tel"
            className={
              inputClass
            }
          />
        </Field>

        <Field
          label="Discord handle"
          htmlFor="discord"
          hint="Optional"
          className="sm:col-span-2"
        >
          <Input
            id="discord"
            value={
              values.discord
            }
            onChange={
              onChange(
                "discord",
              )
            }
            placeholder="@yourhandle"
            className={
              inputClass
            }
          />
        </Field>
      </div>

      <div className="flex items-start gap-3 border border-border/40 bg-card/20 px-4 py-3 backdrop-blur-sm">
        <span
          aria-hidden
          className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-primary/50"
        />

        <p className="text-xs leading-relaxed text-muted-foreground">
          These details are used only by
          tournament staff for registration,
          scheduling, and bracket coordination.
        </p>
      </div>
    </fieldset>
  );
}