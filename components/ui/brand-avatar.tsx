import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type BrandKey = "alo" | "glow" | "pura" | "accent" | "muted";

const palette: Record<BrandKey, string> = {
  alo: "bg-brand-alo text-brand-alo-ink",
  glow: "bg-brand-glow text-brand-glow-ink",
  pura: "bg-brand-pura text-brand-pura-ink",
  accent: "bg-blue-100 text-blue-ink",
  muted: "bg-fill-inactive text-muted-2",
};

const sizes = {
  sm: "size-[30px] rounded-lg text-xs",
  md: "size-[34px] rounded-[10px] text-sm",
  lg: "size-[38px] rounded-[10px] text-sm",
} as const;

interface BrandAvatarProps {
  brand?: BrandKey;
  size?: keyof typeof sizes;
  children: ReactNode;
  className?: string;
}

export function BrandAvatar({
  brand = "accent",
  size = "md",
  children,
  className,
}: BrandAvatarProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex flex-none items-center justify-center font-extrabold",
        palette[brand],
        sizes[size],
        className,
      )}
    >
      {children}
    </span>
  );
}
