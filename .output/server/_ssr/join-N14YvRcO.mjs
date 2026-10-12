import { __toESM } from "../_runtime.mjs";
import { require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { supabase } from "./auth-middleware-CmY4KpCX.mjs";
import { Button, cn, submitRegistration } from "./server-fns-D7ymjI7_.mjs";
import { toast } from "../_libs/sonner.mjs";
import { ArrowLeft, ArrowRight, CircleCheck, CreditCard, ImagePlus, Send, Upload } from "../_libs/lucide-react.mjs";
import { Image } from "./image-BPY2V0qk.mjs";
import { useServerFn } from "./useServerFn-BffWjH4-.mjs";
import { Input, Label } from "./label-0leyqT9h.mjs";
import { motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/join-N14YvRcO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var inputClass = "h-12 rounded-none border-border/80 bg-background/70 px-4 text-base tracking-wide text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-1 focus-visible:ring-primary";
var labelClass = "block font-mono text-[10px] uppercase tracking-[0.26em] text-muted-foreground";
var errorClass = "mt-2 text-xs text-destructive";
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
				className: "mt-2",
				children
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: errorClass,
				children: error
			}) : hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs text-muted-foreground",
				children: hint
			}) : null
		]
	});
}
function ContactFields({ values, errors, onChange, game, stepNumber = 3 }) {
	const who = game === "mlbb" ? "captain" : "fighter";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("legend", {
				className: labelClass,
				children: [
					"Step",
					" ",
					String(stepNumber).padStart(2, "0"),
					" ",
					"— How we reach you"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "-mt-2 text-sm leading-relaxed text-muted-foreground",
				children: "We use these only to confirm your slot, schedule your series and send the bracket. Nothing is shown publicly."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
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
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
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
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
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
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Discord handle",
				htmlFor: "discord",
				hint: "Optional",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "discord",
					value: values.discord,
					onChange: onChange("discord"),
					placeholder: "@yourhandle",
					className: inputClass
				})
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
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 grid grid-cols-5 gap-2",
			children: MLBB_ROLES.map((role) => {
				const selected = value === role.value;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					"aria-pressed": selected,
					title: role.value,
					onClick: () => onChange(selected ? "" : role.value),
					className: cn("flex flex-col items-center gap-2 border px-1 py-2 transition-colors", selected ? "border-primary bg-primary/10" : "border-border bg-background/40 hover:border-primary/40"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex h-10 w-10 items-center justify-center rounded-sm bg-foreground/95 p-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
							src: role.icon,
							alt: "",
							fittingType: "fit",
							className: "h-full w-full object-contain"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("font-mono text-[10px] uppercase tracking-[0.14em]", selected ? "text-primary" : "text-muted-foreground"),
						children: role.short
					})]
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
				className: labelClass,
				children: "Step 02 — Team identity"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "-mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground",
				children: "Upload your official team logo and enter your team information."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: labelClass,
				children: "Team logo"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid gap-5 sm:grid-cols-[150px_1fr] sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid aspect-square w-full max-w-[150px] place-items-center overflow-hidden border border-border/80 bg-background/50",
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
						className: "flex cursor-pointer items-center justify-center gap-3 border border-dashed border-border/80 px-5 py-5 text-center transition-colors hover:border-primary/60 hover:bg-secondary/20 sm:justify-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-5 w-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
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
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-3",
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
				className: labelClass,
				children: "Step 03 — Players"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "-mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground",
				children: "Complete all seven player profiles. Players 1–5 are the main roster and Players 6–7 are substitutes."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-6",
				children: roster.map((player, index) => {
					const isMain = index < 5;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "border border-border/80 bg-background/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-3 border-b border-border/70 bg-secondary/20 px-4 py-3 sm:px-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "grid h-9 w-9 place-items-center border border-primary/30 bg-secondary/40 font-display text-sm font-bold text-primary",
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
								className: `border px-2 py-1 font-mono text-[9px] uppercase tracking-[0.18em] ${isMain ? "border-primary/40 text-primary" : "border-border text-muted-foreground"}`,
								children: isMain ? "Main" : "Sub"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 p-4 sm:grid-cols-2 sm:p-5",
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
						})]
					}, index);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs leading-relaxed text-muted-foreground",
				children: "Players 1–5 are registered as the main lineup. Players 6–7 are registered as substitutes."
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
			className: "mt-3 flex flex-col gap-4 sm:flex-row sm:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-24 w-24 shrink-0 overflow-hidden border border-border/80 bg-secondary/20",
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
						className: "flex cursor-pointer items-center gap-3 border border-dashed border-border/80 px-4 py-4 transition-colors hover:border-primary/60 hover:bg-secondary/20",
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-[10px] uppercase tracking-[0.24em] text-primary",
					children: [
						"Step",
						" ",
						String(stepNumber).padStart(2, "0"),
						" ",
						"— Payment"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl font-bold uppercase tracking-[0.04em] text-foreground",
					children: "Complete your payment"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-sm leading-6 text-muted-foreground",
					children: "Choose a payment method, scan the QR code, then upload a clear screenshot or photo of your payment receipt."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: METHODS.map((item) => {
				const active = method === item.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onMethodChange(item.id),
					className: `border p-4 text-left transition-all duration-300 ${active ? "border-primary bg-primary/10" : "border-border hover:border-primary/50 hover:bg-secondary/20"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: active ? "h-5 w-5 text-primary" : "h-5 w-5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs uppercase tracking-[0.18em]",
							children: item.label
						})]
					})
				}, item.id);
			})
		}),
		errors?.payment_method ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-destructive",
			children: errors.payment_method
		}) : null,
		selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 border border-border/80 bg-background/40 p-4 sm:p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
				children: [
					"Scan to pay via",
					" ",
					selected.label
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: selected.qr,
					alt: `${selected.label} payment QR`,
					className: "max-h-[520px] w-auto max-w-full border border-border bg-white object-contain"
				})
			})]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 space-y-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
				htmlFor: "payment-reference",
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
				className: "h-12 rounded-none"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 space-y-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "payment-receipt",
					children: "Upload payment receipt"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					htmlFor: "payment-receipt",
					className: "flex cursor-pointer flex-col items-center justify-center border border-dashed border-border px-6 py-8 text-center transition-all duration-300 hover:border-primary/60 hover:bg-secondary/20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "mb-3 h-6 w-6 text-primary" }),
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
		})
	] });
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
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
			className: "font-mono text-[11px] uppercase tracking-[0.32em] text-primary",
			children: "Step 01 — Choose your realm"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-sm leading-relaxed text-muted-foreground",
			children: "One entry per competitor or squad. Pick the bracket you're fighting in — staff can move you later if needed."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-7 grid gap-4 sm:grid-cols-2",
			children: REALMS.map((realm) => {
				const active = value === realm.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					"aria-pressed": active,
					onClick: () => onSelect(realm.id),
					className: `flex flex-col items-start gap-3 border p-6 text-left transition-all duration-300 ${active ? "border-primary bg-secondary/60" : "border-border/80 bg-background/40 hover:border-primary/60 hover:bg-secondary/30"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-7 w-7 items-center justify-center overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: realm.logo,
								alt: `${realm.name} logo`,
								className: "h-full w-full object-contain"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg font-bold uppercase leading-tight tracking-[0.04em] text-foreground",
							children: realm.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[10px] uppercase tracking-[0.24em] text-primary",
							children: realm.tagline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm leading-relaxed text-muted-foreground",
							children: realm.detail
						})
					]
				}, realm.id);
			})
		})
	] });
}
function SuccessPanel({ game, reference }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 18
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: .5,
			ease: "easeOut"
		},
		className: "mt-12 border border-primary/40 bg-secondary/30 p-6 sm:p-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
					className: "h-5 w-5 text-primary",
					strokeWidth: 1.8
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] uppercase tracking-[0.32em] text-primary",
					children: "Transmission received"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-5 font-display text-3xl font-bold uppercase leading-[0.95] tracking-[0.02em] text-foreground sm:text-5xl",
				children: "Deployment confirmed"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground",
				children: [
					"Your ",
					game === "mlbb" ? "squad" : "fighter",
					" entry is in the staff queue. Every roster is verified before it goes live — approved entries appear on the roster vault of the tournament page within 48 hours."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-9 flex flex-wrap items-end gap-x-10 gap-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground",
					children: "Reference code"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-display text-2xl font-bold tracking-[0.18em] text-primary",
					children: reference
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "lg",
					className: "h-14 rounded-none px-8 font-mono text-xs uppercase tracking-[0.22em]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						hash: "roster",
						children: ["Back to the arena ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
					})
				})]
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
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
				className: labelClass,
				children: "Step 02 — Identify your fighter"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: labelClass,
				children: "Player photo"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-col gap-4 sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-28 w-28 shrink-0 overflow-hidden border border-border/80 bg-secondary/20",
					children: preview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: preview,
						alt: "TEKKEN player preview",
						className: "h-full w-full object-cover"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-full w-full place-items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, { className: "h-8 w-8 text-primary/60" })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							htmlFor: "tekken-player-photo",
							className: "flex cursor-pointer items-center gap-3 border border-dashed border-border/80 px-4 py-4 transition-colors hover:border-primary/60 hover:bg-secondary/20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-5 w-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm text-foreground",
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
			})] }),
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
				hint: "Exactly as it appears in-game — this is how staff seed the bracket",
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
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "region",
					value: values.region,
					onChange: onChange("region"),
					placeholder: "e.g. Cebu",
					className: inputClass
				})
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
function RegistrationWizard() {
	const submit = useServerFn(submitRegistration);
	const [game, setGame] = (0, import_react.useState)(null);
	const [step, setStep] = (0, import_react.useState)(0);
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
		if (!result) return;
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
		className: "mx-auto max-w-4xl px-4 sm:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SuccessPanel, {
			game,
			reference: result.reference_code
		})
	});
	const contactStep = game === "mlbb" ? 3 : 2;
	const paymentStep = game === "mlbb" ? 4 : 3;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl px-4 pt-12 sm:px-8 sm:pt-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-[0.26em] sm:text-[11px]",
				children: labels.map((label, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: index <= step ? "text-primary" : "text-muted-foreground",
						children: [
							String(index + 1).padStart(2, "0"),
							" ",
							label
						]
					}), index < labels.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: index < step ? "h-px w-6 bg-primary sm:w-10" : "h-px w-6 bg-border sm:w-10" }) : null]
				}, label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 h-px w-full bg-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-px bg-primary transition-all duration-500",
					style: { width: `${(step + 1) / labels.length * 100}%` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "mt-10 border border-border/80 bg-card/60 p-5 sm:p-8",
				children: [
					step === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RealmStep, {
						value: game,
						onSelect: (realm) => {
							setGame(realm);
							setErrors({});
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
					}) : null,
					step > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 border-t border-border/70 pt-6 sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							variant: "ghost",
							onClick: () => {
								setErrors({});
								setStep((current) => current - 1);
							},
							className: "h-12 justify-start rounded-none px-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:bg-secondary/40 hover:text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "mr-2 h-4 w-4" }), "Back"]
						}), step < finalStep ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							onClick: goNext,
							className: "h-12 rounded-none px-7 font-mono text-[11px] uppercase tracking-[0.2em]",
							children: ["Continue", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							disabled: busy,
							className: "h-12 rounded-none px-7 font-mono text-[11px] uppercase tracking-[0.2em]",
							children: [busy ? "Transmitting…" : "Submit entry", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "ml-2 h-4 w-4" })]
						})]
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
				children: "Your registration is tied to your signed-in account and reviewed by tournament staff before approval."
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
