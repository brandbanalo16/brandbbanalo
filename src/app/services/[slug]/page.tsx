import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ServiceSections from "@/components/main/ServiceSections";
import servicesMainData from "@/data/ServicesMain.json";

export const dynamicParams = false;

export async function generateStaticParams() {
  return servicesMainData.services.map((service) => ({
    // Prefer `key` for cleaner URLs; fallback to `id` if `key` is missing.
    slug: service.key || service.id,
  }));
}

type ServicePageParams = {
  slug: string;
};

interface PageProps {
  // Next may provide `params` as a Promise in this route type.
  params: Promise<ServicePageParams>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const lookupSlug = slug === "technology" ? "web-development" : slug;
  const service = servicesMainData.services.find(
    (s) => s.key === lookupSlug || s.id === lookupSlug
  );

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `Best ${service.name} Service | Brand Banalo`,
    description:
      service.hero?.description ||
      "Professional digital marketing and web services by Brand Banalo.",
    keywords: [
      `Best ${service.name} Service`,
      `${service.name} Creating Service`,
    ],
  };
}

export default async function DynamicServicePage({ params }: PageProps) {
  // Support the bespoke "technology" mock link by mapping it to web-development data
  const { slug } = await params;
  const lookupSlug = slug === "technology" ? "web-development" : slug;
  const service = servicesMainData.services.find(
    (s) => s.key === lookupSlug || s.id === lookupSlug
  );

  if (!service) {
    notFound();
  }

  return (
    <main>
      <ServiceSections showBanner={false} initialServiceId={service.id} />
    </main>
  );
}
