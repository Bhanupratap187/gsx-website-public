import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { PageIntro } from "@/components/layout/page-intro";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { SUPPORT_CONTACT, SUPPORT_INTRO } from "@/content/support";

export const metadata: Metadata = {
  title: SUPPORT_INTRO.metaTitle,
  description: SUPPORT_INTRO.metaDescription,
};

const MEASURE = "mx-auto max-w-[64ch]";

export default function SupportPage() {
  return (
    <main id="main">
      <PageIntro intro={SUPPORT_INTRO} measure={MEASURE} align="center" />

      <Section>
        <div
          data-tone="dark"
          className={`bg-ground text-content flex flex-col items-center rounded-[20px] px-[clamp(28px,4vw,56px)] py-[clamp(40px,5vw,68px)] text-center ${MEASURE}`}
        >
          <span
            aria-hidden="true"
            className="bg-blue text-ink rounded-tile flex size-14 items-center justify-center"
          >
            <Mail className="size-6" />
          </span>

          <Button
            href={`mailto:${SUPPORT_CONTACT.email}`}
            variant="light"
            className="mt-9 justify-center"
          >
            <Mail aria-hidden="true" className="text-blue-ink size-4" />
            {SUPPORT_CONTACT.ctaLabel}
          </Button>

          <p className="mt-8 text-base font-semibold">
            {SUPPORT_CONTACT.email}
          </p>
          <p className="text-content-muted mt-2 text-sm">
            {SUPPORT_CONTACT.responseNote}
          </p>
        </div>
      </Section>
    </main>
  );
}
