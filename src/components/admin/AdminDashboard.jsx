import { useState } from "react";
import {
  Link,
  useRouter,
} from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import {
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  CreditCard,
  Gamepad2,
  ListFilter,
  LogOut,
  ShieldAlert,
  ShieldCheck,
  Users,
  XCircle,
} from "lucide-react";
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
    id: "needs_review",
    label: "Needs Review",
    description: "Pending registrations that still need staff action.",
  },
  {
    id: "payment_issue",
    label: "Payment Issues",
    description: "Entries with rejected or still-pending payment verification.",
  },
  {
    id: "approved",
    label: "Approved",
    description: "Entries already cleared by staff.",
  },
  {
    id: "rejected",
    label: "Rejected",
    description: "Entries that were declined.",
  },
  {
    id: "all",
    label: "All Entries",
    description: "Every registration in the tournament database.",
  },
];

const PAYMENT_FILTERS = [
  {
    id: "all",
    label: "Any payment",
  },
  {
    id: "pending",
    label: "Payment pending",
  },
  {
    id: "verified",
    label: "Payment verified",
  },
  {
    id: "rejected",
    label: "Payment rejected",
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

  const updatePaymentStatus =
    useServerFn(setPaymentStatus);

  const getReceipt =
    useServerFn(getPaymentReceiptUrl);

  const [tab, setTab] =
    useState("needs_review");

  const [game, setGame] =
    useState("all");

  const [paymentFilter, setPaymentFilter] =
    useState("all");

  const [expandedId, setExpandedId] =
    useState(null);

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

  const paymentStatusOf = (item) =>
    item.payment_status ?? "pending";

  const counts = {
    all: items.length,
    needs_review: 0,
    payment_issue: 0,
    approved: 0,
    rejected: 0,
  };

  items.forEach((item) => {
    const registrationStatus =
      statusOf(item);

    const currentPaymentStatus =
      paymentStatusOf(item);

    if (
      registrationStatus === "pending"
    ) {
      counts.needs_review += 1;
    }

    if (
      registrationStatus !==
        "rejected" &&
      currentPaymentStatus !==
        "verified"
    ) {
      counts.payment_issue += 1;
    }

    if (
      registrationStatus ===
      "approved"
    ) {
      counts.approved += 1;
    }

    if (
      registrationStatus ===
      "rejected"
    ) {
      counts.rejected += 1;
    }
  });

  const visible = items.filter(
    (item) => {
      const registrationStatus =
        statusOf(item);

      const currentPaymentStatus =
        paymentStatusOf(item);

      const matchesQueue =
        tab === "all" ||
        (tab === "needs_review" &&
          registrationStatus ===
            "pending") ||
        (tab === "payment_issue" &&
          registrationStatus !==
            "rejected" &&
          currentPaymentStatus !==
            "verified") ||
        registrationStatus === tab;

      const matchesGame =
        game === "all" ||
        item.game === game;

      const matchesPayment =
        paymentFilter === "all" ||
        currentPaymentStatus ===
          paymentFilter;

      return (
        matchesQueue &&
        matchesGame &&
        matchesPayment
      );
    },
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
      await updatePaymentStatus({
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
      label: "Total Entries",
      value: counts.all,
      icon: Users,
    },
    {
      label: "Needs Review",
      value: counts.needs_review,
      icon: ShieldAlert,
    },
    {
      label: "Payment Issues",
      value: counts.payment_issue,
      icon: CreditCard,
    },
    {
      label: "Approved",
      value: counts.approved,
      icon: CheckCircle2,
    },
  ];

  const activeTab =
    TABS.find(
      (entry) => entry.id === tab,
    ) ?? TABS[0];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background pb-16 sm:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent"
      />

      <header className="relative border-b border-border/50 bg-card/20 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 px-3 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-5">
          <div>
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="h-px w-8 bg-primary/80" />

              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-primary sm:text-[10px] sm:tracking-[0.28em]">
                Hagit Tournament · Staff
              </p>
            </div>

            <h1 className="mt-2 font-display text-2xl font-bold uppercase tracking-[0.04em] text-foreground sm:text-3xl sm:tracking-[0.05em]">
              Command Center
            </h1>
          </div>

          <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto sm:gap-3">
            <span className="w-full break-all font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground sm:w-auto sm:text-[10px] sm:tracking-[0.18em]">
              {email}
            </span>

            <Button
              asChild
              variant="outline"
              size="sm"
              className="flex-1 sm:flex-none"
            >
              <Link to="/">
                View Site
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={onSignOut}
              className="flex-1 text-muted-foreground sm:flex-none"
            >
              <LogOut className="mr-2 h-3.5 w-3.5" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="relative mx-auto max-w-7xl px-3 py-7 sm:px-8 sm:py-10">
        {/* STAFF REVIEW GUIDE */}
        <section className="card-interactive card-interactive-glow relative overflow-hidden border border-border/55 bg-card/35 p-4 backdrop-blur-md sm:p-6">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent"
          />

          <div className="flex flex-col gap-5 sm:gap-6 xl:flex-row xl:items-end xl:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-primary">
                Staff Verification Flow
              </p>

              <h2 className="mt-2 font-display text-xl font-bold uppercase tracking-[0.03em] text-foreground sm:text-3xl sm:tracking-[0.04em]">
                Review each entry in the same order
              </h2>

              <p className="mt-3 text-xs leading-5 text-muted-foreground sm:text-sm sm:leading-6">
                Check the registration first, verify the payment second, then make the final tournament decision.
              </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-3 sm:gap-3 xl:w-[620px]">
              {[
                {
                  step: "01",
                  title: "Registration",
                  copy: "Check team, fighter, roster, and contact details.",
                  icon: Gamepad2,
                },
                {
                  step: "02",
                  title: "Payment",
                  copy: "Open the receipt and verify the reference.",
                  icon: CreditCard,
                },
                {
                  step: "03",
                  title: "Decision",
                  copy: "Authorize only after the entry is fully checked.",
                  icon: ShieldCheck,
                },
              ].map((entry) => {
                const Icon = entry.icon;

                return (
                  <div
                    key={entry.step}
                    className="relative border border-border/45 bg-background/20 p-3 sm:p-4"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-primary">
                        Step {entry.step}
                      </span>

                      <Icon className="h-4 w-4 text-primary/70" />
                    </div>

                    <p className="mt-2 font-display text-base font-bold uppercase tracking-[0.03em] text-foreground sm:mt-3 sm:text-lg">
                      {entry.title}
                    </p>

                    <p className="mt-2 text-xs leading-5 text-muted-foreground">
                      {entry.copy}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SUMMARY */}
        <dl className="mt-5 grid grid-cols-2 gap-2 sm:mt-6 sm:gap-3 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="card-interactive relative min-w-0 overflow-hidden border border-border/50 bg-card/30 p-3 backdrop-blur-sm sm:p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <dt className="font-mono text-[8px] uppercase tracking-[0.14em] text-muted-foreground sm:text-[9px] sm:tracking-[0.2em]">
                      {stat.label}
                    </dt>

                    <dd className="mt-2 font-display text-2xl font-bold text-primary sm:text-3xl">
                      {stat.value}
                    </dd>
                  </div>

                  <Icon className="h-5 w-5 text-primary/45" />
                </div>
              </div>
            );
          })}
        </dl>

        {/* QUEUE + FILTERS */}
        <section className="mt-6 border border-border/50 bg-card/25 p-3 backdrop-blur-sm sm:mt-8 sm:p-5">
          <div className="flex flex-col gap-4 sm:gap-5 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <ListFilter className="h-4 w-4 text-primary" />

                <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-primary">
                  Review Queue
                </p>
              </div>

              <h2 className="mt-2 font-display text-xl font-bold uppercase tracking-[0.03em] text-foreground sm:text-2xl">
                {activeTab.label}
              </h2>

              <p className="mt-1 max-w-xl text-xs leading-5 text-muted-foreground sm:text-sm">
                {activeTab.description}
              </p>
            </div>

            <div className="flex w-full gap-2 overflow-x-auto pb-1 xl:w-auto xl:flex-wrap xl:overflow-visible xl:pb-0">
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
                  className={`shrink-0 border px-3 py-2 font-mono text-[9px] uppercase tracking-[0.16em] transition-all duration-300 ${
                    tab === entry.id
                      ? "border-primary/50 bg-primary/[0.07] text-primary"
                      : "border-border/50 bg-background/15 text-muted-foreground hover:border-primary/25 hover:text-foreground"
                  }`}
                >
                  {entry.label} (
                  {counts[entry.id] ?? 0})
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-4 border-t border-border/40 pt-5 lg:grid-cols-2">
            <div>
              <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-muted-foreground">
                Bracket
              </p>

              <div className="mt-2 flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0">
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
                    className={`shrink-0 border px-3 py-2 font-mono text-[9px] uppercase tracking-[0.16em] transition-all duration-300 ${
                      game === entry.id
                        ? "border-primary/45 bg-primary/[0.06] text-primary"
                        : "border-border/45 bg-background/10 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {entry.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-muted-foreground">
                Payment Status
              </p>

              <div className="mt-2 flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0">
                {PAYMENT_FILTERS.map(
                  (entry) => (
                    <button
                      key={entry.id}
                      type="button"
                      aria-pressed={
                        paymentFilter ===
                        entry.id
                      }
                      onClick={() =>
                        setPaymentFilter(
                          entry.id,
                        )
                      }
                      className={`shrink-0 border px-3 py-2 font-mono text-[9px] uppercase tracking-[0.16em] transition-all duration-300 ${
                        paymentFilter ===
                        entry.id
                          ? "border-primary/45 bg-primary/[0.06] text-primary"
                          : "border-border/45 bg-background/10 text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {entry.label}
                    </button>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ACTIVE QUEUE */}
        <div className="mt-6">
          <div className="mb-4 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
              Showing {visible.length} of{" "}
              {items.length} entries
            </p>

            {tab ===
            "payment_issue" ? (
              <span className="inline-flex w-full items-center gap-2 border border-amber-500/25 bg-amber-500/[0.05] px-3 py-2 font-mono text-[8px] uppercase tracking-[0.14em] text-amber-300 sm:w-auto sm:tracking-[0.16em]">
                <AlertTriangle className="h-3.5 w-3.5" />
                Check receipts before approving
              </span>
            ) : null}

            {tab === "rejected" ? (
              <span className="inline-flex w-full items-center gap-2 border border-destructive/25 bg-destructive/[0.05] px-3 py-2 font-mono text-[8px] uppercase tracking-[0.14em] text-destructive sm:w-auto sm:tracking-[0.16em]">
                <XCircle className="h-3.5 w-3.5" />
                Rejected archive
              </span>
            ) : null}
          </div>

          <div className="space-y-3">
            {visible.length ? (
              visible.map((item) => {
                const isExpanded =
                  expandedId === item.id;

                const registrationStatus =
                  statusOf(item);

                const currentPaymentStatus =
                  paymentStatusOf(item);

                const isSquad =
                  item.game === "mlbb";

                const entryName =
                  isSquad
                    ? item.team_name ||
                      "Untitled Squad"
                    : item.in_game_id ||
                      item.player_name ||
                      "Unnamed Fighter";

                return (
                  <div
                    key={item.id}
                    className="overflow-hidden border border-border/50 bg-card/30 backdrop-blur-sm"
                  >
                    <div className="card-interactive relative p-4 sm:p-5">
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent"
                      />

                      <div className="relative flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="border border-primary/30 bg-primary/[0.05] px-2 py-1 font-mono text-[8px] uppercase tracking-[0.16em] text-primary">
                              {isSquad
                                ? "MLBB"
                                : "TEKKEN 8"}
                            </span>

                            <span
                              className={`border px-2 py-1 font-mono text-[8px] uppercase tracking-[0.14em] ${
                                registrationStatus ===
                                "approved"
                                  ? "border-emerald-500/35 bg-emerald-500/[0.06] text-emerald-400"
                                  : registrationStatus ===
                                      "rejected"
                                    ? "border-destructive/35 bg-destructive/[0.06] text-destructive"
                                    : "border-primary/30 bg-primary/[0.05] text-primary"
                              }`}
                            >
                              Registration:{" "}
                              {registrationStatus}
                            </span>

                            <span
                              className={`border px-2 py-1 font-mono text-[8px] uppercase tracking-[0.14em] ${
                                currentPaymentStatus ===
                                "verified"
                                  ? "border-emerald-500/35 bg-emerald-500/[0.06] text-emerald-400"
                                  : currentPaymentStatus ===
                                      "rejected"
                                    ? "border-destructive/35 bg-destructive/[0.06] text-destructive"
                                    : "border-amber-500/30 bg-amber-500/[0.05] text-amber-300"
                              }`}
                            >
                              Payment:{" "}
                              {currentPaymentStatus}
                            </span>
                          </div>

                          <h3 className="mt-3 break-words font-display text-2xl font-bold uppercase leading-tight tracking-[0.03em] text-foreground sm:text-3xl">
                            {entryName}
                          </h3>

                          <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                            <span>
                              Ref:{" "}
                              {item.reference_code ||
                                "—"}
                            </span>

                            <span>
                              Submitted:{" "}
                              {item.created_at
                                ? new Date(
                                    item.created_at,
                                  ).toLocaleDateString(
                                    "en-PH",
                                    {
                                      year: "numeric",
                                      month: "short",
                                      day: "numeric",
                                    },
                                  )
                                : "—"}
                            </span>
                          </div>
                        </div>

                        <Button
                          type="button"
                          variant={
                            isExpanded
                              ? "secondary"
                              : "outline"
                          }
                          size="sm"
                          onClick={() =>
                            setExpandedId(
                              isExpanded
                                ? null
                                : item.id,
                            )
                          }
                          aria-expanded={
                            isExpanded
                          }
                          className="w-full shrink-0 sm:w-auto"
                        >
                          {isExpanded ? (
                            <>
                              <ChevronUp className="mr-2 h-4 w-4" />
                              Close Entry
                            </>
                          ) : (
                            <>
                              <ChevronDown className="mr-2 h-4 w-4" />
                              Review Entry
                            </>
                          )}
                        </Button>
                      </div>
                    </div>

                    {isExpanded ? (
                      <div className="border-t border-border/50 p-2 sm:p-3">
                        <RegistrationRow
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
                      </div>
                    ) : null}
                  </div>
                );
              })
            ) : (
              <div className="border border-dashed border-border/55 bg-card/20 p-6 text-center sm:p-10">
                <ShieldCheck className="mx-auto h-8 w-8 text-primary/45" />

                <p className="mt-4 font-display text-xl font-bold uppercase text-foreground">
                  Queue clear
                </p>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
                  Nothing matches the current queue and filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}