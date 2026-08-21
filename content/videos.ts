import type { Video } from "./types";

export const VIDEOS_SECTION = {
  kicker: "See GSX in action",
  title: "The product story—built for operators.",
  lede: "Start with the gym-owner onboarding experience, then explore how GSX connects commerce, care and payments beyond the workout.",
  libraryLink: "Explore the GSX video library",
  playFeatured: "Play featured film",
  play: "Play film",
  closeLabel: "Close video",
} as const;

// Posters are copied locally — a vimeocdn URL would be a third-party request at
// first paint, and next/image cannot optimise a remote host we have not allowed.
export const VIDEOS = [
  {
    id: "featured",
    kicker: "FEATURED",
    duration: "2:29",
    title: "The Gym Owner Onboarding Experience",
    vimeoId: "1216539343",
    poster: "/video-onboarding.jpg",
    body: "The clearest overview of how GSX helps a gym connect its operation, discover opportunities and activate a smarter revenue layer.",
  },
  {
    id: "ecosystem",
    kicker: "CONNECTED ECOSYSTEM",
    duration: "1:44",
    title: "Beyond the Workout",
    vimeoId: "1179961296",
    body: "How GSX connects gyms, member demand and wellness partners.",
  },
  {
    id: "payments",
    kicker: "PAYMENTS INFRASTRUCTURE",
    duration: "2:00",
    title: "GSX + Cliq Connect",
    vimeoId: "1212158245",
    poster: "/video-cliq.jpg",
    body: "The payments and relationship layer behind attributable commerce.",
  },
] as const satisfies readonly Video[];
