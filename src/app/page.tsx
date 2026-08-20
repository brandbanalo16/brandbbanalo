import HomeSections from "@/components/main/HomeSections";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative & Digital Marketing Agency | Brand Banalo",
  description:
    "Brand Banalo helps businesses grow with branding, web development, SEO, social media marketing, lead generation, and performance ads.",
  keywords: [
    "Best Digital Marketing Agency",
    "Digital Marketing Service",
    "Best Website Development Service",
    "Website Creating Service",
    "Best SEO Service",
    "SEO Optimization Service"
  ],
};

export default function Home() {
  return (
    <main>
      <HomeSections />
    </main>
  );
}


