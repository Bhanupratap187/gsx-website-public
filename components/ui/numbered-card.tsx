import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { SelectCard } from "./select-card";

interface NumberedCardProps {
  index: string;
  title: string;
  body?: ReactNode;
  children?: ReactNode;
  // "pushed" drops the title by a fixed offset (the live numbered grids);
  // "bottom" pins it with mt-auto, as the platform cards do.
  align?: "top" | "pushed" | "bottom";
  size?: "sm" | "md" | "lg";
  minHeight?: string;
  // Radio name shared by the grid. Set it to make the card invert on hover and
  // stay inverted once picked; omit it for a static card.
  selectGroup?: string;
  className?: string;
}

const titleSize = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-h3",
} as const;

export function NumberedCard({
  index,
  title,
  body,
  children,
  align = "top",
  size = "sm",
  minHeight,
  selectGroup,
  className,
}: NumberedCardProps) {
  const style = minHeight ? { minHeight } : undefined;
  const shell = cn("p-card flex flex-col", className);

  const content = (
    <>
      <span className="text-accent-text text-xs font-extrabold tracking-[0.1em] transition-colors">
        {index}
      </span>
      <h3
        className={cn(
          "font-bold tracking-[-0.02em]",
          titleSize[size],
          align === "bottom" && "mt-auto pt-8 font-normal tracking-tight",
          align === "pushed" && "mt-[75px]",
          align === "top" && "mt-3.5",
        )}
      >
        {title}
      </h3>
      {body ? (
        <p className="text-content-muted mt-2.5 text-sm leading-[1.62] transition-colors">
          {body}
        </p>
      ) : null}
      {children}
    </>
  );

  if (selectGroup) {
    return (
      <SelectCard
        group={selectGroup}
        label={title}
        style={style}
        className={shell}
      >
        {content}
      </SelectCard>
    );
  }

  return (
    <div
      style={style}
      className={cn("bg-ground text-content transition-colors", shell)}
    >
      {content}
    </div>
  );
}
