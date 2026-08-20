import ServiceSections from "@/components/main/ServiceSections";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Branding & Designing Service | Brand Banalo",
  description:
    "Build a memorable brand with our creative branding and designing services. From logo design to entire brand identity, we bring your vision to life.",
  keywords: [
    "Best Branding & Designing Service",
    "Branding & Designing Creating Service",
    "Best Logo Design Service",
    "Corporate Brand Identity Service",
    "Visual Branding Service",
    "Custom Graphic Design Service"
  ],
};

export default function BrandingDesigningPage() {
  return (
    <main>
      <ServiceSections showBanner={false} initialServiceId="005" />
    </main>
  );
}
