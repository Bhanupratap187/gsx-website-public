import Image from "next/image";
import type { PartnerGroup } from "@/content/types";
import { cn } from "@/lib/cn";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { HairlineGrid } from "@/components/ui/hairline-grid";
import { NumberedCard } from "@/components/ui/numbered-card";
import { PARTNER_GROUPS, VERTICAL_ITEMS, VERTICALS } from "@/content/ecosystem";

const slot = {
  2: "laptop:w-[calc(50%-0.625rem)]",
  3: "laptop:w-[calc(33.333%-0.834rem)]",
} as const;

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

      <HairlineGrid columns={5} className="mt-7">
        {PARTNER_GROUPS.map((group) => {
          // Widened from the const tuple so the optional logo is visible.
          // Widened from the const tuple so the optional fields are visible.
          const { partners, perRow }: PartnerGroup = group;
          return (
            <div
              key={group.label}
              className="bg-ground p-card flex flex-col gap-5"
            >
              <p className="text-accent-text text-2xs font-extrabold tracking-[0.13em] uppercase">
                {group.label}
              </p>
              <div className="flex flex-1 flex-wrap items-center justify-center gap-x-5 gap-y-3">
                {partners.map((partner) => (
                  <span
                    key={partner.name}
                    className={cn(
                      "flex justify-center",
                      perRow && slot[perRow],
                    )}
                  >
                    {partner.logo ? (
                      <Image
                        src={partner.logo.src}
                        alt={partner.name}
                        width={partner.logo.width}
                        height={partner.logo.height}
                        sizes="160px"
                        className={cn(
                          "h-auto w-auto max-w-full object-contain",
                          perRow ? "max-h-9" : "max-h-11",
                        )}
                      />
                    ) : (
                      <span className="text-md leading-none font-bold tracking-[-0.015em]">
                        {partner.name}
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </HairlineGrid>
    </Section>
  );
}
