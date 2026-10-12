import { __toESM } from "../_runtime.mjs";
import { require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { Link, useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { supabase } from "./auth-middleware-CmY4KpCX.mjs";
import { Button, getPaymentReceiptUrl, setPaymentStatus, setRegistrationStatus } from "./server-fns-D7ymjI7_.mjs";
import { toast } from "../_libs/sonner.mjs";
import { CalendarDays, Check, ChevronDown, ChevronUp, CircleCheck, CircleX, CreditCard, ExternalLink, Eye, Gamepad2, GraduationCap, Image, ListFilter, LogOut, MapPin, Phone, RotateCcw, ShieldAlert, ShieldCheck, TriangleAlert, UserRound, Users, X } from "../_libs/lucide-react.mjs";
import { Route$5, useAuth } from "./router-B39Ns8ML.mjs";
import { useServerFn } from "./useServerFn-BffWjH4-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-BkE7pJm4.js
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
	pending: "border-primary/50 bg-primary/5 text-primary",
	approved: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
	verified: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
	rejected: "border-destructive/40 bg-destructive/10 text-destructive"
};
function StatusBadge({ status }) {
	const value = status ?? "pending";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `border px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] ${STATUS_STYLES[value] ?? STATUS_STYLES.pending}`,
		children: value
	});
}
function formatDate(value) {
	if (!value) return "—";
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return value;
	return date.toLocaleString("en-PH", {
		dateStyle: "medium",
		timeStyle: "short"
	});
}
function formatBirthdate(value) {
	if (!value) return "—";
	const date = /* @__PURE__ */ new Date(`${value}T00:00:00`);
	if (Number.isNaN(date.getTime())) return value;
	return date.toLocaleDateString("en-PH", {
		year: "numeric",
		month: "long",
		day: "numeric"
	});
}
function getPublicUrl(bucket, path) {
	if (!path) return "";
	const { data } = supabase.storage.from(bucket).getPublicUrl(path);
	return data?.publicUrl ?? "";
}
function Detail({ label, children, icon: Icon, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `min-w-0 border border-border/35 bg-background/15 p-3 ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground",
			children: [Icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3 w-3 text-primary/80" }) : null, label]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 break-words text-base leading-6 text-foreground",
			children: children || "—"
		})]
	});
}
function PlayerReviewCard({ player, index }) {
	const photoUrl = getPublicUrl("player-photos", player.player_photo_path);
	const isMain = (player.roster_type || (index < 5 ? "main" : "substitute")) === "main";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "card-interactive card-interactive-glow group relative min-w-0 overflow-hidden border border-border/55 bg-background/25 backdrop-blur-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "relative flex flex-col items-start gap-3 border-b border-border/50 bg-card/35 px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-4 sm:py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-lg font-bold uppercase tracking-[0.04em] text-foreground",
					children: [
						"Player",
						" ",
						index + 1
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
					children: isMain ? "Main Roster" : "Substitute"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] ${isMain ? "border-primary/35 bg-primary/[0.06] text-primary" : "border-border/50 bg-background/15 text-muted-foreground"}`,
					children: isMain ? "Main" : "Sub"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-3 sm:p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-24 w-24 shrink-0 overflow-hidden border border-primary/20 bg-card/30 sm:h-28 sm:w-28",
						children: photoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: photoUrl,
							alt: player.ign || `Player ${index + 1}`,
							className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-full w-full place-items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "h-9 w-9 text-primary/40" })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "break-words font-display text-xl font-bold uppercase tracking-[0.04em] text-foreground sm:text-2xl",
								children: player.ign || "No IGN"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-base text-muted-foreground",
								children: player.full_name || "No full name"
							}),
							player.role ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-3 inline-flex border border-primary/30 bg-primary/5 px-2 py-1 font-mono text-xs uppercase tracking-[0.14em] text-primary",
								children: player.role
							}) : null
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 grid gap-4 border-t border-border/60 pt-5 sm:grid-cols-2 xl:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
							label: "Full Name",
							icon: UserRound,
							children: player.full_name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
							label: "MLID",
							icon: Gamepad2,
							children: player.game_id
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
							label: "Birthdate",
							icon: CalendarDays,
							children: formatBirthdate(player.birthdate)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
							label: "Age",
							children: player.age !== void 0 && player.age !== null ? `${player.age} years old` : "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
							label: "Contact",
							icon: Phone,
							children: player.contact_number ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${player.contact_number}`,
								className: "transition-colors hover:text-primary",
								children: player.contact_number
							}) : "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
							label: "School",
							icon: GraduationCap,
							children: player.school || "Not provided"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
							label: "Organization",
							children: player.organization || "Not provided"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
							label: "Facebook",
							className: "sm:col-span-2",
							children: player.facebook_link ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: player.facebook_link,
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex max-w-full items-start gap-1.5 break-all text-primary hover:underline",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "min-w-0 break-all",
									children: player.facebook_link
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3.5 w-3.5 shrink-0" })]
							}) : "—"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "pointer-events-none absolute bottom-0 right-0 h-6 w-6 border-b border-r border-primary/15 transition-all duration-300 group-hover:h-9 group-hover:w-9 group-hover:border-primary/35"
			})
		]
	});
}
function MlbbReview({ item }) {
	const teamLogoUrl = getPublicUrl("team-logos", item.team_logo_path);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "card-interactive card-interactive-glow relative min-w-0 overflow-hidden border border-border/55 bg-background/20 p-3 backdrop-blur-sm sm:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs uppercase tracking-[0.16em] text-primary",
				children: "Team Identity"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "group relative grid h-24 w-24 shrink-0 place-items-center overflow-hidden border border-primary/20 bg-card/30 sm:h-28 sm:w-28",
					children: teamLogoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: teamLogoUrl,
						alt: `${item.team_name || "Team"} logo`,
						className: "h-full w-full object-contain p-3 transition-transform duration-300 group-hover:scale-105"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-9 w-9 text-primary/40" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "break-words font-display text-2xl font-bold uppercase text-foreground sm:text-3xl",
					children: item.team_name || "Untitled Squad"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex flex-wrap gap-x-5 gap-y-2 text-base text-muted-foreground",
					children: [item.team_tag ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"Tag:",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground",
							children: item.team_tag
						})
					] }) : null, item.region ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 text-primary" }), item.region]
					}) : null]
				})] })]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-start gap-2 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs uppercase tracking-[0.16em] text-primary",
				children: "Full Registration"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "mt-1 font-display text-2xl font-bold uppercase text-foreground",
				children: "7-Player Roster"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
				children: "5 Main · 2 Substitute"
			})]
		}), Array.isArray(item.roster) && item.roster.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 grid gap-4 xl:grid-cols-2",
			children: item.roster.map((player, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayerReviewCard, {
				player,
				index
			}, `${player.ign || "player"}-${index}`))
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 border border-dashed border-border/55 bg-background/15 p-5 text-base leading-6 text-muted-foreground",
			children: "No roster information available."
		})]
	})] });
}
function TekkenReview({ item }) {
	const photoUrl = getPublicUrl("player-photos", item.player_photo_path);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "card-interactive card-interactive-glow relative min-w-0 overflow-hidden border border-border/55 bg-background/20 p-3 backdrop-blur-sm sm:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs uppercase tracking-[0.16em] text-primary",
				children: "Fighter Information"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-col gap-4 sm:flex-row sm:gap-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "group relative h-32 w-32 shrink-0 overflow-hidden border border-primary/20 bg-card/30 sm:h-40 sm:w-40",
					children: photoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: photoUrl,
						alt: item.player_name || "TEKKEN fighter",
						className: "h-full w-full object-cover"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-full w-full place-items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "h-12 w-12 text-primary/40" })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "break-words font-display text-2xl font-bold uppercase text-foreground sm:text-3xl",
						children: item.in_game_id || "Unnamed Fighter"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
								label: "Full Name",
								icon: UserRound,
								children: item.player_name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
								label: "In-game ID",
								icon: Gamepad2,
								children: item.in_game_id
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
								label: "Region / City",
								icon: MapPin,
								children: item.region || "Not provided"
							})
						]
					})]
				})]
			})
		]
	});
}
function RegistrationRow({ item, busy, onDecide }) {
	const router = useRouter();
	const changePaymentStatus = useServerFn(setPaymentStatus);
	const getReceipt = useServerFn(getPaymentReceiptUrl);
	const [paymentBusy, setPaymentBusy] = (0, import_react.useState)(false);
	const [receiptBusy, setReceiptBusy] = (0, import_react.useState)(false);
	const status = item.status ?? "pending";
	const paymentStatus = item.payment_status ?? "pending";
	const isSquad = item.game === "mlbb";
	const hasReceipt = Boolean(item.payment_receipt_path);
	const paymentVerified = paymentStatus === "verified";
	const paymentRejected = paymentStatus === "rejected";
	const canAuthorize = paymentVerified && hasReceipt;
	const decisionLocked = status === "approved" || status === "rejected";
	async function updatePayment(nextStatus) {
		setPaymentBusy(true);
		try {
			await changePaymentStatus({ data: {
				id: item.id,
				status: nextStatus
			} });
			await router.invalidate();
			toast.success(nextStatus === "verified" ? "Payment verified" : nextStatus === "rejected" ? "Payment rejected" : "Payment returned to pending");
		} catch (error) {
			toast.error(error?.message || "Unable to update payment status");
		} finally {
			setPaymentBusy(false);
		}
	}
	async function openReceipt() {
		setReceiptBusy(true);
		try {
			const result = await getReceipt({ data: { id: item.id } });
			if (!result?.signedUrl) throw new Error("Unable to open receipt");
			window.open(result.signedUrl, "_blank", "noopener,noreferrer");
		} catch (error) {
			toast.error(error?.message || "Unable to open payment receipt");
		} finally {
			setReceiptBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "card-interactive card-interactive-glow relative min-w-0 overflow-hidden border border-border/55 bg-card/40 backdrop-blur-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/[0.035] blur-3xl"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "relative border-b border-border/50 p-4 sm:p-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "break-words font-mono text-xs uppercase leading-5 tracking-[0.12em] text-muted-foreground sm:text-sm sm:tracking-[0.16em]",
								children: [
									isSquad ? "MLBB Squad" : "TEKKEN 8 Fighter",
									" · ",
									formatDate(item.created_at ?? item.created_date),
									item.reference_code ? ` · ${item.reference_code}` : ""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 break-words font-display text-3xl font-bold uppercase leading-tight tracking-[0.02em] text-foreground sm:text-4xl",
								children: isSquad ? item.team_name || "Untitled Squad" : item.in_game_id || item.player_name || "Unnamed Fighter"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-base text-muted-foreground",
								children: isSquad ? [item.team_tag ? `Tag ${item.team_tag}` : null, item.region].filter(Boolean).join(" · ") || "—" : [item.player_name, item.region].filter(Boolean).join(" · ") || "—"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative p-4 sm:p-6",
				children: isSquad ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MlbbReview, { item }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TekkenReview, { item })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "border-t border-border/45 bg-background/10 px-4 py-5 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs uppercase tracking-[0.16em] text-primary",
					children: "Main Contact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
							label: "Contact Name",
							icon: UserRound,
							children: item.contact_name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
							label: "Email",
							children: item.contact_email ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${item.contact_email}`,
								className: "break-all text-primary hover:underline",
								children: item.contact_email
							}) : "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
							label: "Phone",
							icon: Phone,
							children: item.contact_phone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${item.contact_phone}`,
								className: "hover:text-primary",
								children: item.contact_phone
							}) : "Not provided"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
							label: "Discord",
							children: item.discord || "Not provided"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "border-t border-border/45 bg-background/15 px-4 py-5 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs uppercase tracking-[0.16em] text-primary",
								children: "Payment Review"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: paymentStatus })
						})] }), item.payment_receipt_path ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							size: "sm",
							variant: "outline",
							disabled: receiptBusy,
							onClick: openReceipt,
							className: "w-full text-primary sm:w-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "mr-2 h-4 w-4" }), receiptBusy ? "Opening…" : "View Receipt"]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "h-4 w-4" }), "No receipt"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `mt-5 border p-3 sm:p-4 ${paymentVerified ? "border-emerald-500/30 bg-emerald-500/[0.05]" : paymentRejected ? "border-destructive/30 bg-destructive/[0.05]" : "border-amber-500/30 bg-amber-500/[0.05]"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3",
							children: [paymentVerified ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-emerald-400" }) : paymentRejected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "mt-0.5 h-4 w-4 shrink-0 text-destructive" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mt-0.5 h-4 w-4 shrink-0 text-amber-300" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs font-semibold uppercase tracking-[0.14em] text-foreground",
								children: paymentVerified ? "Payment cleared" : paymentRejected ? "Payment rejected" : hasReceipt ? "Payment needs verification" : "Receipt missing"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-6 text-muted-foreground",
								children: paymentVerified ? "The payment has been verified. Staff may continue to the final registration decision." : paymentRejected ? "Do not authorize this registration until the payment issue is resolved." : hasReceipt ? "Open the receipt and verify the payment reference before authorizing the registration." : "No payment receipt is attached. Do not authorize this registration yet."
							})] })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
								label: "Payment Method",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "uppercase",
									children: item.payment_method || "—"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
								label: "Reference",
								children: item.payment_reference || "Not provided"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
								label: "Receipt",
								children: item.payment_receipt_path ? "Uploaded" : "Not uploaded"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex flex-col gap-2 border-t border-border/60 pt-5 sm:flex-row sm:flex-wrap sm:gap-3",
						children: [
							paymentStatus !== "verified" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								size: "sm",
								disabled: paymentBusy || !hasReceipt,
								onClick: () => updatePayment("verified"),
								className: "w-full sm:w-auto",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mr-2 h-4 w-4" }), "Verify Payment"]
							}) : null,
							paymentStatus !== "rejected" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								size: "sm",
								variant: "outline",
								disabled: paymentBusy,
								onClick: () => updatePayment("rejected"),
								className: "w-full border-destructive/40 text-destructive hover:bg-destructive/10 hover:text-destructive sm:w-auto",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "mr-2 h-4 w-4" }), "Reject Payment"]
							}) : null,
							paymentStatus !== "pending" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								size: "sm",
								variant: "ghost",
								disabled: paymentBusy,
								onClick: () => updatePayment("pending"),
								className: "w-full text-muted-foreground sm:w-auto",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "mr-2 h-3.5 w-3.5" }), "Reset Payment"]
							}) : null,
							paymentBusy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "self-center font-mono text-xs uppercase tracking-[0.14em] text-primary",
								children: "Updating…"
							}) : null
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-border/45 bg-background/10 px-4 py-5 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs uppercase tracking-[0.16em] text-primary",
							children: "Registration Decision"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `mb-5 border p-3 sm:p-4 ${status === "approved" ? "border-emerald-500/30 bg-emerald-500/[0.05]" : status === "rejected" ? "border-destructive/30 bg-destructive/[0.05]" : canAuthorize ? "border-primary/30 bg-primary/[0.04]" : "border-amber-500/30 bg-amber-500/[0.05]"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3",
							children: [status === "approved" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-emerald-400" }) : status === "rejected" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "mt-0.5 h-4 w-4 shrink-0 text-destructive" }) : canAuthorize ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mt-0.5 h-4 w-4 shrink-0 text-amber-300" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs font-semibold uppercase tracking-[0.14em] text-foreground",
								children: status === "approved" ? "Registration approved" : status === "rejected" ? "Registration rejected" : canAuthorize ? "Ready for final decision" : "Final approval blocked"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-6 text-muted-foreground",
								children: status === "approved" ? "This entry is already authorized and live on the roster board." : status === "rejected" ? "This entry is currently rejected. Return it to the queue if staff needs to review it again." : canAuthorize ? "Payment is verified and a receipt is on file. Complete your final registration review before authorizing." : "Payment must be verified and a receipt must be on file before this registration can be authorized."
							})] })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3",
						children: [
							status !== "approved" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								disabled: busy || !canAuthorize || decisionLocked,
								onClick: () => onDecide(item.id, "approved"),
								className: "w-full sm:w-auto",
								title: canAuthorize ? "Authorize registration" : "Verify payment and confirm a receipt first",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mr-2 h-4 w-4" }), "Authorize"]
							}) : null,
							status !== "rejected" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								variant: "outline",
								disabled: busy,
								onClick: () => onDecide(item.id, "rejected"),
								className: "w-full text-muted-foreground sm:w-auto",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "mr-2 h-4 w-4" }), "Reject"]
							}) : null,
							status !== "pending" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								variant: "ghost",
								disabled: busy,
								onClick: () => onDecide(item.id, "pending"),
								className: "w-full text-muted-foreground hover:text-foreground sm:w-auto",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "mr-2 h-3.5 w-3.5" }), "Back to Queue"]
							}) : null,
							busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs uppercase tracking-[0.16em] text-primary",
								children: "Updating…"
							}) : null
						]
					})
				]
			})
		]
	});
}
var TABS = [
	{
		id: "needs_review",
		label: "Needs Review",
		description: "Pending registrations that still need staff action."
	},
	{
		id: "payment_issue",
		label: "Payment Issues",
		description: "Entries with rejected or still-pending payment verification."
	},
	{
		id: "approved",
		label: "Approved",
		description: "Entries already cleared by staff."
	},
	{
		id: "rejected",
		label: "Rejected",
		description: "Entries that were declined."
	},
	{
		id: "all",
		label: "All Entries",
		description: "Every registration in the tournament database."
	}
];
var PAYMENT_FILTERS = [
	{
		id: "all",
		label: "Any payment"
	},
	{
		id: "pending",
		label: "Payment pending"
	},
	{
		id: "verified",
		label: "Payment verified"
	},
	{
		id: "rejected",
		label: "Payment rejected"
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
	const updatePaymentStatus = useServerFn(setPaymentStatus);
	const getReceipt = useServerFn(getPaymentReceiptUrl);
	const [tab, setTab] = (0, import_react.useState)("needs_review");
	const [game, setGame] = (0, import_react.useState)("all");
	const [paymentFilter, setPaymentFilter] = (0, import_react.useState)("all");
	const [expandedId, setExpandedId] = (0, import_react.useState)(null);
	const [busyId, setBusyId] = (0, import_react.useState)(null);
	const [paymentBusyId, setPaymentBusyId] = (0, import_react.useState)(null);
	const [receiptBusyId, setReceiptBusyId] = (0, import_react.useState)(null);
	const statusOf = (item) => item.status ?? "pending";
	const paymentStatusOf = (item) => item.payment_status ?? "pending";
	const counts = {
		all: items.length,
		needs_review: 0,
		payment_issue: 0,
		approved: 0,
		rejected: 0
	};
	items.forEach((item) => {
		const registrationStatus = statusOf(item);
		const currentPaymentStatus = paymentStatusOf(item);
		if (registrationStatus === "pending") counts.needs_review += 1;
		if (registrationStatus !== "rejected" && currentPaymentStatus !== "verified") counts.payment_issue += 1;
		if (registrationStatus === "approved") counts.approved += 1;
		if (registrationStatus === "rejected") counts.rejected += 1;
	});
	const visible = items.filter((item) => {
		const registrationStatus = statusOf(item);
		const currentPaymentStatus = paymentStatusOf(item);
		const matchesQueue = tab === "all" || tab === "needs_review" && registrationStatus === "pending" || tab === "payment_issue" && registrationStatus !== "rejected" && currentPaymentStatus !== "verified" || registrationStatus === tab;
		const matchesGame = game === "all" || item.game === game;
		return matchesQueue && matchesGame && (paymentFilter === "all" || currentPaymentStatus === paymentFilter);
	});
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
			await updatePaymentStatus({ data: {
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
			label: "Total Entries",
			value: counts.all,
			icon: Users
		},
		{
			label: "Needs Review",
			value: counts.needs_review,
			icon: ShieldAlert
		},
		{
			label: "Payment Issues",
			value: counts.payment_issue,
			icon: CreditCard
		},
		{
			label: "Approved",
			value: counts.approved,
			icon: CircleCheck
		}
	];
	const activeTab = TABS.find((entry) => entry.id === tab) ?? TABS[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-x-hidden bg-background pb-16 sm:pb-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "relative border-b border-border/50 bg-card/20 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl flex-col items-start gap-4 px-3 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5 sm:gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-primary/80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] uppercase tracking-[0.2em] text-primary sm:text-xs sm:tracking-[0.28em]",
							children: "Hagit Tournament · Staff"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-3xl font-bold uppercase tracking-[0.04em] text-foreground sm:text-4xl sm:tracking-[0.05em]",
						children: "Command Center"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex w-full flex-wrap items-center gap-2 sm:w-auto sm:gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-full break-all font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground sm:w-auto sm:text-sm sm:tracking-[0.14em]",
								children: email
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								size: "sm",
								className: "flex-1 sm:flex-none",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									children: "View Site"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								size: "sm",
								onClick: onSignOut,
								className: "flex-1 text-muted-foreground sm:flex-none",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "mr-2 h-3.5 w-3.5" }), "Sign Out"]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "relative mx-auto max-w-7xl px-3 py-7 sm:px-8 sm:py-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "card-interactive card-interactive-glow relative overflow-hidden border border-border/55 bg-card/35 p-4 backdrop-blur-md sm:p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": true,
							className: "pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-5 sm:gap-6 xl:flex-row xl:items-end xl:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-2xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[11px] uppercase tracking-[0.24em] text-primary",
										children: "Staff Verification Flow"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-2 font-display text-2xl font-bold uppercase tracking-[0.03em] text-foreground sm:text-4xl sm:tracking-[0.04em]",
										children: "Review each entry in the same order"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7",
										children: "Check the registration first, verify the payment second, then make the final tournament decision."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-2 sm:grid-cols-3 sm:gap-3 xl:w-[620px]",
								children: [
									{
										step: "01",
										title: "Registration",
										copy: "Check team, fighter, roster, and contact details.",
										icon: Gamepad2
									},
									{
										step: "02",
										title: "Payment",
										copy: "Open the receipt and verify the reference.",
										icon: CreditCard
									},
									{
										step: "03",
										title: "Decision",
										copy: "Authorize only after the entry is fully checked.",
										icon: ShieldCheck
									}
								].map((entry) => {
									const Icon = entry.icon;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative border border-border/45 bg-background/20 p-3 sm:p-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-mono text-[11px] uppercase tracking-[0.18em] text-primary",
													children: ["Step ", entry.step]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-primary/70" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 font-display text-lg font-bold uppercase tracking-[0.03em] text-foreground sm:mt-3 sm:text-xl",
												children: entry.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-sm leading-6 text-muted-foreground",
												children: entry.copy
											})
										]
									}, entry.step);
								})
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-5 grid grid-cols-2 gap-2 sm:mt-6 sm:gap-3 lg:grid-cols-4",
						children: stats.map((stat) => {
							const Icon = stat.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "card-interactive relative min-w-0 overflow-hidden border border-border/50 bg-card/30 p-3 backdrop-blur-sm sm:p-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:text-[11px] sm:tracking-[0.2em]",
										children: stat.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-2 font-display text-3xl font-bold text-primary sm:text-4xl",
										children: stat.value
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-primary/45" })]
								})
							}, stat.label);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-6 border border-border/50 bg-card/25 p-3 backdrop-blur-sm sm:mt-8 sm:p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-4 sm:gap-5 xl:flex-row xl:items-end xl:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListFilter, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[11px] uppercase tracking-[0.22em] text-primary",
										children: "Review Queue"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 font-display text-2xl font-bold uppercase tracking-[0.03em] text-foreground sm:text-3xl",
									children: activeTab.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 max-w-xl text-sm leading-6 text-muted-foreground sm:text-sm",
									children: activeTab.description
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex w-full gap-2 overflow-x-auto pb-1 xl:w-auto xl:flex-wrap xl:overflow-visible xl:pb-0",
								children: TABS.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									"aria-pressed": tab === entry.id,
									onClick: () => setTab(entry.id),
									className: `shrink-0 border px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] transition-all duration-300 ${tab === entry.id ? "border-primary/50 bg-primary/[0.07] text-primary" : "border-border/50 bg-background/15 text-muted-foreground hover:border-primary/25 hover:text-foreground"}`,
									children: [
										entry.label,
										" (",
										counts[entry.id] ?? 0,
										")"
									]
								}, entry.id))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 grid gap-4 border-t border-border/40 pt-5 lg:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground",
								children: "Bracket"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0",
								children: GAMES.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-pressed": game === entry.id,
									onClick: () => setGame(entry.id),
									className: `shrink-0 border px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] transition-all duration-300 ${game === entry.id ? "border-primary/45 bg-primary/[0.06] text-primary" : "border-border/45 bg-background/10 text-muted-foreground hover:text-foreground"}`,
									children: entry.label
								}, entry.id))
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground",
								children: "Payment Status"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0",
								children: PAYMENT_FILTERS.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-pressed": paymentFilter === entry.id,
									onClick: () => setPaymentFilter(entry.id),
									className: `shrink-0 border px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] transition-all duration-300 ${paymentFilter === entry.id ? "border-primary/45 bg-primary/[0.06] text-primary" : "border-border/45 bg-background/10 text-muted-foreground hover:text-foreground"}`,
									children: entry.label
								}, entry.id))
							})] })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
									children: [
										"Showing ",
										visible.length,
										" of",
										" ",
										items.length,
										" entries"
									]
								}),
								tab === "payment_issue" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex w-full items-center gap-2 border border-amber-500/25 bg-amber-500/[0.05] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-amber-300 sm:w-auto sm:tracking-[0.16em]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-3.5 w-3.5" }), "Check receipts before approving"]
								}) : null,
								tab === "rejected" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex w-full items-center gap-2 border border-destructive/25 bg-destructive/[0.05] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-destructive sm:w-auto sm:tracking-[0.16em]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-3.5 w-3.5" }), "Rejected archive"]
								}) : null
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3",
							children: visible.length ? visible.map((item) => {
								const isExpanded = expandedId === item.id;
								const registrationStatus = statusOf(item);
								const currentPaymentStatus = paymentStatusOf(item);
								const isSquad = item.game === "mlbb";
								const entryName = isSquad ? item.team_name || "Untitled Squad" : item.in_game_id || item.player_name || "Unnamed Fighter";
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "overflow-hidden border border-border/50 bg-card/30 backdrop-blur-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "card-interactive relative p-4 sm:p-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											"aria-hidden": true,
											className: "pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0 flex-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex flex-wrap items-center gap-2",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "border border-primary/30 bg-primary/[0.05] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-primary",
																children: isSquad ? "MLBB" : "TEKKEN 8"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: `border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] ${registrationStatus === "approved" ? "border-emerald-500/35 bg-emerald-500/[0.06] text-emerald-400" : registrationStatus === "rejected" ? "border-destructive/35 bg-destructive/[0.06] text-destructive" : "border-primary/30 bg-primary/[0.05] text-primary"}`,
																children: [
																	"Registration:",
																	" ",
																	registrationStatus
																]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: `border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] ${currentPaymentStatus === "verified" ? "border-emerald-500/35 bg-emerald-500/[0.06] text-emerald-400" : currentPaymentStatus === "rejected" ? "border-destructive/35 bg-destructive/[0.06] text-destructive" : "border-amber-500/30 bg-amber-500/[0.05] text-amber-300"}`,
																children: [
																	"Payment:",
																	" ",
																	currentPaymentStatus
																]
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
														className: "mt-3 break-words font-display text-3xl font-bold uppercase leading-tight tracking-[0.03em] text-foreground sm:text-4xl",
														children: entryName
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "mt-2 flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs uppercase leading-5 tracking-[0.12em] text-muted-foreground",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
															"Ref:",
															" ",
															item.reference_code || "—"
														] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
															"Submitted:",
															" ",
															item.created_at ? new Date(item.created_at).toLocaleDateString("en-PH", {
																year: "numeric",
																month: "short",
																day: "numeric"
															}) : "—"
														] })]
													})
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												type: "button",
												variant: isExpanded ? "secondary" : "outline",
												size: "sm",
												onClick: () => setExpandedId(isExpanded ? null : item.id),
												"aria-expanded": isExpanded,
												className: "w-full shrink-0 sm:w-auto",
												children: isExpanded ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "mr-2 h-4 w-4" }), "Close Entry"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "mr-2 h-4 w-4" }), "Review Entry"] })
											})]
										})]
									}), isExpanded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "border-t border-border/50 p-2 sm:p-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegistrationRow, {
											item,
											busy: busyId === item.id,
											paymentBusy: paymentBusyId === item.id,
											receiptBusy: receiptBusyId === item.id,
											onDecide: decide,
											onPaymentDecide: decidePayment,
											onViewReceipt: viewReceipt
										})
									}) : null]
								}, item.id);
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border border-dashed border-border/55 bg-card/20 p-6 text-center sm:p-10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "mx-auto h-8 w-8 text-primary/45" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 font-display text-xl font-bold uppercase text-foreground",
										children: "Queue clear"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground",
										children: "Nothing matches the current queue and filters."
									})
								]
							})
						})]
					})
				]
			})
		]
	});
}
function AdminPage() {
	const { authorized, items } = Route$5.useLoaderData();
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
