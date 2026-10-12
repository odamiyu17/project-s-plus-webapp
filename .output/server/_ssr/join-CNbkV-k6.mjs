import { __toESM } from "../_runtime.mjs";
import { require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { supabase } from "./auth-middleware-CmY4KpCX.mjs";
import { Button, cn, submitRegistration } from "./server-fns-D7ymjI7_.mjs";
import { toast } from "../_libs/sonner.mjs";
import { ArrowLeft, ArrowRight, CircleCheck, CreditCard, ImagePlus, Send, Upload } from "../_libs/lucide-react.mjs";
import { Image } from "./image-BwNFCwj5.mjs";
import { useServerFn } from "./useServerFn-BffWjH4-.mjs";
import { Input, Label } from "./label-DY020iIz.mjs";
import { motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/join-CNbkV-k6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var inputClass = [
	"h-12",
	"rounded-none",
	"border-border/60",
	"bg-background/20",
	"px-4",
	"text-base",
	"tracking-wide",
	"text-foreground",
	"placeholder:text-muted-foreground/50",
	"transition-all",
	"duration-300",
	"hover:border-border",
	"focus-visible:border-primary/55",
	"focus-visible:bg-background/30",
	"focus-visible:ring-1",
	"focus-visible:ring-primary/40",
	"focus-visible:ring-offset-0",
	"disabled:cursor-not-allowed",
	"disabled:opacity-50"
].join(" ");
[
	"h-12",
	"w-full",
	"rounded-none",
	"border",
	"border-border/60",
	"bg-background/20",
	"px-3",
	"font-mono",
	"text-[10px]",
	"uppercase",
	"tracking-[0.14em]",
	"text-foreground",
	"transition-all",
	"duration-300",
	"hover:border-border",
	"focus-visible:outline-none",
	"focus-visible:border-primary/55",
	"focus-visible:bg-background/30",
	"focus-visible:ring-1",
	"focus-visible:ring-primary/40",
	"disabled:cursor-not-allowed",
	"disabled:opacity-50"
].join(" ");
var labelClass = [
	"block",
	"font-mono",
	"text-[9px]",
	"uppercase",
	"tracking-[0.22em]",
	"text-muted-foreground",
	"sm:text-[10px]"
].join(" ");
var errorClass = [
	"text-xs",
	"leading-relaxed",
	"text-destructive"
].join(" ");
function Field({ label, htmlFor, error, hint, className = "", children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor,
				className: labelClass,
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2.5",
				children
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex items-start gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-destructive"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: errorClass,
					children: error
				})]
			}) : hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-mono text-[9px] uppercase leading-relaxed tracking-[0.12em] text-muted-foreground/80",
				children: hint
			}) : null
		]
	});
}
function ContactFields({ values, errors, onChange, game, stepNumber = 3 }) {
	const who = game === "mlbb" ? "captain" : "fighter";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 border-b border-border/45 pb-6 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("legend", {
					className: "font-mono text-[10px] uppercase tracking-[0.28em] text-primary",
					children: [
						"Step",
						" ",
						String(stepNumber).padStart(2, "0"),
						" ",
						"— How we reach you"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl font-bold uppercase leading-[0.95] tracking-[0.03em] text-foreground sm:text-4xl",
					children: "Stay connected"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground",
					children: "Private contact details"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "-mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground",
				children: "We use these only to confirm your slot, schedule your series and send the bracket. Nothing is shown publicly."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-interactive card-interactive-glow relative overflow-hidden border border-border/55 bg-background/20 p-5 backdrop-blur-sm sm:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[9px] uppercase tracking-[0.22em] text-primary/70",
						children: "Primary Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: `${who === "captain" ? "Captain" : "Contact"} name`,
							htmlFor: "contact_name",
							error: errors.contact_name,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "contact_name",
								value: values.contact_name,
								onChange: onChange("contact_name"),
								placeholder: "Name we should ask for",
								autoComplete: "name",
								className: inputClass
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: "pointer-events-none absolute bottom-0 right-0 h-6 w-6 border-b border-r border-primary/15"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 border-t border-border/35 pt-8 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Email",
						htmlFor: "contact_email",
						error: errors.contact_email,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "contact_email",
							type: "email",
							value: values.contact_email,
							onChange: onChange("contact_email"),
							placeholder: "you@email.com",
							autoComplete: "email",
							className: inputClass
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Mobile number",
						htmlFor: "contact_phone",
						hint: "Optional but fastest",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "contact_phone",
							type: "tel",
							value: values.contact_phone,
							onChange: onChange("contact_phone"),
							placeholder: "0917 000 0000",
							autoComplete: "tel",
							className: inputClass
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Discord handle",
						htmlFor: "discord",
						hint: "Optional",
						className: "sm:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "discord",
							value: values.discord,
							onChange: onChange("discord"),
							placeholder: "@yourhandle",
							className: inputClass
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3 border border-border/40 bg-card/20 px-4 py-3 backdrop-blur-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-primary/50"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs leading-relaxed text-muted-foreground",
					children: "These details are used only by tournament staff for registration, scheduling, and bracket coordination."
				})]
			})
		]
	});
}
var MLBB_ROLES = [
	{
		value: "Gold lane",
		short: "Gold",
		icon: "/images/roles/gold.png"
	},
	{
		value: "EXP lane",
		short: "EXP",
		icon: "/images/roles/exp.png"
	},
	{
		value: "Jungler",
		short: "Jungle",
		icon: "/images/roles/junggle.png"
	},
	{
		value: "Mid lane",
		short: "Mid",
		icon: "/images/roles/mid.png"
	},
	{
		value: "Roamer",
		short: "Roam",
		icon: "/images/roles/roam.png"
	}
];
function RolePicker({ value, onChange, label = "Role", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-end justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground sm:text-[10px]",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[8px] uppercase tracking-[0.16em] text-muted-foreground/60",
				children: "Optional"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 grid grid-cols-2 gap-2 sm:grid-cols-5",
			children: MLBB_ROLES.map((role, index) => {
				const selected = value === role.value;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					"aria-pressed": selected,
					title: role.value,
					onClick: () => onChange(selected ? "" : role.value),
					className: cn([
						"card-interactive",
						"group",
						"relative",
						"flex",
						"min-h-[112px]",
						"flex-col",
						"items-center",
						"justify-center",
						"overflow-hidden",
						"border",
						"px-2",
						"py-3",
						"text-center",
						"transition-all",
						"duration-300"
					].join(" "), selected ? "border-primary/55 bg-primary/[0.07] shadow-[0_0_24px_-18px_hsl(var(--primary)/0.65)]" : "border-border/50 bg-background/20 hover:border-primary/35 hover:bg-primary/[0.035]"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": true,
							className: cn("pointer-events-none absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent transition-opacity duration-300", selected ? "opacity-100" : "opacity-0 group-hover:opacity-70")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "pointer-events-none absolute right-2 top-1.5 font-mono text-[7px] tracking-[0.14em] text-primary/25",
							children: String(index + 1).padStart(2, "0")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("grid h-11 w-11 place-items-center border p-1.5 transition-all duration-300", selected ? "border-primary/40 bg-primary/[0.07]" : "border-border/50 bg-foreground/95 group-hover:border-primary/30"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
								src: role.icon,
								alt: "",
								fittingType: "fit",
								className: "h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("mt-3 font-mono text-[9px] uppercase tracking-[0.14em] transition-colors duration-300", selected ? "text-primary" : "text-muted-foreground group-hover:text-foreground/80"),
							children: role.short
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: cn("mt-2 h-1.5 w-1.5 rotate-45 transition-all duration-300", selected ? "scale-100 bg-primary" : "scale-75 bg-primary/20 group-hover:scale-100 group-hover:bg-primary/50")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: cn("pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b border-r transition-all duration-300", selected ? "border-primary/40" : "border-primary/10 group-hover:h-6 group-hover:w-6 group-hover:border-primary/30")
						})
					]
				}, role.value);
			})
		})]
	});
}
function MlbbFields({ section, values, roster, errors, onChange, onRosterChange, teamLogo, onTeamLogoChange }) {
	const [logoPreview, setLogoPreview] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!teamLogo) {
			setLogoPreview(null);
			return;
		}
		const url = URL.createObjectURL(teamLogo);
		setLogoPreview(url);
		return () => {
			URL.revokeObjectURL(url);
		};
	}, [teamLogo]);
	if (section === "team") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 border-b border-border/45 pb-6 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
					className: "font-mono text-[10px] uppercase tracking-[0.28em] text-primary",
					children: "Step 02 — Team identity"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl font-bold uppercase leading-[0.95] tracking-[0.03em] text-foreground sm:text-4xl",
					children: "Build your squad profile"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground",
					children: "MLBB Team Entry"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "-mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground",
				children: "Upload your official team logo and enter the details that will identify your squad throughout the tournament."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-interactive card-interactive-glow relative overflow-hidden border border-border/55 bg-background/20 p-5 backdrop-blur-sm sm:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: labelClass,
						children: "Team logo"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid gap-5 sm:grid-cols-[170px_1fr] sm:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid aspect-square w-full max-w-[170px] place-items-center overflow-hidden border border-primary/20 bg-card/40",
							children: logoPreview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: logoPreview,
								alt: "Team logo preview",
								className: "h-full w-full object-contain p-3"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, {
								className: "h-10 w-10 text-primary/60",
								strokeWidth: 1.4
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								htmlFor: "team-logo",
								className: "group flex cursor-pointer items-center justify-center gap-3 border border-dashed border-border/60 bg-card/25 px-5 py-5 text-center transition-all duration-300 hover:border-primary/50 hover:bg-primary/[0.04] sm:justify-start",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-hover:-translate-y-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm font-medium text-foreground",
									children: teamLogo ? teamLogo.name : "Choose team logo"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-xs text-muted-foreground",
									children: "JPG, PNG or WEBP · maximum 5 MB"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "team-logo",
								type: "file",
								accept: "image/jpeg,image/png,image/webp",
								className: "hidden",
								onChange: (event) => onTeamLogoChange(event.target.files?.[0] ?? null)
							}),
							errors.team_logo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `${errorClass} mt-2`,
								children: errors.team_logo
							}) : null
						] })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 border-t border-border/35 pt-8 sm:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Team name",
					htmlFor: "team_name",
					error: errors.team_name,
					className: "sm:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "team_name",
						value: values.team_name,
						onChange: onChange("team_name"),
						placeholder: "e.g. Obsidian Vanguards",
						autoComplete: "organization",
						className: inputClass
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Team tag",
					htmlFor: "team_tag",
					error: errors.team_tag,
					hint: "Optional · 2–6 characters",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "team_tag",
						value: values.team_tag,
						onChange: onChange("team_tag"),
						placeholder: "OBSV",
						maxLength: 6,
						className: `${inputClass} uppercase`
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Region / city",
				htmlFor: "region",
				hint: "Optional — where your squad plays from",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "region",
					value: values.region,
					onChange: onChange("region"),
					placeholder: "e.g. Davao City",
					className: inputClass
				})
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 border-b border-border/45 pb-6 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
					className: "font-mono text-[10px] uppercase tracking-[0.28em] text-primary",
					children: "Step 03 — Players"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl font-bold uppercase leading-[0.95] tracking-[0.03em] text-foreground sm:text-4xl",
					children: "Lock in your seven"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground",
					children: "5 Main · 2 Substitute"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "-mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground",
				children: "Complete all seven player profiles. Players 1–5 are the main roster and Players 6–7 are substitutes."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-6",
				children: roster.map((player, index) => {
					const isMain = index < 5;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "card-interactive card-interactive-glow group relative overflow-hidden border border-border/55 bg-background/25 backdrop-blur-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": true,
								className: "pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent opacity-70"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex flex-wrap items-center justify-between gap-3 border-b border-border/50 bg-card/35 px-4 py-4 sm:px-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "grid h-10 w-10 place-items-center border border-primary/30 bg-primary/[0.05] font-mono text-[10px] font-bold tracking-[0.08em] text-primary transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/[0.08]",
										children: ["P", index + 1]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-display text-lg font-bold uppercase tracking-[0.05em] text-foreground",
										children: [
											"Player",
											" ",
											index + 1
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground",
										children: isMain ? "Main roster" : "Substitute"
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `border px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.18em] ${isMain ? "border-primary/35 bg-primary/[0.05] text-primary" : "border-border/60 bg-background/20 text-muted-foreground"}`,
									children: isMain ? "Main" : "Sub"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative grid gap-5 p-4 sm:grid-cols-2 sm:p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayerPhotoField, {
										player,
										index,
										error: errors[`photo_${index}`],
										onChange: onRosterChange
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Player full name",
										htmlFor: `full_name_${index}`,
										error: errors[`full_name_${index}`],
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: `full_name_${index}`,
											value: player.full_name,
											onChange: (event) => onRosterChange(index, "full_name", event.target.value),
											placeholder: "Full legal name",
											autoComplete: "name",
											className: inputClass
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "In-game name / IGN",
										htmlFor: `ign_${index}`,
										error: errors[`ign_${index}`],
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: `ign_${index}`,
											value: player.ign,
											onChange: (event) => onRosterChange(index, "ign", event.target.value),
											placeholder: "Player IGN",
											className: inputClass
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Birthdate",
										htmlFor: `birthdate_${index}`,
										error: errors[`birthdate_${index}`],
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: `birthdate_${index}`,
											type: "date",
											value: player.birthdate,
											onChange: (event) => onRosterChange(index, "birthdate", event.target.value),
											className: inputClass
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Age",
										htmlFor: `age_${index}`,
										error: errors[`age_${index}`],
										hint: "Calculated automatically",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: `age_${index}`,
											value: player.age ?? "",
											readOnly: true,
											placeholder: "—",
											className: `${inputClass} cursor-not-allowed bg-muted/30`
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "MLID",
										htmlFor: `game_id_${index}`,
										error: errors[`game_id_${index}`],
										hint: "Mobile Legends ID",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: `game_id_${index}`,
											value: player.game_id,
											onChange: (event) => onRosterChange(index, "game_id", event.target.value),
											placeholder: "e.g. 123456789 (1234)",
											className: inputClass
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Contact number",
										htmlFor: `contact_number_${index}`,
										error: errors[`contact_number_${index}`],
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: `contact_number_${index}`,
											type: "tel",
											value: player.contact_number,
											onChange: (event) => onRosterChange(index, "contact_number", event.target.value),
											placeholder: "09XX XXX XXXX",
											autoComplete: "tel",
											className: inputClass
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "School",
										htmlFor: `school_${index}`,
										hint: "Optional",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: `school_${index}`,
											value: player.school,
											onChange: (event) => onRosterChange(index, "school", event.target.value),
											placeholder: "School / university",
											className: inputClass
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Organization",
										htmlFor: `organization_${index}`,
										hint: "Optional",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: `organization_${index}`,
											value: player.organization,
											onChange: (event) => onRosterChange(index, "organization", event.target.value),
											placeholder: "Esports org / club",
											className: inputClass
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Facebook link",
										htmlFor: `facebook_link_${index}`,
										error: errors[`facebook_link_${index}`],
										className: "sm:col-span-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: `facebook_link_${index}`,
											type: "url",
											value: player.facebook_link,
											onChange: (event) => onRosterChange(index, "facebook_link", event.target.value),
											placeholder: "https://facebook.com/...",
											className: inputClass
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RolePicker, {
										label: `Player ${index + 1} role`,
										value: player.role,
										onChange: (role) => onRosterChange(index, "role", role),
										className: "sm:col-span-2"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: "pointer-events-none absolute bottom-0 right-0 h-6 w-6 border-b border-r border-primary/15 transition-all duration-300 group-hover:h-9 group-hover:w-9 group-hover:border-primary/35"
							})
						]
					}, index);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3 border border-border/40 bg-card/20 px-4 py-3 backdrop-blur-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-primary/50"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs leading-relaxed text-muted-foreground",
					children: "Players 1–5 are registered as the main lineup. Players 6–7 are registered as substitutes."
				})]
			})
		]
	});
}
function PlayerPhotoField({ player, index, error, onChange }) {
	const [preview, setPreview] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!player.photo) {
			setPreview(null);
			return;
		}
		const url = URL.createObjectURL(player.photo);
		setPreview(url);
		return () => {
			URL.revokeObjectURL(url);
		};
	}, [player.photo]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sm:col-span-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: labelClass,
			children: "Player photo"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 flex flex-col gap-4 border border-border/40 bg-card/20 p-4 sm:flex-row sm:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-24 w-24 shrink-0 overflow-hidden border border-primary/20 bg-background/30",
				children: preview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: preview,
					alt: `Player ${index + 1} preview`,
					className: "h-full w-full object-cover"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-full w-full place-items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, { className: "h-7 w-7 text-primary/60" })
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						htmlFor: `player_photo_${index}`,
						className: "group flex cursor-pointer items-center gap-3 border border-dashed border-border/60 bg-background/15 px-4 py-4 transition-all duration-300 hover:border-primary/50 hover:bg-primary/[0.04]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-5 w-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-sm text-foreground",
							children: player.photo ? player.photo.name : "Choose player photo"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-xs text-muted-foreground",
							children: "JPG, PNG or WEBP · maximum 5 MB"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: `player_photo_${index}`,
						type: "file",
						accept: "image/jpeg,image/png,image/webp",
						className: "hidden",
						onChange: (event) => onChange(index, "photo", event.target.files?.[0] ?? null)
					}),
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `${errorClass} mt-2`,
						children: error
					}) : null
				]
			})]
		})]
	});
}
var METHODS = [{
	id: "gcash",
	label: "GCash",
	qr: "/images/payments/gcash-qr.png"
}, {
	id: "bank",
	label: "Bank",
	qr: "/images/payments/bank-qr.png"
}];
function PaymentFields({ stepNumber = 4, method, onMethodChange, receipt, onReceiptChange, reference, onReferenceChange, errors }) {
	const selected = METHODS.find((item) => item.id === method) ?? null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 border-b border-border/45 pb-6 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-[10px] uppercase tracking-[0.28em] text-primary",
					children: [
						"Step",
						" ",
						String(stepNumber).padStart(2, "0"),
						" ",
						"— Payment"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl font-bold uppercase leading-[0.95] tracking-[0.03em] text-foreground sm:text-4xl",
					children: "Secure your slot"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground",
					children: "Receipt verification required"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "-mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground",
				children: "Choose a payment method, scan the QR code, then upload a clear screenshot or photo of your payment receipt."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[9px] uppercase tracking-[0.22em] text-primary/70",
					children: "Choose payment method"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-3 sm:grid-cols-2",
					children: METHODS.map((item, index) => {
						const active = method === item.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"aria-pressed": active,
							onClick: () => onMethodChange(item.id),
							className: `
                    card-interactive
                    card-interactive-glow
                    group
                    relative
                    overflow-hidden
                    border
                    p-5
                    text-left
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    ${active ? "border-primary/55 bg-primary/[0.07]" : "border-border/55 bg-card/30 hover:border-primary/40 hover:bg-card/45"}
                  `,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									"aria-hidden": true,
									className: `
                      pointer-events-none
                      absolute
                      inset-x-5
                      top-0
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-primary/45
                      to-transparent
                      transition-opacity
                      duration-300
                      ${active ? "opacity-100" : "opacity-50 group-hover:opacity-80"}
                    `
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `
                        grid
                        h-11
                        w-11
                        shrink-0
                        place-items-center
                        border
                        transition-all
                        duration-300
                        ${active ? "border-primary/40 bg-primary/[0.08] text-primary" : "border-border/50 bg-background/20 text-muted-foreground group-hover:border-primary/30 group-hover:text-primary"}
                      `,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-4 w-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-mono text-[8px] uppercase tracking-[0.2em] text-primary/60",
										children: [
											"Method",
											" ",
											String(index + 1).padStart(2, "0")
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 font-display text-xl font-bold uppercase tracking-[0.05em] text-foreground",
										children: item.label
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `
                      mt-4 inline-flex border px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.18em]
                      ${active ? "border-primary/35 bg-primary/[0.06] text-primary" : "border-border/40 text-muted-foreground"}
                    `,
									children: active ? "Selected" : "Select"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									className: "pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-b border-r border-primary/15 transition-all duration-300 group-hover:h-7 group-hover:w-7 group-hover:border-primary/35"
								})
							]
						}, item.id);
					})
				}),
				errors?.payment_method ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-destructive",
					children: errors.payment_method
				}) : null
			] }),
			selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-interactive card-interactive-glow relative overflow-hidden border border-border/55 bg-background/20 p-5 backdrop-blur-sm sm:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[9px] uppercase tracking-[0.22em] text-primary/70",
									children: "Scan to pay"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-display text-2xl font-bold uppercase tracking-[0.05em] text-foreground",
									children: selected.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: "Complete your payment using the QR code, then return here and upload your receipt below."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto w-full max-w-[380px] border border-border/50 bg-white p-3 lg:mx-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: selected.qr,
								alt: `${selected.label} payment QR`,
								className: "max-h-[520px] w-full object-contain"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: "pointer-events-none absolute bottom-0 right-0 h-7 w-7 border-b border-r border-primary/20"
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 border-t border-border/35 pt-8 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
						htmlFor: "payment-reference",
						className: "font-mono text-[10px] uppercase tracking-[0.18em] text-foreground",
						children: [
							"Payment reference number",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "(optional)"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "payment-reference",
						value: reference,
						onChange: (event) => onReferenceChange(event.target.value),
						placeholder: "Enter transaction/reference number",
						className: "h-12 rounded-none border-border/60 bg-background/20"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2 sm:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "payment-receipt",
							className: "font-mono text-[10px] uppercase tracking-[0.18em] text-foreground",
							children: "Upload payment receipt"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							htmlFor: "payment-receipt",
							className: "group flex cursor-pointer flex-col items-center justify-center border border-dashed border-border/60 bg-card/25 px-6 py-8 text-center transition-all duration-300 hover:border-primary/50 hover:bg-primary/[0.04]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "mb-3 h-6 w-6 text-primary transition-transform duration-300 group-hover:-translate-y-0.5" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium text-foreground",
									children: receipt ? receipt.name : "Choose receipt image"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 text-xs text-muted-foreground",
									children: "JPG, PNG, or WEBP · maximum 5 MB"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "payment-receipt",
							type: "file",
							accept: "image/jpeg,image/png,image/webp",
							className: "hidden",
							onChange: (event) => onReceiptChange(event.target.files?.[0] ?? null)
						}),
						errors?.payment_receipt ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-destructive",
							children: errors.payment_receipt
						}) : null
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3 border border-border/40 bg-card/20 px-4 py-3 backdrop-blur-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-primary/50"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs leading-relaxed text-muted-foreground",
					children: "Your receipt is reviewed by tournament staff before the payment is marked as verified."
				})]
			})
		]
	});
}
var REALMS = [{
	id: "mlbb",
	logo: "/images/games/mlbb-logo.png",
	name: "Mobile Legends: Bang Bang",
	tagline: "5v5 squad bracket",
	detail: "16 squad slots · a full roster of five · best-of-three until the grand final"
}, {
	id: "tekken8",
	logo: "/images/games/tekken8-logo.png",
	name: "TEKKEN 8",
	tagline: "Solo fighter bracket",
	detail: "32 fighter slots · 1v1 double elimination · best-of-five finals"
}];
function RealmStep({ value, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 border-b border-border/45 pb-6 sm:flex-row sm:items-end sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
				className: "font-mono text-[10px] uppercase tracking-[0.28em] text-primary",
				children: "Step 01 — Choose your realm"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-3xl font-bold uppercase leading-[0.95] tracking-[0.03em] text-foreground sm:text-4xl",
				children: "Pick your battleground"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground",
				children: "2 competitive divisions"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground",
			children: "One entry per competitor or squad. Pick the bracket you're fighting in — staff can move you later if needed."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-7 grid gap-4 sm:grid-cols-2",
			children: REALMS.map((realm, index) => {
				const active = value === realm.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					"aria-pressed": active,
					onClick: () => onSelect(realm.id),
					className: `
                card-interactive
                card-interactive-glow
                group
                relative
                flex
                min-h-[260px]
                flex-col
                items-start
                overflow-hidden
                border
                p-6
                text-left
                backdrop-blur-md
                transition-all
                duration-300
                ${active ? "border-primary/60 bg-primary/[0.07] shadow-[0_0_30px_-22px_hsl(var(--primary)/0.7)]" : "border-border/55 bg-card/35 hover:border-primary/40 hover:bg-card/50"}
              `,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": true,
							className: `
                  pointer-events-none
                  absolute
                  inset-x-6
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-primary/55
                  to-transparent
                  transition-opacity
                  duration-300
                  ${active ? "opacity-100" : "opacity-50 group-hover:opacity-80"}
                `
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": true,
							className: `
                  pointer-events-none
                  absolute
                  -right-14
                  -top-14
                  h-36
                  w-36
                  rounded-full
                  bg-primary
                  blur-3xl
                  transition-opacity
                  duration-500
                  ${active ? "opacity-[0.07]" : "opacity-[0.025] group-hover:opacity-[0.05]"}
                `
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "pointer-events-none absolute right-4 top-3 font-display text-7xl font-bold leading-none text-primary/[0.035]",
							children: String(index + 1).padStart(2, "0")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `
                  relative
                  grid
                  h-14
                  w-14
                  place-items-center
                  border
                  bg-background/25
                  p-2
                  transition-all
                  duration-300
                  ${active ? "border-primary/45" : "border-border/50 group-hover:border-primary/35"}
                `,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: realm.logo,
								alt: `${realm.name} logo`,
								className: "h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-6 font-mono text-[9px] uppercase tracking-[0.22em] text-primary/70",
							children: [
								"Division",
								" ",
								String(index + 1).padStart(2, "0")
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "card-interactive-shift mt-2 font-display text-2xl font-bold uppercase leading-tight tracking-[0.04em] text-foreground",
							children: realm.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 font-mono text-[9px] uppercase tracking-[0.22em] text-primary",
							children: realm.tagline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-4 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/75",
							children: realm.detail
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-auto pt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `
                    inline-flex
                    items-center
                    border
                    px-3
                    py-2
                    font-mono
                    text-[8px]
                    uppercase
                    tracking-[0.2em]
                    transition-all
                    duration-300
                    ${active ? "border-primary/40 bg-primary/[0.08] text-primary" : "border-border/40 bg-background/20 text-muted-foreground group-hover:border-primary/25 group-hover:text-primary/80"}
                  `,
								children: active ? "Selected" : "Select division"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: `
                  pointer-events-none
                  absolute
                  bottom-0
                  right-0
                  h-7
                  w-7
                  border-b
                  border-r
                  transition-all
                  duration-300
                  ${active ? "border-primary/45" : "border-primary/15 group-hover:h-10 group-hover:w-10 group-hover:border-primary/35"}
                `
						})
					]
				}, realm.id);
			})
		})
	] });
}
function SuccessPanel({ game, reference }) {
	const entryType = game === "mlbb" ? "Squad" : "Fighter";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 18,
			scale: .99
		},
		animate: {
			opacity: 1,
			y: 0,
			scale: 1
		},
		transition: {
			duration: .5,
			ease: "easeOut"
		},
		className: "card-interactive card-interactive-glow relative mt-12 overflow-hidden border border-primary/35 bg-card/45 p-6 backdrop-blur-md sm:p-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/[0.07] blur-[100px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
				"aria-hidden": true,
				strokeWidth: 1,
				className: "pointer-events-none absolute right-6 top-6 h-28 w-28 text-primary/[0.025] sm:h-36 sm:w-36"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-9 w-9 place-items-center border border-primary/30 bg-primary/[0.06]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
								className: "h-4 w-4 text-primary",
								strokeWidth: 1.8
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[9px] uppercase tracking-[0.28em] text-primary",
							children: "Transmission received"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-mono text-[8px] uppercase tracking-[0.18em] text-muted-foreground",
							children: "Registration successfully submitted"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-7 max-w-3xl font-display text-4xl font-bold uppercase leading-[0.9] tracking-[0.02em] text-foreground sm:text-5xl lg:text-6xl",
						children: "Deployment confirmed"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-5 h-px w-24 bg-gradient-to-r from-primary/80 via-primary/35 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
						children: [
							"Your",
							" ",
							game === "mlbb" ? "squad" : "fighter",
							" ",
							"entry is now in the staff review queue. Approved entries will appear in the Roster Vault once verification is complete."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid gap-3 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative overflow-hidden border border-border/50 bg-background/20 p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground",
									children: "Entry type"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-display text-2xl font-bold uppercase tracking-[0.05em] text-foreground",
									children: entryType
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									className: "pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-b border-r border-primary/15"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative overflow-hidden border border-primary/30 bg-primary/[0.04] p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground",
									children: "Reference code"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 break-all font-display text-2xl font-bold tracking-[0.16em] text-primary",
									children: reference
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									className: "pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-b border-r border-primary/30"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-start gap-3 border border-border/40 bg-background/15 px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-primary/50"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs leading-relaxed text-muted-foreground",
							children: "Keep your reference code for future registration or payment follow-ups with tournament staff."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 sm:flex-row sm:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "group",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								hash: "roster",
								children: ["Back to the arena", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "transition-transform duration-300 group-hover:translate-x-1" })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground",
							children: "Staff review pending"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "pointer-events-none absolute bottom-0 right-0 h-9 w-9 border-b border-r border-primary/25"
			})
		]
	});
}
function TekkenFields({ values, errors, onChange, playerPhoto, onPlayerPhotoChange }) {
	const [preview, setPreview] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!playerPhoto) {
			setPreview(null);
			return;
		}
		const url = URL.createObjectURL(playerPhoto);
		setPreview(url);
		return () => {
			URL.revokeObjectURL(url);
		};
	}, [playerPhoto]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 border-b border-border/45 pb-6 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
					className: "font-mono text-[10px] uppercase tracking-[0.28em] text-primary",
					children: "Step 02 — Identify your fighter"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl font-bold uppercase leading-[0.95] tracking-[0.03em] text-foreground sm:text-4xl",
					children: "Enter the arena"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground",
					children: "TEKKEN 8 Solo Entry"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "-mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground",
				children: "Add the details staff will use to identify and seed your fighter in the TEKKEN 8 bracket."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-interactive card-interactive-glow group relative overflow-hidden border border-border/55 bg-background/20 p-5 backdrop-blur-sm sm:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/[0.035] blur-3xl transition-opacity duration-500 group-hover:bg-primary/[0.06]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: labelClass,
						children: "Player photo"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-col gap-5 sm:flex-row sm:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-32 w-32 shrink-0 overflow-hidden border border-primary/20 bg-card/40",
							children: [preview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: preview,
								alt: "TEKKEN player preview",
								className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-full w-full place-items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, {
									className: "h-9 w-9 text-primary/60",
									strokeWidth: 1.4
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: "pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-b border-r border-primary/20"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									htmlFor: "tekken-player-photo",
									className: "group/upload flex cursor-pointer items-center gap-3 border border-dashed border-border/60 bg-card/25 px-5 py-5 transition-all duration-300 hover:border-primary/50 hover:bg-primary/[0.04]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-hover/upload:-translate-y-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-sm font-medium text-foreground",
										children: playerPhoto ? playerPhoto.name : "Choose player photo"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-xs text-muted-foreground",
										children: "JPG, PNG or WEBP · maximum 5 MB"
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "tekken-player-photo",
									type: "file",
									accept: "image/jpeg,image/png,image/webp",
									className: "hidden",
									onChange: (event) => onPlayerPhotoChange(event.target.files?.[0] ?? null)
								}),
								errors.player_photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `${errorClass} mt-2`,
									children: errors.player_photo
								}) : null
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 border-t border-border/35 pt-8 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Full name",
						htmlFor: "player_name",
						error: errors.player_name,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "player_name",
							value: values.player_name,
							onChange: onChange("player_name"),
							placeholder: "e.g. Miguel Santos",
							autoComplete: "name",
							className: inputClass
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "In-game ID",
						htmlFor: "in_game_id",
						error: errors.in_game_id,
						hint: "Exactly as it appears in-game",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "in_game_id",
							value: values.in_game_id,
							onChange: onChange("in_game_id"),
							placeholder: "e.g. IronFist_88",
							enterKeyHint: "next",
							className: inputClass
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Region / city",
						htmlFor: "region",
						hint: "Optional — where you play from",
						className: "sm:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "region",
							value: values.region,
							onChange: onChange("region"),
							placeholder: "e.g. Cebu",
							className: inputClass
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3 border border-border/40 bg-card/20 px-4 py-3 backdrop-blur-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-primary/50"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs leading-relaxed text-muted-foreground",
					children: "Your in-game ID is used by tournament staff when preparing and seeding the TEKKEN 8 bracket."
				})]
			})
		]
	});
}
var EMPTY_VALUES = {
	team_name: "",
	team_tag: "",
	region: "",
	player_name: "",
	in_game_id: "",
	contact_name: "",
	contact_email: "",
	contact_phone: "",
	discord: ""
};
var EMPTY_ROSTER = Array.from({ length: 7 }, (_, index) => ({
	photo: null,
	full_name: "",
	ign: "",
	birthdate: "",
	age: null,
	game_id: "",
	school: "",
	organization: "",
	facebook_link: "",
	contact_number: "",
	role: "",
	roster_type: index < 5 ? "main" : "substitute"
}));
var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var compact = (source) => Object.fromEntries(Object.entries(source).filter(([, value]) => value !== "" && value !== null && value !== void 0));
function calculateAge(birthdate) {
	if (!birthdate) return null;
	const date = /* @__PURE__ */ new Date(`${birthdate}T00:00:00`);
	if (Number.isNaN(date.getTime())) return null;
	const today = /* @__PURE__ */ new Date();
	let age = today.getFullYear() - date.getFullYear();
	const month = today.getMonth() - date.getMonth();
	if (month < 0 || month === 0 && today.getDate() < date.getDate()) age -= 1;
	return age;
}
function isFacebookUrl(value) {
	try {
		const hostname = new URL(value).hostname.toLowerCase().replace(/^www\./, "");
		return hostname === "facebook.com" || hostname.endsWith(".facebook.com");
	} catch {
		return false;
	}
}
function validateImage(file) {
	if (!file) return null;
	if (![
		"image/jpeg",
		"image/png",
		"image/webp"
	].includes(file.type)) return "Image must be JPG, PNG, or WEBP";
	if (file.size > 5242880) return "Image must be 5 MB or smaller";
	return null;
}
function prefersReducedMotion() {
	if (typeof window === "undefined" || !window.matchMedia) return false;
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function StepTransition({ transitionKey, direction, children }) {
	const containerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const element = containerRef.current;
		if (!element || typeof element.animate !== "function" || prefersReducedMotion()) return;
		const offset = direction === "back" ? -26 : 26;
		const animation = element.animate([{
			opacity: 0,
			transform: `translate3d(${offset}px, 8px, 0) scale(0.995)`
		}, {
			opacity: 1,
			transform: "translate3d(0, 0, 0) scale(1)"
		}], {
			duration: 380,
			easing: "cubic-bezier(0.22, 1, 0.36, 1)",
			fill: "both"
		});
		return () => animation.cancel();
	}, [transitionKey, direction]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: containerRef,
		className: "will-change-transform",
		children
	});
}
function SuccessTransition({ children }) {
	const containerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const element = containerRef.current;
		if (!element || typeof element.animate !== "function" || prefersReducedMotion()) return;
		const animation = element.animate([{
			opacity: 0,
			transform: "translate3d(0, 18px, 0) scale(0.985)"
		}, {
			opacity: 1,
			transform: "translate3d(0, 0, 0) scale(1)"
		}], {
			duration: 520,
			easing: "cubic-bezier(0.22, 1, 0.36, 1)",
			fill: "both"
		});
		return () => animation.cancel();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: containerRef,
		className: "will-change-transform",
		children
	});
}
function RegistrationWizard() {
	const submit = useServerFn(submitRegistration);
	const [game, setGame] = (0, import_react.useState)(null);
	const [step, setStep] = (0, import_react.useState)(0);
	const [transitionDirection, setTransitionDirection] = (0, import_react.useState)("forward");
	const [values, setValues] = (0, import_react.useState)(EMPTY_VALUES);
	const [roster, setRoster] = (0, import_react.useState)(EMPTY_ROSTER);
	const [teamLogo, setTeamLogo] = (0, import_react.useState)(null);
	const [tekkenPhoto, setTekkenPhoto] = (0, import_react.useState)(null);
	const [paymentMethod, setPaymentMethod] = (0, import_react.useState)("");
	const [paymentReference, setPaymentReference] = (0, import_react.useState)("");
	const [paymentReceipt, setPaymentReceipt] = (0, import_react.useState)(null);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [result, setResult] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!result || prefersReducedMotion()) return;
		import("../_libs/canvas-confetti.mjs").then((n) => n.confetti_module_exports).then(({ default: confetti }) => {
			confetti({
				particleCount: 140,
				spread: 80,
				origin: { y: .65 },
				colors: [
					"#D4AF37",
					"#A38953",
					"#1F302D",
					"#F2F5F4"
				]
			});
		});
	}, [result]);
	const labels = game === "mlbb" ? [
		"Game",
		"Team",
		"Players",
		"Contact",
		"Payment"
	] : [
		"Game",
		"Fighter",
		"Contact",
		"Payment"
	];
	const finalStep = labels.length - 1;
	const change = (key) => (event) => {
		const { value } = event.target;
		setValues((previous) => ({
			...previous,
			[key]: value
		}));
		setErrors((previous) => ({
			...previous,
			[key]: void 0
		}));
	};
	const changeRoster = (index, key, value) => {
		setRoster((previous) => previous.map((player, playerIndex) => {
			if (playerIndex !== index) return player;
			if (key === "birthdate") return {
				...player,
				birthdate: value,
				age: calculateAge(value)
			};
			return {
				...player,
				[key]: value
			};
		}));
		setErrors((previous) => ({
			...previous,
			[`${key}_${index}`]: void 0,
			...key === "birthdate" ? { [`age_${index}`]: void 0 } : {}
		}));
	};
	function teamErrors() {
		const next = {};
		if (values.team_name.trim().length < 2) next.team_name = "Enter your team name";
		if (!teamLogo) next.team_logo = "Upload your team logo";
		else {
			const logoError = validateImage(teamLogo);
			if (logoError) next.team_logo = logoError;
		}
		if (values.team_tag && values.team_tag.trim().length < 2) next.team_tag = "Use 2–6 characters or leave it blank";
		return next;
	}
	function playerErrors() {
		const next = {};
		roster.forEach((player, index) => {
			if (!player.photo) next[`photo_${index}`] = "Player photo is required";
			else {
				const photoError = validateImage(player.photo);
				if (photoError) next[`photo_${index}`] = photoError;
			}
			if (player.full_name.trim().length < 2) next[`full_name_${index}`] = "Full name is required";
			if (!player.ign.trim()) next[`ign_${index}`] = "IGN is required";
			if (!player.birthdate) next[`birthdate_${index}`] = "Birthdate is required";
			if (player.age === null || player.age < 10 || player.age > 100) next[`age_${index}`] = "Enter a valid birthdate";
			if (!player.game_id.trim()) next[`game_id_${index}`] = "MLID is required";
			if (!player.facebook_link.trim()) next[`facebook_link_${index}`] = "Facebook link is required";
			else if (!isFacebookUrl(player.facebook_link.trim())) next[`facebook_link_${index}`] = "Enter a valid Facebook link";
			if (player.contact_number.trim().length < 7) next[`contact_number_${index}`] = "Contact number is required";
		});
		return next;
	}
	function tekkenErrors() {
		const next = {};
		if (values.player_name.trim().length < 2) next.player_name = "Enter your full name";
		if (!values.in_game_id.trim()) next.in_game_id = "Enter your in-game ID";
		if (!tekkenPhoto) next.player_photo = "Player photo is required";
		else {
			const photoError = validateImage(tekkenPhoto);
			if (photoError) next.player_photo = photoError;
		}
		return next;
	}
	function contactErrors() {
		const next = {};
		if (values.contact_name.trim().length < 2) next.contact_name = "Enter a name we can reach";
		if (!EMAIL_RE.test(values.contact_email.trim())) next.contact_email = "Enter a valid email address";
		return next;
	}
	function paymentErrors() {
		const next = {};
		if (!paymentMethod) next.payment_method = "Choose a payment method";
		if (!paymentReceipt) next.payment_receipt = "Upload your payment receipt";
		else {
			const receiptError = validateImage(paymentReceipt);
			if (receiptError) next.payment_receipt = receiptError.replace("Image", "Receipt");
		}
		return next;
	}
	function goNext() {
		let next = {};
		if (game === "mlbb") {
			if (step === 1) next = teamErrors();
			if (step === 2) next = playerErrors();
			if (step === 3) next = contactErrors();
		} else {
			if (step === 1) next = tekkenErrors();
			if (step === 2) next = contactErrors();
		}
		if (Object.keys(next).length) {
			setErrors(next);
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
			return;
		}
		setErrors({});
		setTransitionDirection("forward");
		setStep((current) => current + 1);
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}
	async function handleSubmit(event) {
		event.preventDefault();
		if (step < finalStep) {
			goNext();
			return;
		}
		const invalid = paymentErrors();
		if (Object.keys(invalid).length) {
			setErrors(invalid);
			return;
		}
		setBusy(true);
		let uploadedLogoPath = null;
		let uploadedReceiptPath = null;
		let uploadedTekkenPhotoPath = null;
		let uploadedPlayerPhotoPaths = [];
		try {
			const extensionMap = {
				"image/jpeg": "jpg",
				"image/png": "png",
				"image/webp": "webp"
			};
			const { data: userResult, error: userError } = await supabase.auth.getUser();
			if (userError || !userResult?.user) throw new Error("You must be signed in to register");
			const userId = userResult.user.id;
			if (game === "mlbb") {
				const logoExtension = extensionMap[teamLogo.type] ?? "png";
				uploadedLogoPath = `${userId}/${crypto.randomUUID()}.${logoExtension}`;
				const { error: logoUploadError } = await supabase.storage.from("team-logos").upload(uploadedLogoPath, teamLogo, {
					contentType: teamLogo.type,
					upsert: false
				});
				if (logoUploadError) throw new Error(logoUploadError.message || "Unable to upload team logo");
				for (let index = 0; index < roster.length; index += 1) {
					const player = roster[index];
					const extension = extensionMap[player.photo.type] ?? "jpg";
					const path = `${userId}/mlbb/${crypto.randomUUID()}.${extension}`;
					const { error: playerUploadError } = await supabase.storage.from("player-photos").upload(path, player.photo, {
						contentType: player.photo.type,
						upsert: false
					});
					if (playerUploadError) throw new Error(playerUploadError.message || `Unable to upload Player ${index + 1} photo`);
					uploadedPlayerPhotoPaths.push(path);
				}
			}
			if (game === "tekken8") {
				const extension = extensionMap[tekkenPhoto.type] ?? "jpg";
				uploadedTekkenPhotoPath = `${userId}/tekken8/${crypto.randomUUID()}.${extension}`;
				const { error: playerUploadError } = await supabase.storage.from("player-photos").upload(uploadedTekkenPhotoPath, tekkenPhoto, {
					contentType: tekkenPhoto.type,
					upsert: false
				});
				if (playerUploadError) throw new Error(playerUploadError.message || "Unable to upload player photo");
			}
			const receiptExtension = extensionMap[paymentReceipt.type] ?? "jpg";
			uploadedReceiptPath = `receipts/${crypto.randomUUID()}.${receiptExtension}`;
			const { error: receiptUploadError } = await supabase.storage.from("payment-receipts").upload(uploadedReceiptPath, paymentReceipt, {
				contentType: paymentReceipt.type,
				upsert: false
			});
			if (receiptUploadError) throw new Error(receiptUploadError.message || "Unable to upload payment receipt");
			const shared = compact({
				region: values.region.trim(),
				contact_name: values.contact_name.trim(),
				contact_email: values.contact_email.trim(),
				contact_phone: values.contact_phone.trim(),
				discord: values.discord.trim(),
				payment_method: paymentMethod,
				payment_reference: paymentReference.trim(),
				payment_receipt_path: uploadedReceiptPath
			});
			const payload = game === "mlbb" ? {
				game,
				...shared,
				...compact({
					team_name: values.team_name.trim(),
					team_tag: values.team_tag.trim().toUpperCase(),
					team_logo_path: uploadedLogoPath
				}),
				roster: roster.map((player, index) => compact({
					player_photo_path: uploadedPlayerPhotoPaths[index],
					full_name: player.full_name.trim(),
					ign: player.ign.trim(),
					birthdate: player.birthdate,
					age: player.age,
					game_id: player.game_id.trim(),
					school: player.school.trim(),
					organization: player.organization.trim(),
					facebook_link: player.facebook_link.trim(),
					contact_number: player.contact_number.trim(),
					role: player.role,
					roster_type: index < 5 ? "main" : "substitute"
				}))
			} : {
				game,
				...shared,
				...compact({
					player_name: values.player_name.trim(),
					in_game_id: values.in_game_id.trim(),
					player_photo_path: uploadedTekkenPhotoPath
				})
			};
			const created = await submit({ data: payload });
			setResult(created);
		} catch (error) {
			if (uploadedReceiptPath) await supabase.storage.from("payment-receipts").remove([uploadedReceiptPath]).catch(() => {});
			if (uploadedLogoPath) await supabase.storage.from("team-logos").remove([uploadedLogoPath]).catch(() => {});
			if (uploadedPlayerPhotoPaths.length) await supabase.storage.from("player-photos").remove(uploadedPlayerPhotoPaths).catch(() => {});
			if (uploadedTekkenPhotoPath) await supabase.storage.from("player-photos").remove([uploadedTekkenPhotoPath]).catch(() => {});
			toast.error(error?.message || "We couldn't submit your entry. Please try again.");
		} finally {
			setBusy(false);
		}
	}
	if (result) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto w-full max-w-4xl px-3 sm:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SuccessTransition, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SuccessPanel, {
			game,
			reference: result.reference_code
		}) })
	});
	const contactStep = game === "mlbb" ? 3 : 2;
	const paymentStep = game === "mlbb" ? 4 : 3;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto w-full max-w-5xl px-3 pt-8 sm:px-8 sm:pt-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-interactive card-interactive-glow relative overflow-hidden border border-border/55 bg-card/35 p-4 backdrop-blur-md sm:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-primary/[0.045] blur-3xl"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex flex-col gap-4 sm:gap-5 sm:flex-row sm:items-end sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[9px] uppercase tracking-[0.24em] text-primary/70",
							children: "Registration Flow"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex items-end gap-2.5 sm:gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-3xl font-bold uppercase leading-none text-primary xs:text-4xl sm:text-5xl",
								children: String(step + 1).padStart(2, "0")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pb-0.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-lg font-bold uppercase tracking-[0.04em] text-foreground xs:text-xl sm:text-2xl",
									children: labels[step]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground",
									children: [
										"Step ",
										step + 1,
										" of",
										" ",
										labels.length
									]
								})]
							})]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-sm text-xs leading-relaxed text-muted-foreground sm:text-sm sm:text-right",
							children: "Complete each section carefully. Your progress moves forward only after the required details are valid."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "relative mt-5 flex gap-2 overflow-x-auto pb-2 sm:mt-6 sm:grid sm:grid-cols-5 sm:overflow-visible sm:pb-0",
						children: labels.map((label, index) => {
							const isActive = index === step;
							const isComplete = index < step;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: `
                    relative
                    overflow-hidden
                    border
                    min-w-[132px]
                    px-3
                    py-3
                    sm:min-w-0
                    transition-all
                    duration-300
                    motion-reduce:transition-none
                    ${isActive ? "border-primary/45 bg-primary/[0.07]" : isComplete ? "border-primary/20 bg-primary/[0.025]" : "border-border/45 bg-background/15"}
                  `,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										"aria-hidden": true,
										className: `
                      absolute
                      inset-x-0
                      top-0
                      h-px
                      transition-opacity
                      duration-300
                      ${isActive || isComplete ? "bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-100" : "opacity-0"}
                    `
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: `
                      font-mono
                      text-[8px]
                      uppercase
                      tracking-[0.2em]
                      ${isActive ? "text-primary" : isComplete ? "text-primary/70" : "text-muted-foreground/70"}
                    `,
										children: [
											"Step",
											" ",
											String(index + 1).padStart(2, "0")
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: `
                      mt-1
                      font-display
                      text-sm
                      font-bold
                      uppercase
                      tracking-[0.05em]
                      ${isActive ? "text-foreground" : isComplete ? "text-foreground/80" : "text-muted-foreground"}
                    `,
										children: label
									}),
									isComplete ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": true,
										className: "absolute bottom-2 right-2 h-1.5 w-1.5 rotate-45 bg-primary/60"
									}) : null
								]
							}, label);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 h-px w-full overflow-hidden bg-border/50",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-px bg-primary shadow-[0_0_10px_rgba(201,169,108,0.28)] transition-[width] duration-500 ease-out motion-reduce:transition-none",
							style: { width: `${(step + 1) / labels.length * 100}%` }
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "card-interactive card-interactive-glow relative mt-4 overflow-hidden border border-border/55 bg-card/45 p-4 backdrop-blur-md sm:mt-6 sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "pointer-events-none absolute -right-20 top-20 h-52 w-52 rounded-full bg-primary/[0.025] blur-[90px]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StepTransition, {
							transitionKey: `${game ?? "none"}-${step}`,
							direction: transitionDirection,
							children: [
								step === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RealmStep, {
									value: game,
									onSelect: (realm) => {
										setGame(realm);
										setErrors({});
										setTransitionDirection("forward");
										setStep(1);
									}
								}) : null,
								game === "mlbb" && step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MlbbFields, {
									section: "team",
									values,
									roster,
									errors,
									onChange: change,
									onRosterChange: changeRoster,
									teamLogo,
									onTeamLogoChange: (file) => {
										setTeamLogo(file);
										setErrors((previous) => ({
											...previous,
											team_logo: void 0
										}));
									}
								}) : null,
								game === "mlbb" && step === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MlbbFields, {
									section: "players",
									values,
									roster,
									errors,
									onChange: change,
									onRosterChange: changeRoster,
									teamLogo,
									onTeamLogoChange: setTeamLogo
								}) : null,
								game === "tekken8" && step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TekkenFields, {
									values,
									errors,
									onChange: change,
									playerPhoto: tekkenPhoto,
									onPlayerPhotoChange: (file) => {
										setTekkenPhoto(file);
										setErrors((previous) => ({
											...previous,
											player_photo: void 0
										}));
									}
								}) : null,
								step === contactStep ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactFields, {
									values,
									errors,
									onChange: change,
									game,
									stepNumber: contactStep + 1
								}) : null,
								step === paymentStep ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaymentFields, {
									stepNumber: paymentStep + 1,
									method: paymentMethod,
									onMethodChange: (value) => {
										setPaymentMethod(value);
										setErrors((previous) => ({
											...previous,
											payment_method: void 0
										}));
									},
									receipt: paymentReceipt,
									onReceiptChange: (file) => {
										setPaymentReceipt(file);
										setErrors((previous) => ({
											...previous,
											payment_receipt: void 0
										}));
									},
									reference: paymentReference,
									onReferenceChange: setPaymentReference,
									errors
								}) : null
							]
						}), step > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 flex flex-col-reverse gap-3 border-t border-border/50 pt-5 sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:pt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: "ghost",
								size: "lg",
								onClick: () => {
									setErrors({});
									setTransitionDirection("back");
									setStep((current) => current - 1);
								},
								className: "group w-full justify-center text-muted-foreground motion-reduce:transform-none motion-reduce:transition-none sm:w-auto sm:justify-start",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "transition-transform duration-300 group-hover:-translate-x-1 motion-reduce:transform-none motion-reduce:transition-none" }), "Back"]
							}), step < finalStep ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								size: "lg",
								onClick: goNext,
								className: "group w-full sm:w-auto",
								children: ["Continue", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none" })]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "submit",
								size: "lg",
								disabled: busy,
								className: "group w-full sm:w-auto",
								children: [busy ? "Transmitting…" : "Submit entry", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none" })]
							})]
						}) : null]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-start gap-3 border border-border/40 bg-card/20 px-3 py-3 backdrop-blur-sm sm:mt-5 sm:px-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-primary/50"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[9px] uppercase leading-relaxed tracking-[0.18em] text-muted-foreground sm:text-[10px]",
					children: "Your registration is tied to your signed-in account and reviewed by tournament staff before approval."
				})]
			})
		]
	});
}
function JoinPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "pb-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "relative overflow-hidden border-b border-primary/15 bg-secondary/25",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-4xl px-4 py-14 sm:px-8 sm:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] uppercase tracking-[0.34em] text-primary",
						children: "The Crucible"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-4xl font-bold uppercase leading-[0.9] tracking-[0.02em] text-foreground sm:text-6xl",
						children: "Register your entry"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
						children: "Mobile Legends: Bang Bang squads of five, or TEKKEN 8 fighters flying solo. Complete your registration and payment, then tournament staff will review your entry."
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegistrationWizard, {})]
	});
}
//#endregion
export { JoinPage as component };
