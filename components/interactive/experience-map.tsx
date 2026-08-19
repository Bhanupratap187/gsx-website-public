"use client";

import { useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/cn";
import { PhoneFrame } from "@/components/phone/phone-frame";
import { StatTile } from "@/components/ui/stat-tile";
import { EXPERIENCE, STAGES } from "@/content/experience";
import type { StatItem } from "@/content/types";

interface ExperienceMapProps {
  // Screens and panels arrive pre-rendered from the server, so their markup
  // ships as HTML and only the toggle logic reaches the browser.
  screens: ReactNode[];
  panels: ReactNode[];
  tabBar: ReactNode;
}

export function ExperienceMap({ screens, panels, tabBar }: ExperienceMapProps) {
  const [index, setIndex] = useState(0);
  const stage = STAGES[index];
  if (!stage) return null;

  // Widened from the const tuple so the optional dark flag is visible.
  const stats: readonly StatItem[] = stage.owner.stats;

  const last = STAGES.length - 1;
  const progress = ((index + 1) / STAGES.length) * 100;

  return (
    <div className="mt-[clamp(36px,4.5vw,64px)] flex flex-wrap items-stretch gap-[clamp(16px,2vw,32px)]">
      <div className="shadow-card w-full max-w-none self-start rounded-[20px] bg-white px-4.5 py-5 lg:max-w-[248px] lg:flex-[1_1_210px] xl:sticky xl:top-[calc(var(--header-h)+22px)]">
        <div className="flex items-baseline justify-between px-2 pb-3.5">
          <span className="text-muted-2 text-xs font-bold tracking-[0.13em]">
            {EXPERIENCE.railLabel}
          </span>
          <span className="text-blue-ink text-sm font-bold">
            {index + 1}/{STAGES.length}
          </span>
        </div>

        <ul className="flex snap-x gap-1 overflow-x-auto lg:flex-col lg:overflow-visible">
          {STAGES.map((item, i) => {
            const on = i === index;
            const done = i < index;
            return (
              <li key={item.id} className="flex-none snap-start lg:flex-auto">
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-current={on ? "step" : undefined}
                  className={cn(
                    "flex min-h-11 w-full items-center gap-3.5 rounded-2xl px-3.5 py-3 text-left transition-colors",
                    on ? "bg-ink text-white" : "text-ink hover:bg-sand-2",
                  )}
                >
                  <span
                    className={cn(
                      "flex size-[34px] flex-none items-center justify-center rounded-[10px] text-xs font-extrabold tracking-[0.04em]",
                      on
                        ? "bg-blue text-white"
                        : done
                          ? "text-blue-ink bg-blue-200"
                          : "bg-fill-inactive text-blue-ink",
                    )}
                  >
                    {done ? (
                      <Check aria-hidden="true" className="size-4" />
                    ) : (
                      String(i + 1).padStart(2, "0")
                    )}
                  </span>
                  <span className="flex min-w-0 flex-col items-start gap-0.5">
                    <span className="text-base font-bold tracking-[-0.01em]">
                      {item.name}
                    </span>
                    <span
                      className={cn(
                        "text-sm",
                        on ? "text-muted-4" : "text-muted-3",
                      )}
                    >
                      {item.sub}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="mt-4.5 rounded-2xl bg-blue-100 px-4 py-4.5">
          <span
            aria-hidden="true"
            className="border-blue rounded-pill block size-7 border-2"
          />
          <p className="mt-3.5 text-base font-bold tracking-[-0.015em]">
            {EXPERIENCE.consentNote.title}
          </p>
          <p className="text-muted mt-2 text-sm leading-[1.5]">
            {EXPERIENCE.consentNote.body}
          </p>
        </div>
      </div>

      <div className="w-full self-start lg:max-w-[376px] lg:flex-[1_1_352px] xl:sticky xl:top-[calc(var(--header-h)+22px)]">
        <div className="mb-3.5 flex items-baseline justify-between px-0.5">
          <span className="text-muted text-xs font-bold tracking-[0.13em]">
            MEMBER ONBOARDING
          </span>
          <span className="text-blue-ink text-xs font-bold tracking-[0.13em]">
            LIVE SCREEN
          </span>
        </div>
        <PhoneFrame avatar="AM" tabBar={tabBar}>
          {screens[index]}
        </PhoneFrame>
      </div>

      <div className="shadow-card flex min-w-0 flex-[9999_1_470px] flex-col overflow-hidden rounded-[22px] bg-white">
        <div className="flex flex-wrap items-start gap-5 px-[clamp(24px,2.4vw,38px)] pt-[clamp(24px,2.4vw,38px)] pb-[clamp(20px,2vw,30px)]">
          <div className="min-w-0 flex-[1_1_300px]">
            <p className="text-blue-ink text-xs font-extrabold tracking-[0.09em]">
              GYM OWNER INTELLIGENCE
            </p>
            <p className="mt-3 text-[clamp(24px,2.3vw,36px)] leading-[1.1] font-normal tracking-[-0.03em]">
              {stage.owner.title}
            </p>
            <p className="text-muted mt-3.5 max-w-[720px] text-base leading-[1.6]">
              {stage.owner.body}
            </p>
          </div>
          <span
            className={cn(
              "rounded-pill flex-none px-4 py-2 text-sm font-bold",
              stage.owner.pill.tone === "amber"
                ? "bg-warn-bg text-warn-ink"
                : "text-blue-ink bg-blue-100",
            )}
          >
            {stage.owner.pill.label}
          </span>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,180px),1fr))] gap-3.5 px-[clamp(24px,2.4vw,38px)] pb-[clamp(22px,2vw,32px)]">
          {stats.map((stat) => (
            <StatTile
              key={stat.kicker}
              kicker={stat.kicker}
              value={stat.value}
              sub={stat.sub}
              dark={stat.dark}
            />
          ))}
        </div>

        {panels[index]}

        <div className="border-line-soft mt-auto flex flex-wrap items-center gap-5 border-t px-[clamp(24px,2.4vw,38px)] py-5">
          <button
            type="button"
            onClick={() => setIndex((i) => (i + last) % STAGES.length)}
            className="border-line-card hover:border-blue flex min-h-11 flex-none items-center gap-2 rounded-2xl border bg-white px-6 py-3.5 text-base font-bold transition-colors hover:bg-blue-50"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            Back
          </button>
          <span
            aria-hidden="true"
            className="bg-line-card rounded-pill h-[7px] min-w-[70px] flex-[1_1_140px] overflow-hidden"
          >
            <span
              style={{ width: `${progress}%` }}
              className="bg-blue rounded-pill block h-full transition-[width] duration-300"
            />
          </span>
          <span
            aria-live="polite"
            className="text-muted-2 flex-none text-base font-semibold"
          >
            {index + 1} of {STAGES.length}
          </span>
          <button
            type="button"
            onClick={() => setIndex((i) => (i + 1) % STAGES.length)}
            className={cn(
              "flex min-h-11 flex-none items-center gap-2 rounded-2xl px-7 py-4 text-base font-bold transition-colors",
              index === last
                ? "bg-blue-muted text-blue-muted-ink"
                : "bg-ink text-white",
            )}
          >
            {index === last ? "Complete" : "Continue"}
            {index === last ? null : (
              <ArrowRight aria-hidden="true" className="size-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
