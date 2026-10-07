import { UserX } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/AuthContext";

import { AuthLayout } from "./AuthLayout";

export function UserNotRegistered() {
  const { logout } = useAuth();

  return (
    <AuthLayout
      icon={UserX}
      title="Access not granted"
      subtitle="Your account does not have access to this area."
    >
      <p className="mb-6 text-center text-sm text-foreground">
        Contact an administrator for access,
        or sign in with a different account.
      </p>

      <Button
        variant="outline"
        className="h-12 w-full font-medium"
        onClick={logout}
      >
        Sign out
      </Button>
    </AuthLayout>
  );
}