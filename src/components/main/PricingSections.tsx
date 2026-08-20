import PricingBreadcrumbSection from "@/components/sections/pricing/PricingBreadcrumbSection";
import PricingCtaSection from "@/components/sections/pricing/PricingCtaSection";
import PricingPackageDetailsSection from "@/components/sections/pricing/PricingPackageDetailsSection";
import PricingCustomPackageSection from "@/components/sections/pricing/PricingCustomPackageSection";
import PricingGridSection from "@/components/sections/pricing/PricingGridSection";

export default function PricingSections() {
  return (
    <>
      <PricingBreadcrumbSection />
      <PricingGridSection />
      <PricingCustomPackageSection />
      <PricingPackageDetailsSection />
      <PricingCtaSection />
    </>
  );
}
