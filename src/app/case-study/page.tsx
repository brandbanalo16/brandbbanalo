import CaseStudySections from "@/components/main/CaseStudySections";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Success Stories & Case Studies | Brand Banalo",
  description:
    "Discover how Brand Banalo has helped clients achieve their goals through targeted digital marketing, innovative web design, and stellar branding campaigns.",
  keywords: [
    "Marketing Case Studies",
    "SEO Success Stories",
    "Brandbanalo Portfolio",
    "Digital Marketing Results",
    "Client Success Stories",
    "Branding Campaign Examples"
  ],
};

export default function CaseStudyPage() {
  return (
    <main>
      <CaseStudySections />
    </main>
  );
}

