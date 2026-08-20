import ServiceSections from "@/components/main/ServiceSections";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Social Media Management Service | Brand Banalo",
  description:
    "Engage your audience and build brand credibility through consistent and creative social media management across all major platforms.",
  keywords: [
    "Best Social Media Management Service",
    "Social Media Management Creating Service",
    "Instagram Marketing Service",
    "Facebook Growth Service",
    "Social Media Strategy Service",
    "Community Engagement Service"
  ],
};

export default function SocialMediaManagementPage() {
  return (
    <main>
      <ServiceSections showBanner={false} initialServiceId="006" />
    </main>
  );
}
