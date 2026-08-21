import type { BrandKey, BrandLogo } from "./types";

// Every partner logo is centre-weighted, so the avatar can crop to a square
// without clipping the wordmark.
export const BRAND_LOGOS = {
  alo: { src: "/alo.jpg", width: 678, height: 452 },
  glow: { src: "/wellness-center.jpg", width: 554, height: 554 },
  pura: { src: "/pure-vida.jpg", width: 225, height: 225 },
} as const satisfies Record<BrandKey, BrandLogo>;
