import type { NavItem, NumberedItem, PageIntro, TeamMember } from "./types";

export const ABOUT_INTRO = {
  kicker: "About Us",
  title:
    "We turn the relationship a gym already has into revenue it can measure.",
  lede: "GymSciencx is the operating and revenue layer for fitness. It runs on top of the systems a gym already has—so operators keep members longer, reach them at the right moment, and can prove what it earned.",
  metaTitle: "About GymSciencx",
  metaDescription:
    "Why GymSciencx exists: turning member relationships into measurable revenue without replacing the gym's CRM.",
} as const satisfies PageIntro;

export const ABOUT_MISSION = {
  kicker: "Our mission",
  statement:
    "Gyms should earn more from the community they have already built.",
  body: "GymSciencx exists to turn member relationships into measurable revenue—while improving loyalty and retention rather than spending them.",
  attribution: "THE GSX MISSION",
} as const;

export const ABOUT_CAPABILITIES = {
  kicker: "What we actually do",
  title: "We don't replace your gym CRM. We sit on top of it.",
  lede: "Every capability below runs against member behavior the gym's existing systems already record.",
} as const;

export const ABOUT_CAPABILITY_ITEMS = [
  {
    index: "01",
    title: "Keep members engaged longer",
    body: "Gamification and loyalty loops that raise retention without nagging the member.",
  },
  {
    index: "02",
    title: "Run ads that actually convert",
    body: "Smart Ads powered by real behavior, not assumptions or blast campaigns.",
  },
  {
    index: "03",
    title: "Monetize what you already own",
    body: "The member database becomes a revenue channel through performance-based partnerships.",
  },
  {
    index: "04",
    title: "Prove what works",
    body: "Attribution and reporting that show what converted—and what did not.",
  },
] as const satisfies readonly NumberedItem[];

export const ABOUT_SIMPLE_IDEA = {
  kicker: "ONE SIMPLE IDEA",
  title:
    "The more relevant the engagement, the more valuable the member relationship becomes.",
  points: ["Fewer messages", "Better timing", "Measurable outcomes"],
} as const;

export const ABOUT_DIFFERENCE = {
  kicker: "Why we're different",
  title: "Most gym CRMs optimize for activity. We optimize for outcomes.",
  lede: "Four decisions separate GSX from a marketing tool bolted onto a membership system.",
  groupLabel: "Highlight a difference",
} as const;

export const ABOUT_DIFFERENCE_ITEMS = [
  {
    index: "01",
    title: "Revenue-first by design",
    body: "Built to generate measurable payouts, not vanity engagement or another empty dashboard.",
  },
  {
    index: "02",
    title: "Signal-driven targeting",
    body: "Real member behavior decides who to engage, when, and with what.",
  },
  {
    index: "03",
    title: "Works with your existing CRM",
    body: "Sits alongside the current gym stack—no migration, no change to how the team works.",
  },
  {
    index: "04",
    title: "Designed for members, not marketers",
    body: "Fewer, more relevant interactions—the kind a member is glad to receive.",
  },
] as const satisfies readonly NumberedItem[];

export const ABOUT_BELIEF = {
  kicker: "What we don't believe",
  title: "We don't believe in generic gym marketing.",
  lede: "Most gym marketing tools optimize for volume. We optimize for outcomes.",
  problem: {
    title: "The problem with more marketing",
    points: [
      "Generic campaigns burn trust.",
      "Members tune out.",
      "Operators waste time chasing vanity metrics.",
    ],
  },
  belief: {
    title: "What we believe instead",
    body: "Revenue comes from relevance. Use real member signals to deliver offers and rewards people actually care about.",
    chain: ["Signals", "Timing", "Outcomes"],
  },
} as const;

export const ABOUT_TEAM = {
  kicker: "Our team",
  title: "The people building GSX.",
  lede: "Operators and engineers who have run the businesses this platform is for.",
  // Appended to each name so the profile link reads as more than an icon.
  linkedinLabel: "on LinkedIn",
} as const;

export const ABOUT_TEAM_MEMBERS = [
  {
    name: "Jonathan Moore",
    role: "Chief Executive Officer",
    photo: { src: "/jonathan.jpeg", width: 1200, height: 1168 },
    linkedin: "https://www.linkedin.com/in/jonathan-moore-2222baa",
  },
  {
    name: "Ashish Garg",
    role: "Chief Technology Officer",
    photo: { src: "/ashish.jpeg", width: 800, height: 1200 },
    linkedin:
      "https://www.linkedin.com/in/ashishgarg-creating-voice-first-world",
  },
] as const satisfies readonly TeamMember[];

export const ABOUT_FACTS_HEADING = "The company at a glance";

export const ABOUT_SUPPORT_LINK = {
  label: "Get support",
  href: "/support",
} as const satisfies NavItem;
