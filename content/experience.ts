import type { Finding, Stage } from "./types";

export const EXPERIENCE = {
  kicker: "Interactive experience map",
  title: "See the same journey from both sides.",
  lede: "Select any stage to compare what the member sees with what the gym owner can measure.",
  railLabel: "EXPERIENCE MAP",
  consentNote: {
    title: "Consent before commerce",
    body: "The gym sees approved intelligence—not a member's private inbox.",
  },
  // Appended to any in-mockup control, which walks the map forward rather than
  // doing what its visible label literally says.
  advanceHint: "— continues the interactive walkthrough",
} as const;

export const STAGES = [
  {
    id: "join",
    name: "Join",
    sub: "GSX identity",
    owner: {
      title: "Signup becomes the start of a new revenue relationship.",
      body: "GSX sits above the gym's existing CRM and adds identity, intelligence, offers and attribution.",
      pill: { label: "Private", tone: "blue" },
      stats: [
        {
          kicker: "OBSERVED MEMBER SPEND",
          value: "$0",
          sub: "Waiting for approved data",
          dark: true,
        },
        {
          kicker: "VERIFIED GYM POTENTIAL",
          value: "$0",
          sub: "Not yet approved",
        },
        { kicker: "DATA STATE", value: "Private", sub: "Member controlled" },
      ],
    },
  },
  {
    id: "permission",
    name: "Permission",
    sub: "Member consent",
    owner: {
      title: "Consent comes before intelligence.",
      body: "The member selects the data sources GSX may use. The gym receives only approved, derived signals.",
      pill: { label: "Authorized", tone: "blue" },
      stats: [
        {
          kicker: "OBSERVED MEMBER SPEND",
          value: "$0",
          sub: "Waiting for approved data",
          dark: true,
        },
        {
          kicker: "VERIFIED GYM POTENTIAL",
          value: "$0",
          sub: "Not yet approved",
        },
        { kicker: "DATA STATE", value: "Authorized", sub: "Consent recorded" },
      ],
    },
  },
  {
    id: "discover",
    name: "Discover",
    sub: "AI receipt scan",
    owner: {
      title: "Receipts become measurable member intent.",
      body: "The scanner identifies merchant, product, service, frequency and spend—then shows the evidence behind every match.",
      pill: { label: "Projected", tone: "amber" },
      stats: [
        {
          kicker: "OBSERVED MEMBER SPEND",
          value: "$5,928",
          sub: "Annualized from evidence",
          dark: true,
        },
        {
          kicker: "VERIFIED GYM POTENTIAL",
          value: "$0",
          sub: "Not yet approved",
        },
        { kicker: "DATA STATE", value: "Projected", sub: "3 matches found" },
      ],
    },
  },
  {
    id: "verify",
    name: "Verify",
    sub: "Private review",
    owner: {
      title: "AI proposes. The member verifies.",
      body: "Each finding remains private until the member confirms, edits or rejects it.",
      pill: { label: "Review", tone: "amber" },
      stats: [
        {
          kicker: "OBSERVED MEMBER SPEND",
          value: "$5,928",
          sub: "Annualized from evidence",
          dark: true,
        },
        {
          kicker: "VERIFIED GYM POTENTIAL",
          value: "$543",
          sub: "Annual opportunity",
        },
        { kicker: "DATA STATE", value: "Review", sub: "2 of 3 verified" },
      ],
    },
  },
  {
    id: "activate",
    name: "Activate",
    sub: "Health rewards",
    owner: {
      title: "Loyalty becomes healthy behavior.",
      body: "Wearable activity, gym check-ins and verified nutrition determine when a relevant reward appears.",
      pill: { label: "Activated", tone: "blue" },
      stats: [
        {
          kicker: "OBSERVED MEMBER SPEND",
          value: "$5,928",
          sub: "Annualized from evidence",
          dark: true,
        },
        {
          kicker: "VERIFIED GYM POTENTIAL",
          value: "$543",
          sub: "Annual opportunity",
        },
        { kicker: "DATA STATE", value: "Activated", sub: "3 reward journeys" },
      ],
    },
  },
  {
    id: "value",
    name: "Value",
    sub: "Gym revenue",
    owner: {
      title: "Only settled purchases become realized revenue.",
      body: "The owner sees observed spend, verified opportunity and settled commission as three distinct business states.",
      pill: { label: "Live", tone: "blue" },
      stats: [
        {
          kicker: "OBSERVED MEMBER SPEND",
          value: "$5,928",
          sub: "Annualized from evidence",
          dark: true,
        },
        {
          kicker: "REALIZED GYM REVENUE",
          value: "$42",
          sub: "Settled purchases",
        },
        { kicker: "DATA STATE", value: "Live", sub: "Attribution verified" },
      ],
    },
  },
] as const satisfies readonly Stage[];

