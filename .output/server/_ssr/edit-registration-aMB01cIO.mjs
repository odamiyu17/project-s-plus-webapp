import { __toESM } from "../_runtime.mjs";
import { require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { Link, useNavigate, useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { supabase } from "./auth-middleware-CmY4KpCX.mjs";
import { Button, updateMyPayment, updateMyRegistration } from "./server-fns-D7ymjI7_.mjs";
import { toast } from "../_libs/sonner.mjs";
import { ArrowLeft, CircleCheck, CreditCard, ImagePlus, ImageUp, Save, Upload, UserRound } from "../_libs/lucide-react.mjs";
import { Route$4 } from "./router-x0UN7VX6.mjs";
import { useServerFn } from "./useServerFn-BffWjH4-.mjs";
import { Input, Label } from "./label-DY020iIz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/edit-registration-aMB01cIO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MLBB_ROLES = [
	"",
	"EXP",
	"Gold",
	"Jungle",
	"Mid",
	"Roam"
];
var MAX_IMAGE_SIZE = 5242880;
var ALLOWED_IMAGE_TYPES = [
	"image/jpeg",
	"image/png",
	"image/webp"
];
var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function calculateAge(birthdate) {
	if (!birthdate) return null;
	const date = /* @__PURE__ */ new Date(`${birthdate}T00:00:00`);
	if (Number.isNaN(date.getTime())) return null;
	const today = /* @__PURE__ */ new Date();
	let age = today.getFullYear() - date.getFullYear();
	const monthDifference = today.getMonth() - date.getMonth();
	if (monthDifference < 0 || monthDifference === 0 && today.getDate() < date.getDate()) age -= 1;
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
function validateImage(file, label = "Image") {
	if (!file) return null;
	if (!ALLOWED_IMAGE_TYPES.includes(file.type)) return `${label} must be a JPEG, PNG, or WEBP image`;
	if (file.size > MAX_IMAGE_SIZE) return `${label} must be 5MB or smaller`;
	return null;
}
function extensionForFile(file) {
	if (file.type === "image/png") return "png";
	if (file.type === "image/webp") return "webp";
	return "jpg";
}
function getPublicUrl(bucket, path) {
	if (!path) return "";
	const { data } = supabase.storage.from(bucket).getPublicUrl(path);
	return data?.publicUrl ?? "";
}
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
		return Array.from({ length: 7 }, (_, index) => {
			const player = existing[index] ?? {};
			return {
				player_photo_path: player.player_photo_path ?? "",
				replacement_photo: null,
				full_name: player.full_name ?? "",
				ign: player.ign ?? "",
				birthdate: player.birthdate ?? "",
				age: player.age ?? calculateAge(player.birthdate),
				game_id: player.game_id ?? "",
				school: player.school ?? "",
				organization: player.organization ?? "",
				facebook_link: player.facebook_link ?? "",
				contact_number: player.contact_number ?? "",
				role: player.role ?? "",
				roster_type: player.roster_type ?? (index < 5 ? "main" : "substitute")
			};
		});
	});
	const [replacementTeamLogo, setReplacementTeamLogo] = (0, import_react.useState)(null);
	const [replacementTekkenPhoto, setReplacementTekkenPhoto] = (0, import_react.useState)(null);
	const [replacementReceipt, setReplacementReceipt] = (0, import_react.useState)(null);
	function changeValue(key, value) {
		setValues((current) => ({
			...current,
			[key]: value
		}));
	}
	function changePlayer(index, key, value) {
		setRoster((current) => current.map((player, playerIndex) => {
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
	}
	function handleTeamLogoChange(event) {
		const file = event.target.files?.[0] ?? null;
		if (!file) {
			setReplacementTeamLogo(null);
			return;
		}
		const error = validateImage(file, "Team logo");
		if (error) {
			toast.error(error);
			event.target.value = "";
			return;
		}
		setReplacementTeamLogo(file);
	}
	function handleTekkenPhotoChange(event) {
		const file = event.target.files?.[0] ?? null;
		if (!file) {
			setReplacementTekkenPhoto(null);
			return;
		}
		const error = validateImage(file, "Player photo");
		if (error) {
			toast.error(error);
			event.target.value = "";
			return;
		}
		setReplacementTekkenPhoto(file);
	}
	function handlePlayerPhotoChange(index, event) {
		const file = event.target.files?.[0] ?? null;
		if (!file) {
			changePlayer(index, "replacement_photo", null);
			return;
		}
		const error = validateImage(file, `Player ${index + 1} photo`);
		if (error) {
			toast.error(error);
			event.target.value = "";
			return;
		}
		changePlayer(index, "replacement_photo", file);
	}
	function handleReceiptChange(event) {
		const file = event.target.files?.[0] ?? null;
		if (!file) {
			setReplacementReceipt(null);
			return;
		}
		const error = validateImage(file, "Receipt");
		if (error) {
			toast.error(error);
			event.target.value = "";
			return;
		}
		setReplacementReceipt(file);
	}
	function validate() {
		if (!values.contact_name.trim()) return "Contact name is required";
		if (!EMAIL_RE.test(values.contact_email.trim())) return "Enter a valid contact email";
		if (isSquad) {
			if (!values.team_name.trim()) return "Team name is required";
			if (!registration.team_logo_path && !replacementTeamLogo) return "Team logo is required";
			if (roster.length !== 7) return "Exactly 7 MLBB players are required";
			for (let index = 0; index < roster.length; index += 1) {
				const player = roster[index];
				const number = index + 1;
				if (!player.player_photo_path && !player.replacement_photo) return `Player ${number} photo is required`;
				if (!player.full_name.trim()) return `Player ${number} full name is required`;
				if (!player.ign.trim()) return `Player ${number} IGN is required`;
				if (!player.birthdate) return `Player ${number} birthdate is required`;
				if (player.age === null || player.age === void 0 || player.age < 10 || player.age > 100) return `Player ${number} has an invalid birthdate`;
				if (!player.game_id.trim()) return `Player ${number} MLID is required`;
				if (!player.facebook_link.trim()) return `Player ${number} Facebook link is required`;
				if (!isFacebookUrl(player.facebook_link.trim())) return `Player ${number} must have a valid Facebook link`;
				if (player.contact_number.trim().length < 7) return `Player ${number} contact number is required`;
			}
			return null;
		}
		if (!values.player_name.trim()) return "Player full name is required";
		if (!values.in_game_id.trim()) return "In-game ID is required";
		if (!registration.player_photo_path && !replacementTekkenPhoto) return "Player photo is required";
		return null;
	}
	async function getUserId() {
		const { data, error } = await supabase.auth.getUser();
		if (error || !data?.user?.id) throw new Error("You must be signed in to edit your registration");
		return data.user.id;
	}
	async function uploadTeamLogo(file, userId) {
		const extension = extensionForFile(file);
		const path = `${userId}/${crypto.randomUUID()}.${extension}`;
		const { error } = await supabase.storage.from("team-logos").upload(path, file, {
			contentType: file.type,
			upsert: false
		});
		if (error) throw new Error(error.message || "Unable to upload replacement team logo");
		return path;
	}
	async function uploadPlayerPhoto(file, userId, game) {
		const extension = extensionForFile(file);
		const path = `${userId}/${game}/${crypto.randomUUID()}.${extension}`;
		const { error } = await supabase.storage.from("player-photos").upload(path, file, {
			contentType: file.type,
			upsert: false
		});
		if (error) throw new Error(error.message || "Unable to upload replacement player photo");
		return path;
	}
	async function uploadReceipt(file) {
		const extension = extensionForFile(file);
		const path = `receipts/${crypto.randomUUID()}.${extension}`;
		const { error } = await supabase.storage.from("payment-receipts").upload(path, file, {
			cacheControl: "3600",
			upsert: false,
			contentType: file.type
		});
		if (error) throw new Error(error.message || "Unable to upload replacement receipt");
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
		let registrationUpdated = false;
		let uploadedReceiptPath = null;
		try {
			const userId = Boolean(replacementTeamLogo) || Boolean(replacementTekkenPhoto) || roster.some((player) => Boolean(player.replacement_photo)) ? await getUserId() : null;
			let finalTeamLogoPath = registration.team_logo_path ?? "";
			if (isSquad && replacementTeamLogo) finalTeamLogoPath = await uploadTeamLogo(replacementTeamLogo, userId);
			let finalRoster = roster;
			if (isSquad) {
				finalRoster = [];
				for (let index = 0; index < roster.length; index += 1) {
					const player = roster[index];
					let photoPath = player.player_photo_path;
					if (player.replacement_photo) photoPath = await uploadPlayerPhoto(player.replacement_photo, userId, "mlbb");
					finalRoster.push({
						player_photo_path: photoPath,
						full_name: player.full_name.trim(),
						ign: player.ign.trim(),
						birthdate: player.birthdate,
						age: player.age,
						game_id: player.game_id.trim(),
						school: player.school.trim(),
						organization: player.organization.trim(),
						facebook_link: player.facebook_link.trim(),
						contact_number: player.contact_number.trim(),
						role: player.role.trim(),
						roster_type: index < 5 ? "main" : "substitute"
					});
				}
			}
			let finalTekkenPhotoPath = registration.player_photo_path ?? "";
			if (!isSquad && replacementTekkenPhoto) finalTekkenPhotoPath = await uploadPlayerPhoto(replacementTekkenPhoto, userId, "tekken8");
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
				registrationPayload.team_logo_path = finalTeamLogoPath;
				registrationPayload.roster = finalRoster;
			} else {
				registrationPayload.player_name = values.player_name.trim();
				registrationPayload.in_game_id = values.in_game_id.trim();
				registrationPayload.player_photo_path = finalTekkenPhotoPath;
			}
			await updateRegistration({ data: {
				id: registration.id,
				registration: registrationPayload
			} });
			registrationUpdated = true;
			const paymentMethodChanged = !paymentLocked && values.payment_method !== registration.payment_method;
			const paymentReferenceChanged = !paymentLocked && values.payment_reference.trim() !== (registration.payment_reference ?? "").trim();
			const paymentChanged = paymentMethodChanged || paymentReferenceChanged || Boolean(replacementReceipt);
			if (paymentChanged && !paymentLocked) {
				if (replacementReceipt) uploadedReceiptPath = await uploadReceipt(replacementReceipt);
				const paymentData = {
					id: registration.id,
					payment_method: values.payment_method,
					payment_reference: values.payment_reference.trim()
				};
				if (uploadedReceiptPath) paymentData.payment_receipt_path = uploadedReceiptPath;
				await updatePayment({ data: paymentData });
			}
			await router.invalidate();
			toast.success(paymentChanged ? "Registration and payment details updated" : "Registration updated successfully");
			await navigate({ to: "/my-registration" });
		} catch (error) {
			console.error("Registration update failed:", error);
			if (uploadedReceiptPath) await supabase.storage.from("payment-receipts").remove([uploadedReceiptPath]).catch(() => {});
			toast.error(registrationUpdated ? "Registration details were saved, but another update failed. Please reopen your registration and check the payment section." : error?.message || "Unable to update registration");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen pb-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-border/70 bg-secondary/20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-5xl px-4 py-12 sm:px-8 sm:py-16",
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
			className: "mx-auto max-w-5xl px-4 py-10 sm:px-8",
			children: [
				isSquad ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "border border-border/80 bg-card/50 p-5 sm:p-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] uppercase tracking-[0.24em] text-primary",
						children: "Team Details"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-6 sm:grid-cols-[160px_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeamLogoEditor, {
							currentPath: registration.team_logo_path,
							replacement: replacementTeamLogo,
							onChange: handleTeamLogoChange
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Team Name",
									value: values.team_name,
									onChange: (value) => changeValue("team_name", value),
									maxLength: 60
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Team Tag",
									value: values.team_tag,
									onChange: (value) => changeValue("team_tag", value),
									maxLength: 6
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Region / City",
									value: values.region,
									onChange: (value) => changeValue("region", value),
									maxLength: 40,
									className: "sm:col-span-2"
								})
							]
						})]
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "border border-border/80 bg-card/50 p-5 sm:p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] uppercase tracking-[0.24em] text-primary",
							children: "Fighter Details"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TekkenPhotoEditor, {
								currentPath: registration.player_photo_path,
								replacement: replacementTekkenPhoto,
								onChange: handleTekkenPhotoChange
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid gap-5 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Player Full Name",
									value: values.player_name,
									onChange: (value) => changeValue("player_name", value),
									maxLength: 80
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "In-Game ID",
									value: values.in_game_id,
									onChange: (value) => changeValue("in_game_id", value),
									maxLength: 40
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Region / City",
									value: values.region,
									onChange: (value) => changeValue("region", value),
									maxLength: 40,
									className: "sm:col-span-2"
								})
							]
						})
					]
				}),
				isSquad ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-6 border border-border/80 bg-card/50 p-5 sm:p-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-end justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] uppercase tracking-[0.24em] text-primary",
							children: "Squad Roster"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-2xl font-bold uppercase text-foreground",
							children: "7 Players"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground",
							children: "5 Main · 2 Substitute"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 space-y-6",
						children: roster.map((player, index) => {
							const isMain = index < 5;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "overflow-hidden border border-border/70 bg-background/50",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
									className: "flex flex-wrap items-center justify-between gap-3 border-b border-border/70 bg-secondary/20 px-4 py-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-display text-lg font-bold uppercase text-foreground",
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
									className: "p-4 sm:p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayerPhotoEditor, {
										player,
										index,
										onChange: handlePlayerPhotoChange
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 grid gap-5 sm:grid-cols-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												label: "Player Full Name",
												value: player.full_name,
												onChange: (value) => changePlayer(index, "full_name", value),
												maxLength: 100
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												label: "IGN",
												value: player.ign,
												onChange: (value) => changePlayer(index, "ign", value),
												maxLength: 40
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												label: "Birthdate",
												type: "date",
												value: player.birthdate,
												onChange: (value) => changePlayer(index, "birthdate", value)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Age" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													value: player.age ?? "",
													readOnly: true,
													placeholder: "Calculated automatically",
													className: "h-10 rounded-none bg-muted/30"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												label: "MLID",
												value: player.game_id,
												onChange: (value) => changePlayer(index, "game_id", value),
												maxLength: 60
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												label: "Contact Number",
												type: "tel",
												value: player.contact_number,
												onChange: (value) => changePlayer(index, "contact_number", value),
												maxLength: 30
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												label: "School",
												value: player.school,
												onChange: (value) => changePlayer(index, "school", value),
												maxLength: 120,
												hint: "Optional"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												label: "Organization",
												value: player.organization,
												onChange: (value) => changePlayer(index, "organization", value),
												maxLength: 120,
												hint: "Optional"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												label: "Facebook Link",
												type: "url",
												value: player.facebook_link,
												onChange: (value) => changePlayer(index, "facebook_link", value),
												maxLength: 250,
												className: "sm:col-span-2"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-2 sm:col-span-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Role" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
													value: player.role,
													onChange: (event) => changePlayer(index, "role", event.target.value),
													className: "h-10 w-full rounded-none border border-input bg-background px-3 text-sm text-foreground outline-none focus:border-primary",
													children: MLBB_ROLES.map((role) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: role,
														children: role || "Select role (optional)"
													}, role || "none"))
												})]
											})
										]
									})]
								})]
							}, index);
						})
					})]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-6 border border-border/80 bg-card/50 p-5 sm:p-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] uppercase tracking-[0.24em] text-primary",
						children: "Main Contact"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-5 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: isSquad ? "Captain / Contact Name" : "Contact Name",
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
								type: "tel",
								value: values.contact_phone,
								onChange: (value) => changeValue("contact_phone", value),
								maxLength: 30,
								hint: "Optional"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Discord",
								value: values.discord,
								onChange: (value) => changeValue("discord", value),
								maxLength: 40,
								hint: "Optional"
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
								children: registration.payment_status || "pending"
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
								maxLength: 100,
								hint: "Optional"
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
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "mr-2 h-4 w-4" }), busy ? "Saving…" : "Save Changes"]
					})]
				})
			]
		})]
	});
}
function TeamLogoEditor({ currentPath, replacement, onChange }) {
	const [localPreview, setLocalPreview] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (!replacement) {
			setLocalPreview("");
			return;
		}
		const url = URL.createObjectURL(replacement);
		setLocalPreview(url);
		return () => URL.revokeObjectURL(url);
	}, [replacement]);
	const currentUrl = getPublicUrl("team-logos", currentPath);
	const preview = localPreview || currentUrl;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Team Logo" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 grid aspect-square w-full max-w-[160px] place-items-center overflow-hidden border border-border/80 bg-background/60",
			children: preview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: preview,
				alt: "Team logo",
				className: "h-full w-full object-contain p-3"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, { className: "h-10 w-10 text-primary/40" })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "mt-3 flex cursor-pointer items-center gap-2 border border-dashed border-border px-3 py-3 text-xs text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-4 w-4 text-primary" }),
				replacement ? replacement.name : "Replace logo",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "file",
					accept: "image/jpeg,image/png,image/webp",
					onChange,
					className: "hidden"
				})
			]
		})
	] });
}
function PlayerPhotoEditor({ player, index, onChange }) {
	const [localPreview, setLocalPreview] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (!player.replacement_photo) {
			setLocalPreview("");
			return;
		}
		const url = URL.createObjectURL(player.replacement_photo);
		setLocalPreview(url);
		return () => URL.revokeObjectURL(url);
	}, [player.replacement_photo]);
	const currentUrl = getPublicUrl("player-photos", player.player_photo_path);
	const preview = localPreview || currentUrl;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4 sm:flex-row sm:items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-28 w-28 shrink-0 overflow-hidden border border-border/80 bg-secondary/20",
			children: preview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: preview,
				alt: `Player ${index + 1}`,
				className: "h-full w-full object-cover"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-full w-full place-items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "h-9 w-9 text-primary/40" })
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Player Photo" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-2 flex cursor-pointer items-center gap-3 border border-dashed border-border px-4 py-4 transition-colors hover:border-primary/60",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-5 w-5 shrink-0 text-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-foreground",
						children: player.replacement_photo ? player.replacement_photo.name : "Replace player photo"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: "JPG, PNG or WEBP · max 5MB"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "file",
						accept: "image/jpeg,image/png,image/webp",
						onChange: (event) => onChange(index, event),
						className: "hidden"
					})
				]
			})]
		})]
	});
}
function TekkenPhotoEditor({ currentPath, replacement, onChange }) {
	const [localPreview, setLocalPreview] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (!replacement) {
			setLocalPreview("");
			return;
		}
		const url = URL.createObjectURL(replacement);
		setLocalPreview(url);
		return () => URL.revokeObjectURL(url);
	}, [replacement]);
	const currentUrl = getPublicUrl("player-photos", currentPath);
	const preview = localPreview || currentUrl;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4 sm:flex-row sm:items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-36 w-36 shrink-0 overflow-hidden border border-border/80 bg-secondary/20",
			children: preview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: preview,
				alt: "TEKKEN fighter",
				className: "h-full w-full object-cover"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-full w-full place-items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "h-11 w-11 text-primary/40" })
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Player Photo" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-2 flex cursor-pointer items-center gap-3 border border-dashed border-border px-4 py-4 transition-colors hover:border-primary/60",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-5 w-5 text-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-foreground",
						children: replacement ? replacement.name : "Replace player photo"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: "JPG, PNG or WEBP · max 5MB"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "file",
						accept: "image/jpeg,image/png,image/webp",
						onChange,
						className: "hidden"
					})
				]
			})]
		})]
	});
}
function Field({ label, value, onChange, type = "text", maxLength, disabled = false, hint, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `space-y-2 ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground",
				children: hint
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			type,
			value: value ?? "",
			disabled,
			maxLength,
			onChange: (event) => onChange(event.target.value),
			className: "h-10 rounded-none disabled:cursor-not-allowed disabled:opacity-50"
		})]
	});
}
//#endregion
export { EditRegistrationPage as component };
