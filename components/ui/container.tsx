import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "px-gutter mx-auto w-[min(var(--container-site),100%_-_var(--spacing-shell))]",
        className,
      )}
    >
      {children}
    </div>
  );
}
