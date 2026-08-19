import type { NumberedItem } from "./types";

export const OPPORTUNITY = {
  kicker: "The opportunity beyond dues",
  title:
    "Your gym creates the relationship. GSX helps you capture more of its value.",
  lede: "Members spend across apparel, meals, groceries, supplements, wellness, longevity and recovery. GSX gives gyms a consent-first way to understand that demand, activate trusted partners and participate in the revenue it creates.",
  link: {
    label: "Watch one member become a revenue journey",
    href: "#experience",
  },
} as const;

export const OPPORTUNITY_STEPS = [
  {
    index: "01",
    title: "Learn real intent",
    body: "Use verified receipts, appointments and activity instead of generic demographic guesses.",
  },
  {
    index: "02",
    title: "Reward the right moment",
    body: "Match relevant brands and services to workouts, check-ins, recovery and goals.",
  },
  {
    index: "03",
    title: "Prove the value",
    body: "Track projected, verified and realized revenue without confusing opportunity with cash earned.",
  },
] as const satisfies readonly NumberedItem[];

export const HOW_IT_WORKS = {
  kicker: "How it works",
  title: "From permission to payout—without losing member trust.",
  lede: "One transparent system connects consent, intelligence, rewards, attribution and revenue.",
} as const;

export const HOW_IT_WORKS_STEPS = [
  {
    index: "01",
    title: "Connect",
    body: "The member joins through the gym's existing signup flow.",
  },
  {
    index: "02",
    title: "Select scope",
    body: "They choose the sources, categories and date range GSX may use.",
  },
  {
    index: "03",
    title: "AI scan",
    body: "Approved receipts and activity become structured purchase intelligence.",
  },
  {
    index: "04",
    title: "Private review",
    body: "Every finding is staged privately before anything is shared.",
  },
  {
    index: "05",
    title: "Approve",
    body: "The member confirms, edits, rejects or deletes each finding.",
  },
  {
    index: "06",
    title: "Activate",
    body: "Relevant offers become rewards tied to real healthy behavior.",
  },
  {
    index: "07",
    title: "Measure",
    body: "GSX tracks projected, verified and realized value separately.",
  },
  {
    index: "08",
    title: "Pay",
    body: "Attributed revenue flows to the gym and its connected partners.",
  },
] as const satisfies readonly NumberedItem[];
