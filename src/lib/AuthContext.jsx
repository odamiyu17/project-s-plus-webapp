import {
  queryOptions,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
} from "react";

import { supabase } from "@/api/supabaseClient";
import { currentUrl } from "@/lib/authReturnTo";

export const authQuery = queryOptions({
  queryKey: ["auth", "me"],

  queryFn: async () => {
    const {
      data: { session },
      error: sessionError,
    } = await supabase.auth.getSession();

    if (sessionError) {
      throw sessionError;
    }

    if (!session?.user) {
      return {
        user: null,
        error: null,
      };
    }

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError) {
      return {
        user: null,
        error: null,
      };
    }

    if (!user) {
      return {
        user: null,
        error: null,
      };
    }

    return {
      user: {
        ...user,

        email: user.email ?? "",

        role:
          user.app_metadata?.role ??
          user.user_metadata?.role ??
          "user",
      },

      error: null,
    };
  },

  staleTime: Infinity,
  retry: false,
});

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const queryClient = useQueryClient();

  const {
    data,
    error,
    isPending,
  } = useQuery(authQuery);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        if (!session?.user) {
          queryClient.setQueryData(
            authQuery.queryKey,
            {
              user: null,
              error: null,
            },
          );

          return;
        }

        const user = session.user;

        queryClient.setQueryData(
          authQuery.queryKey,
          {
            user: {
              ...user,

              email: user.email ?? "",

              role:
                user.app_metadata?.role ??
                user.user_metadata?.role ??
                "user",
            },

            error: null,
          },
        );
      },
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [queryClient]);

  const value = useMemo(
    () => ({
      user: data?.user ?? null,

      isAuthenticated: !!data?.user,

      isLoadingAuth: isPending,

      authError:
        data?.error ??
        (
          error
            ? {
                type: "unknown",

                message:
                  error.message ??
                  "Failed to load session",
              }
            : null
        ),

      refresh: () =>
        queryClient.fetchQuery({
          ...authQuery,
          staleTime: 0,
        }),

      logout: async () => {
        const { error } =
          await supabase.auth.signOut();

        if (error) {
          console.error(
            "Supabase logout failed:",
            error,
          );

          throw error;
        }

        queryClient.setQueryData(
          authQuery.queryKey,
          {
            user: null,
            error: null,
          },
        );

        window.location.href = "/";
      },

      navigateToLogin: () => {
        const returnTo = encodeURIComponent(
          currentUrl(),
        );

        window.location.href =
          `/login?returnTo=${returnTo}`;
      },
    }),
    [
      data,
      error,
      isPending,
      queryClient,
    ],
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw new Error(
      "useAuth must be used within <AuthProvider>",
    );
  }

  return ctx;
}