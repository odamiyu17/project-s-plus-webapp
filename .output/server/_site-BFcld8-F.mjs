import { __toESM } from "./_runtime.mjs";
import { require_react } from "./_libs/@radix-ui/react-compose-refs+[...].mjs";
import { Link, Outlet } from "./_libs/@tanstack/react-router+[...].mjs";
import { require_jsx_runtime } from "./_libs/@radix-ui/react-label+[...].mjs";
import { Button } from "./_ssr/server-fns-CND7qUSL.mjs";
import { ClipboardList, Mail, Menu, Shield, X } from "./_libs/lucide-react.mjs";
import { useAuth } from "./_ssr/router-BzYIxyQJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_site-BFcld8-F.js
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
	const { user } = useAuth();
	const isStaff = user?.role === "admin";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-3",
					onClick: () => setOpen(false),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/branding/project-s-logo.png",
						alt: "Project S+",
						className: "h-10 w-10 object-contain sm:h-12 sm:w-12"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-sm font-bold uppercase leading-none tracking-[0.22em] text-foreground sm:text-base",
						children: ["Project", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-primary",
							children: [" ", "S+"]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 lg:flex",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						hash: item.hash,
						className: "font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-primary",
						children: item.label
					}, item.hash))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						user ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "ghost",
							size: "sm",
							className: "hidden h-11 rounded-none px-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:bg-secondary/40 hover:text-primary sm:inline-flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/my-registration",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, { className: "mr-2 h-3.5 w-3.5" }), "My Registration"]
							})
						}) : null,
						isStaff ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "ghost",
							size: "sm",
							className: "hidden h-11 rounded-none px-3 font-mono text-[10px] uppercase tracking-[0.2em] text-primary hover:bg-secondary/40 hover:text-primary sm:inline-flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/admin",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "mr-2 h-3.5 w-3.5" }), "Command Center"]
							})
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "glow-pulse h-11 rounded-none px-4 font-mono text-[11px] uppercase tracking-[0.2em] sm:px-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/join",
								children: "Register Now"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": open ? "Close menu" : "Open menu",
							"aria-expanded": open,
							onClick: () => setOpen((value) => !value),
							className: "grid h-11 w-11 place-items-center border border-border text-foreground lg:hidden",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})
					]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "border-t border-border bg-background/95 px-4 lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
				NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					hash: item.hash,
					onClick: () => setOpen(false),
					className: "block border-b border-border/60 py-4 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground",
					children: item.label
				}) }, item.hash)),
				user ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/my-registration",
					onClick: () => setOpen(false),
					className: "flex items-center border-b border-border/60 py-4 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, { className: "mr-2 h-4 w-4" }), "My Registration"]
				}) }) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: isStaff ? "/admin" : "/login",
					onClick: () => setOpen(false),
					className: "flex items-center py-4 font-mono text-xs uppercase tracking-[0.22em] text-primary",
					children: isStaff ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "mr-2 h-4 w-4" }), "Command Center"] }) : "Staff Login"
				}) })
			] })
		}) : null]
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
