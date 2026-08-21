import type { Metadata } from "next";
import { ProsePage } from "@/components/layout/prose-page";
import { TERMS_INTRO, TERMS_PREAMBLE, TERMS_SECTIONS } from "@/content/terms";

export const metadata: Metadata = {
  title: TERMS_INTRO.metaTitle,
  description: TERMS_INTRO.metaDescription,
};

export default function TermsPage() {
  return (
    <ProsePage
      intro={TERMS_INTRO}
      preamble={TERMS_PREAMBLE}
      sections={TERMS_SECTIONS}
    />
  );
}
