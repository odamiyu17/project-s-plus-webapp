import Field from "@/components/registration/Field";
import RolePicker from "@/components/registration/RolePicker";
import { errorClass, inputClass, labelClass } from "@/components/registration/fieldStyles";
import { Input } from "@/components/ui/input";

export default function MlbbFields({ values, roster, errors, onChange, onRosterChange }) {
  return (
    <fieldset className="space-y-8">
      <legend className={labelClass}>Step 02 — Identify your squad</legend>

      <div className="grid gap-5 sm:grid-cols-3">
        <Field label="Team name" htmlFor="team_name" error={errors.team_name} className="sm:col-span-2">
          <Input
            id="team_name"
            value={values.team_name}
            onChange={onChange("team_name")}
            placeholder="e.g. Obsidian Vanguards"
            autoComplete="organization"
            className={inputClass}
          />
        </Field>
        <Field label="Team tag" htmlFor="team_tag" error={errors.team_tag} hint="2–6 characters">
          <Input
            id="team_tag"
            value={values.team_tag}
            onChange={onChange("team_tag")}
            placeholder="OBSV"
            maxLength={6}
            className={`${inputClass} uppercase`}
          />
        </Field>
      </div>

      <Field label="Region / city" htmlFor="region" hint="Optional — where your squad plays from">
        <Input
          id="region"
          value={values.region}
          onChange={onChange("region")}
          placeholder="e.g. Quezon City"
          className={inputClass}
        />
      </Field>

      <div>
        <p className={labelClass}>Starting five</p>
        <div className="mt-4 space-y-3">
          {roster.map((player, index) => (
            <div
              key={index}
              className="grid gap-3 border border-border/70 bg-background/40 p-3 sm:grid-cols-[52px_1fr_1fr] sm:items-start"
            >
              <div className="flex h-12 items-center justify-center border border-primary/30 bg-secondary/40 font-display text-sm font-bold text-primary">
                P{index + 1}
              </div>
              <div>
                <Input
                  aria-label={`Player ${index + 1} in-game name`}
                  value={player.ign}
                  onChange={(event) => onRosterChange(index, "ign", event.target.value)}
                  placeholder="In-game name"
                  className={inputClass}
                />
                {errors[`ign_${index}`] ? <p className={errorClass}>Required</p> : null}
              </div>
              <div>
                <Input
                  aria-label={`Player ${index + 1} game ID`}
                  inputMode="numeric"
                  enterKeyHint="next"
                  value={player.game_id}
                  onChange={(event) => onRosterChange(index, "game_id", event.target.value)}
                  placeholder="Game ID"
                  className={inputClass}
                />
                {errors[`game_id_${index}`] ? <p className={errorClass}>Required</p> : null}
              </div>
              <RolePicker
                label={`Player ${index + 1} role`}
                value={player.role}
                onChange={(role) => onRosterChange(index, "role", role)}
                className="sm:col-span-3"
              />
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          All five starters are required. Substitutes are arranged with staff before each series.
        </p>
      </div>
    </fieldset>
  );
}