import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { HairlineGrid } from "@/components/ui/hairline-grid";
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

      <HairlineGrid minItem={230} className="mt-block">
        {COMPANY_FACTS.map((fact) => (
          <div key={fact.term} className="bg-ground p-card">
            <dl>
              <dt className="text-muted-2 text-sm font-bold tracking-[0.13em]">
                {fact.term}
              </dt>
              <dd className="text-md mt-3 leading-[1.4] font-semibold">
                {fact.detail}
              </dd>
            </dl>
          </div>
        ))}
      </HairlineGrid>
    </Section>
  );
}
