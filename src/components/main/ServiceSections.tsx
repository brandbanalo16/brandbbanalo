import ServiceBreadcrumbSection from "@/components/sections/service/ServiceBreadcrumbSection";
import ServiceCtaSection from "@/components/sections/service/ServiceCtaSection";
import ServicePageClientShell from "@/components/sections/service/ServicePageClientShell";
import ServiceChoose from "@/components/sections/service/ServiceChoose";
import TestimonialSection from "@/components/sections/home/TestimonialSection";
import BrandStripSection from "@/components/sections/about/BrandStripSection";

interface ServiceSectionsProps {
  showBanner?: boolean;
  initialServiceId?: string;
}

export default function ServiceSections(props: ServiceSectionsProps = {}) {
  const { showBanner = true, initialServiceId = "001" } = props;
  return (
    <>
      {showBanner && <ServiceBreadcrumbSection title="Industrial Specific" />}
      <ServicePageClientShell isMainPage={!showBanner} initialServiceId={initialServiceId} />
      {showBanner && <ServiceChoose/>}
      <BrandStripSection />
      <TestimonialSection/>
      <ServiceCtaSection />
    </>
  );
}

