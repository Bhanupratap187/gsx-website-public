import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { ExperienceMap } from "@/components/interactive/experience-map";
import {
  MemberScreen,
  MemberTabBar,
} from "@/components/experience/member-screen";
import { OwnerPanel } from "@/components/experience/owner-panel";
import { EXPERIENCE, STAGES } from "@/content/experience";

export function Experience() {
  return (
    <Section
      id="experience"
      tone="light-2"
      bordered
      labelledBy="experience-title"
      className="bg-[linear-gradient(180deg,var(--color-sand-3)_0%,var(--color-sand-2)_100%)]"
    >
      <SectionHeader
        id="experience-title"
        kicker={EXPERIENCE.kicker}
        title={EXPERIENCE.title}
        lede={EXPERIENCE.lede}
      />

      <ExperienceMap
        screens={STAGES.map((stage) => (
          <MemberScreen key={stage.id} stage={stage.id} />
        ))}
        panels={STAGES.map((stage) => (
          <OwnerPanel key={stage.id} stage={stage.id} />
        ))}
        tabBar={<MemberTabBar />}
      />
    </Section>
  );
}
