import { useEffect, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import {
  ArrowLeft,
  ArrowRight,
  Send,
} from "lucide-react";
import { toast } from "sonner";

import { supabase } from "@/api/supabaseClient";

import ContactFields from "@/components/registration/ContactFields";
import MlbbFields from "@/components/registration/MlbbFields";
import PaymentFields from "@/components/registration/PaymentFields";
import RealmStep from "@/components/registration/RealmStep";
import SuccessPanel from "@/components/registration/SuccessPanel";
import TekkenFields from "@/components/registration/TekkenFields";

import { Button } from "@/components/ui/button";

import {
  submitRegistration,
} from "@/lib/server-fns";

const EMPTY_VALUES = {
  team_name: "",
  team_tag: "",
  region: "",

  player_name: "",
  in_game_id: "",

  contact_name: "",
  contact_email: "",
  contact_phone: "",
  discord: "",
};

const EMPTY_ROSTER = Array.from(
  {
    length: 7,
  },
  (_, index) => ({
    photo: null,
    full_name: "",
    ign: "",
    birthdate: "",
    age: null,
    game_id: "",
    school: "",
    organization: "",
    facebook_link: "",
    contact_number: "",
    role: "",

    roster_type:
      index < 5
        ? "main"
        : "substitute",
  }),
);

const EMAIL_RE =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const compact = (source) =>
  Object.fromEntries(
    Object.entries(source).filter(
      ([, value]) =>
        value !== "" &&
        value !== null &&
        value !== undefined,
    ),
  );

function calculateAge(birthdate) {
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

  const month =
    today.getMonth() -
    date.getMonth();

  if (
    month < 0 ||
    (month === 0 &&
      today.getDate() <
        date.getDate())
  ) {
    age -= 1;
  }

  return age;
}

function isFacebookUrl(value) {
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

function validateImage(file) {
  if (!file) {
    return null;
  }

  const allowed = [
    "image/jpeg",
    "image/png",
    "image/webp",
  ];

  if (
    !allowed.includes(
      file.type,
    )
  ) {
    return "Image must be JPG, PNG, or WEBP";
  }

  if (
    file.size >
    5 * 1024 * 1024
  ) {
    return "Image must be 5 MB or smaller";
  }

  return null;
}

function prefersReducedMotion() {
  if (
    typeof window === "undefined" ||
    !window.matchMedia
  ) {
    return false;
  }

  return window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
}

function StepTransition({
  transitionKey,
  direction,
  children,
}) {
  const containerRef =
    useRef(null);

  useEffect(() => {
    const element =
      containerRef.current;

    if (
      !element ||
      typeof element.animate !== "function" ||
      prefersReducedMotion()
    ) {
      return;
    }

    const offset =
      direction === "back"
        ? -26
        : 26;

    const animation =
      element.animate(
        [
          {
            opacity: 0,
            transform: `translate3d(${offset}px, 8px, 0) scale(0.995)`,
          },
          {
            opacity: 1,
            transform:
              "translate3d(0, 0, 0) scale(1)",
          },
        ],
        {
          duration: 380,
          easing:
            "cubic-bezier(0.22, 1, 0.36, 1)",
          fill: "both",
        },
      );

    return () =>
      animation.cancel();
  }, [
    transitionKey,
    direction,
  ]);

  return (
    <div
      ref={containerRef}
      className="will-change-transform"
    >
      {children}
    </div>
  );
}

function SuccessTransition({
  children,
}) {
  const containerRef =
    useRef(null);

  useEffect(() => {
    const element =
      containerRef.current;

    if (
      !element ||
      typeof element.animate !== "function" ||
      prefersReducedMotion()
    ) {
      return;
    }

    const animation =
      element.animate(
        [
          {
            opacity: 0,
            transform:
              "translate3d(0, 18px, 0) scale(0.985)",
          },
          {
            opacity: 1,
            transform:
              "translate3d(0, 0, 0) scale(1)",
          },
        ],
        {
          duration: 520,
          easing:
            "cubic-bezier(0.22, 1, 0.36, 1)",
          fill: "both",
        },
      );

    return () =>
      animation.cancel();
  }, []);

  return (
    <div
      ref={containerRef}
      className="will-change-transform"
    >
      {children}
    </div>
  );
}

export default function RegistrationWizard() {
  const submit =
    useServerFn(
      submitRegistration,
    );

  const [game, setGame] =
    useState(null);

  const [step, setStep] =
    useState(0);

  const [
    transitionDirection,
    setTransitionDirection,
  ] = useState("forward");

  const [values, setValues] =
    useState(
      EMPTY_VALUES,
    );

  const [roster, setRoster] =
    useState(
      EMPTY_ROSTER,
    );

  const [
    teamLogo,
    setTeamLogo,
  ] = useState(null);

  const [
    tekkenPhoto,
    setTekkenPhoto,
  ] = useState(null);

  const [
    paymentMethod,
    setPaymentMethod,
  ] = useState("");

  const [
    paymentReference,
    setPaymentReference,
  ] = useState("");

  const [
    paymentReceipt,
    setPaymentReceipt,
  ] = useState(null);

  const [errors, setErrors] =
    useState({});

  const [busy, setBusy] =
    useState(false);

  const [result, setResult] =
    useState(null);

  useEffect(() => {
    if (
      !result ||
      prefersReducedMotion()
    ) {
      return;
    }

    import(
      "canvas-confetti"
    ).then(
      ({
        default: confetti,
      }) => {
        confetti({
          particleCount: 140,
          spread: 80,

          origin: {
            y: 0.65,
          },

          colors: [
            "#D4AF37",
            "#A38953",
            "#1F302D",
            "#F2F5F4",
          ],
        });
      },
    );
  }, [result]);

  const labels =
    game === "mlbb"
      ? [
          "Game",
          "Team",
          "Players",
          "Contact",
          "Payment",
        ]
      : [
          "Game",
          "Fighter",
          "Contact",
          "Payment",
        ];

  const finalStep =
    labels.length - 1;

  const change =
    (key) =>
    (event) => {
      const { value } =
        event.target;

      setValues(
        (previous) => ({
          ...previous,
          [key]: value,
        }),
      );

      setErrors(
        (previous) => ({
          ...previous,
          [key]: undefined,
        }),
      );
    };

  const changeRoster = (
    index,
    key,
    value,
  ) => {
    setRoster(
      (previous) =>
        previous.map(
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

    setErrors(
      (previous) => ({
        ...previous,

        [`${key}_${index}`]:
          undefined,

        ...(key ===
        "birthdate"
          ? {
              [`age_${index}`]:
                undefined,
            }
          : {}),
      }),
    );
  };

  function teamErrors() {
    const next = {};

    if (
      values.team_name
        .trim()
        .length < 2
    ) {
      next.team_name =
        "Enter your team name";
    }

    if (!teamLogo) {
      next.team_logo =
        "Upload your team logo";
    } else {
      const logoError =
        validateImage(
          teamLogo,
        );

      if (logoError) {
        next.team_logo =
          logoError;
      }
    }

    if (
      values.team_tag &&
      values.team_tag
        .trim()
        .length < 2
    ) {
      next.team_tag =
        "Use 2–6 characters or leave it blank";
    }

    return next;
  }

  function playerErrors() {
    const next = {};

    roster.forEach(
      (
        player,
        index,
      ) => {
        if (!player.photo) {
          next[`photo_${index}`] =
            "Player photo is required";
        } else {
          const photoError =
            validateImage(player.photo);

          if (photoError) {
            next[`photo_${index}`] =
              photoError;
          }
        }

        if (
          player.full_name
            .trim()
            .length < 2
        ) {
          next[
            `full_name_${index}`
          ] =
            "Full name is required";
        }

        if (
          !player.ign.trim()
        ) {
          next[
            `ign_${index}`
          ] =
            "IGN is required";
        }

        if (
          !player.birthdate
        ) {
          next[
            `birthdate_${index}`
          ] =
            "Birthdate is required";
        }

        if (
          player.age ===
            null ||
          player.age < 10 ||
          player.age > 100
        ) {
          next[
            `age_${index}`
          ] =
            "Enter a valid birthdate";
        }

        if (
          !player.game_id
            .trim()
        ) {
          next[
            `game_id_${index}`
          ] =
            "MLID is required";
        }

        if (
          !player.facebook_link
            .trim()
        ) {
          next[
            `facebook_link_${index}`
          ] =
            "Facebook link is required";
        } else if (
          !isFacebookUrl(
            player.facebook_link
              .trim(),
          )
        ) {
          next[
            `facebook_link_${index}`
          ] =
            "Enter a valid Facebook link";
        }

        if (
          player.contact_number
            .trim()
            .length < 7
        ) {
          next[
            `contact_number_${index}`
          ] =
            "Contact number is required";
        }
      },
    );

    return next;
  }

  function tekkenErrors() {
    const next = {};

    if (
      values.player_name
        .trim()
        .length < 2
    ) {
      next.player_name =
        "Enter your full name";
    }

    if (
      !values.in_game_id
        .trim()
    ) {
      next.in_game_id =
        "Enter your in-game ID";
    }

    if (!tekkenPhoto) {
      next.player_photo =
        "Player photo is required";
    } else {
      const photoError =
        validateImage(tekkenPhoto);

      if (photoError) {
        next.player_photo =
          photoError;
      }
    }

    return next;
  }

  function contactErrors() {
    const next = {};

    if (
      values.contact_name
        .trim()
        .length < 2
    ) {
      next.contact_name =
        "Enter a name we can reach";
    }

    if (
      !EMAIL_RE.test(
        values.contact_email
          .trim(),
      )
    ) {
      next.contact_email =
        "Enter a valid email address";
    }

    return next;
  }

  function paymentErrors() {
    const next = {};

    if (
      !paymentMethod
    ) {
      next.payment_method =
        "Choose a payment method";
    }

    if (
      !paymentReceipt
    ) {
      next.payment_receipt =
        "Upload your payment receipt";
    } else {
      const receiptError =
        validateImage(
          paymentReceipt,
        );

      if (receiptError) {
        next.payment_receipt =
          receiptError.replace(
            "Image",
            "Receipt",
          );
      }
    }

    return next;
  }

  function goNext() {
    let next = {};

    if (
      game === "mlbb"
    ) {
      if (step === 1) {
        next =
          teamErrors();
      }

      if (step === 2) {
        next =
          playerErrors();
      }

      if (step === 3) {
        next =
          contactErrors();
      }
    } else {
      if (step === 1) {
        next =
          tekkenErrors();
      }

      if (step === 2) {
        next =
          contactErrors();
      }
    }

    if (
      Object.keys(next)
        .length
    ) {
      setErrors(next);

      window.scrollTo({
        top: 0,
        behavior:
          "smooth",
      });

      return;
    }

    setErrors({});

    setTransitionDirection(
      "forward",
    );

    setStep(
      (current) =>
        current + 1,
    );

    window.scrollTo({
      top: 0,
      behavior:
        "smooth",
    });
  }

  async function handleSubmit(
    event,
  ) {
    event.preventDefault();

    if (
      step < finalStep
    ) {
      goNext();
      return;
    }

    const invalid =
      paymentErrors();

    if (
      Object.keys(invalid)
        .length
    ) {
      setErrors(
        invalid,
      );

      return;
    }

    setBusy(true);

    let uploadedLogoPath =
      null;

    let uploadedReceiptPath =
      null;

    let uploadedTekkenPhotoPath =
      null;

    let uploadedPlayerPhotoPaths =
      [];

    try {
      const extensionMap = {
        "image/jpeg": "jpg",
        "image/png": "png",
        "image/webp": "webp",
      };

      const {
        data: userResult,
        error: userError,
      } =
        await supabase.auth.getUser();

      if (
        userError ||
        !userResult?.user
      ) {
        throw new Error(
          "You must be signed in to register",
        );
      }

      const userId =
        userResult.user.id;

      /*
       * MLBB TEAM LOGO
       */
      if (
        game === "mlbb"
      ) {
        const logoExtension =
          extensionMap[
            teamLogo.type
          ] ?? "png";

        uploadedLogoPath =
          `${userId}/${crypto.randomUUID()}.${logoExtension}`;

        const {
          error:
            logoUploadError,
        } =
          await supabase.storage
            .from(
              "team-logos",
            )
            .upload(
              uploadedLogoPath,
              teamLogo,
              {
                contentType:
                  teamLogo.type,

                upsert: false,
              },
            );

        if (
          logoUploadError
        ) {
          throw new Error(
            logoUploadError.message ||
              "Unable to upload team logo",
          );
        }

        /*
         * MLBB PLAYER PHOTOS
         */
        for (
          let index = 0;
          index < roster.length;
          index += 1
        ) {
          const player =
            roster[index];

          const extension =
            extensionMap[
              player.photo.type
            ] ?? "jpg";

          const path =
            `${userId}/mlbb/${crypto.randomUUID()}.${extension}`;

          const {
            error:
              playerUploadError,
          } =
            await supabase.storage
              .from(
                "player-photos",
              )
              .upload(
                path,
                player.photo,
                {
                  contentType:
                    player.photo.type,

                  upsert: false,
                },
              );

          if (
            playerUploadError
          ) {
            throw new Error(
              playerUploadError.message ||
                `Unable to upload Player ${index + 1} photo`,
            );
          }

          uploadedPlayerPhotoPaths.push(
            path,
          );
        }
      }

      /*
       * TEKKEN PLAYER PHOTO
       */
      if (
        game === "tekken8"
      ) {
        const extension =
          extensionMap[
            tekkenPhoto.type
          ] ?? "jpg";

        uploadedTekkenPhotoPath =
          `${userId}/tekken8/${crypto.randomUUID()}.${extension}`;

        const {
          error:
            playerUploadError,
        } =
          await supabase.storage
            .from(
              "player-photos",
            )
            .upload(
              uploadedTekkenPhotoPath,
              tekkenPhoto,
              {
                contentType:
                  tekkenPhoto.type,

                upsert: false,
              },
            );

        if (
          playerUploadError
        ) {
          throw new Error(
            playerUploadError.message ||
              "Unable to upload player photo",
          );
        }
      }

      /*
       * PAYMENT RECEIPT
       */
      const receiptExtension =
        extensionMap[
          paymentReceipt.type
        ] ?? "jpg";

      uploadedReceiptPath =
        `receipts/${
          crypto.randomUUID()
        }.${receiptExtension}`;

      const {
        error:
          receiptUploadError,
      } =
        await supabase.storage
          .from(
            "payment-receipts",
          )
          .upload(
            uploadedReceiptPath,
            paymentReceipt,
            {
              contentType:
                paymentReceipt.type,

              upsert: false,
            },
          );

      if (
        receiptUploadError
      ) {
        throw new Error(
          receiptUploadError.message ||
            "Unable to upload payment receipt",
        );
      }

      const shared =
        compact({
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

          payment_method:
            paymentMethod,

          payment_reference:
            paymentReference.trim(),

          payment_receipt_path:
            uploadedReceiptPath,
        });

      const payload =
        game === "mlbb"
          ? {
              game,

              ...shared,

              ...compact({
                team_name:
                  values.team_name.trim(),

                team_tag:
                  values.team_tag
                    .trim()
                    .toUpperCase(),

                team_logo_path:
                  uploadedLogoPath,
              }),

              roster:
                roster.map(
                  (
                    player,
                    index,
                  ) =>
                    compact({
                      player_photo_path:
                        uploadedPlayerPhotoPaths[
                          index
                        ],

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
                        player.role,

                      roster_type:
                        index < 5
                          ? "main"
                          : "substitute",
                    }),
                ),
            }
          : {
              game,

              ...shared,

              ...compact({
                player_name:
                  values.player_name.trim(),

                in_game_id:
                  values.in_game_id.trim(),

                player_photo_path:
                  uploadedTekkenPhotoPath,
              }),
            };

      const created =
        await submit({
          data: payload,
        });

      setResult(created);
    } catch (error) {
      /*
       * Avoid leaving unused uploads
       * behind when registration fails.
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

      if (
        uploadedLogoPath
      ) {
        await supabase.storage
          .from(
            "team-logos",
          )
          .remove([
            uploadedLogoPath,
          ])
          .catch(() => {});
      }

      if (
        uploadedPlayerPhotoPaths
          .length
      ) {
        await supabase.storage
          .from(
            "player-photos",
          )
          .remove(
            uploadedPlayerPhotoPaths,
          )
          .catch(() => {});
      }

      if (
        uploadedTekkenPhotoPath
      ) {
        await supabase.storage
          .from(
            "player-photos",
          )
          .remove([
            uploadedTekkenPhotoPath,
          ])
          .catch(() => {});
      }

      toast.error(
        error?.message ||
          "We couldn't submit your entry. Please try again.",
      );
    } finally {
      setBusy(false);
    }
  }

  if (result) {
    return (
      <div className="mx-auto max-w-4xl px-4 sm:px-8">
        <SuccessTransition>
          <SuccessPanel
            game={game}
            reference={
              result.reference_code
            }
          />
        </SuccessTransition>
      </div>
    );
  }

  const contactStep =
    game === "mlbb"
      ? 3
      : 2;

  const paymentStep =
    game === "mlbb"
      ? 4
      : 3;

  return (
    <div className="mx-auto max-w-4xl px-4 pt-12 sm:px-8 sm:pt-16">
      {/* PROGRESS */}
      <ol className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-[0.26em] sm:text-[11px]">
        {labels.map(
          (
            label,
            index,
          ) => (
            <li
              key={label}
              className="flex items-center gap-3"
            >
              <span
                className={`transition-all duration-300 motion-reduce:transition-none ${
                  index === step
                    ? "text-primary drop-shadow-[0_0_10px_rgba(201,169,108,0.28)]"
                    : index < step
                      ? "text-primary/80"
                      : "text-muted-foreground"
                }`}
              >
                {String(
                  index + 1,
                ).padStart(
                  2,
                  "0",
                )}{" "}
                {label}
              </span>

              {index <
              labels.length -
                1 ? (
                <span
                  className={`h-px w-6 transition-all duration-500 motion-reduce:transition-none sm:w-10 ${
                    index < step
                      ? "bg-primary shadow-[0_0_8px_rgba(201,169,108,0.25)]"
                      : "bg-border"
                  }`}
                />
              ) : null}
            </li>
          ),
        )}
      </ol>

      <div className="mt-6 h-px w-full bg-border">
        <div
          className="h-px bg-primary shadow-[0_0_10px_rgba(201,169,108,0.28)] transition-[width] duration-500 ease-out motion-reduce:transition-none"
          style={{
            width: `${
              ((step + 1) /
                labels.length) *
              100
            }%`,
          }}
        />
      </div>

      <form
        onSubmit={
          handleSubmit
        }
        className="mt-10 border border-border/80 bg-card/60 p-5 transition-shadow duration-500 motion-reduce:transition-none sm:p-8"
      >
        <StepTransition
          transitionKey={`${game ?? "none"}-${step}`}
          direction={transitionDirection}
        >
        {/* STEP 01 — GAME */}
        {step === 0 ? (
          <RealmStep
            value={game}
            onSelect={(
              realm,
            ) => {
              setGame(
                realm,
              );

              setErrors(
                {},
              );

              setTransitionDirection(
                "forward",
              );

              setStep(1);
            }}
          />
        ) : null}

        {/* MLBB STEP 02 — TEAM */}
        {game ===
          "mlbb" &&
        step === 1 ? (
          <MlbbFields
            section="team"
            values={values}
            roster={roster}
            errors={errors}
            onChange={change}
            onRosterChange={
              changeRoster
            }
            teamLogo={
              teamLogo
            }
            onTeamLogoChange={(
              file,
            ) => {
              setTeamLogo(
                file,
              );

              setErrors(
                (
                  previous,
                ) => ({
                  ...previous,

                  team_logo:
                    undefined,
                }),
              );
            }}
          />
        ) : null}

        {/* MLBB STEP 03 — PLAYERS */}
        {game ===
          "mlbb" &&
        step === 2 ? (
          <MlbbFields
            section="players"
            values={values}
            roster={roster}
            errors={errors}
            onChange={change}
            onRosterChange={
              changeRoster
            }
            teamLogo={
              teamLogo
            }
            onTeamLogoChange={
              setTeamLogo
            }
          />
        ) : null}

        {/* TEKKEN STEP 02 */}
        {game ===
          "tekken8" &&
        step === 1 ? (
          <TekkenFields
            values={values}
            errors={errors}
            onChange={change}
            playerPhoto={
              tekkenPhoto
            }
            onPlayerPhotoChange={(
              file,
            ) => {
              setTekkenPhoto(
                file,
              );

              setErrors(
                (
                  previous,
                ) => ({
                  ...previous,

                  player_photo:
                    undefined,
                }),
              );
            }}
          />
        ) : null}

        {/* CONTACT */}
        {step ===
        contactStep ? (
          <ContactFields
            values={values}
            errors={errors}
            onChange={change}
            game={game}
            stepNumber={
              contactStep +
              1
            }
          />
        ) : null}

        {/* PAYMENT */}
        {step ===
        paymentStep ? (
          <PaymentFields
            stepNumber={
              paymentStep +
              1
            }
            method={
              paymentMethod
            }
            onMethodChange={(
              value,
            ) => {
              setPaymentMethod(
                value,
              );

              setErrors(
                (
                  previous,
                ) => ({
                  ...previous,

                  payment_method:
                    undefined,
                }),
              );
            }}
            receipt={
              paymentReceipt
            }
            onReceiptChange={(
              file,
            ) => {
              setPaymentReceipt(
                file,
              );

              setErrors(
                (
                  previous,
                ) => ({
                  ...previous,

                  payment_receipt:
                    undefined,
                }),
              );
            }}
            reference={
              paymentReference
            }
            onReferenceChange={
              setPaymentReference
            }
            errors={
              errors
            }
          />
        ) : null}

        </StepTransition>

        {/* NAVIGATION */}
        {step > 0 ? (
          <div className="mt-8 flex flex-col gap-3 border-t border-border/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <Button
              type="button"
              variant="ghost"
              onClick={() => {
                setErrors(
                  {},
                );

                setTransitionDirection(
                  "back",
                );

                setStep(
                  (
                    current,
                  ) =>
                    current -
                    1,
                );
              }}
              className="group h-12 justify-start rounded-none px-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary/40 hover:text-foreground active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1 motion-reduce:transform-none motion-reduce:transition-none" />

              Back
            </Button>

            {step <
            finalStep ? (
              <Button
                type="button"
                onClick={
                  goNext
                }
                className="group h-12 rounded-none px-7 font-mono text-[11px] uppercase tracking-[0.2em] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none"
              >
                Continue

                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none" />
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={
                  busy
                }
                className="group h-12 rounded-none px-7 font-mono text-[11px] uppercase tracking-[0.2em] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none"
              >
                {busy
                  ? "Transmitting…"
                  : "Submit entry"}

                <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none" />
              </Button>
            )}
          </div>
        ) : null}
      </form>

      <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        Your registration is tied
        to your signed-in account
        and reviewed by tournament
        staff before approval.
      </p>
    </div>
  );
}