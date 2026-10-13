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
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.07),transparent_26%),radial-gradient(circle_at_85%_12%,hsl(var(--primary)/0.045),transparent_22%),linear-gradient(to_bottom,hsl(var(--background)),hsl(var(--background)))]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(hsl(var(--primary)/0.5)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.5)_1px,transparent_1px)] [background-size:48px_48px]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -left-28 top-40 h-72 w-72 rounded-full bg-primary/[0.035] blur-[120px]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -right-28 top-[28rem] h-80 w-80 rounded-full bg-primary/[0.03] blur-[130px]"
      />

      <header className="relative border-b border-primary/10 bg-card/25 shadow-[0_18px_50px_-40px_hsl(var(--primary)/0.35)] backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 px-3 py-4 sm:px-6 md:flex-row md:items-center md:justify-between md:px-8 md:py-5">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          />
          <div>
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="h-px w-8 bg-primary/80" />

              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary sm:text-xs sm:tracking-[0.28em]">
                Hagit Tournament · Staff
              </p>
            </div>

            <h1 className="mt-2 font-display text-3xl font-bold uppercase tracking-[0.04em] text-foreground sm:text-4xl sm:tracking-[0.05em]">
              Command Center
            </h1>
          </div>

          <div className="grid w-full grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center sm:gap-3 md:w-auto">
            <span className="col-span-2 w-full break-all font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground sm:w-auto sm:text-sm sm:tracking-[0.14em] md:col-span-1">
              {email}
            </span>

            <Button
              asChild
              variant="outline"
              size="sm"
              className="motion-press flex-1 sm:flex-none"
            >
              <Link to="/">
                View Site
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={onSignOut}
              className="motion-press flex-1 text-muted-foreground sm:flex-none"
            >
              <LogOut className="mr-2 h-3.5 w-3.5" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="relative mx-auto max-w-7xl px-3 py-6 sm:px-5 sm:py-8 md:px-6 lg:px-8 lg:py-12">
        {/* STAFF REVIEW GUIDE */}
        <section className="card-interactive card-interactive-glow motion-rise relative overflow-hidden border border-primary/15 bg-card/45 p-4 shadow-[0_24px_70px_-48px_hsl(var(--primary)/0.45)] backdrop-blur-2xl sm:p-6 lg:p-7">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/55 to-transparent"
          />

          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-primary/[0.05] blur-[90px]"
          />

          <div className="flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">
                Staff Verification Flow
              </p>

              <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-[0.03em] text-foreground sm:text-4xl sm:tracking-[0.04em]">
                Review each entry in the same order
              </h2>

              <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                Check the registration first, verify the payment second, then make the final tournament decision.
              </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-3 sm:gap-3 lg:w-[58%] xl:w-[620px]">
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
                    className="relative overflow-hidden border border-border/45 bg-background/25 p-3 shadow-[inset_0_1px_0_hsl(var(--primary)/0.04)] backdrop-blur-md sm:p-4"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                        Step {entry.step}
                      </span>

                      <Icon className="h-4 w-4 text-primary/70" />
                    </div>

                    <p className="mt-2 font-display text-lg font-bold uppercase tracking-[0.03em] text-foreground sm:mt-3 sm:text-xl">
                      {entry.title}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {entry.copy}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SUMMARY */}
        <dl className="motion-rise motion-delay-1 mt-5 grid grid-cols-1 gap-2 min-[430px]:grid-cols-2 sm:mt-6 sm:gap-3 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="card-interactive motion-status relative min-w-0 overflow-hidden border border-primary/10 bg-card/40 p-4 shadow-[0_16px_36px_-30px_hsl(var(--primary)/0.45)] backdrop-blur-xl transition-transform duration-300 sm:p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:text-[11px] sm:tracking-[0.2em]">
                      {stat.label}
                    </dt>

                    <dd className="mt-2 font-display text-3xl font-bold text-primary sm:text-4xl">
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
        <section className="motion-rise motion-delay-2 relative mt-6 overflow-hidden border border-primary/10 bg-card/35 p-3 shadow-[0_20px_60px_-44px_hsl(var(--primary)/0.4)] backdrop-blur-2xl sm:mt-8 sm:p-5 lg:p-6">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent"
          />
          <div className="flex flex-col gap-4 sm:gap-5 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <ListFilter className="h-4 w-4 text-primary" />

                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                  Review Queue
                </p>
              </div>

              <h2 className="mt-2 font-display text-2xl font-bold uppercase tracking-[0.03em] text-foreground sm:text-3xl">
                {activeTab.label}
              </h2>

              <p className="mt-1 max-w-xl text-sm leading-6 text-muted-foreground sm:text-sm">
                {activeTab.description}
              </p>
            </div>

            <div className="-mx-1 flex w-[calc(100%+0.5rem)] gap-2 overflow-x-auto px-1 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:w-auto lg:flex-wrap lg:overflow-visible lg:pb-0">
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
                  className={`motion-press shrink-0 border px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] transition-all duration-300 ${
                    tab === entry.id
                      ? "border-primary/50 bg-primary/[0.10] text-primary shadow-[inset_0_0_0_1px_hsl(var(--primary)/0.04)]"
                      : "border-border/50 bg-background/20 text-muted-foreground hover:border-primary/25 hover:bg-background/30 hover:text-foreground"
                  }`}
                >
                  {entry.label} (
                  {counts[entry.id] ?? 0})
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-5 border-t border-border/40 pt-5 lg:grid-cols-2">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Bracket
              </p>

              <div className="-mx-1 mt-2 flex gap-2 overflow-x-auto px-1 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:overflow-visible sm:pb-0">
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
                    className={`motion-press shrink-0 border px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] transition-all duration-300 ${
                      game === entry.id
                        ? "border-primary/45 bg-primary/[0.09] text-primary"
                        : "border-border/45 bg-background/15 text-muted-foreground hover:border-primary/20 hover:bg-background/25 hover:text-foreground"
                    }`}
                  >
                    {entry.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Payment Status
              </p>

              <div className="-mx-1 mt-2 flex gap-2 overflow-x-auto px-1 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:overflow-visible sm:pb-0">
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
                      className={`motion-press shrink-0 border px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] transition-all duration-300 ${
                        paymentFilter ===
                        entry.id
                          ? "border-primary/45 bg-primary/[0.09] text-primary"
                          : "border-border/45 bg-background/15 text-muted-foreground hover:border-primary/20 hover:bg-background/25 hover:text-foreground"
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
        <div className="motion-rise motion-delay-3 relative mt-6 overflow-hidden border border-primary/10 bg-card/20 p-2.5 shadow-[0_22px_70px_-50px_hsl(var(--primary)/0.38)] backdrop-blur-xl sm:p-4 lg:p-5">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"
          />
          <div className="mb-4 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Showing {visible.length} of{" "}
              {items.length} entries
            </p>

            {tab ===
            "payment_issue" ? (
              <span className="inline-flex w-full flex-wrap items-center gap-2 border border-amber-500/25 bg-amber-500/[0.05] px-3 py-2 font-mono text-[10px] uppercase leading-5 tracking-[0.12em] text-amber-300 sm:w-auto sm:tracking-[0.16em]">
                <AlertTriangle className="h-3.5 w-3.5" />
                Check receipts before approving
              </span>
            ) : null}

            {tab === "rejected" ? (
              <span className="inline-flex w-full flex-wrap items-center gap-2 border border-destructive/25 bg-destructive/[0.05] px-3 py-2 font-mono text-[10px] uppercase leading-5 tracking-[0.12em] text-destructive sm:w-auto sm:tracking-[0.16em]">
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
                    className={`group/entry relative overflow-hidden border backdrop-blur-xl transition-[transform,border-color,background-color,box-shadow] duration-300 ease-out ${
                      isExpanded
                        ? "border-primary/30 bg-card/55 shadow-[0_24px_60px_-38px_hsl(var(--primary)/0.45)]"
                        : "border-border/50 bg-card/40 shadow-[0_14px_34px_-28px_hsl(var(--primary)/0.35)] hover:-translate-y-0.5 hover:border-primary/20 hover:bg-card/50 hover:shadow-[0_20px_44px_-30px_hsl(var(--primary)/0.4)]"
                    }`}
                  >
                    <div
                      aria-hidden
                      className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent transition-opacity duration-300 ${
                        isExpanded
                          ? "via-primary/70 opacity-100"
                          : "via-primary/35 opacity-80"
                      }`}
                    />

                    <div
                      aria-hidden
                      className={`pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-primary/[0.035] to-transparent transition-opacity duration-300 ${
                        isExpanded
                          ? "opacity-100"
                          : "opacity-0 group-hover/entry:opacity-70"
                      }`}
                    />

                    <div className="card-interactive relative p-3.5 sm:p-5 lg:p-6">
                      <div className="relative grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-6">
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                            <span className="inline-flex items-center gap-1.5 border border-primary/30 bg-primary/[0.07] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                              <span
                                aria-hidden
                                className="h-1.5 w-1.5 rotate-45 bg-primary/80"
                              />
                              {isSquad
                                ? "MLBB"
                                : "TEKKEN 8"}
                            </span>

                            <span
                              className={`motion-status inline-flex items-center gap-1.5 border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] ${
                                registrationStatus ===
                                "approved"
                                  ? "border-emerald-500/35 bg-emerald-500/[0.07] text-emerald-400"
                                  : registrationStatus ===
                                      "rejected"
                                    ? "border-destructive/35 bg-destructive/[0.07] text-destructive"
                                    : "border-primary/30 bg-primary/[0.06] text-primary"
                              }`}
                            >
                              <span
                                aria-hidden
                                className={`h-1.5 w-1.5 rounded-full ${
                                  registrationStatus ===
                                  "approved"
                                    ? "bg-emerald-400"
                                    : registrationStatus ===
                                        "rejected"
                                      ? "bg-destructive"
                                      : "bg-primary"
                                }`}
                              />
                              Reg {registrationStatus}
                            </span>

                            <span
                              className={`motion-status inline-flex items-center gap-1.5 border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] ${
                                currentPaymentStatus ===
                                "verified"
                                  ? "border-emerald-500/35 bg-emerald-500/[0.07] text-emerald-400"
                                  : currentPaymentStatus ===
                                      "rejected"
                                    ? "border-destructive/35 bg-destructive/[0.07] text-destructive"
                                    : "border-amber-500/30 bg-amber-500/[0.06] text-amber-300"
                              }`}
                            >
                              <span
                                aria-hidden
                                className={`h-1.5 w-1.5 rounded-full ${
                                  currentPaymentStatus ===
                                  "verified"
                                    ? "bg-emerald-400"
                                    : currentPaymentStatus ===
                                        "rejected"
                                      ? "bg-destructive"
                                      : "bg-amber-300"
                                }`}
                              />
                              Pay {currentPaymentStatus}
                            </span>
                          </div>

                          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                            <div className="min-w-0">
                              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                                {isSquad
                                  ? "Squad Entry"
                                  : "Fighter Entry"}
                              </p>

                              <h3 className="mt-1 break-words font-display text-2xl font-bold uppercase leading-[0.98] tracking-[0.02em] text-foreground sm:text-3xl lg:text-4xl">
                                {entryName}
                              </h3>
                            </div>

                            <div className="grid w-full grid-cols-1 gap-2 min-[430px]:grid-cols-2 md:w-auto md:shrink-0 md:flex md:items-center">
                              <div className="border border-border/45 bg-background/20 px-3 py-2 transition-colors duration-300 group-hover/entry:border-primary/15 group-hover/entry:bg-background/25">
                                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                                  Reference
                                </p>
                                <p className="mt-1 break-all font-mono text-[11px] uppercase leading-5 tracking-[0.06em] text-foreground/85">
                                  {item.reference_code ||
                                    "—"}
                                </p>
                              </div>

                              <div className="border border-border/45 bg-background/20 px-3 py-2 transition-colors duration-300 group-hover/entry:border-primary/15 group-hover/entry:bg-background/25">
                                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                                  Submitted
                                </p>
                                <p className="mt-1 font-mono text-[11px] uppercase leading-5 tracking-[0.06em] text-foreground/85">
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
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex w-full md:w-auto md:justify-end">
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
                            className={`motion-press h-11 w-full min-w-[150px] shrink-0 backdrop-blur-sm md:w-auto ${
                              isExpanded
                                ? "border-primary/30 bg-primary/[0.10] text-primary"
                                : "border-primary/20 bg-background/30 hover:border-primary/35 hover:bg-primary/[0.05]"
                            }`}
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
                    </div>

                    {isExpanded ? (
                      <div className="motion-fade relative border-t border-primary/15 bg-background/10 p-1.5 sm:p-3">
                        <div
                          aria-hidden
                          className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"
                        />
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
              <div className="motion-scale-in border border-dashed border-primary/15 bg-card/30 p-6 text-center backdrop-blur-xl sm:p-10">
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