import {
  AlertTriangle,
  CalendarDays,
  Check,
  CheckCircle2,
  CreditCard,
  ExternalLink,
  Eye,
  Gamepad2,
  GraduationCap,
  ImageIcon,
  MapPin,
  Phone,
  RotateCcw,
  ShieldCheck,
  UserRound,
  Users,
  X,
  XCircle,
} from "lucide-react";

import { useRouter } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast } from "sonner";

import { supabase } from "@/api/supabaseClient";
import { Button } from "@/components/ui/button";

import {
  getPaymentReceiptUrl,
  setPaymentStatus,
} from "@/lib/server-fns";

const STATUS_STYLES = {
  pending:
    "border-primary/50 bg-primary/5 text-primary",

  approved:
    "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",

  verified:
    "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",

  rejected:
    "border-destructive/40 bg-destructive/10 text-destructive",
};

function StatusBadge({
  status,
}) {
  const value =
    status ?? "pending";

  return (
    <span
      className={`border px-2 py-1 font-mono text-[9px] uppercase tracking-[0.18em] ${
        STATUS_STYLES[value] ??
        STATUS_STYLES.pending
      }`}
    >
      {value}
    </span>
  );
}

function formatDate(
  value,
) {
  if (!value) {
    return "—";
  }

  const date =
    new Date(value);

  if (
    Number.isNaN(
      date.getTime(),
    )
  ) {
    return value;
  }

  return date.toLocaleString(
    "en-PH",
    {
      dateStyle: "medium",
      timeStyle: "short",
    },
  );
}

