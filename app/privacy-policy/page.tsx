import type { Metadata } from "next";
import { ProsePage } from "@/components/layout/prose-page";
import {
  PRIVACY_POLICY_INTRO,
  PRIVACY_POLICY_PREAMBLE,
  PRIVACY_POLICY_SECTIONS,
} from "@/content/privacy-policy";

export const metadata: Metadata = {
  title: PRIVACY_POLICY_INTRO.metaTitle,
  description: PRIVACY_POLICY_INTRO.metaDescription,
};

export default function PrivacyPolicyPage() {
  return (
    <ProsePage
      intro={PRIVACY_POLICY_INTRO}
      preamble={PRIVACY_POLICY_PREAMBLE}
      sections={PRIVACY_POLICY_SECTIONS}
    />
  );
}
