import {
  createFileRoute,
  Link,
  useNavigate,
  useRouter,
} from "@tanstack/react-router";

import {
  ArrowLeft,
  CheckCircle2,
  CreditCard,
  ImagePlus,
  ImageUp,
  Save,
  Upload,
  UserRound,
} from "lucide-react";

import { useServerFn } from "@tanstack/react-start";
import {
  useEffect,
  useState,
} from "react";
import { toast } from "sonner";

import { supabase } from "@/api/supabaseClient";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  listMyRegistrations,
  updateMyPayment,
  updateMyRegistration,
} from "@/lib/server-fns";

export const Route = createFileRoute(
  "/_authed/edit-registration",
)({
  validateSearch: (search) => ({
    id:
      typeof search.id === "string"
        ? search.id
        : "",
  }),

  loader: async () => {
    return await listMyRegistrations();
  },

  head: () => ({
    meta: [
      {
        title:
          "Edit Registration — Project S+",
      },
    ],
  }),

  component: EditRegistrationPage,
});

const MLBB_ROLES = [
  "",
  "EXP",
  "Gold",
  "Jungle",
  "Mid",
  "Roam",
];

const MAX_IMAGE_SIZE =
  5 * 1024 * 1024;

const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
];

const EMAIL_RE =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ---------------------------------------------------------
// HELPERS
// ---------------------------------------------------------

function calculateAge(
  birthdate,
) {
  if (!birthdate) {
    return null;
  }

  const date =
    new Date(
      `${birthdate}T00:00:00`,
    );

  if (
    Number.isNaN(
      date.getTime(),
    )
  ) {
    return null;
  }

  const today =
    new Date();

  let age =
    today.getFullYear() -
    date.getFullYear();

  const monthDifference =
    today.getMonth() -
    date.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 &&
      today.getDate() <
        date.getDate())
  ) {
    age -= 1;
  }

  return age;
}

function isFacebookUrl(
  value,
) {
  try {
    const url =
      new URL(value);

    const hostname =
      url.hostname
        .toLowerCase()
        .replace(
          /^www\./,
          "",
        );

    return (
      hostname ===
        "facebook.com" ||
      hostname.endsWith(
        ".facebook.com",
      )
    );
  } catch {
    return false;
  }
}

function validateImage(
  file,
  label = "Image",
) {
  if (!file) {
    return null;
  }

  if (
    !ALLOWED_IMAGE_TYPES.includes(
      file.type,
    )
  ) {
    return `${label} must be a JPEG, PNG, or WEBP image`;
  }

  if (
    file.size >
    MAX_IMAGE_SIZE
  ) {
    return `${label} must be 5MB or smaller`;
  }

  return null;
}

function extensionForFile(
  file,
) {
  if (
    file.type ===
    "image/png"
  ) {
    return "png";
  }

  if (
    file.type ===
    "image/webp"
  ) {
    return "webp";
  }

  return "jpg";
}

function getPublicUrl(
  bucket,
  path,
) {
  if (!path) {
    return "";
  }

  const { data } =
    supabase.storage
      .from(bucket)
      .getPublicUrl(path);

  return (
    data?.publicUrl ??
    ""
  );
}

// ---------------------------------------------------------
// ROUTE
// ---------------------------------------------------------

