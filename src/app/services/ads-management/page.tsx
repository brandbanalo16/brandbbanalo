import ServiceSections from "@/components/main/ServiceSections";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Ads Management Service | Brand Banalo",
  description:
    "Maximize your ROI with expert performance ads management. We run highly targeted search and social media campaigns tailored to your business goals.",
  keywords: [
    "Best Ads Management Service",
    "Ads Management Creating Service",
    "Google Ads Management Service",
    "Performance Marketing Service",
    "Social Media Ads Service",
    "Best PPC Marketing Service"
  ],
};

export default function AdsManagementPage() {
  return (
    <main>
      <ServiceSections showBanner={false} initialServiceId="003" />
    </main>
  );
}
