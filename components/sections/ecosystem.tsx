import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { HairlineGrid } from "@/components/ui/hairline-grid";
import { NumberedCard } from "@/components/ui/numbered-card";
import { ArrowLink } from "@/components/ui/arrow-link";
import { ECOSYSTEM, ECOSYSTEM_PARTICIPANTS } from "@/content/ecosystem";

export function Ecosystem() {
  return (
    <Section
      id="ecosystem"
      tone="light-2"
      bordered
      labelledBy="ecosystem-title"
    >
      <SectionHeader
        id="ecosystem-title"
        kicker={ECOSYSTEM.kicker}
        title={ECOSYSTEM.title}
        size="md"
      />
      <p className="text-md text-content-muted mt-5 max-w-160">
        {ECOSYSTEM.lede}
      </p>

      <div className="mt-block grid items-start gap-[clamp(20px,2.4vw,36px)] lg:grid-cols-2">
        <div
          data-tone="dark"
          className="bg-ground text-content p-card-lg flex h-full flex-col rounded-[20px]"
        >
          <p className="text-blue text-xs font-bold tracking-[0.13em]">
            {ECOSYSTEM.owner.kicker}
          </p>
          <h3 className="mt-4 text-[clamp(24px,2.3vw,34px)] leading-[1.12] font-normal tracking-[-0.028em]">
            {ECOSYSTEM.owner.title}
          </h3>
          <ul className="mt-6 flex flex-col gap-3">
            {ECOSYSTEM.owner.points.map((point) => (
              <li
                key={point}
                className="text-muted-dark-2 flex gap-3 text-base"
              >
                <span aria-hidden="true" className="text-blue">
                  —
                </span>
                {point}
              </li>
            ))}
          </ul>
          <ArrowLink href={ECOSYSTEM.owner.link.href} className="mt-auto pt-8">
            {ECOSYSTEM.owner.link.label}
          </ArrowLink>
        </div>

        <HairlineGrid minItem={260} rounded>
          {ECOSYSTEM_PARTICIPANTS.map((item, i) => (
            <NumberedCard
              key={item.index}
              index={item.index}
              title={item.title}
              body={item.body}
              size="md"
              className={
                i === ECOSYSTEM_PARTICIPANTS.length - 1
                  ? "sm:col-span-2"
                  : undefined
              }
            />
          ))}
        </HairlineGrid>
      </div>
    </Section>
  );
}
