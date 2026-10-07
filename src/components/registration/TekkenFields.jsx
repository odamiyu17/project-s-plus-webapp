import Field from "@/components/registration/Field";
import { inputClass, labelClass } from "@/components/registration/fieldStyles";
import { Input } from "@/components/ui/input";

export default function TekkenFields({ values, errors, onChange }) {
  return (
    <fieldset className="space-y-6">
      <legend className={labelClass}>Step 02 — Identify your fighter</legend>

      <Field label="Full name" htmlFor="player_name" error={errors.player_name}>
        <Input
          id="player_name"
          value={values.player_name}
          onChange={onChange("player_name")}
          placeholder="e.g. Miguel Santos"
          autoComplete="name"
          className={inputClass}
        />
      </Field>

      <Field
        label="In-game ID"
        htmlFor="in_game_id"
        error={errors.in_game_id}
        hint="Exactly as it appears in-game — this is how staff seed the bracket"
      >
        <Input
          id="in_game_id"
          value={values.in_game_id}
          onChange={onChange("in_game_id")}
          placeholder="e.g. IronFist_88"
          enterKeyHint="next"
          className={inputClass}
        />
      </Field>

      <Field label="Region / city" htmlFor="region" hint="Optional — where you play from">
        <Input id="region" value={values.region} onChange={onChange("region")} placeholder="e.g. Cebu" className={inputClass} />
      </Field>
    </fieldset>
  );
}