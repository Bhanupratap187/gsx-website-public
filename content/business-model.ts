import type { Fact, NumberedItem } from "./types";

export const BUSINESS_MODEL = {
  kicker: "The business model",
  title: "One member relationship. Multiple recurring revenue streams.",
  lede: "GSX combines software, payments, affiliate commerce and AI automation so the gym can earn far beyond monthly dues.",
  quote: "Reduce churn. Automate operations. Unlock new revenue.",
  quoteAttribution: "THE GSX OPERATING THESIS",
  splitKicker: "ILLUSTRATIVE TRAINER-LED PARTNER REVENUE SPLIT",
  splitDisclaimer:
    "Percentages apply to GSX partner revenue generated—not the member's purchase amount. Final economics depend on partner terms.",
} as const;

export const REVENUE_STREAMS = [
  {
    index: "01",
    title: "Affiliate commerce",
    body: "Revenue from matched products, meals, wellness and services.",
  },
  {
    index: "02",
    title: "Payments margin",
    body: "Value created across gym and connected merchant transactions.",
  },
  {
    index: "03",
    title: "Gym software",
    body: "A commerce-enabled CRM layer built for operators and their teams.",
  },
  {
    index: "04",
    title: "AI automation",
    body: "Onboarding, intelligence, outreach and attribution at network scale.",
  },
] as const satisfies readonly NumberedItem[];

export const REVENUE_SPLIT = [
  { label: "Trainer", share: "50%", width: 50 },
  { label: "Gym", share: "25%", width: 25 },
  { label: "Rewards", share: "25%", width: 25 },
] as const;

export const COMPANY = {
  kicker: "About GymSciencx",
  title: "Fitness creates more than workouts. It creates measurable demand.",
  lede: "GymSciencx was built to make the gym the center of a connected fitness economy—where operators run smarter businesses, members get more value, trainers grow, and partners can prove what their demand creates.",
} as const;

export const COMPANY_FACTS = [
  {
    term: "COMPANY CATEGORY",
    detail: "AI operating + revenue layer for fitness",
  },
  {
    term: "CORE MODEL",
    detail: "Software · payments · affiliate commerce · AI automation",
  },
  {
    term: "PRIMARY NETWORK",
    detail: "Gyms · trainers · members · employees · brands · partners",
  },
  {
    term: "DEPLOYMENT",
    detail:
      "Works above an existing gym stack or as the connected GSX platform",
  },
] as const satisfies readonly Fact[];
