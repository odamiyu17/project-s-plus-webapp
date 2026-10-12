import {
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
      className={`min-w-0 ${className}`}
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
    <article className="overflow-hidden border border-border/70 bg-background/70">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 bg-secondary/20 px-4 py-3">
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

      <div className="p-4">
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="h-28 w-28 shrink-0 overflow-hidden border border-border/80 bg-secondary/20">
            {photoUrl ? (
              <img
                src={photoUrl}
                alt={
                  player.ign ||
                  `Player ${index + 1}`
                }
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="grid h-full w-full place-items-center">
                <UserRound className="h-9 w-9 text-primary/40" />
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <h4 className="font-display text-xl font-bold uppercase tracking-[0.04em] text-foreground">
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
                className="inline-flex max-w-full items-center gap-1.5 break-all text-primary hover:underline"
              >
                <span className="truncate">
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
      <section className="border border-border/70 bg-background/60 p-4 sm:p-5">
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-primary">
          Team Identity
        </p>

        <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center">
          <div className="grid h-28 w-28 shrink-0 place-items-center overflow-hidden border border-border/80 bg-background">
            {teamLogoUrl ? (
              <img
                src={
                  teamLogoUrl
                }
                alt={`${
                  item.team_name ||
                  "Team"
                } logo`}
                className="h-full w-full object-contain p-2"
              />
            ) : (
              <Users className="h-9 w-9 text-primary/40" />
            )}
          </div>

          <div>
            <h4 className="font-display text-2xl font-bold uppercase text-foreground">
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
        <div className="flex flex-wrap items-end justify-between gap-3">
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
          <p className="mt-4 border border-dashed border-border/70 p-5 text-sm text-muted-foreground">
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
    <section className="border border-border/70 bg-background/60 p-4 sm:p-5">
      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-primary">
        Fighter Information
      </p>

      <div className="mt-4 flex flex-col gap-5 sm:flex-row">
        <div className="h-40 w-40 shrink-0 overflow-hidden border border-border/80 bg-secondary/20">
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
          <h4 className="font-display text-2xl font-bold uppercase text-foreground">
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
    <article className="border border-border/80 bg-card/60">
      {/* HEADER */}
      <header className="border-b border-border/70 p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
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

            <h3 className="mt-2 font-display text-2xl font-bold uppercase leading-tight tracking-[0.02em] text-foreground">
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
      <div className="p-5 sm:p-6">
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
      <section className="border-t border-border/70 px-5 py-5 sm:px-6">
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
      <section className="border-t border-border/70 bg-background/40 px-5 py-5 sm:px-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
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
              className="h-10 rounded-none border-primary/40 px-4 font-mono text-[10px] uppercase tracking-[0.18em] text-primary hover:bg-primary/10"
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

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

        <div className="mt-5 flex flex-wrap gap-3 border-t border-border/60 pt-5">
          {paymentStatus !==
          "verified" ? (
            <Button
              type="button"
              size="sm"
              disabled={
                paymentBusy
              }
              onClick={() =>
                updatePayment(
                  "verified",
                )
              }
              className="h-10 rounded-none px-5 font-mono text-[10px] uppercase tracking-[0.18em]"
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
              className="h-10 rounded-none border-destructive/40 px-5 font-mono text-[10px] uppercase tracking-[0.18em] text-destructive hover:bg-destructive/10 hover:text-destructive"
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
              className="h-10 rounded-none px-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
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
      <footer className="border-t border-border/70 px-5 py-5 sm:px-6">
        <div className="mb-4 flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-primary" />

          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-primary">
            Registration Decision
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {status !==
          "approved" ? (
            <Button
              size="sm"
              disabled={busy}
              onClick={() =>
                onDecide(
                  item.id,
                  "approved",
                )
              }
              className="h-10 rounded-none px-5 font-mono text-[10px] uppercase tracking-[0.2em]"
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
              className="h-10 rounded-none border-border px-5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:bg-secondary/40 hover:text-foreground"
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
              className="h-10 rounded-none px-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
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