// These three findings appear in the member scan screen, the review vault, the
// owner scanner table and the attribution ledger — four renderers, one source.
export const FINDINGS = [
  {
    brand: "alo",
    name: "Alo Yoga",
    category: "Activewear",
    evidence: "8 itemized receipts",
    cadence: "8 orders/year × $138",
    confidence: 96,
    annualValue: "$110",
    status: "verified",
    settledPurchase: "$138 order",
    rate: "10%",
    realized: "$14",
  },
  {
    brand: "glow",
    name: "GlowHaus Medspa",
    category: "Facials + skincare",
    evidence: "16 appointment receipts",
    cadence: "1.3 visits/month × $185",
    confidence: 94,
    annualValue: "$433",
    status: "verified",
    settledPurchase: "$185 service",
    rate: "15%",
    realized: "$28",
  },
  {
    brand: "pura",
    name: "Pura Vida",
    category: "Juices + smoothies",
    evidence: "102 fulfilled orders",
    cadence: "8.5 visits/month × $19",
    confidence: 91,
    annualValue: "$155",
    status: "review",
    settledPurchase: "$38 order",
    rate: "8%",
    realized: "$0",
  },
] as const satisfies readonly Finding[];

export const CONSENT_LEDGER = [
  {
    title: "Receipt intelligence",
    detail: "Merchant, SKU, order amount and transaction date",
    source: "Google inbox",
    state: "Active",
    allowed: true,
  },
  {
    title: "Appointment intelligence",
    detail: "Service, provider location and visit cadence",
    source: "Booking emails",
    state: "Active",
    allowed: true,
  },
  {
    title: "Activity intelligence",
    detail: "Calories, workouts and recovery progress",
    source: "Apple Health",
    state: "Active",
    allowed: true,
  },
  {
    title: "General inbox content",
    detail: "Personal messages and unrelated attachments",
    source: "Excluded",
    state: "Blocked",
    allowed: false,
  },
] as const;

export const CONSENT_SUMMARY =
  "approved loyalty category, cadence, estimated annual spend and activation potential. Never raw inbox access.";

export const SCANNER_STEPS = [
  { index: "01", title: "Receipt", sub: "Raw evidence" },
  { index: "02", title: "Brand + SKU", sub: "Merchant match" },
  { index: "03", title: "Cadence", sub: "Frequency" },
  { index: "04", title: "Annual spend", sub: "Value model" },
  { index: "05", title: "Opportunity", sub: "Reward ready" },
] as const;

export const ONBOARDING_FLOW = [
  { index: "01", title: "Gym signup", sub: "Existing member flow" },
  { index: "02", title: "GSX identity", sub: "Secure SSO" },
  { index: "03", title: "AI intelligence", sub: "Member approved" },
  { index: "04", title: "Gym revenue", sub: "Attributed" },
] as const;

export const TRUST_NOTES = [
  {
    mark: "◎",
    title: "Private by default",
    body: "No scan starts before explicit member permission.",
  },
  {
    mark: "AI",
    title: "Behavior, not guesses",
    body: "Purchase frequency and spend replace generic demographic profiles.",
  },
  {
    mark: "$",
    title: "Revenue ready",
    body: "Every activated offer carries the gym, member and campaign IDs.",
  },
] as const;

export const REWARD_JOURNEYS = [
  {
    index: "01",
    brand: "alo",
    trigger: "15 calories remaining",
    triggerSource: "Wearable activity",
    experience: "Unlock 25% off Alo",
    experienceSource: "Alo Yoga",
    potential: "$110/year",
  },
  {
    index: "02",
    brand: "glow",
    trigger: "2 workouts remaining",
    triggerSource: "GSX gym check-ins",
    experience: "Earn 500 loyalty points",
    experienceSource: "GlowHaus Medspa",
    potential: "$433/year",
  },
  {
    index: "03",
    brand: "pura",
    trigger: "Hard workout completed",
    triggerSource: "Workout + menu nutrition",
    experience: "35g protein smoothie",
    experienceSource: "Pura Vida",
    potential: "$155/year",
  },
] as const;

export const SIGNAL_CHIPS = [
  "Purchase history",
  "Gym activity",
  "Wearable",
  "Nutrition",
] as const;

export const VALUE_LEGEND = [
  { label: "Projected: AI modeled", tone: "amber" },
  { label: "Verified: member approved", tone: "blue" },
  { label: "Realized: settled purchase", tone: "ink" },
] as const;

