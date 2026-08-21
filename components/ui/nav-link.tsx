import type { ReactNode } from "react";
import Link from "next/link";
import { isExternalHref, isRouteHref } from "@/lib/href";
import { SITE } from "@/content/site";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

// Route hrefs get next/link so About and Contact prefetch; in-page anchors stay
// a plain <a> so a repeat click scrolls again (see lib/href).
export function NavLink({ href, children, className, onClick }: NavLinkProps) {
  if (isRouteHref(href)) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  const external = isExternalHref(href);

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={className}
      onClick={onClick}
    >
      {children}
      {external ? <span className="sr-only"> {SITE.newTabHint}</span> : null}
    </a>
  );
}
