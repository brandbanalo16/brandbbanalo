import ModernServiceDetailsSections from "@/components/main/ModernServiceDetailsSections";
import industryData from "@/data/Industry.json";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const serviceKey = slug === "web-design" ? "web-development" : slug;
  const service = industryData.services.find((s) => s.key === serviceKey);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.name,
    description: service.heroDescription,
  };
}

export default async function ServiceDetailsPage({ params }: Props) {
  const { slug } = await params;
  const serviceKey = slug === "web-design" ? "web-development" : slug;
  const service = industryData.services.find((s) => s.key === serviceKey);

  if (!service) {
    notFound();
  }

  return (
    <main>
      <ModernServiceDetailsSections 
        initialServiceId={service.id} 
        breadcrumbChild={service.name}
        title={service.heroTitle}
        subtitle={service.heroSubtitle}
      />
    </main>
  );
}
