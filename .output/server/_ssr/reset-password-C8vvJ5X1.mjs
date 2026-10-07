import { __toESM } from "../_runtime.mjs";
import { require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { supabase } from "./auth-middleware-CmY4KpCX.mjs";
import { LoaderCircle, Lock, TriangleAlert } from "../_libs/lucide-react.mjs";
import { AuthLayout } from "./router-BIqeqhEH.mjs";
import { Input, Label } from "./label-0leyqT9h.mjs";
import { AuthError, SubmitButton } from "./parts-CKf_TMKz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reset-password-C8vvJ5X1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ResetPasswordPage() {
	const [password, setPassword] = (0, import_react.useState)("");
	const [confirm, setConfirm] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [checking, setChecking] = (0, import_react.useState)(true);
	const [validSession, setValidSession] = (0, import_react.useState)(false);
	const [busy, setBusy] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		let active = true;
		async function prepareRecovery() {
			const code = new URLSearchParams(window.location.search).get("code");
			if (code) await supabase.auth.exchangeCodeForSession(code);
			const { data: { session } } = await supabase.auth.getSession();
			if (!active) return;
			setValidSession(!!session);
			setChecking(false);
		}
		prepareRecovery();
		const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
			if (event === "PASSWORD_RECOVERY" || session) {
				setValidSession(true);
				setChecking(false);
			}
		});
		return () => {
			active = false;
			subscription.unsubscribe();
		};
	}, []);
	async function submit(e) {
		e.preventDefault();
		setError("");
		if (password !== confirm) {
			setError("Passwords do not match");
			return;
		}
		setBusy(true);
		const { error } = await supabase.auth.updateUser({ password });
		if (error) {
			setError(error.message || "Failed to reset password");
			setBusy(false);
			return;
		}
		await supabase.auth.signOut();
		window.location.href = "/login";
	}
	if (checking) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthLayout, {
		icon: Lock,
		title: "Reset password",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-center py-6 text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
				className: "mr-2 h-5 w-5 animate-spin",
				"aria-hidden": "true"
			}), "Checking reset link..."]
		})
	});
	if (!validSession) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthLayout, {
		icon: TriangleAlert,
		title: "Invalid reset link",
		subtitle: "This password reset link is missing, invalid, or expired",
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/forgot-password",
			className: "font-medium text-primary hover:underline",
			children: "Request a new link"
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-center text-sm text-foreground",
			children: "Please request a new password reset email and try again."
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthLayout, {
		icon: Lock,
		title: "New password",
		subtitle: "Enter your new password below",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthError, { children: error }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: submit,
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "reset-password",
						children: "New password"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
							className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "reset-password",
							type: "password",
							autoComplete: "new-password",
							autoFocus: true,
							placeholder: "••••••••",
							value: password,
							onChange: (e) => setPassword(e.target.value),
							className: "h-12 pl-10",
							required: true
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "reset-confirm",
						children: "Confirm password"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
							className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "reset-confirm",
							type: "password",
							autoComplete: "new-password",
							placeholder: "••••••••",
							value: confirm,
							onChange: (e) => setConfirm(e.target.value),
							className: "h-12 pl-10",
							required: true
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubmitButton, {
					busy,
					busyLabel: "Resetting...",
					children: "Reset password"
				})
			]
		})]
	});
}
var SplitComponent = ResetPasswordPage;
//#endregion
export { SplitComponent as component };
