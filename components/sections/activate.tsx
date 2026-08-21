import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ACTIVATE } from "@/content/privacy";
import { ACTIVATE_CTA } from "@/content/site";

// A rounded panel inset in the page rather than a full-bleed band, with two
// oversized arcs bleeding out of its corners — the live `.activate-section`.
export function Activate() {
  return (
    <section id="activate" aria-labelledby="activate-title" className="py-8">
      <div
        data-tone="blue"
        className="bg-ground text-content max-tablet:rounded-[28px] max-tablet:px-[22px] max-tablet:py-[88px] relative mx-auto w-[min(var(--container-site),100%_-_var(--spacing-shell))] overflow-hidden rounded-[38px] px-[70px] py-[110px] text-center"
      >
        <div
          aria-hidden="true"
          className="border-rule absolute -top-[360px] -left-[100px] size-[560px] rounded-full border"
        />
        <div
          aria-hidden="true"
          className="border-rule absolute -right-[330px] -bottom-[570px] size-[730px] rounded-full border"
        />

        <div className="relative z-[1]">
          <p className="text-kicker text-content-subtle font-extrabold tracking-[0.13em] uppercase">
            {ACTIVATE.kicker}
          </p>
          <h2
            id="activate-title"
            className="text-h2 mx-auto mt-[13px] max-w-[1050px] font-normal"
          >
            {ACTIVATE.title}
          </h2>
          <p className="text-md text-content-muted mx-auto mt-[25px] max-w-[720px] leading-[1.65]">
            {ACTIVATE.lede}
          </p>
          <div className="max-tablet:flex-col max-tablet:items-stretch mt-[34px] flex items-center justify-center gap-3">
            <Button href={ACTIVATE_CTA.href} className="justify-center gap-8">
              {ACTIVATE.primaryLabel}
              <ArrowRight aria-hidden="true" className="text-blue size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
