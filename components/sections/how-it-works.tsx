import { Section } from "@/components/ui/section";
import { HairlineGrid } from "@/components/ui/hairline-grid";
import { NumberedCard } from "@/components/ui/numbered-card";
import { HOW_IT_WORKS, HOW_IT_WORKS_STEPS } from "@/content/opportunity";

export function HowItWorks() {
  return (
    <Section labelledBy="how-title">
      <p className="text-kicker text-accent-text font-extrabold tracking-[0.13em] uppercase">
        {HOW_IT_WORKS.kicker}
      </p>
      <h2 id="how-title" className="text-h2-sm mt-6 max-w-[16ch] font-normal">
        {HOW_IT_WORKS.title}
      </h2>
      <p className="text-md text-content-muted mt-5 max-w-155">
        {HOW_IT_WORKS.lede}
      </p>

      <HairlineGrid columns={4} className="mt-block">
        {HOW_IT_WORKS_STEPS.map((step) => (
          <NumberedCard
            key={step.index}
            index={step.index}
            title={step.title}
            body={step.body}
            align="pushed"
            invertOnHover
            className="hover:shadow-float relative min-h-[230px] duration-[180ms] hover:z-[2] hover:-translate-y-[5px]"
          />
        ))}
      </HairlineGrid>
    </Section>
  );
}
