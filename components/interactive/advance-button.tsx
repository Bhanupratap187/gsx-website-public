"use client";

import type { ReactNode } from "react";
import { useStageAdvance } from "./stage-nav";
import { EXPERIENCE } from "@/content/experience";

interface AdvanceButtonProps {
  children: ReactNode;
  className?: string;
}

// A control drawn inside the phone mockup. Its visible label belongs to the
// fiction ("Continue with Google"); what it actually does is step the map on,
// which is why the accessible name carries the hint.
export function AdvanceButton({ children, className }: AdvanceButtonProps) {
  const advance = useStageAdvance();

  return (
    <button type="button" onClick={advance} className={className}>
      {children}
      <span className="sr-only"> {EXPERIENCE.advanceHint}</span>
    </button>
  );
}
