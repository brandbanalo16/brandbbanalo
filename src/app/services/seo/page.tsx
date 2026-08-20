import ServiceSections from "@/components/main/ServiceSections";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best SEO Service | Brand Banalo",
  description:
    "Increase your organic search visibility and drive high-quality traffic to your website with Brand Banalo's comprehensive SEO services.",
  keywords: [
    "Best SEO Service",
    "SEO Creating Service",
    "Organic Traffic Growth Service",
    "On Page SEO Service",
    "Technical SEO Auditing Service",
    "Local SEO Optimization Service"
  ],
};

export default function SeoPage() {
  return (
    <main>
      <ServiceSections showBanner={false} initialServiceId="002" />
    </main>
  );
}
