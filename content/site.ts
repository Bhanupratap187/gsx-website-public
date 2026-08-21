import type { FooterGroup, NavItem, SocialLink } from "./types";

export const SITE = {
  name: "GymSciencx",
  short: "GSX",
  description:
    "GymSciencx unifies operations, member intelligence, trainer tools, payments and affiliate commerce—helping gyms reduce churn, automate work and earn beyond membership dues.",
  homeHref: "/#top",
  email: "support@gymsciencx.com",
  appUrl: "https://app.gymsciencx.com/login",
  videoLibraryUrl: "https://vimeo.com/user224382016/videos",
  copyright: "© 2026 GymSciencx. All rights reserved.",
  newTabHint: "(opens in a new tab)",
  illustrativeNotice:
    "Illustrative data for product and business-model demonstration.",
} as const;

// The scaffolded routes carry this until real copy lands.
export const PAGE_PLACEHOLDER_NOTICE =
  "Placeholder copy. Every section on this page is scaffolding—replace it with the final content before launch.";

export const ACTIVATE_CTA = {
  label: "ACTIVATE GSX",
  href: SITE.appUrl,
} as const;

// Member App and Trainer OS were separate prototype pages; both now resolve to
// the in-page interactive sections. The nav renders on every route, so its
// fragments are root-relative — a bare #platform would look for that id on the
// current page and find nothing.
export const NAV = [
  { label: "Platform", href: "/#platform" },
  { label: "Member App", href: "/#experience" },
  { label: "Trainer OS", href: "/#trainer-os" },
  { label: "Network", href: "/#ecosystem" },
  { label: "Revenue", href: "/#business-model" },
  { label: "About Us", href: "/about" },
] as const satisfies readonly NavItem[];

export const FOOTER_GROUPS = [
  {
    title: "Product",
    items: [
      { label: "Platform", href: "/#platform" },
      { label: "Member App", href: "/#experience" },
      { label: "Trainer OS", href: "/#trainer-os" },
      { label: "How it works", href: "/#how-it-works" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Videos", href: "/#videos" },
      { label: "Network", href: "/#ecosystem" },
      { label: "Revenue", href: "/#business-model" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Support", href: "/support" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
] as const satisfies readonly FooterGroup[];

export const SOCIAL_LINKS = [
  {
    platform: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/gymsciencx",
  },
  { platform: "x", label: "X", href: "https://x.com/gymsciencx" },
  {
    platform: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/gymsciencx",
  },
  {
    platform: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/gymsciencx",
  },
] as const satisfies readonly SocialLink[];
