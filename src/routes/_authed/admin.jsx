import { createFileRoute } from "@tanstack/react-router";
import AccessDenied from "@/components/admin/AccessDenied";
import AdminDashboard from "@/components/admin/AdminDashboard";
import { useAuth } from "@/lib/AuthContext";
import { listRegistrations } from "@/lib/server-fns";

export const Route = createFileRoute("/_authed/admin")({
  ssr: false,
  loader: () => listRegistrations(),
  // Fresh queue on every visit — entries arrive while staff have the panel open.
  shouldReload: true,
  head: () => ({ meta: [{ title: "Command Center — Project S+" }] }),
  component: AdminPage,
});

function AdminPage() {
  const { authorized, items } = Route.useLoaderData();
  const { user, logout } = useAuth();

  if (!authorized) return <AccessDenied email={user?.email} onSignOut={logout} />;

  return <AdminDashboard items={items} email={user?.email} onSignOut={logout} />;
}