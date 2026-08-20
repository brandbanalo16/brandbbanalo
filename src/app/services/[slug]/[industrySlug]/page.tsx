import ModernServiceDetailsSections from "@/components/main/ModernServiceDetailsSections";
import servicesData from "@/data/services.json";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string; industrySlug: string }>;
};

export async function generateStaticParams() {
  const params: { slug: string; industrySlug: string }[] = [];

  servicesData.services.forEach((service) => {
    servicesData.industries.forEach((industry) => {
      params.push({
        slug: service.key,
        industrySlug: industry.key,
      });
    });
  });

  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, industrySlug } = await params;
  const lookupSlug = slug === "technology" ? "web-development" : slug;
  const service = servicesData.services.find((s) => s.key === lookupSlug || s.id === lookupSlug);
  const industry = servicesData.industries.find((i) => i.key === industrySlug);

  if (!service || !industry) return { title: "Service Not Found" };

  return {
    title: `${industry.name} ${service.name}`,
    description: industry.description,
  };
}

export default async function ServiceIndustryPage({ params }: Props) {
  const { slug, industrySlug } = await params;
  const lookupSlug = slug === "technology" ? "web-development" : slug;
  const service = servicesData.services.find((s) => s.key === lookupSlug || s.id === lookupSlug);
  const industry = servicesData.industries.find((i) => i.key === industrySlug);

  if (!service || !industry) {
    notFound();
  }

  return (
    <main>
      <ModernServiceDetailsSections
        initialServiceId={service.id}
        initialIndustryId={industry.id}
        breadcrumbParent={service.name}
        breadcrumbChild={industry.name}
        title={`${industry.name} ${service.name}`}
        subtitle={service.heroSubtitle}
        bannerImage={industry.image}
      />
    </main>
  );
}
