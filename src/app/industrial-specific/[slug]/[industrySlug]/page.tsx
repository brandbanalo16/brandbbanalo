import ServiceDetailsSections from "@/components/main/ServiceDetailsSections";
import servicesData from "@/data/Industry.json";
import { getMergedServiceForIndustry } from "@/lib/industryData";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string; industrySlug: string }>;
};

/** With a parent `generateStaticParams`, Next (incl. `output: "export"`) expects child params here — return only `[industrySlug]`. */
export async function generateStaticParams({
  params: parentParams,
}: {
  params: { slug: string };
}) {
  const resolvedSlug =
    parentParams.slug === "web-design" ? "web-development" : parentParams.slug;
  const service = servicesData.services.find((s) => s.key === resolvedSlug);
  if (!service) {
    return [];
  }
  return servicesData.industries.map((industry) => ({
    industrySlug: industry.key,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, industrySlug } = await params;
  const serviceKey = slug === "web-design" ? "web-development" : slug;
  const service = servicesData.services.find((s) => s.key === serviceKey);
  const industry = servicesData.industries.find((i) => i.key === industrySlug);

  if (!service || !industry) return { title: "Service Not Found" };
  const merged = getMergedServiceForIndustry({ serviceKey, industryKey: industrySlug });

  return {
    title: `${industry.name} ${service.name}`,
    description: merged?.heroDescription ?? industry.description,
  };
}

export default async function IndustryServiceDetailsPage({ params }: Props) {
  const { slug, industrySlug } = await params;
  const serviceKey = slug === "web-design" ? "web-development" : slug;
  const service = servicesData.services.find((s) => s.key === serviceKey);
  const industry = servicesData.industries.find((i) => i.key === industrySlug);

  if (!service || !industry) {
    notFound();
  }

  return (
    <main>
      <ServiceDetailsSections initialServiceId={service.id} initialIndustryId={industry.id} />
    </main>
  );
}
