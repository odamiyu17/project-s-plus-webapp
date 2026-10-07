import { CreditCard, Upload } from "lucide-react";

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
  method,
  onMethodChange,
  receipt,
  onReceiptChange,
  reference,
  onReferenceChange,
  errors,
}) {
  const selected =
    METHODS.find((item) => item.id === method) ?? null;

  return (
    <section>
      <div className="mb-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
          Payment
        </p>

        <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-[0.04em] text-foreground">
          Complete your payment
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
          Choose a payment method, scan the QR code, then upload a clear
          screenshot or photo of your payment receipt.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {METHODS.map((item) => {
          const active = method === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onMethodChange(item.id)}
              className={`border p-4 text-left transition-colors ${
                active
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <CreditCard
                  className={
                    active
                      ? "h-5 w-5 text-primary"
                      : "h-5 w-5 text-muted-foreground"
                  }
                />

                <span className="font-mono text-xs uppercase tracking-[0.18em]">
                  {item.label}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {errors?.payment_method ? (
        <p className="mt-2 text-sm text-destructive">
          {errors.payment_method}
        </p>
      ) : null}

      {selected ? (
        <div className="mt-6 border border-border/80 bg-background/40 p-4 sm:p-6">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Scan to pay via {selected.label}
          </p>

          <div className="flex justify-center">
            <img
              src={selected.qr}
              alt={`${selected.label} payment QR`}
              className="max-h-[520px] w-auto max-w-full border border-border bg-white object-contain"
            />
          </div>
        </div>
      ) : null}

      <div className="mt-6 space-y-2">
        <Label htmlFor="payment-reference">
          Payment reference number{" "}
          <span className="text-muted-foreground">(optional)</span>
        </Label>

        <Input
          id="payment-reference"
          value={reference}
          onChange={(event) => onReferenceChange(event.target.value)}
          placeholder="Enter transaction/reference number"
          className="h-12 rounded-none"
        />
      </div>

      <div className="mt-6 space-y-2">
        <Label htmlFor="payment-receipt">
          Upload payment receipt
        </Label>

        <label
          htmlFor="payment-receipt"
          className="flex cursor-pointer flex-col items-center justify-center border border-dashed border-border px-6 py-8 text-center transition-colors hover:border-primary/60"
        >
          <Upload className="mb-3 h-6 w-6 text-primary" />

          <span className="text-sm font-medium text-foreground">
            {receipt ? receipt.name : "Choose receipt image"}
          </span>

          <span className="mt-1 text-xs text-muted-foreground">
            JPG, PNG, or WEBP · maximum 5 MB
          </span>
        </label>

        <input
          id="payment-receipt"
          type="file"
          accept="image/jpeg,image/png,image/webp"
          className="hidden"
          onChange={(event) =>
            onReceiptChange(event.target.files?.[0] ?? null)
          }
        />

        {errors?.payment_receipt ? (
          <p className="text-sm text-destructive">
            {errors.payment_receipt}
          </p>
        ) : null}
      </div>
    </section>
  );
}