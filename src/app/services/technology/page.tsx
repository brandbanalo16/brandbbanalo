import type { Metadata } from "next";
import ServiceSections from "@/components/main/ServiceSections";

export const metadata: Metadata = {
  title: "Best Technology Service | Brand Banalo",
  description:
    "Empower your business with cutting-edge technology solutions ranging from app development to complex platform integrations by Brand Banalo.",
  keywords: [
    "Best Technology Service",
    "Technology Creating Service",
    "App Development Service",
    "Business Tech Integration Service",
    "Tech Consulting Service",
    "Modern Digital Platform Service"
  ],
};

export default function TechnologyServicePage() {
  return (
    <main>
      <ServiceSections 
        showBanner={false} 
        initialServiceId="002" 
      />
    </main>
  );
}
