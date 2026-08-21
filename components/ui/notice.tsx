import type { ReactNode } from "react";
import { Info } from "lucide-react";
import { cn } from "@/lib/cn";

interface NoticeProps {
  children: ReactNode;
  className?: string;
}

// Marks scaffolded copy on the legal routes so a placeholder can never be
// mistaken for approved text (PLAN §1).
export function Notice({ children, className }: NoticeProps) {
  return (
    <p
      className={cn(
        "text-on-blue-subtle rounded-card flex max-w-[68ch] items-start gap-3 bg-blue-100 p-5 text-sm leading-[1.6] font-semibold",
        className,
      )}
    >
      <Info aria-hidden="true" className="mt-0.5 size-4 flex-none" />
      {children}
    </p>
  );
}
