import type { ReactNode } from "react";
import Image from "next/image";
import type { BrandKey as PartnerBrand } from "@/content/types";
import { BRAND_LOGOS } from "@/content/brands";
import { cn } from "@/lib/cn";

export type BrandKey = PartnerBrand | "accent" | "muted";

const palette = {
  accent: "bg-blue-100 text-blue-ink",
  muted: "bg-fill-inactive text-muted-2",
} as const;

const sizes = {
  sm: "size-[30px] text-xs",
  md: "size-[34px] text-sm",
  lg: "size-[38px] text-sm",
} as const;

const radii = {
  sm: "rounded-lg",
  md: "rounded-[10px]",
  lg: "rounded-[10px]",
} as const;

// Drives the `sizes` hint so next/image serves a 48px variant rather than the
// full-resolution source into a 38px slot.
const slotPx = { sm: 30, md: 34, lg: 38 } as const;

// Pura Vida's mark is a filled circle on white, so a square frame would show
// its corners. The other two are already edge-to-edge artwork.
const partnerShape: Record<PartnerBrand, "tile" | "circle"> = {
  alo: "tile",
  glow: "tile",
  pura: "circle",
};

function isPartner(brand: BrandKey): brand is PartnerBrand {
  return brand in BRAND_LOGOS;
}

interface BrandAvatarProps {
  brand?: BrandKey;
  size?: keyof typeof sizes;
  // The letter mark, for tones that have no artwork of their own.
  children?: ReactNode;
  className?: string;
}

export function BrandAvatar({
  brand = "accent",
  size = "md",
  children,
  className,
}: BrandAvatarProps) {
  if (isPartner(brand)) {
    const logo = BRAND_LOGOS[brand];

    return (
      <Image
        src={logo.src}
        alt=""
        width={logo.width}
        height={logo.height}
        sizes={`${slotPx[size]}px`}
        className={cn(
          "flex-none object-cover",
          sizes[size],
          partnerShape[brand] === "circle" ? "rounded-full" : radii[size],
          className,
        )}
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex flex-none items-center justify-center font-extrabold",
        palette[brand],
        sizes[size],
        radii[size],
        className,
      )}
    >
      {children}
    </span>
  );
}
