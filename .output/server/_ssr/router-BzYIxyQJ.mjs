import { __toESM } from "../_runtime.mjs";
import { require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { ErrorComponent, HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRoute, createRouter, lazyRouteComponent, redirect, rootRouteId, useMatch, useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { require_jsx_runtime } from "../_libs/@radix-ui/react-label+[...].mjs";
import { supabase } from "./auth-middleware-CmY4KpCX.mjs";
import { Button, listMyRegistrations, listPublicEntries, listRegistrations } from "./server-fns-CND7qUSL.mjs";
import { queryOptions, useQuery, useQueryClient } from "../_libs/tanstack__react-query.mjs";
import { QueryClient } from "../_libs/tanstack__query-core.mjs";
import { setupRouterSsrQueryIntegration } from "../_libs/@tanstack/react-router-ssr-query+[...].mjs";
import { z } from "../_libs/next-themes.mjs";
import { Toaster } from "../_libs/sonner.mjs";
import { UserX } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/authReturnTo-XDwUsHoZ.js
var AUTH_PAGES = /* @__PURE__ */ new Set([
	"/login",
	"/register",
	"/forgot-password",
	"/reset-password"
]);
function safeReturnTo(search) {
	if (typeof window === "undefined") return "/";
	const params = new URLSearchParams(search ?? window.location.search);
	return sanitizeReturnTo(params.get("returnTo") || params.get("from_url"));
}
function sanitizeReturnTo(raw) {
	if (!raw || typeof window === "undefined") return "/";
	try {
		const url = new URL(raw, window.location.origin);
		if (url.origin !== window.location.origin) return "/";
		for (const p of [
			"access_token",
			"clear_access_token",
			"app_id",
			"app_base_url",
			"functions_version",
			"from_url",
			"returnTo"
		]) url.searchParams.delete(p);
		if (AUTH_PAGES.has(url.pathname.replace(/\/+$/, "") || "/")) return "/";
		const path = url.pathname + url.search;
		if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return "/";
		return path;
	} catch {
		return "/";
	}
}
function currentPath() {
	if (typeof window === "undefined") return "/";
	return sanitizeReturnTo(window.location.pathname + window.location.search);
}
function currentUrl() {
	if (typeof window === "undefined") return "/";
	return window.location.origin + currentPath();
}
function returnToSearch(returnTo) {
	return returnTo && returnTo !== "/" ? { returnTo } : {};
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-BzYIxyQJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function DefaultCatchBoundary({ error }) {
	const router = useRouter();
	const isRoot = useMatch({
		strict: false,
		select: (state) => state.id === rootRouteId
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex max-w-2xl flex-col items-center gap-4 py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorComponent, { error }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "outline",
				onClick: () => router.invalidate(),
				children: "Try again"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				children: isRoot ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					children: "Home"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					onClick: (e) => {
						e.preventDefault();
						window.history.back();
					},
					children: "Go back"
				})
			})]
		})]
	});
}
function NotFound({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex max-w-lg flex-col items-center gap-4 py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-6xl font-semibold tracking-tight",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: children ?? "The page you are looking for does not exist."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => window.history.back(),
					children: "Go back"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						children: "Start over"
					})
				})]
			})
		]
	});
}
var Toaster$1 = ({ ...props }) => {
	const { theme = "system" } = z();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		theme,
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var authQuery = queryOptions({
	queryKey: ["auth", "me"],
	queryFn: async () => {
		const { data: { session }, error: sessionError } = await supabase.auth.getSession();
		if (sessionError) throw sessionError;
		if (!session?.user) return {
			user: null,
			error: null
		};
		const { data: { user }, error: userError } = await supabase.auth.getUser();
		if (userError) return {
			user: null,
			error: null
		};
		if (!user) return {
			user: null,
			error: null
		};
		return {
			user: {
				...user,
				email: user.email ?? "",
				role: user.app_metadata?.role ?? user.user_metadata?.role ?? "user"
			},
			error: null
		};
	},
	staleTime: Infinity,
	retry: false
});
var AuthContext = (0, import_react.createContext)(null);
function AuthProvider({ children }) {
	const queryClient = useQueryClient();
	const { data, error, isPending } = useQuery(authQuery);
	(0, import_react.useEffect)(() => {
		const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
			if (!session?.user) {
				queryClient.setQueryData(authQuery.queryKey, {
					user: null,
					error: null
				});
				return;
			}
			const user = session.user;
			queryClient.setQueryData(authQuery.queryKey, {
				user: {
					...user,
					email: user.email ?? "",
					role: user.app_metadata?.role ?? user.user_metadata?.role ?? "user"
				},
				error: null
			});
		});
		return () => {
			subscription.unsubscribe();
		};
	}, [queryClient]);
	const value = (0, import_react.useMemo)(() => ({
		user: data?.user ?? null,
		isAuthenticated: !!data?.user,
		isLoadingAuth: isPending,
		authError: data?.error ?? (error ? {
			type: "unknown",
			message: error.message ?? "Failed to load session"
		} : null),
		refresh: () => queryClient.fetchQuery({
			...authQuery,
			staleTime: 0
		}),
		logout: async () => {
			const { error } = await supabase.auth.signOut();
			if (error) {
				console.error("Supabase logout failed:", error);
				throw error;
			}
			queryClient.setQueryData(authQuery.queryKey, {
				user: null,
				error: null
			});
			window.location.href = "/";
		},
		navigateToLogin: () => {
			const returnTo = encodeURIComponent(currentUrl());
			window.location.href = `/login?returnTo=${returnTo}`;
		}
	}), [
		data,
		error,
		isPending,
		queryClient
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthContext.Provider, {
		value,
		children
	});
}
function useAuth() {
	const ctx = (0, import_react.useContext)(AuthContext);
	if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
	return ctx;
}
var src_default = "/assets/index-DEF2FOiH.css";
var Route$11 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "HAGIT Esports Tournament — Project S+" },
			{
				name: "description",
				content: "Mobile Legends: Bang Bang 5v5 squads and TEKKEN 8 solo fighters. Free entry, ₱60,000 prize pool, limited slots."
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: src_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500;600;700&family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@400;500;600&display=swap"
			}
		]
	}),
	errorComponent: DefaultCatchBoundary,
	notFoundComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotFound, {}),
	shellComponent: RootDocument,
	component: RootComponent
});
function RootComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})] });
}
function RootDocument({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function AuthLayout({ icon: Icon, title, subtitle, footer, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4 py-8 text-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "h-7 w-7 text-primary-foreground",
								"aria-hidden": "true"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-3xl font-bold tracking-tight",
							children: title
						}),
						subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted-foreground",
							children: subtitle
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-2xl border border-border bg-card p-8 text-card-foreground shadow-sm",
					children
				}),
				footer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-center text-sm text-muted-foreground",
					children: footer
				})
			]
		})
	});
}
function UserNotRegistered() {
	const { logout } = useAuth();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthLayout, {
		icon: UserX,
		title: "Access not granted",
		subtitle: "Your account does not have access to this area.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-6 text-center text-sm text-foreground",
			children: "Contact an administrator for access, or sign in with a different account."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "outline",
			className: "h-12 w-full font-medium",
			onClick: logout,
			children: "Sign out"
		})]
	});
}
var NotRegisteredError = class extends Error {};
/**
* The login gate for a pathless layout route (src/routes/_authed.jsx), which gates
* every route under src/routes/_authed/ (their URLs carry no "_authed" segment):
*
*   createFileRoute("/_authed")({ ssr: false, beforeLoad: requireSignedIn, errorComponent: AuthGateError })
*
* TanStack Router's authenticated-routes pattern: beforeLoad reads the visitor from the
* router context (the QueryClient's cached `authQuery`, shared with useAuth()), so a
* child's loader never runs as an anonymous visitor. Signed out → /login with the way
* back; signed in but not a user of this app → the not-registered screen. Children read
* the visitor with `Route.useRouteContext().user`. `ssr: false` — the server is anonymous,
* so these pages render in the browser only, and children inherit that.
*/
async function requireSignedIn({ context, location }) {
	const { user, error } = await context.queryClient.ensureQueryData(authQuery);
	if (user) return { user };
	if (error?.type === "user_not_registered") throw new NotRegisteredError(error.message);
	throw redirect({
		to: "/login",
		search: {
			returnTo: location.href,
			from_url: location.href
		},
		reloadDocument: true
	});
}
function AuthGateError({ error }) {
	return error instanceof NotRegisteredError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserNotRegistered, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultCatchBoundary, { error });
}
var $$splitErrorComponentImporter$1 = () => import("../_authed-BB43HA3R.mjs");
var Route$10 = createFileRoute("/_authed")({
	ssr: false,
	beforeLoad: requireSignedIn,
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter$1, "errorComponent")
});
var $$splitComponentImporter$8 = () => import("../_site-BFcld8-F.mjs");
var Route$9 = createFileRoute("/_site")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./forgot-password-C64kgini.mjs");
var Route$8 = createFileRoute("/forgot-password")({
	ssr: false,
	head: () => ({ meta: [{ title: "Reset your password — Project S+" }] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./login-DfjPaZtI.mjs");
var Route$7 = createFileRoute("/login")({
	ssr: false,
	head: () => ({ meta: [{ title: "Staff login — Project S+" }] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./register-CJPYDFXY.mjs");
var Route$6 = createFileRoute("/register")({
	ssr: false,
	head: () => ({ meta: [{ title: "Create an account — Project S+" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./reset-password-CxE9fTwU.mjs");
var Route$5 = createFileRoute("/reset-password")({
	ssr: false,
	head: () => ({ meta: [{ title: "Set a new password — Project S+" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./admin-DMMsTO3N.mjs");
var Route$4 = createFileRoute("/_authed/admin")({
	ssr: false,
	loader: () => listRegistrations(),
	shouldReload: true,
	head: () => ({ meta: [{ title: "Command Center — Project S+" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./my-registration-DMRWy_cl.mjs");
var Route$3 = createFileRoute("/_authed/my-registration")({
	loader: async () => {
		return await listMyRegistrations();
	},
	head: () => ({ meta: [{ title: "My Registration — Project S+" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("../_site-C-tRYHnW.mjs");
var Route$2 = createFileRoute("/_site/")({
	loader: () => listPublicEntries(),
	shouldReload: true,
	head: () => ({ meta: [
		{ title: "HAGIT Esports Tournament — Project S+" },
		{
			name: "description",
			content: "Mobile Legends: Bang Bang 5v5 squads and TEKKEN 8 solo fighters. ₱60,000 prize pool, free entry, limited slots — register for the HAGIT Esports Tournament, powered by Project S+."
		},
		{
			property: "og:title",
			content: "HAGIT Esports Tournament — Project S+"
		},
		{
			property: "og:description",
			content: "MLBB 5v5 and TEKKEN 8 brackets. Free entry, limited slots."
		},
		{
			property: "og:type",
			content: "website"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./join-C2Q0Axlw.mjs");
var $$splitErrorComponentImporter = () => import("./join-D2rz3uAS.mjs");
var Route$1 = createFileRoute("/_site/join")({
	ssr: false,
	beforeLoad: requireSignedIn,
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	head: () => ({ meta: [{ title: "Register — HAGIT Esports Tournament" }, {
		name: "description",
		content: "Register your MLBB squad or TEKKEN 8 entry for the HAGIT Esports Tournament."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var Route = createFileRoute("/api/time")({ server: { handlers: { GET: async () => Response.json({ now: (/* @__PURE__ */ new Date()).toISOString() }, { headers: { "cache-control": "no-store" } }) } } });
var AuthedRoute = Route$10.update({
	id: "/_authed",
	getParentRoute: () => Route$11
});
var SiteRoute = Route$9.update({
	id: "/_site",
	getParentRoute: () => Route$11
});
var ForgotPasswordRoute = Route$8.update({
	id: "/forgot-password",
	path: "/forgot-password",
	getParentRoute: () => Route$11
});
var LoginRoute = Route$7.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$11
});
var RegisterRoute = Route$6.update({
	id: "/register",
	path: "/register",
	getParentRoute: () => Route$11
});
var ResetPasswordRoute = Route$5.update({
	id: "/reset-password",
	path: "/reset-password",
	getParentRoute: () => Route$11
});
var AuthedAdminRoute = Route$4.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => AuthedRoute
});
var AuthedMyRegistrationRoute = Route$3.update({
	id: "/my-registration",
	path: "/my-registration",
	getParentRoute: () => AuthedRoute
});
var SiteIndexRoute = Route$2.update({
	id: "/",
	path: "/",
	getParentRoute: () => SiteRoute
});
var SiteJoinRoute = Route$1.update({
	id: "/join",
	path: "/join",
	getParentRoute: () => SiteRoute
});
var ApiTimeRoute = Route.update({
	id: "/api/time",
	path: "/api/time",
	getParentRoute: () => Route$11
});
var AuthedRouteChildren = {
	AuthedAdminRoute,
	AuthedMyRegistrationRoute
};
var AuthedRouteWithChildren = AuthedRoute._addFileChildren(AuthedRouteChildren);
var SiteRouteChildren = {
	SiteJoinRoute,
	SiteIndexRoute
};
var rootRouteChildren = {
	AuthedRoute: AuthedRouteWithChildren,
	SiteRoute: SiteRoute._addFileChildren(SiteRouteChildren),
	ForgotPasswordRoute,
	LoginRoute,
	RegisterRoute,
	ResetPasswordRoute,
	ApiTimeRoute
};
var routeTree = Route$11._addFileChildren(rootRouteChildren)._addFileTypes();
var createQueryClient = () => new QueryClient({ defaultOptions: { queries: {
	staleTime: 3e4,
	refetchOnWindowFocus: false
} } });
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	const queryClient = createQueryClient();
	const router = createRouter({
		routeTree,
		context: { queryClient },
		defaultPreload: "intent",
		defaultPreloadStaleTime: 0,
		defaultErrorComponent: DefaultCatchBoundary,
		defaultNotFoundComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotFound, {}),
		scrollRestoration: true
	});
	setupRouterSsrQueryIntegration({
		router,
		queryClient
	});
	return router;
}
//#endregion
export { AuthGateError, AuthLayout, Route$2, Route$3, Route$4, returnToSearch, router_exports, safeReturnTo, useAuth };
