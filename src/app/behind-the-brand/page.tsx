import AboutSections from "@/components/main/AboutSections";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Brand Banalo | Top Digital Marketing Experts",
  description:
    "Learn about Brand Banalo's journey, our team, and our commitment to helping businesses scale with data-driven digital marketing and intuitive branding.",
  keywords: [
    "About Brandbanalo",
    "Digital Marketing Experts",
    "Our Story Brandbanalo",
    "Creative Marketing Team",
    "Trusted Marketing Agency",
    "Brand Building Experts"
  ],
};

export default function BehindTheBrandPage() {
  return (
    <main>
      <AboutSections />
    </main>
  );
}


