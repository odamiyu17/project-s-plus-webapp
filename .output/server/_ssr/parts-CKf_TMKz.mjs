import { Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { supabase } from "./auth-middleware-CmY4KpCX.mjs";
import { Button } from "./server-fns-CND7qUSL.mjs";
import { LoaderCircle } from "../_libs/lucide-react.mjs";
import { returnToSearch } from "./router-BzYIxyQJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/parts-CKf_TMKz.js
var import_jsx_runtime = require_jsx_runtime();
function GoogleIcon({ className = "h-5 w-5" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className,
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z",
				fill: "#4285F4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
				fill: "#34A853"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",
				fill: "#FBBC05"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
				fill: "#EA4335"
			})
		]
	});
}
function AuthError({ children }) {
	if (!children) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "alert",
		className: "mb-4 rounded-lg bg-destructive/10 p-3 text-sm text-destructive",
		children
	});
}
function SubmitButton({ busy, busyLabel, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		type: "submit",
		className: "h-12 w-full font-medium",
		disabled: busy,
		...props,
		children: busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
			className: "mr-2 h-4 w-4 animate-spin",
			"aria-hidden": "true"
		}), busyLabel] }) : children
	});
}
function GoogleButton({ returnTo }) {
	async function loginWithGoogle() {
		const callback = `${window.location.origin}/login?returnTo=${encodeURIComponent(returnTo)}`;
		const { error } = await supabase.auth.signInWithOAuth({
			provider: "google",
			options: { redirectTo: callback }
		});
		if (error) console.error("Google login failed:", error);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		type: "button",
		variant: "outline",
		className: "mb-6 h-12 w-full text-sm font-medium",
		onClick: loginWithGoogle,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoogleIcon, { className: "mr-2 h-5 w-5" }), "Continue with Google"]
	});
}
function OrDivider() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mb-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 flex items-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-full border-t border-border" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative flex justify-center text-xs uppercase",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "bg-card px-3 text-muted-foreground",
				children: "or"
			})
		})]
	});
}
function AuthLink({ to, returnTo, className = "font-medium text-primary hover:underline", children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		search: returnToSearch(returnTo),
		className,
		children
	});
}
//#endregion
export { AuthError, AuthLink, GoogleButton, OrDivider, SubmitButton };
