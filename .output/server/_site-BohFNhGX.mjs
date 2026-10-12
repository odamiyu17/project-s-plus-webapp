import { __toESM } from "./_runtime.mjs";
import { require_react } from "./_libs/@radix-ui/react-compose-refs+[...].mjs";
import { Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { require_jsx_runtime } from "./_libs/@radix-ui/react-label+[...].mjs";
import { supabase } from "./_ssr/auth-middleware-CmY4KpCX.mjs";
import { Button, cn } from "./_ssr/server-fns-D7ymjI7_.mjs";
import { ArrowLeft, ArrowRight, Calendar, MapPin, Plus, Ticket, Trophy, Users } from "./_libs/lucide-react.mjs";
import { Route$2 } from "./_ssr/router-CVNC_nBW.mjs";
import { Image } from "./_ssr/image-BwNFCwj5.mjs";
import { useEmblaCarousel } from "./_libs/embla-carousel-react+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_site-BohFNhGX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SectionHeading({ eyebrow, title, description, align = "left", className }) {
	const centered = align === "center";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("max-w-3xl", centered && "mx-auto text-center", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("flex items-center gap-3", centered && "justify-center"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-primary/80" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[10px] uppercase tracking-[0.34em] text-primary sm:text-[11px]",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: "h-1.5 w-1.5 rotate-45 border border-primary/50 bg-primary/10"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-5 font-display text-4xl font-bold uppercase leading-[0.9] tracking-[0.02em] text-foreground sm:text-5xl lg:text-6xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("mt-5 h-px w-24 bg-gradient-to-r from-primary/80 via-primary/35 to-transparent", centered && "mx-auto bg-gradient-to-r from-transparent via-primary/60 to-transparent") }),
			description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
				children: description
			}) : null
		]
	});
}
var BRACKETS = [{
	game: "Mobile Legends: Bang Bang",
	tagline: "5v5 squad bracket",
	image: "/images/site/arena.png",
	imageAlt: "Futuristic obsidian arena floor with glowing emerald energy veins",
	lines: [
		"One squad of five",
		"16 team slots",
		"Group stage, best-of-three",
		"Playoffs single elimination",
		"Grand final best-of-five"
	]
}, {
	game: "TEKKEN 8",
	tagline: "Solo fighter bracket",
	image: "/images/site/fist.png",
	imageAlt: "Bronze fist striking dark stone, sparks fracturing like lightning",
	lines: [
		"Solo entry, no team needed",
		"32 fighter slots",
		"Double elimination",
		"Every set best-of-three",
		"Grand final best-of-five"
	]
}];
var SCHEDULE = [
	{
		date: "Oct 7 – Nov 8",
		label: "Registration window",
		detail: "Free entry for MLBB squads and TEKKEN 8 fighters"
	},
	{
		date: "Nov 14 – 15",
		label: "MLBB group stage",
		detail: "Sixteen squads, best-of-three, played online"
	},
	{
		date: "Nov 21",
		label: "TEKKEN 8 bracket",
		detail: "Double elimination, best-of-three, played online"
	},
	{
		date: "Nov 28",
		label: "Grand finals",
		detail: "Best-of-five, live on the HAGIT stage"
	}
];
function FormatSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "format",
		className: "relative scroll-mt-24 border-b border-border/50 py-20 sm:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.012] to-transparent"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-4 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "02 — Format",
					title: "Two realms, one proving ground",
					description: "Pick your bracket. Both run on the same rulebook: verified rosters, best-of series, and no second chances once the playoff bracket is drawn."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-5 lg:grid-cols-2",
					children: BRACKETS.map((bracket) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "card-interactive card-interactive-glow group relative flex flex-col overflow-hidden border border-border/60 bg-card/45 backdrop-blur-md",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": true,
								className: "pointer-events-none absolute inset-x-8 top-0 z-20 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent opacity-70"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative h-48 overflow-hidden border-b border-border/50 sm:h-56",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
										src: bracket.image,
										alt: bracket.imageAlt,
										fittingType: "fill",
										className: "card-interactive-image absolute inset-0 h-full w-full opacity-60 group-hover:opacity-90"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-transparent" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute bottom-5 left-5 right-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "inline-flex border border-primary/20 bg-background/30 px-3 py-1 backdrop-blur-sm",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-mono text-[9px] uppercase tracking-[0.28em] text-primary sm:text-[10px]",
												children: bracket.tagline
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "card-interactive-shift mt-3 font-display text-2xl font-bold uppercase leading-tight tracking-[0.03em] text-foreground sm:text-3xl",
											children: bracket.game
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "flex-1 p-6 sm:p-7",
								children: bracket.lines.map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "group/row flex items-center gap-4 border-b border-border/35 py-3.5 text-sm text-muted-foreground last:border-b-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[9px] tracking-[0.18em] text-primary/60 transition-colors duration-300 group-hover/row:text-primary",
											children: String(index + 1).padStart(2, "0")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rotate-45 bg-primary transition-all duration-300 group-hover/row:scale-125 group-hover/row:shadow-[0_0_10px_hsl(var(--primary)/0.5)]" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "transition-colors duration-300 group-hover/row:text-foreground",
											children: line
										})
									]
								}, line))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: "pointer-events-none absolute bottom-0 right-0 h-7 w-7 border-b border-r border-primary/20 transition-all duration-300 group-hover:h-10 group-hover:w-10 group-hover:border-primary/40"
							})
						]
					}, bracket.game))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-mono text-[11px] uppercase tracking-[0.32em] text-primary",
							children: "Road to the final"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "h-px flex-1 bg-gradient-to-r from-primary/35 to-transparent"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-8 border-l border-border/50",
						children: SCHEDULE.map((row, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "group relative grid gap-2 py-5 pl-7 sm:grid-cols-[185px_1fr] sm:items-baseline sm:gap-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									className: "absolute -left-[4px] top-[1.65rem] h-2 w-2 rotate-45 border border-primary/40 bg-background transition-all duration-300 group-hover:border-primary group-hover:bg-primary"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									className: "absolute left-0 top-[1.88rem] h-px w-5 bg-primary/45 transition-all duration-300 group-hover:w-7 group-hover:bg-primary"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-[10px] uppercase tracking-[0.22em] text-primary sm:text-[11px]",
									children: [
										String(index + 1).padStart(2, "0"),
										" · ",
										row.date
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-display text-lg font-bold uppercase tracking-[0.04em] text-foreground transition-transform duration-300 group-hover:translate-x-1 sm:text-xl",
									children: row.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block max-w-xl text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80",
									children: row.detail
								})] })
							]
						}, row.label))
					})]
				})
			]
		})]
	});
}
function Reveal({ children, delay = 0, direction = "up", distance = 28, duration = 700, once = true, className = "" }) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const element = ref.current;
		if (!element) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setVisible(true);
				if (once) observer.unobserve(element);
			} else if (!once) setVisible(false);
		}, {
			threshold: .12,
			rootMargin: "0px 0px -40px 0px"
		});
		observer.observe(element);
		return () => {
			observer.disconnect();
		};
	}, [once]);
	function getTransform() {
		if (visible) return "translate3d(0, 0, 0)";
		if (direction === "down") return `translate3d(0, -${distance}px, 0)`;
		if (direction === "left") return `translate3d(${distance}px, 0, 0)`;
		if (direction === "right") return `translate3d(-${distance}px, 0, 0)`;
		return `translate3d(0, ${distance}px, 0)`;
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className,
		style: {
			opacity: visible ? 1 : 0,
			transform: getTransform(),
			transitionProperty: "opacity, transform",
			transitionDuration: `${duration}ms`,
			transitionDelay: `${delay}ms`,
			transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
			willChange: "opacity, transform"
		},
		children
	});
}
var HERO_IMAGE = "/images/site/hero.png";
var SQUAD_SLOTS$1 = 16;
var FIGHTER_SLOTS$1 = 32;
function HeroSection({ entries = [] }) {
	const squads = entries.filter((entry) => entry.game === "mlbb").length;
	const fighters = entries.filter((entry) => entry.game !== "mlbb").length;
	const stats = [
		{
			label: "Prize pool",
			value: "₱60,000"
		},
		{
			label: "MLBB squad slots",
			value: `${Math.max(SQUAD_SLOTS$1 - squads, 0)} left`
		},
		{
			label: "TEKKEN 8 slots",
			value: `${Math.max(FIGHTER_SLOTS$1 - fighters, 0)} left`
		},
		{
			label: "Entry fee",
			value: "₱250"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden border-b border-border/50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
				src: HERO_IMAGE,
				alt: "Esports competitor gripping a mobile device mid-match",
				fittingType: "fill",
				className: "absolute inset-0 h-full w-full scale-[1.03] object-cover opacity-35 mix-blend-luminosity transition-transform duration-[8000ms] ease-out hover:scale-[1.06]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-r from-background/95 via-background/72 to-background/30" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/15 to-background/45" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/[0.025] via-transparent to-primary/[0.012]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "hero-glow pointer-events-none absolute -right-40 top-0 h-[32rem] w-[32rem] rounded-full bg-primary/[0.075] blur-[130px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "hero-glow-delayed pointer-events-none absolute -left-44 bottom-[-8rem] h-[26rem] w-[26rem] rounded-full bg-primary/[0.035] blur-[120px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "hero-energy-line pointer-events-none absolute inset-y-0 left-[58%] hidden w-px rotate-[14deg] bg-gradient-to-b from-transparent via-primary/40 to-transparent lg:block"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "hero-grid pointer-events-none absolute inset-0 opacity-[0.025]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute right-[-2rem] top-20 hidden select-none font-display text-[16rem] font-bold uppercase leading-none tracking-[-0.05em] text-primary/[0.018] xl:block",
				children: "S+"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28 lg:pb-32 lg:pt-32",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-4xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 80,
							distance: 16,
							duration: 500,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hero-rule h-px w-10 bg-primary" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[10px] uppercase tracking-[0.34em] text-primary sm:text-[11px]",
										children: "Hagit Esports Tournament · Season 01"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": true,
										className: "h-1.5 w-1.5 rotate-45 border border-primary/50 bg-primary/10"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 150,
							distance: 22,
							duration: 600,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-6 max-w-5xl font-display text-[clamp(4rem,13vw,10rem)] font-bold uppercase leading-[0.78] tracking-[-0.015em] text-foreground",
								children: [
									"Project",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hero-title-accent relative inline-block text-primary",
										children: "S+"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 200,
							distance: 14,
							duration: 500,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-20 bg-gradient-to-r from-primary via-primary/60 to-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[9px] uppercase tracking-[0.25em] text-primary/60",
									children: "Passion · Purpose · Competition"
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 250,
							distance: 20,
							duration: 600,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl",
								children: "Mobile Legends: Bang Bang squads. TEKKEN 8 solo fighters. One arena where the next HAGIT champion is forged."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 320,
							distance: 18,
							duration: 600,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-col gap-3 sm:flex-row sm:items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									className: "group glow-pulse h-14 rounded-none px-8 font-mono text-[11px] uppercase tracking-[0.22em] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_hsl(var(--primary)/0.24)] active:translate-y-0 active:scale-[0.98]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/join",
										children: ["Register Now", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" })]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "outline",
									className: "h-14 rounded-none border-border/60 bg-card/30 px-8 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/[0.05] hover:text-foreground active:translate-y-0 active:scale-[0.98]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/",
										hash: "roster",
										children: "See the roster"
									})
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 380,
							distance: 15,
							duration: 550,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									className: "mt-[0.35rem] h-1.5 w-1.5 shrink-0 rotate-45 bg-primary/60"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[9px] uppercase leading-relaxed tracking-[0.22em] text-muted-foreground sm:text-[10px]",
									children: "Registration closes Nov 8, 2026 · Online qualifiers, grand finals on-site"
								})]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-16 grid grid-cols-2 gap-3 sm:mt-20 sm:grid-cols-4",
					children: stats.map((stat, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 430 + index * 80,
						distance: 20,
						duration: 550,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-interactive group relative h-full overflow-hidden border border-border/55 bg-card/40 p-5 backdrop-blur-md sm:p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									"aria-hidden": true,
									className: "pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent opacity-70"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									"aria-hidden": true,
									className: "pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/[0.045] blur-2xl transition-all duration-500 group-hover:bg-primary/[0.08]"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "relative font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground transition-colors duration-300 group-hover:text-foreground sm:text-[10px]",
									children: stat.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "card-interactive-shift relative mt-3 font-display text-2xl font-bold uppercase tracking-[0.04em] text-primary sm:text-3xl",
									children: stat.value
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									className: "pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-b border-r border-primary/15 transition-all duration-300 group-hover:h-7 group-hover:w-7 group-hover:border-primary/35"
								})
							]
						})
					}, stat.label))
				})]
			})
		]
	});
}
var PRIZES = [{
	game: "Mobile Legends: Bang Bang",
	total: "₱42,000",
	tiers: [
		{
			place: "Champion",
			amount: "₱25,000"
		},
		{
			place: "Runner-up",
			amount: "₱12,000"
		},
		{
			place: "Third place",
			amount: "₱5,000"
		}
	]
}, {
	game: "TEKKEN 8",
	total: "₱18,000",
	tiers: [
		{
			place: "Champion",
			amount: "₱12,000"
		},
		{
			place: "Runner-up",
			amount: "₱4,000"
		},
		{
			place: "Third place",
			amount: "₱2,000"
		}
	]
}];
function PrizesSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "prizes",
		className: "relative scroll-mt-24 overflow-hidden border-b border-border/50 py-20 sm:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.015] to-transparent"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-4 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "03 — Prizes",
					title: "₱60,000 on the table",
					description: "Paid out in cash, split across both brackets. Champions also carry the first Project S+ title into the next HAGIT circuit event."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-5 lg:grid-cols-2",
					children: PRIZES.map((prize, prizeIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "card-interactive card-interactive-glow group relative overflow-hidden border border-border/60 bg-card/45 p-6 backdrop-blur-md sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": true,
								className: "pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/55 to-transparent opacity-70"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": true,
								className: "pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/[0.055] blur-3xl transition-all duration-500 group-hover:bg-primary/[0.09]"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								"aria-hidden": true,
								className: "pointer-events-none absolute right-5 top-3 font-display text-7xl font-bold leading-none text-primary/[0.035] sm:text-8xl",
								children: ["0", prizeIndex + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex flex-wrap items-start justify-between gap-5 border-b border-border/45 pb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[9px] uppercase tracking-[0.28em] text-primary/70 sm:text-[10px]",
									children: "Prize Pool"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "card-interactive-shift mt-2 font-display text-2xl font-bold uppercase tracking-[0.05em] text-foreground sm:text-3xl",
									children: prize.game
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border border-primary/20 bg-primary/[0.04] px-4 py-3 text-right backdrop-blur-sm transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/[0.07]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[9px] uppercase tracking-[0.24em] text-muted-foreground",
										children: "Total"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 font-display text-2xl font-bold tracking-[0.04em] text-primary sm:text-3xl",
										children: prize.total
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "relative mt-3",
								children: prize.tiers.map((tier, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "group/tier grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-border/35 py-5 last:border-b-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-9 w-9 items-center justify-center border border-primary/15 bg-primary/[0.035] font-mono text-[9px] tracking-[0.16em] text-primary/70 transition-all duration-300 group-hover/tier:border-primary/35 group-hover/tier:text-primary",
											children: String(index + 1).padStart(2, "0")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground transition-all duration-300 group-hover/tier:translate-x-1 group-hover/tier:text-foreground sm:text-[11px]",
											children: tier.place
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display text-xl font-bold tracking-[0.04em] text-primary transition-all duration-300 group-hover/tier:translate-x-1 group-hover/tier:drop-shadow-[0_0_10px_hsl(var(--primary)/0.25)] sm:text-2xl",
											children: tier.amount
										})
									]
								}, tier.place))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: "pointer-events-none absolute bottom-0 right-0 h-7 w-7 border-b border-r border-primary/20 transition-all duration-300 group-hover:h-10 group-hover:w-10 group-hover:border-primary/45"
							})
						]
					}, prize.game))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex max-w-3xl items-start gap-4 border-l border-primary/25 pl-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: "mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-primary/70"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-muted-foreground",
						children: "Prize pool shown in Philippine pesos, paid to the registered captain or fighter. Rosters must match the approved line-up at every stage — substitutes are handled by tournament staff before each series."
					})]
				})
			]
		})]
	});
}
var FIST_IMAGE = "/images/site/fist.png";
var CHECKLIST = [
	"A full squad of five, or a single fighter for TEKKEN 8",
	"In-game IDs for every player on the roster",
	"One contact channel we can reach you on"
];
function RegisterBand() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden border-t border-border/40",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
				src: FIST_IMAGE,
				alt: "Bronze fist striking dark stone with lightning-like sparks",
				fittingType: "fill",
				className: "absolute inset-0 h-full w-full scale-[1.02] opacity-25 mix-blend-luminosity"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/45" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-background/30" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -right-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-primary/[0.055] blur-[120px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							distance: 14,
							duration: 500,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-primary/80" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[10px] uppercase tracking-[0.34em] text-primary sm:text-[11px]",
										children: "05 — Claim your slot"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": true,
										className: "h-1.5 w-1.5 rotate-45 border border-primary/50 bg-primary/10"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 80,
							distance: 18,
							duration: 550,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-5 max-w-3xl font-display text-4xl font-bold uppercase leading-[0.9] tracking-[0.02em] text-foreground sm:text-5xl lg:text-6xl",
								children: "The bracket closes when the slots are gone"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 130,
							distance: 12,
							duration: 500,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-5 h-px w-24 bg-gradient-to-r from-primary/80 via-primary/35 to-transparent" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 170,
							distance: 16,
							duration: 500,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
								children: "Free entry, limited slots. Staff review every entry within 48 hours — the form takes a squad captain about three minutes on a phone."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 230,
							distance: 16,
							duration: 500,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-8 grid gap-3 sm:grid-cols-3",
								children: CHECKLIST.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "card-interactive group relative overflow-hidden border border-border/50 bg-card/35 p-4 backdrop-blur-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 grid h-6 w-6 shrink-0 place-items-center border border-primary/25 bg-primary/[0.04] font-mono text-[8px] text-primary",
											children: String(index + 1).padStart(2, "0")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80",
											children: item
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": true,
										className: "pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b border-r border-primary/15 transition-all duration-300 group-hover:h-6 group-hover:w-6 group-hover:border-primary/35"
									})]
								}, item))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 300,
							distance: 16,
							duration: 550,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-col gap-3 sm:flex-row sm:items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									className: "group glow-pulse h-14 px-8",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/join",
										children: ["Register Now", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "transition-transform duration-300 group-hover:translate-x-1" })]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px]",
									children: "Limited slots · Staff verified"
								})]
							})
						})
					]
				})
			})
		]
	});
}
function FighterList({ fighters }) {
	if (!fighters.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
		distance: 16,
		duration: 500,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "card-interactive card-interactive-glow group relative mt-8 overflow-hidden border border-dashed border-border/60 bg-card/35 p-6 backdrop-blur-md sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[9px] uppercase tracking-[0.22em] text-primary/70",
					children: "Fighter Board"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground",
					children: "No fighters verified yet — the TEKKEN 8 bracket fills up as soon as staff approve the first solo entries."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "pointer-events-none absolute bottom-0 right-0 h-7 w-7 border-b border-r border-primary/20 transition-all duration-300 group-hover:h-10 group-hover:w-10 group-hover:border-primary/40"
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
		children: fighters.map((fighter, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			className: "h-full",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: index * 60,
				distance: 16,
				duration: 500,
				className: "h-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "card-interactive group relative flex h-full items-center gap-4 overflow-hidden border border-border/55 bg-card/40 p-4 backdrop-blur-md sm:p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": true,
							className: "pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent opacity-70"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "card-interactive-icon grid h-11 w-11 shrink-0 place-items-center border border-primary/25 bg-primary/[0.035] font-mono text-[10px] font-medium tracking-[0.18em] text-primary transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/[0.07]",
							children: String(index + 1).padStart(2, "0")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[8px] uppercase tracking-[0.2em] text-primary/60",
									children: "Solo Fighter"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "card-interactive-shift mt-1 truncate font-display text-lg font-bold uppercase tracking-[0.04em] text-foreground",
									children: fighter.in_game_id || fighter.player_name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 truncate font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-300 group-hover:text-foreground/70",
									children: fighter.region || "TEKKEN 8"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": true,
							className: "ml-auto h-1.5 w-1.5 shrink-0 rotate-45 bg-primary/35 transition-all duration-300 group-hover:scale-125 group-hover:bg-primary"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-b border-r border-primary/15 transition-all duration-300 group-hover:h-7 group-hover:w-7 group-hover:border-primary/35"
						})
					]
				})
			})
		}, fighter.id))
	});
}
function OpenSlotCard({ slot }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/join",
		className: "card-interactive card-interactive-glow group relative flex h-full min-h-[260px] flex-col items-center justify-center overflow-hidden border border-dashed border-border/55 bg-card/25 p-6 text-center backdrop-blur-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent opacity-70"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -top-14 right-[-3rem] h-32 w-32 rounded-full bg-primary/[0.035] blur-3xl transition-all duration-500 group-hover:bg-primary/[0.075]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "pointer-events-none absolute right-4 top-3 font-display text-6xl font-bold leading-none text-primary/[0.035]",
				children: String(slot).padStart(2, "0")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "card-interactive-icon relative grid h-12 w-12 place-items-center border border-primary/25 bg-primary/[0.04] text-primary transition-all duration-300 group-hover:border-primary/55 group-hover:bg-primary/[0.08]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
					className: "h-5 w-5",
					strokeWidth: 1.8
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "mt-5 font-mono text-[9px] uppercase tracking-[0.28em] text-primary/70",
				children: [
					"Slot",
					" ",
					String(slot).padStart(2, "0")
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "card-interactive-shift mt-2 font-display text-xl font-bold uppercase tracking-[0.07em] text-foreground",
				children: "Open squad slot"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-2 max-w-[220px] text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80",
				children: "Your squad could be the next verified entry on the board."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "mt-5 inline-flex items-center gap-2 border border-primary/20 bg-primary/[0.03] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.22em] text-primary transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/[0.07]",
				children: ["Claim it", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-x-8 bottom-5 h-px origin-center scale-x-0 bg-gradient-to-r from-transparent via-primary/70 to-transparent transition-transform duration-500 group-hover:scale-x-100"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "pointer-events-none absolute bottom-0 right-0 h-7 w-7 border-b border-r border-primary/15 transition-all duration-300 group-hover:h-10 group-hover:w-10 group-hover:border-primary/40"
			})
		]
	});
}
function getTeamLogoUrl(path) {
	if (!path) return "";
	const { data } = supabase.storage.from("team-logos").getPublicUrl(path);
	return data?.publicUrl ?? "";
}
function SquadCard({ squad, index }) {
	const logoUrl = getTeamLogoUrl(squad.team_logo_path);
	const mainPlayers = Array.isArray(squad.roster) ? squad.roster.filter((player) => player.roster_type === "main" || !player.roster_type) : [];
	const substitutes = Array.isArray(squad.roster) ? squad.roster.filter((player) => player.roster_type === "substitute") : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "card-interactive card-interactive-glow group relative flex h-full flex-col overflow-hidden border border-border/60 bg-card/45 p-5 backdrop-blur-md sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-70"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-primary/[0.05] blur-3xl transition-all duration-500 group-hover:bg-primary/[0.085]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-mono text-[9px] uppercase tracking-[0.26em] text-muted-foreground sm:text-[10px]",
					children: [
						"Squad",
						" ",
						String(index + 1).padStart(2, "0")
					]
				}), squad.team_tag ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "border border-primary/25 bg-primary/[0.04] px-2.5 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-primary transition-all duration-300 group-hover:border-primary/45 group-hover:bg-primary/[0.07] sm:text-[10px]",
					children: squad.team_tag
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-5 flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative grid h-20 w-20 shrink-0 place-items-center overflow-hidden border border-border/60 bg-background/45 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/35 group-hover:bg-background/55 sm:h-24 sm:w-24",
					children: [logoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logoUrl,
						alt: `${squad.team_name || "Team"} logo`,
						className: "h-full w-full object-contain p-2.5 transition-transform duration-500 group-hover:scale-[1.05]"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-7 w-7 text-primary/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: "pointer-events-none absolute inset-x-3 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[9px] uppercase tracking-[0.22em] text-primary/70",
							children: "Team Identity"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "card-interactive-shift mt-1 truncate font-display text-2xl font-bold uppercase leading-tight tracking-[0.03em] text-foreground sm:text-3xl",
							children: squad.team_name || "Unnamed Squad"
						}),
						squad.region ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px]",
							children: squad.region
						}) : null
					]
				})]
			}),
			mainPlayers.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-6 border-t border-border/45 pt-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[9px] uppercase tracking-[0.22em] text-primary/80",
						children: "Main Roster"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground",
						children: String(mainPlayers.length).padStart(2, "0")
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-1",
					children: mainPlayers.map((player, playerIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "group/player grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-border/25 py-2.5 last:border-b-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[8px] tracking-[0.16em] text-primary/50",
								children: String(playerIndex + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "min-w-0 truncate text-sm text-foreground transition-all duration-300 group-hover/player:translate-x-1",
								children: player.ign || `Player ${playerIndex + 1}`
							}),
							player.role ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "shrink-0 border border-primary/15 bg-primary/[0.025] px-2 py-1 font-mono text-[8px] uppercase tracking-[0.16em] text-primary/80 transition-colors duration-300 group-hover/player:border-primary/30 group-hover/player:text-primary sm:text-[9px]",
								children: player.role
							}) : null
						]
					}, `main-${player.ign}-${playerIndex}`))
				})]
			}) : null,
			substitutes.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-5 border-t border-border/35 pt-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground",
						children: "Substitutes"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground",
						children: String(substitutes.length).padStart(2, "0")
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-1",
					children: substitutes.map((player, playerIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "group/player grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-border/20 py-2.5 last:border-b-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-[8px] tracking-[0.16em] text-muted-foreground/60",
								children: ["S", String(playerIndex + 1).padStart(2, "0")]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "min-w-0 truncate text-sm text-muted-foreground transition-all duration-300 group-hover/player:translate-x-1 group-hover/player:text-foreground",
								children: player.ign || `Substitute ${playerIndex + 1}`
							}),
							player.role ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "shrink-0 border border-border/50 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.16em] text-primary/65 transition-colors duration-300 group-hover/player:border-primary/25 group-hover/player:text-primary sm:text-[9px]",
								children: player.role
							}) : null
						]
					}, `sub-${player.ign}-${playerIndex}`))
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "pointer-events-none absolute bottom-0 right-0 h-7 w-7 border-b border-r border-primary/20 transition-all duration-300 group-hover:h-10 group-hover:w-10 group-hover:border-primary/45"
			})
		]
	});
}
var CarouselContext = import_react.createContext(null);
function useCarousel() {
	const context = import_react.useContext(CarouselContext);
	if (!context) throw new Error("useCarousel must be used within a <Carousel />");
	return context;
}
var Carousel = import_react.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
	const [carouselRef, api] = useEmblaCarousel({
		...opts,
		axis: orientation === "horizontal" ? "x" : "y"
	}, plugins);
	const [canScrollPrev, setCanScrollPrev] = import_react.useState(false);
	const [canScrollNext, setCanScrollNext] = import_react.useState(false);
	const onSelect = import_react.useCallback((api) => {
		if (!api) return;
		setCanScrollPrev(api.canScrollPrev());
		setCanScrollNext(api.canScrollNext());
	}, []);
	const scrollPrev = import_react.useCallback(() => {
		api?.scrollPrev();
	}, [api]);
	const scrollNext = import_react.useCallback(() => {
		api?.scrollNext();
	}, [api]);
	const handleKeyDown = import_react.useCallback((event) => {
		if (event.key === "ArrowLeft") {
			event.preventDefault();
			scrollPrev();
		} else if (event.key === "ArrowRight") {
			event.preventDefault();
			scrollNext();
		}
	}, [scrollPrev, scrollNext]);
	import_react.useEffect(() => {
		if (!api || !setApi) return;
		setApi(api);
	}, [api, setApi]);
	import_react.useEffect(() => {
		if (!api) return;
		onSelect(api);
		api.on("reInit", onSelect);
		api.on("select", onSelect);
		return () => {
			api?.off("select", onSelect);
		};
	}, [api, onSelect]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContext.Provider, {
		value: {
			carouselRef,
			api,
			opts,
			orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
			scrollPrev,
			scrollNext,
			canScrollPrev,
			canScrollNext
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			onKeyDownCapture: handleKeyDown,
			className: cn("relative", className),
			role: "region",
			"aria-roledescription": "carousel",
			...props,
			children
		})
	});
});
Carousel.displayName = "Carousel";
var CarouselContent = import_react.forwardRef(({ className, ...props }, ref) => {
	const { carouselRef, orientation } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: carouselRef,
		className: "overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			className: cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className),
			...props
		})
	});
});
CarouselContent.displayName = "CarouselContent";
var CarouselItem = import_react.forwardRef(({ className, ...props }, ref) => {
	const { orientation } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		role: "group",
		"aria-roledescription": "slide",
		className: cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className),
		...props
	});
});
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = import_react.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref,
		variant,
		size,
		className: cn("absolute  h-8 w-8 rounded-full", orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollPrev,
		onClick: scrollPrev,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Previous slide"
		})]
	});
});
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = import_react.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollNext, canScrollNext } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref,
		variant,
		size,
		className: cn("absolute h-8 w-8 rounded-full", orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollNext,
		onClick: scrollNext,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Next slide"
		})]
	});
});
CarouselNext.displayName = "CarouselNext";
var OPEN_SLOT_TILES = 3;
var SLIDE = "basis-full pl-4 sm:basis-1/2 lg:basis-1/3";
function VaultCarousel({ squads = [], openSquads = 0 }) {
	const openSlides = Array.from({ length: Math.min(openSquads, OPEN_SLOT_TILES) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Carousel, {
		opts: { align: "start" },
		className: "relative mt-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-x-0 -top-4 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CarouselContent, { children: [squads.map((squad, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselItem, {
				className: SLIDE,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: index * 70,
					distance: 18,
					duration: 550,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquadCard, {
							squad,
							index
						})
					})
				})
			}, squad.id)), openSlides.map((_, slot) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselItem, {
				className: SLIDE,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: (squads.length + slot) * 70,
					distance: 18,
					duration: 550,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OpenSlotCard, { slot: squads.length + slot + 1 })
					})
				})
			}, `open-${slot}`))] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 150,
				distance: 12,
				duration: 500,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-7 flex flex-col gap-4 border-t border-border/35 pt-5 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselPrevious, { className: "\r\n                static\r\n                left-auto\r\n                top-auto\r\n                h-10\r\n                w-10\r\n                translate-y-0\r\n                rounded-none\r\n                border-border/60\r\n                bg-card/35\r\n                backdrop-blur-md\r\n                transition-all\r\n                duration-300\r\n                hover:-translate-y-0.5\r\n                hover:border-primary/50\r\n                hover:bg-primary/[0.06]\r\n                hover:text-primary\r\n                hover:shadow-[0_0_18px_hsl(var(--primary)/0.12)]\r\n                active:translate-y-0\r\n                active:scale-95\r\n              " }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselNext, { className: "\r\n                static\r\n                right-auto\r\n                top-auto\r\n                h-10\r\n                w-10\r\n                translate-y-0\r\n                rounded-none\r\n                border-border/60\r\n                bg-card/35\r\n                backdrop-blur-md\r\n                transition-all\r\n                duration-300\r\n                hover:-translate-y-0.5\r\n                hover:border-primary/50\r\n                hover:bg-primary/[0.06]\r\n                hover:text-primary\r\n                hover:shadow-[0_0_18px_hsl(var(--primary)/0.12)]\r\n                active:translate-y-0\r\n                active:scale-95\r\n              " })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "h-1.5 w-1.5 rotate-45 bg-primary/60"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground sm:text-[10px]",
							children: "Drag or swipe to scroll the board"
						})]
					})]
				})
			})
		]
	});
}
var SQUAD_IMAGE = "/images/site/squad.png";
var SQUAD_SLOTS = 16;
var FIGHTER_SLOTS = 32;
function TeamsVault({ entries = [] }) {
	const squads = entries.filter((entry) => entry.game === "mlbb");
	const fighters = entries.filter((entry) => entry.game !== "mlbb");
	const openSquads = Math.max(SQUAD_SLOTS - squads.length, 0);
	const openFighters = Math.max(FIGHTER_SLOTS - fighters.length, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "roster",
		className: "relative scroll-mt-24 overflow-hidden border-b border-border/50 py-20 sm:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
				src: SQUAD_IMAGE,
				alt: "",
				fittingType: "fill",
				className: "pointer-events-none absolute inset-0 h-full w-full scale-[1.02] opacity-[0.07] mix-blend-luminosity transition-transform duration-[8000ms] ease-out"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0 bg-gradient-to-b from-background/25 via-background/45 to-background/30"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/[0.02] via-transparent to-transparent"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-4 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "04 — Roster vault",
						title: "The squads already locked in",
						description: "Verified entries only. Every roster is checked by tournament staff before it appears on this board."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 grid gap-3 sm:grid-cols-2 lg:max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-interactive group relative overflow-hidden border border-border/55 bg-card/40 px-5 py-4 backdrop-blur-md",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									"aria-hidden": true,
									className: "pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground",
									children: "MLBB Squads"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex items-baseline gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-3xl font-bold text-primary",
										children: String(squads.length).padStart(2, "0")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground",
										children: [
											"/ ",
											SQUAD_SLOTS,
											" locked"
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 h-px overflow-hidden bg-border/40",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full bg-primary/60 transition-all duration-500",
										style: { width: `${squads.length / SQUAD_SLOTS * 100}%` }
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-interactive group relative overflow-hidden border border-border/55 bg-card/40 px-5 py-4 backdrop-blur-md",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									"aria-hidden": true,
									className: "pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground",
									children: "TEKKEN 8 Fighters"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex items-baseline gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-3xl font-bold text-primary",
										children: String(fighters.length).padStart(2, "0")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground",
										children: [
											"/ ",
											FIGHTER_SLOTS,
											" locked"
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 h-px overflow-hidden bg-border/40",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full bg-primary/60 transition-all duration-500",
										style: { width: `${fighters.length / FIGHTER_SLOTS * 100}%` }
									})
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[9px] uppercase tracking-[0.24em] text-primary/70",
									children: "Team Division"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 font-display text-2xl font-bold uppercase tracking-[0.06em] text-foreground sm:text-3xl",
									children: "MLBB Squads"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "border border-border/50 bg-card/35 px-4 py-2 backdrop-blur-sm",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-primary",
												children: openSquads
											}),
											" ",
											"slots remaining"
										]
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": true,
								className: "mt-5 h-px w-full bg-gradient-to-r from-primary/30 via-border/40 to-transparent"
							}),
							squads.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VaultCarousel, {
								squads,
								openSquads
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "card-interactive card-interactive-glow group relative mt-8 flex flex-col items-start gap-6 overflow-hidden border border-border/60 bg-card/45 p-8 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										"aria-hidden": true,
										className: "pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-mono text-[9px] uppercase tracking-[0.22em] text-primary/70",
											children: "Squad Board"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "card-interactive-shift mt-2 font-display text-2xl font-bold uppercase tracking-[0.05em] text-foreground",
											children: "The vault is still sealed"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground",
											children: [
												"All ",
												SQUAD_SLOTS,
												" squad slots are open. Register your team and your name goes on this board once staff approve your roster."
											]
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										className: "h-12 shrink-0 rounded-none px-6 font-mono text-[10px] uppercase tracking-[0.22em] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_hsl(var(--primary)/0.18)] active:translate-y-0 active:scale-[0.98]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/join",
											children: "Register now"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": true,
										className: "pointer-events-none absolute bottom-0 right-0 h-8 w-8 border-b border-r border-primary/20 transition-all duration-300 group-hover:h-11 group-hover:w-11 group-hover:border-primary/45"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-20 border-t border-border/35 pt-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[9px] uppercase tracking-[0.24em] text-primary/70",
									children: "Solo Division"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 font-display text-2xl font-bold uppercase tracking-[0.06em] text-foreground sm:text-3xl",
									children: "TEKKEN 8 Fighters"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "border border-border/50 bg-card/35 px-4 py-2 backdrop-blur-sm",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-primary",
												children: openFighters
											}),
											" ",
											"slots remaining"
										]
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": true,
								className: "mt-5 h-px w-full bg-gradient-to-r from-primary/30 via-border/40 to-transparent"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FighterList, { fighters })
						]
					})
				]
			})
		]
	});
}
var FACTS = [
	{
		icon: Calendar,
		label: "Dates",
		value: "Nov 14 – 28, 2026",
		detail: "Qualifiers online, finals on stage"
	},
	{
		icon: Trophy,
		label: "Brackets",
		value: "MLBB + TEKKEN 8",
		detail: "16 squads · 32 solo fighters"
	},
	{
		icon: Ticket,
		label: "Entry",
		value: "Free",
		detail: "Registration closes Nov 8, 2026"
	},
	{
		icon: MapPin,
		label: "Venue",
		value: "Online → HAGIT Arena",
		detail: "Grand finals played on-site"
	}
];
function TournamentFacts() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "tournament",
		className: "relative scroll-mt-24 border-b border-border/50 py-20 sm:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/[0.06] to-transparent"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-4 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "01 — The event",
				title: "Forged in the HAGIT arena",
				description: "Two brackets, one stage. Squads of five grind through the MLBB group stage while solo fighters survive a double-elimination TEKKEN 8 bracket — both chasing the first Project S+ title."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: FACTS.map((fact) => {
					const Icon = fact.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "card-interactive card-interactive-glow group relative min-h-[190px] border border-border/60 bg-card/45 p-6 backdrop-blur-md",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": true,
								className: "pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-60"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-10 w-10 items-center justify-center border border-primary/20 bg-primary/[0.05] transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/[0.08]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "card-interactive-icon h-5 w-5 text-primary",
									strokeWidth: 1.7
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground",
								children: fact.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "card-interactive-shift mt-2 font-display text-xl font-bold uppercase tracking-[0.04em] text-foreground",
								children: fact.value
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: fact.detail
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: "pointer-events-none absolute bottom-0 right-0 h-6 w-6 border-b border-r border-primary/20 transition-all duration-300 group-hover:h-8 group-hover:w-8 group-hover:border-primary/40"
							})
						]
					}, fact.label);
				})
			})]
		})]
	});
}
var BACKGROUND_SHAPES = Array.from({ length: 14 }, (_, index) => index);
function LandingPage() {
	const entries = Route$2.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "project-home relative isolate min-h-screen overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"aria-hidden": "true",
			className: "project-home-atmosphere",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "project-home-gradient-glow project-home-gradient-glow-gold" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "project-home-gradient-glow project-home-gradient-glow-green" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "project-home-shapes",
					children: BACKGROUND_SHAPES.map((shape) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { className: "project-home-shape" }, shape))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, { entries }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TournamentFacts, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormatSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrizesSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeamsVault, { entries }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegisterBand, {})
			]
		})]
	});
}
//#endregion
export { LandingPage as component };
