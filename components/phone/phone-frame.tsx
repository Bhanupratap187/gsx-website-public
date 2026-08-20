import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/ui/logo";

interface PhoneFrameProps {
  children: ReactNode;
  // Screen ground. The trainer mockups use the warm sand, the member app white.
  screen?: "white" | "sand";
  bezel?: "dark" | "darker";
  // Small caps label beside the mark in the app header.
  label?: string;
  avatar?: string;
  tabBar?: ReactNode;
  className?: string;
}

// Fluid by construction: the prototype's fixed 340px width and 640px min-height
// overflowed a 360px viewport (PLAN §6.8). Width and radius scale down instead.
// The screen takes an iPhone's 393x852 ratio rather than a viewport-height
// clamp, which stretched the device to 1:2.5 on tall windows.
//
// The ratio and the inner scroll only apply from lg, where the phone sits in
// its own column. Below that it spans the content width, so a scroller there
// swallows the page scroll and the reader is stuck inside the mockup.
export function PhoneFrame({
  children,
  screen = "white",
  bezel = "dark",
  label = "GYMSCIENCX",
  avatar,
  tabBar,
  className,
}: PhoneFrameProps) {
  return (
    <div
      className={cn(
        "shadow-phone w-[min(352px,100%)] rounded-[clamp(32px,9vw,48px)] p-3",
        bezel === "dark" ? "bg-ink-bezel" : "bg-ink-bezel-2",
        className,
      )}
    >
      <div
        className={cn(
          "text-ink flex min-h-[600px] flex-col overflow-hidden rounded-[clamp(24px,7vw,38px)] lg:aspect-[393/852] lg:min-h-0",
          screen === "white" ? "bg-white" : "bg-sand",
        )}
      >
        <div
          aria-hidden="true"
          className="flex items-center justify-between px-6 pt-4 pb-1.5 text-xs font-bold"
        >
          <span>9:41</span>
          <span className="rounded-pill bg-ink-bezel h-[22px] w-[82px]" />
          <span className="flex items-center gap-[3px]">
            <span className="bg-ink h-2 w-[3px] rounded-[1px]" />
            <span className="bg-ink h-2.5 w-[3px] rounded-[1px]" />
            <span className="bg-ink ml-0.5 h-2.5 w-4 rounded-[3px]" />
          </span>
        </div>

        <div className="flex items-center gap-2.5 px-6 pt-3.5">
          <Logo className="h-4" />
          <span className="text-2xs font-extrabold tracking-[0.09em]">
            {label}
          </span>
          {avatar ? (
            <span className="rounded-pill text-blue-ink text-2xs ml-auto flex size-[30px] items-center justify-center bg-blue-200 font-extrabold">
              {avatar}
            </span>
          ) : null}
        </div>

        {/* Scrolls like a real device from lg, so a long screen never resizes the
            frame. Chaining is left on so reaching the end resumes the page. */}
        <div className="flex flex-1 flex-col px-6 pt-6 lg:min-h-0 lg:overflow-y-auto">
          {children}
        </div>

        {tabBar}
      </div>
    </div>
  );
}
