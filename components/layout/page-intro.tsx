import type { PageIntro as PageIntroContent } from "@/content/types";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";

interface PageIntroProps {
  intro: PageIntroContent;
  // Centres the band on the reading measure, so a prose route's heading lines
  // up with the body text below it instead of the full container.
  measure?: string;
  // Short action pages centre their band over a centred panel; documents keep
  // the default left edge so the heading lines up with the body text.
  align?: "start" | "center";
}

// The intro band every standalone route opens with. It owns the route's single
// <h1>, so no page may render another.
export function PageIntro({ intro, measure, align = "start" }: PageIntroProps) {
  const centred = align === "center";
  return (
    <div className="border-line bg-sand border-b">
      <Container className="pt-[clamp(48px,6vw,96px)] pb-[clamp(36px,4vw,64px)]">
        <div className={cn("w-full", measure, centred && "text-center")}>
          <p className="text-kicker text-blue-ink font-extrabold tracking-[0.13em] uppercase">
            {intro.kicker}
          </p>
          <h1
            className={cn(
              "text-h2-sm mt-[13px] max-w-[20ch] font-normal",
              centred && "mx-auto",
            )}
          >
            {intro.title}
          </h1>
          <p
            className={cn(
              "text-lede text-muted mt-6",
              measure ? "max-w-[46ch]" : "max-w-155",
              centred && "mx-auto",
            )}
          >
            {intro.lede}
          </p>
          {intro.updated ? (
            <p className="text-muted-2 mt-5 text-sm font-semibold tracking-[0.02em]">
              {intro.updated}
            </p>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
