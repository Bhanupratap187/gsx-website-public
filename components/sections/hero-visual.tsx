import { ArrowUpRight, Check } from "lucide-react";
import { cn } from "@/lib/cn";
import type { BarTone } from "@/content/types";
import { HERO_VISUAL } from "@/content/hero";

const { intelligence, command, status, formula, formulaResult } = HERO_VISUAL;

const BAR_TONE = {
  low: "bg-blue-bar",
  mid: "bg-blue-bar-soft",
  accent: "bg-blue",
  peak: "bg-ink",
} as const satisfies Record<BarTone, string>;

// All three floating cards share one glass treatment; only radius and box differ.
const signalCard =
  "border-glass-edge bg-glass shadow-hero border backdrop-blur-[18px]";

const cardLabel =
  "text-2xs text-muted font-extrabold tracking-[0.09em] uppercase";

function IntelligenceCard() {
  return (
    <div className={cn(signalCard, "rounded-[28px] p-[27px]")}>
      <p className="text-muted flex items-center justify-between text-xs font-extrabold tracking-[0.09em] uppercase">
        {intelligence.kicker}
        <span
          aria-hidden="true"
          className="bg-blue shadow-dot size-2 rounded-full"
        />
      </p>
      <strong className="mt-7 block text-[clamp(46px,5vw,70px)] leading-[0.9] font-bold tracking-[-0.065em]">
        {intelligence.value}
      </strong>
      <p className="text-muted mt-2 mb-[26px] text-sm">
        {intelligence.caption}
      </p>
      <div
        aria-hidden="true"
        className="border-line flex h-[76px] items-end gap-[7px] border-b px-0.5 pb-[9px]"
      >
        {intelligence.bars.map(({ height, tone }, i) => (
          <span
            key={i}
            style={{ height: `${height}%` }}
            className={cn(
              "flex-1 rounded-t-[5px] rounded-b-[2px]",
              BAR_TONE[tone],
            )}
          />
        ))}
      </div>
      <div className="text-muted text-fine mt-[17px] flex items-center justify-between">
        <span>{intelligence.footLabel}</span>
        <b className="text-content text-md font-bold">
          {intelligence.footValue}
        </b>
      </div>
    </div>
  );
}

function CommandCard() {
  return (
    <div
      className={cn(
        signalCard,
        "grid gap-[3px] rounded-[18px] px-[18px] py-[17px]",
      )}
    >
      <span className="bg-ink text-blue mb-1.5 grid size-7 place-items-center rounded-[9px]">
        <ArrowUpRight aria-hidden="true" className="size-3.5" />
      </span>
      <small className={cardLabel}>{command.kicker}</small>
      <strong className="text-base font-bold">{command.title}</strong>
      <span className="text-blue-ink text-xs font-bold">{command.sub}</span>
    </div>
  );
}

function StatusCard() {
  return (
    <div
      className={cn(
        signalCard,
        "grid grid-cols-[auto_1fr_auto] items-center gap-[11px] rounded-[18px] p-[15px]",
      )}
    >
      <span className="text-blue-ink text-fine grid size-[38px] place-items-center rounded-full bg-blue-100 font-extrabold">
        AI
      </span>
      <span className="min-w-0">
        <small className={cn(cardLabel, "block")}>{status.kicker}</small>
        <strong className="text-fine block leading-[1.25] font-bold">
          {status.title}
        </strong>
      </span>
      <span className="bg-blue grid size-[26px] place-items-center rounded-full text-white">
        <Check aria-hidden="true" className="size-3.5" />
      </span>
    </div>
  );
}

function FormulaPill() {
  return (
    <div className="bg-ink rounded-pill text-2xs flex flex-wrap items-center gap-[7px] px-[13px] py-2.5 text-white/70">
      {formula.map((word, i) => (
        <span key={word} className="contents">
          <span>{word}</span>
          <b className="text-blue">{i === formula.length - 1 ? "→" : "+"}</b>
        </span>
      ))}
      <strong className="text-white">{formulaResult}</strong>
    </div>
  );
}

// Absolute composition at lg and above; below that the same cards stack, since
// at 375px the overlapping layout was unreadable (PLAN §6.3).
export function HeroVisual() {
  return (
    <div className="relative isolate mx-auto w-[min(620px,100%)] min-w-0 lg:mx-0 lg:min-h-[540px] lg:w-full">
      <div
        aria-hidden="true"
        className="border-glass-edge shadow-disc absolute inset-[32px_10px_20px_40px] -z-20 hidden rounded-full border bg-[linear-gradient(145deg,var(--color-disc-top),var(--color-disc-bottom))] lg:block"
      />
      <div
        aria-hidden="true"
        className="border-orbit absolute inset-[4px_-18px_-6px_7px] -z-10 hidden rounded-full border lg:block"
      />
      <div
        aria-hidden="true"
        className="border-orbit absolute inset-[78px_52px_65px_76px] -z-10 hidden rounded-full border border-dashed lg:block"
      />

      <div className="flex flex-col gap-5 lg:block">
        <div className="lg:absolute lg:top-[83px] lg:left-1/2 lg:w-[min(390px,75%)] lg:-translate-x-1/2">
          <IntelligenceCard />
        </div>
        <div className="lg:absolute lg:top-[34px] lg:right-[-10px] lg:w-[190px]">
          <CommandCard />
        </div>
        <div className="lg:absolute lg:right-[18px] lg:bottom-[65px] lg:w-[248px]">
          <StatusCard />
        </div>
        <div className="lg:absolute lg:bottom-[12px] lg:left-[34px]">
          <FormulaPill />
        </div>
      </div>
    </div>
  );
}
