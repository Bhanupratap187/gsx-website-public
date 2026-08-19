import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { isExternalHref, isRouteHref } from "@/lib/href";
import { SITE } from "@/content/site";

interface ArrowLinkProps {
  href: string;
  children: string;
  // "up-right" marks links that leave the page, matching the prototype.
  direction?: "right" | "up-right";
  className?: string;
}

export function ArrowLink({
  href,
  children,
  direction = "right",
  className,
}: ArrowLinkProps) {
  const Icon = direction === "right" ? ArrowRight : ArrowUpRight;
  const external = isExternalHref(href);
  const classes = cn(
    "text-accent-text inline-flex items-center gap-2 text-base font-bold hover:underline",
    className,
  );
  const body = (
    <>
      {children}
      {external ? <span className="sr-only"> {SITE.newTabHint}</span> : null}
      <Icon aria-hidden="true" className="size-4" />
    </>
  );

  if (isRouteHref(href)) {
    return (
      <Link href={href} className={classes}>
        {body}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={classes}
    >
      {body}
    </a>
  );
}
