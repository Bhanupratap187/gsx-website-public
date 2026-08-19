import type { NumberedItem } from "./types";

export const PRIVACY = {
  kicker: "Consent before commerce",
  title: "Member trust is infrastructure—not fine print.",
  lede: "Authentication never means blanket access. Members choose the exact scope, review every finding and can revoke or delete access.",
  link: { label: "Open the consent experience", href: "#experience" },
} as const;

export const PRIVACY_PRINCIPLES = [
  {
    index: "01",
    title: "Purpose-specific permission",
    body: "Sources, categories and date ranges are visible before authorization.",
  },
  {
    index: "02",
    title: "Private Review Vault",
    body: "AI findings stay private until the member confirms, edits or rejects them.",
  },
  {
    index: "03",
    title: "Derived insight by default",
    body: "Gyms receive approved signals—not raw inboxes, passwords, card data or diagnoses.",
  },
  {
    index: "04",
    title: "Control that continues",
    body: "Members can pause, remove or delete authorized data at any time.",
  },
] as const satisfies readonly NumberedItem[];

export const ACTIVATE = {
  kicker: "Build the next gym economy",
  title: "Operate smarter. Retain more members. Earn beyond dues.",
  lede: "Connect GSX to your existing operation and turn every gym signup into a measurable relationship across fitness, commerce and wellness.",
  primaryLabel: "ACTIVATE GSX",
} as const;
