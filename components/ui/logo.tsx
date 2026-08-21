import Image from "next/image";
import { SITE } from "@/content/site";
import { cn } from "@/lib/cn";

// The lockup carries the wordmark and tagline, so it stands alone as the brand
// identifier. The mark is the same artwork cropped to the G/X glyph, for the
// phone mockups where a 16px-tall lockup would be an illegible smudge.
const artwork = {
  lockup: { src: "/gsx-lockup.png", width: 1200, height: 492 },
  mark: { src: "/gsx-mark.png", width: 320, height: 211 },
} as const;

interface LogoProps {
  variant?: keyof typeof artwork;
  className?: string;
  // Only the header lockup is above the fold; the rest can wait for layout.
  priority?: boolean;
}

// Callers set a height only — width follows the artwork so the bolt never
// squashes. The mark is decorative because it always sits beside the app name.
export function Logo({
  variant = "lockup",
  className,
  priority = false,
}: LogoProps) {
  const art = artwork[variant];

  return (
    <Image
      src={art.src}
      alt={variant === "lockup" ? SITE.name : ""}
      width={art.width}
      height={art.height}
      priority={priority}
      className={cn("w-auto", className)}
    />
  );
}
