import BlogStandardSections from "@/components/main/BlogStandardSections";
import type { Metadata } from "next";




export const metadata: Metadata = {
  title: "Digital Marketing Blog & Insights | Brandbanalo ",
  description:
    "Explore the Brandbanalo blog for the latest trends, tips, and insights in digital marketing, SEO, web development, and branding strategies.",
  keywords: [
    "Digital Marketing Blog",
    "SEO Marketing Insights",
    "Branding Tips and Tricks",
    "Web Development Blog",
    "Social Media Marketing News",
    "Online Growth Strategies"
  ],
};

export default function BlogPage() {
  return (
    <main>
      <BlogStandardSections />
    </main>
  );
}

