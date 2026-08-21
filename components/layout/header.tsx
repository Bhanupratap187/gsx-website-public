import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/ui/nav-link";
import { MobileNav } from "./mobile-nav";
import { ACTIVATE_CTA, NAV, SITE } from "@/content/site";

// One row that never wraps. Measured widths decide each step: the wordmark at
// 480, the full-size CTA at 681, and the seven-item nav at 1181 once it fits.
export function Header() {
  return (
    <header className="border-line bg-sand/85 sticky top-0 z-[60] border-b backdrop-blur-[14px]">
      <Container className="tablet:min-h-[78px] flex min-h-[68px] items-center justify-between gap-[clamp(12px,3vw,48px)] py-3">
        <div className="flex flex-none items-center gap-3">
          <MobileNav />
          <NavLink href={SITE.homeHref} className="flex items-center">
            <Logo priority className="tablet:h-11 desktop:h-12 h-9" />
          </NavLink>
        </div>

        <nav
          aria-label="Primary"
          className="desktop:flex hidden min-w-0 items-center gap-x-[clamp(14px,1.7vw,26px)] text-sm font-semibold"
        >
          {NAV.map((item) => (
            <NavLink
              key={item.label}
              href={item.href}
              className="hover:text-blue-ink whitespace-nowrap"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Button href={ACTIVATE_CTA.href} size="sm" className="flex-none">
          {ACTIVATE_CTA.label}
          <ArrowRight
            aria-hidden="true"
            className="text-blue tablet:block hidden size-4"
          />
        </Button>
      </Container>
    </header>
  );
}
