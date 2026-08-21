import type { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const tag = cva(
  "inline-flex items-center rounded-pill border font-bold tracking-[0.09em]",
  {
    variants: {
      variant: {
        light: "border-line-tag text-ink-soft",
        dark: "border-ink-line-3 text-muted-dark-3",
        // Follows a `group` card that inverts on hover or selection. The tone
        // tokens cannot carry this: the tag palette is its own pair.
        invert:
          "border-line-tag text-ink-soft group-hover:border-ink-line-3 group-hover:text-muted-dark-3 group-has-[:checked]:border-ink-line-3 group-has-[:checked]:text-muted-dark-3",
      },
      size: {
        sm: "px-3.5 py-2 text-2xs",
        md: "px-4 py-[9px] text-2xs",
        lg: "px-5 py-[11px] text-sm font-normal tracking-normal",
      },
    },
    defaultVariants: { variant: "light", size: "md" },
  },
);

interface TagProps extends VariantProps<typeof tag> {
  children: ReactNode;
  className?: string;
}

export function Tag({ children, variant, size, className }: TagProps) {
  return (
    <span className={cn(tag({ variant, size }), className)}>{children}</span>
  );
}
