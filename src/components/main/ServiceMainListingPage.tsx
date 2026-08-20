import React from "react";
import ServiceBreadcrumbSection from "@/components/sections/service/ServiceBreadcrumbSection";
import ServiceListingGrid from "@/components/sections/service/ServiceListingGrid";
import TestimonialSection from "@/components/sections/home/TestimonialSection";
import FaqAccordionSection from "@/components/sections/faq/FaqAccordionSection";
import ServiceCtaSection from "@/components/sections/service/ServiceCtaSection";
import BrandStripSection from "@/components/sections/about/BrandStripSection";

export default function ServiceMainListingPage() {
  return (
    <>
      <ServiceBreadcrumbSection title="ALL SERVICES" />
      <ServiceListingGrid />
      <BrandStripSection />
      <TestimonialSection />
      <FaqAccordionSection />
      <ServiceCtaSection />
    </>
  );
}
