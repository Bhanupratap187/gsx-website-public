import { Hero } from "@/components/sections/hero";
import { Triptych } from "@/components/sections/triptych";
import { Platform } from "@/components/sections/platform";
import { Opportunity } from "@/components/sections/opportunity";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Experience } from "@/components/sections/experience";
import { TrainerOsSection } from "@/components/sections/trainer-os";
import { Videos } from "@/components/sections/videos";
import { Ecosystem } from "@/components/sections/ecosystem";
import { Verticals } from "@/components/sections/verticals";
import { BusinessModel } from "@/components/sections/business-model";
import { Company } from "@/components/sections/company";
import { Privacy } from "@/components/sections/privacy";
import { Activate } from "@/components/sections/activate";

// Section order is the page's information architecture. The experience map and
// Trainer OS islands slot in after HowItWorks and Videos in phase 4.
export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <Triptych />
      <Platform />
      <Opportunity />
      <HowItWorks />
      <Experience />
      <TrainerOsSection />
      <Videos />
      <Ecosystem />
      <Verticals />
      <BusinessModel />
      <Company />
      <Privacy />
      <Activate />
    </main>
  );
}
