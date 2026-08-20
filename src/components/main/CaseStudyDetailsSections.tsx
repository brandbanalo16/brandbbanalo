import CaseStudyBreadcrumbSection from "@/components/sections/case-study/CaseStudyBreadcrumbSection";
import CaseStudyCtaSection from "@/components/sections/case-study/CaseStudyCtaSection";
import CaseStudyDetailsMainSection from "@/components/sections/case-study/CaseStudyDetailsMainSection";

interface CaseStudy {
  id: number;
  slug: string;
  img: string;
  date: string;
  title: string;
  description: string;
  service: string;
  href: string;
  category: string;
  images?: string[];
}

interface CaseStudyDetailsSectionsProps {
  caseStudy?: CaseStudy;
  prevCaseStudy?: CaseStudy| null;
  nextCaseStudy?: CaseStudy| null;
}

export default function CaseStudyDetailsSections({
  caseStudy,   prevCaseStudy,
  nextCaseStudy,
}: CaseStudyDetailsSectionsProps) {
  const title = caseStudy?.title || "Case Study Details";

  return (
    <>
      <CaseStudyBreadcrumbSection title={title} />
      <CaseStudyDetailsMainSection 
        caseStudy={caseStudy}
        prevCaseStudy={prevCaseStudy}
        nextCaseStudy={nextCaseStudy}
      />
      <CaseStudyCtaSection />
    </>
  );
}

