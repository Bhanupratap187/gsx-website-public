import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface NumberedCardProps {
  index: string;
  title: ReactNode;
  body?: ReactNode;
  children?: ReactNode;
  // "pushed" drops the title by a fixed offset (the live numbered grids);
  // "bottom" pins it with mt-auto, as the platform cards do.
  align?: "top" | "pushed" | "bottom";
  size?: "sm" | "md" | "lg";
  minHeight?: string;
  // Flips the cell to the dark tone on hover, text and accent included.
  invertOnHover?: boolean;
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
  invertOnHover = false,
  className,
}: NumberedCardProps) {
  return (
    <div
      data-tone-hover={invertOnHover ? "dark" : undefined}
      style={minHeight ? { minHeight } : undefined}
      className={cn(
        "bg-ground text-content p-card flex flex-col transition-colors",
        className,
      )}
    >
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
    </div>
  );
}
