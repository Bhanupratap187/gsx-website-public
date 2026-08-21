import { ArrowRight, Check, CircleDot, Pencil, X } from "lucide-react";
import { BrandAvatar } from "@/components/ui/brand-avatar";
import { Meter } from "@/components/ui/meter";
import { NetworkCalculator } from "@/components/interactive/network-calculator";
import {
  CONSENT_LEDGER,
  CONSENT_SUMMARY,
  FINDINGS,
  ONBOARDING_FLOW,
  OWNER_PANEL,
  REWARD_JOURNEYS,
  SCANNER_STEPS,
  SIGNAL_CHIPS,
  TRUST_NOTES,
  VALUE_LEGEND,
} from "@/content/experience";
import type { BrandKey } from "@/content/types";

type StageId =
  "join" | "permission" | "discover" | "verify" | "activate" | "value";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-line-soft border-t px-[clamp(24px,2.4vw,38px)] py-[clamp(22px,2vw,32px)]">
      {children}
    </div>
  );
}

function PanelHead({
  kicker,
  title,
  aside,
}: {
  kicker: string;
  title: string;
  aside?: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-4">
      <div>
        <p className="text-blue-ink text-xs font-extrabold tracking-[0.09em]">
          {kicker}
        </p>
        <p className="text-panel mt-2.5 font-normal">{title}</p>
      </div>
      {aside}
    </div>
  );
}

function StatusChip({ children }: { children: string }) {
  return (
    <span className="border-line-card rounded-pill flex items-center gap-2.5 border px-4.5 py-2.5 text-sm font-bold">
      <CircleDot aria-hidden="true" className="text-blue size-2.5" />
      {children}
    </span>
  );
}

// Below md each cell carries its own label, so a wrapped value is never
// orphaned from its column header (PLAN §6.5).
// Below md the table linearises: the ::before carries the column header and sits
// in a fixed first column, with every child forced into the second so a cell
// with two lines still reads as one label/value pair rather than a stack.
// The brand cell carries no mobile header: the logo and name identify the row,
// so it spans the full width at the left edge instead of sitting in column two.
const DECISIONS = [
  { label: "Confirm", Icon: Check },
  { label: "Edit", Icon: Pencil },
  { label: "Reject", Icon: X },
] as const;

const identityCell =
  "block pt-0.5 pb-3 md:table-cell md:py-4.5 md:align-middle";

const cell =
  "grid grid-cols-[6.5rem_minmax(0,1fr)] items-baseline gap-x-4 py-1.5 [&>*]:col-start-2 before:text-2xs before:font-bold before:tracking-[0.09em] before:text-muted-2 before:content-[attr(data-label)] md:table-cell md:py-4.5 md:align-middle md:[&>*]:col-start-auto md:before:hidden";

