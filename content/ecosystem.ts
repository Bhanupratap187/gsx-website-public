import type { NumberedItem } from "./types";

export const ECOSYSTEM = {
  kicker: "One connected ecosystem",
  title: "Every participant gets a reason to say yes.",
  lede: "GSX aligns the people creating demand with the partners fulfilling it.",
  owner: {
    kicker: "GYM OWNERS",
    title: "Own the member relationship—and a share of the value.",
    points: [
      "New affiliate and transaction revenue",
      "Better retention through meaningful rewards",
      "Clear performance by member, brand and category",
    ],
    link: { label: "Explore owner economics", href: "#business-model" },
  },
} as const;

export const ECOSYSTEM_PARTICIPANTS = [
  {
    index: "01",
    title: "Members",
    body: "Get free perks, relevant savings and healthier incentives from brands they already choose.",
  },
  {
    index: "02",
    title: "Trainers",
    body: "Turn trusted client relationships into attributable offers and additional income.",
  },
  {
    index: "03",
    title: "Brands",
    body: "Reach verified, high-intent audiences through the gyms and trainers they already trust.",
  },
  {
    index: "04",
    title: "Employees",
    body: "Onboard, communicate, track hours and understand compensation from one operating view.",
  },
  {
    index: "05",
    title: "Commerce partners",
    body: "Connect food, grocery, wellness, longevity, recovery and payments to qualified member demand.",
  },
] as const satisfies readonly NumberedItem[];

export const VERTICALS = {
  kicker: "Demand that already exists",
  title: "GSX connects the gym to where members already spend.",
  lede: "GymSciencx coordinates demand and attribution across partner networks. It does not replace the providers or platforms fulfilling care, meals, products or payments.",
  integrations: [
    "Gym management systems",
    "WHOOP · Oura · Apple Health · Garmin",
    "Payments + checkout",
    "Affiliate attribution",
  ],
} as const;

export const VERTICAL_ITEMS = [
  {
    index: "01",
    title: "Food + nutrition",
    body: "Performance meals, restaurant ordering and nutrition offers tied to member goals.",
  },
  {
    index: "02",
    title: "Health + longevity",
    body: "Qualified discovery and scheduling with independent wellness and healthcare partners.",
  },
  {
    index: "03",
    title: "Grocery + CPG",
    body: "Relevant products and online grocery demand activated through measurable offers.",
  },
  {
    index: "04",
    title: "Apparel + recovery",
    body: "Brands, services and recovery products matched to verified member preferences.",
  },
] as const satisfies readonly NumberedItem[];
