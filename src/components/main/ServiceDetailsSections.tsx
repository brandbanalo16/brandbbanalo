import ServiceBreadcrumbSection from "@/components/sections/service/ServiceBreadcrumbSection";
import ServiceCtaSection from "@/components/sections/service/ServiceCtaSection";
import ServiceDetailsMainSection from "@/components/sections/service/ServiceDetailsMainSection";
import BrandStripSection from "@/components/sections/about/BrandStripSection";
import TestimonialSection from "@/components/sections/home/TestimonialSection";
import FaqAccordionSection from "@/components/sections/faq/FaqAccordionSection";
import { getMergedServiceForIndustry } from "@/lib/industryData";
import servicesData from "@/data/Industry.json";

type ServiceDetailsSectionsProps = {
  initialServiceId?: string;
  initialIndustryId?: string;
};

export default function ServiceDetailsSections({ initialServiceId, initialIndustryId }: ServiceDetailsSectionsProps) {
  const service =
    servicesData.services.find((s) => s.id === (initialServiceId ?? "001")) ??
    servicesData.services[0];
  const industry =
    servicesData.industries.find((i) => i.id === (initialIndustryId ?? "ind-001")) ??
    servicesData.industries[0];

  const merged =
    getMergedServiceForIndustry({
      serviceId: service.id,
      industryId: industry.id,
    }) ?? service;

  const faqs = [
    {
      id: `faq-${service.id}-1`,
      question: `How does ${service.name} help ${industry.name}?`,
      answer: merged.heroDescription,
    },
    {
      id: `faq-${service.id}-2`,
      question: `What is included in your ${service.name} process?`,
      answer:
        merged.sections?.[0]?.body ??
        "We align strategy, execution, and optimization for measurable growth.",
    },
    {
      id: `faq-${service.id}-3`,
      question: "How do you improve lead quality and conversions?",
      answer:
        merged.sections?.[1]?.body ??
        "We improve conversion quality through better messaging, user journeys, and continuous campaign optimization.",
    },
  ];

  return (
    <>
      <ServiceBreadcrumbSection title={service.name} />
      <ServiceDetailsMainSection
        initialServiceId={initialServiceId}
        initialIndustryId={initialIndustryId}
      />
      <BrandStripSection />
      <TestimonialSection />
      <FaqAccordionSection
        data={{
          title: `FAQs for ${service.name} in ${industry.name}`,
          image: "/assets/img/faq.webp",
          items: faqs,
        }}
      />
      <ServiceCtaSection />
    </>
  );
}
