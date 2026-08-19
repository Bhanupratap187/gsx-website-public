import { Check } from "lucide-react";
import { BrandAvatar } from "@/components/ui/brand-avatar";
import { TRAINER_SCREENS } from "@/content/trainer";

type TabId = keyof typeof TRAINER_SCREENS;

function Greeting({ kicker, title }: { kicker: string; title: string }) {
  return (
    <>
      <p className="text-muted-3 text-2xs font-extrabold tracking-[0.13em]">
        {kicker}
      </p>
      <p className="mt-3 text-[24px] leading-[1.12] font-normal tracking-[-0.03em]">
        {title}
      </p>
    </>
  );
}

function HeroBlock({
  label,
  value,
  unit,
  sub,
  subValue,
}: {
  label: string;
  value: string;
  unit?: string;
  sub: string;
  subValue?: string;
}) {
  return (
    <div className="bg-ink mt-5 rounded-[20px] p-[22px] text-white">
      <p className="text-muted-4 text-2xs font-extrabold tracking-[0.13em]">
        {label}
      </p>
      <p className="text-blue mt-2.5 text-[32px] font-extrabold tracking-[-0.04em]">
        {value}
        {unit ? (
          <span className="text-muted-4 text-[0.45em]">{unit}</span>
        ) : null}
      </p>
      <p className="text-muted-4 mt-2 text-xs">
        {subValue ? (
          <strong className="font-bold text-white">{subValue}</strong>
        ) : null}{" "}
        {sub}
      </p>
    </div>
  );
}

function Opportunity() {
  const s = TRAINER_SCREENS.opportunity;
  return (
    <>
      <Greeting kicker={s.greeting} title={s.title} />
      <HeroBlock
        label={s.heroLabel}
        value={s.heroValue}
        unit={s.heroUnit}
        sub={s.heroSub}
      />
      <div className="mt-3 flex flex-col gap-2.5">
        {s.rows.map((row) => (
          <div
            key={row.title}
            className="flex items-center gap-3 rounded-2xl bg-white px-4.5 py-4"
          >
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-bold">{row.title}</span>
              <span className="text-muted-3 mt-0.5 block text-xs">
                {row.sub}
              </span>
            </span>
            <span className="text-base font-extrabold">{row.value}</span>
          </div>
        ))}
      </div>
      <div className="mt-2.5 rounded-2xl bg-white px-4.5 py-4">
        <div className="flex justify-between text-xs font-bold">
          <span>{s.progressLabel}</span>
          <span className="text-blue-ink">{s.progressValue}%</span>
        </div>
        <div className="bg-line rounded-pill mt-2.5 h-1.5 overflow-hidden">
          <div
            style={{ width: `${s.progressValue}%` }}
            className="bg-blue h-full"
          />
        </div>
        <p className="text-muted-3 mt-2 text-xs">{s.progressNote}</p>
      </div>
    </>
  );
}

function Revenue() {
  const s = TRAINER_SCREENS.revenue;
  return (
    <>
      <Greeting kicker={s.greeting} title={s.title} />
      <HeroBlock
        label={s.heroLabel}
        value={s.heroValue}
        sub={s.heroSub}
        subValue={s.heroSubValue}
      />
      <div className="mt-3 overflow-hidden rounded-2xl bg-white">
        {s.rows.map((row) => (
          <div
            key={row.title}
            className="border-line-soft flex items-center gap-3 px-4.5 py-4 not-last:border-b"
          >
            <span className="text-blue-ink text-2xs font-bold">
              {row.index}
            </span>
            <span className="flex-1 text-sm">{row.title}</span>
            <span className="text-sm font-bold">{row.value}</span>
          </div>
        ))}
      </div>
      <div className="bg-success-bg mt-3 flex items-start gap-3 rounded-2xl px-4.5 py-4">
        <span className="bg-success rounded-pill flex size-8 flex-none items-center justify-center text-white">
          <Check aria-hidden="true" className="size-4" />
        </span>
        <span className="min-w-0">
          <span className="text-success-ink block text-xs font-bold">
            {s.note.title}
          </span>
          <span className="text-success-soft mt-1 block text-xs leading-[1.45]">
            {s.note.body}
          </span>
        </span>
      </div>
    </>
  );
}

function Business() {
  const s = TRAINER_SCREENS.business;
  return (
    <>
      <Greeting kicker={s.greeting} title={s.title} />
      {s.packages.map((pkg) => (
        <div
          key={pkg.kicker}
          className="mt-3 flex items-center gap-3 rounded-2xl bg-white px-4.5 py-4"
        >
          <span className="min-w-0 flex-1">
            <span className="text-muted-3 text-2xs block font-bold tracking-[0.09em]">
              {pkg.kicker}
            </span>
            <span className="mt-2 block text-sm font-bold">{pkg.detail}</span>
          </span>
          <span className="bg-success-bg text-success-ink rounded-pill text-2xs flex-none px-3.5 py-2 font-extrabold tracking-[0.09em]">
            {pkg.state}
          </span>
        </div>
      ))}
      <div className="bg-blue mt-3 rounded-2xl p-4 text-center text-xs font-extrabold tracking-[0.09em] text-white">
        {s.cta}
      </div>
      <div className="bg-ink mt-3 flex items-center gap-3.5 rounded-2xl p-4.5 text-white">
        <span className="text-blue flex-none text-sm font-extrabold italic">
          VISA
        </span>
        <span className="min-w-0 flex-1">
          <span className="text-muted-4 text-2xs block font-bold tracking-[0.09em]">
            {s.card.kicker}
          </span>
          <span className="mt-1.5 block text-sm font-bold">
            {s.card.digits}
          </span>
        </span>
        <span className="text-muted-4 text-2xs flex-none font-extrabold">
          GSX
        </span>
      </div>
    </>
  );
}

function Services() {
  const s = TRAINER_SCREENS.services;
  return (
    <>
      <Greeting kicker={s.greeting} title={s.title} />
      <div className="mt-5 grid grid-cols-2 gap-2.5">
        {s.tiles.map((tile) => (
          <div key={tile.title} className="rounded-2xl bg-white p-4">
            <BrandAvatar size="md">{tile.mark}</BrandAvatar>
            <p className="mt-6 text-sm font-bold">{tile.title}</p>
            <p className="text-muted-3 mt-1 text-xs">{tile.sub}</p>
          </div>
        ))}
      </div>
      <div className="bg-blue mt-3 flex items-center gap-3 rounded-2xl px-5 py-4.5 text-white">
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-extrabold">{s.offer.match}</span>
          <span className="mt-1 block text-xs text-white/85">
            {s.offer.brand}
          </span>
        </span>
        <span className="flex-none text-2xl font-extrabold tracking-[-0.03em]">
          {s.offer.value}
          <span className="text-[0.5em] font-semibold">{s.offer.unit}</span>
        </span>
      </div>
    </>
  );
}

const screens: Record<TabId, () => React.JSX.Element> = {
  opportunity: Opportunity,
  revenue: Revenue,
  business: Business,
  services: Services,
};

export function TrainerScreen({ tab }: { tab: TabId }) {
  const Screen = screens[tab];
  return (
    <div className="flex flex-1 flex-col">
      <Screen />
    </div>
  );
}
