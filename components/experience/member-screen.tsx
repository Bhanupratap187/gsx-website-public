import {
  ArrowRight,
  Check,
  CircleDot,
  Diamond,
  House,
  Wallet,
} from "lucide-react";
import { BrandAvatar } from "@/components/ui/brand-avatar";
import { AdvanceButton } from "@/components/interactive/advance-button";
import { ScanSequence } from "@/components/interactive/scan-sequence";
import { PhoneListRow } from "@/components/phone/phone-list-row";
import { PhoneToggleRow } from "@/components/phone/phone-toggle-row";
import { ProgressRing } from "@/components/phone/progress-ring";
import { WalletCard } from "@/components/phone/wallet-card";
import { FINDINGS, MEMBER_SCREENS } from "@/content/experience";
import type { BrandKey, MemberOption } from "@/content/types";

type StageId = keyof typeof MEMBER_SCREENS;

// Screen headings are <p>, not <h3> — they are mockup chrome and would
// otherwise fragment the page outline (PLAN §6.15).
function Kicker({ children }: { children: string }) {
  return (
    <p className="text-blue-ink text-2xs font-extrabold tracking-[0.09em]">
      {children}
    </p>
  );
}

function Title({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-3 text-[26px] leading-[1.1] font-normal tracking-[-0.03em]">
      {children}
    </p>
  );
}

function Body({ children }: { children: string }) {
  return <p className="text-muted mt-3.5 text-sm leading-[1.55]">{children}</p>;
}

function Foot({
  icon,
  children,
}: {
  icon: "check" | "control";
  children: string;
}) {
  const Icon = icon === "check" ? Check : CircleDot;
  return (
    <p className="text-muted-2 mt-auto flex items-start gap-1.5 pt-5 pb-4 text-xs">
      <Icon aria-hidden="true" className="mt-0.5 size-3.5 flex-none" />
      {children}
    </p>
  );
}

function ScreenCta({ children }: { children: string }) {
  return (
    <AdvanceButton className="bg-blue rounded-pill hover:bg-ink mt-5 flex w-full items-center justify-center gap-2 p-4 text-sm font-bold text-white transition-colors">
      {children}
      <ArrowRight aria-hidden="true" className="size-4" />
    </AdvanceButton>
  );
}

function Join() {
  const s = MEMBER_SCREENS.join;
  // Widened from the const tuple so the optional ghost flag is visible.
  const options: readonly MemberOption[] = s.options;
  return (
    <>
      <Kicker>{s.kicker}</Kicker>
      <Title>{s.title}</Title>
      <Body>{s.body}</Body>
      <div className="mt-6 flex flex-col gap-2.5">
        {options.map((option) => (
          <AdvanceButton
            key={option.label}
            className={`hover:border-blue flex w-full items-center gap-3 rounded-2xl border px-4 py-[15px] text-left transition-colors ${
              option.ghost ? "border-line-ghost bg-sand" : "border-line-card"
            }`}
          >
            <BrandAvatar brand={option.ghost ? "muted" : "accent"} size="sm">
              {option.mark}
            </BrandAvatar>
            <span className="text-sm font-bold">{option.label}</span>
          </AdvanceButton>
        ))}
      </div>
      <Foot icon="check">{s.foot}</Foot>
    </>
  );
}

