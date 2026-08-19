import { cn } from "@/lib/cn";

interface ProgressRingProps {
  value: number;
  max: number;
  unit?: string;
  className?: string;
}

export function ProgressRing({
  value,
  max,
  unit = "cal",
  className,
}: ProgressRingProps) {
  const turn = Math.max(0, Math.min(1, value / max));

  return (
    <div
      role="img"
      aria-label={`${value} of ${max} ${unit}`}
      style={{
        background: `conic-gradient(var(--color-blue) 0turn ${turn}turn, var(--color-blue-ring) ${turn}turn 1turn)`,
      }}
      className={cn(
        "rounded-pill flex size-[clamp(140px,44vw,170px)] items-center justify-center",
        className,
      )}
    >
      <span className="rounded-pill flex size-[74%] flex-col items-center justify-center gap-0.5 bg-white">
        <span className="text-[24px] font-extrabold tracking-[-0.03em]">
          {value}
        </span>
        <span className="text-muted-2 text-xs">
          of {max} {unit}
        </span>
      </span>
    </div>
  );
}
