import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { HairlineGrid } from "@/components/ui/hairline-grid";
import { NumberedCard } from "@/components/ui/numbered-card";
import { ArrowLink } from "@/components/ui/arrow-link";
import { PRIVACY, PRIVACY_PRINCIPLES } from "@/content/privacy";

export function Privacy() {
  return (
    <Section id="privacy" tone="dark" labelledBy="privacy-title">
      <SectionHeader
        id="privacy-title"
        kicker={PRIVACY.kicker}
        title={PRIVACY.title}
        size="md"
        lede={
          <>
            <p>{PRIVACY.lede}</p>
            <ArrowLink href={PRIVACY.link.href} className="mt-5">
              {PRIVACY.link.label}
            </ArrowLink>
          </>
        }
      />

      <HairlineGrid minItem={230} className="mt-block">
        {PRIVACY_PRINCIPLES.map((item) => (
          <NumberedCard
            key={item.index}
            index={item.index}
            title={item.title}
            body={item.body}
          />
        ))}
      </HairlineGrid>
    </Section>
  );
}
