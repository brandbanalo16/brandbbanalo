import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Study Details",
  description:
    "Read case study details and learn how Brand Banalo delivers results with branding, websites, SEO, and performance marketing.",
};

export default function CaseStudyDetailsPage() {
  // Redirect to caseStudys page since no specific caseStudy slug is provided
  redirect("/caseStudy");
}

