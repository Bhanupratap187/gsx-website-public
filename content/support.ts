import type { PageIntro } from "./types";
import { SITE } from "./site";

export const SUPPORT_INTRO = {
  kicker: "Support",
  title: "Need help?",
  lede: "For any questions, support requests or issues, reach out to us directly.",
  metaTitle: "Support",
  metaDescription:
    "Contact the GymSciencx team about questions, support requests or issues with the platform.",
} as const satisfies PageIntro;

export const SUPPORT_CONTACT = {
  ctaLabel: "Email support",
  email: SITE.email,
  responseNote: "We typically respond within 24–48 hours.",
} as const;
