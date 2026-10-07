import { Lock, LogIn, Mail } from "lucide-react";
import { useEffect, useState } from "react";

import { supabase } from "@/api/supabaseClient";
import { AuthLayout } from "@/components/auth/AuthLayout";
import {
  AuthError,
  AuthLink,
  GoogleButton,
  OrDivider,
  SubmitButton,
} from "@/components/auth/parts";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { safeReturnTo } from "@/lib/authReturnTo";

export function LoginPage() {
  const returnTo = safeReturnTo();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  // Useful after Google OAuth redirects back to /login.
  useEffect(() => {
    let active = true;

    supabase.auth.getSession().then(({ data }) => {
      if (active && data.session?.user) {
        window.location.href = returnTo;
      }
    });

    return () => {
      active = false;
    };
  }, [returnTo]);

  async function submit(e) {
    e.preventDefault();

    setError("");
    setBusy(true);

    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (error) {
      setError(error.message || "Invalid email or password");
      setBusy(false);
      return;
    }

    window.location.href = returnTo;
  }

  return (
    <AuthLayout
      icon={LogIn}
      title="Welcome back"
      subtitle="Log in to your account"
    >
      <GoogleButton returnTo={returnTo} />

      <OrDivider />

      <AuthError>{error}</AuthError>

      <form onSubmit={submit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="login-email">Email</Label>

          <div className="relative">
            <Mail
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />

            <Input
              id="login-email"
              type="email"
              autoComplete="email"
              autoFocus
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 pl-10"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="login-password">
              Password
            </Label>

            <AuthLink
              to="/forgot-password"
              returnTo={returnTo}
              className="text-xs text-primary hover:underline"
            >
              Forgot password?
            </AuthLink>
          </div>

          <div className="relative">
            <Lock
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />

            <Input
              id="login-password"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 pl-10"
              required
            />
          </div>
        </div>

        <SubmitButton
          busy={busy}
          busyLabel="Logging in..."
        >
          Log in
        </SubmitButton>
      </form>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Don't have an account?{" "}
        <AuthLink to="/register" returnTo={returnTo}>
          Create one
        </AuthLink>
      </p>
    </AuthLayout>
  );
}