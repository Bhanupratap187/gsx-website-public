import type { NavItem } from "./types";

export const SITE = {
  name: "GymSciencx",
  short: "GSX",
  tagline: "AI REVENUE ENGINE",
  footerTagline: "Better choices. New revenue.",
  description:
    "GymSciencx unifies operations, member intelligence, trainer tools, payments and affiliate commerce—helping gyms reduce churn, automate work and earn beyond membership dues.",
  email: "hello@gymsciencx.com",
  appUrl: "https://app.gymsciencx.com/login",
  videoLibraryUrl: "https://vimeo.com/user224382016/videos",
  copyright: "© 2026 GymSciencx",
  newTabHint: "(opens in a new tab)",
  illustrativeNotice:
    "Illustrative data for product and business-model demonstration.",
} as const;

export const ACTIVATE_CTA = {
  label: "ACTIVATE GSX",
  href: SITE.appUrl,
} as const;

// Member App and Trainer OS were separate prototype pages; both now resolve to
// the in-page interactive sections.
export const NAV = [
  { label: "Platform", href: "#platform" },
  { label: "Member App", href: "#experience" },
  { label: "Trainer OS", href: "#trainer-os" },
  { label: "Network", href: "#ecosystem" },
  { label: "Revenue", href: "#business-model" },
] as const satisfies readonly NavItem[];

export const FOOTER_NAV = [
  { label: "Platform", href: "#platform" },
  { label: "Product experience", href: "#experience" },
  { label: "Trainer OS", href: "#trainer-os" },
  { label: "Network", href: "#ecosystem" },
  { label: "Revenue", href: "#business-model" },
  { label: "Videos", href: "#videos" },
  { label: "Company", href: "#company" },
  { label: "Privacy", href: "/privacy-policy" },
  { label: "Support", href: "/support" },
] as const satisfies readonly NavItem[];
