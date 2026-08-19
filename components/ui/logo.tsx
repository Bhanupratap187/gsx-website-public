import Image from "next/image";
import { cn } from "@/lib/cn";

interface LogoProps {
  className?: string;
  // Only the header mark is above the fold; the rest can wait for layout.
  priority?: boolean;
}

// The brand mark, cropped from the left half of the GSX_LOGO-02 lockup. Every
// usage sits beside the brand name, so the image itself is decorative. Callers
// set a height only — width follows the artwork so the bolt never squashes.
export function Logo({ className, priority = false }: LogoProps) {
  return (
    <Image
      src="/gsx-mark.png"
      alt=""
      width={320}
      height={211}
      priority={priority}
      className={cn("h-[33px] w-auto", className)}
    />
  );
}
