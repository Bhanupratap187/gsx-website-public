"use client";

import { useRef, useState, type ReactNode } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/cn";
import { PhoneFrame } from "@/components/phone/phone-frame";
import { TRAINER_TABS } from "@/content/trainer";

interface TrainerOsProps {
  screens: ReactNode[];
}

export function TrainerOs({ screens }: TrainerOsProps) {
  const [index, setIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const tab = TRAINER_TABS[index];
  if (!tab) return null;

  // Roving tabindex: arrows move between tabs, Home/End jump to the ends.
  const onKeyDown = (e: React.KeyboardEvent) => {
    const last = TRAINER_TABS.length - 1;
    const next =
      e.key === "ArrowRight"
        ? (index + 1) % TRAINER_TABS.length
        : e.key === "ArrowLeft"
          ? (index + last) % TRAINER_TABS.length
          : e.key === "Home"
            ? 0
            : e.key === "End"
              ? last
              : null;

    if (next === null) return;
    e.preventDefault();
    setIndex(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="mt-block-lg flex flex-wrap items-start gap-[clamp(24px,3.5vw,60px)]">
      <div className="w-full lg:flex-[0_1_376px]">
        <PhoneFrame screen="sand" bezel="darker" label="TRAINER" avatar="MR">
          {screens[index]}
        </PhoneFrame>
      </div>

      <div className="min-w-0 flex-[9999_1_440px]">
        <div
          role="tablist"
          aria-label="Trainer OS capabilities"
          className="border-ink-line-3 [&>*]:border-ink-line-2 grid grid-cols-2 border-t lg:grid-cols-4 [&>*]:border-r [&>*]:border-b"
        >
          {TRAINER_TABS.map((item, i) => {
            const on = i === index;
            return (
              <button
                key={item.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                type="button"
                id={`trainer-tab-${item.id}`}
                aria-selected={on}
                aria-controls={`trainer-panel-${item.id}`}
                tabIndex={on ? 0 : -1}
                onClick={() => setIndex(i)}
                onKeyDown={onKeyDown}
                className={cn(
                  "flex min-h-11 items-center gap-3 px-6 py-5.5 text-left text-base font-bold tracking-[-0.01em] transition-colors",
                  on
                    ? "bg-blue text-ink"
                    : "text-muted-4 bg-ground hover:text-white",
                )}
              >
                <span
                  className={cn(
                    "text-xs font-bold tracking-[0.08em]",
                    on ? "text-ink/60" : "text-muted-2",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.label}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`trainer-panel-${tab.id}`}
          aria-labelledby={`trainer-tab-${tab.id}`}
          className="mt-[clamp(32px,4vw,64px)]"
        >
          <p className="text-blue text-sm font-extrabold tracking-[0.13em]">
            {tab.kicker}
          </p>
          <h3 className="mt-4.5 text-[clamp(28px,3.4vw,54px)] leading-[1.04] font-normal tracking-[-0.035em]">
            {tab.title}
          </h3>
          <p className="text-content-muted text-md mt-5.5 max-w-[760px] leading-[1.6]">
            {tab.body}
          </p>
          <ul className="mt-7 flex flex-col gap-3.5">
            {tab.points.map((point) => (
              <li
                key={point}
                className="text-muted-dark-3 flex items-start gap-3.5 text-base"
              >
                <Check
                  aria-hidden="true"
                  className="text-blue mt-1 size-4 flex-none"
                />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
