import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";

const NAV = [
  { label: "The Event", hash: "tournament" },
  { label: "Format", hash: "format" },
  { label: "Prizes", hash: "prizes" },
  { label: "Roster Vault", hash: "roster" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
<img
  src="/images/branding/project-s-logo.png"
  alt="Project S+"
  className="h-10 w-10 object-contain"
/>
              <span className="font-display text-base font-bold uppercase tracking-[0.22em] text-foreground">
                Project<span className="text-primary"> S+</span>
              </span>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              HAGIT Esports Tournament — Mobile Legends: Bang Bang and TEKKEN 8. Built for the players who turn up when
              the lights drop.
            </p>
          </div>

          <nav aria-label="Tournament sections">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">Tournament</p>
            <ul className="mt-5 space-y-3">
              {NAV.map((item) => (
                <li key={item.hash}>
                  <Link
                    to="/"
                    hash={item.hash}
                    className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/join"
                  className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
                >
                  Register
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">Organizers</p>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="mailto:tournaments@projectsplus.gg"
                  className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-3.5 w-3.5" />
                  project.splus.esports@gmail.com
                </a>
              </li>
              <li>
                <Link
                  to="/login"
                  className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
                >
                  Staff login
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            © 2026 Project S+ Esports — HAGIT Tournament
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Free entry · Limited slots
          </p>
        </div>
      </div>
    </footer>
  );
}