function Join() {
  return (
    <>
      <Frame>
        <div className="@container flex flex-wrap items-center gap-2.5">
          {ONBOARDING_FLOW.map((step, i) => (
            <span key={step.index} className="contents">
              <div className="border-line-card min-w-[150px] flex-1 rounded-2xl border p-4">
                <span className="text-blue-ink text-xs font-bold tracking-[0.13em]">
                  {step.index}
                </span>
                <p className="mt-2 text-base font-bold">{step.title}</p>
                <p className="text-muted-2 mt-1 text-sm">{step.sub}</p>
              </div>
              {i < ONBOARDING_FLOW.length - 1 ? (
                <ArrowRight
                  aria-hidden="true"
                  className="text-blue hidden size-4 flex-none @[720px]:block"
                />
              ) : null}
            </span>
          ))}
        </div>
      </Frame>
      <Frame>
        <div className="grid gap-5.5 sm:grid-cols-3">
          {TRUST_NOTES.map((note) => (
            <div key={note.title} className="flex items-start gap-3">
              <BrandAvatar size="md">{note.mark}</BrandAvatar>
              <div>
                <p className="text-base font-bold">{note.title}</p>
                <p className="text-muted-2 mt-1 text-sm leading-[1.5]">
                  {note.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Frame>
    </>
  );
}

function Permission() {
  return (
    <Frame>
      <PanelHead
        kicker={OWNER_PANEL.consentLedgerKicker}
        title={OWNER_PANEL.consentLedgerTitle}
        aside={<StatusChip>{OWNER_PANEL.auditLabel}</StatusChip>}
      />
      <div className="mt-5 flex flex-col">
        {CONSENT_LEDGER.map((row) => (
          <div
            key={row.title}
            className="border-line-soft flex flex-wrap items-center gap-4 border-t py-4"
          >
            <BrandAvatar brand={row.allowed ? "accent" : "muted"}>
              {row.allowed ? (
                <Check className="size-3.5" />
              ) : (
                <X className="size-3.5" />
              )}
            </BrandAvatar>
            <span className="min-w-0 flex-[2_1_240px]">
              <span
                className={`block text-base font-bold ${row.allowed ? "" : "text-muted-2"}`}
              >
                {row.title}
              </span>
              <span className="text-muted-2 mt-1 block text-sm">
                {row.detail}
              </span>
            </span>
            <span className="text-muted flex-[1_1_120px] text-sm">
              {row.source}
            </span>
            <span
              className={`flex flex-none items-center gap-2 text-sm font-bold ${
                row.allowed ? "text-blue-ink" : "text-muted-4"
              }`}
            >
              <CircleDot aria-hidden="true" className="size-2.5" />
              {row.state}
            </span>
          </div>
        ))}
      </div>
      <p className="border-blue bg-blue-150 text-ink-soft mt-5.5 border-l-4 px-5 py-4 text-sm leading-[1.55]">
        <strong className="text-ink font-bold">What the gym receives:</strong>{" "}
        {CONSENT_SUMMARY}
      </p>
    </Frame>
  );
}

function FindingsTable({ withDecision = false }: { withDecision?: boolean }) {
  return (
    <table className="mt-5.5 w-full border-collapse text-left">
      <thead className="hidden md:table-header-group">
        <tr className="text-muted-2 text-2xs font-bold tracking-[0.09em]">
          <th scope="col" className="border-line-soft border-b pb-3">
            FINDING
          </th>
          <th scope="col" className="border-line-soft border-b pb-3">
            EVIDENCE
          </th>
          <th scope="col" className="border-line-soft border-b pb-3">
            CONFIDENCE
          </th>
          <th scope="col" className="border-line-soft border-b pb-3">
            ANNUAL VALUE
          </th>
          {withDecision ? (
            <th scope="col" className="border-line-soft border-b pb-3">
              DECISION
            </th>
          ) : null}
        </tr>
      </thead>
      <tbody>
        {FINDINGS.map((f) => (
          <tr
            key={f.name}
            className="border-line-soft block border-b py-4 md:table-row md:py-0"
          >
            <td className={identityCell}>
              <span className="flex items-center gap-3">
                <BrandAvatar brand={f.brand} size="lg" />
                <span>
                  <span className="block text-base font-bold">{f.name}</span>
                  <span className="text-muted-2 block text-sm">
                    {f.category}
                  </span>
                </span>
              </span>
            </td>
            <td className={cell} data-label="EVIDENCE">
              <span className="block text-base font-bold">{f.evidence}</span>
              <span className="text-muted-2 block text-sm">{f.cadence}</span>
            </td>
            <td className={cell} data-label="CONFIDENCE">
              <Meter
                value={f.confidence}
                label={`${f.confidence}%`}
                className="max-w-[130px]"
              />
            </td>
            <td className={cell} data-label="ANNUAL VALUE">
              <span className="text-md block font-bold">{f.annualValue}</span>
              <span className="text-muted-2 block text-sm">gym potential</span>
            </td>
            {withDecision ? (
              <td className={cell} data-label="DECISION">
                <span className="@container flex flex-wrap gap-2">
                  {DECISIONS.map(({ label, Icon }) => {
                    const active =
                      (f.status === "verified" && label === "Confirm") ||
                      (f.status === "review" && label === "Edit");
                    return (
                      <span
                        key={label}
                        className={`flex size-9 items-center justify-center rounded-lg border text-sm font-bold @[320px]:w-auto @[320px]:px-3.5 ${
                          active
                            ? "border-blue text-blue-ink"
                            : "border-line-card text-ink-soft"
                        }`}
                      >
                        <Icon
                          aria-hidden="true"
                          className="size-4 @[320px]:hidden"
                        />
                        <span className="sr-only @[320px]:not-sr-only">
                          {label}
                        </span>
                      </span>
                    );
                  })}
                </span>
              </td>
            ) : null}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Discover() {
  return (
    <Frame>
      <PanelHead
        kicker={OWNER_PANEL.scannerKicker}
        title={OWNER_PANEL.scannerTitle}
        aside={
          <span className="bg-ink rounded-pill px-5 py-2.5 text-sm font-bold text-white">
            {OWNER_PANEL.scannerCount}
          </span>
        }
      />
      <div className="@container mt-5.5 flex flex-wrap items-center gap-2">
        {SCANNER_STEPS.map((step, i) => (
          <span key={step.index} className="contents">
            <div className="bg-surface min-w-[130px] flex-1 rounded-xl p-3.5">
              <span className="text-blue-ink text-2xs font-bold tracking-[0.13em]">
                {step.index}
              </span>
              <p className="mt-1.5 text-base font-bold">{step.title}</p>
              <p className="text-muted-2 mt-0.5 text-sm">{step.sub}</p>
            </div>
            {i < SCANNER_STEPS.length - 1 ? (
              <ArrowRight
                aria-hidden="true"
                className="text-blue hidden size-4 flex-none @[760px]:block"
              />
            ) : null}
          </span>
        ))}
      </div>
      <FindingsTable />
    </Frame>
  );
}

function Verify() {
  return (
    <Frame>
      <PanelHead
        kicker={OWNER_PANEL.vaultKicker}
        title={OWNER_PANEL.vaultTitle}
        aside={
          <span className="bg-blue rounded-pill px-5.5 py-3 text-sm font-bold text-white">
            {OWNER_PANEL.vaultAction}
          </span>
        }
      />
      <FindingsTable withDecision />
      <div className="text-muted mt-4.5 flex flex-wrap gap-5 text-sm">
        {VALUE_LEGEND.map((item) => (
          <span key={item.label} className="flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className={`rounded-pill size-2.5 ${
                item.tone === "amber"
                  ? "bg-warn-dot"
                  : item.tone === "blue"
                    ? "bg-blue"
                    : "bg-ink"
              }`}
            />
            {item.label}
          </span>
        ))}
      </div>
    </Frame>
  );
}

function Activate() {
  return (
    <Frame>
      <PanelHead
        kicker={OWNER_PANEL.rewardKicker}
        title={OWNER_PANEL.rewardTitle}
        aside={<StatusChip>{OWNER_PANEL.rewardCount}</StatusChip>}
      />
      <div className="mt-5.5">
        {REWARD_JOURNEYS.map((journey) => (
          <div
            key={journey.index}
            className="border-line-soft @container flex flex-wrap items-center gap-4 border-t py-4.5"
          >
            <span className="text-muted-4 hidden flex-none text-sm font-bold @[560px]:block">
              {journey.index}
            </span>
            <BrandAvatar brand={journey.brand as BrandKey} size="lg" />
            <span className="min-w-0 flex-[2_1_190px]">
              <span className="text-muted-2 text-2xs block font-bold tracking-[0.09em]">
                TRIGGER
              </span>
              <span className="mt-1.5 block text-base font-bold">
                {journey.trigger}
              </span>
              <span className="text-muted-2 block text-sm">
                {journey.triggerSource}
              </span>
            </span>
            <ArrowRight
              aria-hidden="true"
              className="text-blue hidden size-4 flex-none @[560px]:block"
            />
            <span className="min-w-0 flex-[2_1_190px]">
              <span className="text-muted-2 text-2xs block font-bold tracking-[0.09em]">
                MEMBER EXPERIENCE
              </span>
              <span className="mt-1.5 block text-base font-bold">
                {journey.experience}
              </span>
              <span className="text-muted-2 block text-sm">
                {journey.experienceSource}
              </span>
            </span>
            <span className="flex-[1_1_120px] md:text-right">
              <span className="text-muted-2 text-2xs block font-bold tracking-[0.09em]">
                GYM POTENTIAL
              </span>
              <span className="text-blue-ink text-md mt-1.5 block font-bold">
                {journey.potential}
              </span>
            </span>
          </div>
        ))}
      </div>
      <div className="bg-ink @container mt-5.5 flex flex-wrap items-center gap-3 rounded-2xl px-6 py-5">
        {SIGNAL_CHIPS.map((chip, i) => (
          <span key={chip} className="contents">
            <span className="bg-ink-line rounded-lg px-4 py-2.5 text-sm text-white">
              {chip}
            </span>
            <span className="text-blue hidden @[720px]:inline">
              {i === SIGNAL_CHIPS.length - 1 ? "→" : "+"}
            </span>
          </span>
        ))}
        <span className="text-blue text-base font-bold">
          {OWNER_PANEL.signalResult}
        </span>
      </div>
    </Frame>
  );
}

function Value() {
  return (
    <Frame>
      <PanelHead
        kicker={OWNER_PANEL.impactKicker}
        title={OWNER_PANEL.impactTitle}
        aside={<StatusChip>{OWNER_PANEL.settlementLabel}</StatusChip>}
      />
      <table className="mt-5.5 w-full border-collapse text-left">
        <thead className="hidden md:table-header-group">
          <tr className="text-muted-2 text-2xs font-bold tracking-[0.09em]">
            <th scope="col" className="border-line-soft border-b pb-3">
              OPPORTUNITY
            </th>
            <th scope="col" className="border-line-soft border-b pb-3">
              SETTLED MEMBER PURCHASE
            </th>
            <th scope="col" className="border-line-soft border-b pb-3">
              RATE
            </th>
            <th scope="col" className="border-line-soft border-b pb-3">
              VERIFIED POTENTIAL
            </th>
            <th scope="col" className="border-line-soft border-b pb-3">
              REALIZED REVENUE
            </th>
          </tr>
        </thead>
        <tbody>
          {FINDINGS.map((f) => (
            <tr
              key={f.name}
              className="border-line-soft block border-b py-4 md:table-row md:py-0"
            >
              <td className={identityCell}>
                <span className="flex items-center gap-3">
                  <BrandAvatar brand={f.brand} size="lg" />
                  <span>
                    <span className="block text-base font-bold">{f.name}</span>
                    <span className="text-muted-2 block text-sm">
                      {f.category}
                    </span>
                  </span>
                </span>
              </td>
              <td className={cell} data-label="SETTLED MEMBER PURCHASE">
                <span className="block text-base font-bold">
                  {f.settledPurchase}
                </span>
                <span className="text-muted-2 block text-sm">
                  Illustrative attributed transaction
                </span>
              </td>
              <td className={cell} data-label="RATE">
                <span className="text-base font-bold">{f.rate}</span>
              </td>
              <td className={cell} data-label="VERIFIED POTENTIAL">
                <span className="text-md font-bold">{f.annualValue}</span>
              </td>
              <td className={cell} data-label="REALIZED REVENUE">
                <span className="block text-lg font-extrabold">
                  {f.realized}
                </span>
                <span className="text-muted-2 block text-sm">
                  Settled commission
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <NetworkCalculator />
    </Frame>
  );
}

const panels: Record<StageId, () => React.JSX.Element> = {
  join: Join,
  permission: Permission,
  discover: Discover,
  verify: Verify,
  activate: Activate,
  value: Value,
};

export function OwnerPanel({ stage }: { stage: StageId }) {
  const Panel = panels[stage];
  return <Panel />;
}
