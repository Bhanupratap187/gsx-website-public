import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { FOOTER_NAV, SITE } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-line bg-sand border-t">
      <Container className="py-[clamp(44px,4vw,64px)]">
        <div className="grid items-start gap-[clamp(24px,3vw,56px)] md:grid-cols-2">
          <a href="#top" className="flex items-center gap-3">
            <Logo />
            <span className="flex flex-col leading-[1.1]">
              <span className="text-md font-bold">{SITE.name}</span>
              <span className="text-muted-2 text-sm">{SITE.footerTagline}</span>
            </span>
          </a>

          <nav
            aria-label="Footer"
            className="text-ink-soft flex flex-wrap gap-x-7 gap-y-3.5 text-base md:justify-end"
          >
            {FOOTER_NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-blue-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-line text-muted-2 mt-9 flex flex-wrap justify-between gap-3 border-t pt-[22px] text-sm">
          <span>{SITE.illustrativeNotice}</span>
          <span>{SITE.copyright}</span>
        </div>
      </Container>
    </footer>
  );
}
