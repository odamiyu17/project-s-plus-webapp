import { __toESM } from "./_runtime.mjs";
import { require_react } from "./_libs/@radix-ui/react-compose-refs+[...].mjs";
import { Link, Outlet } from "./_libs/@tanstack/react-router+[...].mjs";
import { require_jsx_runtime } from "./_libs/@radix-ui/react-label+[...].mjs";
import { supabase } from "./_ssr/auth-middleware-CmY4KpCX.mjs";
import { Button } from "./_ssr/server-fns-D7ymjI7_.mjs";
import { ClipboardList, LogIn, LogOut, Mail, Menu, Shield, X } from "./_libs/lucide-react.mjs";
import { useAuth } from "./_ssr/router-DFTBh8PV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_site-hLmw68rT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV$1 = [
	{
		label: "The Event",
		hash: "tournament"
	},
	{
		label: "Format",
		hash: "format"
	},
	{
		label: "Prizes",
		hash: "prizes"
	},
	{
		label: "Roster Vault",
		hash: "roster"
	}
];
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border bg-secondary/20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/branding/project-s-logo.png",
								alt: "Project S+",
								className: "h-10 w-10 object-contain"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-display text-base font-bold uppercase tracking-[0.22em] text-foreground",
								children: ["Project", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: " S+"
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-md text-sm leading-relaxed text-muted-foreground",
							children: "HAGIT Esports Tournament — Mobile Legends: Bang Bang and TEKKEN 8. Built for the players who turn up when the lights drop."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Tournament sections",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] uppercase tracking-[0.3em] text-primary",
							children: "Tournament"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-5 space-y-3",
							children: [NAV$1.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								hash: item.hash,
								className: "font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary",
								children: item.label
							}) }, item.hash)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/join",
								className: "font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary",
								children: "Register"
							}) })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] uppercase tracking-[0.3em] text-primary",
						children: "Organizers"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-5 space-y-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "mailto:tournaments@projectsplus.gg",
							className: "inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3.5 w-3.5" }), "project.splus.esports@gmail.com"]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/login",
							className: "font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary",
							children: "Staff login"
						}) })]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 flex flex-col gap-3 border-t border-border/70 pt-6 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground",
					children: "© 2026 Project S+ Esports — HAGIT Tournament"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground",
					children: "Free entry · Limited slots"
				})]
			})]
		})
	});
}
var NAV = [
	{
		label: "The Event",
		hash: "tournament"
	},
	{
		label: "Format",
		hash: "format"
	},
	{
		label: "Prizes",
		hash: "prizes"
	},
	{
		label: "Roster Vault",
		hash: "roster"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [loggingOut, setLoggingOut] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const { user } = useAuth();
	const isStaff = user?.role === "admin";
	(0, import_react.useEffect)(() => {
		function handleScroll() {
			setScrolled(window.scrollY > 20);
		}
		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	async function handleLogout() {
		if (loggingOut) return;
		setLoggingOut(true);
		try {
			const { error } = await supabase.auth.signOut();
			if (error) {
				console.error("Logout failed:", error);
				return;
			}
			window.location.href = "/";
		} finally {
			setLoggingOut(false);
			setOpen(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `
        fixed
        inset-x-0
        top-0
        z-50
        border-b
        transition-all
        duration-500
        ${scrolled ? "border-primary/15 bg-background/95 shadow-[0_12px_40px_-28px_hsl(var(--primary)/0.35)] backdrop-blur-2xl" : "border-border/70 bg-background/80 backdrop-blur-xl"}
      `,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: `
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
          ${scrolled ? "opacity-100" : "opacity-0"}
        `
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 transition-all duration-300 sm:h-20 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "group flex items-center gap-3",
						onClick: () => setOpen(false),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": true,
								className: "\r\n                absolute\r\n                inset-0\r\n                scale-75\r\n                rounded-full\r\n                bg-primary/20\r\n                opacity-0\r\n                blur-xl\r\n                transition-all\r\n                duration-500\r\n                group-hover:scale-125\r\n                group-hover:opacity-100\r\n              "
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/branding/project-s-logo.png",
								alt: "Project S+",
								className: "\r\n                relative\r\n                h-10\r\n                w-10\r\n                object-contain\r\n                transition-all\r\n                duration-300\r\n                group-hover:scale-105\r\n                group-hover:drop-shadow-[0_0_10px_hsl(var(--primary)/0.3)]\r\n                sm:h-12\r\n                sm:w-12\r\n              "
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "\r\n              font-display\r\n              text-sm\r\n              font-bold\r\n              uppercase\r\n              leading-none\r\n              tracking-[0.22em]\r\n              text-foreground\r\n              transition-all\r\n              duration-300\r\n              group-hover:tracking-[0.25em]\r\n              sm:text-base\r\n            ",
							children: ["Project", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-primary",
								children: [" ", "S+"]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-8 lg:flex",
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							hash: item.hash,
							className: "\r\n                group/nav\r\n                relative\r\n                py-2\r\n                font-mono\r\n                text-[11px]\r\n                uppercase\r\n                tracking-[0.22em]\r\n                text-muted-foreground\r\n                transition-colors\r\n                duration-300\r\n                hover:text-primary\r\n              ",
							children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: "\r\n                  absolute\r\n                  bottom-0\r\n                  left-0\r\n                  h-px\r\n                  w-full\r\n                  origin-left\r\n                  scale-x-0\r\n                  bg-primary\r\n                  transition-transform\r\n                  duration-300\r\n                  ease-out\r\n                  group-hover/nav:scale-x-100\r\n                "
							})]
						}, item.hash))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							!user ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "ghost",
								size: "sm",
								className: "\r\n                hidden\r\n                h-11\r\n                rounded-none\r\n                px-3\r\n                font-mono\r\n                text-[10px]\r\n                uppercase\r\n                tracking-[0.2em]\r\n                text-muted-foreground\r\n                transition-all\r\n                duration-300\r\n                hover:-translate-y-0.5\r\n                hover:bg-secondary/40\r\n                hover:text-primary\r\n                sm:inline-flex\r\n              ",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/login",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { className: "mr-2 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" }), "Login"]
								})
							}) : null,
							user ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "ghost",
								size: "sm",
								className: "\r\n                hidden\r\n                h-11\r\n                rounded-none\r\n                px-3\r\n                font-mono\r\n                text-[10px]\r\n                uppercase\r\n                tracking-[0.2em]\r\n                text-muted-foreground\r\n                transition-all\r\n                duration-300\r\n                hover:-translate-y-0.5\r\n                hover:bg-secondary/40\r\n                hover:text-primary\r\n                sm:inline-flex\r\n              ",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/my-registration",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, { className: "mr-2 h-3.5 w-3.5" }), "My Registration"]
								})
							}) : null,
							isStaff ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "ghost",
								size: "sm",
								className: "\r\n                hidden\r\n                h-11\r\n                rounded-none\r\n                px-3\r\n                font-mono\r\n                text-[10px]\r\n                uppercase\r\n                tracking-[0.2em]\r\n                text-primary\r\n                transition-all\r\n                duration-300\r\n                hover:-translate-y-0.5\r\n                hover:bg-secondary/40\r\n                hover:text-primary\r\n                sm:inline-flex\r\n              ",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/admin",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "mr-2 h-3.5 w-3.5" }), "Command Center"]
								})
							}) : null,
							user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: "ghost",
								size: "sm",
								disabled: loggingOut,
								onClick: handleLogout,
								className: "\r\n                hidden\r\n                h-11\r\n                rounded-none\r\n                px-3\r\n                font-mono\r\n                text-[10px]\r\n                uppercase\r\n                tracking-[0.2em]\r\n                text-muted-foreground\r\n                transition-all\r\n                duration-300\r\n                hover:-translate-y-0.5\r\n                hover:bg-destructive/10\r\n                hover:text-destructive\r\n                disabled:opacity-50\r\n                sm:inline-flex\r\n              ",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "mr-2 h-3.5 w-3.5" }), loggingOut ? "Logging Out..." : "Logout"]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: "\r\n              group\r\n              glow-pulse\r\n              h-11\r\n              rounded-none\r\n              px-4\r\n              font-mono\r\n              text-[11px]\r\n              uppercase\r\n              tracking-[0.2em]\r\n              transition-all\r\n              duration-300\r\n              hover:-translate-y-1\r\n              hover:shadow-[0_0_32px_hsl(var(--primary)/0.2)]\r\n              active:translate-y-0\r\n              active:scale-[0.98]\r\n              sm:px-6\r\n            ",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/join",
									children: "Register Now"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"aria-label": open ? "Close menu" : "Open menu",
								"aria-expanded": open,
								onClick: () => setOpen((value) => !value),
								className: "\r\n              group\r\n              relative\r\n              grid\r\n              h-11\r\n              w-11\r\n              place-items-center\r\n              overflow-hidden\r\n              border\r\n              border-border\r\n              text-foreground\r\n              transition-all\r\n              duration-300\r\n              hover:border-primary/60\r\n              hover:bg-secondary/40\r\n              hover:text-primary\r\n              active:scale-95\r\n              lg:hidden\r\n            ",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `
                absolute
                transition-all
                duration-300
                ${open ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}
              `,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `
                absolute
                transition-all
                duration-300
                ${open ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}
              `,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `
          grid
          overflow-hidden
          border-t
          border-border
          bg-background/95
          backdrop-blur-2xl
          transition-all
          duration-500
          ease-out
          lg:hidden
          ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] border-transparent opacity-0"}
        `,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-h-0 overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "px-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "py-2",
							children: [
								NAV.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									style: { transitionDelay: open ? `${index * 45}ms` : "0ms" },
									className: `
                      transition-all
                      duration-300
                      ${open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}
                    `,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/",
										hash: item.hash,
										onClick: () => setOpen(false),
										className: "\r\n                        group/mobile\r\n                        flex\r\n                        items-center\r\n                        justify-between\r\n                        border-b\r\n                        border-border/60\r\n                        py-4\r\n                        font-mono\r\n                        text-xs\r\n                        uppercase\r\n                        tracking-[0.22em]\r\n                        text-muted-foreground\r\n                        transition-colors\r\n                        duration-300\r\n                        hover:text-primary\r\n                      ",
										children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"aria-hidden": true,
											className: "\r\n                          h-1.5\r\n                          w-1.5\r\n                          rotate-45\r\n                          bg-primary/30\r\n                          transition-all\r\n                          duration-300\r\n                          group-hover/mobile:scale-125\r\n                          group-hover/mobile:bg-primary\r\n                        "
										})]
									})
								}, item.hash)),
								!user ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: `
                    transition-all
                    delay-150
                    duration-300
                    ${open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}
                  `,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/login",
										onClick: () => setOpen(false),
										className: "\r\n                      flex\r\n                      items-center\r\n                      border-b\r\n                      border-border/60\r\n                      py-4\r\n                      font-mono\r\n                      text-xs\r\n                      uppercase\r\n                      tracking-[0.22em]\r\n                      text-primary\r\n                      transition-all\r\n                      duration-300\r\n                      hover:translate-x-1\r\n                    ",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { className: "mr-2 h-4 w-4" }), "Login"]
									})
								}) : null,
								user ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: `
                    transition-all
                    delay-150
                    duration-300
                    ${open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}
                  `,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/my-registration",
										onClick: () => setOpen(false),
										className: "\r\n                      flex\r\n                      items-center\r\n                      border-b\r\n                      border-border/60\r\n                      py-4\r\n                      font-mono\r\n                      text-xs\r\n                      uppercase\r\n                      tracking-[0.22em]\r\n                      text-muted-foreground\r\n                      transition-all\r\n                      duration-300\r\n                      hover:translate-x-1\r\n                      hover:text-primary\r\n                    ",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, { className: "mr-2 h-4 w-4" }), "My Registration"]
									})
								}) : null,
								isStaff ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: `
                    transition-all
                    delay-200
                    duration-300
                    ${open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}
                  `,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/admin",
										onClick: () => setOpen(false),
										className: "\r\n                      flex\r\n                      items-center\r\n                      border-b\r\n                      border-border/60\r\n                      py-4\r\n                      font-mono\r\n                      text-xs\r\n                      uppercase\r\n                      tracking-[0.22em]\r\n                      text-primary\r\n                      transition-all\r\n                      duration-300\r\n                      hover:translate-x-1\r\n                    ",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "mr-2 h-4 w-4" }), "Command Center"]
									})
								}) : null,
								user ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: `
                    transition-all
                    delay-200
                    duration-300
                    ${open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}
                  `,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										disabled: loggingOut,
										onClick: handleLogout,
										className: "\r\n                      flex\r\n                      w-full\r\n                      items-center\r\n                      py-4\r\n                      text-left\r\n                      font-mono\r\n                      text-xs\r\n                      uppercase\r\n                      tracking-[0.22em]\r\n                      text-destructive\r\n                      transition-all\r\n                      duration-300\r\n                      hover:translate-x-1\r\n                      hover:text-destructive/80\r\n                      disabled:opacity-50\r\n                    ",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "mr-2 h-4 w-4" }), loggingOut ? "Logging Out..." : "Logout"]
									})
								}) : null
							]
						})
					})
				})
			})
		]
	});
}
function SiteLayout() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 pt-16 sm:pt-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { SiteLayout as component };
