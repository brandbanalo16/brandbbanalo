import AboutSection from "@/components/sections/home/AboutSection";
import CaseStudySection from "@/components/sections/home/CaseStudySection";
import IndustriesSection from "@/components/sections/home/IndustriesSection";
import HeroSection from "@/components/sections/home/HeroSection";
import MarqueeSectionTop from "@/components/sections/home/MarqueeSectionTop";
import MissionSection from "@/components/sections/home/MissionSection";
import ServiceSection from "@/components/sections/home/ServiceSection";
import TestimonialSection from "@/components/sections/home/TestimonialSection";
import BrandStripSection from "@/components/sections/about/BrandStripSection";

export default function HomeSections() {
  return (
    <>
      <HeroSection />
      <BrandStripSection />
      <AboutSection />
      <ServiceSection />
      <MarqueeSectionTop />
      <MissionSection />
      <CaseStudySection />
      <IndustriesSection />
      <TestimonialSection />
    </>
  );
}



