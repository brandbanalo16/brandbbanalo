import ModernServiceBanner from "@/components/sections/service/ModernServiceBanner";
import ServiceDetailsMainSection from "@/components/sections/service/ServiceDetailsMainSection";
import ServiceCtaSection from "@/components/sections/service/ServiceCtaSection";
import servicesData from "@/data/Industry.json";

type ModernServiceDetailsSectionsProps = {
  initialServiceId?: string;
  initialIndustryId?: string;
  breadcrumbParent?: string;
  breadcrumbChild?: string;
  subtitle?: string;
  title?: string;
  bannerImage?: string;
};

export default function ModernServiceDetailsSections({ 
  initialServiceId, 
  initialIndustryId,
  breadcrumbParent = "Services",
  breadcrumbChild,
  subtitle,
  title,
  bannerImage
}: ModernServiceDetailsSectionsProps) {
  const service = servicesData.services.find((s) => s.id === (initialServiceId ?? "001"));
  
  return (
    <>
      <ModernServiceBanner 
        breadcrumbParent={breadcrumbParent}
        breadcrumbParentLink="/services"
        breadcrumbChild={breadcrumbChild || service?.name || "Service"}
        subtitle={subtitle || service?.heroSubtitle || "Service Subtitle"}
        title={title || service?.heroTitle || "Service Title"}
        imagePath={bannerImage || service?.image || "/assets/img/hero/laptop-placeholder.webp"}
      />
      <ServiceDetailsMainSection initialServiceId={initialServiceId} initialIndustryId={initialIndustryId} />
      <ServiceCtaSection />
    </>
  );
}
