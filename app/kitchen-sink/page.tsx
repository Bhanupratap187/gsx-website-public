import type { ReactNode } from "react";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { HairlineGrid } from "@/components/ui/hairline-grid";
import { NumberedCard } from "@/components/ui/numbered-card";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import { Meter } from "@/components/ui/meter";
import { StatTile } from "@/components/ui/stat-tile";
import { Logo } from "@/components/ui/logo";
import { BrandAvatar } from "@/components/ui/brand-avatar";
import { ArrowLink } from "@/components/ui/arrow-link";
import { Prose } from "@/components/ui/prose";
import { PhoneFrame } from "@/components/phone/phone-frame";
import { PhoneListRow } from "@/components/phone/phone-list-row";
import { PhoneToggleRow } from "@/components/phone/phone-toggle-row";
import { ProgressRing } from "@/components/phone/progress-ring";
import { WalletCard } from "@/components/phone/wallet-card";

// Dev-only harness for signing the design system off against the prototype.
// Production redirects this route away in next.config.ts.
// Strings here are labels, not site copy, so they stay inline.
export const metadata = { robots: { index: false, follow: false } };

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mt-block first:mt-0">
      <p className="border-rule text-2xs text-content-subtle mb-5 border-b pb-2 font-extrabold tracking-[0.13em] uppercase">
        {title}
      </p>
      {children}
    </div>
  );
}

