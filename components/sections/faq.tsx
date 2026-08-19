import { Plus } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { FAQ, FAQ_SECTION } from "@/content/faq";

// Native details/summary: accessible, keyboard-operable and zero JavaScript.
export function Faq() {
  return (
    <Section id="faq" labelledBy="faq-title">
      <SectionHeader
        id="faq-title"
        kicker={FAQ_SECTION.kicker}
        title={FAQ_SECTION.title}
        lede={FAQ_SECTION.lede}
        size="md"
      />

      <div className="border-line-grid mt-block border-t">
        {FAQ.map((item) => (
          <details
            key={item.question}
            className="border-line-grid group border-b"
          >
            <summary className="text-md flex cursor-pointer list-none items-start gap-4 py-6 font-bold tracking-[-0.01em] [&::-webkit-details-marker]:hidden">
              <span className="flex-1">{item.question}</span>
              <Plus
                aria-hidden="true"
                className="text-blue-ink mt-0.5 size-5 flex-none transition-transform group-open:rotate-45"
              />
            </summary>
            <p className="text-content-muted max-w-[80ch] pb-6 text-base leading-[1.6]">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