function formatBirthdate(
  value,
) {
  if (!value) {
    return "—";
  }

  const date =
    new Date(
      `${value}T00:00:00`,
    );

  if (
    Number.isNaN(
      date.getTime(),
    )
  ) {
    return value;
  }

  return date.toLocaleDateString(
    "en-PH",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );
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

function Detail({
  label,
  children,
  icon: Icon,
  className = "",
}) {
  return (
    <div
      className={`min-w-0 border border-border/35 bg-background/15 p-3 ${className}`}
    >
      <p className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
        {Icon ? (
          <Icon className="h-3 w-3 text-primary/80" />
        ) : null}

        {label}
      </p>

      <div className="mt-1 break-words text-sm text-foreground">
        {children ||
          "—"}
      </div>
    </div>
  );
}

function PlayerReviewCard({
  player,
  index,
}) {
  const photoUrl =
    getPublicUrl(
      "player-photos",
      player.player_photo_path,
    );

  const rosterType =
    player.roster_type ||
    (index < 5
      ? "main"
      : "substitute");

  const isMain =
    rosterType ===
    "main";

  return (
    <article className="card-interactive card-interactive-glow group relative min-w-0 overflow-hidden border border-border/55 bg-background/25 backdrop-blur-sm">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent"
      />
      <header className="relative flex flex-col items-start gap-3 border-b border-border/50 bg-card/35 px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-4 sm:py-4">
        <div>
          <p className="font-display text-lg font-bold uppercase tracking-[0.04em] text-foreground">
            Player{" "}
            {index + 1}
          </p>

          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
            {isMain
              ? "Main Roster"
              : "Substitute"}
          </p>
        </div>

        <span
          className={`border px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.18em] ${
            isMain
              ? "border-primary/35 bg-primary/[0.06] text-primary"
              : "border-border/50 bg-background/15 text-muted-foreground"
          }`}
        >
          {isMain
            ? "Main"
            : "Sub"}
        </span>
      </header>

      <div className="p-3 sm:p-4">
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="h-24 w-24 shrink-0 overflow-hidden border border-primary/20 bg-card/30 sm:h-28 sm:w-28">
            {photoUrl ? (
              <img
                src={photoUrl}
                alt={
                  player.ign ||
                  `Player ${index + 1}`
                }
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            ) : (
              <div className="grid h-full w-full place-items-center">
                <UserRound className="h-9 w-9 text-primary/40" />
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <h4 className="break-words font-display text-lg font-bold uppercase tracking-[0.04em] text-foreground sm:text-xl">
              {player.ign ||
                "No IGN"}
            </h4>

            <p className="mt-1 text-sm text-muted-foreground">
              {player.full_name ||
                "No full name"}
            </p>

            {player.role ? (
              <span className="mt-3 inline-flex border border-primary/30 bg-primary/5 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-primary">
                {
                  player.role
                }
              </span>
            ) : null}
          </div>
        </div>

        <div className="mt-5 grid gap-4 border-t border-border/60 pt-5 sm:grid-cols-2 xl:grid-cols-3">
          <Detail
            label="Full Name"
            icon={UserRound}
          >
            {
              player.full_name
            }
          </Detail>

          <Detail
            label="MLID"
            icon={Gamepad2}
          >
            {
              player.game_id
            }
          </Detail>

          <Detail
            label="Birthdate"
            icon={CalendarDays}
          >
            {formatBirthdate(
              player.birthdate,
            )}
          </Detail>

          <Detail label="Age">
            {player.age !==
              undefined &&
            player.age !==
              null
              ? `${player.age} years old`
              : "—"}
          </Detail>

          <Detail
            label="Contact"
            icon={Phone}
          >
            {player.contact_number ? (
              <a
                href={`tel:${player.contact_number}`}
                className="transition-colors hover:text-primary"
              >
                {
                  player.contact_number
                }
              </a>
            ) : (
              "—"
            )}
          </Detail>

          <Detail
            label="School"
            icon={GraduationCap}
          >
            {player.school ||
              "Not provided"}
          </Detail>

          <Detail label="Organization">
            {player.organization ||
              "Not provided"}
          </Detail>

          <Detail
            label="Facebook"
            className="sm:col-span-2"
          >
            {player.facebook_link ? (
              <a
                href={
                  player.facebook_link
                }
                target="_blank"
                rel="noreferrer"
                className="inline-flex max-w-full items-start gap-1.5 break-all text-primary hover:underline"
              >
                <span className="min-w-0 break-all">
                  {
                    player.facebook_link
                  }
                </span>

                <ExternalLink className="h-3.5 w-3.5 shrink-0" />
              </a>
            ) : (
              "—"
            )}
          </Detail>
        </div>
      </div>

      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-6 w-6 border-b border-r border-primary/15 transition-all duration-300 group-hover:h-9 group-hover:w-9 group-hover:border-primary/35"
      />
    </article>
  );
}

function MlbbReview({
  item,
}) {
  const teamLogoUrl =
    getPublicUrl(
      "team-logos",
      item.team_logo_path,
    );

  return (
    <>
      <section className="card-interactive card-interactive-glow relative min-w-0 overflow-hidden border border-border/55 bg-background/20 p-3 backdrop-blur-sm sm:p-5">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent"
        />
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-primary">
          Team Identity
        </p>

        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
          <div className="group relative grid h-24 w-24 shrink-0 place-items-center overflow-hidden border border-primary/20 bg-card/30 sm:h-28 sm:w-28">
            {teamLogoUrl ? (
              <img
                src={
                  teamLogoUrl
                }
                alt={`${
                  item.team_name ||
                  "Team"
                } logo`}
                className="h-full w-full object-contain p-3 transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <Users className="h-9 w-9 text-primary/40" />
            )}
          </div>

          <div>
            <h4 className="break-words font-display text-xl font-bold uppercase text-foreground sm:text-2xl">
              {item.team_name ||
                "Untitled Squad"}
            </h4>

            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
              {item.team_tag ? (
                <span>
                  Tag:{" "}
                  <span className="text-foreground">
                    {
                      item.team_tag
                    }
                  </span>
                </span>
              ) : null}

              {item.region ? (
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-primary" />

                  {
                    item.region
                  }
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <div className="flex flex-col items-start gap-2 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-3">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-primary">
              Full Registration
            </p>

            <h4 className="mt-1 font-display text-xl font-bold uppercase text-foreground">
              7-Player Roster
            </h4>
          </div>

          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
            5 Main · 2 Substitute
          </span>
        </div>

        {Array.isArray(
          item.roster,
        ) &&
        item.roster.length ? (
          <div className="mt-4 grid gap-4 xl:grid-cols-2">
            {item.roster.map(
              (
                player,
                index,
              ) => (
                <PlayerReviewCard
                  key={`${
                    player.ign ||
                    "player"
                  }-${index}`}
                  player={
                    player
                  }
                  index={
                    index
                  }
                />
              ),
            )}
          </div>
        ) : (
          <p className="mt-4 border border-dashed border-border/55 bg-background/15 p-5 text-sm text-muted-foreground">
            No roster
            information
            available.
          </p>
        )}
      </section>
    </>
  );
}

function TekkenReview({
  item,
}) {
  const photoUrl =
    getPublicUrl(
      "player-photos",
      item.player_photo_path,
    );

  return (
    <section className="card-interactive card-interactive-glow relative min-w-0 overflow-hidden border border-border/55 bg-background/20 p-3 backdrop-blur-sm sm:p-5">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent"
      />
      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-primary">
        Fighter Information
      </p>

      <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:gap-5">
        <div className="group relative h-32 w-32 shrink-0 overflow-hidden border border-primary/20 bg-card/30 sm:h-40 sm:w-40">
          {photoUrl ? (
            <img
              src={photoUrl}
              alt={
                item.player_name ||
                "TEKKEN fighter"
              }
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="grid h-full w-full place-items-center">
              <UserRound className="h-12 w-12 text-primary/40" />
            </div>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <h4 className="break-words font-display text-xl font-bold uppercase text-foreground sm:text-2xl">
            {item.in_game_id ||
              "Unnamed Fighter"}
          </h4>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Detail
              label="Full Name"
              icon={UserRound}
            >
              {
                item.player_name
              }
            </Detail>

            <Detail
              label="In-game ID"
              icon={Gamepad2}
            >
              {
                item.in_game_id
              }
            </Detail>

            <Detail
              label="Region / City"
              icon={MapPin}
            >
              {item.region ||
                "Not provided"}
            </Detail>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function RegistrationRow({
  item,
  busy,
  onDecide,
}) {
  const router =
    useRouter();

  const changePaymentStatus =
    useServerFn(
      setPaymentStatus,
    );

  const getReceipt =
    useServerFn(
      getPaymentReceiptUrl,
    );

  const [
    paymentBusy,
    setPaymentBusy,
  ] = useState(false);

  const [
    receiptBusy,
    setReceiptBusy,
  ] = useState(false);

  const status =
    item.status ??
    "pending";

  const paymentStatus =
    item.payment_status ??
    "pending";

  const isSquad =
    item.game === "mlbb";

  const hasReceipt =
    Boolean(item.payment_receipt_path);

  const paymentVerified =
    paymentStatus === "verified";

  const paymentRejected =
    paymentStatus === "rejected";

  const paymentPending =
    paymentStatus === "pending";

  const canAuthorize =
    paymentVerified && hasReceipt;

  const decisionLocked =
    status === "approved" ||
    status === "rejected";

  async function updatePayment(
    nextStatus,
  ) {
    setPaymentBusy(true);

    try {
      await changePaymentStatus({
        data: {
          id:
            item.id,

          status:
            nextStatus,
        },
      });

      await router.invalidate();

      toast.success(
        nextStatus ===
          "verified"
          ? "Payment verified"
          : nextStatus ===
              "rejected"
            ? "Payment rejected"
            : "Payment returned to pending",
      );
    } catch (error) {
      toast.error(
        error?.message ||
          "Unable to update payment status",
      );
    } finally {
      setPaymentBusy(false);
    }
  }

  async function openReceipt() {
    setReceiptBusy(true);

    try {
      const result =
        await getReceipt({
          data: {
            id:
              item.id,
          },
        });

      if (
        !result?.signedUrl
      ) {
        throw new Error(
          "Unable to open receipt",
        );
      }

      window.open(
        result.signedUrl,
        "_blank",
        "noopener,noreferrer",
      );
    } catch (error) {
      toast.error(
        error?.message ||
          "Unable to open payment receipt",
      );
    } finally {
      setReceiptBusy(false);
    }
  }

  return (
    <article className="card-interactive card-interactive-glow relative min-w-0 overflow-hidden border border-border/55 bg-card/40 backdrop-blur-md">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/[0.035] blur-3xl"
      />
      {/* HEADER */}
      <header className="relative border-b border-border/50 p-4 sm:p-6">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:justify-between">
          <div className="min-w-0">
            <p className="break-words font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground sm:text-[10px] sm:tracking-[0.24em]">
              {isSquad
                ? "MLBB Squad"
                : "TEKKEN 8 Fighter"}

              {" · "}

              {formatDate(
                item.created_at ??
                  item.created_date,
              )}

              {item.reference_code
                ? ` · ${item.reference_code}`
                : ""}
            </p>

            <h3 className="mt-2 break-words font-display text-2xl font-bold uppercase leading-tight tracking-[0.02em] text-foreground sm:text-4xl">
              {isSquad
                ? item.team_name ||
                  "Untitled Squad"
                : item.in_game_id ||
                  item.player_name ||
                  "Unnamed Fighter"}
            </h3>

            <p className="mt-1 text-sm text-muted-foreground">
              {isSquad
                ? [
                    item.team_tag
                      ? `Tag ${item.team_tag}`
                      : null,
                    item.region,
                  ]
                    .filter(
                      Boolean,
                    )
                    .join(
                      " · ",
                    ) || "—"
                : [
                    item.player_name,
                    item.region,
                  ]
                    .filter(
                      Boolean,
                    )
                    .join(
                      " · ",
                    ) || "—"}
            </p>
          </div>

          <StatusBadge
            status={
              status
            }
          />
        </div>
      </header>

      {/* FULL REGISTRATION */}
      <div className="relative p-4 sm:p-6">
        {isSquad ? (
          <MlbbReview
            item={item}
          />
        ) : (
          <TekkenReview
            item={item}
          />
        )}
      </div>

      {/* MAIN CONTACT */}
      <section className="border-t border-border/45 bg-background/10 px-4 py-5 sm:px-6">
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-primary">
          Main Contact
        </p>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Detail
            label="Contact Name"
            icon={UserRound}
          >
            {
              item.contact_name
            }
          </Detail>

          <Detail label="Email">
            {item.contact_email ? (
              <a
                href={`mailto:${item.contact_email}`}
                className="break-all text-primary hover:underline"
              >
                {
                  item.contact_email
                }
              </a>
            ) : (
              "—"
            )}
          </Detail>

          <Detail
            label="Phone"
            icon={Phone}
          >
            {item.contact_phone ? (
              <a
                href={`tel:${item.contact_phone}`}
                className="hover:text-primary"
              >
                {
                  item.contact_phone
                }
              </a>
            ) : (
              "Not provided"
            )}
          </Detail>

          <Detail label="Discord">
            {item.discord ||
              "Not provided"}
          </Detail>
        </div>
      </section>

      {/* PAYMENT REVIEW */}
      <section className="border-t border-border/45 bg-background/15 px-4 py-5 sm:px-6">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <CreditCard className="h-4 w-4 text-primary" />

              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-primary">
                Payment Review
              </p>
            </div>

            <div className="mt-3">
              <StatusBadge
                status={
                  paymentStatus
                }
              />
            </div>
          </div>

          {item.payment_receipt_path ? (
            <Button
              type="button"
              size="sm"
              variant="outline"
              disabled={
                receiptBusy
              }
              onClick={
                openReceipt
              }
              className="w-full text-primary sm:w-auto"
            >
              <Eye className="mr-2 h-4 w-4" />

              {receiptBusy
                ? "Opening…"
                : "View Receipt"}
            </Button>
          ) : (
            <span className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
              <ImageIcon className="h-4 w-4" />
              No receipt
            </span>
          )}
        </div>

        <div
          className={`mt-5 border p-3 sm:p-4 ${
            paymentVerified
              ? "border-emerald-500/30 bg-emerald-500/[0.05]"
              : paymentRejected
                ? "border-destructive/30 bg-destructive/[0.05]"
                : "border-amber-500/30 bg-amber-500/[0.05]"
          }`}
        >
          <div className="flex items-start gap-3">
            {paymentVerified ? (
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
            ) : paymentRejected ? (
              <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
            ) : (
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
            )}

            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-foreground">
                {paymentVerified
                  ? "Payment cleared"
                  : paymentRejected
                    ? "Payment rejected"
                    : hasReceipt
                      ? "Payment needs verification"
                      : "Receipt missing"}
              </p>

              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                {paymentVerified
                  ? "The payment has been verified. Staff may continue to the final registration decision."
                  : paymentRejected
                    ? "Do not authorize this registration until the payment issue is resolved."
                    : hasReceipt
                      ? "Open the receipt and verify the payment reference before authorizing the registration."
                      : "No payment receipt is attached. Do not authorize this registration yet."}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          <Detail
            label="Payment Method"
          >
            <span className="uppercase">
              {item.payment_method ||
                "—"}
            </span>
          </Detail>

          <Detail
            label="Reference"
          >
            {item.payment_reference ||
              "Not provided"}
          </Detail>

          <Detail
            label="Receipt"
          >
            {item.payment_receipt_path
              ? "Uploaded"
              : "Not uploaded"}
          </Detail>
        </div>

        <div className="mt-5 flex flex-col gap-2 border-t border-border/60 pt-5 sm:flex-row sm:flex-wrap sm:gap-3">
          {paymentStatus !==
          "verified" ? (
            <Button
              type="button"
              size="sm"
              disabled={
                paymentBusy ||
                !hasReceipt
              }
              onClick={() =>
                updatePayment(
                  "verified",
                )
              }
              className="w-full sm:w-auto"
            >
              <CheckCircle2 className="mr-2 h-4 w-4" />

              Verify Payment
            </Button>
          ) : null}

          {paymentStatus !==
          "rejected" ? (
            <Button
              type="button"
              size="sm"
              variant="outline"
              disabled={
                paymentBusy
              }
              onClick={() =>
                updatePayment(
                  "rejected",
                )
              }
              className="w-full border-destructive/40 text-destructive hover:bg-destructive/10 hover:text-destructive sm:w-auto"
            >
              <XCircle className="mr-2 h-4 w-4" />

              Reject Payment
            </Button>
          ) : null}

          {paymentStatus !==
          "pending" ? (
            <Button
              type="button"
              size="sm"
              variant="ghost"
              disabled={
                paymentBusy
              }
              onClick={() =>
                updatePayment(
                  "pending",
                )
              }
              className="w-full text-muted-foreground sm:w-auto"
            >
              <RotateCcw className="mr-2 h-3.5 w-3.5" />

              Reset Payment
            </Button>
          ) : null}

          {paymentBusy ? (
            <span className="self-center font-mono text-[9px] uppercase tracking-[0.18em] text-primary">
              Updating…
            </span>
          ) : null}
        </div>
      </section>

      {/* REGISTRATION DECISION */}
      <footer className="border-t border-border/45 bg-background/10 px-4 py-5 sm:px-6">
        <div className="mb-4 flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-primary" />

          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-primary">
            Registration Decision
          </p>
        </div>

        <div
          className={`mb-5 border p-3 sm:p-4 ${
            status === "approved"
              ? "border-emerald-500/30 bg-emerald-500/[0.05]"
              : status === "rejected"
                ? "border-destructive/30 bg-destructive/[0.05]"
                : canAuthorize
                  ? "border-primary/30 bg-primary/[0.04]"
                  : "border-amber-500/30 bg-amber-500/[0.05]"
          }`}
        >
          <div className="flex items-start gap-3">
            {status === "approved" ? (
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
            ) : status === "rejected" ? (
              <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
            ) : canAuthorize ? (
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            ) : (
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
            )}

            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-foreground">
                {status === "approved"
                  ? "Registration approved"
                  : status === "rejected"
                    ? "Registration rejected"
                    : canAuthorize
                      ? "Ready for final decision"
                      : "Final approval blocked"}
              </p>

              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                {status === "approved"
                  ? "This entry is already authorized and live on the roster board."
                  : status === "rejected"
                    ? "This entry is currently rejected. Return it to the queue if staff needs to review it again."
                    : canAuthorize
                      ? "Payment is verified and a receipt is on file. Complete your final registration review before authorizing."
                      : "Payment must be verified and a receipt must be on file before this registration can be authorized."}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
          {status !==
          "approved" ? (
            <Button
              size="sm"
              disabled={
                busy ||
                !canAuthorize ||
                decisionLocked
              }
              onClick={() =>
                onDecide(
                  item.id,
                  "approved",
                )
              }
              className="w-full sm:w-auto"
              title={
                canAuthorize
                  ? "Authorize registration"
                  : "Verify payment and confirm a receipt first"
              }
            >
              <Check className="mr-2 h-4 w-4" />

              Authorize
            </Button>
          ) : null}

          {status !==
          "rejected" ? (
            <Button
              size="sm"
              variant="outline"
              disabled={busy}
              onClick={() =>
                onDecide(
                  item.id,
                  "rejected",
                )
              }
              className="w-full text-muted-foreground sm:w-auto"
            >
              <X className="mr-2 h-4 w-4" />

              Reject
            </Button>
          ) : null}

          {status !==
          "pending" ? (
            <Button
              size="sm"
              variant="ghost"
              disabled={busy}
              onClick={() =>
                onDecide(
                  item.id,
                  "pending",
                )
              }
              className="w-full text-muted-foreground hover:text-foreground sm:w-auto"
            >
              <RotateCcw className="mr-2 h-3.5 w-3.5" />

              Back to Queue
            </Button>
          ) : null}

          {busy ? (
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              Updating…
            </span>
          ) : null}
        </div>
      </footer>
    </article>
  );
}