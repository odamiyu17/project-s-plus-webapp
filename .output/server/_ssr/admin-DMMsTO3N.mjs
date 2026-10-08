import { __toESM } from "../_runtime.mjs";
import { require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { Link, useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { Button, getPaymentReceiptUrl, setPaymentStatus, setRegistrationStatus } from "./server-fns-CND7qUSL.mjs";
import { toast } from "../_libs/sonner.mjs";
import { BadgeCheck, Check, Eye, LogOut, RotateCcw, ShieldAlert, X } from "../_libs/lucide-react.mjs";
import { Route$4, useAuth } from "./router-BzYIxyQJ.mjs";
import { useServerFn } from "./useServerFn-BffWjH4-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-DMMsTO3N.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AccessDenied({ email, onSignOut }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-xl px-4 py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, {
				className: "mx-auto h-10 w-10 text-primary",
				strokeWidth: 1.6
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-6 font-display text-3xl font-bold uppercase tracking-[0.04em] text-foreground",
				children: "Staff access only"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-sm leading-relaxed text-muted-foreground",
				children: [
					"Signed in as ",
					email || "your account",
					". This account isn't part of the HAGIT tournament staff team — ask an organizer to upgrade your role, or head back to the tournament page."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap justify-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					className: "h-11 rounded-none border-border px-5 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground hover:bg-secondary/40 hover:text-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						children: "Back to the arena"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: onSignOut,
					variant: "ghost",
					className: "h-11 rounded-none px-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground",
					children: "Sign out"
				})]
			})
		]
	});
}
var STATUS_STYLES = {
	pending: "border-primary/50 text-primary",
	approved: "border-primary/30 bg-primary/10 text-primary",
	rejected: "border-border text-muted-foreground"
};
var PAYMENT_STATUS_STYLES = {
	pending: "border-primary/40 text-primary",
	verified: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
	rejected: "border-destructive/40 bg-destructive/10 text-destructive"
};
function formatDate(value) {
	if (!value) return "—";
	return new Date(value).toLocaleString("en-US", {
		dateStyle: "medium",
		timeStyle: "short"
	});
}
function RegistrationRow({ item, busy, paymentBusy, receiptBusy, onDecide, onPaymentDecide, onViewReceipt }) {
	const status = item.status ?? "pending";
	const paymentStatus = item.payment_status ?? "pending";
	const isSquad = item.game === "mlbb";
	const hasReceipt = Boolean(item.payment_receipt_path);
	const paymentVerified = paymentStatus === "verified";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "border border-border/80 bg-card/60 p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-wrap items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground",
							children: [
								isSquad ? "MLBB squad" : "TEKKEN 8 fighter",
								" ",
								"·",
								" ",
								formatDate(item.created_at),
								item.reference_code ? ` · ${item.reference_code}` : ""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-2xl font-bold uppercase leading-tight tracking-[0.02em] text-foreground",
							children: isSquad ? item.team_name || "Untitled squad" : item.in_game_id || item.player_name || "Unnamed fighter"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: isSquad ? [item.team_tag ? `Tag ${item.team_tag}` : null, item.region].filter(Boolean).join(" · ") || "—" : [item.player_name, item.region].filter(Boolean).join(" · ") || "—"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] ${STATUS_STYLES[status]}`,
					children: status
				})]
			}),
			isSquad && Array.isArray(item.roster) && item.roster.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid gap-px border border-border/60 bg-border/50 sm:grid-cols-2",
				children: item.roster.map((player, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center justify-between gap-3 bg-background/70 px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0 truncate text-sm text-foreground",
						children: [
							index + 1,
							".",
							" ",
							player.ign
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground",
						children: [player.game_id, player.role ? ` · ${player.role}` : ""]
					})]
				}, `${player.ign}-${index}`))
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground",
						children: "Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-foreground",
						children: item.contact_name
					}),
					item.contact_email ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `mailto:${item.contact_email}`,
						className: "text-primary hover:underline",
						children: item.contact_email
					}) : null,
					item.contact_phone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `tel:${item.contact_phone}`,
						className: "text-muted-foreground hover:text-primary",
						children: item.contact_phone
					}) : null,
					item.discord ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: item.discord
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 border border-border/70 bg-background/40 p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-start justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground",
							children: "Payment"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-foreground",
							children: [
								"Method:",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium uppercase",
									children: item.payment_method || "—"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: [
								"Reference:",
								" ",
								item.payment_reference || "Not provided"
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] ${PAYMENT_STATUS_STYLES[paymentStatus] ?? PAYMENT_STATUS_STYLES.pending}`,
						children: paymentStatus
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap gap-3",
					children: [
						hasReceipt ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							size: "sm",
							variant: "outline",
							disabled: receiptBusy,
							onClick: () => onViewReceipt(item.id),
							className: "h-10 rounded-none border-border px-4 font-mono text-[10px] uppercase tracking-[0.2em]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "mr-2 h-4 w-4" }), receiptBusy ? "Opening…" : "View receipt"]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted-foreground",
							children: "No receipt uploaded"
						}),
						hasReceipt && paymentStatus !== "verified" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							size: "sm",
							disabled: paymentBusy,
							onClick: () => onPaymentDecide(item.id, "verified"),
							className: "h-10 rounded-none px-4 font-mono text-[10px] uppercase tracking-[0.2em]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "mr-2 h-4 w-4" }), "Verify payment"]
						}) : null,
						hasReceipt && paymentStatus !== "rejected" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							size: "sm",
							variant: "outline",
							disabled: paymentBusy,
							onClick: () => onPaymentDecide(item.id, "rejected"),
							className: "h-10 rounded-none border-border px-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "mr-2 h-4 w-4" }), "Reject payment"]
						}) : null,
						hasReceipt && paymentStatus !== "pending" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							size: "sm",
							variant: "ghost",
							disabled: paymentBusy,
							onClick: () => onPaymentDecide(item.id, "pending"),
							className: "h-10 rounded-none px-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "mr-2 h-3.5 w-3.5" }), "Reset payment"]
						}) : null
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex flex-wrap items-center gap-3 border-t border-border/70 pt-5",
				children: [
					status !== "approved" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						disabled: busy || paymentBusy || hasReceipt && !paymentVerified,
						onClick: () => onDecide(item.id, "approved"),
						title: hasReceipt && !paymentVerified ? "Verify the payment first" : void 0,
						className: "h-10 rounded-none px-5 font-mono text-[10px] uppercase tracking-[0.2em]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mr-2 h-4 w-4" }), "Authorize"]
					}) : null,
					status !== "rejected" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						variant: "outline",
						disabled: busy,
						onClick: () => onDecide(item.id, "rejected"),
						className: "h-10 rounded-none border-border px-5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:bg-secondary/40 hover:text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "mr-2 h-4 w-4" }), "Reject entry"]
					}) : null,
					status !== "pending" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						variant: "ghost",
						disabled: busy,
						onClick: () => onDecide(item.id, "pending"),
						className: "h-10 rounded-none px-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "mr-2 h-3.5 w-3.5" }), "Back to queue"]
					}) : null,
					busy || paymentBusy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[10px] uppercase tracking-[0.2em] text-primary",
						children: "Updating…"
					}) : null
				]
			})
		]
	});
}
var TABS = [
	{
		id: "pending",
		label: "Awaiting review"
	},
	{
		id: "approved",
		label: "Approved"
	},
	{
		id: "rejected",
		label: "Rejected"
	},
	{
		id: "all",
		label: "All entries"
	}
];
var GAMES = [
	{
		id: "all",
		label: "Both brackets"
	},
	{
		id: "mlbb",
		label: "MLBB"
	},
	{
		id: "tekken8",
		label: "TEKKEN 8"
	}
];
function AdminDashboard({ items, email, onSignOut }) {
	const router = useRouter();
	const setStatus = useServerFn(setRegistrationStatus);
	const setPayment = useServerFn(setPaymentStatus);
	const getReceipt = useServerFn(getPaymentReceiptUrl);
	const [tab, setTab] = (0, import_react.useState)("pending");
	const [game, setGame] = (0, import_react.useState)("all");
	const [busyId, setBusyId] = (0, import_react.useState)(null);
	const [paymentBusyId, setPaymentBusyId] = (0, import_react.useState)(null);
	const [receiptBusyId, setReceiptBusyId] = (0, import_react.useState)(null);
	const statusOf = (item) => item.status ?? "pending";
	const counts = {
		all: items.length,
		pending: 0,
		approved: 0,
		rejected: 0
	};
	items.forEach((item) => {
		counts[statusOf(item)] = (counts[statusOf(item)] ?? 0) + 1;
	});
	const visible = items.filter((item) => (tab === "all" || statusOf(item) === tab) && (game === "all" || item.game === game));
	async function decide(id, status) {
		setBusyId(id);
		try {
			await setStatus({ data: {
				id,
				status
			} });
			await router.invalidate();
			toast.success(status === "approved" ? "Entry authorized — now live on the roster board" : status === "rejected" ? "Entry rejected" : "Entry returned to the queue");
		} catch (error) {
			toast.error(error?.message || "Could not update that entry");
		} finally {
			setBusyId(null);
		}
	}
	async function decidePayment(id, status) {
		setPaymentBusyId(id);
		try {
			await setPayment({ data: {
				id,
				status
			} });
			await router.invalidate();
			toast.success(status === "verified" ? "Payment verified" : status === "rejected" ? "Payment rejected" : "Payment returned to pending");
		} catch (error) {
			toast.error(error?.message || "Could not update payment");
		} finally {
			setPaymentBusyId(null);
		}
	}
	async function viewReceipt(id) {
		setReceiptBusyId(id);
		const popup = window.open("about:blank", "_blank");
		try {
			const result = await getReceipt({ data: { id } });
			if (!result?.signedUrl) throw new Error("Receipt URL was not returned");
			if (popup) {
				popup.opener = null;
				popup.location.href = result.signedUrl;
			} else toast.error("Please allow pop-ups to view the receipt");
		} catch (error) {
			popup?.close();
			toast.error(error?.message || "Could not open payment receipt");
		} finally {
			setReceiptBusyId(null);
		}
	}
	const stats = [
		{
			label: "Total entries",
			value: counts.all
		},
		{
			label: "Awaiting review",
			value: counts.pending
		},
		{
			label: "Approved",
			value: counts.approved
		},
		{
			label: "Rejected",
			value: counts.rejected
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background pb-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-border/70 bg-secondary/20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] uppercase tracking-[0.28em] text-primary",
					children: "Hagit Tournament · Staff"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 font-display text-2xl font-bold uppercase tracking-[0.06em] text-foreground",
					children: "Command Center"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground",
							children: email
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							size: "sm",
							className: "h-10 rounded-none border-border px-4 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground hover:bg-secondary/40 hover:text-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								children: "View site"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							size: "sm",
							onClick: onSignOut,
							className: "h-10 rounded-none px-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "mr-2 h-3.5 w-3.5" }), "Sign out"]
						})
					]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-10 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "grid grid-cols-2 gap-px border border-border/70 bg-border/60 sm:grid-cols-4",
					children: stats.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-card/70 p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground",
							children: stat.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 font-display text-2xl font-bold text-primary",
							children: stat.value
						})]
					}, stat.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 flex flex-wrap items-center gap-2",
					children: TABS.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-pressed": tab === entry.id,
						onClick: () => setTab(entry.id),
						className: `border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors ${tab === entry.id ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:text-foreground"}`,
						children: [
							entry.label,
							" (",
							counts[entry.id] ?? 0,
							")"
						]
					}, entry.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex flex-wrap items-center gap-2",
					children: GAMES.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": game === entry.id,
						onClick: () => setGame(entry.id),
						className: `px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors ${game === entry.id ? "text-primary" : "text-muted-foreground hover:text-foreground"}`,
						children: entry.label
					}, entry.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 space-y-5",
					children: visible.length ? visible.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegistrationRow, {
						item,
						busy: busyId === item.id,
						paymentBusy: paymentBusyId === item.id,
						receiptBusy: receiptBusyId === item.id,
						onDecide: decide,
						onPaymentDecide: decidePayment,
						onViewReceipt: viewReceipt
					}, item.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "border border-dashed border-border/80 p-8 text-center text-sm text-muted-foreground",
						children: "Nothing in this list right now. Entries land in the queue the moment a competitor submits the form."
					})
				})
			]
		})]
	});
}
function AdminPage() {
	const { authorized, items } = Route$4.useLoaderData();
	const { user, logout } = useAuth();
	if (!authorized) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccessDenied, {
		email: user?.email,
		onSignOut: logout
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminDashboard, {
		items,
		email: user?.email,
		onSignOut: logout
	});
}
//#endregion
export { AdminPage as component };
