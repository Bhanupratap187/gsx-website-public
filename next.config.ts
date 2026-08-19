import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel's builder produces its own server output and fails on the
  // standalone layout; DigitalOcean and Docker still need it (PLAN §10).
  output: process.env.VERCEL ? undefined : "standalone",

  // The harness is excluded at the routing layer rather than by a render-time
  // guard, so the page carries no dead branch and is never served in prod.
  async redirects() {
    if (process.env.NODE_ENV !== "production") return [];
    return [{ source: "/kitchen-sink", destination: "/", permanent: false }];
  },
};

export default nextConfig;
