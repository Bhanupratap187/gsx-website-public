import type {
  PageIntro as PageIntroContent,
  ProseSection,
} from "@/content/types";
import { Section } from "@/components/ui/section";
import { Prose } from "@/components/ui/prose";
import { ProseSections } from "@/components/ui/prose-sections";
import { Notice } from "@/components/ui/notice";
import { PageIntro } from "./page-intro";
import { cn } from "@/lib/cn";

interface ProsePageProps {
  intro: PageIntroContent;
  sections: readonly ProseSection[];
  // Paragraphs that open the document, ahead of the first numbered clause.
  preamble?: readonly string[];
  notice?: string;
}

// A legal document is one long column of text. Left-aligning it in the 1600px
// container strands it against a wide empty gutter, so the whole route — intro
// band included — centres on one reading measure.
const MEASURE = "mx-auto max-w-[110ch]";

// Shared shell for the prose routes — privacy policy, terms and support all
// differ only in their intro and section list.
export function ProsePage({
  intro,
  sections,
  preamble,
  notice,
}: ProsePageProps) {
  return (
    <main id="main">
      <PageIntro intro={intro} measure={MEASURE} />

      <Section>
        <div className={MEASURE}>
          {notice ? <Notice className="max-w-none">{notice}</Notice> : null}

          {preamble ? (
            <Prose className={cn("max-w-none", notice && "mt-10")}>
              {preamble.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Prose>
          ) : null}

          <ProseSections
            sections={sections}
            className={cn("max-w-none", notice && !preamble && "mt-10")}
          />
        </div>
      </Section>
    </main>
  );
}
