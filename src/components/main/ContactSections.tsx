import ContactBreadcrumbSection from "@/components/sections/contact/ContactBreadcrumbSection";
import ContactCtaSection from "@/components/sections/contact/ContactCtaSection";
import ContactFormSection from "@/components/sections/contact/ContactFormSection";
import ContactInfoSection from "@/components/sections/contact/ContactInfoSection";

export default function ContactSections() {
  return (
    <>
      <ContactBreadcrumbSection />
      <ContactInfoSection />
      <ContactFormSection />
      <ContactCtaSection />
    </>
  );
}

