"use client";

import ServiceHeroSection from "./ServiceHeroSection";
import ServiceListSection from "./ServiceListSection";
import ServiceAboutSection from "./ServiceAboutSection";
import ServiceFeaturesGrid from "./ServiceFeaturesGrid";
import ServiceHorizontalAccordion from "./ServiceHorizontalAccordion";
import ServiceKeyFeaturesSection from "./ServiceKeyFeaturesSection";
import FaqAccordionSection from "@/components/sections/faq/FaqAccordionSection";
import servicesData from "@/data/ServicesMain.json";
import { useState, useMemo } from "react";

export default function ServicePageClientShell({ 
  isMainPage = false,
  initialServiceId = "001"
}: { 
  isMainPage?: boolean;
  initialServiceId?: string;
}) {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(initialServiceId);

  const serviceData = useMemo(() => {
    return servicesData.services.find(s => s.id === selectedServiceId) || servicesData.services[0];
  }, [selectedServiceId]);

  return (
    <>
      <ServiceHeroSection 
        data={serviceData.hero} 
        selectedServiceId={selectedServiceId} 
        isMainPage={isMainPage} 
      />
      {isMainPage && <ServiceAboutSection data={serviceData.about} />}
      {isMainPage && <ServiceFeaturesGrid data={serviceData.featuresGrid} />}
      {isMainPage && <ServiceHorizontalAccordion data={serviceData.accordion} />}
      {isMainPage && <ServiceKeyFeaturesSection data={serviceData.keyFeatures} />}
      {isMainPage && <FaqAccordionSection data={serviceData.faq} />}
      {!isMainPage && <ServiceListSection />}
    </>
  );
}

