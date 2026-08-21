import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { NavLink } from "@/components/ui/nav-link";
import { SocialIcon } from "@/components/ui/social-icon";
import { FOOTER_GROUPS, SITE, SOCIAL_LINKS } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-line bg-sand border-t">
      <Container className="py-[clamp(44px,4vw,64px)]">
        <NavLink href={SITE.homeHref} className="inline-flex items-center">
          <Logo className="h-14" />
        </NavLink>

        <nav
          aria-label="Footer"
          className="laptop:grid-cols-4 mt-block grid grid-cols-2 gap-x-[clamp(20px,3vw,56px)] gap-y-10"
        >
          {FOOTER_GROUPS.map((group) => (
            <div key={group.title}>
              <h2 className="text-md font-bold tracking-[-0.01em]">
                {group.title}
              </h2>
              <ul className="mt-3.5 flex flex-col">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <NavLink
                      href={item.href}
                      className="text-ink-soft hover:text-blue-ink flex min-h-11 items-center text-base"
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="border-line mt-9 flex flex-wrap items-center justify-between gap-x-6 gap-y-5 border-t pt-[22px]">
          <p className="text-muted-2 max-w-[62ch] text-sm">
            {SITE.copyright} {SITE.illustrativeNotice}
          </p>

          <ul className="flex flex-wrap gap-2">
            {SOCIAL_LINKS.map((social) => (
              <li key={social.platform}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sand-2 text-ink-soft rounded-tile hover:bg-ink flex size-11 items-center justify-center transition-colors hover:text-white"
                >
                  <SocialIcon platform={social.platform} className="size-4" />
                  <span className="sr-only">
                    {social.label} {SITE.newTabHint}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