function EditRegistrationPage() {
  const registrations =
    Route.useLoaderData();

  const { id } =
    Route.useSearch();

  const router =
    useRouter();

  const navigate =
    useNavigate();

  const updateRegistration =
    useServerFn(
      updateMyRegistration,
    );

  const updatePayment =
    useServerFn(
      updateMyPayment,
    );

  const registration =
    registrations.find(
      (item) =>
        item.id === id,
    );

  if (!registration) {
    return (
      <main className="min-h-screen px-4 py-24">
        <div className="mx-auto max-w-2xl border border-border/80 bg-card/60 p-8 text-center">
          <h1 className="font-display text-3xl font-bold uppercase text-foreground">
            Registration not found
          </h1>

          <p className="mt-4 text-sm text-muted-foreground">
            This registration does
            not exist or does not
            belong to your account.
          </p>

          <Button
            asChild
            className="mt-6 rounded-none"
          >
            <Link to="/my-registration">
              Back to My Registration
            </Link>
          </Button>
        </div>
      </main>
    );
  }

  if (
    registration.status !==
    "pending"
  ) {
    return (
      <main className="min-h-screen px-4 py-24">
        <div className="mx-auto max-w-2xl border border-border/80 bg-card/60 p-8 text-center">
          <h1 className="font-display text-3xl font-bold uppercase text-foreground">
            Editing locked
          </h1>

          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            Only pending
            registrations can be
            edited. This entry is
            currently{" "}
            <span className="uppercase text-primary">
              {
                registration.status
              }
            </span>
            .
          </p>

          <Button
            asChild
            className="mt-6 rounded-none"
          >
            <Link to="/my-registration">
              Back to My Registration
            </Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <EditRegistrationForm
      registration={
        registration
      }
      updateRegistration={
        updateRegistration
      }
      updatePayment={
        updatePayment
      }
      router={router}
      navigate={navigate}
    />
  );
}

// ---------------------------------------------------------
// EDIT FORM
// ---------------------------------------------------------

function EditRegistrationForm({
  registration,
  updateRegistration,
  updatePayment,
  router,
  navigate,
}) {
  const isSquad =
    registration.game ===
    "mlbb";

  const paymentLocked =
    registration.payment_status ===
    "verified";

  const [busy, setBusy] =
    useState(false);

  const [values, setValues] =
    useState({
      team_name:
        registration.team_name ??
        "",

      team_tag:
        registration.team_tag ??
        "",

      region:
        registration.region ??
        "",

      player_name:
        registration.player_name ??
        "",

      in_game_id:
        registration.in_game_id ??
        "",

      contact_name:
        registration.contact_name ??
        "",

      contact_email:
        registration.contact_email ??
        "",

      contact_phone:
        registration.contact_phone ??
        "",

      discord:
        registration.discord ??
        "",

      payment_method:
        registration.payment_method ||
        "gcash",

      payment_reference:
        registration.payment_reference ??
        "",
    });

  const [roster, setRoster] =
    useState(() => {
      if (!isSquad) {
        return [];
      }

      const existing =
        Array.isArray(
          registration.roster,
        )
          ? registration.roster
          : [];

      return Array.from(
        {
          length: 7,
        },
        (_, index) => {
          const player =
            existing[index] ??
            {};

          return {
            player_photo_path:
              player.player_photo_path ??
              "",

            replacement_photo:
              null,

            full_name:
              player.full_name ??
              "",

            ign:
              player.ign ??
              "",

            birthdate:
              player.birthdate ??
              "",

            age:
              player.age ??
              calculateAge(
                player.birthdate,
              ),

            game_id:
              player.game_id ??
              "",

            school:
              player.school ??
              "",

            organization:
              player.organization ??
              "",

            facebook_link:
              player.facebook_link ??
              "",

            contact_number:
              player.contact_number ??
              "",

            role:
              player.role ??
              "",

            roster_type:
              player.roster_type ??
              (index < 5
                ? "main"
                : "substitute"),
          };
        },
      );
    });

  const [
    replacementTeamLogo,
    setReplacementTeamLogo,
  ] = useState(null);

  const [
    replacementTekkenPhoto,
    setReplacementTekkenPhoto,
  ] = useState(null);

  const [
    replacementReceipt,
    setReplacementReceipt,
  ] = useState(null);

  // -------------------------------------------------------
  // CHANGES
  // -------------------------------------------------------

  function changeValue(
    key,
    value,
  ) {
    setValues(
      (current) => ({
        ...current,
        [key]: value,
      }),
    );
  }

  function changePlayer(
    index,
    key,
    value,
  ) {
    setRoster(
      (current) =>
        current.map(
          (
            player,
            playerIndex,
          ) => {
            if (
              playerIndex !==
              index
            ) {
              return player;
            }

            if (
              key ===
              "birthdate"
            ) {
              return {
                ...player,

                birthdate:
                  value,

                age:
                  calculateAge(
                    value,
                  ),
              };
            }

            return {
              ...player,
              [key]: value,
            };
          },
        ),
    );
  }

  function handleTeamLogoChange(
    event,
  ) {
    const file =
      event.target.files?.[0] ??
      null;

    if (!file) {
      setReplacementTeamLogo(
        null,
      );

      return;
    }

    const error =
      validateImage(
        file,
        "Team logo",
      );

    if (error) {
      toast.error(error);
      event.target.value =
        "";
      return;
    }

    setReplacementTeamLogo(
      file,
    );
  }

  function handleTekkenPhotoChange(
    event,
  ) {
    const file =
      event.target.files?.[0] ??
      null;

    if (!file) {
      setReplacementTekkenPhoto(
        null,
      );

      return;
    }

    const error =
      validateImage(
        file,
        "Player photo",
      );

    if (error) {
      toast.error(error);
      event.target.value =
        "";
      return;
    }

    setReplacementTekkenPhoto(
      file,
    );
  }

  function handlePlayerPhotoChange(
    index,
    event,
  ) {
    const file =
      event.target.files?.[0] ??
      null;

    if (!file) {
      changePlayer(
        index,
        "replacement_photo",
        null,
      );

      return;
    }

    const error =
      validateImage(
        file,
        `Player ${
          index + 1
        } photo`,
      );

    if (error) {
      toast.error(error);

      event.target.value =
        "";

      return;
    }

    changePlayer(
      index,
      "replacement_photo",
      file,
    );
  }

  function handleReceiptChange(
    event,
  ) {
    const file =
      event.target.files?.[0] ??
      null;

    if (!file) {
      setReplacementReceipt(
        null,
      );

      return;
    }

    const error =
      validateImage(
        file,
        "Receipt",
      );

    if (error) {
      toast.error(error);

      event.target.value =
        "";

      return;
    }

    setReplacementReceipt(
      file,
    );
  }

  // -------------------------------------------------------
  // VALIDATION
  // -------------------------------------------------------

  function validate() {
    if (
      !values.contact_name.trim()
    ) {
      return "Contact name is required";
    }

    if (
      !EMAIL_RE.test(
        values.contact_email.trim(),
      )
    ) {
      return "Enter a valid contact email";
    }

    if (isSquad) {
      if (
        !values.team_name.trim()
      ) {
        return "Team name is required";
      }

      if (
        !registration.team_logo_path &&
        !replacementTeamLogo
      ) {
        return "Team logo is required";
      }

      if (
        roster.length !== 7
      ) {
        return "Exactly 7 MLBB players are required";
      }

      for (
        let index = 0;
        index <
        roster.length;
        index += 1
      ) {
        const player =
          roster[index];

        const number =
          index + 1;

        if (
          !player.player_photo_path &&
          !player.replacement_photo
        ) {
          return `Player ${number} photo is required`;
        }

        if (
          !player.full_name.trim()
        ) {
          return `Player ${number} full name is required`;
        }

        if (
          !player.ign.trim()
        ) {
          return `Player ${number} IGN is required`;
        }

        if (
          !player.birthdate
        ) {
          return `Player ${number} birthdate is required`;
        }

        if (
          player.age === null ||
          player.age ===
            undefined ||
          player.age < 10 ||
          player.age > 100
        ) {
          return `Player ${number} has an invalid birthdate`;
        }

        if (
          !player.game_id.trim()
        ) {
          return `Player ${number} MLID is required`;
        }

        if (
          !player.facebook_link.trim()
        ) {
          return `Player ${number} Facebook link is required`;
        }

        if (
          !isFacebookUrl(
            player.facebook_link.trim(),
          )
        ) {
          return `Player ${number} must have a valid Facebook link`;
        }

        if (
          player.contact_number
            .trim()
            .length < 7
        ) {
          return `Player ${number} contact number is required`;
        }
      }

      return null;
    }

    if (
      !values.player_name.trim()
    ) {
      return "Player full name is required";
    }

    if (
      !values.in_game_id.trim()
    ) {
      return "In-game ID is required";
    }

    if (
      !registration.player_photo_path &&
      !replacementTekkenPhoto
    ) {
      return "Player photo is required";
    }

    return null;
  }

  // -------------------------------------------------------
  // STORAGE
  // -------------------------------------------------------

  async function getUserId() {
    const {
      data,
      error,
    } =
      await supabase.auth.getUser();

    if (
      error ||
      !data?.user?.id
    ) {
      throw new Error(
        "You must be signed in to edit your registration",
      );
    }

    return data.user.id;
  }

  async function uploadTeamLogo(
    file,
    userId,
  ) {
    const extension =
      extensionForFile(
        file,
      );

    const path =
      `${userId}/${crypto.randomUUID()}.${extension}`;

    const {
      error,
    } =
      await supabase.storage
        .from(
          "team-logos",
        )
        .upload(
          path,
          file,
          {
            contentType:
              file.type,

            upsert: false,
          },
        );

    if (error) {
      throw new Error(
        error.message ||
          "Unable to upload replacement team logo",
      );
    }

    return path;
  }

  async function uploadPlayerPhoto(
    file,
    userId,
    game,
  ) {
    const extension =
      extensionForFile(
        file,
      );

    const path =
      `${userId}/${game}/${crypto.randomUUID()}.${extension}`;

    const {
      error,
    } =
      await supabase.storage
        .from(
          "player-photos",
        )
        .upload(
          path,
          file,
          {
            contentType:
              file.type,

            upsert: false,
          },
        );

    if (error) {
      throw new Error(
        error.message ||
          "Unable to upload replacement player photo",
      );
    }

    return path;
  }

  async function uploadReceipt(
    file,
  ) {
    const extension =
      extensionForFile(
        file,
      );

    const path =
      `receipts/${crypto.randomUUID()}.${extension}`;

    const {
      error,
    } =
      await supabase.storage
        .from(
          "payment-receipts",
        )
        .upload(
          path,
          file,
          {
            cacheControl:
              "3600",

            upsert:
              false,

            contentType:
              file.type,
          },
        );

    if (error) {
      throw new Error(
        error.message ||
          "Unable to upload replacement receipt",
      );
    }

    return path;
  }

  // -------------------------------------------------------
  // SUBMIT
  // -------------------------------------------------------

  async function handleSubmit(
    event,
  ) {
    event.preventDefault();

    const validationError =
      validate();

    if (validationError) {
      toast.error(
        validationError,
      );

      return;
    }

    setBusy(true);

    let registrationUpdated =
      false;

    let uploadedReceiptPath =
      null;

    try {
      const needsUserId =
        Boolean(
          replacementTeamLogo,
        ) ||
        Boolean(
          replacementTekkenPhoto,
        ) ||
        roster.some(
          (player) =>
            Boolean(
              player.replacement_photo,
            ),
        );

      const userId =
        needsUserId
          ? await getUserId()
          : null;

      // -------------------------------------
      // TEAM LOGO
      // -------------------------------------

      let finalTeamLogoPath =
        registration.team_logo_path ??
        "";

      if (
        isSquad &&
        replacementTeamLogo
      ) {
        finalTeamLogoPath =
          await uploadTeamLogo(
            replacementTeamLogo,
            userId,
          );
      }

      // -------------------------------------
      // MLBB PLAYER PHOTOS
      // -------------------------------------

      let finalRoster =
        roster;

      if (isSquad) {
        finalRoster =
          [];

        for (
          let index = 0;
          index <
          roster.length;
          index += 1
        ) {
          const player =
            roster[index];

          let photoPath =
            player.player_photo_path;

          if (
            player.replacement_photo
          ) {
            photoPath =
              await uploadPlayerPhoto(
                player.replacement_photo,
                userId,
                "mlbb",
              );
          }

          finalRoster.push({
            player_photo_path:
              photoPath,

            full_name:
              player.full_name.trim(),

            ign:
              player.ign.trim(),

            birthdate:
              player.birthdate,

            age:
              player.age,

            game_id:
              player.game_id.trim(),

            school:
              player.school.trim(),

            organization:
              player.organization.trim(),

            facebook_link:
              player.facebook_link.trim(),

            contact_number:
              player.contact_number.trim(),

            role:
              player.role.trim(),

            roster_type:
              index < 5
                ? "main"
                : "substitute",
          });
        }
      }

      // -------------------------------------
      // TEKKEN PLAYER PHOTO
      // -------------------------------------

      let finalTekkenPhotoPath =
        registration.player_photo_path ??
        "";

      if (
        !isSquad &&
        replacementTekkenPhoto
      ) {
        finalTekkenPhotoPath =
          await uploadPlayerPhoto(
            replacementTekkenPhoto,
            userId,
            "tekken8",
          );
      }

      // -------------------------------------
      // REGISTRATION PAYLOAD
      // -------------------------------------

      const registrationPayload =
        {
          game:
            registration.game,

          region:
            values.region.trim(),

          contact_name:
            values.contact_name.trim(),

          contact_email:
            values.contact_email.trim(),

          contact_phone:
            values.contact_phone.trim(),

          discord:
            values.discord.trim(),
        };

      if (isSquad) {
        registrationPayload.team_name =
          values.team_name.trim();

        registrationPayload.team_tag =
          values.team_tag
            .trim()
            .toUpperCase();

        registrationPayload.team_logo_path =
          finalTeamLogoPath;

        registrationPayload.roster =
          finalRoster;
      } else {
        registrationPayload.player_name =
          values.player_name.trim();

        registrationPayload.in_game_id =
          values.in_game_id.trim();

        registrationPayload.player_photo_path =
          finalTekkenPhotoPath;
      }

      await updateRegistration({
        data: {
          id:
            registration.id,

          registration:
            registrationPayload,
        },
      });

      registrationUpdated =
        true;

      // -------------------------------------
      // PAYMENT CHANGES
      // -------------------------------------

      const paymentMethodChanged =
        !paymentLocked &&
        values.payment_method !==
          registration.payment_method;

      const paymentReferenceChanged =
        !paymentLocked &&
        values.payment_reference.trim() !==
          (
            registration.payment_reference ??
            ""
          ).trim();

      const paymentChanged =
        paymentMethodChanged ||
        paymentReferenceChanged ||
        Boolean(
          replacementReceipt,
        );

      if (
        paymentChanged &&
        !paymentLocked
      ) {
        if (
          replacementReceipt
        ) {
          uploadedReceiptPath =
            await uploadReceipt(
              replacementReceipt,
            );
        }

        const paymentData = {
          id:
            registration.id,

          payment_method:
            values.payment_method,

          payment_reference:
            values.payment_reference.trim(),
        };

        if (
          uploadedReceiptPath
        ) {
          paymentData.payment_receipt_path =
            uploadedReceiptPath;
        }

        await updatePayment({
          data:
            paymentData,
        });
      }

      await router.invalidate();

      toast.success(
        paymentChanged
          ? "Registration and payment details updated"
          : "Registration updated successfully",
      );

      await navigate({
        to:
          "/my-registration",
      });
    } catch (error) {
      console.error(
        "Registration update failed:",
        error,
      );

      /*
       * Only remove a newly uploaded
       * payment receipt when payment
       * update failed.
       *
       * Registration media is not
       * deleted here because the
       * registration may already have
       * been successfully updated to
       * those new paths.
       */
      if (
        uploadedReceiptPath
      ) {
        await supabase.storage
          .from(
            "payment-receipts",
          )
          .remove([
            uploadedReceiptPath,
          ])
          .catch(() => {});
      }

      toast.error(
        registrationUpdated
          ? "Registration details were saved, but another update failed. Please reopen your registration and check the payment section."
          : error?.message ||
              "Unable to update registration",
      );
    } finally {
      setBusy(false);
    }
  }

  // -------------------------------------------------------
  // UI
  // -------------------------------------------------------

  return (
    <main className="min-h-screen pb-24">
      <header className="border-b border-border/70 bg-secondary/20">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-8 sm:py-16">
          <Link
            to="/my-registration"
            className="inline-flex items-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />

            My Registration
          </Link>

          <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
            Edit Submission
          </p>

          <h1 className="mt-3 font-display text-4xl font-bold uppercase text-foreground sm:text-5xl">
            {isSquad
              ? "Edit Your Squad"
              : "Edit Your Fighter"}
          </h1>

          <p className="mt-4 text-sm text-muted-foreground">
            Reference{" "}
            <span className="text-primary">
              {
                registration.reference_code
              }
            </span>
          </p>

          <div className="mt-5 border border-primary/20 bg-primary/5 p-4">
            <p className="text-sm leading-6 text-muted-foreground">
              You can edit this
              submission while its
              registration status is
              pending. Once tournament
              staff approves or rejects
              the entry, editing will be
              locked.
            </p>
          </div>
        </div>
      </header>

      <form
        onSubmit={
          handleSubmit
        }
        className="mx-auto max-w-5xl px-4 py-10 sm:px-8"
      >
        {/* ============================================= */}
        {/* MLBB TEAM */}
        {/* ============================================= */}

        {isSquad ? (
          <section className="border border-border/80 bg-card/50 p-5 sm:p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
              Team Details
            </p>

            <div className="mt-6 grid gap-6 sm:grid-cols-[160px_1fr]">
              <TeamLogoEditor
                currentPath={
                  registration.team_logo_path
                }
                replacement={
                  replacementTeamLogo
                }
                onChange={
                  handleTeamLogoChange
                }
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Team Name"
                  value={
                    values.team_name
                  }
                  onChange={(
                    value,
                  ) =>
                    changeValue(
                      "team_name",
                      value,
                    )
                  }
                  maxLength={
                    60
                  }
                />

                <Field
                  label="Team Tag"
                  value={
                    values.team_tag
                  }
                  onChange={(
                    value,
                  ) =>
                    changeValue(
                      "team_tag",
                      value,
                    )
                  }
                  maxLength={
                    6
                  }
                />

                <Field
                  label="Region / City"
                  value={
                    values.region
                  }
                  onChange={(
                    value,
                  ) =>
                    changeValue(
                      "region",
                      value,
                    )
                  }
                  maxLength={
                    40
                  }
                  className="sm:col-span-2"
                />
              </div>
            </div>
          </section>
        ) : (
          <section className="border border-border/80 bg-card/50 p-5 sm:p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
              Fighter Details
            </p>

            <div className="mt-6">
              <TekkenPhotoEditor
                currentPath={
                  registration.player_photo_path
                }
                replacement={
                  replacementTekkenPhoto
                }
                onChange={
                  handleTekkenPhotoChange
                }
              />
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <Field
                label="Player Full Name"
                value={
                  values.player_name
                }
                onChange={(
                  value,
                ) =>
                  changeValue(
                    "player_name",
                    value,
                  )
                }
                maxLength={
                  80
                }
              />

              <Field
                label="In-Game ID"
                value={
                  values.in_game_id
                }
                onChange={(
                  value,
                ) =>
                  changeValue(
                    "in_game_id",
                    value,
                  )
                }
                maxLength={
                  40
                }
              />

              <Field
                label="Region / City"
                value={
                  values.region
                }
                onChange={(
                  value,
                ) =>
                  changeValue(
                    "region",
                    value,
                  )
                }
                maxLength={
                  40
                }
                className="sm:col-span-2"
              />
            </div>
          </section>
        )}

        {/* ============================================= */}
        {/* MLBB ROSTER */}
        {/* ============================================= */}

        {isSquad ? (
          <section className="mt-6 border border-border/80 bg-card/50 p-5 sm:p-7">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
                  Squad Roster
                </p>

                <h2 className="mt-2 font-display text-2xl font-bold uppercase text-foreground">
                  7 Players
                </h2>
              </div>

              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                5 Main · 2
                Substitute
              </span>
            </div>

            <div className="mt-6 space-y-6">
              {roster.map(
                (
                  player,
                  index,
                ) => {
                  const isMain =
                    index < 5;

                  return (
                    <article
                      key={
                        index
                      }
                      className="overflow-hidden border border-border/70 bg-background/50"
                    >
                      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-border/70 bg-secondary/20 px-4 py-3">
                        <div>
                          <p className="font-display text-lg font-bold uppercase text-foreground">
                            Player{" "}
                            {index +
                              1}
                          </p>

                          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                            {isMain
                              ? "Main Roster"
                              : "Substitute"}
                          </p>
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
                      </header>

                      <div className="p-4 sm:p-5">
                        <PlayerPhotoEditor
                          player={
                            player
                          }
                          index={
                            index
                          }
                          onChange={
                            handlePlayerPhotoChange
                          }
                        />

                        <div className="mt-6 grid gap-5 sm:grid-cols-2">
                          <Field
                            label="Player Full Name"
                            value={
                              player.full_name
                            }
                            onChange={(
                              value,
                            ) =>
                              changePlayer(
                                index,
                                "full_name",
                                value,
                              )
                            }
                            maxLength={
                              100
                            }
                          />

                          <Field
                            label="IGN"
                            value={
                              player.ign
                            }
                            onChange={(
                              value,
                            ) =>
                              changePlayer(
                                index,
                                "ign",
                                value,
                              )
                            }
                            maxLength={
                              40
                            }
                          />

                          <Field
                            label="Birthdate"
                            type="date"
                            value={
                              player.birthdate
                            }
                            onChange={(
                              value,
                            ) =>
                              changePlayer(
                                index,
                                "birthdate",
                                value,
                              )
                            }
                          />

                          <div className="space-y-2">
                            <Label>
                              Age
                            </Label>

                            <Input
                              value={
                                player.age ??
                                ""
                              }
                              readOnly
                              placeholder="Calculated automatically"
                              className="h-10 rounded-none bg-muted/30"
                            />
                          </div>

                          <Field
                            label="MLID"
                            value={
                              player.game_id
                            }
                            onChange={(
                              value,
                            ) =>
                              changePlayer(
                                index,
                                "game_id",
                                value,
                              )
                            }
                            maxLength={
                              60
                            }
                          />

                          <Field
                            label="Contact Number"
                            type="tel"
                            value={
                              player.contact_number
                            }
                            onChange={(
                              value,
                            ) =>
                              changePlayer(
                                index,
                                "contact_number",
                                value,
                              )
                            }
                            maxLength={
                              30
                            }
                          />

                          <Field
                            label="School"
                            value={
                              player.school
                            }
                            onChange={(
                              value,
                            ) =>
                              changePlayer(
                                index,
                                "school",
                                value,
                              )
                            }
                            maxLength={
                              120
                            }
                            hint="Optional"
                          />

                          <Field
                            label="Organization"
                            value={
                              player.organization
                            }
                            onChange={(
                              value,
                            ) =>
                              changePlayer(
                                index,
                                "organization",
                                value,
                              )
                            }
                            maxLength={
                              120
                            }
                            hint="Optional"
                          />

                          <Field
                            label="Facebook Link"
                            type="url"
                            value={
                              player.facebook_link
                            }
                            onChange={(
                              value,
                            ) =>
                              changePlayer(
                                index,
                                "facebook_link",
                                value,
                              )
                            }
                            maxLength={
                              250
                            }
                            className="sm:col-span-2"
                          />

                          <div className="space-y-2 sm:col-span-2">
                            <Label>
                              Role
                            </Label>

                            <select
                              value={
                                player.role
                              }
                              onChange={(
                                event,
                              ) =>
                                changePlayer(
                                  index,
                                  "role",
                                  event
                                    .target
                                    .value,
                                )
                              }
                              className="h-10 w-full rounded-none border border-input bg-background px-3 text-sm text-foreground outline-none focus:border-primary"
                            >
                              {MLBB_ROLES.map(
                                (
                                  role,
                                ) => (
                                  <option
                                    key={
                                      role ||
                                      "none"
                                    }
                                    value={
                                      role
                                    }
                                  >
                                    {role ||
                                      "Select role (optional)"}
                                  </option>
                                ),
                              )}
                            </select>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                },
              )}
            </div>
          </section>
        ) : null}

        {/* ============================================= */}
        {/* CONTACT */}
        {/* ============================================= */}

        <section className="mt-6 border border-border/80 bg-card/50 p-5 sm:p-7">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
            Main Contact
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <Field
              label={
                isSquad
                  ? "Captain / Contact Name"
                  : "Contact Name"
              }
              value={
                values.contact_name
              }
              onChange={(
                value,
              ) =>
                changeValue(
                  "contact_name",
                  value,
                )
              }
              maxLength={
                80
              }
            />

            <Field
              label="Contact Email"
              type="email"
              value={
                values.contact_email
              }
              onChange={(
                value,
              ) =>
                changeValue(
                  "contact_email",
                  value,
                )
              }
              maxLength={
                120
              }
            />

            <Field
              label="Contact Phone"
              type="tel"
              value={
                values.contact_phone
              }
              onChange={(
                value,
              ) =>
                changeValue(
                  "contact_phone",
                  value,
                )
              }
              maxLength={
                30
              }
              hint="Optional"
            />

            <Field
              label="Discord"
              value={
                values.discord
              }
              onChange={(
                value,
              ) =>
                changeValue(
                  "discord",
                  value,
                )
              }
              maxLength={
                40
              }
              hint="Optional"
            />
          </div>
        </section>

        {/* ============================================= */}
        {/* PAYMENT */}
        {/* ============================================= */}

        <section className="mt-6 border border-border/80 bg-card/50 p-5 sm:p-7">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-primary" />

                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
                  Payment Details
                </p>
              </div>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {paymentLocked
                  ? "Your payment has already been verified by tournament staff."
                  : "You may update your payment reference or upload a replacement receipt."}
              </p>
            </div>

            {paymentLocked ? (
              <div className="flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-emerald-400">
                <CheckCircle2 className="h-4 w-4" />

                <span className="font-mono text-[10px] uppercase tracking-[0.18em]">
                  Verified
                </span>
              </div>
            ) : (
              <span className="border border-primary/30 bg-primary/10 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                {registration.payment_status ||
                  "pending"}
              </span>
            )}
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label>
                Payment Method
              </Label>

              <select
                value={
                  values.payment_method
                }
                disabled={
                  paymentLocked
                }
                onChange={(
                  event,
                ) =>
                  changeValue(
                    "payment_method",
                    event
                      .target
                      .value,
                  )
                }
                className="h-10 w-full rounded-none border border-input bg-background px-3 text-sm text-foreground outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="gcash">
                  GCash
                </option>

                <option value="bank">
                  Bank Transfer
                </option>
              </select>
            </div>

            <Field
              label="Payment Reference"
              value={
                values.payment_reference
              }
              disabled={
                paymentLocked
              }
              onChange={(
                value,
              ) =>
                changeValue(
                  "payment_reference",
                  value,
                )
              }
              maxLength={
                100
              }
              hint="Optional"
            />
          </div>

          <div className="mt-6 border border-border/70 bg-background/50 p-5">
            <div className="flex items-center gap-2">
              <ImageUp className="h-4 w-4 text-primary" />

              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground">
                Payment Receipt
              </p>
            </div>

            <p className="mt-3 text-sm text-muted-foreground">
              Current receipt:{" "}
              <span className="text-foreground">
                {registration.has_payment_receipt
                  ? "Uploaded"
                  : "No receipt uploaded"}
              </span>
            </p>

            {!paymentLocked ? (
              <>
                <div className="mt-5">
                  <Label htmlFor="replacement-receipt">
                    Replace Receipt
                  </Label>

                  <Input
                    id="replacement-receipt"
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    onChange={
                      handleReceiptChange
                    }
                    className="mt-2 rounded-none file:mr-4 file:border-0 file:bg-transparent file:text-sm file:text-foreground"
                  />
                </div>

                <p className="mt-3 text-xs leading-5 text-muted-foreground">
                  JPEG, PNG, or
                  WEBP only.
                  Maximum file
                  size: 5MB.
                </p>

                {replacementReceipt ? (
                  <div className="mt-4 border border-primary/20 bg-primary/5 p-3">
                    <p className="text-xs text-muted-foreground">
                      New receipt
                      selected:
                    </p>

                    <p className="mt-1 break-all text-sm text-foreground">
                      {
                        replacementReceipt.name
                      }
                    </p>
                  </div>
                ) : null}
              </>
            ) : (
              <p className="mt-4 text-xs leading-5 text-muted-foreground">
                Receipt replacement
                is disabled because
                this payment has
                already been
                verified.
              </p>
            )}

            {registration.payment_status ===
            "rejected" ? (
              <div className="mt-5 border border-destructive/30 bg-destructive/5 p-4">
                <p className="text-sm leading-6 text-destructive">
                  Your previous
                  payment was
                  rejected. Update
                  the payment
                  details or upload
                  a new receipt and
                  it will be sent
                  back for
                  verification.
                </p>
              </div>
            ) : null}
          </div>
        </section>

        {/* ============================================= */}
        {/* ACTIONS */}
        {/* ============================================= */}

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border/70 pt-6">
          <Button
            asChild
            type="button"
            variant="ghost"
            className="h-11 rounded-none px-4 font-mono text-[10px] uppercase tracking-[0.2em]"
          >
            <Link to="/my-registration">
              Cancel
            </Link>
          </Button>

          <Button
            type="submit"
            disabled={
              busy
            }
            className="h-11 rounded-none px-6 font-mono text-[10px] uppercase tracking-[0.2em]"
          >
            <Save className="mr-2 h-4 w-4" />

            {busy
              ? "Saving…"
              : "Save Changes"}
          </Button>
        </div>
      </form>
    </main>
  );
}

// ---------------------------------------------------------
// TEAM LOGO EDITOR
// ---------------------------------------------------------

function TeamLogoEditor({
  currentPath,
  replacement,
  onChange,
}) {
  const [
    localPreview,
    setLocalPreview,
  ] = useState("");

  useEffect(() => {
    if (!replacement) {
      setLocalPreview(
        "",
      );

      return;
    }

    const url =
      URL.createObjectURL(
        replacement,
      );

    setLocalPreview(url);

    return () =>
      URL.revokeObjectURL(
        url,
      );
  }, [replacement]);

  const currentUrl =
    getPublicUrl(
      "team-logos",
      currentPath,
    );

  const preview =
    localPreview ||
    currentUrl;

  return (
    <div>
      <Label>
        Team Logo
      </Label>

      <div className="mt-2 grid aspect-square w-full max-w-[160px] place-items-center overflow-hidden border border-border/80 bg-background/60">
        {preview ? (
          <img
            src={preview}
            alt="Team logo"
            className="h-full w-full object-contain p-3"
          />
        ) : (
          <ImagePlus className="h-10 w-10 text-primary/40" />
        )}
      </div>

      <label className="mt-3 flex cursor-pointer items-center gap-2 border border-dashed border-border px-3 py-3 text-xs text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground">
        <Upload className="h-4 w-4 text-primary" />

        {replacement
          ? replacement.name
          : "Replace logo"}

        <input
          type="file"
          accept="image/jpeg,image/png,image/webp"
          onChange={
            onChange
          }
          className="hidden"
        />
      </label>
    </div>
  );
}

// ---------------------------------------------------------
// PLAYER PHOTO EDITOR
// ---------------------------------------------------------

function PlayerPhotoEditor({
  player,
  index,
  onChange,
}) {
  const [
    localPreview,
    setLocalPreview,
  ] = useState("");

  useEffect(() => {
    if (
      !player.replacement_photo
    ) {
      setLocalPreview(
        "",
      );

      return;
    }

    const url =
      URL.createObjectURL(
        player.replacement_photo,
      );

    setLocalPreview(
      url,
    );

    return () =>
      URL.revokeObjectURL(
        url,
      );
  }, [
    player.replacement_photo,
  ]);

  const currentUrl =
    getPublicUrl(
      "player-photos",
      player.player_photo_path,
    );

  const preview =
    localPreview ||
    currentUrl;

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <div className="h-28 w-28 shrink-0 overflow-hidden border border-border/80 bg-secondary/20">
        {preview ? (
          <img
            src={preview}
            alt={`Player ${
              index + 1
            }`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="grid h-full w-full place-items-center">
            <UserRound className="h-9 w-9 text-primary/40" />
          </div>
        )}
      </div>

      <div className="flex-1">
        <Label>
          Player Photo
        </Label>

        <label className="mt-2 flex cursor-pointer items-center gap-3 border border-dashed border-border px-4 py-4 transition-colors hover:border-primary/60">
          <Upload className="h-5 w-5 shrink-0 text-primary" />

          <div>
            <p className="text-sm text-foreground">
              {player.replacement_photo
                ? player
                    .replacement_photo
                    .name
                : "Replace player photo"}
            </p>

            <p className="mt-1 text-xs text-muted-foreground">
              JPG, PNG or
              WEBP · max 5MB
            </p>
          </div>

          <input
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={(
              event,
            ) =>
              onChange(
                index,
                event,
              )
            }
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
}

// ---------------------------------------------------------
// TEKKEN PHOTO EDITOR
// ---------------------------------------------------------

function TekkenPhotoEditor({
  currentPath,
  replacement,
  onChange,
}) {
  const [
    localPreview,
    setLocalPreview,
  ] = useState("");

  useEffect(() => {
    if (!replacement) {
      setLocalPreview(
        "",
      );

      return;
    }

    const url =
      URL.createObjectURL(
        replacement,
      );

    setLocalPreview(
      url,
    );

    return () =>
      URL.revokeObjectURL(
        url,
      );
  }, [replacement]);

  const currentUrl =
    getPublicUrl(
      "player-photos",
      currentPath,
    );

  const preview =
    localPreview ||
    currentUrl;

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <div className="h-36 w-36 shrink-0 overflow-hidden border border-border/80 bg-secondary/20">
        {preview ? (
          <img
            src={preview}
            alt="TEKKEN fighter"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="grid h-full w-full place-items-center">
            <UserRound className="h-11 w-11 text-primary/40" />
          </div>
        )}
      </div>

      <div className="flex-1">
        <Label>
          Player Photo
        </Label>

        <label className="mt-2 flex cursor-pointer items-center gap-3 border border-dashed border-border px-4 py-4 transition-colors hover:border-primary/60">
          <Upload className="h-5 w-5 text-primary" />

          <div>
            <p className="text-sm text-foreground">
              {replacement
                ? replacement.name
                : "Replace player photo"}
            </p>

            <p className="mt-1 text-xs text-muted-foreground">
              JPG, PNG or
              WEBP · max 5MB
            </p>
          </div>

          <input
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={
              onChange
            }
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
}

// ---------------------------------------------------------
// GENERIC FIELD
// ---------------------------------------------------------

function Field({
  label,
  value,
  onChange,
  type = "text",
  maxLength,
  disabled = false,
  hint,
  className = "",
}) {
  return (
    <div
      className={`space-y-2 ${className}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Label>
          {label}
        </Label>

        {hint ? (
          <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
            {hint}
          </span>
        ) : null}
      </div>

      <Input
        type={type}
        value={
          value ?? ""
        }
        disabled={
          disabled
        }
        maxLength={
          maxLength
        }
        onChange={(
          event,
        ) =>
          onChange(
            event.target.value,
          )
        }
        className="h-10 rounded-none disabled:cursor-not-allowed disabled:opacity-50"
      />
    </div>
  );
}