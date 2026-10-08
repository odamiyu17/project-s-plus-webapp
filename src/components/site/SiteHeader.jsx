import { Link } from "@tanstack/react-router";
import {
  ClipboardList,
  LogIn,
  LogOut,
  Menu,
  Shield,
  X,
} from "lucide-react";
import { useState } from "react";

import { supabase } from "@/api/supabaseClient";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/AuthContext";

const NAV = [
  {
    label: "The Event",
    hash: "tournament",
  },
  {
    label: "Format",
    hash: "format",
  },
  {
    label: "Prizes",
    hash: "prizes",
  },
  {
    label: "Roster Vault",
    hash: "roster",
  },
];

export default function SiteHeader() {
  const [open, setOpen] =
    useState(false);

  const [loggingOut, setLoggingOut] =
    useState(false);

  const { user } = useAuth();

  const isStaff =
    user?.role === "admin";

  async function handleLogout() {
    if (loggingOut) {
      return;
    }

    setLoggingOut(true);

    try {
      const { error } =
        await supabase.auth.signOut();

      if (error) {
        console.error(
          "Logout failed:",
          error,
        );

        return;
      }

      window.location.href = "/";
    } finally {
      setLoggingOut(false);
      setOpen(false);
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-8">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() =>
            setOpen(false)
          }
        >
          <img
            src="/images/branding/project-s-logo.png"
            alt="Project S+"
            className="h-10 w-10 object-contain sm:h-12 sm:w-12"
          />

          <span className="font-display text-sm font-bold uppercase leading-none tracking-[0.22em] text-foreground sm:text-base">
            Project
            <span className="text-primary">
              {" "}
              S+
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.hash}
              to="/"
              hash={item.hash}
              className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {!user ? (
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="hidden h-11 rounded-none px-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:bg-secondary/40 hover:text-primary sm:inline-flex"
            >
              <Link to="/login">
                <LogIn className="mr-2 h-3.5 w-3.5" />

                Login
              </Link>
            </Button>
          ) : null}

          {user ? (
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="hidden h-11 rounded-none px-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:bg-secondary/40 hover:text-primary sm:inline-flex"
            >
              <Link to="/my-registration">
                <ClipboardList className="mr-2 h-3.5 w-3.5" />

                My Registration
              </Link>
            </Button>
          ) : null}

          {isStaff ? (
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="hidden h-11 rounded-none px-3 font-mono text-[10px] uppercase tracking-[0.2em] text-primary hover:bg-secondary/40 hover:text-primary sm:inline-flex"
            >
              <Link to="/admin">
                <Shield className="mr-2 h-3.5 w-3.5" />

                Command Center
              </Link>
            </Button>
          ) : null}

          {user ? (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              disabled={loggingOut}
              onClick={
                handleLogout
              }
              className="hidden h-11 rounded-none px-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:bg-destructive/10 hover:text-destructive sm:inline-flex"
            >
              <LogOut className="mr-2 h-3.5 w-3.5" />

              {loggingOut
                ? "Logging Out..."
                : "Logout"}
            </Button>
          ) : null}

          <Button
            asChild
            className="glow-pulse h-11 rounded-none px-4 font-mono text-[11px] uppercase tracking-[0.2em] sm:px-6"
          >
            <Link to="/join">
              Register Now
            </Link>
          </Button>

          <button
            type="button"
            aria-label={
              open
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={open}
            onClick={() =>
              setOpen(
                (value) => !value,
              )
            }
            className="grid h-11 w-11 place-items-center border border-border text-foreground lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border bg-background/95 px-4 lg:hidden">
          <ul>
            {NAV.map((item) => (
              <li key={item.hash}>
                <Link
                  to="/"
                  hash={item.hash}
                  onClick={() =>
                    setOpen(false)
                  }
                  className="block border-b border-border/60 py-4 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {!user ? (
              <li>
                <Link
                  to="/login"
                  onClick={() =>
                    setOpen(false)
                  }
                  className="flex items-center border-b border-border/60 py-4 font-mono text-xs uppercase tracking-[0.22em] text-primary"
                >
                  <LogIn className="mr-2 h-4 w-4" />

                  Login
                </Link>
              </li>
            ) : null}

            {user ? (
              <li>
                <Link
                  to="/my-registration"
                  onClick={() =>
                    setOpen(false)
                  }
                  className="flex items-center border-b border-border/60 py-4 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground"
                >
                  <ClipboardList className="mr-2 h-4 w-4" />

                  My Registration
                </Link>
              </li>
            ) : null}

            {isStaff ? (
              <li>
                <Link
                  to="/admin"
                  onClick={() =>
                    setOpen(false)
                  }
                  className="flex items-center border-b border-border/60 py-4 font-mono text-xs uppercase tracking-[0.22em] text-primary"
                >
                  <Shield className="mr-2 h-4 w-4" />

                  Command Center
                </Link>
              </li>
            ) : null}

            {user ? (
              <li>
                <button
                  type="button"
                  disabled={
                    loggingOut
                  }
                  onClick={
                    handleLogout
                  }
                  className="flex w-full items-center py-4 text-left font-mono text-xs uppercase tracking-[0.22em] text-destructive transition-colors hover:text-destructive/80 disabled:opacity-50"
                >
                  <LogOut className="mr-2 h-4 w-4" />

                  {loggingOut
                    ? "Logging Out..."
                    : "Logout"}
                </button>
              </li>
            ) : null}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}