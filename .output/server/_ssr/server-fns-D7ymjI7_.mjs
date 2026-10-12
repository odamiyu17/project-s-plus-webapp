import { __toESM } from "../_runtime.mjs";
import { require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { Slot, require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { TSS_SERVER_FUNCTION, createServerFn, getServerFnById } from "./ssr.mjs";
import { requireUser } from "./auth-middleware-CmY4KpCX.mjs";
import { clsx, cva } from "../_libs/class-variance-authority+clsx.mjs";
import { twMerge } from "../_libs/tailwind-merge.mjs";
import { _enum, array, number, object, string } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-DlwnF5nO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva([
	"inline-flex items-center justify-center gap-2 whitespace-nowrap",
	"rounded-none",
	"font-mono text-[11px] font-medium uppercase tracking-[0.18em]",
	"transition-all duration-300",
	"focus-visible:outline-none",
	"focus-visible:ring-1",
	"focus-visible:ring-primary/70",
	"focus-visible:ring-offset-2",
	"focus-visible:ring-offset-background",
	"disabled:pointer-events-none",
	"disabled:cursor-not-allowed",
	"disabled:opacity-40",
	"[&_svg]:pointer-events-none",
	"[&_svg]:size-4",
	"[&_svg]:shrink-0"
].join(" "), {
	variants: {
		variant: {
			default: [
				"border border-primary/70",
				"bg-primary",
				"text-primary-foreground",
				"shadow-[0_8px_24px_-18px_hsl(var(--primary)/0.9)]",
				"hover:-translate-y-0.5",
				"hover:border-primary",
				"hover:bg-primary/90",
				"hover:shadow-[0_12px_30px_-16px_hsl(var(--primary)/0.75)]",
				"active:translate-y-0",
				"active:scale-[0.98]"
			].join(" "),
			destructive: [
				"border border-destructive/70",
				"bg-destructive",
				"text-destructive-foreground",
				"hover:-translate-y-0.5",
				"hover:bg-destructive/90",
				"hover:shadow-[0_12px_28px_-18px_hsl(var(--destructive)/0.75)]",
				"active:translate-y-0",
				"active:scale-[0.98]"
			].join(" "),
			outline: [
				"border border-border/70",
				"bg-background/20",
				"text-foreground",
				"backdrop-blur-sm",
				"hover:-translate-y-0.5",
				"hover:border-primary/55",
				"hover:bg-primary/[0.055]",
				"hover:text-foreground",
				"hover:shadow-[0_10px_28px_-20px_hsl(var(--primary)/0.45)]",
				"active:translate-y-0",
				"active:scale-[0.98]"
			].join(" "),
			secondary: [
				"border border-border/60",
				"bg-secondary/70",
				"text-secondary-foreground",
				"hover:-translate-y-0.5",
				"hover:border-primary/35",
				"hover:bg-secondary",
				"hover:text-foreground",
				"active:translate-y-0",
				"active:scale-[0.98]"
			].join(" "),
			ghost: [
				"border border-transparent",
				"bg-transparent",
				"text-muted-foreground",
				"hover:bg-secondary/40",
				"hover:text-primary",
				"active:scale-[0.98]"
			].join(" "),
			link: [
				"h-auto",
				"border-0",
				"bg-transparent",
				"p-0",
				"text-primary",
				"shadow-none",
				"underline-offset-4",
				"hover:text-primary/80",
				"hover:underline"
			].join(" ")
		},
		size: {
			default: "h-10 px-5 py-2.5",
			sm: "h-9 px-4 text-[10px] tracking-[0.16em]",
			lg: "h-12 px-7 text-[11px] tracking-[0.2em]",
			icon: "h-10 w-10 p-0"
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
//#region node_modules/.nitro/vite/services/ssr/assets/server-fns-D7ymjI7_.js
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
var submitRegistration = createServerFn({ method: "POST" }).middleware([requireUser]).validator(RegistrationInput).handler(createSsrRpc("8fe5b28dcae6c62a97a57309582306fb0ad093d7fc386bb34800a2a3be8f4eaa"));
var listPublicEntries = createServerFn({ method: "GET" }).handler(createSsrRpc("328c346a62196f7a40cb59a05cbdaaccca3dae99f5b5c0bd4ccebd396eec7575"));
var listMyRegistrations = createServerFn({ method: "GET" }).middleware([requireUser]).handler(createSsrRpc("c28043b19361a053fd857f2d676d8a2a91cc365f0a97f2a7313b946e0092d0e8"));
var updateMyRegistration = createServerFn({ method: "POST" }).middleware([requireUser]).validator(object({
	id: string().uuid(),
	registration: EditableRegistrationInput
})).handler(createSsrRpc("4348003b04dece62dae06f472050ca106be4b50a19c11e6bc4f6806ae24755fc"));
var updateMyPayment = createServerFn({ method: "POST" }).middleware([requireUser]).validator(object({
	id: string().uuid(),
	payment_method: _enum(["gcash", "bank"]),
	payment_reference: string().trim().max(100).optional(),
	payment_receipt_path: string().trim().regex(PAYMENT_RECEIPT_PATH_RE, "Invalid receipt path").optional()
})).handler(createSsrRpc("b241d33abcfb5410fafc884b75859a24bb8b3c4a3baea48652b07601762af44c"));
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
export { Button, cn, getPaymentReceiptUrl, listMyRegistrations, listPublicEntries, listRegistrations, setPaymentStatus, setRegistrationStatus, submitRegistration, updateMyPayment, updateMyRegistration };
