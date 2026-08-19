import type { Video } from "@/content/types";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { ArrowLink } from "@/components/ui/arrow-link";
import { SITE } from "@/content/site";
import { VideoFacade } from "@/components/interactive/video-facade";
import { VIDEOS, VIDEOS_SECTION } from "@/content/videos";

const [featured, ...rest] = VIDEOS;

export function Videos() {
  return (
    <Section id="videos" labelledBy="videos-title">
      <SectionHeader
        id="videos-title"
        kicker={VIDEOS_SECTION.kicker}
        title={VIDEOS_SECTION.title}
        lede={VIDEOS_SECTION.lede}
        size="md"
      />

      <div className="mt-block grid items-start gap-[clamp(20px,2.4vw,36px)] lg:grid-cols-2">
        <article>
          <VideoFacade
            title={featured.title}
            vimeoId={featured.vimeoId}
            poster={featured.poster}
          />
          <p className="text-blue-ink mt-5 text-xs font-bold tracking-[0.13em]">
            {featured.kicker} · {featured.duration}
          </p>
          <h3 className="mt-2.5 text-[clamp(22px,2vw,30px)] font-normal tracking-[-0.025em]">
            {featured.title}
          </h3>
          <p className="text-muted mt-3 max-w-155 text-base leading-[1.6]">
            {featured.body}
          </p>
        </article>

        <div className="flex flex-col gap-[clamp(20px,2.4vw,32px)]">
          {rest.map((video: Video) => (
            <article key={video.id}>
              <VideoFacade
                title={video.title}
                vimeoId={video.vimeoId}
                poster={video.poster}
                size="sm"
              />
              <p className="text-blue-ink mt-4 text-xs font-bold tracking-[0.13em]">
                {video.kicker} · {video.duration}
              </p>
              <h3 className="mt-2 text-xl font-bold tracking-[-0.02em]">
                {video.title}
              </h3>
              <p className="text-muted mt-2 text-base leading-[1.55]">
                {video.body}
              </p>
            </article>
          ))}
        </div>
      </div>

      <ArrowLink
        href={SITE.videoLibraryUrl}
        direction="up-right"
        className="mt-8"
      >
        {VIDEOS_SECTION.libraryLink}
      </ArrowLink>
    </Section>
  );
}
