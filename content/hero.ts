import type { HeroBar } from "./types";

export const HERO = {
  kicker: "The AI operating + revenue layer for fitness",
  title: "Turn every gym into an intelligent commerce network.",
  lede: "GymSciencx unifies operations, member intelligence, trainer tools, payments and affiliate commerce—helping gyms reduce churn, automate work and earn beyond membership dues.",
  primaryCta: { label: "EXPLORE THE PLATFORM", href: "#platform" },
  secondaryCta: { label: "VIEW PRODUCT EXPERIENCE", href: "#experience" },
  assurances: [
    "Works above your existing CRM",
    "Member controlled",
    "Closed-loop attribution",
  ],
} as const;

const BARS = [
  { height: 31, tone: "low" },
  { height: 48, tone: "mid" },
  { height: 39, tone: "low" },
  { height: 70, tone: "accent" },
  { height: 54, tone: "mid" },
  { height: 83, tone: "accent" },
  { height: 67, tone: "low" },
  { height: 96, tone: "peak" },
] as const satisfies readonly HeroBar[];

// The floating cards in the hero composition. Bar heights are the prototype's.
export const HERO_VISUAL = {
  intelligence: {
    kicker: "GSX NETWORK INTELLIGENCE",
    value: "$5,928",
    caption: "illustrative annual outside-gym spend discovered",
    bars: BARS,
    footLabel: "Verified potential",
    footValue: "$698/yr",
  },
  command: {
    kicker: "OWNER COMMAND CENTER",
    title: "4 revenue streams",
    sub: "One operating layer",
  },
  status: {
    kicker: "NETWORK STATUS",
    title: "Members · trainers · brands",
  },
  formula: ["Operations", "Intelligence", "Commerce"],
  formulaResult: "Growth beyond dues",
} as const;

export const TRIPTYCH = [
  {
    title: "Operate.",
    body: "Manage locations, staff, trainers, members and workflows from one command center.",
  },
  {
    title: "Retain.",
    body: "Use AI, wearables and member behavior to create a more valuable membership.",
  },
  {
    title: "Monetize.",
    body: "Turn verified demand into attributable payments and affiliate revenue beyond dues.",
  },
] as const;
