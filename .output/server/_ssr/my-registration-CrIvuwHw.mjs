import { Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { supabase } from "./auth-middleware-CmY4KpCX.mjs";
import { Button } from "./server-fns-D7ymjI7_.mjs";
import { ArrowLeft, CalendarDays, CircleCheck, CircleX, Clock3, CreditCard, ExternalLink, Gamepad2, GraduationCap, MapPin, Pencil, Phone, ShieldCheck, UserRound, Users } from "../_libs/lucide-react.mjs";
import { Route$3 } from "./router-BTOSRoEZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/my-registration-CrIvuwHw.js
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
		className: "flex flex-col gap-5 sm:flex-row sm:items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid h-24 w-24 shrink-0 place-items-center overflow-hidden border border-border/80 bg-background/70",
			children: logoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: logoUrl,
				alt: `${registration.team_name || "Team"} logo`,
				className: "h-full w-full object-contain p-2"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-8 w-8 text-primary/50" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground",
					children: "Team Identity"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 font-display text-2xl font-bold uppercase tracking-[0.03em] text-foreground",
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
		className: `min-w-0 ${className}`,
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
		className: "overflow-hidden border border-border/80 bg-background/70",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex flex-wrap items-center justify-between gap-3 border-b border-border/70 bg-secondary/20 px-4 py-3",
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
				className: `border px-2 py-1 font-mono text-[9px] uppercase tracking-[0.18em] ${isMain ? "border-primary/40 bg-primary/5 text-primary" : "border-border text-muted-foreground"}`,
				children: isMain ? "Main" : "Sub"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-4 sm:p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-5 sm:flex-row",
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
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
function TekkenDetails({ registration }) {
	const photoUrl = getPublicUrl("player-photos", registration.player_photo_path);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6 sm:flex-row",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-40 w-40 shrink-0 overflow-hidden border border-border/80 bg-secondary/20",
			children: photoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: photoUrl,
				alt: registration.player_name || "TEKKEN 8 fighter",
				className: "h-full w-full object-cover"
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
					className: "mt-2 font-display text-2xl font-bold uppercase tracking-[0.04em] text-foreground",
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
		className: "border-t border-border/70 px-5 py-5 sm:px-6",
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
		className: "min-h-screen pb-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-border/70 bg-secondary/20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-14 sm:px-8 sm:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "mb-8 inline-flex items-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "mr-2 h-4 w-4" }), "Back to Site"]
					}),
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
						children: "View your tournament entry, complete roster, registration status, and payment verification status."
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-4 py-10 sm:px-8",
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
				className: "space-y-8",
				children: registrations.map((registration) => {
					const isSquad = registration.game === "mlbb";
					const canEdit = registration.status === "pending";
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
								className: "p-5 sm:p-6",
								children: isSquad ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeamIdentity, { registration }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 border-t border-border/70 pt-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-end justify-between gap-3",
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
										className: "mt-5 grid gap-5 lg:grid-cols-2",
										children: registration.roster.map((player, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayerCard, {
											player,
											index
										}, `${player.ign || "player"}-${index}`))
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 border border-dashed border-border/70 p-5 text-sm text-muted-foreground",
										children: "No roster information available."
									})]
								})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TekkenDetails, { registration })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactDetails, { registration }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-4 border-t border-border/70 px-5 py-4 sm:px-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-xs text-muted-foreground",
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
									className: "h-10 rounded-none border-primary/40 px-4 font-mono text-[10px] uppercase tracking-[0.2em] text-primary hover:bg-primary/10 hover:text-primary",
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
		})]
	});
}
//#endregion
export { MyRegistrationPage as component };
