import BlogBreadcrumbSection from "@/components/sections/blog/BlogBreadcrumbSection";
import BlogCtaSection from "@/components/sections/blog/BlogCtaSection";
import BlogStandardSection from "@/components/sections/blog/BlogStandardSection";

export default function BlogStandardSections() {
  return (
    <>
      <BlogBreadcrumbSection title="Blog Standard" />
      <BlogStandardSection />
      <BlogCtaSection />
    </>
  );
}

