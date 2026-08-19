import type { FaqItem } from "./types";

export const FAQ_SECTION = {
  kicker: "Common questions",
  title: "What operators ask before activating GSX.",
  lede: "The consent model, the revenue model and what the gym actually receives.",
} as const;

// Every answer is assembled from copy that already exists elsewhere on the
// page. Nothing here introduces a new claim.
export const FAQ = [
  {
    question: "Does GSX replace my existing gym management software?",
    answer:
      "No. GSX works above your existing CRM. It sits above the gym's existing CRM and adds identity, intelligence, offers and attribution, connecting the people, signals and transactions your existing systems leave fragmented.",
  },
  {
    question: "What member data does the gym actually see?",
    answer:
      "The gym receives approved loyalty category, cadence, estimated annual spend and activation potential. Never raw inbox access. Gyms receive approved signals—not raw inboxes, passwords, card data or diagnoses.",
  },
  {
    question: "How do members control what is shared?",
    answer:
      "Authentication never means blanket access. Members choose the exact scope, review every finding and can revoke or delete access. Sources, categories and date ranges are visible before authorization, and members can pause, remove or delete authorized data at any time.",
  },
  {
    question: "How does a gym earn revenue beyond membership dues?",
    answer:
      "Through four streams: affiliate commerce from matched products, meals, wellness and services; payments margin across gym and connected merchant transactions; gym software as a commerce-enabled CRM layer; and AI automation for onboarding, intelligence, outreach and attribution at network scale.",
  },
  {
    question:
      "What is the difference between projected, verified and realized revenue?",
    answer:
      "Projected is AI modeled, verified is member approved, and realized is a settled purchase. GSX tracks all three separately so opportunity is never confused with cash earned. Realized revenue is shown only after an eligible purchase is attributed and settled.",
  },
  {
    question: "How is trainer-led partner revenue split?",
    answer:
      "Illustratively 50% trainer, 25% gym and 25% member reward. Percentages apply to GSX partner revenue generated—not the member's purchase amount. Partner terms, eligibility, refunds and settlement determine actual payouts.",
  },
  {
    question: "What can independent trainers do with GSX?",
    answer:
      "Trainers create packages, bill clients, pay gym rent by card or ACH and manage their assigned roster, with an AI Coach that recommends the next best action. Gym operators see the relationship without exposing unrelated client records.",
  },
  {
    question: "Which wearables and integrations are supported?",
    answer:
      "WHOOP, Oura, Apple Health and Garmin signals, alongside gym management systems, payments and checkout, and affiliate attribution.",
  },
  {
    question: "Does GymSciencx deliver healthcare or fulfil orders?",
    answer:
      "No. GymSciencx coordinates demand and attribution across partner networks. It does not replace the providers or platforms fulfilling care, meals, products or payments.",
  },
] as const satisfies readonly FaqItem[];
