import Image from "next/image";
import type { TeamMember } from "@/content/types";
import { SocialIcon } from "./social-icon";
import { SITE } from "@/content/site";

interface TeamCardProps {
  member: TeamMember;
  // Reads after the name, so the icon link carries a real accessible name.
  linkLabel: string;
}

// The portrait is decorative: the name sits right beneath it in text, so an alt
// would only make a screen reader say it twice. It crops from the top because a
// centred square crop takes the forehead off a tall headshot.
export function TeamCard({ member, linkLabel }: TeamCardProps) {
  return (
    <div className="bg-ground p-card-lg flex flex-col items-center text-center">
      <Image
        src={member.photo.src}
        alt=""
        width={member.photo.width}
        height={member.photo.height}
        sizes="144px"
        className="tablet:size-36 size-32 rounded-full object-cover object-top"
      />
      <h3 className="mt-6 text-xl font-bold tracking-[-0.02em]">
        {member.name}
      </h3>
      <p className="text-accent-text mt-1.5 text-base font-bold">
        {member.role}
      </p>
      <div className="mt-5">
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sand-2 text-ink-soft rounded-tile hover:bg-ink flex size-12 items-center justify-center transition-colors hover:text-white"
        >
          <SocialIcon platform="linkedin" className="size-5" />
          <span className="sr-only">
            {member.name} {linkLabel} {SITE.newTabHint}
          </span>
        </a>
      </div>
    </div>
  );
}
