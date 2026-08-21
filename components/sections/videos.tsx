import type { Video } from "@/content/types";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { SITE } from "@/content/site";
import { VideoFacade } from "@/components/interactive/video-facade";
import { VIDEOS, VIDEOS_SECTION } from "@/content/videos";

const [featured, ...rest] = VIDEOS;

const card = "shadow-card overflow-hidden rounded-[20px] bg-white";
const meta = "text-blue-ink text-xs font-bold tracking-[0.13em]";

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

      <div className="mt-block laptop:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] grid gap-[clamp(16px,1.8vw,24px)]">
        <article className={`${card} flex flex-col`}>
          <VideoFacade
            title={featured.title}
            label={VIDEOS_SECTION.playFeatured}
            vimeoId={featured.vimeoId}
            poster={featured.poster}
            className="rounded-none"
          />
          <div className="p-card-lg">
            <p className={meta}>
              {featured.kicker} · {featured.duration}
            </p>
            <h3 className="mt-2.5 text-[clamp(22px,2vw,30px)] font-normal tracking-[-0.025em]">
              {featured.title}
            </h3>
            <p className="text-muted mt-3 max-w-155 text-base leading-[1.6]">
              {featured.body}
            </p>
          </div>
        </article>

        <div className="laptop:grid-rows-2 grid gap-[clamp(16px,1.8vw,24px)]">
          {rest.map((video: Video) => (
            // The media pane fills the card height from tablet up, so the two
            // stacked cards stay the same height whatever their copy runs to.
            <article
              key={video.id}
              className={`${card} tablet:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] grid`}
            >
              <VideoFacade
                title={video.title}
                label={VIDEOS_SECTION.play}
                vimeoId={video.vimeoId}
                poster={video.poster}
                size="sm"
                className="tablet:aspect-auto tablet:h-full rounded-none"
              />
              <div className="p-card">
                <p className={meta}>
                  {video.kicker} · {video.duration}
                </p>
                <h3 className="mt-2 text-xl font-bold tracking-[-0.02em]">
                  {video.title}
                </h3>
                <p className="text-muted mt-2 text-base leading-[1.55]">
                  {video.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <a
        href={SITE.videoLibraryUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="border-line group hover:text-blue-ink mt-9 flex min-h-14 items-center justify-between gap-4 border-t pt-6 transition-colors"
      >
        <span className="text-xs font-bold tracking-[0.13em] uppercase">
          {VIDEOS_SECTION.libraryLink}
          <span className="sr-only"> {SITE.newTabHint}</span>
        </span>
        <ArrowUpRight
          aria-hidden="true"
          className="text-blue-ink size-5 flex-none transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </a>
    </Section>
  );
}
