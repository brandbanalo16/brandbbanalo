import BlogGridSections from "@/components/main/BlogGridSections";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Blog (Grid)",
  description:
    "Browse Brandbanalo articles on branding, SEO, performance marketing, and web development—tips, strategies, and real-world learnings.",
};

export default function BlogGridPage() {
  return (
    <main>
      <BlogGridSections />
    </main>
  );
}

