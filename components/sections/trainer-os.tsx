import { Section } from "@/components/ui/section";
import { Tag } from "@/components/ui/tag";
import { TrainerOs } from "@/components/interactive/trainer-os";
import { TrainerScreen } from "@/components/experience/trainer-screen";
import { TRAINER, TRAINER_SPLIT, TRAINER_TABS } from "@/content/trainer";

export function TrainerOsSection() {
  return (
    <Section id="trainer-os" tone="dark" labelledBy="trainer-title">
      <p className="text-kicker text-accent-text font-extrabold tracking-[0.13em] uppercase">
        {TRAINER.kicker}
      </p>
      <div className="mt-6 grid items-end gap-6 lg:grid-cols-2 lg:gap-[clamp(24px,4vw,80px)]">
        <h2
          id="trainer-title"
          className="text-[clamp(32px,4.2vw,62px)] leading-[1.03] font-normal tracking-[-0.035em]"
        >
          {TRAINER.title}
        </h2>
        <div>
          <p className="text-content-muted text-md leading-[1.6]">
            {TRAINER.lede}
          </p>
          <div className="mt-5.5 flex flex-wrap gap-2.5">
            {TRAINER.tags.map((tag) => (
              <Tag
                key={tag}
                variant="dark"
                size="md"
                className="tracking-normal"
              >
                {tag}
              </Tag>
            ))}
          </div>
        </div>
      </div>

      <TrainerOs
        screens={TRAINER_TABS.map((tab) => (
          <TrainerScreen key={tab.id} tab={tab.id} />
        ))}
      />

      <div className="border-ink-line-2 mt-[clamp(36px,4vw,64px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-3.5 border-t pt-[clamp(28px,3vw,44px)]">
        {TRAINER_SPLIT.map((part) => (
          <div
            key={part.party}
            className="bg-ink-tile text-muted-4 rounded-xl px-6 py-5.5 text-center text-sm"
          >
            <strong className="text-blue text-lg font-extrabold">
              {part.share}
            </strong>{" "}
            {part.party}
          </div>
        ))}
      </div>
      <p className="text-muted-3 mt-4.5 text-sm leading-[1.55]">
        {TRAINER.splitDisclaimer}
      </p>
    </Section>
  );
}
