import ContactSections from "@/components/main/ContactSections";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Brand Banalo | Digital Marketing Agency",
  description:
    "Get in touch with Brand Banalo to discuss your digital marketing, SEO, and web development needs. Let's work together to elevate your business.",
  keywords: [
    "Contact Brandbanalo",
    "Get in Touch for Marketing",
    "Hire Marketing Experts",
    "Digital Agency Contact",
    "Request a Marketing Quote",
    "Brandbanalo Support"
  ],
};

export default function ContactPage() {
  return (
    <main>
      <ContactSections />
    </main>
  );
}

