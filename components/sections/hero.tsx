import { ArrowDownRight, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { HERO } from "@/content/hero";
import { HeroVisual } from "./hero-visual";

// Breakpoints here are the live site's own (680 / 940 / 1180), not Tailwind's
// scale — its hero grid, width and padding all step at those three widths.
export function Hero() {
  return (
    <section id="top" className="relative overflow-x-clip">
      <div
        aria-hidden="true"
        className="laptop:block pointer-events-none absolute top-[5%] right-[-10%] -z-10 hidden size-[620px] rounded-full bg-[radial-gradient(circle,var(--color-glow),transparent_68%)] blur-[4px]"
      />
      <Container className="tablet:px-gutter tablet:w-[min(100%-40px,1120px)] tablet:pt-20 laptop:grid-cols-[1fr_460px] laptop:items-center desktop:min-h-[780px] desktop:w-[min(var(--container-site),100%_-_var(--spacing-shell))] desktop:grid-cols-[minmax(0,1.03fr)_minmax(440px,0.97fr)] desktop:gap-[clamp(48px,7vw,112px)] desktop:pt-23 desktop:pb-24 grid w-[calc(100%-28px)] grid-cols-1 gap-8 px-1 pt-16 pb-[72px]">
        <div className="laptop:max-w-[790px] max-w-[850px] min-w-0">
          <p className="text-kicker text-blue-ink font-extrabold tracking-[0.13em] uppercase">
            {HERO.kicker}
          </p>
          <h1 className="text-display mt-[15px] font-extrabold">
            {HERO.title}
          </h1>
          <p className="text-lede text-muted mt-[25px] max-w-177.5">
            {HERO.lede}
          </p>

          <div className="tablet:flex-row tablet:items-center mt-[34px] flex flex-col items-stretch gap-3">
            <Button
              href={HERO.primaryCta.href}
              className="justify-center gap-8"
            >
              {HERO.primaryCta.label}
              <ArrowDownRight aria-hidden="true" className="text-blue size-4" />
            </Button>
            <Button
              href={HERO.secondaryCta.href}
              variant="outline"
              className="justify-center"
            >
              {HERO.secondaryCta.label}
            </Button>
          </div>

          <ul className="text-muted-2 text-fine mt-[27px] flex list-none flex-wrap gap-5 font-semibold">
            {HERO.assurances.map((item) => (
              <li key={item} className="flex items-center gap-[7px]">
                <span className="text-blue-ink text-2xs grid size-[17px] flex-none place-items-center rounded-full bg-blue-100 font-black">
                  <Check aria-hidden="true" className="size-2.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <HeroVisual />
      </Container>
    </section>
  );
}
