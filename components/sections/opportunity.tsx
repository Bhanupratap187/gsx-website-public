import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { HairlineGrid } from "@/components/ui/hairline-grid";
import { NumberedCard } from "@/components/ui/numbered-card";
import { ArrowLink } from "@/components/ui/arrow-link";
import { OPPORTUNITY, OPPORTUNITY_STEPS } from "@/content/opportunity";

export function Opportunity() {
  return (
    <Section tone="light-2" bordered labelledBy="opportunity-title">
      <SectionHeader
        id="opportunity-title"
        kicker={OPPORTUNITY.kicker}
        title={OPPORTUNITY.title}
        size="md"
        lede={
          <>
            <p>{OPPORTUNITY.lede}</p>
            <ArrowLink href={OPPORTUNITY.link.href} className="mt-5">
              {OPPORTUNITY.link.label}
            </ArrowLink>
          </>
        }
      />

      <HairlineGrid minItem={260} gap={2} className="mt-block-lg">
        {OPPORTUNITY_STEPS.map((step) => (
          <NumberedCard
            key={step.index}
            index={step.index}
            title={step.title}
            body={step.body}
          />
        ))}
      </HairlineGrid>
    </Section>
  );
}
