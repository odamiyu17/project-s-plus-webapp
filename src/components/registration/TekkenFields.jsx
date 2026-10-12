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
    <fieldset className="space-y-8">
      {/* =====================================================
          STEP HEADING
          ===================================================== */}
      <div className="flex flex-col gap-3 border-b border-border/45 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <legend className="font-mono text-[10px] uppercase tracking-[0.28em] text-primary">
            Step 02 — Identify your fighter
          </legend>

          <h2 className="mt-2 font-display text-3xl font-bold uppercase leading-[0.95] tracking-[0.03em] text-foreground sm:text-4xl">
            Enter the arena
          </h2>
        </div>

        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
          TEKKEN 8 Solo Entry
        </span>
      </div>

      <p className="-mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        Add the details staff will use
        to identify and seed your fighter
        in the TEKKEN 8 bracket.
      </p>

      {/* =====================================================
          PLAYER PHOTO
          ===================================================== */}
      <div className="card-interactive card-interactive-glow group relative overflow-hidden border border-border/55 bg-background/20 p-5 backdrop-blur-sm sm:p-6">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/[0.035] blur-3xl transition-opacity duration-500 group-hover:bg-primary/[0.06]"
        />

        <p
          className={
            labelClass
          }
        >
          Player photo
        </p>

        <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center">
          <div className="relative h-32 w-32 shrink-0 overflow-hidden border border-primary/20 bg-card/40">
            {preview ? (
              <img
                src={preview}
                alt="TEKKEN player preview"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            ) : (
              <div className="grid h-full w-full place-items-center">
                <ImagePlus
                  className="h-9 w-9 text-primary/60"
                  strokeWidth={1.4}
                />
              </div>
            )}

            <span
              aria-hidden
              className="pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-b border-r border-primary/20"
            />
          </div>

          <div className="flex-1">
            <label
              htmlFor="tekken-player-photo"
              className="group/upload flex cursor-pointer items-center gap-3 border border-dashed border-border/60 bg-card/25 px-5 py-5 transition-all duration-300 hover:border-primary/50 hover:bg-primary/[0.04]"
            >
              <Upload className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-hover/upload:-translate-y-0.5" />

              <span>
                <span className="block text-sm font-medium text-foreground">
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

      {/* =====================================================
          FIGHTER DETAILS
          ===================================================== */}
      <div className="grid gap-5 border-t border-border/35 pt-8 sm:grid-cols-2">
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
          hint="Exactly as it appears in-game"
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
          className="sm:col-span-2"
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
      </div>

      <div className="flex items-start gap-3 border border-border/40 bg-card/20 px-4 py-3 backdrop-blur-sm">
        <span
          aria-hidden
          className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-primary/50"
        />

        <p className="text-xs leading-relaxed text-muted-foreground">
          Your in-game ID is used by
          tournament staff when preparing
          and seeding the TEKKEN 8 bracket.
        </p>
      </div>
    </fieldset>
  );
}
