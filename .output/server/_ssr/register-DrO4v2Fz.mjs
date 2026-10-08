import { __toESM } from "../_runtime.mjs";
import { require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { supabase } from "./auth-middleware-CmY4KpCX.mjs";
import { cn } from "./server-fns-7A-z4xbZ.mjs";
import { toast } from "../_libs/sonner.mjs";
import { Lock, Mail, Minus, UserPlus } from "../_libs/lucide-react.mjs";
import { AuthLayout, safeReturnTo } from "./router-eOUMIcI1.mjs";
import { Input, Label } from "./label-0leyqT9h.mjs";
import { AuthError, AuthLink, GoogleButton, OrDivider, SubmitButton } from "./parts-CKf_TMKz.mjs";
import { $t, Nt } from "../_libs/input-otp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/register-DrO4v2Fz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var InputOTP = import_react.forwardRef(({ className, containerClassName, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)($t, {
	ref,
	containerClassName: cn("flex items-center gap-2 has-[:disabled]:opacity-50", containerClassName),
	className: cn("disabled:cursor-not-allowed", className),
	...props
}));
InputOTP.displayName = "InputOTP";
var InputOTPGroup = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex items-center", className),
	...props
}));
InputOTPGroup.displayName = "InputOTPGroup";
var InputOTPSlot = import_react.forwardRef(({ index, className, ...props }, ref) => {
	const { char, hasFakeCaret, isActive } = import_react.useContext(Nt).slots[index];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: cn("relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md", isActive && "z-10 ring-1 ring-ring", className),
		...props,
		children: [char, hasFakeCaret && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-0 flex items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-px animate-caret-blink bg-foreground duration-1000" })
		})]
	});
});
InputOTPSlot.displayName = "InputOTPSlot";
var InputOTPSeparator = import_react.forwardRef(({ ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	role: "separator",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {})
}));
InputOTPSeparator.displayName = "InputOTPSeparator";
function RegisterPage() {
	const returnTo = safeReturnTo();
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [confirm, setConfirm] = (0, import_react.useState)("");
	const [otpCode, setOtpCode] = (0, import_react.useState)("");
	const [step, setStep] = (0, import_react.useState)("form");
	const [error, setError] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function register(e) {
		e.preventDefault();
		setError("");
		if (password !== confirm) {
			setError("Passwords do not match");
			return;
		}
		setBusy(true);
		const { data, error } = await supabase.auth.signUp({
			email,
			password
		});
		if (error) {
			setError(error.message || "Registration failed");
			setBusy(false);
			return;
		}
		if (data.session) {
			window.location.href = returnTo;
			return;
		}
		setStep("otp");
		setBusy(false);
	}
	async function verify(e) {
		e.preventDefault();
		setError("");
		setBusy(true);
		const { error } = await supabase.auth.verifyOtp({
			email,
			token: otpCode,
			type: "signup"
		});
		if (error) {
			setError(error.message || "Invalid verification code");
			setBusy(false);
			return;
		}
		window.location.href = returnTo;
	}
	async function resend() {
		setError("");
		const { error } = await supabase.auth.resend({
			type: "signup",
			email
		});
		if (error) {
			setError(error.message || "Failed to resend code");
			return;
		}
		toast("Code sent", { description: "Check your email for the new code." });
	}
	if (step === "otp") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthLayout, {
		icon: UserPlus,
		title: "Create your account",
		subtitle: "Verify your email to continue",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: verify,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mb-4 text-sm text-muted-foreground",
					children: [
						"We sent a verification code to",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-foreground",
							children: email
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthError, { children: error }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-6 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputOTP, {
						maxLength: 6,
						value: otpCode,
						onChange: setOtpCode,
						autoFocus: true,
						autoComplete: "one-time-code",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputOTPGroup, { children: [
							0,
							1,
							2,
							3,
							4,
							5
						].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputOTPSlot, { index: i }, i)) })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubmitButton, {
					busy,
					busyLabel: "Verifying...",
					disabled: busy || otpCode.length < 6,
					children: "Verify"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-center text-sm text-muted-foreground",
					children: [
						"Didn't receive the code?",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: resend,
							className: "font-medium text-primary hover:underline",
							children: "Resend"
						})
					]
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthLayout, {
		icon: UserPlus,
		title: "Create your account",
		subtitle: "Sign up to get started",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoogleButton, { returnTo }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrDivider, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthError, { children: error }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: register,
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "register-email",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
								className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "register-email",
								type: "email",
								autoComplete: "email",
								autoFocus: true,
								placeholder: "you@example.com",
								value: email,
								onChange: (e) => setEmail(e.target.value),
								className: "h-12 pl-10",
								disabled: busy,
								required: true
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "register-password",
							children: "Password"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
								className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "register-password",
								type: "password",
								autoComplete: "new-password",
								placeholder: "••••••••",
								value: password,
								onChange: (e) => setPassword(e.target.value),
								className: "h-12 pl-10",
								disabled: busy,
								required: true
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "register-confirm",
							children: "Confirm password"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
								className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "register-confirm",
								type: "password",
								autoComplete: "new-password",
								placeholder: "••••••••",
								value: confirm,
								onChange: (e) => setConfirm(e.target.value),
								className: "h-12 pl-10",
								disabled: busy,
								required: true
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubmitButton, {
						busy,
						busyLabel: "Creating account...",
						children: "Create account"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 text-center text-sm text-muted-foreground",
				children: [
					"Already have an account?",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthLink, {
						to: "/login",
						returnTo,
						children: "Log in"
					})
				]
			})
		]
	});
}
var SplitComponent = RegisterPage;
//#endregion
export { SplitComponent as component };
