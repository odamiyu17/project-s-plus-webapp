import { TSS_SERVER_FUNCTION, createServerFn, getRequest } from "./ssr.mjs";
import { createClient } from "../_libs/supabase__supabase-js.mjs";
import { requireUser, supabase } from "./auth-middleware-CmY4KpCX.mjs";
import { _enum, array, number, object, string } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/server-fns-BfYezKBQ.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var TEAM_LOGO_PATH_RE = /^[a-f0-9-]+\/[a-zA-Z0-9._-]+$/;
var MLBB_PHOTO_PATH_RE = /^[a-f0-9-]+\/mlbb\/[a-zA-Z0-9._-]+$/;
var TEKKEN_PHOTO_PATH_RE = /^[a-f0-9-]+\/tekken8\/[a-zA-Z0-9._-]+$/;
var PAYMENT_RECEIPT_PATH_RE = /^receipts\/[a-zA-Z0-9._-]+$/;
var MlbbPlayerInput = object({
	player_photo_path: string().trim().regex(MLBB_PHOTO_PATH_RE, "Invalid player photo path"),
	full_name: string().trim().min(2, "Full name is required").max(100),
	ign: string().trim().min(1, "IGN is required").max(40),
	birthdate: string().trim().regex(/^\d{4}-\d{2}-\d{2}$/, "Birthdate must use YYYY-MM-DD"),
	age: number().int().min(10).max(100),
	game_id: string().trim().min(1, "MLID is required").max(60),
	school: string().trim().max(120).optional(),
	organization: string().trim().max(120).optional(),
	facebook_link: string().trim().url("Enter a valid Facebook link").max(250),
	contact_number: string().trim().min(7, "Contact number is required").max(30),
	role: string().trim().max(24).optional(),
	roster_type: _enum(["main", "substitute"])
});
function addRegistrationIssues(value, ctx) {
	if (value.game === "mlbb") {
		if (!value.team_name) ctx.addIssue({
			code: "custom",
			path: ["team_name"],
			message: "Team name is required"
		});
		if (!value.team_logo_path) ctx.addIssue({
			code: "custom",
			path: ["team_logo_path"],
			message: "Team logo is required"
		});
		const roster = value.roster ?? [];
		if (roster.length !== 7) {
			ctx.addIssue({
				code: "custom",
				path: ["roster"],
				message: "Exactly 7 players are required"
			});
			return;
		}
		const mainPlayers = roster.filter((player) => player.roster_type === "main");
		const substitutes = roster.filter((player) => player.roster_type === "substitute");
		if (mainPlayers.length !== 5) ctx.addIssue({
			code: "custom",
			path: ["roster"],
			message: "Exactly 5 main players are required"
		});
		if (substitutes.length !== 2) ctx.addIssue({
			code: "custom",
			path: ["roster"],
			message: "Exactly 2 substitutes are required"
		});
		roster.forEach((player, index) => {
			const birthdate = /* @__PURE__ */ new Date(`${player.birthdate}T00:00:00Z`);
			if (Number.isNaN(birthdate.getTime())) {
				ctx.addIssue({
					code: "custom",
					path: [
						"roster",
						index,
						"birthdate"
					],
					message: "Enter a valid birthdate"
				});
				return;
			}
			const today = /* @__PURE__ */ new Date();
			let calculatedAge = today.getUTCFullYear() - birthdate.getUTCFullYear();
			const monthDifference = today.getUTCMonth() - birthdate.getUTCMonth();
			if (monthDifference < 0 || monthDifference === 0 && today.getUTCDate() < birthdate.getUTCDate()) calculatedAge -= 1;
			if (calculatedAge !== player.age) ctx.addIssue({
				code: "custom",
				path: [
					"roster",
					index,
					"age"
				],
				message: "Age does not match birthdate"
			});
		});
		return;
	}
	if (!value.player_name) ctx.addIssue({
		code: "custom",
		path: ["player_name"],
		message: "Full name is required"
	});
	if (!value.in_game_id) ctx.addIssue({
		code: "custom",
		path: ["in_game_id"],
		message: "In-game ID is required"
	});
	if (!value.player_photo_path) ctx.addIssue({
		code: "custom",
		path: ["player_photo_path"],
		message: "Player photo is required"
	});
}
var RegistrationInput = object({
	game: _enum(["mlbb", "tekken8"]),
	team_name: string().trim().min(2).max(60).optional(),
	team_tag: string().trim().min(2).max(6).optional(),
	team_logo_path: string().trim().regex(TEAM_LOGO_PATH_RE, "Invalid team logo path").optional(),
	region: string().trim().max(40).optional(),
	roster: array(MlbbPlayerInput).max(7).optional(),
	player_name: string().trim().min(2).max(80).optional(),
	in_game_id: string().trim().max(40).optional(),
	player_photo_path: string().trim().regex(TEKKEN_PHOTO_PATH_RE, "Invalid player photo path").optional(),
	contact_name: string().trim().min(2).max(80),
	contact_email: string().trim().max(120).regex(EMAIL_RE, "Enter a valid email address"),
	contact_phone: string().trim().max(30).optional(),
	discord: string().trim().max(40).optional(),
	payment_method: _enum(["gcash", "bank"]),
	payment_receipt_path: string().trim().regex(PAYMENT_RECEIPT_PATH_RE, "Invalid receipt path"),
	payment_reference: string().trim().max(100).optional()
}).superRefine(addRegistrationIssues);
var EditableRegistrationInput = object({
	game: _enum(["mlbb", "tekken8"]),
	team_name: string().trim().min(2).max(60).optional(),
	team_tag: string().trim().min(2).max(6).optional(),
	team_logo_path: string().trim().regex(TEAM_LOGO_PATH_RE, "Invalid team logo path").optional(),
	region: string().trim().max(40).optional(),
	roster: array(MlbbPlayerInput).max(7).optional(),
	player_name: string().trim().min(2).max(80).optional(),
	in_game_id: string().trim().max(40).optional(),
	player_photo_path: string().trim().regex(TEKKEN_PHOTO_PATH_RE, "Invalid player photo path").optional(),
	contact_name: string().trim().min(2).max(80),
	contact_email: string().trim().max(120).regex(EMAIL_RE, "Enter a valid email address"),
	contact_phone: string().trim().max(30).optional(),
	discord: string().trim().max(40).optional()
}).superRefine(addRegistrationIssues);
function withoutBlanks(record) {
	const cleaned = {};
	for (const [key, value] of Object.entries(record)) {
		if (value === void 0 || value === null || value === "") continue;
		if (Array.isArray(value)) {
			const items = value.filter(Boolean);
			if (!items.length) continue;
			cleaned[key] = items;
			continue;
		}
		cleaned[key] = value;
	}
	return cleaned;
}
var makeReference = () => `S+${crypto.randomUUID().replace(/-/g, "").slice(0, 6).toUpperCase()}`;
function getAuthenticatedSupabase() {
	const authorization = getRequest().headers.get("authorization");
	return createClient("https://ezzczsqaspyfnodywxpk.supabase.co", "sb_publishable_5xgzY0_acU6497Ce75_k9A_wfNmf2O9", {
		global: { headers: authorization ? { Authorization: authorization } : {} },
		auth: {
			persistSession: false,
			autoRefreshToken: false
		}
	});
}
function cleanMlbbPlayer(player) {
	return {
		player_photo_path: player.player_photo_path,
		full_name: player.full_name.trim(),
		ign: player.ign.trim(),
		birthdate: player.birthdate,
		age: player.age,
		game_id: player.game_id.trim(),
		school: player.school?.trim() || "",
		organization: player.organization?.trim() || "",
		facebook_link: player.facebook_link.trim(),
		contact_number: player.contact_number.trim(),
		role: player.role?.trim() || "",
		roster_type: player.roster_type
	};
}
var submitRegistration_createServerFn_handler = createServerRpc({
	id: "8fe5b28dcae6c62a97a57309582306fb0ad093d7fc386bb34800a2a3be8f4eaa",
	name: "submitRegistration",
	filename: "src/lib/server-fns.js"
}, (opts) => submitRegistration.__executeServer(opts));
var submitRegistration = createServerFn({ method: "POST" }).middleware([requireUser]).validator(RegistrationInput).handler(submitRegistration_createServerFn_handler, async ({ data, context }) => {
	if (!context.user?.id) throw Object.assign(/* @__PURE__ */ new Error("You must be signed in to register"), { status: 401 });
	const id = crypto.randomUUID();
	const reference = makeReference();
	const { error } = await supabase.from("registrations").insert({
		id,
		user_id: context.user.id,
		...withoutBlanks(data),
		status: "pending",
		payment_status: "pending",
		reference_code: reference
	});
	if (error) {
		console.error("Registration insert failed:", error);
		throw new Error(error.message || "Unable to submit registration");
	}
	return {
		id,
		reference_code: reference
	};
});
var listPublicEntries_createServerFn_handler = createServerRpc({
	id: "328c346a62196f7a40cb59a05cbdaaccca3dae99f5b5c0bd4ccebd396eec7575",
	name: "listPublicEntries",
	filename: "src/lib/server-fns.js"
}, (opts) => listPublicEntries.__executeServer(opts));
var listPublicEntries = createServerFn({ method: "GET" }).handler(listPublicEntries_createServerFn_handler, async () => {
	const { data: rows, error } = await supabase.from("registrations").select(`
              id,
              game,
              team_name,
              team_tag,
              team_logo_path,
              region,
              player_name,
              in_game_id,
              roster,
              updated_at
            `).eq("status", "approved").order("updated_at", { ascending: false }).limit(200);
	if (error) {
		console.error("Public registrations fetch failed:", error);
		throw new Error(error.message || "Unable to load registrations");
	}
	return (rows ?? []).map((row) => ({
		id: row.id,
		game: row.game,
		team_name: row.team_name ?? "",
		team_tag: row.team_tag ?? "",
		team_logo_path: row.team_logo_path ?? "",
		region: row.region ?? "",
		player_name: row.player_name ?? "",
		in_game_id: row.in_game_id ?? "",
		roster: Array.isArray(row.roster) ? row.roster.map((player) => ({
			ign: player?.ign ?? "",
			role: player?.role ?? "",
			roster_type: player?.roster_type ?? ""
		})) : []
	}));
});
var listMyRegistrations_createServerFn_handler = createServerRpc({
	id: "c28043b19361a053fd857f2d676d8a2a91cc365f0a97f2a7313b946e0092d0e8",
	name: "listMyRegistrations",
	filename: "src/lib/server-fns.js"
}, (opts) => listMyRegistrations.__executeServer(opts));
var listMyRegistrations = createServerFn({ method: "GET" }).middleware([requireUser]).handler(listMyRegistrations_createServerFn_handler, async ({ context }) => {
	const { data: items, error } = await getAuthenticatedSupabase().from("registrations").select(`
                id,
                game,
                team_name,
                team_tag,
                team_logo_path,
                region,
                roster,
                player_name,
                in_game_id,
                player_photo_path,
                contact_name,
                contact_email,
                contact_phone,
                discord,
                status,
                reference_code,
                payment_method,
                payment_status,
                payment_reference,
                payment_receipt_path,
                created_at,
                updated_at
              `).eq("user_id", context.user.id).order("created_at", { ascending: false });
	if (error) {
		console.error("User registrations fetch failed:", error);
		throw new Error(error.message || "Unable to load your registrations");
	}
	return (items ?? []).map((item) => ({
		...item,
		has_payment_receipt: Boolean(item.payment_receipt_path),
		payment_receipt_path: void 0
	}));
});
var updateMyRegistration_createServerFn_handler = createServerRpc({
	id: "4348003b04dece62dae06f472050ca106be4b50a19c11e6bc4f6806ae24755fc",
	name: "updateMyRegistration",
	filename: "src/lib/server-fns.js"
}, (opts) => updateMyRegistration.__executeServer(opts));
var updateMyRegistration = createServerFn({ method: "POST" }).middleware([requireUser]).validator(object({
	id: string().uuid(),
	registration: EditableRegistrationInput
})).handler(updateMyRegistration_createServerFn_handler, async ({ data, context }) => {
	const userSupabase = getAuthenticatedSupabase();
	const { data: existing, error: lookupError } = await userSupabase.from("registrations").select(`
                id,
                user_id,
                status
              `).eq("id", data.id).eq("user_id", context.user.id).single();
	if (lookupError || !existing) throw Object.assign(/* @__PURE__ */ new Error("Registration not found"), { status: 404 });
	if (existing.status !== "pending") throw Object.assign(/* @__PURE__ */ new Error("Only pending registrations can be edited"), { status: 409 });
	const form = data.registration;
	const common = {
		game: form.game,
		region: form.region?.trim() || null,
		contact_name: form.contact_name.trim(),
		contact_email: form.contact_email.trim(),
		contact_phone: form.contact_phone?.trim() || null,
		discord: form.discord?.trim() || null,
		updated_at: (/* @__PURE__ */ new Date()).toISOString()
	};
	const updateData = form.game === "mlbb" ? {
		...common,
		team_name: form.team_name?.trim() || null,
		team_tag: form.team_tag?.trim().toUpperCase() || null,
		team_logo_path: form.team_logo_path || null,
		roster: (form.roster ?? []).map(cleanMlbbPlayer),
		player_name: null,
		in_game_id: null,
		player_photo_path: null
	} : {
		...common,
		player_name: form.player_name?.trim() || null,
		in_game_id: form.in_game_id?.trim() || null,
		player_photo_path: form.player_photo_path || null,
		team_name: null,
		team_tag: null,
		team_logo_path: null,
		roster: null
	};
	const { data: updated, error: updateError } = await userSupabase.from("registrations").update(updateData).eq("id", data.id).eq("user_id", context.user.id).eq("status", "pending").select("*").single();
	if (updateError) {
		console.error("User registration update failed:", updateError);
		throw new Error(updateError.message || "Unable to update your registration");
	}
	return updated;
});
var updateMyPayment_createServerFn_handler = createServerRpc({
	id: "b241d33abcfb5410fafc884b75859a24bb8b3c4a3baea48652b07601762af44c",
	name: "updateMyPayment",
	filename: "src/lib/server-fns.js"
}, (opts) => updateMyPayment.__executeServer(opts));
var updateMyPayment = createServerFn({ method: "POST" }).middleware([requireUser]).validator(object({
	id: string().uuid(),
	payment_method: _enum(["gcash", "bank"]),
	payment_reference: string().trim().max(100).optional(),
	payment_receipt_path: string().trim().regex(PAYMENT_RECEIPT_PATH_RE, "Invalid receipt path").optional()
})).handler(updateMyPayment_createServerFn_handler, async ({ data, context }) => {
	const userSupabase = getAuthenticatedSupabase();
	const { data: existing, error: lookupError } = await userSupabase.from("registrations").select(`
                id,
                user_id,
                status,
                payment_status,
                payment_receipt_path
              `).eq("id", data.id).eq("user_id", context.user.id).single();
	if (lookupError || !existing) throw Object.assign(/* @__PURE__ */ new Error("Registration not found"), { status: 404 });
	if (existing.status !== "pending") throw Object.assign(/* @__PURE__ */ new Error("Payment details can only be edited while the registration is pending"), { status: 409 });
	if (existing.payment_status === "verified") throw Object.assign(/* @__PURE__ */ new Error("Verified payment details can no longer be changed"), { status: 409 });
	const updateData = {
		payment_method: data.payment_method,
		payment_reference: data.payment_reference?.trim() || null,
		updated_at: (/* @__PURE__ */ new Date()).toISOString()
	};
	if (data.payment_receipt_path) updateData.payment_receipt_path = data.payment_receipt_path;
	const { data: updated, error: updateError } = await userSupabase.from("registrations").update(updateData).eq("id", data.id).eq("user_id", context.user.id).eq("status", "pending").neq("payment_status", "verified").select(`
                id,
                payment_method,
                payment_reference,
                payment_status,
                updated_at
              `).single();
	if (updateError) {
		console.error("User payment update failed:", updateError);
		throw new Error(updateError.message || "Unable to update payment details");
	}
	return updated;
});
var listRegistrations_createServerFn_handler = createServerRpc({
	id: "de3d95986ac2fb5bf12bd5ed2d1674833fc4ef58be352b8a3abc4f06889c7c3f",
	name: "listRegistrations",
	filename: "src/lib/server-fns.js"
}, (opts) => listRegistrations.__executeServer(opts));
var listRegistrations = createServerFn({ method: "GET" }).middleware([requireUser]).handler(listRegistrations_createServerFn_handler, async ({ context }) => {
	if (context.user?.role !== "admin") return {
		authorized: false,
		items: []
	};
	const { data: items, error } = await getAuthenticatedSupabase().from("registrations").select("*").order("created_at", { ascending: false }).limit(300);
	if (error) {
		console.error("Admin registration fetch failed:", error);
		throw new Error(error.message || "Unable to load registrations");
	}
	return {
		authorized: true,
		items: items ?? []
	};
});
var setRegistrationStatus_createServerFn_handler = createServerRpc({
	id: "4b3cc5de4578eb15beed9950583e3a2ee97afff668e6ac24fbaa3278b13f9b51",
	name: "setRegistrationStatus",
	filename: "src/lib/server-fns.js"
}, (opts) => setRegistrationStatus.__executeServer(opts));
var setRegistrationStatus = createServerFn({ method: "POST" }).middleware([requireUser]).validator(object({
	id: string().min(1).max(64),
	status: _enum([
		"approved",
		"rejected",
		"pending"
	])
})).handler(setRegistrationStatus_createServerFn_handler, async ({ data, context }) => {
	if (context.user?.role !== "admin") throw Object.assign(/* @__PURE__ */ new Error("Staff access required"), { status: 403 });
	const adminSupabase = getAuthenticatedSupabase();
	const now = (/* @__PURE__ */ new Date()).toISOString();
	const { data: updated, error } = await adminSupabase.from("registrations").update({
		status: data.status,
		reviewed_at: now,
		reviewed_by: context.user.email ?? "",
		updated_at: now
	}).eq("id", data.id).select("id, status").single();
	if (error) {
		console.error("Registration status update failed:", error);
		throw new Error(error.message || "Unable to update registration status");
	}
	return {
		id: updated.id,
		status: updated.status
	};
});
var setPaymentStatus_createServerFn_handler = createServerRpc({
	id: "d512ec672a10bf7ae7bbe7c216edecbe2f444e99b82a3f853950f2b26d80befb",
	name: "setPaymentStatus",
	filename: "src/lib/server-fns.js"
}, (opts) => setPaymentStatus.__executeServer(opts));
var setPaymentStatus = createServerFn({ method: "POST" }).middleware([requireUser]).validator(object({
	id: string().min(1).max(64),
	status: _enum([
		"pending",
		"verified",
		"rejected"
	])
})).handler(setPaymentStatus_createServerFn_handler, async ({ data, context }) => {
	if (context.user?.role !== "admin") throw Object.assign(/* @__PURE__ */ new Error("Staff access required"), { status: 403 });
	const { data: updated, error } = await getAuthenticatedSupabase().from("registrations").update({
		payment_status: data.status,
		updated_at: (/* @__PURE__ */ new Date()).toISOString()
	}).eq("id", data.id).select("id, payment_status").single();
	if (error) {
		console.error("Payment status update failed:", error);
		throw new Error(error.message || "Unable to update payment status");
	}
	return {
		id: updated.id,
		payment_status: updated.payment_status
	};
});
var getPaymentReceiptUrl_createServerFn_handler = createServerRpc({
	id: "ccc2bc90cd12b6097230326e9a7987ddedd79ce21f51168d66ca2cf378155a62",
	name: "getPaymentReceiptUrl",
	filename: "src/lib/server-fns.js"
}, (opts) => getPaymentReceiptUrl.__executeServer(opts));
var getPaymentReceiptUrl = createServerFn({ method: "POST" }).middleware([requireUser]).validator(object({ id: string().min(1).max(64) })).handler(getPaymentReceiptUrl_createServerFn_handler, async ({ data, context }) => {
	if (context.user?.role !== "admin") throw Object.assign(/* @__PURE__ */ new Error("Staff access required"), { status: 403 });
	const adminSupabase = getAuthenticatedSupabase();
	const { data: registration, error: registrationError } = await adminSupabase.from("registrations").select("payment_receipt_path").eq("id", data.id).single();
	if (registrationError) {
		console.error("Receipt lookup failed:", registrationError);
		throw new Error(registrationError.message || "Unable to find payment receipt");
	}
	if (!registration?.payment_receipt_path) throw new Error("No payment receipt has been uploaded");
	const { data: signed, error: signedUrlError } = await adminSupabase.storage.from("payment-receipts").createSignedUrl(registration.payment_receipt_path, 300);
	if (signedUrlError) {
		console.error("Receipt signed URL failed:", signedUrlError);
		throw new Error(signedUrlError.message || "Unable to open payment receipt");
	}
	return { signedUrl: signed.signedUrl };
});
//#endregion
export { getPaymentReceiptUrl_createServerFn_handler, listMyRegistrations_createServerFn_handler, listPublicEntries_createServerFn_handler, listRegistrations_createServerFn_handler, setPaymentStatus_createServerFn_handler, setRegistrationStatus_createServerFn_handler, submitRegistration_createServerFn_handler, updateMyPayment_createServerFn_handler, updateMyRegistration_createServerFn_handler };
