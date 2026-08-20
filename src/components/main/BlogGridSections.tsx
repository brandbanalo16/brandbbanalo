import BlogBreadcrumbSection from "@/components/sections/blog/BlogBreadcrumbSection";
import BlogCtaSection from "@/components/sections/blog/BlogCtaSection";
import BlogGridSection from "@/components/sections/blog/BlogGridSection";
import { getAllBlogs } from "@/lib/blogUtils";

export default function BlogGridSections() {
  const allBlogs = getAllBlogs();

  return (
    <>
      <BlogBreadcrumbSection title="Our Blog" />
      <BlogGridSection allBlogs={allBlogs} />
      <BlogCtaSection />
    </>
  );
}

