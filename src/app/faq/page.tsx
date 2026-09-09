import FaqSections from "@/components/main/FaqSections";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Brandbanalo",
  description:
    "Find answers to all your questions about digital marketing, SEO, web development, and the services we offer at Brandbanalo.",
  keywords: [
    "Digital Marketing FAQ",
    "Branding Questions",
    "SEO FAQs",
    "Web Development Enquiries",
    "Brandbanalo Help",
    "Common Marketing Questions"
  ],
};

export default function FaqPage() {
  return (
    <main>
      <FaqSections />
    </main>
  );
}

