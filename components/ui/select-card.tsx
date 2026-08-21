import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SelectCardProps {
  // Radio name. Cards sharing one are mutually exclusive, so the browser clears
  // the previous pick without any state of ours.
  group: string;
  // Accessible name for the radio; the card's own heading.
  label: string;
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

// A card that inverts on hover and stays inverted once picked. The selection is
// a native radio read by `:has(:checked)` in the tone layer, which keeps these
// grids server-rendered and free of client JS.
export function SelectCard({
  group,
  label,
  children,
  style,
  className,
}: SelectCardProps) {
  return (
    <label
      data-tone-hover="dark"
      style={style}
      className={cn(
        "bg-ground text-content group cursor-pointer transition-colors",
        "has-[:focus-visible]:outline-blue has-[:focus-visible]:outline-2 has-[:focus-visible]:-outline-offset-2",
        className,
      )}
    >
      <input type="radio" name={group} aria-label={label} className="sr-only" />
      {children}
    </label>
  );
}
