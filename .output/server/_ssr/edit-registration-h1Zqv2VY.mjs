import { __toESM } from "../_runtime.mjs";
import { require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { Link, useNavigate, useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { supabase } from "./auth-middleware-CmY4KpCX.mjs";
import { Button, updateMyPayment, updateMyRegistration } from "./server-fns-7A-z4xbZ.mjs";
import { toast } from "../_libs/sonner.mjs";
import { ArrowLeft, CircleCheck, CreditCard, ImageUp, Save } from "../_libs/lucide-react.mjs";
import { Route$4 } from "./router-eOUMIcI1.mjs";
import { useServerFn } from "./useServerFn-BffWjH4-.mjs";
import { Input, Label } from "./label-0leyqT9h.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/edit-registration-h1Zqv2VY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MLBB_ROLES = [
	"EXP",
	"Gold",
	"Jungle",
	"Mid",
	"Roam"
];
var MAX_RECEIPT_SIZE = 5242880;
var ALLOWED_RECEIPT_TYPES = [
	"image/jpeg",
	"image/png",
	"image/webp"
];
function EditRegistrationPage() {
	const registrations = Route$4.useLoaderData();
	const { id } = Route$4.useSearch();
	const router = useRouter();
	const navigate = useNavigate();
	const updateRegistration = useServerFn(updateMyRegistration);
	const updatePayment = useServerFn(updateMyPayment);
	const registration = registrations.find((item) => item.id === id);
	if (!registration) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen px-4 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-2xl border border-border/80 bg-card/60 p-8 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-bold uppercase text-foreground",
					children: "Registration not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted-foreground",
					children: "This registration does not exist or does not belong to your account."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-6 rounded-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/my-registration",
						children: "Back to My Registration"
					})
				})
			]
		})
	});
	if (registration.status !== "pending") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen px-4 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-2xl border border-border/80 bg-card/60 p-8 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-bold uppercase text-foreground",
					children: "Editing locked"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-sm leading-6 text-muted-foreground",
					children: [
						"Only pending registrations can be edited. This entry is currently",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "uppercase text-primary",
							children: registration.status
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-6 rounded-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/my-registration",
						children: "Back to My Registration"
					})
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditRegistrationForm, {
		registration,
		updateRegistration,
		updatePayment,
		router,
		navigate
	});
}
function EditRegistrationForm({ registration, updateRegistration, updatePayment, router, navigate }) {
	const isSquad = registration.game === "mlbb";
	const paymentLocked = registration.payment_status === "verified";
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [values, setValues] = (0, import_react.useState)({
		team_name: registration.team_name ?? "",
		team_tag: registration.team_tag ?? "",
		region: registration.region ?? "",
		player_name: registration.player_name ?? "",
		in_game_id: registration.in_game_id ?? "",
		contact_name: registration.contact_name ?? "",
		contact_email: registration.contact_email ?? "",
		contact_phone: registration.contact_phone ?? "",
		discord: registration.discord ?? "",
		payment_method: registration.payment_method || "gcash",
		payment_reference: registration.payment_reference ?? ""
	});
	const [roster, setRoster] = (0, import_react.useState)(() => {
		if (!isSquad) return [];
		const existing = Array.isArray(registration.roster) ? registration.roster : [];
		return Array.from({ length: 5 }, (_, index) => ({
			ign: existing[index]?.ign ?? "",
			game_id: existing[index]?.game_id ?? "",
			role: existing[index]?.role ?? MLBB_ROLES[index] ?? ""
		}));
	});
	const [replacementReceipt, setReplacementReceipt] = (0, import_react.useState)(null);
	function changeValue(key, value) {
		setValues((current) => ({
			...current,
			[key]: value
		}));
	}
	function changePlayer(index, key, value) {
		setRoster((current) => current.map((player, playerIndex) => playerIndex === index ? {
			...player,
			[key]: value
		} : player));
	}
	function handleReceiptChange(event) {
		const file = event.target.files?.[0];
		if (!file) {
			setReplacementReceipt(null);
			return;
		}
		if (!ALLOWED_RECEIPT_TYPES.includes(file.type)) {
			toast.error("Receipt must be a JPEG, PNG, or WEBP image");
			event.target.value = "";
			return;
		}
		if (file.size > MAX_RECEIPT_SIZE) {
			toast.error("Receipt image must be 5MB or smaller");
			event.target.value = "";
			return;
		}
		setReplacementReceipt(file);
	}
	function validate() {
		if (!values.contact_name.trim()) return "Contact name is required";
		if (!values.contact_email.trim()) return "Contact email is required";
		if (isSquad) {
			if (!values.team_name.trim()) return "Team name is required";
			for (let index = 0; index < roster.length; index += 1) {
				if (!roster[index].ign.trim()) return `Player ${index + 1} IGN is required`;
				if (!roster[index].game_id.trim()) return `Player ${index + 1} Game ID is required`;
			}
		} else if (!values.in_game_id.trim()) return "In-game ID is required";
		return null;
	}
	async function uploadReceipt(file) {
		const extension = file.name.split(".").pop()?.toLowerCase() || "jpg";
		const path = `receipts/${crypto.randomUUID()}.${extension}`;
		const { error: uploadError } = await supabase.storage.from("payment-receipts").upload(path, file, {
			cacheControl: "3600",
			upsert: false,
			contentType: file.type
		});
		if (uploadError) {
			console.error("Replacement receipt upload failed:", uploadError);
			throw new Error(uploadError.message || "Unable to upload replacement receipt");
		}
		return path;
	}
	async function handleSubmit(event) {
		event.preventDefault();
		const validationError = validate();
		if (validationError) {
			toast.error(validationError);
			return;
		}
		setBusy(true);
		try {
			const registrationPayload = {
				game: registration.game,
				region: values.region.trim(),
				contact_name: values.contact_name.trim(),
				contact_email: values.contact_email.trim(),
				contact_phone: values.contact_phone.trim(),
				discord: values.discord.trim()
			};
			if (isSquad) {
				registrationPayload.team_name = values.team_name.trim();
				registrationPayload.team_tag = values.team_tag.trim().toUpperCase();
				registrationPayload.roster = roster.map((player) => ({
					ign: player.ign.trim(),
					game_id: player.game_id.trim(),
					role: player.role.trim()
				}));
			} else {
				registrationPayload.player_name = values.player_name.trim();
				registrationPayload.in_game_id = values.in_game_id.trim();
			}
			await updateRegistration({ data: {
				id: registration.id,
				registration: registrationPayload
			} });
			const paymentMethodChanged = !paymentLocked && values.payment_method !== registration.payment_method;
			const paymentReferenceChanged = !paymentLocked && values.payment_reference.trim() !== (registration.payment_reference ?? "").trim();
			const paymentChanged = paymentMethodChanged || paymentReferenceChanged || Boolean(replacementReceipt);
			if (paymentChanged && !paymentLocked) {
				let receiptPath;
				if (replacementReceipt) receiptPath = await uploadReceipt(replacementReceipt);
				const paymentData = {
					id: registration.id,
					payment_method: values.payment_method,
					payment_reference: values.payment_reference.trim()
				};
				if (receiptPath) paymentData.payment_receipt_path = receiptPath;
				await updatePayment({ data: paymentData });
			}
			await router.invalidate();
			toast.success(paymentChanged ? "Registration and payment details updated" : "Registration updated successfully");
			await navigate({ to: "/my-registration" });
		} catch (error) {
			console.error("Registration update failed:", error);
			toast.error(error?.message || "Unable to update registration");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen pb-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-border/70 bg-secondary/20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl px-4 py-12 sm:px-8 sm:py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/my-registration",
						className: "inline-flex items-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "mr-2 h-4 w-4" }), "My Registration"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-primary",
						children: "Edit Submission"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-4xl font-bold uppercase text-foreground sm:text-5xl",
						children: isSquad ? "Edit Your Squad" : "Edit Your Fighter"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm text-muted-foreground",
						children: [
							"Reference",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: registration.reference_code
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 border border-primary/20 bg-primary/5 p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-6 text-muted-foreground",
							children: "You can edit this submission while its registration status is pending. Once tournament staff approves or rejects the entry, editing will be locked."
						})
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleSubmit,
			className: "mx-auto max-w-4xl px-4 py-10 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "border border-border/80 bg-card/50 p-5 sm:p-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] uppercase tracking-[0.24em] text-primary",
						children: "Entry Details"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-5 sm:grid-cols-2",
						children: [isSquad ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Team Name",
							value: values.team_name,
							onChange: (value) => changeValue("team_name", value),
							maxLength: 60
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Team Tag",
							value: values.team_tag,
							onChange: (value) => changeValue("team_tag", value),
							maxLength: 6
						})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Player Name",
							value: values.player_name,
							onChange: (value) => changeValue("player_name", value),
							maxLength: 80
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "In-Game ID",
							value: values.in_game_id,
							onChange: (value) => changeValue("in_game_id", value),
							maxLength: 40
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Region",
							value: values.region,
							onChange: (value) => changeValue("region", value),
							maxLength: 40
						})]
					})]
				}),
				isSquad ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-6 border border-border/80 bg-card/50 p-5 sm:p-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] uppercase tracking-[0.24em] text-primary",
						children: "Squad Roster"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 space-y-5",
						children: roster.map((player, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border border-border/70 bg-background/50 p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
								children: [
									"Player",
									" ",
									index + 1
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 grid gap-4 md:grid-cols-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "IGN",
										value: player.ign,
										onChange: (value) => changePlayer(index, "ign", value),
										maxLength: 40
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Game ID",
										value: player.game_id,
										onChange: (value) => changePlayer(index, "game_id", value),
										maxLength: 40
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Role" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											value: player.role,
											onChange: (event) => changePlayer(index, "role", event.target.value),
											className: "h-10 w-full rounded-none border border-input bg-background px-3 text-sm text-foreground outline-none focus:border-primary",
											children: MLBB_ROLES.map((role) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: role,
												children: role
											}, role))
										})]
									})
								]
							})]
						}, index))
					})]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-6 border border-border/80 bg-card/50 p-5 sm:p-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] uppercase tracking-[0.24em] text-primary",
						children: "Contact Information"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-5 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Contact Name",
								value: values.contact_name,
								onChange: (value) => changeValue("contact_name", value),
								maxLength: 80
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Contact Email",
								type: "email",
								value: values.contact_email,
								onChange: (value) => changeValue("contact_email", value),
								maxLength: 120
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Contact Phone",
								value: values.contact_phone,
								onChange: (value) => changeValue("contact_phone", value),
								maxLength: 30
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Discord",
								value: values.discord,
								onChange: (value) => changeValue("discord", value),
								maxLength: 40
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-6 border border-border/80 bg-card/50 p-5 sm:p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-start justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[10px] uppercase tracking-[0.24em] text-primary",
									children: "Payment Details"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-6 text-muted-foreground",
								children: paymentLocked ? "Your payment has already been verified by tournament staff." : "You may update your payment reference or upload a replacement receipt."
							})] }), paymentLocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-emerald-400",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] uppercase tracking-[0.18em]",
									children: "Verified"
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "border border-primary/30 bg-primary/10 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-primary",
								children: registration.payment_status
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid gap-5 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Payment Method" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: values.payment_method,
									disabled: paymentLocked,
									onChange: (event) => changeValue("payment_method", event.target.value),
									className: "h-10 w-full rounded-none border border-input bg-background px-3 text-sm text-foreground outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-50",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "gcash",
										children: "GCash"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "bank",
										children: "Bank Transfer"
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Payment Reference",
								value: values.payment_reference,
								disabled: paymentLocked,
								onChange: (value) => changeValue("payment_reference", value),
								maxLength: 100
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 border border-border/70 bg-background/50 p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageUp, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[10px] uppercase tracking-[0.2em] text-foreground",
										children: "Payment Receipt"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 text-sm text-muted-foreground",
									children: [
										"Current receipt:",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-foreground",
											children: registration.has_payment_receipt ? "Uploaded" : "No receipt uploaded"
										})
									]
								}),
								!paymentLocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "replacement-receipt",
											children: "Replace Receipt"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "replacement-receipt",
											type: "file",
											accept: "image/jpeg,image/png,image/webp",
											onChange: handleReceiptChange,
											className: "mt-2 rounded-none file:mr-4 file:border-0 file:bg-transparent file:text-sm file:text-foreground"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-xs leading-5 text-muted-foreground",
										children: "JPEG, PNG, or WEBP only. Maximum file size: 5MB."
									}),
									replacementReceipt ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 border border-primary/20 bg-primary/5 p-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: "New receipt selected:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 break-all text-sm text-foreground",
											children: replacementReceipt.name
										})]
									}) : null
								] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-xs leading-5 text-muted-foreground",
									children: "Receipt replacement is disabled because this payment has already been verified."
								}),
								registration.payment_status === "rejected" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-5 border border-destructive/30 bg-destructive/5 p-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm leading-6 text-destructive",
										children: "Your previous payment was rejected. Update the payment details or upload a new receipt and it will be sent back for verification."
									})
								}) : null
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border/70 pt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						type: "button",
						variant: "ghost",
						className: "h-11 rounded-none px-4 font-mono text-[10px] uppercase tracking-[0.2em]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/my-registration",
							children: "Cancel"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "submit",
						disabled: busy,
						className: "h-11 rounded-none px-6 font-mono text-[10px] uppercase tracking-[0.2em]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "mr-2 h-4 w-4" }), busy ? "Saving..." : "Save Changes"]
					})]
				})
			]
		})]
	});
}
function Field({ label, value, onChange, type = "text", maxLength, disabled = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			type,
			value,
			maxLength,
			disabled,
			onChange: (event) => onChange(event.target.value),
			className: "rounded-none"
		})]
	});
}
//#endregion
export { EditRegistrationPage as component };
