// Anything carrying a fragment stays a plain <a>, even the root-relative
// `/#platform` form the shared nav uses. next/link dedupes navigation to a URL
// that already matches, so a second click on an in-page anchor does nothing,
// while <a> re-runs fragment navigation every time.
export function isRouteHref(href: string) {
  return href.startsWith("/") && !href.includes("#");
}

// Only absolute http(s) links leave the site. mailto: opens a mail client and
// hash links stay on the page, so neither should claim a tab.
export function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}
