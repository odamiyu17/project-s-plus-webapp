import { Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { supabase } from "./auth-middleware-CmY4KpCX.mjs";
import { Button } from "./server-fns-D7ymjI7_.mjs";
import { ArrowLeft, CalendarDays, CircleCheck, CircleX, Clock3, CreditCard, ExternalLink, Gamepad2, GraduationCap, MapPin, Pencil, Phone, ShieldCheck, UserRound, Users } from "../_libs/lucide-react.mjs";
import { Route$3 } from "./router-CW0eFnIh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/my-registration-Dr8vzYIT.js
var import_jsx_runtime = require_jsx_runtime();
var STATUS_STYLES = {
	pending: "border-primary/40 bg-primary/10 text-primary",
	approved: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
	verified: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
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
function TeamIdentity({ registration }) {
	const logoUrl = getPublicUrl("team-logos", registration.team_logo_path);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "group relative grid h-24 w-24 shrink-0 place-items-center overflow-hidden border border-primary/20 bg-card/35 backdrop-blur-sm sm:h-28 sm:w-28",
			children: logoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: logoUrl,
				alt: `${registration.team_name || "Team"} logo`,
				className: "h-full w-full object-contain p-3 transition-transform duration-300 group-hover:scale-105"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-8 w-8 text-primary/50" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground",
					children: "Team Identity"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 break-words font-display text-2xl font-bold uppercase tracking-[0.03em] text-foreground sm:text-3xl",
					children: registration.team_name || "Unnamed Squad"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground",
					children: [registration.team_tag ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"Tag:",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground",
							children: registration.team_tag
						})
					] }) : null, registration.region ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 text-primary" }), registration.region]
					}) : null]
				})
			]
		})]
	});
}
function DetailItem({ label, children, icon: Icon, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `min-w-0 rounded-none border border-border/35 bg-background/15 p-3 ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground",
			children: [Icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3 w-3 text-primary/80" }) : null, label]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 break-words text-sm text-foreground",
			children: children || "—"
		})]
	});
}
function PlayerCard({ player, index }) {
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
					className: "font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground",
					children: isMain ? "Main Roster" : "Substitute"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `border px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.18em] ${isMain ? "border-primary/35 bg-primary/[0.06] text-primary" : "border-border/50 bg-background/15 text-muted-foreground"}`,
					children: isMain ? "Main" : "Sub"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-3 sm:p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4 sm:flex-row sm:gap-5",
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "break-words font-display text-lg font-bold uppercase tracking-[0.04em] text-foreground sm:text-xl",
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
					className: "mt-5 grid gap-4 border-t border-border/60 pt-5 sm:grid-cols-2 lg:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailItem, {
							label: "Full Name",
							icon: UserRound,
							children: player.full_name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailItem, {
							label: "MLID",
							icon: Gamepad2,
							children: player.game_id
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailItem, {
							label: "Birthdate",
							icon: CalendarDays,
							children: formatBirthdate(player.birthdate)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailItem, {
							label: "Age",
							children: player.age !== void 0 && player.age !== null ? `${player.age} years old` : "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailItem, {
							label: "Contact Number",
							icon: Phone,
							children: player.contact_number ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${player.contact_number}`,
								className: "transition-colors hover:text-primary",
								children: player.contact_number
							}) : "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailItem, {
							label: "School",
							icon: GraduationCap,
							children: player.school || "Not provided"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailItem, {
							label: "Organization",
							children: player.organization || "Not provided"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailItem, {
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
function TekkenDetails({ registration }) {
	const photoUrl = getPublicUrl("player-photos", registration.player_photo_path);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-5 sm:flex-row sm:gap-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "group relative h-32 w-32 shrink-0 overflow-hidden border border-primary/20 bg-card/30 sm:h-40 sm:w-40",
			children: photoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: photoUrl,
				alt: registration.player_name || "TEKKEN 8 fighter",
				className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-full w-full place-items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "h-12 w-12 text-primary/40" })
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 flex-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground",
					children: "Fighter"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 break-words font-display text-xl font-bold uppercase tracking-[0.04em] text-foreground sm:text-2xl",
					children: registration.in_game_id || "Unnamed Fighter"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 grid gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailItem, {
							label: "Full Name",
							icon: UserRound,
							children: registration.player_name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailItem, {
							label: "In-game ID",
							icon: Gamepad2,
							children: registration.in_game_id
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailItem, {
							label: "Region / City",
							icon: MapPin,
							children: registration.region || "Not provided"
						})
					]
				})
			]
		})]
	});
}
function ContactDetails({ registration }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "border-t border-border/45 bg-background/10 px-4 py-5 sm:px-6 sm:py-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground",
			children: "Main Contact"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailItem, {
					label: "Contact Person",
					icon: UserRound,
					children: registration.contact_name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailItem, {
					label: "Email",
					children: registration.contact_email ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `mailto:${registration.contact_email}`,
						className: "break-all transition-colors hover:text-primary",
						children: registration.contact_email
					}) : "—"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailItem, {
					label: "Mobile",
					icon: Phone,
					children: registration.contact_phone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `tel:${registration.contact_phone}`,
						className: "transition-colors hover:text-primary",
						children: registration.contact_phone
					}) : "Not provided"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailItem, {
					label: "Discord",
					children: registration.discord || "Not provided"
				})
			]
		})]
	});
}
function MyRegistrationPage() {
	const registrations = Route$3.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-screen overflow-x-hidden pb-20 sm:pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-gradient-to-b from-primary/[0.025] via-transparent to-transparent"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "relative border-b border-border/50 bg-card/20 backdrop-blur-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-3 py-10 sm:px-8 sm:py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "mb-6 inline-flex items-center font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary sm:mb-8 sm:text-[10px] sm:tracking-[0.2em]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "mr-2 h-4 w-4" }), "Back to Site"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5 sm:gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-primary/80" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[9px] uppercase tracking-[0.22em] text-primary sm:text-[10px] sm:tracking-[0.3em]",
									children: "Competitor Portal"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									className: "h-1.5 w-1.5 rotate-45 border border-primary/50 bg-primary/10"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 max-w-full break-words font-display text-4xl font-bold uppercase leading-[0.92] tracking-[0.02em] text-foreground sm:text-6xl sm:tracking-[0.03em] lg:text-7xl",
							children: "My Registration"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-5 h-px w-24 bg-gradient-to-r from-primary/80 via-primary/35 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base",
							children: "View your tournament entry, complete roster, registration status, and payment verification status."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-6xl px-3 py-7 sm:px-8 sm:py-10",
				children: !registrations.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-interactive card-interactive-glow relative overflow-hidden border border-dashed border-border/55 bg-card/30 p-6 text-center backdrop-blur-md sm:p-10",
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
							className: "mt-6 w-full sm:w-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/join",
								children: "Register now"
							})
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-8",
					children: registrations.map((registration) => {
						const isSquad = registration.game === "mlbb";
						const canEdit = registration.status === "pending";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "card-interactive card-interactive-glow relative overflow-hidden border border-border/55 bg-card/40 backdrop-blur-md",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									"aria-hidden": true,
									className: "pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative border-b border-border/50 p-4 sm:p-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "break-words font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground sm:text-[10px] sm:tracking-[0.22em]",
												children: [
													isSquad ? "MLBB Squad" : "TEKKEN 8 Fighter",
													" · ",
													registration.reference_code
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "mt-2 break-words font-display text-2xl font-bold uppercase leading-tight text-foreground sm:text-3xl",
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
									className: "grid gap-3 border-b border-border/45 p-4 sm:p-6 md:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
										className: "relative min-w-0 overflow-hidden border border-border/45 bg-background/20 p-4 sm:p-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "break-words font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground sm:text-[10px] sm:tracking-[0.22em]",
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
										className: "relative min-w-0 overflow-hidden border border-border/45 bg-background/20 p-4 sm:p-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "break-words font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground sm:text-[10px] sm:tracking-[0.22em]",
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
									className: "p-4 sm:p-6",
									children: isSquad ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeamIdentity, { registration }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 border-t border-border/45 pt-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col items-start gap-2 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-mono text-[10px] uppercase tracking-[0.22em] text-primary",
												children: "Full Roster"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-1 font-display text-2xl font-bold uppercase tracking-[0.04em] text-foreground",
												children: "7 Players"
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground",
												children: "5 Main · 2 Substitute"
											})]
										}), Array.isArray(registration.roster) && registration.roster.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-5 grid gap-4 lg:grid-cols-2",
											children: registration.roster.map((player, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayerCard, {
												player,
												index
											}, `${player.ign || "player"}-${index}`))
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-5 border border-dashed border-border/55 bg-background/15 p-5 text-sm text-muted-foreground",
											children: "No roster information available."
										})]
									})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TekkenDetails, { registration })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactDetails, { registration }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col items-stretch gap-4 border-t border-border/45 bg-background/10 px-4 py-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:px-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex min-w-0 items-start gap-2 text-xs leading-5 text-muted-foreground sm:items-center",
										children: [
											registration.status === "approved" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-emerald-400" }) : registration.status === "rejected" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-4 w-4 text-destructive" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { className: "h-4 w-4 text-primary" }),
											"Last updated",
											" ",
											formatDate(registration.updated_at)
										]
									}), canEdit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										variant: "outline",
										size: "sm",
										className: "w-full text-primary sm:w-auto",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/edit-registration",
											search: { id: registration.id },
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "mr-2 h-3.5 w-3.5" }), "Edit Submission"]
										})
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground",
										children: "Editing locked"
									})]
								})
							]
						}, registration.id);
					})
				})
			})
		]
	});
}
//#endregion
export { MyRegistrationPage as component };
