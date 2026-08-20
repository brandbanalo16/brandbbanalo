import NotFoundSections from "@/components/main/NotFoundSections";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "Sorry, we couldn’t find the page you’re looking for. Explore Brand Banalo services or get in touch to discuss your project.",
};

export default function NotFound() {
  return (
    <main>
      <NotFoundSections />
    </main>
  );
}

