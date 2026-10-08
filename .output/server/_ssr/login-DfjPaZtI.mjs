import { __toESM } from "../_runtime.mjs";
import { require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { supabase } from "./auth-middleware-CmY4KpCX.mjs";
import { Lock, LogIn, Mail } from "../_libs/lucide-react.mjs";
import { AuthLayout, safeReturnTo } from "./router-BzYIxyQJ.mjs";
import { Input, Label } from "./label-0leyqT9h.mjs";
import { AuthError, AuthLink, GoogleButton, OrDivider, SubmitButton } from "./parts-CKf_TMKz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-DfjPaZtI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
	const returnTo = safeReturnTo();
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		let active = true;
		supabase.auth.getSession().then(({ data }) => {
			if (active && data.session?.user) window.location.href = returnTo;
		});
		return () => {
			active = false;
		};
	}, [returnTo]);
	async function submit(e) {
		e.preventDefault();
		setError("");
		setBusy(true);
		const { error } = await supabase.auth.signInWithPassword({
			email,
			password
		});
		if (error) {
			setError(error.message || "Invalid email or password");
			setBusy(false);
			return;
		}
		window.location.href = returnTo;
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthLayout, {
		icon: LogIn,
		title: "Welcome back",
		subtitle: "Log in to your account",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoogleButton, { returnTo }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrDivider, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthError, { children: error }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "login-email",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
								className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "login-email",
								type: "email",
								autoComplete: "email",
								autoFocus: true,
								placeholder: "you@example.com",
								value: email,
								onChange: (e) => setEmail(e.target.value),
								className: "h-12 pl-10",
								required: true
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "login-password",
								children: "Password"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthLink, {
								to: "/forgot-password",
								returnTo,
								className: "text-xs text-primary hover:underline",
								children: "Forgot password?"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
								className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "login-password",
								type: "password",
								autoComplete: "current-password",
								placeholder: "••••••••",
								value: password,
								onChange: (e) => setPassword(e.target.value),
								className: "h-12 pl-10",
								required: true
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubmitButton, {
						busy,
						busyLabel: "Logging in...",
						children: "Log in"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 text-center text-sm text-muted-foreground",
				children: [
					"Don't have an account?",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthLink, {
						to: "/register",
						returnTo,
						children: "Create one"
					})
				]
			})
		]
	});
}
var SplitComponent = LoginPage;
//#endregion
export { SplitComponent as component };
