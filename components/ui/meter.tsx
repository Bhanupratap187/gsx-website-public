import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";

interface MeterProps {
  value: number;
  max?: number;
  label?: string;
  className?: string;
}

export function Meter({ value, max = 100, label, className }: MeterProps) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));

  return (
    <div className={className}>
      {label ? (
        <span className="block text-base font-bold">{label}</span>
      ) : null}
      <span
        role="meter"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label ?? "Confidence"}
        className={cn(
          "rounded-pill bg-line-soft block h-[5px] overflow-hidden",
          label && "mt-2",
        )}
      >
        <span
          style={{ "--pct": `${pct}%` } as CSSProperties}
          className="rounded-pill bg-blue block h-full w-(--pct)"
        />
      </span>
    </div>
  );
}
