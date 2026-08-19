"use client";

import { useId, useState } from "react";
import { CALCULATOR } from "@/content/experience";

// Isolated from the experience map so dragging the slider re-renders only this
// subtree, not the six stages around it.
export function NetworkCalculator() {
  const [members, setMembers] = useState<number>(CALCULATOR.defaultMembers);
  const id = useId();

  const memberLabel = members.toLocaleString("en-US");
  const revenue = `$${(members * CALCULATOR.perMember).toLocaleString("en-US")}`;

  return (
    <>
      <div className="bg-ink mt-6 flex flex-wrap items-start gap-7 rounded-[18px] p-[clamp(24px,2.2vw,32px)]">
        <div className="min-w-0 flex-[1_1_260px]">
          <p className="text-blue text-xs font-extrabold tracking-[0.09em]">
            {CALCULATOR.kicker}
          </p>
          <p className="text-blue mt-3.5 text-[clamp(34px,3.4vw,52px)] leading-none font-extrabold tracking-[-0.04em]">
            {revenue}
          </p>
          <p className="text-muted-4 mt-3 text-sm">
            {CALCULATOR.caption} {memberLabel} similar connected members
          </p>
        </div>

        <div className="min-w-0 flex-[1_1_260px]">
          <div className="flex justify-between text-sm font-bold text-white">
            <label htmlFor={id}>{CALCULATOR.label}</label>
            <span>{memberLabel}</span>
          </div>
          <input
            id={id}
            type="range"
            min={CALCULATOR.min}
            max={CALCULATOR.max}
            step={CALCULATOR.step}
            value={members}
            onChange={(e) => setMembers(Number(e.target.value))}
            aria-valuetext={`${memberLabel} connected members`}
            className="range-slider mt-3.5 w-full"
          />
          <div className="text-muted-3 mt-1.5 flex justify-between text-sm">
            <span>{CALCULATOR.min}</span>
            <span>{CALCULATOR.max.toLocaleString("en-US")}</span>
          </div>
        </div>
      </div>
      <p className="text-muted-2 mt-4.5 text-sm leading-[1.55]">
        {CALCULATOR.disclaimer}
      </p>
    </>
  );
}
