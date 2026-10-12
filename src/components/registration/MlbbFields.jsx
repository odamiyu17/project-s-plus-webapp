import {
  useEffect,
  useState,
} from "react";

import {
  ImagePlus,
  Upload,
} from "lucide-react";

import Field from "@/components/registration/Field";
import RolePicker from "@/components/registration/RolePicker";

import {
  errorClass,
  inputClass,
  labelClass,
} from "@/components/registration/fieldStyles";

import { Input } from "@/components/ui/input";

export default function MlbbFields({
  section,
  values,
  roster,
  errors,
  onChange,
  onRosterChange,
  teamLogo,
  onTeamLogoChange,
}) {
  const [
    logoPreview,
    setLogoPreview,
  ] = useState(null);

  useEffect(() => {
    if (!teamLogo) {
      setLogoPreview(
        null,
      );

      return;
    }

    const url =
      URL.createObjectURL(
        teamLogo,
      );

    setLogoPreview(url);

    return () => {
      URL.revokeObjectURL(
        url,
      );
    };
  }, [teamLogo]);

  if (
    section === "team"
  ) {
    return (
      <fieldset className="space-y-8">
        <legend
          className={
            labelClass
          }
        >
          Step 02 — Team
          identity
        </legend>

        <p className="-mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Upload your official
          team logo and enter your
          team information.
        </p>

        {/* TEAM LOGO */}
        <div>
          <p
            className={
              labelClass
            }
          >
            Team logo
          </p>

          <div className="mt-3 grid gap-5 sm:grid-cols-[150px_1fr] sm:items-center">
            <div className="grid aspect-square w-full max-w-[150px] place-items-center overflow-hidden border border-border/80 bg-background/50">
              {logoPreview ? (
                <img
                  src={
                    logoPreview
                  }
                  alt="Team logo preview"
                  className="h-full w-full object-contain p-3"
                />
              ) : (
                <ImagePlus
                  className="h-10 w-10 text-primary/60"
                  strokeWidth={
                    1.4
                  }
                />
              )}
            </div>

            <div>
              <label
                htmlFor="team-logo"
                className="flex cursor-pointer items-center justify-center gap-3 border border-dashed border-border/80 px-5 py-5 text-center transition-colors hover:border-primary/60 hover:bg-secondary/20 sm:justify-start"
              >
                <Upload className="h-5 w-5 shrink-0 text-primary" />

                <span>
                  <span className="block text-sm font-medium text-foreground">
                    {teamLogo
                      ? teamLogo.name
                      : "Choose team logo"}
                  </span>

                  <span className="mt-1 block text-xs text-muted-foreground">
                    JPG, PNG or
                    WEBP · maximum
                    5 MB
                  </span>
                </span>
              </label>

              <input
                id="team-logo"
                type="file"
                accept="image/jpeg,image/png,image/webp"
                className="hidden"
                onChange={(
                  event,
                ) =>
                  onTeamLogoChange(
                    event
                      .target
                      .files?.[0] ??
                      null,
                  )
                }
              />

              {errors.team_logo ? (
                <p
                  className={`${errorClass} mt-2`}
                >
                  {
                    errors.team_logo
                  }
                </p>
              ) : null}
            </div>
          </div>
        </div>

        {/* TEAM INFO */}
        <div className="grid gap-5 sm:grid-cols-3">
          <Field
            label="Team name"
            htmlFor="team_name"
            error={
              errors.team_name
            }
            className="sm:col-span-2"
          >
            <Input
              id="team_name"
              value={
                values.team_name
              }
              onChange={
                onChange(
                  "team_name",
                )
              }
              placeholder="e.g. Obsidian Vanguards"
              autoComplete="organization"
              className={
                inputClass
              }
            />
          </Field>

          <Field
            label="Team tag"
            htmlFor="team_tag"
            error={
              errors.team_tag
            }
            hint="Optional · 2–6 characters"
          >
            <Input
              id="team_tag"
              value={
                values.team_tag
              }
              onChange={
                onChange(
                  "team_tag",
                )
              }
              placeholder="OBSV"
              maxLength={6}
              className={`${inputClass} uppercase`}
            />
          </Field>
        </div>

        <Field
          label="Region / city"
          htmlFor="region"
          hint="Optional — where your squad plays from"
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
            placeholder="e.g. Davao City"
            className={
              inputClass
            }
          />
        </Field>
      </fieldset>
    );
  }

  return (
    <fieldset className="space-y-8">
      <legend
        className={
          labelClass
        }
      >
        Step 03 — Players
      </legend>

      <p className="-mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        Complete all seven player
        profiles. Players 1–5 are
        the main roster and Players
        6–7 are substitutes.
      </p>

      <div className="space-y-6">
        {roster.map(
          (
            player,
            index,
          ) => {
            const isMain =
              index < 5;

            return (
              <section
                key={
                  index
                }
                className="border border-border/80 bg-background/40"
              >
                {/* PLAYER HEADER */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/70 bg-secondary/20 px-4 py-3 sm:px-5">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center border border-primary/30 bg-secondary/40 font-display text-sm font-bold text-primary">
                      P
                      {index +
                        1}
                    </span>

                    <div>
                      <p className="font-display text-lg font-bold uppercase tracking-[0.05em] text-foreground">
                        Player{" "}
                        {index +
                          1}
                      </p>

                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                        {isMain
                          ? "Main roster"
                          : "Substitute"}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`border px-2 py-1 font-mono text-[9px] uppercase tracking-[0.18em] ${
                      isMain
                        ? "border-primary/40 text-primary"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    {isMain
                      ? "Main"
                      : "Sub"}
                  </span>
                </div>

                {/* PLAYER FIELDS */}
                <div className="grid gap-5 p-4 sm:grid-cols-2 sm:p-5">
                  <PlayerPhotoField
                    player={player}
                    index={index}
                    error={
                      errors[
                        `photo_${index}`
                      ]
                    }
                    onChange={
                      onRosterChange
                    }
                  />

                  <Field
                    label="Player full name"
                    htmlFor={`full_name_${index}`}
                    error={
                      errors[
                        `full_name_${index}`
                      ]
                    }
                  >
                    <Input
                      id={`full_name_${index}`}
                      value={
                        player.full_name
                      }
                      onChange={(
                        event,
                      ) =>
                        onRosterChange(
                          index,
                          "full_name",
                          event
                            .target
                            .value,
                        )
                      }
                      placeholder="Full legal name"
                      autoComplete="name"
                      className={
                        inputClass
                      }
                    />
                  </Field>

                  <Field
                    label="In-game name / IGN"
                    htmlFor={`ign_${index}`}
                    error={
                      errors[
                        `ign_${index}`
                      ]
                    }
                  >
                    <Input
                      id={`ign_${index}`}
                      value={
                        player.ign
                      }
                      onChange={(
                        event,
                      ) =>
                        onRosterChange(
                          index,
                          "ign",
                          event
                            .target
                            .value,
                        )
                      }
                      placeholder="Player IGN"
                      className={
                        inputClass
                      }
                    />
                  </Field>

                  <Field
                    label="Birthdate"
                    htmlFor={`birthdate_${index}`}
                    error={
                      errors[
                        `birthdate_${index}`
                      ]
                    }
                  >
                    <Input
                      id={`birthdate_${index}`}
                      type="date"
                      value={
                        player.birthdate
                      }
                      onChange={(
                        event,
                      ) =>
                        onRosterChange(
                          index,
                          "birthdate",
                          event
                            .target
                            .value,
                        )
                      }
                      className={
                        inputClass
                      }
                    />
                  </Field>

                  <Field
                    label="Age"
                    htmlFor={`age_${index}`}
                    error={
                      errors[
                        `age_${index}`
                      ]
                    }
                    hint="Calculated automatically"
                  >
                    <Input
                      id={`age_${index}`}
                      value={
                        player.age ??
                        ""
                      }
                      readOnly
                      placeholder="—"
                      className={`${inputClass} cursor-not-allowed bg-muted/30`}
                    />
                  </Field>

                  <Field
                    label="MLID"
                    htmlFor={`game_id_${index}`}
                    error={
                      errors[
                        `game_id_${index}`
                      ]
                    }
                    hint="Mobile Legends ID"
                  >
                    <Input
                      id={`game_id_${index}`}
                      value={
                        player.game_id
                      }
                      onChange={(
                        event,
                      ) =>
                        onRosterChange(
                          index,
                          "game_id",
                          event
                            .target
                            .value,
                        )
                      }
                      placeholder="e.g. 123456789 (1234)"
                      className={
                        inputClass
                      }
                    />
                  </Field>

                  <Field
                    label="Contact number"
                    htmlFor={`contact_number_${index}`}
                    error={
                      errors[
                        `contact_number_${index}`
                      ]
                    }
                  >
                    <Input
                      id={`contact_number_${index}`}
                      type="tel"
                      value={
                        player.contact_number
                      }
                      onChange={(
                        event,
                      ) =>
                        onRosterChange(
                          index,
                          "contact_number",
                          event
                            .target
                            .value,
                        )
                      }
                      placeholder="09XX XXX XXXX"
                      autoComplete="tel"
                      className={
                        inputClass
                      }
                    />
                  </Field>

                  <Field
                    label="School"
                    htmlFor={`school_${index}`}
                    hint="Optional"
                  >
                    <Input
                      id={`school_${index}`}
                      value={
                        player.school
                      }
                      onChange={(
                        event,
                      ) =>
                        onRosterChange(
                          index,
                          "school",
                          event
                            .target
                            .value,
                        )
                      }
                      placeholder="School / university"
                      className={
                        inputClass
                      }
                    />
                  </Field>

                  <Field
                    label="Organization"
                    htmlFor={`organization_${index}`}
                    hint="Optional"
                  >
                    <Input
                      id={`organization_${index}`}
                      value={
                        player.organization
                      }
                      onChange={(
                        event,
                      ) =>
                        onRosterChange(
                          index,
                          "organization",
                          event
                            .target
                            .value,
                        )
                      }
                      placeholder="Esports org / club"
                      className={
                        inputClass
                      }
                    />
                  </Field>

                  <Field
                    label="Facebook link"
                    htmlFor={`facebook_link_${index}`}
                    error={
                      errors[
                        `facebook_link_${index}`
                      ]
                    }
                    className="sm:col-span-2"
                  >
                    <Input
                      id={`facebook_link_${index}`}
                      type="url"
                      value={
                        player.facebook_link
                      }
                      onChange={(
                        event,
                      ) =>
                        onRosterChange(
                          index,
                          "facebook_link",
                          event
                            .target
                            .value,
                        )
                      }
                      placeholder="https://facebook.com/..."
                      className={
                        inputClass
                      }
                    />
                  </Field>

                  <RolePicker
                    label={`Player ${index + 1} role`}
                    value={
                      player.role
                    }
                    onChange={(
                      role,
                    ) =>
                      onRosterChange(
                        index,
                        "role",
                        role,
                      )
                    }
                    className="sm:col-span-2"
                  />
                </div>
              </section>
            );
          },
        )}
      </div>

      <p className="text-xs leading-relaxed text-muted-foreground">
        Players 1–5 are registered
        as the main lineup. Players
        6–7 are registered as
        substitutes.
      </p>
    </fieldset>
  );
}

function PlayerPhotoField({
  player,
  index,
  error,
  onChange,
}) {
  const [
    preview,
    setPreview,
  ] = useState(null);

  useEffect(() => {
    if (!player.photo) {
      setPreview(null);
      return;
    }

    const url =
      URL.createObjectURL(
        player.photo,
      );

    setPreview(url);

    return () => {
      URL.revokeObjectURL(
        url,
      );
    };
  }, [player.photo]);

  return (
    <div className="sm:col-span-2">
      <p className={labelClass}>
        Player photo
      </p>

      <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="h-24 w-24 shrink-0 overflow-hidden border border-border/80 bg-secondary/20">
          {preview ? (
            <img
              src={preview}
              alt={`Player ${index + 1} preview`}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="grid h-full w-full place-items-center">
              <ImagePlus className="h-7 w-7 text-primary/60" />
            </div>
          )}
        </div>

        <div className="flex-1">
          <label
            htmlFor={`player_photo_${index}`}
            className="flex cursor-pointer items-center gap-3 border border-dashed border-border/80 px-4 py-4 transition-colors hover:border-primary/60 hover:bg-secondary/20"
          >
            <Upload className="h-5 w-5 shrink-0 text-primary" />

            <span>
              <span className="block text-sm text-foreground">
                {player.photo
                  ? player.photo.name
                  : "Choose player photo"}
              </span>

              <span className="mt-1 block text-xs text-muted-foreground">
                JPG, PNG or WEBP · maximum 5 MB
              </span>
            </span>
          </label>

          <input
            id={`player_photo_${index}`}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            className="hidden"
            onChange={(event) =>
              onChange(
                index,
                "photo",
                event.target.files?.[0] ??
                  null,
              )
            }
          />

          {error ? (
            <p className={`${errorClass} mt-2`}>
              {error}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

