import {
  BadgeCheck,
  Check,
  Eye,
  RotateCcw,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const STATUS_STYLES = {
  pending:
    "border-primary/50 text-primary",

  approved:
    "border-primary/30 bg-primary/10 text-primary",

  rejected:
    "border-border text-muted-foreground",
};

const PAYMENT_STATUS_STYLES = {
  pending:
    "border-primary/40 text-primary",

  verified:
    "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",

  rejected:
    "border-destructive/40 bg-destructive/10 text-destructive",
};

function formatDate(value) {
  if (!value) return "—";

  return new Date(
    value,
  ).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default function RegistrationRow({
  item,
  busy,
  paymentBusy,
  receiptBusy,
  onDecide,
  onPaymentDecide,
  onViewReceipt,
}) {
  const status =
    item.status ?? "pending";

  const paymentStatus =
    item.payment_status ?? "pending";

  const isSquad =
    item.game === "mlbb";

  const hasReceipt =
    Boolean(
      item.payment_receipt_path,
    );

  const paymentVerified =
    paymentStatus === "verified";

  return (
    <article className="border border-border/80 bg-card/60 p-5">
      <header className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
            {isSquad
              ? "MLBB squad"
              : "TEKKEN 8 fighter"}{" "}
            ·{" "}
            {formatDate(
              item.created_at,
            )}
            {item.reference_code
              ? ` · ${item.reference_code}`
              : ""}
          </p>

          <h3 className="mt-2 font-display text-2xl font-bold uppercase leading-tight tracking-[0.02em] text-foreground">
            {isSquad
              ? item.team_name ||
                "Untitled squad"
              : item.in_game_id ||
                item.player_name ||
                "Unnamed fighter"}
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            {isSquad
              ? [
                  item.team_tag
                    ? `Tag ${item.team_tag}`
                    : null,

                  item.region,
                ]
                  .filter(Boolean)
                  .join(" · ") ||
                "—"
              : [
                  item.player_name,
                  item.region,
                ]
                  .filter(Boolean)
                  .join(" · ") ||
                "—"}
          </p>
        </div>

        <span
          className={`border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] ${STATUS_STYLES[status]}`}
        >
          {status}
        </span>
      </header>

      {isSquad &&
      Array.isArray(item.roster) &&
      item.roster.length ? (
        <ul className="mt-4 grid gap-px border border-border/60 bg-border/50 sm:grid-cols-2">
          {item.roster.map(
            (player, index) => (
              <li
                key={`${player.ign}-${index}`}
                className="flex items-center justify-between gap-3 bg-background/70 px-3 py-2"
              >
                <span className="min-w-0 truncate text-sm text-foreground">
                  {index + 1}.{" "}
                  {player.ign}
                </span>

                <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  {player.game_id}

                  {player.role
                    ? ` · ${player.role}`
                    : ""}
                </span>
              </li>
            ),
          )}
        </ul>
      ) : null}

      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          Contact
        </span>

        <span className="text-foreground">
          {item.contact_name}
        </span>

        {item.contact_email ? (
          <a
            href={`mailto:${item.contact_email}`}
            className="text-primary hover:underline"
          >
            {item.contact_email}
          </a>
        ) : null}

        {item.contact_phone ? (
          <a
            href={`tel:${item.contact_phone}`}
            className="text-muted-foreground hover:text-primary"
          >
            {item.contact_phone}
          </a>
        ) : null}

        {item.discord ? (
          <span className="text-muted-foreground">
            {item.discord}
          </span>
        ) : null}
      </div>

      <div className="mt-5 border border-border/70 bg-background/40 p-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Payment
            </p>

            <p className="mt-2 text-sm text-foreground">
              Method:{" "}
              <span className="font-medium uppercase">
                {item.payment_method ||
                  "—"}
              </span>
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              Reference:{" "}
              {item.payment_reference ||
                "Not provided"}
            </p>
          </div>

          <span
            className={`border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] ${
              PAYMENT_STATUS_STYLES[
                paymentStatus
              ] ??
              PAYMENT_STATUS_STYLES.pending
            }`}
          >
            {paymentStatus}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          {hasReceipt ? (
            <Button
              type="button"
              size="sm"
              variant="outline"
              disabled={receiptBusy}
              onClick={() =>
                onViewReceipt(
                  item.id,
                )
              }
              className="h-10 rounded-none border-border px-4 font-mono text-[10px] uppercase tracking-[0.2em]"
            >
              <Eye className="mr-2 h-4 w-4" />

              {receiptBusy
                ? "Opening…"
                : "View receipt"}
            </Button>
          ) : (
            <span className="text-sm text-muted-foreground">
              No receipt uploaded
            </span>
          )}

          {hasReceipt &&
          paymentStatus !==
            "verified" ? (
            <Button
              type="button"
              size="sm"
              disabled={paymentBusy}
              onClick={() =>
                onPaymentDecide(
                  item.id,
                  "verified",
                )
              }
              className="h-10 rounded-none px-4 font-mono text-[10px] uppercase tracking-[0.2em]"
            >
              <BadgeCheck className="mr-2 h-4 w-4" />
              Verify payment
            </Button>
          ) : null}

          {hasReceipt &&
          paymentStatus !==
            "rejected" ? (
            <Button
              type="button"
              size="sm"
              variant="outline"
              disabled={paymentBusy}
              onClick={() =>
                onPaymentDecide(
                  item.id,
                  "rejected",
                )
              }
              className="h-10 rounded-none border-border px-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
            >
              <X className="mr-2 h-4 w-4" />
              Reject payment
            </Button>
          ) : null}

          {hasReceipt &&
          paymentStatus !==
            "pending" ? (
            <Button
              type="button"
              size="sm"
              variant="ghost"
              disabled={paymentBusy}
              onClick={() =>
                onPaymentDecide(
                  item.id,
                  "pending",
                )
              }
              className="h-10 rounded-none px-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
            >
              <RotateCcw className="mr-2 h-3.5 w-3.5" />
              Reset payment
            </Button>
          ) : null}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-border/70 pt-5">
        {status !== "approved" ? (
          <Button
            size="sm"
            disabled={
              busy ||
              paymentBusy ||
              (hasReceipt &&
                !paymentVerified)
            }
            onClick={() =>
              onDecide(
                item.id,
                "approved",
              )
            }
            title={
              hasReceipt &&
              !paymentVerified
                ? "Verify the payment first"
                : undefined
            }
            className="h-10 rounded-none px-5 font-mono text-[10px] uppercase tracking-[0.2em]"
          >
            <Check className="mr-2 h-4 w-4" />
            Authorize
          </Button>
        ) : null}

        {status !== "rejected" ? (
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
            Reject entry
          </Button>
        ) : null}

        {status !== "pending" ? (
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
            Back to queue
          </Button>
        ) : null}

        {busy || paymentBusy ? (
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
            Updating…
          </span>
        ) : null}
      </div>
    </article>
  );
}