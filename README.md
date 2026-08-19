# GymSciencx

Marketing site for GymSciencx, the AI operating and revenue layer for fitness.

A single long-form marketing page plus legal routes. Statically prerendered, with a small number of interactive islands (the member/owner experience map, the Trainer OS tabs, and a revenue calculator). No backend, no database, no authentication.

---

## Requirements

| Tool    | Version |
| ------- | ------- |
| Node.js | ≥ 20.9  |
| pnpm    | ≥ 10    |

```bash
node -v && pnpm -v
```

## Getting started

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

The site runs at [http://localhost:3000](http://localhost:3000).

## Scripts

| Script           | Purpose                                               |
| ---------------- | ----------------------------------------------------- |
| `pnpm dev`       | Development server (Turbopack)                        |
| `pnpm build`     | Production build                                      |
| `pnpm start`     | Serve the production build                            |
| `pnpm lint`      | ESLint. **Not run by `build`** — Next 16 removed that |
| `pnpm lint:fix`  | ESLint with autofix                                   |
| `pnpm typecheck` | `tsc --noEmit`                                        |
| `pnpm format`    | Prettier across the repo                              |

`pnpm typecheck && pnpm lint && pnpm build` must pass before any pull request.

## Environment variables

| Variable                         | Required | Description                                                                           |
| -------------------------------- | -------- | ------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`           | Yes      | Canonical origin. Drives `metadataBase`, canonical tags, sitemap and Open Graph URLs. |
| `NEXT_PUBLIC_ANALYTICS_PROVIDER` | No       | Analytics provider key. Empty disables analytics entirely.                            |

Copy `.env.example` to `.env.local` for local development. Never commit `.env.local`.

---

## Tech stack

### Runtime

| Package                      | Why                                                                                                                                                                                                                            |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Next.js 16** (App Router)  | React Server Components mean the ~95% of this site that is static ships **zero JavaScript**. The Metadata API, `next/font`, `next/og`, `sitemap.ts` and `robots.ts` cover the entire SEO surface first-party, with no plugins. |
| **React 19**                 | Required by the App Router.                                                                                                                                                                                                    |
| **clsx**                     | Conditional class strings without template-literal soup.                                                                                                                                                                       |
| **tailwind-merge**           | Resolves conflicting Tailwind classes when a variant needs to override a base class. Without it, `px-4` and `px-8` both land in the DOM and specificity decides.                                                               |
| **class-variance-authority** | Typed component variants. Keeps `Button`, `Tag` and card components declarative instead of nested ternaries in `className`.                                                                                                    |
| **lucide-react**             | Icon set. Tree-shaken by Next automatically — only imported icons are bundled.                                                                                                                                                 |

### Development

| Package                                                      | Why                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Tailwind CSS 4**                                           | Zero runtime and atomic output — the whole site ships one small stylesheet regardless of how many sections exist. Its CSS-first `@theme` block is where every design token is declared. Works natively in Server Components, unlike runtime CSS-in-JS. |
| **TypeScript** (strict)                                      | `strict`, `noUncheckedIndexedAccess`, `noImplicitOverride` and `verbatimModuleSyntax` are all on. Content is typed data, so the compiler catches a malformed section before it renders.                                                                |
| **ESLint** + `eslint-config-next` + `eslint-plugin-jsx-a11y` | Correctness and accessibility at lint time. Note `eslint-config-next` already registers the `jsx-a11y` plugin; the config spreads its recommended _rules_ rather than re-registering the plugin, which would throw.                                    |
| **Prettier** + `prettier-plugin-tailwindcss`                 | Formatting, plus deterministic Tailwind class ordering. On a design-heavy codebase this keeps diffs readable.                                                                                                                                          |
| **Husky** + **lint-staged**                                  | Pre-commit gate: lint and format the staged set before it can be committed.                                                                                                                                                                            |

---

## Project structure

```
app/                  Routes, layout, global styles, SEO files
components/
  ui/                 Design-system primitives (server components)
  phone/              Device mockup system
  layout/             Header, footer, mobile navigation
  sections/           One file per page section
  interactive/        Client components ("use client")
content/              All copy, as typed data modules
lib/                  Utilities (cn, JSON-LD builders, constants)
public/               Static assets
```

## Conventions

**Server components by default.** `"use client"` is a deliberate decision, applied to the smallest possible leaf. Marking a section as a client component drags every child into the browser bundle.

**Design tokens are the only source of design values.** Every colour, size, radius and shadow is declared in the `@theme` block in `app/globals.css` and referenced by name. No hardcoded hex values, no raw pixel values, no ad-hoc shadows anywhere else. Inline `style` is reserved for values genuinely computed at runtime, passed as CSS custom properties.

**The accent colour has two tokens and they are not interchangeable.** `--color-blue` (`#0EA2EA`) is for fills, bars, icons and graphics. `--color-blue-ink` (`#0B6F9E`) is for any text on a light background — the brighter blue measures 2.77:1 against the page ground and fails WCAG AA.

**Copy lives in `content/`, not in components.** Components receive typed data and render it. This keeps copy edits to a one-line diff, prevents the same string being duplicated across renderers, and lets page metadata and structured data derive from the same source rather than being retyped.

**Comments explain why, not what.** Use `//` in TypeScript, two to three lines maximum. If code needs a comment to explain what it does, rename things instead.

**Accessibility is not optional.** One `<h1>` per route, no skipped heading levels, real `<button>` and `<a>` elements, visible focus states, ≥44px touch targets, tabular data in real tables, and `prefers-reduced-motion` respected.

---

## Deployment

The build is host-agnostic by design: `output: "standalone"` with no Vercel-only features (no ISR, no edge middleware, no platform-specific image loader or analytics). The same artifact runs on Vercel, DigitalOcean App Platform, or any container host.

```bash
pnpm build
node .next/standalone/server.js
```

## Contributing

Conventional commits, scoped to a single concern:

```
feat(experience-map): add keyboard navigation between stages
fix(header): correct anchor offset when nav wraps
refactor(ui): extract NumberedCard from platform section
```

Pull requests must pass `typecheck`, `lint` and `build`. Any change affecting layout should state which viewport widths were verified.

---

© GymSciencx
