import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/layout/page-intro";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { HairlineGrid } from "@/components/ui/hairline-grid";
import { NumberedCard } from "@/components/ui/numbered-card";
import { FactCard } from "@/components/ui/fact-card";
import { TeamCard } from "@/components/ui/team-card";
import { ArrowLink } from "@/components/ui/arrow-link";
import {
  ABOUT_BELIEF,
  ABOUT_CAPABILITIES,
  ABOUT_CAPABILITY_ITEMS,
  ABOUT_SUPPORT_LINK,
  ABOUT_DIFFERENCE,
  ABOUT_DIFFERENCE_ITEMS,
  ABOUT_FACTS_HEADING,
  ABOUT_INTRO,
  ABOUT_MISSION,
  ABOUT_SIMPLE_IDEA,
  ABOUT_TEAM,
  ABOUT_TEAM_MEMBERS,
} from "@/content/about";
import { COMPANY, COMPANY_FACTS } from "@/content/business-model";

export const metadata: Metadata = {
  title: ABOUT_INTRO.metaTitle,
  description: ABOUT_INTRO.metaDescription,
};

const kicker =
  "text-kicker text-accent-text font-extrabold tracking-[0.13em] uppercase";
const panel = "p-card-lg rounded-[20px]";
const panelTitle =
  "text-[clamp(24px,2.3vw,34px)] leading-[1.12] font-normal tracking-[-0.028em]";
const twoUp =
  "mt-block grid items-stretch gap-[clamp(20px,2.4vw,36px)] lg:grid-cols-2";

export default function AboutPage() {
  return (
    <main id="main">
      <PageIntro intro={ABOUT_INTRO} />

      <Section tone="light-2" bordered labelledBy="about-mission-title">
        <p className={kicker}>{ABOUT_MISSION.kicker}</p>
        <blockquote
          data-tone="dark"
          className={`bg-ground text-content mt-[13px] ${panel}`}
        >
          <h2
            id="about-mission-title"
            className="max-w-[24ch] text-[clamp(22px,2.6vw,38px)] leading-[1.2] font-normal tracking-[-0.03em]"
          >
            {ABOUT_MISSION.statement}
          </h2>
          <p className="text-content-muted mt-5 max-w-[64ch] text-base leading-[1.65]">
            {ABOUT_MISSION.body}
          </p>
          <footer className="text-blue mt-6 text-sm font-bold tracking-[0.13em]">
            {ABOUT_MISSION.attribution}
          </footer>
        </blockquote>
      </Section>

      <Section bordered labelledBy="about-capabilities-title">
        <SectionHeader
          id="about-capabilities-title"
          kicker={ABOUT_CAPABILITIES.kicker}
          title={ABOUT_CAPABILITIES.title}
          lede={ABOUT_CAPABILITIES.lede}
          size="md"
        />

        <div className={twoUp}>
          <div
            data-tone="dark"
            className={`bg-ground text-content flex h-full flex-col ${panel}`}
          >
            <p className="text-blue text-xs font-bold tracking-[0.13em]">
              {ABOUT_SIMPLE_IDEA.kicker}
            </p>
            <h3 className={`mt-4 ${panelTitle}`}>{ABOUT_SIMPLE_IDEA.title}</h3>
            <ul className="mt-auto flex flex-col gap-3 pt-8">
              {ABOUT_SIMPLE_IDEA.points.map((point) => (
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
          </div>

          {/* Static cards — they sit beside the dark panel, which owns the contrast here. */}
          <HairlineGrid minItem={260} rounded>
            {ABOUT_CAPABILITY_ITEMS.map((item) => (
              <NumberedCard
                key={item.index}
                index={item.index}
                title={item.title}
                body={item.body}
                size="md"
              />
            ))}
          </HairlineGrid>
        </div>
      </Section>

      <Section tone="light-2" bordered labelledBy="about-difference-title">
        <SectionHeader
          id="about-difference-title"
          kicker={ABOUT_DIFFERENCE.kicker}
          title={ABOUT_DIFFERENCE.title}
          lede={ABOUT_DIFFERENCE.lede}
          size="md"
        />

        <HairlineGrid
          columns={2}
          selectLabel={ABOUT_DIFFERENCE.groupLabel}
          className="mt-block"
        >
          {ABOUT_DIFFERENCE_ITEMS.map((item) => (
            <NumberedCard
              key={item.index}
              index={item.index}
              title={item.title}
              body={item.body}
              size="md"
              minHeight="220px"
              selectGroup="about-difference"
            />
          ))}
        </HairlineGrid>
      </Section>

      <Section bordered labelledBy="about-belief-title">
        <SectionHeader
          id="about-belief-title"
          kicker={ABOUT_BELIEF.kicker}
          title={ABOUT_BELIEF.title}
          lede={ABOUT_BELIEF.lede}
          size="md"
        />

        <div className={twoUp}>
          <div
            className={`border-line-card bg-surface flex flex-col border ${panel}`}
          >
            <h3 className={panelTitle}>{ABOUT_BELIEF.problem.title}</h3>
            <ul className="mt-auto flex flex-col gap-3 pt-8">
              {ABOUT_BELIEF.problem.points.map((point) => (
                <li key={point} className="text-muted flex gap-3 text-base">
                  <span aria-hidden="true" className="text-accent-text">
                    —
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div
            data-tone="dark"
            className={`bg-ground text-content flex flex-col ${panel}`}
          >
            <h3 className={panelTitle}>{ABOUT_BELIEF.belief.title}</h3>
            <p className="text-content-muted mt-5 max-w-[46ch] text-base leading-[1.65]">
              {ABOUT_BELIEF.belief.body}
            </p>
            <p className="mt-auto flex flex-wrap items-center gap-3 pt-8 text-base font-bold">
              {ABOUT_BELIEF.belief.chain.map((step, i) => (
                <span key={step} className="contents">
                  <span>{step}</span>
                  {i < ABOUT_BELIEF.belief.chain.length - 1 ? (
                    <ArrowRight
                      aria-hidden="true"
                      className="text-blue size-4"
                    />
                  ) : null}
                </span>
              ))}
            </p>
          </div>
        </div>
      </Section>

      <Section tone="light-2" bordered labelledBy="about-team-title">
        <SectionHeader
          id="about-team-title"
          kicker={ABOUT_TEAM.kicker}
          title={ABOUT_TEAM.title}
          lede={ABOUT_TEAM.lede}
          size="md"
        />

        <HairlineGrid columns={2} className="mt-block">
          {ABOUT_TEAM_MEMBERS.map((member) => (
            <TeamCard
              key={member.name}
              member={member}
              linkLabel={ABOUT_TEAM.linkedinLabel}
            />
          ))}
        </HairlineGrid>
      </Section>

      <Section bordered labelledBy="about-facts-title">
        <h2 id="about-facts-title" className="text-h3 font-normal">
          {ABOUT_FACTS_HEADING}
        </h2>

        <HairlineGrid
          minItem={230}
          selectLabel={COMPANY.factGroupLabel}
          className="mt-block"
        >
          {COMPANY_FACTS.map((fact) => (
            <FactCard key={fact.term} fact={fact} group="about-fact" />
          ))}
        </HairlineGrid>

        <ArrowLink href={ABOUT_SUPPORT_LINK.href} className="mt-block">
          {ABOUT_SUPPORT_LINK.label}
        </ArrowLink>
      </Section>
    </main>
  );
}
