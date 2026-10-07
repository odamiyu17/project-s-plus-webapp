import { Outlet, createFileRoute } from "@tanstack/react-router";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";

export const Route = createFileRoute("/_site")({ component: SiteLayout });

function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <div className="flex-1 pt-16 sm:pt-20">
        <Outlet />
      </div>
      <SiteFooter />
    </div>
  );
}