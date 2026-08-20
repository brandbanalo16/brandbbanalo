import ServiceSections from "@/components/main/ServiceSections";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industry Specific Marketing | Brand Banalo",
  description:
    "Tailored digital marketing and branding solutions for your specific industry. We understand your market and help you stand out from the competition.",
  keywords: [
    "Best Industry Specific Marketing",
    "Niche Marketing Service",
    "Tailored Digital Marketing Service",
    "B2B Marketing Service",
    "B2C Branding Service",
    "Custom Marketing Service"
  ],
};

export default function IndustrialSpecificPage() {
  return (
    <main>
      <ServiceSections />
    </main>
  );
}

