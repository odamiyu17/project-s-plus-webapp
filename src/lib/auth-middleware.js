import { createMiddleware } from "@tanstack/react-start";
import {
  getRequest,
  setResponseStatus,
} from "@tanstack/react-start/server";

import { supabase } from "@/api/supabaseClient";

/**
 * Get the Supabase access token from the current browser session.
 */
async function getBrowserAccessToken() {
  if (typeof window === "undefined") {
    return null;
  }

  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

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

  if (!authorization) {
    return null;
  }

  const [type, token] = authorization.split(" ");

  if (type?.toLowerCase() !== "bearer" || !token) {
    return null;
  }

  return token;
}

/**
 * Validate the supplied access token with Supabase and return
 * a normalized user object.
 */
async function getCurrentUser(request = getRequest()) {
  const token = getBearerToken(request);

  if (!token) {
    return null;
  }

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser(token);

  if (error || !user) {
    return null;
  }

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

    role:
      user.app_metadata?.role ??
      user.user_metadata?.role ??
      "user",
  };
}

/**
 * Applied to server functions.
 *
 * The browser sends the current Supabase access token with
 * every TanStack server-function request.
 */
export const authMiddleware = createMiddleware({
  type: "function",
})
  .client(async ({ next }) => {
    const token = await getBrowserAccessToken();

    return next({
      headers: token
        ? {
            Authorization: `Bearer ${token}`,
          }
        : {},
    });
  })
  .server(async ({ next }) => {
    return next();
  });

/**
 * Request-level middleware.
 *
 * This replaces the old Base44 request middleware.
 * Supabase does not require us to construct a Base44-style
 * request client, so this simply continues the request.
 */
export const supabaseRequestMiddleware = createMiddleware({
  type: "request",
}).server(async ({ next }) => {
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
export const requireUser = createMiddleware({
  type: "function",
}).server(async ({ next }) => {
  const request = getRequest();

  const user = await getCurrentUser(request);

  if (!user) {
    setResponseStatus(401);

    throw Object.assign(
      new Error("Unauthorized"),
      {
        status: 401,
        code: "UNAUTHORIZED",
      },
    );
  }

  return next({
    context: {
      user,
    },
  });
});

/**
 * Protect a server route.
 *
 * Used for routes such as:
 *
 * src/routes/api/*
 */
export const requireUserRoute = createMiddleware({
  type: "request",
}).server(async ({ next, request }) => {
  const user = await getCurrentUser(request);

  if (!user) {
    return Response.json(
      {
        error: "Unauthorized",
      },
      {
        status: 401,
      },
    );
  }

  return next({
    context: {
      user,
    },
  });
});