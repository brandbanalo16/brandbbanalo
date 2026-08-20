import React from "react";
import DigitalIndustryMain from "@/components/Digital-Industry/DigitalIndustryMain";
import ServiceBreadcrumbSection from "@/components/sections/service/ServiceBreadcrumbSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industry Specific Service | Brandbanalo",
  description:
    "Expert digital marketing agency for specialized industries including Pharma, Automotive, Electronics, and more. Tailored growth strategies for your niche.",
  keywords: [
    "Industry Specific Service",
    "Digital Marketing for Industries",
    "Niche Marketing Experts",
    "Brandbanalo Industry Solutions",
    "Specialized Marketing Service",
    "Industrial Growth Strategies"
  ],
};

export default function IndustrySpecificServicePage() {
  return (
    <main>
      <ServiceBreadcrumbSection title="INDUSTRY SPECIFIC SERVICES" />
      <DigitalIndustryMain />
    </main>
  );
}
