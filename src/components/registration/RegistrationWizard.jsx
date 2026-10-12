import { useEffect, useState } from "react";
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

export default function RegistrationWizard() {
  const submit =
    useServerFn(
      submitRegistration,
    );

  const [game, setGame] =
    useState(null);

  const [step, setStep] =
    useState(0);

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
    if (!result) {
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

    try {
      const extensionMap = {
        "image/jpeg": "jpg",
        "image/png": "png",
        "image/webp": "webp",
      };

      /*
       * MLBB TEAM LOGO
       */
      if (
        game === "mlbb"
      ) {
        const {
          data:
            userResult,
          error:
            userError,
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

        const logoExtension =
          extensionMap[
            teamLogo.type
          ] ?? "png";

        uploadedLogoPath =
          `${
            userResult.user.id
          }/${
            crypto.randomUUID()
          }.${logoExtension}`;

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
        <SuccessPanel
          game={game}
          reference={
            result.reference_code
          }
        />
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
                className={
                  index <= step
                    ? "text-primary"
                    : "text-muted-foreground"
                }
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
                  className={
                    index <
                    step
                      ? "h-px w-6 bg-primary sm:w-10"
                      : "h-px w-6 bg-border sm:w-10"
                  }
                />
              ) : null}
            </li>
          ),
        )}
      </ol>

      <div className="mt-6 h-px w-full bg-border">
        <div
          className="h-px bg-primary transition-all duration-500"
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
        className="mt-10 border border-border/80 bg-card/60 p-5 sm:p-8"
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

                setStep(
                  (
                    current,
                  ) =>
                    current -
                    1,
                );
              }}
              className="h-12 justify-start rounded-none px-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:bg-secondary/40 hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />

              Back
            </Button>

            {step <
            finalStep ? (
              <Button
                type="button"
                onClick={
                  goNext
                }
                className="h-12 rounded-none px-7 font-mono text-[11px] uppercase tracking-[0.2em]"
              >
                Continue

                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={
                  busy
                }
                className="h-12 rounded-none px-7 font-mono text-[11px] uppercase tracking-[0.2em]"
              >
                {busy
                  ? "Transmitting…"
                  : "Submit entry"}

                <Send className="ml-2 h-4 w-4" />
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