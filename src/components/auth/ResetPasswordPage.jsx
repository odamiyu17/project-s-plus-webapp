import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  Loader2,
  Lock,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import { supabase } from "@/api/supabaseClient";
import { AuthLayout } from "@/components/auth/AuthLayout";

import {
  AuthError,
  SubmitButton,
} from "@/components/auth/parts";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [error, setError] = useState("");

  const [checking, setChecking] =
    useState(true);

  const [validSession, setValidSession] =
    useState(false);

  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let active = true;

    async function prepareRecovery() {
      const params =
        new URLSearchParams(
          window.location.search,
        );

      const code = params.get("code");

      if (code) {
        await supabase.auth
          .exchangeCodeForSession(code);
      }

      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!active) return;

      setValidSession(!!session);
      setChecking(false);
    }

    prepareRecovery();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (
          event === "PASSWORD_RECOVERY" ||
          session
        ) {
          setValidSession(true);
          setChecking(false);
        }
      },
    );

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

    const { error } =
      await supabase.auth.updateUser({
        password,
      });

    if (error) {
      setError(
        error.message ||
          "Failed to reset password",
      );

      setBusy(false);
      return;
    }

    await supabase.auth.signOut();

    window.location.href = "/login";
  }

  if (checking) {
    return (
      <AuthLayout
        icon={Lock}
        title="Reset password"
      >
        <div className="flex items-center justify-center py-6 text-muted-foreground">
          <Loader2
            className="mr-2 h-5 w-5 animate-spin"
            aria-hidden="true"
          />

          Checking reset link...
        </div>
      </AuthLayout>
    );
  }

  if (!validSession) {
    return (
      <AuthLayout
        icon={AlertTriangle}
        title="Invalid reset link"
        subtitle="This password reset link is missing, invalid, or expired"
        footer={
          <Link
            to="/forgot-password"
            className="font-medium text-primary hover:underline"
          >
            Request a new link
          </Link>
        }
      >
        <p className="text-center text-sm text-foreground">
          Please request a new password reset
          email and try again.
        </p>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      icon={Lock}
      title="New password"
      subtitle="Enter your new password below"
    >
      <AuthError>{error}</AuthError>

      <form
        onSubmit={submit}
        className="space-y-4"
      >
        <div className="space-y-2">
          <Label htmlFor="reset-password">
            New password
          </Label>

          <div className="relative">
            <Lock
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />

            <Input
              id="reset-password"
              type="password"
              autoComplete="new-password"
              autoFocus
              placeholder="••••••••"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="h-12 pl-10"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="reset-confirm">
            Confirm password
          </Label>

          <div className="relative">
            <Lock
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />

            <Input
              id="reset-confirm"
              type="password"
              autoComplete="new-password"
              placeholder="••••••••"
              value={confirm}
              onChange={(e) =>
                setConfirm(e.target.value)
              }
              className="h-12 pl-10"
              required
            />
          </div>
        </div>

        <SubmitButton
          busy={busy}
          busyLabel="Resetting..."
        >
          Reset password
        </SubmitButton>
      </form>
    </AuthLayout>
  );
}