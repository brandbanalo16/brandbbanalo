import ServiceSections from "@/components/main/ServiceSections";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Website Development Service | Brand Banalo",
  description:
    "We build fast, responsive, and SEO-friendly websites focusing on user experience, performance, and conversion rate optimization.",
  keywords: [
    "Best Website Development Service",
    "Website Creating Service",
    "Custom Website Design Service",
    "Responsive Web Development Service",
    "Ecommerce Development Service",
    "Landing Page Creating Service"
  ],
};

export default function WebDevelopmentPage() {
  return (
    <main>
      <ServiceSections showBanner={false} initialServiceId="001" />
    </main>
  );
}
