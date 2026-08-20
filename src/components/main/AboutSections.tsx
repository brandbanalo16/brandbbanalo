import AboutCtaSection from "@/components/sections/about/AboutCtaSection";
import AboutMainSection from "@/components/sections/about/AboutMainSection";
import BrandStripSection from "@/components/sections/about/BrandStripSection";
import BreadcrumbSection from "@/components/sections/about/BreadcrumbSection";
import ChooseUsSection from "@/components/sections/about/ChooseUsSection";
import IndustriesSection from "@/components/sections/home/IndustriesSection";
import ServiceListingGrid from "@/components/sections/service/ServiceListingGrid";
import TestimonialSection from "@/components/sections/home/TestimonialSection";

export default function AboutSections() {
  return (
    <>
      <BreadcrumbSection />
      <AboutMainSection />
      <BrandStripSection />
      <ChooseUsSection />
      <ServiceListingGrid />  
      <TestimonialSection />
      <IndustriesSection />
      <AboutCtaSection />
    </>
  );
}

