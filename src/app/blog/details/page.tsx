import BlogDetailsSections from "@/components/main/BlogDetailsSections";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Blog Article | Brandbanalo",
  description:
    "Explore practical marketing insights and strategies—from branding and SEO to performance campaigns—designed to help businesses grow faster.",
  keywords: [
    "Digital Marketing Blog",
    "SEO Marketing Insights",
    "Branding Tips and Tricks",
    "Web Development Blog",
    "Social Media Marketing News",
    "Online Growth Strategies",
  ],
};

export default function BlogDetailsPage() {
  return (
    <main>
      <BlogDetailsSections />
    </main>
  );
}

