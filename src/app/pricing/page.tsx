import PricingSections from "@/components/main/PricingSections";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing & Branding Packages | Brand Banalo",
  description:
    "Explore affordable and transparent pricing for Brand Banalo's digital marketing, SEO, social media management, and web development services.",
  keywords: [
    "Digital Marketing Packages",
    "SEO Pricing India",
    "Web Development Cost",
    "Branding Packages",
    "Affordable Marketing Services",
    "Social Media Management Pricing"
  ],
};

export default function PricingPage() {
  return (
    <main>
      <PricingSections />
    </main>
  );
}

