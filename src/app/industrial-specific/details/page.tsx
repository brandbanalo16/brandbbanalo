import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industry Details",
  description:
    "Explore detailed industry-specific solutions from Brand Banalo. Discover tailored strategies for branding, web development, SEO, and lead generation.",
};

export default function ServiceDetailsRedirectPage() {
  redirect("/industrial-specific/web-development");
}


