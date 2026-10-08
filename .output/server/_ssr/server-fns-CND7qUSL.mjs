import { __toESM } from "../_runtime.mjs";
import { require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { Slot, require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { TSS_SERVER_FUNCTION, createServerFn, getServerFnById } from "./ssr.mjs";
import { requireUser } from "./auth-middleware-CmY4KpCX.mjs";
import { clsx, cva } from "../_libs/class-variance-authority+clsx.mjs";
import { twMerge } from "../_libs/tailwind-merge.mjs";
import { _enum, array, object, string } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-D2CKBhnw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/server-fns-CND7qUSL.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
	contact_email: string().trim().max(120).regex(EMAIL_RE, "Enter a valid email address"),
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
var EditableRegistrationInput = object({
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
	contact_email: string().trim().max(120).regex(EMAIL_RE, "Enter a valid email address"),
	contact_phone: string().trim().max(30).optional(),
	discord: string().trim().max(40).optional()
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
/**
* Create a Supabase client that acts as the currently
* logged-in user.
*
* This is important for RLS. The normal public Supabase
* client uses the publishable key only, so PostgreSQL sees
* it as anon.
*/
var submitRegistration = createServerFn({ method: "POST" }).middleware([requireUser]).validator(RegistrationInput).handler(createSsrRpc("8fe5b28dcae6c62a97a57309582306fb0ad093d7fc386bb34800a2a3be8f4eaa"));
var listPublicEntries = createServerFn({ method: "GET" }).handler(createSsrRpc("328c346a62196f7a40cb59a05cbdaaccca3dae99f5b5c0bd4ccebd396eec7575"));
var listMyRegistrations = createServerFn({ method: "GET" }).middleware([requireUser]).handler(createSsrRpc("c28043b19361a053fd857f2d676d8a2a91cc365f0a97f2a7313b946e0092d0e8"));
createServerFn({ method: "POST" }).middleware([requireUser]).validator(object({
	id: string().uuid(),
	registration: EditableRegistrationInput
})).handler(createSsrRpc("4348003b04dece62dae06f472050ca106be4b50a19c11e6bc4f6806ae24755fc"));
var listRegistrations = createServerFn({ method: "GET" }).middleware([requireUser]).handler(createSsrRpc("de3d95986ac2fb5bf12bd5ed2d1674833fc4ef58be352b8a3abc4f06889c7c3f"));
var setRegistrationStatus = createServerFn({ method: "POST" }).middleware([requireUser]).validator(object({
	id: string().min(1).max(64),
	status: _enum([
		"approved",
		"rejected",
		"pending"
	])
})).handler(createSsrRpc("4b3cc5de4578eb15beed9950583e3a2ee97afff668e6ac24fbaa3278b13f9b51"));
var setPaymentStatus = createServerFn({ method: "POST" }).middleware([requireUser]).validator(object({
	id: string().min(1).max(64),
	status: _enum([
		"pending",
		"verified",
		"rejected"
	])
})).handler(createSsrRpc("d512ec672a10bf7ae7bbe7c216edecbe2f444e99b82a3f853950f2b26d80befb"));
var getPaymentReceiptUrl = createServerFn({ method: "POST" }).middleware([requireUser]).validator(object({ id: string().min(1).max(64) })).handler(createSsrRpc("ccc2bc90cd12b6097230326e9a7987ddedd79ce21f51168d66ca2cf378155a62"));
//#endregion
export { Button, cn, getPaymentReceiptUrl, listMyRegistrations, listPublicEntries, listRegistrations, setPaymentStatus, setRegistrationStatus, submitRegistration };
