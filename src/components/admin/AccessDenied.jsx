import { Link } from "@tanstack/react-router";
import { ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AccessDenied({ email, onSignOut }) {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <ShieldAlert className="mx-auto h-10 w-10 text-primary" strokeWidth={1.6} />
      <h1 className="mt-6 font-display text-3xl font-bold uppercase tracking-[0.04em] text-foreground">
        Staff access only
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        Signed in as {email || "your account"}. This account isn't part of the HAGIT tournament staff team — ask an
        organizer to upgrade your role, or head back to the tournament page.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild variant="outline" className="h-11 rounded-none border-border px-5 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground hover:bg-secondary/40 hover:text-foreground">
          <Link to="/">Back to the arena</Link>
        </Button>
        <Button onClick={onSignOut} variant="ghost" className="h-11 rounded-none px-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground">
          Sign out
        </Button>
      </div>
    </div>
  );
}