// $543 is the verified annual potential per connected member from stage 4.
export const CALCULATOR = {
  kicker: "SCALE THE CONNECTED NETWORK",
  perMember: 543,
  min: 100,
  max: 5000,
  step: 100,
  defaultMembers: 1000,
  label: "Connected members",
  caption: "illustrative annual gym revenue at",
  disclaimer:
    "Realized revenue is shown only after an eligible purchase is attributed and settled. The network calculator remains an illustrative model; actual results depend on consent, eligibility, partner terms, conversion, fulfillment and refunds.",
} as const;

export const PHONE_TABS = ["HOME", "REWARDS", "WALLET"] as const;

// One member phone screen per stage, keyed by the same ids as STAGES.
export const MEMBER_SCREENS = {
  join: {
    kicker: "VELOCITY FITNESS × GSX",
    title: "A smarter membership starts here.",
    body: "Connect the brands you already love to the workouts you already do.",
    options: [
      { mark: "G", label: "Continue with Google" },
      { mark: "●", label: "Continue with Apple" },
      { mark: "✉", label: "Use another email", ghost: true },
    ],
    foot: "One secure identity for membership, rewards and goals.",
  },
  permission: {
    kicker: "CONNECT. MOVE. GET REWARDED.",
    title: "Move more. Unlock more.",
    body: "Connect approved purchase and activity data so healthier choices can unlock free perks, member-only discounts and personalized rewards.",
    perks: [
      { title: "FREE PERKS", body: "From brands you already love" },
      { title: "UP TO 25% OFF", body: "Unlocked through activity" },
    ],
    toggles: [
      {
        title: "Receipts + orders",
        sub: "Match favorite brands and unlock discounts",
      },
      {
        title: "Appointments",
        sub: "Earn loyalty rewards at wellness providers",
      },
      {
        title: "Wearable activity",
        sub: "Turn workouts, calories and recovery into perks",
      },
    ],
    cta: "Unlock my rewards",
    foot: "You choose what to share. Pause or delete access anytime.",
  },
  discover: {
    scanningKicker: "SCANNING RECEIPTS",
    scanningTitle: "Reading your evidence.",
    kicker: "SCAN COMPLETE",
    title: "We found what you love.",
    records: "184 records",
    cta: "Review my matches",
    foot: "Personal messages and unrelated content were excluded.",
  },
  verify: {
    kicker: "PRIVATE REVIEW VAULT",
    title: "Confirm your matches.",
    body: "Only approved findings can enter your reward experience.",
    cta: "Approve all 3 matches",
    secondary: "Edit individual findings",
    foot: "Nothing is activated without your approval.",
  },
  activate: {
    badge: "Live reward journey",
    kicker: "TODAY'S NEXT UNLOCK",
    highlight: "15",
    title: " calories away.",
    body: "Finish strong and unlock 25% off Alo.",
    ring: { value: 185, max: 200 },
    rows: [
      {
        brand: "glow",
        title: "2 workouts left",
        sub: "500 GlowHaus points",
        value: "2/4",
      },
      {
        brand: "pura",
        title: "Recovery pick ready",
        sub: "Power Smoothie · 35g protein",
        value: "View",
      },
    ],
    cta: "Open my rewards wallet",
    foot: "Rewards follow real activity, never ad targeting.",
  },
  value: {
    kicker: "GSX REWARDS WALLET",
    highlight: "$212",
    title: " in value unlocked.",
    body: "Your healthy progress now creates real value across brands you already use.",
    wallet: {
      label: "MEMBER REWARD BALANCE",
      amount: "$212.40",
      digits: "2488",
    },
    rows: [
      {
        brand: "alo",
        title: "25% Alo reward",
        sub: "Ready to claim",
        value: "→",
      },
      {
        brand: "glow",
        title: "GlowHaus progress",
        sub: "2 workouts remaining",
        value: "2/4",
      },
    ],
    foot: "Pause, remove or delete at any time.",
  },
} as const;

export const OWNER_PANEL = {
  kicker: "GYM OWNER INTELLIGENCE",
  consentLedgerKicker: "CONSENT LEDGER",
  consentLedgerTitle: "Authorized intelligence scope",
  auditLabel: "Audit trail active",
  scannerKicker: "AI SCANNER",
  scannerTitle: "Evidence becomes structured intelligence",
  scannerCount: "184 records analyzed",
  vaultKicker: "PRIVATE REVIEW VAULT",
  vaultTitle: "Every AI finding needs a decision",
  vaultAction: "Approve all",
  rewardKicker: "REWARD ORCHESTRATION",
  rewardTitle: "One intelligence layer, three timely journeys",
  rewardCount: "3 active",
  impactKicker: "ATTRIBUTED BUSINESS IMPACT",
  impactTitle: "Separate revenue potential from cash earned",
  settlementLabel: "Settlement verified",
  signalResult: "Right offer, right moment",
} as const;
