import ServiceSections from "@/components/main/ServiceSections";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Lead Generation Service | Brand Banalo",
  description:
    "Grow your sales pipeline with our targeted lead generation strategies. Let us help you find and convert potential customers into long-term clients.",
  keywords: [
    "Best Lead Generation Service",
    "Lead Generation Creating Service",
    "B2B Lead Generation Service",
    "B2C Lead Generation Service",
    "Digital Lead Campaign Service",
    "Sales Funnel Optimization Service"
  ],
};

export default function LeadGenerationPage() {
  return (
    <main>
      <ServiceSections showBanner={false} initialServiceId="004" />
    </main>
  );
}
