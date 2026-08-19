import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionHeaderProps {
  kicker: string;
  title: ReactNode;
  lede?: ReactNode;
  // Anchor for the parent section's aria-labelledby.
  id?: string;
  size?: "lg" | "md";
  // The lede sits on the heading's baseline, except in the company section.
  align?: "end" | "start";
  className?: string;
}

export function SectionHeader({
  kicker,
  title,
  lede,
  id,
  size = "lg",
  align = "end",
  className,
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <p className="text-kicker text-accent-text font-extrabold tracking-[0.13em] uppercase">
        {kicker}
      </p>
      <div
        className={cn(
          "laptop:gap-[70px] mt-[13px] grid gap-6",
          lede && "laptop:grid-cols-[minmax(0,1.45fr)_minmax(260px,0.55fr)]",
          align === "end" ? "items-end" : "items-start",
        )}
      >
        <h2
          id={id}
          className={cn(
            "font-normal",
            size === "lg" ? "text-h2" : "text-h2-sm",
          )}
        >
          {title}
        </h2>
        {lede ? (
          <div
            className={cn(
              "text-md text-content-muted leading-[1.65]",
              align === "end" && "pb-2",
            )}
          >
            {lede}
          </div>
        ) : null}
      </div>
    </div>
  );
}