export default function KitchenSinkPage() {
  return (
    <main>
      <Section tone="light">
        <h1 className="text-h2 font-normal">Kitchen sink</h1>
        <p className="text-lede text-content-muted mt-4 max-w-155">
          Every primitive in every variant. Compare against the prototype at
          1560px, then check 320 / 375 / 768 / 1280.
        </p>

        <Block title="Logo">
          <div className="flex flex-wrap items-center gap-8">
            <Logo className="h-8" />
            <span className="bg-ink p-4 text-white">
              <Logo className="h-8" />
            </span>
          </div>
        </Block>

        <Block title="Buttons">
          <div className="flex flex-wrap items-center gap-3.5">
            <Button href="#" variant="dark">
              ACTIVATE GSX
            </Button>
            <Button href="#" variant="blue">
              BLUE FILL
            </Button>
            <Button href="#" variant="outline">
              VIEW PRODUCT EXPERIENCE
            </Button>
            <Button href="#" variant="dark" size="sm">
              HEADER CTA
            </Button>
          </div>
          <div className="bg-ink mt-4 flex flex-wrap items-center gap-3.5 p-6">
            <Button href="#" variant="light">
              LIGHT ON INK
            </Button>
            <Button href="#" variant="outlineOnDark">
              OUTLINE ON INK
            </Button>
          </div>
        </Block>

        <Block title="Tags">
          <div className="flex flex-wrap items-center gap-2.5">
            <Tag size="sm">BILLING</Tag>
            <Tag>MULTI-LOCATION</Tag>
            <Tag size="lg">Gym management systems</Tag>
          </div>
          <div className="bg-ink mt-4 flex flex-wrap items-center gap-2.5 p-6">
            <Tag variant="dark" size="sm">
              CLIENT BILLING
            </Tag>
            <Tag variant="dark">WORKFORCE</Tag>
          </div>
        </Block>

        <Block title="Arrow links">
          <div className="flex flex-wrap items-center gap-8">
            <ArrowLink href="#">Explore owner economics</ArrowLink>
            <ArrowLink href="#" direction="up-right">
              Open the full trainer experience
            </ArrowLink>
          </div>
        </Block>

        <Block title="Brand avatars">
          <div className="flex flex-wrap items-center gap-3">
            <BrandAvatar brand="alo">A</BrandAvatar>
            <BrandAvatar brand="glow">✦</BrandAvatar>
            <BrandAvatar brand="pura">PV</BrandAvatar>
            <BrandAvatar brand="accent">AI</BrandAvatar>
            <BrandAvatar brand="muted">✕</BrandAvatar>
            <BrandAvatar brand="alo" size="sm">
              A
            </BrandAvatar>
            <BrandAvatar brand="alo" size="lg">
              A
            </BrandAvatar>
          </div>
        </Block>

        <Block title="Meters">
          <div className="grid max-w-md gap-5">
            <Meter value={96} label="96%" />
            <Meter value={94} label="94%" />
            <Meter value={72} />
          </div>
        </Block>

        <Block title="Stat tiles">
          <div className="grid gap-3.5 sm:grid-cols-3">
            <StatTile
              kicker="OBSERVED MEMBER SPEND"
              value="$5,928"
              sub="Annualized from evidence"
              dark
            />
            <StatTile
              kicker="VERIFIED GYM POTENTIAL"
              value="$543"
              sub="Annual opportunity"
            />
            <StatTile
              kicker="DATA STATE"
              value="Live"
              sub="Attribution verified"
            />
          </div>
        </Block>

        <Block title="Hairline grid + numbered cards">
          <HairlineGrid minItem={230}>
            <NumberedCard
              index="01"
              title="Learn real intent"
              body="Use verified receipts, appointments and activity instead of generic demographic guesses."
            />
            <NumberedCard
              index="02"
              title="Reward the right moment"
              body="Match relevant brands and services to workouts, check-ins, recovery and goals."
            />
            <NumberedCard
              index="03"
              title="Prove the value"
              body="Track projected, verified and realized revenue without confusing opportunity with cash earned."
            />
          </HairlineGrid>
        </Block>

        <Block title="Numbered cards — bottom aligned, large">
          <HairlineGrid minItem={280}>
            <NumberedCard
              index="04"
              title="Affiliate Network"
              body="Gyms and trainers become measurable distribution partners for relevant brands."
              align="bottom"
              size="lg"
              minHeight="clamp(300px,24vw,400px)"
            />
            <NumberedCard
              index="05"
              title="Payments + Commerce"
              body="Checkout, processing and a commission ledger connect every eligible purchase."
              align="bottom"
              size="lg"
              minHeight="clamp(300px,24vw,400px)"
            />
          </HairlineGrid>
        </Block>
      </Section>

      <Section tone="light-2" bordered>
        <SectionHeader
          kicker="Tone: light-2"
          title="Your gym creates the relationship. GSX helps you capture more of its value."
          lede="The lede sits on the heading baseline and the grid rules pick up the warmer gap colour."
          size="md"
        />
      </Section>

      <Section tone="dark">
        <SectionHeader
          kicker="Tone: dark"
          title="Turn every trainer into a revenue-producing business."
          lede="Role tokens invert automatically — no tone prop is threaded to any child here."
        />
        <div className="mt-block">
          <HairlineGrid minItem={230}>
            <NumberedCard
              index="01"
              title="Purpose-specific permission"
              body="Sources, categories and date ranges are visible before authorization."
            />
            <NumberedCard
              index="02"
              title="Private Review Vault"
              body="AI findings stay private until the member confirms, edits or rejects them."
            />
            <NumberedCard
              index="03"
              title="Control that continues"
              body="Members can pause, remove or delete authorized data at any time."
            />
          </HairlineGrid>
        </div>
        <div className="mt-8 flex flex-wrap gap-3.5">
          <ArrowLink href="#">Open the consent experience</ArrowLink>
        </div>
      </Section>

      <Section tone="blue">
        <SectionHeader
          kicker="Tone: blue"
          title="Operate smarter. Retain more members. Earn beyond dues."
          lede="The CTA band. Accent text resolves to white so it stays legible on the fill."
        />
        <div className="mt-block flex flex-wrap gap-3.5">
          <Button href="#" variant="dark">
            ACTIVATE GSX
          </Button>
        </div>
      </Section>

      <Section tone="light">
        <Block title="Phone — member app">
          <div className="flex flex-wrap gap-8">
            <PhoneFrame avatar="AM">
              <p className="text-blue-ink text-xs font-extrabold tracking-[0.09em]">
                CONNECT. MOVE. GET REWARDED.
              </p>
              <p className="mt-3 text-[29px] leading-[1.1] font-normal tracking-[-0.03em]">
                Move more. Unlock more.
              </p>
              <div className="mt-5">
                <PhoneToggleRow
                  title="Receipts + orders"
                  sub="Match favorite brands and unlock discounts"
                />
                <PhoneToggleRow
                  title="Appointments"
                  sub="Earn loyalty rewards at providers"
                />
                <PhoneToggleRow
                  title="Wearable activity"
                  sub="Turn workouts into perks"
                />
              </div>
              <div className="rounded-pill bg-blue mt-5 p-4 text-center text-base font-bold text-white">
                Unlock my rewards →
              </div>
              <p className="text-muted-2 mt-auto pt-5 pb-4 text-sm">
                ◎ You choose what to share. Pause or delete anytime.
              </p>
            </PhoneFrame>

            <PhoneFrame avatar="AM">
              <p className="text-blue-ink text-xs font-extrabold tracking-[0.09em]">
                TODAY&rsquo;S NEXT UNLOCK
              </p>
              <p className="mt-2.5 text-[31px] leading-[1.05] font-normal tracking-[-0.03em]">
                <span className="text-blue-ink font-bold">15</span> calories
                away.
              </p>
              <ProgressRing
                value={185}
                max={200}
                className="mt-6 self-center"
              />
              <div className="mt-6">
                <PhoneListRow
                  leading={<BrandAvatar brand="glow">✦</BrandAvatar>}
                  title="2 workouts left"
                  sub="500 GlowHaus points"
                  value="2/4"
                  divider="top"
                />
                <PhoneListRow
                  leading={<BrandAvatar brand="pura">PV</BrandAvatar>}
                  title="Recovery pick ready"
                  sub="Power Smoothie · 35g protein"
                  value="View"
                  divider="top"
                />
              </div>
              <p className="text-muted-2 mt-auto pt-5 pb-4 text-sm">
                ◎ Rewards follow real activity, never ad targeting.
              </p>
            </PhoneFrame>

            <PhoneFrame avatar="AM">
              <p className="text-blue-ink text-xs font-extrabold tracking-[0.09em]">
                GSX REWARDS WALLET
              </p>
              <p className="mt-3 text-[31px] leading-[1.08] font-normal tracking-[-0.03em]">
                <span className="text-blue-ink font-bold">$212</span> in value
                unlocked.
              </p>
              <WalletCard
                label="MEMBER REWARD BALANCE"
                amount="$212.40"
                digits="2488"
                className="mt-5"
              />
              <div className="mt-1.5">
                <PhoneListRow
                  leading={<BrandAvatar brand="alo">A</BrandAvatar>}
                  title="25% Alo reward"
                  sub="Ready to claim"
                  value="→"
                />
                <PhoneListRow
                  leading={<BrandAvatar brand="glow">✦</BrandAvatar>}
                  title="GlowHaus progress"
                  sub="2 workouts remaining"
                  value="2/4"
                />
              </div>
              <p className="text-muted-2 mt-auto pt-5 pb-4 text-sm">
                ◎ Pause, remove or delete at any time.
              </p>
            </PhoneFrame>
          </div>
        </Block>

        <Block title="Phone — trainer, card rows on sand">
          <PhoneFrame screen="sand" bezel="darker" label="TRAINER" avatar="MT">
            <p className="text-muted-3 text-xs font-extrabold tracking-[0.13em]">
              GOOD MORNING
            </p>
            <p className="mt-1.5 text-[34px] font-extrabold tracking-[-0.035em]">
              Marcus
            </p>
            <div className="mt-5 flex flex-col gap-2.5">
              <PhoneListRow
                variant="card"
                leading={<BrandAvatar size="sm">✉</BrandAvatar>}
                title="Email"
                sub="Approved source"
                value="Linked"
              />
              <PhoneListRow
                variant="card"
                leading={<BrandAvatar size="sm">in</BrandAvatar>}
                title="LinkedIn"
                sub="Approved source"
                value="Linked"
              />
              <PhoneListRow
                variant="card"
                ghost
                leading={
                  <BrandAvatar brand="muted" size="sm">
                    @
                  </BrandAvatar>
                }
                title="Social"
                sub="Awaiting approval"
                value="Pending"
              />
            </div>
            <p className="text-muted-3 mt-auto pt-5 pb-4 text-sm">
              Nothing becomes an active business record until you review it.
            </p>
          </PhoneFrame>
        </Block>

        <Block title="Prose">
          <Prose>
            <h2>Privacy policy</h2>
            <p>
              Placeholder body copy to check the measure, rhythm and link colour
              of the legal routes. Replace with counsel-supplied text.
            </p>
            <h3>Data we process</h3>
            <ul>
              <li>Approved receipt and order metadata</li>
              <li>Appointment cadence</li>
            </ul>
            <p>
              Questions go to{" "}
              <a href="mailto:hello@gymsciencx.com">hello@gymsciencx.com</a>.
            </p>
          </Prose>
        </Block>
      </Section>
    </main>
  );
}
