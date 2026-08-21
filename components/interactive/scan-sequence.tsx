"use client";

import {
  useEffect,
  useState,
  useSyncExternalStore,
  type CSSProperties,
  type ReactNode,
} from "react";
import { cn } from "@/lib/cn";

const STEP_MS = 700;
const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function subscribeToMotionPreference(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function prefersReducedMotion() {
  return window.matchMedia(REDUCED_MOTION).matches;
}

interface ScanSequenceProps {
  // Both heads arrive pre-rendered so the kicker and title styling stays in the
  // server screen; this component only chooses which one is showing.
  scanningHead: ReactNode;
  completeHead: ReactNode;
  records: string;
  rows: ReactNode[];
  // Held back until the scan lands — there is nothing to review before then.
  cta: ReactNode;
}

// The scan reads as work being done: the bar advances once per finding and each
// row lands as its step completes, rather than the whole result arriving at once.
export function ScanSequence({
  scanningHead,
  completeHead,
  records,
  rows,
  cta,
}: ScanSequenceProps) {
  const total = rows.length;
  const [elapsed, setElapsed] = useState(0);
  const reduced = useSyncExternalStore(
    subscribeToMotionPreference,
    prefersReducedMotion,
    () => false,
  );

  useEffect(() => {
    if (reduced) return;

    const timers = Array.from({ length: total }, (_, i) =>
      window.setTimeout(() => setElapsed(i + 1), STEP_MS * (i + 1)),
    );
    return () => timers.forEach(window.clearTimeout);
  }, [reduced, total]);

  const step = reduced ? total : elapsed;
  const percent = Math.round((step / total) * 100);

  return (
    <>
      {step === total ? completeHead : scanningHead}

      <div className="bg-line-soft rounded-pill mt-4.5 h-1.5 overflow-hidden">
        <div
          style={{ "--scan": `${percent}%` } as CSSProperties}
          className="bg-blue h-full w-(--scan) transition-[width] duration-500"
        />
      </div>
      <div className="text-muted-2 mt-2 flex justify-between text-xs">
        <span>{percent}%</span>
        <span>{records}</span>
      </div>

      <div className="mt-2">
        {rows.map((row, i) => (
          // Index keys are safe here: the findings list is fixed and never reorders.
          <div
            key={i}
            aria-hidden={i >= step}
            className={cn(
              "transition-[opacity,transform] duration-400",
              i < step ? "opacity-100" : "translate-y-1 opacity-0",
            )}
          >
            {row}
          </div>
        ))}
      </div>

      {step === total ? cta : null}
    </>
  );
}
