import BlogBreadcrumbSection from "@/components/sections/blog/BlogBreadcrumbSection";
import BlogCtaSection from "@/components/sections/blog/BlogCtaSection";
import BlogDetailsMainSection from "@/components/sections/blog/BlogDetailsMainSection";

interface BlogDetailsSectionsProps {
  title?: string;
  slug?: string;
}

export default function BlogDetailsSections({ title, slug }: BlogDetailsSectionsProps) {
  return (
    <>
      <BlogBreadcrumbSection title={title || "Blog Details"} />
      <BlogDetailsMainSection slug={slug} />
      <BlogCtaSection />
    </>
  );
}
