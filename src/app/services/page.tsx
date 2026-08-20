import ServiceMainListingPage from "@/components/main/ServiceMainListingPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Digital Marketing Services | Brand Banalo",
  description:
    "Comprehensive digital marketing services including SEO, Lead Generation, Web Development, Branding, and Ads Management to boost your online presence.",
  keywords: [
    "Best Digital Marketing Service",
    "Best Branding Service",
    "Best Website Development Service",
    "Best SEO Service",
    "Best Ads Management Service",
    "Best Social Media Marketing Service"
  ],
};

export default function ServicesPage() {
  return (
    <main>
      <ServiceMainListingPage />
    </main>
  );
}

