import TeamSections from "@/components/main/TeamSections";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet Our Expert Team | Brand Banalo",
  description:
    "Meet the passionate digital marketers, creative designers, and expert developers behind Brand Banalo's top-rated marketing agency.",
  keywords: [
    "Digital Marketing Experts Team",
    "Meet Brandbanalo Staff",
    "Best SEO Specialists",
    "Creative Design Team India",
    "Marketing Professionals",
    "Top Ad Managers"
  ],
};

export default function TeamPage() {
  return (
    <main>
      <TeamSections />
    </main>
  );
}

