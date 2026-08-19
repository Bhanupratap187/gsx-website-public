import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./container";

export type Tone = "light" | "light-2" | "dark" | "blue";

interface SectionProps {
  children: ReactNode;
  id?: string;
  tone?: Tone;
  // Draws the 1px rule the prototype uses between adjacent light sections.
  bordered?: boolean;
  // Set false for full-bleed content such as the edge-to-edge triptych.
  contained?: boolean;
  labelledBy?: string;
  className?: string;
}

export function Section({
  children,
  id,
  tone = "light",
  bordered = false,
  contained = true,
  labelledBy,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      data-tone={tone}
      aria-labelledby={labelledBy}
      className={cn(
        "bg-ground text-content",
        contained && "py-section",
        bordered && "border-rule border-t",
        className,
      )}
    >
      {contained ? <Container>{children}</Container> : children}
    </section>
  );
}
