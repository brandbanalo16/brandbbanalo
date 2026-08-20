import BlogBreadcrumbSection from "@/components/sections/blog/BlogBreadcrumbSection";
import BlogCtaSection from "@/components/sections/blog/BlogCtaSection";
import BlogDetailsMainSection from "@/components/sections/blog/BlogDetailsMainSection";

export default function BlogDetailsSections() {
  return (
    <>
      <BlogBreadcrumbSection title="Blog Details" />
      <BlogDetailsMainSection />
      <BlogCtaSection />
    </>
  );
}

