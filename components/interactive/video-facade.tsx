"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { cn } from "@/lib/cn";
import {
  getActiveVideo,
  getActiveVideoOnServer,
  setActiveVideo,
  subscribeActiveVideo,
} from "@/lib/active-video";

const PLAYER_ORIGIN = "https://player.vimeo.com";

// controls=1 overrides whatever the video's own embed preset sets, and
// playsinline keeps iOS from handing playback to the native fullscreen player,
// which is where the chrome stops responding to taps.
const PLAYER_PARAMS = [
  "autoplay=1",
  "controls=1",
  "playsinline=1",
  "dnt=1",
  "title=0",
  "byline=0",
  "portrait=0",
].join("&");

// Vimeo's player takes commands over postMessage, so controlling it needs no SDK.
function command(frame: HTMLIFrameElement | null, payload: object) {
  frame?.contentWindow?.postMessage(JSON.stringify(payload), PLAYER_ORIGIN);
}

function parsePlayerMessage(data: unknown) {
  if (typeof data === "object" && data !== null)
    return data as { event?: string };
  if (typeof data !== "string") return null;
  try {
    return JSON.parse(data) as { event?: string };
  } catch {
    return null;
  }
}

interface VideoFacadeProps {
  title: string;
  vimeoId?: string;
  poster?: string;
  size?: "lg" | "sm";
  className?: string;
}

// The fifth client island (PLAN §3). It exists so the Vimeo player is only
// fetched after a click — a raw iframe costs ~700 KB and several third-party
// requests at first paint, which the performance budget will not carry.
export function VideoFacade({
  title,
  vimeoId,
  poster,
  size = "lg",
  className,
}: VideoFacadeProps) {
  const [playing, setPlaying] = useState(false);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const activeId = useSyncExternalStore(
    subscribeActiveVideo,
    getActiveVideo,
    getActiveVideoOnServer,
  );

  // Pressing play inside Vimeo's own controls has to claim the slot too, or a
  // resumed video would leave a second one running.
  useEffect(() => {
    if (!playing || !vimeoId) return;
    const frame = frameRef.current;
    if (!frame) return;

    const onMessage = (event: MessageEvent) => {
      if (event.origin !== PLAYER_ORIGIN) return;
      if (event.source !== frame.contentWindow) return;
      const message = parsePlayerMessage(event.data);
      if (message?.event === "ready") {
        command(frame, { method: "addEventListener", value: "play" });
      } else if (message?.event === "play") {
        setActiveVideo(vimeoId);
      }
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [playing, vimeoId]);

  // Anything that no longer owns playback stops, keeping its position.
  useEffect(() => {
    if (playing && vimeoId && activeId !== vimeoId) {
      command(frameRef.current, { method: "pause" });
    }
  }, [playing, vimeoId, activeId]);

  const frame = cn(
    "bg-ink-bezel relative aspect-video overflow-hidden",
    size === "lg" ? "rounded-[20px]" : "rounded-2xl",
    className,
  );

  if (!vimeoId) {
    return <div className={frame} />;
  }

  if (playing) {
    return (
      <div className={frame}>
        <iframe
          ref={frameRef}
          src={`${PLAYER_ORIGIN}/video/${vimeoId}?${PLAYER_PARAMS}`}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          allowFullScreen
          className="absolute inset-0 size-full"
        />
      </div>
    );
  }

  return (
    <div className={frame}>
      <button
        type="button"
        onClick={() => {
          setActiveVideo(vimeoId);
          setPlaying(true);
        }}
        aria-label={`Play ${title}`}
        className="group absolute inset-0 grid w-full place-items-center"
      >
        {poster ? (
          <Image
            src={poster}
            alt=""
            fill
            sizes={
              size === "lg"
                ? "(min-width: 941px) 55vw, 100vw"
                : "(min-width: 941px) 30vw, 100vw"
            }
            className="object-cover"
          />
        ) : null}
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(transparent_38%,var(--color-scrim))] transition-colors group-hover:bg-[linear-gradient(transparent_20%,var(--color-scrim-strong))]"
        />
        <span
          className={cn(
            "bg-blue text-ink shadow-play relative grid place-items-center rounded-full pl-[3px] transition-transform group-hover:scale-107",
            size === "lg" ? "size-[58px]" : "size-[42px]",
          )}
        >
          <Play
            aria-hidden="true"
            className={cn(
              "fill-current",
              size === "lg" ? "size-5" : "size-3.5",
            )}
          />
        </span>
      </button>
    </div>
  );
}
