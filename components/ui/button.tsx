import type { ReactNode } from "react";
import Link from "next/link";
import { isExternalHref, isRouteHref } from "@/lib/href";
import { SITE } from "@/content/site";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const button = cva(
  "inline-flex items-center gap-3.5 rounded-pill font-extrabold tracking-[0.08em] whitespace-nowrap transition-[color,background-color,border-color,transform,box-shadow] hover:-translate-y-0.5",
  {
    variants: {
      variant: {
        dark: "bg-ink border-ink shadow-cta hover:shadow-cta-hover border text-white",
        blue: "bg-blue text-white hover:bg-ink",
        light: "bg-white text-ink hover:bg-blue hover:text-white",
        outline:
          "border-cta-edge bg-cta-face text-ink border hover:border-blue",
        outlineOnDark: "border border-white/60 text-white hover:bg-white/15",
      },
      size: {
        sm: "min-h-11 gap-2.5 px-[13px] text-2xs tablet:gap-3.5 tablet:px-6 tablet:text-sm",
        md: "min-h-[54px] px-[23px] text-sm",
      },
    },
    defaultVariants: { variant: "dark", size: "md" },
  },
);

interface ButtonProps extends VariantProps<typeof button> {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function Button({
  children,
  href,
  onClick,
  variant,
  size,
  className,
}: ButtonProps) {
  const classes = cn(button({ variant, size }), className);

  if (href) {
    if (isRouteHref(href)) {
      return (
        <Link href={href} className={classes}>
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
        className={classes}
      >
        {children}
        {external ? <span className="sr-only"> {SITE.newTabHint}</span> : null}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