function Permission() {
  const s = MEMBER_SCREENS.permission;
  return (
    <>
      <Kicker>{s.kicker}</Kicker>
      <Title>{s.title}</Title>
      <Body>{s.body}</Body>
      <div className="mt-5 flex gap-2.5">
        {s.perks.map((perk) => (
          <div
            key={perk.title}
            className="bg-blue-150 flex-1 rounded-xl border border-blue-300 p-3.5"
          >
            <p className="text-blue-ink text-2xs font-extrabold tracking-[0.09em]">
              {perk.title}
            </p>
            <p className="text-muted mt-2 text-xs leading-[1.4]">{perk.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-1.5">
        {s.toggles.map((toggle) => (
          <PhoneToggleRow
            key={toggle.title}
            title={toggle.title}
            sub={toggle.sub}
          />
        ))}
      </div>
      <ScreenCta>{s.cta}</ScreenCta>
      <Foot icon="control">{s.foot}</Foot>
    </>
  );
}

function Discover() {
  const s = MEMBER_SCREENS.discover;
  return (
    <>
      <div className="bg-blue-150 rounded-pill mx-auto mt-1.5 mb-1 flex size-[120px] items-center justify-center">
        <span className="rounded-pill flex size-[88px] items-center justify-center border-2 border-blue-400">
          <span className="bg-ink text-blue rounded-pill flex size-14 items-center justify-center text-sm font-extrabold">
            AI
          </span>
        </span>
      </div>
      <ScanSequence
        scanningHead={
          <>
            <Kicker>{s.scanningKicker}</Kicker>
            <Title>{s.scanningTitle}</Title>
          </>
        }
        completeHead={
          <>
            <Kicker>{s.kicker}</Kicker>
            <Title>{s.title}</Title>
          </>
        }
        records={s.records}
        cta={<ScreenCta>{s.cta}</ScreenCta>}
        rows={FINDINGS.map((finding) => (
          <PhoneListRow
            key={finding.name}
            leading={<BrandAvatar brand={finding.brand} />}
            title={finding.name}
            sub={finding.category}
            value={`${finding.confidence}%`}
          />
        ))}
      />
      <Foot icon="check">{s.foot}</Foot>
    </>
  );
}

function Verify() {
  const s = MEMBER_SCREENS.verify;
  return (
    <>
      <Kicker>{s.kicker}</Kicker>
      <Title>{s.title}</Title>
      <Body>{s.body}</Body>
      <div className="mt-3.5">
        {FINDINGS.map((finding) => (
          <PhoneListRow
            key={finding.name}
            leading={<BrandAvatar brand={finding.brand} />}
            title={finding.name}
            sub={finding.cadence}
            value={finding.status === "verified" ? "Verified" : "Review"}
            valueTone={finding.status === "verified" ? "success" : "warn"}
          />
        ))}
      </div>
      <ScreenCta>{s.cta}</ScreenCta>
      <p className="text-blue-ink mt-3.5 text-center text-sm font-bold">
        {s.secondary}
      </p>
      <Foot icon="control">{s.foot}</Foot>
    </>
  );
}

function Activate() {
  const s = MEMBER_SCREENS.activate;
  return (
    <>
      <span className="bg-blue-150 rounded-pill flex w-fit items-center gap-2 px-4 py-2.5 text-xs font-bold">
        <CircleDot aria-hidden="true" className="text-blue size-2.5" />
        {s.badge}
      </span>
      <p className="text-blue-ink text-2xs mt-4.5 font-extrabold tracking-[0.09em]">
        {s.kicker}
      </p>
      <p className="mt-2.5 text-[28px] leading-[1.05] font-normal tracking-[-0.03em]">
        <span className="text-blue-ink font-bold">{s.highlight}</span>
        {s.title}
      </p>
      <Body>{s.body}</Body>
      <ProgressRing
        value={s.ring.value}
        max={s.ring.max}
        className="mt-6 self-center"
      />
      <div className="mt-6">
        {s.rows.map((row) => (
          <PhoneListRow
            key={row.title}
            leading={<BrandAvatar brand={row.brand as BrandKey} />}
            title={row.title}
            sub={row.sub}
            value={row.value}
            divider="top"
          />
        ))}
      </div>
      <ScreenCta>{s.cta}</ScreenCta>
      <Foot icon="control">{s.foot}</Foot>
    </>
  );
}

function Value() {
  const s = MEMBER_SCREENS.value;
  return (
    <>
      <Kicker>{s.kicker}</Kicker>
      <p className="mt-3 text-[28px] leading-[1.08] font-normal tracking-[-0.03em]">
        <span className="text-blue-ink font-bold">{s.highlight}</span>
        {s.title}
      </p>
      <Body>{s.body}</Body>
      <WalletCard
        label={s.wallet.label}
        amount={s.wallet.amount}
        digits={s.wallet.digits}
        className="mt-5"
      />
      <div className="mt-1.5">
        {s.rows.map((row) => (
          <PhoneListRow
            key={row.title}
            leading={<BrandAvatar brand={row.brand as BrandKey} />}
            title={row.title}
            sub={row.sub}
            value={row.value}
          />
        ))}
      </div>
      <Foot icon="control">{s.foot}</Foot>
    </>
  );
}

const screens: Record<StageId, () => React.JSX.Element> = {
  join: Join,
  permission: Permission,
  discover: Discover,
  verify: Verify,
  activate: Activate,
  value: Value,
};

export function MemberScreen({ stage }: { stage: StageId }) {
  const Screen = screens[stage];
  return (
    <div className="flex flex-1 flex-col">
      <Screen />
    </div>
  );
}

const tabs = [
  { icon: House, label: "Home" },
  { icon: Diamond, label: "Rewards" },
  { icon: Wallet, label: "Wallet" },
];

export function MemberTabBar() {
  return (
    <div
      aria-hidden="true"
      className="border-line-soft text-muted-4 flex justify-around border-t pt-3 pb-4"
    >
      {tabs.map((tab, i) => {
        const Icon = tab.icon;
        return (
          <span
            key={tab.label}
            className={`flex flex-col items-center gap-1 ${i === 0 ? "text-blue-ink" : ""}`}
          >
            <Icon className="size-5" />
            <span className="text-2xs font-semibold">{tab.label}</span>
          </span>
        );
      })}
    </div>
  );
}
