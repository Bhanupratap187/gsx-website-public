import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface PhoneListRowProps {
  leading?: ReactNode;
  title: ReactNode;
  sub?: ReactNode;
  value?: ReactNode;
  // "card" is the bordered tile used in the trainer screens.
  variant?: "rule" | "card";
  divider?: "bottom" | "top" | "none";
  // Dimmed state for pending or excluded rows.
  ghost?: boolean;
  valueTone?: "accent" | "ink" | "success" | "warn" | "muted";
  className?: string;
}

const valueTones = {
  accent: "text-blue-ink",
  ink: "text-ink",
  success: "text-success-text",
  warn: "text-warn",
  muted: "text-muted-2",
} as const;

export function PhoneListRow({
  leading,
  title,
  sub,
  value,
  variant = "rule",
  divider = "bottom",
  ghost = false,
  valueTone = "accent",
  className,
}: PhoneListRowProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3",
        variant === "rule" && "py-3.5",
        variant === "rule" &&
          divider === "bottom" &&
          "border-line-soft border-b",
        variant === "rule" && divider === "top" && "border-line-soft border-t",
        variant === "card" &&
          cn(
            "rounded-2xl border px-4 py-3.5",
            ghost ? "border-line-ghost bg-sand-2" : "border-line-card bg-white",
          ),
        className,
      )}
    >
      {leading}
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-bold">{title}</span>
        {sub ? (
          <span className="text-muted-2 mt-1 block text-xs">{sub}</span>
        ) : null}
      </span>
      {value ? (
        <span
          className={cn(
            "flex-none text-xs font-bold",
            ghost ? valueTones.muted : valueTones[valueTone],
          )}
        >
          {value}
        </span>
      ) : null}
    </div>
  );
}
