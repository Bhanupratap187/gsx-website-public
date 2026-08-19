import type { TaggedModule } from "./types";

export const PLATFORM = {
  kicker: "The GSX platform",
  title: "One operating layer for the entire fitness business.",
  lede: "Start with your current gym stack. GSX connects the people, signals and transactions your existing systems leave fragmented.",
  formula: [
    "Existing gym CRM",
    "GSX identity + intelligence",
    "Payments + affiliate network",
  ],
  formulaResult: "One measurable business",
} as const;

export const PLATFORM_MODULES = [
  {
    index: "01",
    title: "Owner Command Center",
    body: "One view across locations, members, trainers, employees, brands, revenue and operating data.",
    tags: ["MULTI-LOCATION", "PROFITABILITY", "WORKFORCE"],
  },
  {
    index: "02",
    title: "Member Intelligence",
    body: "Permissioned purchase and wearable signals power personalized rewards, retention and commerce.",
    tags: ["CONSENT", "AI SCAN", "REWARDS"],
  },
  {
    index: "03",
    title: "Trainer OS",
    body: "Independent trainers manage clients, packages, billing, rent, brands, communication and an AI Coach.",
    tags: ["BILLING", "RENT", "AI COACH"],
  },
  {
    index: "04",
    title: "Affiliate Network",
    body: "Gyms and trainers become measurable distribution partners for relevant brands and service providers.",
    tags: ["OFFERS", "ATTRIBUTION", "PAYOUTS"],
  },
  {
    index: "05",
    title: "Payments + Commerce",
    body: "Checkout, processing and a commission ledger connect every eligible purchase to the right participant.",
    tags: ["PAYMENTS", "LEDGER", "BUY NOW"],
  },
] as const satisfies readonly TaggedModule[];
