import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ProseProps {
  children: ReactNode;
  className?: string;
}

// Typography for the legal and support routes, which are plain prose rather
// than composed sections.
export function Prose({ children, className }: ProseProps) {
  return (
    <div
      className={cn(
        "text-md text-content-muted max-w-[68ch] leading-[1.7]",
        "[&_h2]:text-h4 [&_h2]:text-content [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:font-bold",
        "[&_h3]:text-content [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-lg [&_h3]:font-bold",
        "[&_li]:mb-2 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5",
        "[&_ol]:mb-4 [&_ol]:list-[lower-alpha] [&_ol]:pl-5",
        "[&_a]:text-accent-text [&_a]:font-bold [&_a]:underline",
        className,
      )}
    >
      {children}
    </div>
  );
}
