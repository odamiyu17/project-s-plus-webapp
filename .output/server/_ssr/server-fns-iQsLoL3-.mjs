import { TSS_SERVER_FUNCTION, createServerFn, getRequest } from "./ssr.mjs";
import { createClient } from "../_libs/supabase__supabase-js.mjs";
import { requireUser, supabase } from "./auth-middleware-CmY4KpCX.mjs";
import { _enum, array, object, string } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/server-fns-iQsLoL3-.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var RegistrationInput = object({
	game: _enum(["mlbb", "tekken8"]),
	team_name: string().trim().min(2).max(60).optional(),
	team_tag: string().trim().min(2).max(6).optional(),
	region: string().trim().max(40).optional(),
	roster: array(object({
		ign: string().trim().min(1).max(40),
		game_id: string().trim().min(1).max(40),
		role: string().trim().max(24).optional()
	})).max(6).optional(),
	player_name: string().trim().max(80).optional(),
	in_game_id: string().trim().max(40).optional(),
	contact_name: string().trim().min(2).max(80),
	contact_email: string().trim().max(120).regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email address"),
	contact_phone: string().trim().max(30).optional(),
	discord: string().trim().max(40).optional(),
	payment_method: _enum(["gcash", "bank"]),
	payment_receipt_path: string().trim().regex(/^receipts\/[a-zA-Z0-9._-]+$/, "Invalid receipt path"),
	payment_reference: string().trim().max(100).optional()
}).superRefine((value, ctx) => {
	if (value.game === "mlbb") {
		if (!value.team_name) ctx.addIssue({
			code: "custom",
			path: ["team_name"],
			message: "Team name is required"
		});
		if ((value.roster ?? []).length !== 5) ctx.addIssue({
			code: "custom",
			path: ["roster"],
			message: "Exactly five starters are required"
		});
	} else if (!value.in_game_id) ctx.addIssue({
		code: "custom",
		path: ["in_game_id"],
		message: "In-game ID is required"
	});
});
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
/**
* Create a Supabase client that acts as the currently
* logged-in user.
*
* This is important for RLS. The normal public Supabase
* client uses the publishable key only, so PostgreSQL sees
* it as anon.
*/
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
var submitRegistration_createServerFn_handler = createServerRpc({
	id: "8fe5b28dcae6c62a97a57309582306fb0ad093d7fc386bb34800a2a3be8f4eaa",
	name: "submitRegistration",
	filename: "src/lib/server-fns.js"
}, (opts) => submitRegistration.__executeServer(opts));
var submitRegistration = createServerFn({ method: "POST" }).validator(RegistrationInput).handler(submitRegistration_createServerFn_handler, async ({ data }) => {
	const id = crypto.randomUUID();
	const reference = makeReference();
	const { error } = await supabase.from("registrations").insert({
		id,
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
		region: row.region ?? "",
		player_name: row.player_name ?? "",
		in_game_id: row.in_game_id ?? "",
		roster: Array.isArray(row.roster) ? row.roster.map((player) => ({
			ign: player?.ign ?? "",
			game_id: player?.game_id ?? "",
			role: player?.role ?? ""
		})) : []
	}));
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
export { getPaymentReceiptUrl_createServerFn_handler, listPublicEntries_createServerFn_handler, listRegistrations_createServerFn_handler, setPaymentStatus_createServerFn_handler, setRegistrationStatus_createServerFn_handler, submitRegistration_createServerFn_handler };
