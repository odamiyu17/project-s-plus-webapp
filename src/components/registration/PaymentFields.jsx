import {
  CreditCard,
  Upload,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const METHODS = [
  {
    id: "gcash",
    label: "GCash",
    qr: "/images/payments/gcash-qr.png",
  },
  {
    id: "bank",
    label: "Bank",
    qr: "/images/payments/bank-qr.png",
  },
];

export default function PaymentFields({
  stepNumber = 4,
  method,
  onMethodChange,
  receipt,
  onReceiptChange,
  reference,
  onReferenceChange,
  errors,
}) {
  const selected =
    METHODS.find(
      (item) =>
        item.id ===
        method,
    ) ?? null;

  return (
    <section className="space-y-8">
      {/* =====================================================
          STEP HEADING
          ===================================================== */}
      <div className="flex flex-col gap-3 border-b border-border/45 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-primary">
            Step{" "}
            {String(
              stepNumber,
            ).padStart(
              2,
              "0",
            )}{" "}
            — Payment
          </p>

          <h2 className="mt-2 font-display text-3xl font-bold uppercase leading-[0.95] tracking-[0.03em] text-foreground sm:text-4xl">
            Secure your slot
          </h2>
        </div>

        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
          Receipt verification required
        </span>
      </div>

      <p className="-mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        Choose a payment method, scan
        the QR code, then upload a clear
        screenshot or photo of your
        payment receipt.
      </p>

      {/* =====================================================
          PAYMENT METHOD
          ===================================================== */}
      <div>
        <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-primary/70">
          Choose payment method
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {METHODS.map(
            (item, index) => {
              const active =
                method ===
                item.id;

              return (
                <button
                  key={
                    item.id
                  }
                  type="button"
                  aria-pressed={active}
                  onClick={() =>
                    onMethodChange(
                      item.id,
                    )
                  }
                  className={`
                    card-interactive
                    card-interactive-glow
                    group
                    relative
                    overflow-hidden
                    border
                    p-5
                    text-left
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    ${
                      active
                        ? "border-primary/55 bg-primary/[0.07]"
                        : "border-border/55 bg-card/30 hover:border-primary/40 hover:bg-card/45"
                    }
                  `}
                >
                  <div
                    aria-hidden
                    className={`
                      pointer-events-none
                      absolute
                      inset-x-5
                      top-0
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-primary/45
                      to-transparent
                      transition-opacity
                      duration-300
                      ${
                        active
                          ? "opacity-100"
                          : "opacity-50 group-hover:opacity-80"
                      }
                    `}
                  />

                  <div className="flex items-center gap-4">
                    <span
                      className={`
                        grid
                        h-11
                        w-11
                        shrink-0
                        place-items-center
                        border
                        transition-all
                        duration-300
                        ${
                          active
                            ? "border-primary/40 bg-primary/[0.08] text-primary"
                            : "border-border/50 bg-background/20 text-muted-foreground group-hover:border-primary/30 group-hover:text-primary"
                        }
                      `}
                    >
                      <CreditCard className="h-4 w-4" />
                    </span>

                    <div>
                      <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-primary/60">
                        Method{" "}
                        {String(
                          index + 1,
                        ).padStart(
                          2,
                          "0",
                        )}
                      </p>

                      <p className="mt-1 font-display text-xl font-bold uppercase tracking-[0.05em] text-foreground">
                        {item.label}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`
                      mt-4 inline-flex border px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.18em]
                      ${
                        active
                          ? "border-primary/35 bg-primary/[0.06] text-primary"
                          : "border-border/40 text-muted-foreground"
                      }
                    `}
                  >
                    {active
                      ? "Selected"
                      : "Select"}
                  </span>

                  <span
                    aria-hidden
                    className="pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-b border-r border-primary/15 transition-all duration-300 group-hover:h-7 group-hover:w-7 group-hover:border-primary/35"
                  />
                </button>
              );
            },
          )}
        </div>

        {errors?.payment_method ? (
          <p className="mt-2 text-sm text-destructive">
            {
              errors.payment_method
            }
          </p>
        ) : null}
      </div>

      {/* =====================================================
          PAYMENT QR
          ===================================================== */}
      {selected ? (
        <div className="card-interactive card-interactive-glow relative overflow-hidden border border-border/55 bg-background/20 p-5 backdrop-blur-sm sm:p-6">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent"
          />

          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-sm">
              <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-primary/70">
                Scan to pay
              </p>

              <h3 className="mt-2 font-display text-2xl font-bold uppercase tracking-[0.05em] text-foreground">
                {selected.label}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Complete your payment using
                the QR code, then return here
                and upload your receipt below.
              </p>
            </div>

            <div className="mx-auto w-full max-w-[380px] border border-border/50 bg-white p-3 lg:mx-0">
              <img
                src={
                  selected.qr
                }
                alt={`${selected.label} payment QR`}
                className="max-h-[520px] w-full object-contain"
              />
            </div>
          </div>

          <span
            aria-hidden
            className="pointer-events-none absolute bottom-0 right-0 h-7 w-7 border-b border-r border-primary/20"
          />
        </div>
      ) : null}

      {/* =====================================================
          PAYMENT DETAILS
          ===================================================== */}
      <div className="grid gap-5 border-t border-border/35 pt-8 sm:grid-cols-2">
        <div className="space-y-2">
          <Label
            htmlFor="payment-reference"
            className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground"
          >
            Payment reference number{" "}
            <span className="text-muted-foreground">
              (optional)
            </span>
          </Label>

          <Input
            id="payment-reference"
            value={
              reference
            }
            onChange={(
              event,
            ) =>
              onReferenceChange(
                event.target
                  .value,
              )
            }
            placeholder="Enter transaction/reference number"
            className="h-12 rounded-none border-border/60 bg-background/20"
          />
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label
            htmlFor="payment-receipt"
            className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground"
          >
            Upload payment receipt
          </Label>

          <label
            htmlFor="payment-receipt"
            className="group flex cursor-pointer flex-col items-center justify-center border border-dashed border-border/60 bg-card/25 px-6 py-8 text-center transition-all duration-300 hover:border-primary/50 hover:bg-primary/[0.04]"
          >
            <Upload className="mb-3 h-6 w-6 text-primary transition-transform duration-300 group-hover:-translate-y-0.5" />

            <span className="text-sm font-medium text-foreground">
              {receipt
                ? receipt.name
                : "Choose receipt image"}
            </span>

            <span className="mt-1 text-xs text-muted-foreground">
              JPG, PNG, or WEBP ·
              maximum 5 MB
            </span>
          </label>

          <input
            id="payment-receipt"
            type="file"
            accept="image/jpeg,image/png,image/webp"
            className="hidden"
            onChange={(
              event,
            ) =>
              onReceiptChange(
                event.target
                  .files?.[0] ??
                  null,
              )
            }
          />

          {errors?.payment_receipt ? (
            <p className="text-sm text-destructive">
              {
                errors.payment_receipt
              }
            </p>
          ) : null}
        </div>
      </div>

      <div className="flex items-start gap-3 border border-border/40 bg-card/20 px-4 py-3 backdrop-blur-sm">
        <span
          aria-hidden
          className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-primary/50"
        />

        <p className="text-xs leading-relaxed text-muted-foreground">
          Your receipt is reviewed by
          tournament staff before the
          payment is marked as verified.
        </p>
      </div>
    </section>
  );
}
