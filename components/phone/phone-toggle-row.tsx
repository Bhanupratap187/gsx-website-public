import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface PhoneToggleRowProps {
  title: ReactNode;
  sub?: ReactNode;
  on?: boolean;
  className?: string;
}

// The switch is part of a static mockup, not a control, so it is hidden from
// assistive tech while the surrounding copy stays readable.
export function PhoneToggleRow({
  title,
  sub,
  on = true,
  className,
}: PhoneToggleRowProps) {
  return (
    <div
      className={cn(
        "border-line-soft flex items-center gap-3 border-b py-4",
        className,
      )}
    >
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-bold">{title}</span>
        {sub ? (
          <span className="text-muted-2 mt-1 block text-xs">{sub}</span>
        ) : null}
      </span>
      <span
        aria-hidden="true"
        className={cn(
          "rounded-pill flex h-[26px] w-[46px] flex-none items-center p-[3px]",
          on ? "bg-blue justify-end" : "bg-line-soft justify-start",
        )}
      >
        <span className="rounded-pill size-5 bg-white" />
      </span>
    </div>
  );
}
