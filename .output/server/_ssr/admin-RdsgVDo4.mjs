import { __toESM } from "../_runtime.mjs";
import { require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { Link, useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { supabase } from "./auth-middleware-CmY4KpCX.mjs";
import { Button, getPaymentReceiptUrl, setPaymentStatus, setRegistrationStatus } from "./server-fns-D7ymjI7_.mjs";
import { toast } from "../_libs/sonner.mjs";
import { CalendarDays, Check, CircleCheck, CircleX, CreditCard, ExternalLink, Eye, Gamepad2, GraduationCap, Image, LogOut, MapPin, Phone, RotateCcw, ShieldAlert, ShieldCheck, UserRound, Users, X } from "../_libs/lucide-react.mjs";
import { Route$5, useAuth } from "./router-CVNC_nBW.mjs";
import { useServerFn } from "./useServerFn-BffWjH4-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-RdsgVDo4.js
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
		className: `border px-2 py-1 font-mono text-[9px] uppercase tracking-[0.18em] ${STATUS_STYLES[value] ?? STATUS_STYLES.pending}`,
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
		className: `min-w-0 ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground",
			children: [Icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3 w-3 text-primary/80" }) : null, label]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 break-words text-sm text-foreground",
			children: children || "—"
		})]
	});
}
function PlayerReviewCard({ player, index }) {
	const photoUrl = getPublicUrl("player-photos", player.player_photo_path);
	const isMain = (player.roster_type || (index < 5 ? "main" : "substitute")) === "main";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "overflow-hidden border border-border/70 bg-background/70",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex flex-wrap items-center justify-between gap-3 border-b border-border/60 bg-secondary/20 px-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-display text-lg font-bold uppercase tracking-[0.04em] text-foreground",
				children: [
					"Player",
					" ",
					index + 1
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground",
				children: isMain ? "Main Roster" : "Substitute"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `border px-2 py-1 font-mono text-[9px] uppercase tracking-[0.18em] ${isMain ? "border-primary/40 text-primary" : "border-border text-muted-foreground"}`,
				children: isMain ? "Main" : "Sub"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-28 w-28 shrink-0 overflow-hidden border border-border/80 bg-secondary/20",
					children: photoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: photoUrl,
						alt: player.ign || `Player ${index + 1}`,
						className: "h-full w-full object-cover"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-full w-full place-items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "h-9 w-9 text-primary/40" })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-display text-xl font-bold uppercase tracking-[0.04em] text-foreground",
							children: player.ign || "No IGN"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: player.full_name || "No full name"
						}),
						player.role ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-3 inline-flex border border-primary/30 bg-primary/5 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-primary",
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
							className: "inline-flex max-w-full items-center gap-1.5 break-all text-primary hover:underline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: player.facebook_link
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3.5 w-3.5 shrink-0" })]
						}) : "—"
					})
				]
			})]
		})]
	});
}
function MlbbReview({ item }) {
	const teamLogoUrl = getPublicUrl("team-logos", item.team_logo_path);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "border border-border/70 bg-background/60 p-4 sm:p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-[9px] uppercase tracking-[0.2em] text-primary",
			children: "Team Identity"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 flex flex-col gap-5 sm:flex-row sm:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-28 w-28 shrink-0 place-items-center overflow-hidden border border-border/80 bg-background",
				children: teamLogoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: teamLogoUrl,
					alt: `${item.team_name || "Team"} logo`,
					className: "h-full w-full object-contain p-2"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-9 w-9 text-primary/40" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "font-display text-2xl font-bold uppercase text-foreground",
				children: item.team_name || "Untitled Squad"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground",
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
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-end justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[9px] uppercase tracking-[0.2em] text-primary",
				children: "Full Registration"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "mt-1 font-display text-xl font-bold uppercase text-foreground",
				children: "7-Player Roster"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground",
				children: "5 Main · 2 Substitute"
			})]
		}), Array.isArray(item.roster) && item.roster.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 grid gap-4 xl:grid-cols-2",
			children: item.roster.map((player, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayerReviewCard, {
				player,
				index
			}, `${player.ign || "player"}-${index}`))
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 border border-dashed border-border/70 p-5 text-sm text-muted-foreground",
			children: "No roster information available."
		})]
	})] });
}
function TekkenReview({ item }) {
	const photoUrl = getPublicUrl("player-photos", item.player_photo_path);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "border border-border/70 bg-background/60 p-4 sm:p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-[9px] uppercase tracking-[0.2em] text-primary",
			children: "Fighter Information"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 flex flex-col gap-5 sm:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-40 w-40 shrink-0 overflow-hidden border border-border/80 bg-secondary/20",
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
					className: "font-display text-2xl font-bold uppercase text-foreground",
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
		})]
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
		className: "border border-border/80 bg-card/60",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "border-b border-border/70 p-5 sm:p-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-start justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground",
								children: [
									isSquad ? "MLBB Squad" : "TEKKEN 8 Fighter",
									" · ",
									formatDate(item.created_at ?? item.created_date),
									item.reference_code ? ` · ${item.reference_code}` : ""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-2xl font-bold uppercase leading-tight tracking-[0.02em] text-foreground",
								children: isSquad ? item.team_name || "Untitled Squad" : item.in_game_id || item.player_name || "Unnamed Fighter"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: isSquad ? [item.team_tag ? `Tag ${item.team_tag}` : null, item.region].filter(Boolean).join(" · ") || "—" : [item.player_name, item.region].filter(Boolean).join(" · ") || "—"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-5 sm:p-6",
				children: isSquad ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MlbbReview, { item }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TekkenReview, { item })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "border-t border-border/70 px-5 py-5 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[9px] uppercase tracking-[0.2em] text-primary",
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
				className: "border-t border-border/70 bg-background/40 px-5 py-5 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-start justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[9px] uppercase tracking-[0.2em] text-primary",
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
							className: "h-10 rounded-none border-primary/40 px-4 font-mono text-[10px] uppercase tracking-[0.18em] text-primary hover:bg-primary/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "mr-2 h-4 w-4" }), receiptBusy ? "Opening…" : "View Receipt"]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "h-4 w-4" }), "No receipt"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
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
						className: "mt-5 flex flex-wrap gap-3 border-t border-border/60 pt-5",
						children: [
							paymentStatus !== "verified" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								size: "sm",
								disabled: paymentBusy,
								onClick: () => updatePayment("verified"),
								className: "h-10 rounded-none px-5 font-mono text-[10px] uppercase tracking-[0.18em]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mr-2 h-4 w-4" }), "Verify Payment"]
							}) : null,
							paymentStatus !== "rejected" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								size: "sm",
								variant: "outline",
								disabled: paymentBusy,
								onClick: () => updatePayment("rejected"),
								className: "h-10 rounded-none border-destructive/40 px-5 font-mono text-[10px] uppercase tracking-[0.18em] text-destructive hover:bg-destructive/10 hover:text-destructive",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "mr-2 h-4 w-4" }), "Reject Payment"]
							}) : null,
							paymentStatus !== "pending" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								size: "sm",
								variant: "ghost",
								disabled: paymentBusy,
								onClick: () => updatePayment("pending"),
								className: "h-10 rounded-none px-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "mr-2 h-3.5 w-3.5" }), "Reset Payment"]
							}) : null,
							paymentBusy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "self-center font-mono text-[9px] uppercase tracking-[0.18em] text-primary",
								children: "Updating…"
							}) : null
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-border/70 px-5 py-5 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[9px] uppercase tracking-[0.2em] text-primary",
						children: "Registration Decision"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [
						status !== "approved" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							disabled: busy,
							onClick: () => onDecide(item.id, "approved"),
							className: "h-10 rounded-none px-5 font-mono text-[10px] uppercase tracking-[0.2em]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mr-2 h-4 w-4" }), "Authorize"]
						}) : null,
						status !== "rejected" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "outline",
							disabled: busy,
							onClick: () => onDecide(item.id, "rejected"),
							className: "h-10 rounded-none border-border px-5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:bg-secondary/40 hover:text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "mr-2 h-4 w-4" }), "Reject"]
						}) : null,
						status !== "pending" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							variant: "ghost",
							disabled: busy,
							onClick: () => onDecide(item.id, "pending"),
							className: "h-10 rounded-none px-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "mr-2 h-3.5 w-3.5" }), "Back to Queue"]
						}) : null,
						busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[10px] uppercase tracking-[0.2em] text-primary",
							children: "Updating…"
						}) : null
					]
				})]
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
