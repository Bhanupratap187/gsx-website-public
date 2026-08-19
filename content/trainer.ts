import type { TrainerTab } from "./types";

export const TRAINER = {
  kicker: "GSX Trainer OS · A gym inside the gym",
  title: "Turn every trainer into a revenue-producing business.",
  lede: "GSX gives independent trainers one workspace to manage clients, packages, billing and rent—then adds verified commerce, brand offers and an AI Coach. The gym retains oversight and participates in the value its community creates.",
  tags: ["Client billing", "Gym rent", "Verified revenue", "AI next actions"],
  splitDisclaimer:
    "Illustrative allocation of GSX third-party commission—not the value of a client purchase. Partner terms, eligibility, refunds and settlement determine actual payouts.",
} as const;

export const TRAINER_TABS = [
  {
    id: "opportunity",
    label: "Opportunity",
    kicker: "START WITH THE TRAINER",
    title:
      "AI builds the operating profile. The trainer approves every source.",
    body: "GSX can identify credentials, insurance, education and past affiliate relationships from explicitly approved sources. Nothing becomes an active business record until the trainer reviews it.",
    points: [
      "Role, location and credential verification",
      "Private review before profile activation",
      "Continuous data sync off by default",
    ],
  },
  {
    id: "revenue",
    label: "Revenue",
    kicker: "CLOSED-LOOP ATTRIBUTION",
    title: "See the revenue clients actually created—not a vanity estimate.",
    body: "Impressions, clicks, orders, attributed sales, commissions, refunds and payouts stay in one ledger. Projected opportunity remains visibly separate from settled trainer earnings.",
    points: [
      "Performance by client, brand and source",
      "Only eligible verified purchases count",
      "Monthly ACH payout visibility",
    ],
  },
  {
    id: "business",
    label: "Business",
    kicker: "THE GYM INSIDE THE GYM",
    title:
      "Run an independent training business without leaving the gym network.",
    body: "Trainers create packages, bill clients, pay gym rent by card or ACH and manage their assigned roster. Gym operators see the relationship without exposing unrelated client records.",
    points: [
      "Packages, recurring billing and card on file",
      "Rent payment and location assignment",
      "Role-based access to assigned clients only",
    ],
  },
  {
    id: "services",
    label: "Services",
    kicker: "BEYOND THE SESSION",
    title: "Connect coaching to the services clients already need.",
    body: "AI Coach recommends the next best action across approved brand offers, qualified physician discovery, telehealth, performance food and wearable-supported challenges.",
    points: [
      "GSX-approved offers with clear earnings disclosure",
      "WHOOP, Oura, Apple Health and Garmin signals",
      "Health and commerce partners fulfill the service",
    ],
  },
] as const satisfies readonly TrainerTab[];

export const TRAINER_SPLIT = [
  { share: "50%", party: "TRAINER" },
  { share: "25%", party: "GYM" },
  { share: "25%", party: "MEMBER REWARD" },
] as const;

// One phone screen per tab, keyed by the same ids so the two stay in step.
export const TRAINER_SCREENS = {
  opportunity: {
    greeting: "GOOD MORNING, MARCUS",
    title: "Build the business behind your coaching.",
    heroLabel: "ESTIMATED OPPORTUNITY",
    heroValue: "$2,779",
    heroUnit: "/mo",
    heroSub: "Modeled from approved profile and client signals.",
    rows: [
      { title: "Gym rent due", sub: "Iron House · Sep 1", value: "$650" },
      { title: "Client spend found", sub: "Outside the gym", value: "$46.6K" },
    ],
    progressLabel: "AI profile onboarding",
    progressValue: 72,
    progressNote: "Approved email, LinkedIn and social only",
  },
  revenue: {
    greeting: "REVENUE · THIS MONTH",
    title: "Actual, not estimated.",
    heroLabel: "ELIGIBLE REVENUE CREATED",
    heroValue: "$3,428",
    heroSub: "trainer earnings",
    heroSubValue: "$1,714",
    rows: [
      { index: "01", title: "Maya Chen", value: "$223" },
      { index: "02", title: "Regenics", value: "$463" },
      { index: "03", title: "Marketplace", value: "$763" },
    ],
    note: {
      title: "Settlement verified",
      body: "Eligible purchases, refunds and payouts stay connected in one ledger.",
    },
  },
  business: {
    greeting: "BUSINESS OPERATIONS",
    title: "Package it. Bill it. Keep coaching.",
    packages: [
      {
        kicker: "PERFORMANCE COACHING",
        detail: "8 sessions · $960",
        state: "ACTIVE",
      },
      {
        kicker: "NUTRITION + RECOVERY",
        detail: "Monthly · $240",
        state: "ACTIVE",
      },
    ],
    cta: "+ CREATE CLIENT PACKAGE",
    card: { kicker: "BUSINESS CARD ON FILE", digits: "•••• 4242" },
  },
  services: {
    greeting: "CONNECTED SERVICES",
    title: "Support the whole client.",
    tiles: [
      { mark: "AI", title: "AI Coach", sub: "Next best revenue move" },
      { mark: "+", title: "Doctors", sub: "Qualified care discovery" },
      { mark: "◓", title: "Food", sub: "Performance meals" },
      { mark: "◉", title: "Wearables", sub: "WHOOP · Oura · Apple" },
    ],
    offer: {
      match: "94% match",
      brand: "Onnit partner offer",
      value: "$328",
      unit: "/mo",
    },
  },
} as const;
