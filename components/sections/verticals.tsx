import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { HairlineGrid } from "@/components/ui/hairline-grid";
import { NumberedCard } from "@/components/ui/numbered-card";
import { Tag } from "@/components/ui/tag";
import { VERTICAL_ITEMS, VERTICALS } from "@/content/ecosystem";

export function Verticals() {
  return (
    <Section labelledBy="verticals-title">
      <SectionHeader
        id="verticals-title"
        kicker={VERTICALS.kicker}
        title={VERTICALS.title}
        lede={VERTICALS.lede}
        size="md"
      />

      <HairlineGrid
        minItem={230}
        selectLabel={VERTICALS.itemGroupLabel}
        className="mt-block"
      >
        {VERTICAL_ITEMS.map((item) => (
          <NumberedCard
            key={item.index}
            index={item.index}
            title={item.title}
            body={item.body}
            size="md"
            align="bottom"
            minHeight="220px"
            selectGroup="vertical"
          />
        ))}
      </HairlineGrid>

      <div className="mt-7 flex flex-wrap gap-3">
        {VERTICALS.integrations.map((item) => (
          <Tag key={item} size="lg">
            {item}
          </Tag>
        ))}
      </div>
    </Section>
  );
}
