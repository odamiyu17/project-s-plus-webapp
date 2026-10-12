import {
  useEffect,
  useState,
} from "react";

import {
  ImagePlus,
  Upload,
} from "lucide-react";

import Field from "@/components/registration/Field";

import {
  errorClass,
  inputClass,
  labelClass,
} from "@/components/registration/fieldStyles";

import { Input } from "@/components/ui/input";

export default function TekkenFields({
  values,
  errors,
  onChange,
  playerPhoto,
  onPlayerPhotoChange,
}) {
  const [
    preview,
    setPreview,
  ] = useState(null);

  useEffect(() => {
    if (!playerPhoto) {
      setPreview(null);
      return;
    }

    const url =
      URL.createObjectURL(
        playerPhoto,
      );

    setPreview(url);

    return () => {
      URL.revokeObjectURL(
        url,
      );
    };
  }, [playerPhoto]);

  return (
    <fieldset className="space-y-6">
      <legend
        className={
          labelClass
        }
      >
        Step 02 — Identify your fighter
      </legend>

      <div>
        <p
          className={
            labelClass
          }
        >
          Player photo
        </p>

        <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="h-28 w-28 shrink-0 overflow-hidden border border-border/80 bg-secondary/20">
            {preview ? (
              <img
                src={preview}
                alt="TEKKEN player preview"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="grid h-full w-full place-items-center">
                <ImagePlus className="h-8 w-8 text-primary/60" />
              </div>
            )}
          </div>

          <div className="flex-1">
            <label
              htmlFor="tekken-player-photo"
              className="flex cursor-pointer items-center gap-3 border border-dashed border-border/80 px-4 py-4 transition-colors hover:border-primary/60 hover:bg-secondary/20"
            >
              <Upload className="h-5 w-5 shrink-0 text-primary" />

              <span>
                <span className="block text-sm text-foreground">
                  {playerPhoto
                    ? playerPhoto.name
                    : "Choose player photo"}
                </span>

                <span className="mt-1 block text-xs text-muted-foreground">
                  JPG, PNG or WEBP · maximum 5 MB
                </span>
              </span>
            </label>

            <input
              id="tekken-player-photo"
              type="file"
              accept="image/jpeg,image/png,image/webp"
              className="hidden"
              onChange={(event) =>
                onPlayerPhotoChange(
                  event.target.files?.[0] ??
                    null,
                )
              }
            />

            {errors.player_photo ? (
              <p
                className={`${errorClass} mt-2`}
              >
                {
                  errors.player_photo
                }
              </p>
            ) : null}
          </div>
        </div>
      </div>

      <Field
        label="Full name"
        htmlFor="player_name"
        error={
          errors.player_name
        }
      >
        <Input
          id="player_name"
          value={
            values.player_name
          }
          onChange={
            onChange(
              "player_name",
            )
          }
          placeholder="e.g. Miguel Santos"
          autoComplete="name"
          className={
            inputClass
          }
        />
      </Field>

      <Field
        label="In-game ID"
        htmlFor="in_game_id"
        error={
          errors.in_game_id
        }
        hint="Exactly as it appears in-game — this is how staff seed the bracket"
      >
        <Input
          id="in_game_id"
          value={
            values.in_game_id
          }
          onChange={
            onChange(
              "in_game_id",
            )
          }
          placeholder="e.g. IronFist_88"
          enterKeyHint="next"
          className={
            inputClass
          }
        />
      </Field>

      <Field
        label="Region / city"
        htmlFor="region"
        hint="Optional — where you play from"
      >
        <Input
          id="region"
          value={
            values.region
          }
          onChange={
            onChange(
              "region",
            )
          }
          placeholder="e.g. Cebu"
          className={
            inputClass
          }
        />
      </Field>
    </fieldset>
  );
}
