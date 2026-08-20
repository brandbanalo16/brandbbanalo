import ServiceHeroSection from "./ServiceHeroSection";
import ServiceAboutSection from "./ServiceAboutSection";
import ServiceFeaturesGrid from "./ServiceFeaturesGrid";
import ServiceHorizontalAccordion from "./ServiceHorizontalAccordion";
import ServiceKeyFeaturesSection from "./ServiceKeyFeaturesSection";
import TestimonialSection from "../home/TestimonialSection";
import FaqAccordionSection from "../faq/FaqAccordionSection";
import ServiceCtaSection from "./ServiceCtaSection";

export default function ServiceMain() {
  return (
    <>
      <ServiceHeroSection selectedServiceId="001" isMainPage={true} />
      <ServiceAboutSection />
      <ServiceFeaturesGrid />
      <ServiceHorizontalAccordion />
      <ServiceKeyFeaturesSection />
      <TestimonialSection />
      <FaqAccordionSection />
      <ServiceCtaSection />
    </>
  );
}
