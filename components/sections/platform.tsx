import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Tag } from "@/components/ui/tag";
import { SelectCard } from "@/components/ui/select-card";
import { PLATFORM, PLATFORM_MODULES } from "@/content/platform";

// The prototype sizes these cards by flex basis rather than an even grid, so
// the row breaks 2 / 3 the way the design intends.
const basis = [
  "flex-[1_1_480px]",
  "flex-[1_1_480px]",
  "flex-[1_1_260px]",
  "flex-[1_1_500px]",
  "flex-[1_1_260px]",
];

export function Platform() {
  return (
    <Section id="platform" labelledBy="platform-title">
      <SectionHeader
        id="platform-title"
        kicker={PLATFORM.kicker}
        title={PLATFORM.title}
        lede={PLATFORM.lede}
      />

      <div
        role="radiogroup"
        aria-label={PLATFORM.moduleGroupLabel}
        className="border-line-grid [&>*]:border-line-grid mt-block-lg flex flex-wrap border-t border-l [&>*]:border-r [&>*]:border-b"
      >
        {PLATFORM_MODULES.map((module, i) => (
          <SelectCard
            key={module.index}
            group="platform-module"
            label={module.title}
            className={`${basis[i]} p-card-lg flex min-h-[clamp(300px,24vw,400px)] flex-col`}
          >
            <span className="text-accent-text text-[12px] font-bold tracking-[0.13em] transition-colors">
              {module.index}
            </span>
            <h3 className="mt-auto text-[clamp(24px,2.2vw,34px)] font-normal tracking-[-0.025em]">
              {module.title}
            </h3>
            <p className="text-content-muted mt-4 max-w-[520px] text-base leading-[1.6]">
              {module.body}
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {module.tags.map((tag) => (
                <Tag key={tag} variant="invert" size="sm">
                  {tag}
                </Tag>
              ))}
            </div>
          </SelectCard>
        ))}
      </div>

      <div className="text-ink-soft mt-9 flex flex-wrap items-center justify-center gap-3.5 rounded-2xl bg-blue-100 px-8 py-[26px] text-base">
        {PLATFORM.formula.map((part, i) => (
          <span key={part} className="contents">
            <span>{part}</span>
            <span className="text-blue-ink font-bold">
              {i === PLATFORM.formula.length - 1 ? "→" : "+"}
            </span>
          </span>
        ))}
        <span className="text-ink font-bold">{PLATFORM.formulaResult}</span>
      </div>
    </Section>
  );
}
