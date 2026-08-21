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

// Partner marks are real artwork rather than a letter in a tinted tile. Intrinsic
// dimensions travel with the src so next/image can reserve the box.
export interface BrandLogo {
  src: string;
  width: number;
  height: number;
}

// One finding drives the member screens, the scanner table, the review vault
// and the attribution ledger, so it carries every field those four need.
export interface Finding {
  brand: BrandKey;
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

export interface FooterGroup {
  title: string;
  items: readonly NavItem[];
}

export type SocialPlatform = "linkedin" | "x" | "facebook" | "instagram";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
}

// The standalone routes share one intro band. Route metadata is derived from
// metaTitle/metaDescription rather than retyped in each page module.
export interface PageIntro {
  kicker: string;
  title: string;
  lede: string;
  // Effective date, shown under the lede on the legal routes.
  updated?: string;
  metaTitle: string;
  metaDescription: string;
}

// A bullet, optionally opening with a bold lead-in term.
export interface ProsePoint {
  term?: string;
  detail: string;
}

export interface ProseContact {
  label: string;
  value: string;
  href?: string;
}

export interface ProseAddress {
  label: string;
  lines: readonly string[];
}

// A legal clause interleaves prose, lists, subheadings and conspicuous notices
// in whatever order the drafting needs, so a section is an ordered block list
// rather than a fixed set of slots. A bare string is a paragraph.
export type ProseBlock =
  | string
  | { strong: string }
  | { heading: string }
  | { list: readonly ProsePoint[] }
  | { ordered: readonly string[] }
  | { contacts: readonly ProseContact[] }
  | { address: ProseAddress };

export interface ProseSection {
  heading: string;
  blocks: readonly ProseBlock[];
}

export interface Partner {
  name: string;
  // Absent until the artwork lands; the name renders as a wordmark instead.
  logo?: { src: string; width: number; height: number };
}

export interface PartnerGroup {
  label: string;
  // How many marks share a row once the cell is wide enough. A lone mark needs
  // no split, so it is left unset.
  perRow?: 2 | 3;
  partners: readonly Partner[];
}

export interface TeamMember {
  name: string;
  role: string;
  // Intrinsic dimensions travel with the portrait so next/image reserves the box.
  photo: { src: string; width: number; height: number };
  linkedin: string;
}

export interface ContactChannel {
  label: string;
  detail: string;
  href: string;
  body: string;
}
