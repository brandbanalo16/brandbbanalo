import industryData from "@/data/Industry.json";

export const dynamicParams = false;

/** Parent segment params for `[slug]/…` (required for `output: "export"` + nested `[industrySlug]`). */
export async function generateStaticParams() {
  const params = industryData.services.map((service) => ({
    slug: service.key,
  }));
  params.push({ slug: "web-design" });
  return params;
}

export default function IndustrialSpecificSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
