import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface HairlineGridProps {
  children: ReactNode;
  // A fixed track count, stepping at the live site's 680/940 breakpoints.
  // Without it the grid auto-fits, which can leave a row part-empty.
  columns?: 2 | 3 | 4 | 5;
  // Minimum cell width before the grid reflows. Ignored when columns is set.
  minItem?: number;
  // The warmer sand-2 sections draw a heavier 2px rule.
  gap?: 1 | 2;
  rounded?: boolean;
  // Names the grid as a radio group. Set it when the cells are SelectCards, so
  // the mutually exclusive choice announces itself as one.
  selectLabel?: string;
  className?: string;
}

const columnTracks = {
  2: "grid-cols-1 tablet:grid-cols-2",
  3: "grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3",
  4: "grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4",
  5: "grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-5",
} as const;

// Rules are real borders — container top/left, cells right/bottom — so the
// container paints nothing. A filled container would show through any cell
// that lifts or turns translucent on hover.
export function HairlineGrid({
  children,
  columns,
  minItem = 230,
  gap = 1,
  rounded = false,
  selectLabel,
  className,
}: HairlineGridProps) {
  const grid = (
    <div
      role={selectLabel ? "radiogroup" : undefined}
      aria-label={selectLabel}
      style={
        columns
          ? undefined
          : ({ "--min-item": `${minItem}px` } as CSSProperties)
      }
      className={cn(
        "border-rule-grid [&>*]:border-rule-grid grid",
        columns
          ? columnTracks[columns]
          : "grid-cols-[repeat(auto-fit,minmax(min(100%,var(--min-item)),1fr))]",
        gap === 1
          ? "[&>*]:border-r [&>*]:border-b"
          : "[&>*]:border-r-2 [&>*]:border-b-2",
        // Square grids paint their own top and left rules. Rounded ones get
        // those from the wrapper instead, and slide the trailing cell rules
        // underneath it — clipped by the radius they would show as cut corners.
        rounded
          ? gap === 1
            ? "-mr-px -mb-px"
            : "-mr-0.5 -mb-0.5"
          : gap === 1
            ? "border-t border-l"
            : "border-t-2 border-l-2",
        !rounded && className,
      )}
    >
      {children}
    </div>
  );

  if (!rounded) return grid;

  return (
    <div
      className={cn(
        "border-rule-grid overflow-hidden rounded-[20px]",
        gap === 1 ? "border" : "border-2",
        className,
      )}
    >
      {grid}
    </div>
  );
}
