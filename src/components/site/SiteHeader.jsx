import { Link } from "@tanstack/react-router";
import {
  ClipboardList,
  LogIn,
  LogOut,
  Menu,
  Shield,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

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

  const [scrolled, setScrolled] =
    useState(false);

  const { user } = useAuth();

  const isStaff =
    user?.role === "admin";

  useEffect(() => {
    function handleScroll() {
      setScrolled(
        window.scrollY > 20,
      );
    }

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      },
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, []);

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
    <header
      className={`
        fixed
        inset-x-0
        top-0
        z-50
        border-b
        transition-all
        duration-500
        ${
          scrolled
            ? "border-primary/15 bg-background/95 shadow-[0_12px_40px_-28px_hsl(var(--primary)/0.35)] backdrop-blur-2xl"
            : "border-border/70 bg-background/80 backdrop-blur-xl"
        }
      `}
    >
      {/* top glow */}
      <div
        aria-hidden
        className={`
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-primary/50
          to-transparent
          transition-opacity
          duration-500
          ${
            scrolled
              ? "opacity-100"
              : "opacity-0"
          }
        `}
      />

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 transition-all duration-300 sm:h-20 sm:px-8">
        {/* BRAND */}
        <Link
          to="/"
          className="group flex items-center gap-3"
          onClick={() =>
            setOpen(false)
          }
        >
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 scale-75 rounded-full bg-primary/20 opacity-0 blur-xl transition-all duration-500 group-hover:scale-125 group-hover:opacity-100"
            />

            <img
              src="/images/branding/project-s-logo.png"
              alt="Project S+"
              className="relative h-10 w-10 object-contain transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_10px_hsl(var(--primary)/0.3)] sm:h-12 sm:w-12"
            />
          </div>

          <span className="font-display text-base font-bold uppercase leading-none tracking-[0.18em] text-foreground transition-all duration-300 group-hover:tracking-[0.21em] sm:text-lg">
            Project
            <span className="text-primary">
              {" "}
              S+
            </span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {NAV.map((item) => (
            <Link
              key={item.hash}
              to="/"
              hash={item.hash}
              className="group/nav relative py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-300 hover:text-primary xl:text-xs xl:tracking-[0.2em]"
            >
              {item.label}

              <span
                aria-hidden
                className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover/nav:scale-x-100"
              />
            </Link>
          ))}
        </nav>

        {/* DESKTOP / PRIMARY ACTIONS */}
        <div className="flex items-center gap-2">
          {!user ? (
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="hidden text-[13px] sm:inline-flex"
            >
              <Link to="/login">
                <LogIn className="h-3.5 w-3.5" />

                Login
              </Link>
            </Button>
          ) : null}

          {user ? (
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="hidden text-[13px] sm:inline-flex"
            >
              <Link to="/my-registration">
                <ClipboardList className="h-3.5 w-3.5" />

                My Registration
              </Link>
            </Button>
          ) : null}

          {isStaff ? (
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="hidden text-[13px] text-primary sm:inline-flex"
            >
              <Link to="/admin">
                <Shield className="h-3.5 w-3.5" />

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
              onClick={handleLogout}
              className="hidden text-[13px] hover:bg-destructive/10 hover:text-destructive sm:inline-flex"
            >
              <LogOut className="h-3.5 w-3.5" />

              {loggingOut
                ? "Logging Out..."
                : "Logout"}
            </Button>
          ) : null}

          <Button
            asChild
            size="sm"
            className="group glow-pulse motion-press h-11 px-4 sm:px-6"
          >
            <Link to="/join">
              Register Now
            </Link>
          </Button>

          {/* MOBILE MENU BUTTON */}
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
            className="group motion-press relative grid h-11 w-11 place-items-center overflow-hidden border border-border/70 bg-background/20 text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/55 hover:bg-primary/[0.05] hover:text-primary active:scale-95 lg:hidden"
          >
            <span
              className={`
                absolute
                transition-all
                duration-300
                ${
                  open
                    ? "rotate-90 scale-0 opacity-0"
                    : "rotate-0 scale-100 opacity-100"
                }
              `}
            >
              <Menu className="h-5 w-5" />
            </span>

            <span
              className={`
                absolute
                transition-all
                duration-300
                ${
                  open
                    ? "rotate-0 scale-100 opacity-100"
                    : "-rotate-90 scale-0 opacity-0"
                }
              `}
            >
              <X className="h-5 w-5" />
            </span>
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      <div
        className={`
          grid
          overflow-hidden
          border-t
          bg-background/95
          backdrop-blur-2xl
          transition-all
          duration-500
          ease-out
          lg:hidden
          ${
            open
              ? "grid-rows-[1fr] border-border/70 opacity-100"
              : "grid-rows-[0fr] border-transparent opacity-0"
          }
        `}
      >
        <div className="min-h-0 overflow-hidden">
          <nav className="px-4">
            <ul className="py-2">
              {NAV.map(
                (item, index) => (
                  <li
                    key={item.hash}
                    style={{
                      transitionDelay:
                        open
                          ? `${index * 45}ms`
                          : "0ms",
                    }}
                    className={`
                      transition-all
                      duration-300
                      ${
                        open
                          ? "translate-y-0 opacity-100"
                          : "-translate-y-2 opacity-0"
                      }
                    `}
                  >
                    <Link
                      to="/"
                      hash={item.hash}
                      onClick={() =>
                        setOpen(false)
                      }
                      className="group/mobile flex items-center justify-between border-b border-border/50 py-4.5 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-all duration-300 hover:pl-1 hover:text-primary"
                    >
                      {item.label}

                      <span
                        aria-hidden
                        className="h-1.5 w-1.5 rotate-45 bg-primary/30 transition-all duration-300 group-hover/mobile:scale-125 group-hover/mobile:bg-primary"
                      />
                    </Link>
                  </li>
                ),
              )}

              {!user ? (
                <li
                  className={`
                    transition-all
                    delay-150
                    duration-300
                    ${
                      open
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-2 opacity-0"
                    }
                  `}
                >
                  <Link
                    to="/login"
                    onClick={() =>
                      setOpen(false)
                    }
                    className="flex items-center border-b border-border/50 py-4.5 font-mono text-xs uppercase tracking-[0.18em] text-primary transition-all duration-300 hover:pl-1"
                  >
                    <LogIn className="mr-2 h-4 w-4" />

                    Login
                  </Link>
                </li>
              ) : null}

              {user ? (
                <li
                  className={`
                    transition-all
                    delay-150
                    duration-300
                    ${
                      open
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-2 opacity-0"
                    }
                  `}
                >
                  <Link
                    to="/my-registration"
                    onClick={() =>
                      setOpen(false)
                    }
                    className="flex items-center border-b border-border/50 py-4.5 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-all duration-300 hover:pl-1 hover:text-primary"
                  >
                    <ClipboardList className="mr-2 h-4 w-4" />

                    My Registration
                  </Link>
                </li>
              ) : null}

              {isStaff ? (
                <li
                  className={`
                    transition-all
                    delay-200
                    duration-300
                    ${
                      open
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-2 opacity-0"
                    }
                  `}
                >
                  <Link
                    to="/admin"
                    onClick={() =>
                      setOpen(false)
                    }
                    className="flex items-center border-b border-border/50 py-4.5 font-mono text-xs uppercase tracking-[0.18em] text-primary transition-all duration-300 hover:pl-1"
                  >
                    <Shield className="mr-2 h-4 w-4" />

                    Command Center
                  </Link>
                </li>
              ) : null}

              {user ? (
                <li
                  className={`
                    transition-all
                    delay-200
                    duration-300
                    ${
                      open
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-2 opacity-0"
                    }
                  `}
                >
                  <button
                    type="button"
                    disabled={loggingOut}
                    onClick={handleLogout}
                    className="flex w-full items-center py-4.5 text-left font-mono text-xs uppercase tracking-[0.18em] text-destructive transition-all duration-300 hover:pl-1 hover:text-destructive/80 disabled:cursor-not-allowed disabled:opacity-40"
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
        </div>
      </div>
    </header>
  );
}