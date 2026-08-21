import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { HairlineGrid } from "@/components/ui/hairline-grid";
import { ArrowLink } from "@/components/ui/arrow-link";
import { FactCard } from "@/components/ui/fact-card";
import { COMPANY, COMPANY_FACTS } from "@/content/business-model";

export function Company() {
  return (
    <Section id="company" labelledBy="company-title">
      <SectionHeader
        id="company-title"
        kicker={COMPANY.kicker}
        title={COMPANY.title}
        lede={COMPANY.lede}
        size="md"
        align="start"
      />

      <ArrowLink href={COMPANY.link.href} className="mt-7">
        {COMPANY.link.label}
      </ArrowLink>

      <HairlineGrid
        minItem={230}
        selectLabel={COMPANY.factGroupLabel}
        className="mt-block"
      >
        {COMPANY_FACTS.map((fact) => (
          <FactCard key={fact.term} fact={fact} group="company-fact" />
        ))}
      </HairlineGrid>
    </Section>
  );
}
