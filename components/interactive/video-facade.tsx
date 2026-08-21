"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";
import { cn } from "@/lib/cn";

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

interface VideoFacadeProps {
  title: string;
  // Sits beside the play glyph and opens the button's accessible name.
  label: string;
  closeLabel: string;
  vimeoId?: string;
  poster?: string;
  size?: "lg" | "sm";
  className?: string;
}

// The fifth client island (PLAN §3). It exists so the Vimeo player is only
// fetched after a click — a raw iframe costs ~700 KB and several third-party
// requests at first paint, which the performance budget will not carry.
//
// Playback happens in a dialog rather than in the card: at card size the
// player's own controls are too cramped to hit on a phone. Only one dialog can
// be open at a time, so no cross-player coordination is needed.
export function VideoFacade({
  title,
  label,
  closeLabel,
  vimeoId,
  poster,
  size = "lg",
  className,
}: VideoFacadeProps) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Native <dialog> gives focus trapping, Esc and the top layer for free; the
  // only manual work is locking body scroll. The open checks matter because a
  // second showModal() on an open dialog throws.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      if (!dialog.open) dialog.showModal();
      document.body.style.overflow = "hidden";
    } else {
      if (dialog.open) dialog.close();
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const frame = cn(
    "bg-ink-bezel relative aspect-video overflow-hidden",
    size === "lg" ? "rounded-[20px]" : "rounded-2xl",
    className,
  );

  if (!vimeoId) {
    return <div className={frame} />;
  }

  return (
    <div className={frame}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`${label}: ${title}`}
        className="group absolute inset-0 w-full"
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
            "absolute bottom-0 left-0 flex items-center",
            size === "lg"
              ? "gap-4 p-[clamp(18px,2vw,30px)]"
              : "gap-3 p-[clamp(14px,1.6vw,22px)]",
          )}
        >
          <span
            className={cn(
              "bg-blue text-ink shadow-play grid flex-none place-items-center rounded-full pl-[3px] transition-transform group-hover:scale-107",
              size === "lg" ? "size-[58px]" : "size-[44px]",
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
          <span
            aria-hidden="true"
            className="text-2xs font-extrabold tracking-[0.13em] text-white uppercase"
          >
            {label}
          </span>
        </span>
      </button>

      {/* Esc and the close button dismiss it, matching the nav drawer. The width
          caps against the viewport height too, so the player still fits whole
          on a landscape phone. */}
      <dialog
        ref={dialogRef}
        aria-label={title}
        onClose={() => setOpen(false)}
        className="bg-ink-bezel backdrop:bg-scrim-strong m-auto w-[min(1180px,96vw,calc((88svh-3.5rem)*16/9))] max-w-none overflow-hidden rounded-[clamp(14px,2vw,20px)] p-0 text-white"
      >
        <div className="flex min-h-14 items-center justify-between gap-3 px-4">
          <p className="min-w-0 truncate text-sm font-bold">{title}</p>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={closeLabel}
            className="border-ink-line-3 hover:bg-ink-line flex size-11 flex-none items-center justify-center rounded-full border transition-colors"
          >
            <X aria-hidden="true" className="size-5" />
          </button>
        </div>

        {/* Mounted only while open, so closing the dialog stops playback. Vimeo
            collapses to a compact control set and hides the rest behind an
            overflow chevron when the player is short, so the frame gets a
            height floor and the video letterboxes on a phone. */}
        {open ? (
          <iframe
            src={`${PLAYER_ORIGIN}/video/${vimeoId}?${PLAYER_PARAMS}`}
            title={title}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            allowFullScreen
            className="block aspect-video max-h-[calc(88svh-3.5rem)] min-h-[min(340px,58svh)] w-full"
          />
        ) : null}
      </dialog>
    </div>
  );
}
