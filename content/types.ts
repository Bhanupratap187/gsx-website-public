// Shared shapes for every content module. Arrays are readonly so modules can
// close with `as const satisfies readonly T[]` and have the compiler enforce them.

export interface NavItem {
  label: string;
  href: string;
}

export interface NumberedItem {
  index: string;
  title: string;
  body: string;
}

export interface TaggedModule extends NumberedItem {
  tags: readonly string[];
}

export interface StatItem {
  kicker: string;
  value: string;
  sub: string;
  dark?: boolean;
}

export type PillTone = "blue" | "amber";

// The hero chart alternates two washes and picks out three bars; height alone
// cannot express that, so each bar carries its own tone.
export type BarTone = "low" | "mid" | "accent" | "peak";

export interface HeroBar {
  height: number;
  tone: BarTone;
}

export interface Stage {
  id: string;
  name: string;
  sub: string;
  owner: {
    title: string;
    body: string;
    pill: { label: string; tone: PillTone };
    stats: readonly StatItem[];
  };
}

export type BrandKey = "alo" | "glow" | "pura";

// One finding drives the member screens, the scanner table, the review vault
// and the attribution ledger, so it carries every field those four need.
export interface Finding {
  brand: BrandKey;
  mark: string;
  name: string;
  category: string;
  evidence: string;
  cadence: string;
  confidence: number;
  annualValue: string;
  status: "verified" | "review";
  settledPurchase: string;
  rate: string;
  realized: string;
}

export interface TrainerTab {
  id: string;
  label: string;
  kicker: string;
  title: string;
  body: string;
  points: readonly string[];
}

export interface Video {
  id: string;
  kicker: string;
  duration: string;
  title: string;
  body: string;
  // Both arrive together; until they do the facade renders a flat placeholder.
  vimeoId?: string;
  poster?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Fact {
  term: string;
  detail: string;
}

export interface MemberOption {
  mark: string;
  label: string;
  ghost?: boolean;
}
