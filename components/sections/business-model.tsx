import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { HairlineGrid } from "@/components/ui/hairline-grid";
import { NumberedCard } from "@/components/ui/numbered-card";
import {
  BUSINESS_MODEL,
  REVENUE_SPLIT,
  REVENUE_STREAMS,
} from "@/content/business-model";

const swatch = ["bg-blue", "bg-ink", "bg-line-strong"];

export function BusinessModel() {
  return (
    <Section
      id="business-model"
      tone="light-2"
      bordered
      labelledBy="business-title"
    >
      <SectionHeader
        id="business-title"
        kicker={BUSINESS_MODEL.kicker}
        title={BUSINESS_MODEL.title}
        lede={BUSINESS_MODEL.lede}
        size="md"
      />

      <blockquote
        data-tone="dark"
        className="bg-ground text-content mt-block rounded-[20px] p-[clamp(30px,3vw,48px)]"
      >
        <p className="max-w-[22ch] text-[clamp(22px,2.6vw,38px)] leading-[1.2] font-normal tracking-[-0.03em]">
          &ldquo;{BUSINESS_MODEL.quote}&rdquo;
        </p>
        <footer className="text-blue mt-5 text-sm font-bold tracking-[0.13em]">
          {BUSINESS_MODEL.quoteAttribution}
        </footer>
      </blockquote>

      <HairlineGrid minItem={230} className="mt-7">
        {REVENUE_STREAMS.map((item) => (
          <NumberedCard
            key={item.index}
            index={item.index}
            title={item.title}
            body={item.body}
            size="md"
          />
        ))}
      </HairlineGrid>

      <div className="border-line-grid-2 bg-sand p-card mt-7 rounded-[20px] border">
        <p className="text-muted-2 text-sm font-bold tracking-[0.13em]">
          {BUSINESS_MODEL.splitKicker}
        </p>
        <div
          aria-hidden="true"
          className="rounded-pill mt-5 flex h-4 overflow-hidden"
        >
          {REVENUE_SPLIT.map((part, i) => (
            <span
              key={part.label}
              style={{ width: `${part.width}%` }}
              className={swatch[i]}
            />
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-7 text-base">
          {REVENUE_SPLIT.map((part, i) => (
            <span key={part.label} className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className={`size-[11px] rounded-[3px] ${swatch[i]}`}
              />
              {part.label} <strong className="font-bold">{part.share}</strong>
            </span>
          ))}
        </div>
        <p className="text-muted-2 mt-[18px] max-w-[760px] text-sm leading-[1.55]">
          {BUSINESS_MODEL.splitDisclaimer}
        </p>
      </div>
    </Section>
  );
}
