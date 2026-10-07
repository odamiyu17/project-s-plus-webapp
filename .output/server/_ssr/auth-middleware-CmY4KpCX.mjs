import { createMiddleware, getRequest, setResponseStatus } from "./ssr.mjs";
import { createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-middleware-CmY4KpCX.js
var supabase = createClient("https://ezzczsqaspyfnodywxpk.supabase.co", "sb_publishable_5xgzY0_acU6497Ce75_k9A_wfNmf2O9");
/**
* Get the Supabase access token from the current browser session.
*/
async function getBrowserAccessToken() {
	if (typeof window === "undefined") return null;
	const { data: { session }, error } = await supabase.auth.getSession();
	if (error) {
		console.error("Unable to read Supabase session:", error);
		return null;
	}
	return session?.access_token ?? null;
}
/**
* Extract the Bearer token from a request.
*/
function getBearerToken(request) {
	const authorization = request?.headers?.get("authorization");
	if (!authorization) return null;
	const [type, token] = authorization.split(" ");
	if (type?.toLowerCase() !== "bearer" || !token) return null;
	return token;
}
/**
* Validate the supplied access token with Supabase and return
* a normalized user object.
*/
async function getCurrentUser(request = getRequest()) {
	const token = getBearerToken(request);
	if (!token) return null;
	const { data: { user }, error } = await supabase.auth.getUser(token);
	if (error || !user) return null;
	/**
	* Our existing app expects:
	*
	* context.user.id
	* context.user.email
	* context.user.role
	*
	* Supabase stores custom role information in metadata,
	* so expose it as a normal `role` property.
	*/
	return {
		...user,
		email: user.email ?? "",
		role: user.app_metadata?.role ?? user.user_metadata?.role ?? "user"
	};
}
/**
* Applied to server functions.
*
* The browser sends the current Supabase access token with
* every TanStack server-function request.
*/
var authMiddleware = createMiddleware({ type: "function" }).client(async ({ next }) => {
	const token = await getBrowserAccessToken();
	return next({ headers: token ? { Authorization: `Bearer ${token}` } : {} });
}).server(async ({ next }) => {
	return next();
});
/**
* Request-level middleware.
*
* This replaces the old Base44 request middleware.
* Supabase does not require us to construct a Base44-style
* request client, so this simply continues the request.
*/
var supabaseRequestMiddleware = createMiddleware({ type: "request" }).server(async ({ next }) => {
	return next();
});
/**
* TEMPORARY compatibility alias.
*
* src/start.js currently still imports:
*
* base44RequestMiddleware
*
* Keeping this alias prevents the app from breaking before
* we update start.js in the next migration step.
*
* There is NO Base44 SDK usage here.
*/
/**
* Protect a TanStack server function.
*
* Example:
*
* createServerFn()
*   .middleware([requireUser])
*   .handler(({ context }) => {
*     return context.user;
*   });
*/
var requireUser = createMiddleware({ type: "function" }).server(async ({ next }) => {
	const user = await getCurrentUser(getRequest());
	if (!user) {
		setResponseStatus(401);
		throw Object.assign(/* @__PURE__ */ new Error("Unauthorized"), {
			status: 401,
			code: "UNAUTHORIZED"
		});
	}
	return next({ context: { user } });
});
createMiddleware({ type: "request" }).server(async ({ next, request }) => {
	const user = await getCurrentUser(request);
	if (!user) return Response.json({ error: "Unauthorized" }, { status: 401 });
	return next({ context: { user } });
});
//#endregion
export { authMiddleware, requireUser, supabase, supabaseRequestMiddleware };
