import CaseStudyBreadcrumbSection from "@/components/sections/case-study/CaseStudyBreadcrumbSection";
import CaseStudyCtaSection from "@/components/sections/case-study/CaseStudyCtaSection";
import CaseStudyGridSection from "@/components/sections/case-study/CaseStudyGridSection";

export default function CaseStudySections() {
  return (
    <>
      <CaseStudyBreadcrumbSection title="Case Study" />
      <CaseStudyGridSection />
      <CaseStudyCtaSection />
    </>
  );
}

