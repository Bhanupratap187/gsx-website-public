import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface HairlineGridProps {
  children: ReactNode;
  // A fixed track count, stepping at the live site's 680/940 breakpoints.
  // Without it the grid auto-fits, which can leave a row part-empty.
  columns?: 2 | 3 | 4;
  // Minimum cell width before the grid reflows. Ignored when columns is set.
  minItem?: number;
  // The warmer sand-2 sections draw a heavier 2px rule.
  gap?: 1 | 2;
  rounded?: boolean;
  className?: string;
}

const columnTracks = {
  2: "grid-cols-1 tablet:grid-cols-2",
  3: "grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3",
  4: "grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4",
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
  className,
}: HairlineGridProps) {
  return (
    <div
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
          ? "border-t border-l [&>*]:border-r [&>*]:border-b"
          : "border-t-2 border-l-2 [&>*]:border-r-2 [&>*]:border-b-2",
        rounded && "overflow-hidden rounded-[20px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
