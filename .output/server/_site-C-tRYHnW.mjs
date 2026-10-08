import { __toESM } from "./_runtime.mjs";
import { require_react } from "./_libs/@radix-ui/react-compose-refs+[...].mjs";
import { Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { require_jsx_runtime } from "./_libs/@radix-ui/react-label+[...].mjs";
import { Button, cn } from "./_ssr/server-fns-CND7qUSL.mjs";
import { ArrowLeft, ArrowRight, Calendar, MapPin, Ticket, Trophy } from "./_libs/lucide-react.mjs";
import { Route$2 } from "./_ssr/router-BzYIxyQJ.mjs";
import { Image } from "./_ssr/image-BPY2V0qk.mjs";
import { useEmblaCarousel } from "./_libs/embla-carousel-react+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_site-C-tRYHnW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SectionHeading({ eyebrow, title, description, align = "left", className }) {
	const centered = align === "center";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("max-w-3xl", centered && "mx-auto text-center", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("flex items-center gap-3", centered && "justify-center"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[11px] uppercase tracking-[0.34em] text-primary",
					children: eyebrow
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-5 font-display text-3xl font-bold uppercase leading-[0.95] tracking-[0.02em] text-foreground sm:text-5xl",
				children: title
			}),
			description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg",
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "format",
		className: "scroll-mt-24 border-b border-border/70 py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "02 — Format",
					title: "Two realms, one proving ground",
					description: "Pick your bracket. Both run on the same rulebook: verified rosters, best-of series, and no second chances once the playoff bracket is drawn."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 lg:grid-cols-2",
					children: BRACKETS.map((bracket) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group flex flex-col border border-border/80 bg-card/70",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-44 overflow-hidden border-b border-border/70 sm:h-52",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
									src: bracket.image,
									alt: bracket.imageAlt,
									fittingType: "fill",
									className: "absolute inset-0 h-full w-full opacity-70 transition-opacity duration-500 group-hover:opacity-95"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute bottom-5 left-5 right-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[10px] uppercase tracking-[0.3em] text-primary",
										children: bracket.tagline
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 font-display text-2xl font-bold uppercase leading-tight tracking-[0.02em] text-foreground",
										children: bracket.game
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "flex-1 p-6",
							children: bracket.lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3 border-b border-border/50 py-3 text-sm text-muted-foreground last:border-b-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rotate-45 bg-primary" }), line]
							}, line))
						})]
					}, bracket.game))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-mono text-[11px] uppercase tracking-[0.32em] text-primary",
						children: "Road to the final"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-8 border-l border-border/80",
						children: SCHEDULE.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "relative grid gap-1 py-5 pl-6 sm:grid-cols-[180px_1fr] sm:items-baseline sm:gap-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									className: "absolute left-0 top-6 h-px w-4 bg-primary/60"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[11px] uppercase tracking-[0.24em] text-primary",
									children: row.date
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-display text-lg font-bold uppercase tracking-[0.04em] text-foreground",
									children: row.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-sm text-muted-foreground",
									children: row.detail
								})] })
							]
						}, row.label))
					})]
				})
			]
		})
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
		className: "relative isolate overflow-hidden border-b border-border/70",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
				src: HERO_IMAGE,
				alt: "Esports competitor gripping a mobile device mid-match",
				fittingType: "fill",
				className: "absolute inset-0 h-full w-full opacity-50"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-background via-background/85 to-background/40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-y-0 left-1/2 hidden w-px rotate-[14deg] bg-gradient-to-b from-transparent via-primary/40 to-transparent lg:block"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] uppercase tracking-[0.38em] text-primary sm:text-[11px]",
							children: "Hagit Esports Tournament · Season 01"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-6 font-display text-[clamp(3.2rem,13vw,9.5rem)] font-bold uppercase leading-[0.82] tracking-[0.01em] text-foreground",
						children: ["Project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "S+"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-xl",
						children: "Mobile Legends: Bang Bang squads. TEKKEN 8 solo fighters. One arena where the next HAGIT champion is forged."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-col gap-3 sm:flex-row sm:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "glow-pulse h-14 rounded-none px-8 font-mono text-xs uppercase tracking-[0.22em]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/join",
								children: ["Register Now", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "outline",
							className: "h-14 rounded-none border-border bg-background/40 px-8 font-mono text-xs uppercase tracking-[0.22em] text-foreground hover:bg-secondary/50 hover:text-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								hash: "roster",
								children: "See the roster"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground",
						children: "Registration closes Nov 8, 2026 · Online qualifiers, grand finals on-site"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "mt-14 grid grid-cols-2 gap-px border border-border/70 bg-border/60 sm:mt-16 sm:grid-cols-4",
						children: stats.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-background/80 p-5 backdrop-blur-sm sm:p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground",
								children: stat.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-2 font-display text-xl font-bold uppercase tracking-wide text-primary sm:text-2xl",
								children: stat.value
							})]
						}, stat.label))
					})
				]
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "prizes",
		className: "relative scroll-mt-24 overflow-hidden border-b border-border/70 bg-secondary/20 py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-4 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "03 — Prizes",
					title: "₱60,000 on the table",
					description: "Paid out in cash, split across both brackets. Champions also carry the first Project S+ title into the next HAGIT circuit event."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 lg:grid-cols-2",
					children: PRIZES.map((prize) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-border/80 bg-card/70 p-6 sm:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-baseline justify-between gap-3 border-b border-border/70 pb-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-bold uppercase tracking-[0.06em] text-foreground",
								children: prize.game
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[11px] uppercase tracking-[0.24em] text-primary",
								children: prize.total
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2",
							children: prize.tiers.map((tier) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center justify-between gap-4 border-b border-border/50 py-4 last:border-b-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground",
									children: tier.place
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-xl font-bold tracking-[0.04em] text-primary",
									children: tier.amount
								})]
							}, tier.place))
						})]
					}, prize.game))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground",
					children: "Prize pool shown in Philippine pesos, paid to the registered captain or fighter. Rosters must match the approved line-up at every stage — substitutes are handled by tournament staff before each series."
				})
			]
		})
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
		className: "relative isolate overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
				src: FIST_IMAGE,
				alt: "Bronze fist striking dark stone with lightning-like sparks",
				fittingType: "fill",
				className: "absolute inset-0 h-full w-full opacity-35"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/50" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] uppercase tracking-[0.34em] text-primary",
								children: "05 — Claim your slot"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 font-display text-3xl font-bold uppercase leading-[0.95] tracking-[0.02em] text-foreground sm:text-5xl",
							children: "The bracket closes when the slots are gone"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg",
							children: "Free entry, limited slots. Staff review every entry within 48 hours — the form takes a squad captain about three minutes on a phone."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 space-y-3",
							children: CHECKLIST.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3 text-sm text-muted-foreground sm:text-base",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-primary" }), item]
							}, item))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "glow-pulse mt-10 h-14 rounded-none px-8 font-mono text-xs uppercase tracking-[0.22em]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/join",
								children: ["Register Now", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
							})
						})
					]
				})
			})
		]
	});
}
function FighterList({ fighters }) {
	if (!fighters.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-8 border border-dashed border-border/80 p-6 text-sm leading-relaxed text-muted-foreground",
		children: "No fighters verified yet — the TEKKEN 8 bracket fills up as soon as staff approve the first solo entries."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-8 grid gap-px border border-border/70 bg-border/60 sm:grid-cols-2 lg:grid-cols-3",
		children: fighters.map((fighter, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex items-center gap-4 bg-card/70 p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-10 w-10 shrink-0 place-items-center border border-primary/40 font-display text-sm font-bold text-primary",
				children: String(index + 1).padStart(2, "0")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate font-display text-base font-bold uppercase tracking-[0.04em] text-foreground",
					children: fighter.in_game_id || fighter.player_name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
					children: fighter.region || "TEKKEN 8"
				})]
			})]
		}, fighter.id))
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
function OpenSlotCard({ slot }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/join",
		className: "flex h-full min-h-[220px] flex-col items-center justify-center gap-3 border border-dashed border-border/80 p-6 text-center transition-colors hover:border-primary/60 hover:bg-secondary/20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground",
				children: ["Slot ", String(slot).padStart(2, "0")]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-lg font-bold uppercase tracking-[0.08em] text-foreground",
				children: "Open squad slot"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-primary",
				children: ["Claim it ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
			})
		]
	});
}
function SquadCard({ squad, index }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group flex h-full flex-col border border-border/80 bg-card/70 p-5 transition-all duration-300 hover:border-primary/60 hover:bg-secondary/40",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-mono text-[10px] uppercase tracking-[0.26em] text-muted-foreground",
					children: ["Squad ", String(index + 1).padStart(2, "0")]
				}), squad.team_tag ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "border border-primary/40 px-2 py-1 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-primary",
					children: squad.team_tag
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 font-display text-2xl font-bold uppercase leading-tight tracking-[0.02em] text-foreground",
				children: squad.team_name
			}),
			squad.region ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
				children: squad.region
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-5 space-y-3 border-t border-border/70 pt-4",
				children: squad.roster.map((player, playerIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-baseline justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block truncate text-sm text-foreground",
							children: player.ign
						}), player.game_id ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "block truncate font-mono text-[10px] tracking-[0.14em] text-muted-foreground",
							children: ["ID ", player.game_id]
						}) : null]
					}), player.role ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-primary/90",
						children: player.role
					}) : null]
				}, `${player.ign}-${playerIndex}`))
			})
		]
	});
}
var OPEN_SLOT_TILES = 3;
var SLIDE = "basis-full pl-4 sm:basis-1/2 lg:basis-1/3";
function VaultCarousel({ squads = [], openSquads = 0 }) {
	const openSlides = Array.from({ length: Math.min(openSquads, OPEN_SLOT_TILES) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Carousel, {
		opts: { align: "start" },
		className: "mt-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CarouselContent, { children: [squads.map((squad, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselItem, {
			className: SLIDE,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquadCard, {
				squad,
				index
			})
		}, squad.id)), openSlides.map((_, slot) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselItem, {
			className: SLIDE,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OpenSlotCard, { slot: squads.length + slot + 1 })
		}, `open-${slot}`))] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 flex items-center justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselPrevious, { className: "static left-auto top-auto h-10 w-10 translate-y-0 rounded-none border-border/80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselNext, { className: "static right-auto top-auto h-10 w-10 translate-y-0 rounded-none border-border/80" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground",
				children: "Drag or swipe to scroll the board"
			})]
		})]
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
		className: "relative scroll-mt-24 overflow-hidden border-b border-border/70 py-20 sm:py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
				src: SQUAD_IMAGE,
				alt: "",
				fittingType: "fill",
				className: "pointer-events-none absolute inset-0 h-full w-full opacity-15"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-4 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "04 — Roster vault",
						title: "The squads already locked in",
						description: "Verified entries only. Every roster is checked by tournament staff before it appears on this board."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap gap-x-10 gap-y-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: String(squads.length).padStart(2, "0")
							}),
							" / ",
							SQUAD_SLOTS,
							" MLBB squads locked"
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: String(fighters.length).padStart(2, "0")
							}),
							" / ",
							FIGHTER_SLOTS,
							" TEKKEN fighters locked"
						] })]
					}),
					squads.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VaultCarousel, {
						squads,
						openSquads
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-col items-start gap-6 border border-border/80 bg-card/60 p-8 sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl font-bold uppercase tracking-[0.06em] text-foreground",
							children: "The vault is still sealed"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground",
							children: [
								"All ",
								SQUAD_SLOTS,
								" squad slots are open. Register your five and your name goes on this board the moment staff approve your roster."
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "h-12 shrink-0 rounded-none px-6 font-mono text-[11px] uppercase tracking-[0.22em]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/join",
								children: "Register now"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-bold uppercase tracking-[0.08em] text-foreground sm:text-2xl",
								children: "TEKKEN 8 fighters"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground",
								children: [openFighters, " slots remaining"]
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "tournament",
		className: "scroll-mt-24 border-b border-border/70 py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "01 — The event",
				title: "Forged in the HAGIT arena",
				description: "Two brackets, one stage. Squads of five grind through the MLBB group stage while solo fighters survive a double-elimination TEKKEN 8 bracket — both chasing the first Project S+ title."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-px border border-border/70 bg-border/60 sm:grid-cols-2 lg:grid-cols-4",
				children: FACTS.map((fact) => {
					const Icon = fact.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-card/70 p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "h-5 w-5 text-primary",
								strokeWidth: 1.7
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground",
								children: fact.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-display text-lg font-bold uppercase tracking-[0.04em] text-foreground",
								children: fact.value
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: fact.detail
							})
						]
					}, fact.label);
				})
			})]
		})
	});
}
function LandingPage() {
	const entries = Route$2.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, { entries }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TournamentFacts, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormatSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrizesSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeamsVault, { entries }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegisterBand, {})
	] });
}
//#endregion
export { LandingPage as component };
