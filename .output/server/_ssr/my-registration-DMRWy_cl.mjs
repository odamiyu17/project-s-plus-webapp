import { Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { Button } from "./server-fns-CND7qUSL.mjs";
import { CircleCheck, CircleX, Clock3, CreditCard, ShieldCheck, Users } from "../_libs/lucide-react.mjs";
import { Route$3 } from "./router-BzYIxyQJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/my-registration-DMRWy_cl.js
var import_jsx_runtime = require_jsx_runtime();
var STATUS_STYLES = {
	pending: "border-primary/40 bg-primary/10 text-primary",
	approved: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
	rejected: "border-destructive/40 bg-destructive/10 text-destructive"
};
function StatusBadge({ status }) {
	const value = status ?? "pending";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] ${STATUS_STYLES[value] ?? STATUS_STYLES.pending}`,
		children: value
	});
}
function formatDate(value) {
	if (!value) return "—";
	return new Date(value).toLocaleString("en-PH", {
		dateStyle: "medium",
		timeStyle: "short"
	});
}
function MyRegistrationPage() {
	const registrations = Route$3.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen pb-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-border/70 bg-secondary/20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-5xl px-4 py-14 sm:px-8 sm:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] uppercase tracking-[0.3em] text-primary",
						children: "Competitor Portal"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-4xl font-bold uppercase tracking-[0.03em] text-foreground sm:text-6xl",
						children: "My Registration"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base",
						children: "View your tournament entry, registration status, and payment verification status."
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-5xl px-4 py-10 sm:px-8",
			children: !registrations.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-dashed border-border/80 p-10 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "mx-auto h-8 w-8 text-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 font-display text-2xl font-bold uppercase text-foreground",
						children: "No registration yet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-3 max-w-md text-sm leading-6 text-muted-foreground",
						children: "You haven't submitted a tournament registration using this account yet."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-6 h-11 rounded-none px-6 font-mono text-[10px] uppercase tracking-[0.2em]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/join",
							children: "Register now"
						})
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-6",
				children: registrations.map((registration) => {
					const isSquad = registration.game === "mlbb";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "border border-border/80 bg-card/60",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "border-b border-border/70 p-5 sm:p-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-start justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground",
											children: [
												isSquad ? "MLBB Squad" : "TEKKEN 8 Fighter",
												" · ",
												registration.reference_code
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-2 font-display text-2xl font-bold uppercase text-foreground sm:text-3xl",
											children: isSquad ? registration.team_name || "Unnamed Squad" : registration.in_game_id || registration.player_name || "Unnamed Fighter"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-2 text-sm text-muted-foreground",
											children: [
												"Submitted",
												" ",
												formatDate(registration.created_at)
											]
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: registration.status })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-px bg-border/60 md:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "bg-background/80 p-5 sm:p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground",
												children: "Registration"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: registration.status })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 text-sm leading-6 text-muted-foreground",
											children: registration.status === "approved" ? "Your registration has been approved by tournament staff." : registration.status === "rejected" ? "Your registration was rejected. Contact tournament staff if you need assistance." : "Your registration is waiting for staff review."
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "bg-background/80 p-5 sm:p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground",
												children: "Payment"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: registration.payment_status })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 space-y-2 text-sm",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-muted-foreground",
													children: [
														"Method:",
														" ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "uppercase text-foreground",
															children: registration.payment_method || "—"
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-muted-foreground",
													children: [
														"Reference:",
														" ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-foreground",
															children: registration.payment_reference || "Not provided"
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-muted-foreground",
													children: [
														"Receipt:",
														" ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-foreground",
															children: registration.has_payment_receipt ? "Uploaded" : "Not uploaded"
														})
													]
												})
											]
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-5 sm:p-6",
								children: isSquad && Array.isArray(registration.roster) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground",
									children: "Squad"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 grid gap-px border border-border/60 bg-border/60 sm:grid-cols-2",
									children: registration.roster.map((player, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "bg-background/80 px-4 py-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-sm font-medium text-foreground",
											children: [
												index + 1,
												".",
												" ",
												player.ign
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground",
											children: [player.game_id, player.role ? ` · ${player.role}` : ""]
										})]
									}, `${player.ign}-${index}`))
								})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground",
										children: "Fighter"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-lg font-medium text-foreground",
										children: registration.player_name || "—"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: [
											"In-game ID:",
											" ",
											registration.in_game_id || "—"
										]
									})
								] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap items-center justify-between gap-3 border-t border-border/70 px-5 py-4 sm:px-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-xs text-muted-foreground",
									children: [
										registration.status === "approved" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-emerald-400" }) : registration.status === "rejected" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-4 w-4 text-destructive" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { className: "h-4 w-4 text-primary" }),
										"Last updated",
										" ",
										formatDate(registration.updated_at)
									]
								})
							})
						]
					}, registration.id);
				})
			})
		})]
	});
}
//#endregion
export { MyRegistrationPage as component };
