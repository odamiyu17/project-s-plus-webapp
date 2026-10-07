import { useState } from "react";
import {
  Link,
  useRouter,
} from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { LogOut } from "lucide-react";
import { toast } from "sonner";

import RegistrationRow from "@/components/admin/RegistrationRow";
import { Button } from "@/components/ui/button";

import {
  getPaymentReceiptUrl,
  setPaymentStatus,
  setRegistrationStatus,
} from "@/lib/server-fns";

const TABS = [
  {
    id: "pending",
    label: "Awaiting review",
  },
  {
    id: "approved",
    label: "Approved",
  },
  {
    id: "rejected",
    label: "Rejected",
  },
  {
    id: "all",
    label: "All entries",
  },
];

const GAMES = [
  {
    id: "all",
    label: "Both brackets",
  },
  {
    id: "mlbb",
    label: "MLBB",
  },
  {
    id: "tekken8",
    label: "TEKKEN 8",
  },
];

export default function AdminDashboard({
  items,
  email,
  onSignOut,
}) {
  const router = useRouter();

  const setStatus =
    useServerFn(setRegistrationStatus);

  const setPayment =
    useServerFn(setPaymentStatus);

  const getReceipt =
    useServerFn(getPaymentReceiptUrl);

  const [tab, setTab] =
    useState("pending");

  const [game, setGame] =
    useState("all");

  const [busyId, setBusyId] =
    useState(null);

  const [
    paymentBusyId,
    setPaymentBusyId,
  ] = useState(null);

  const [
    receiptBusyId,
    setReceiptBusyId,
  ] = useState(null);

  const statusOf = (item) =>
    item.status ?? "pending";

  const counts = {
    all: items.length,
    pending: 0,
    approved: 0,
    rejected: 0,
  };

  items.forEach((item) => {
    counts[statusOf(item)] =
      (counts[statusOf(item)] ?? 0) + 1;
  });

  const visible = items.filter(
    (item) =>
      (tab === "all" ||
        statusOf(item) === tab) &&
      (game === "all" ||
        item.game === game),
  );

  async function decide(id, status) {
    setBusyId(id);

    try {
      await setStatus({
        data: {
          id,
          status,
        },
      });

      await router.invalidate();

      toast.success(
        status === "approved"
          ? "Entry authorized — now live on the roster board"
          : status === "rejected"
            ? "Entry rejected"
            : "Entry returned to the queue",
      );
    } catch (error) {
      toast.error(
        error?.message ||
          "Could not update that entry",
      );
    } finally {
      setBusyId(null);
    }
  }

  async function decidePayment(
    id,
    status,
  ) {
    setPaymentBusyId(id);

    try {
      await setPayment({
        data: {
          id,
          status,
        },
      });

      await router.invalidate();

      toast.success(
        status === "verified"
          ? "Payment verified"
          : status === "rejected"
            ? "Payment rejected"
            : "Payment returned to pending",
      );
    } catch (error) {
      toast.error(
        error?.message ||
          "Could not update payment",
      );
    } finally {
      setPaymentBusyId(null);
    }
  }

  async function viewReceipt(id) {
    setReceiptBusyId(id);

    const popup = window.open(
      "about:blank",
      "_blank",
    );

    try {
      const result = await getReceipt({
        data: {
          id,
        },
      });

      if (!result?.signedUrl) {
        throw new Error(
          "Receipt URL was not returned",
        );
      }

      if (popup) {
        popup.opener = null;
        popup.location.href =
          result.signedUrl;
      } else {
        toast.error(
          "Please allow pop-ups to view the receipt",
        );
      }
    } catch (error) {
      popup?.close();

      toast.error(
        error?.message ||
          "Could not open payment receipt",
      );
    } finally {
      setReceiptBusyId(null);
    }
  }

  const stats = [
    {
      label: "Total entries",
      value: counts.all,
    },
    {
      label: "Awaiting review",
      value: counts.pending,
    },
    {
      label: "Approved",
      value: counts.approved,
    },
    {
      label: "Rejected",
      value: counts.rejected,
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="border-b border-border/70 bg-secondary/20">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-8">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-primary">
              Hagit Tournament · Staff
            </p>

            <h1 className="mt-1 font-display text-2xl font-bold uppercase tracking-[0.06em] text-foreground">
              Command Center
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {email}
            </span>

            <Button
              asChild
              variant="outline"
              size="sm"
              className="h-10 rounded-none border-border px-4 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground hover:bg-secondary/40 hover:text-foreground"
            >
              <Link to="/">
                View site
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={onSignOut}
              className="h-10 rounded-none px-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
            >
              <LogOut className="mr-2 h-3.5 w-3.5" />
              Sign out
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-8">
        <dl className="grid grid-cols-2 gap-px border border-border/70 bg-border/60 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card/70 p-5"
            >
              <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                {stat.label}
              </dt>

              <dd className="mt-2 font-display text-2xl font-bold text-primary">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex flex-wrap items-center gap-2">
          {TABS.map((entry) => (
            <button
              key={entry.id}
              type="button"
              aria-pressed={
                tab === entry.id
              }
              onClick={() =>
                setTab(entry.id)
              }
              className={`border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors ${
                tab === entry.id
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {entry.label} (
              {counts[entry.id] ?? 0})
            </button>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {GAMES.map((entry) => (
            <button
              key={entry.id}
              type="button"
              aria-pressed={
                game === entry.id
              }
              onClick={() =>
                setGame(entry.id)
              }
              className={`px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors ${
                game === entry.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {entry.label}
            </button>
          ))}
        </div>

        <div className="mt-8 space-y-5">
          {visible.length ? (
            visible.map((item) => (
              <RegistrationRow
                key={item.id}
                item={item}
                busy={
                  busyId === item.id
                }
                paymentBusy={
                  paymentBusyId ===
                  item.id
                }
                receiptBusy={
                  receiptBusyId ===
                  item.id
                }
                onDecide={decide}
                onPaymentDecide={
                  decidePayment
                }
                onViewReceipt={
                  viewReceipt
                }
              />
            ))
          ) : (
            <p className="border border-dashed border-border/80 p-8 text-center text-sm text-muted-foreground">
              Nothing in this list
              right now. Entries land
              in the queue the moment
              a competitor submits the
              form.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}