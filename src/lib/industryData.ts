import data from "@/data/Industry.json";

export type IndustryData = typeof data;
export type Service = IndustryData["services"][number];
export type Industry = IndustryData["industries"][number];

export type IndustryServiceOverride = {
  heroTitle?: string;
  heroSubtitle?: string;
  heroDescription?: string;
  sections?: { heading: string; body: string }[];
  highlights?: string[];
};

export function getServiceById(serviceId: string): Service | undefined {
  return data.services.find((s) => s.id === serviceId);
}

export function getServiceByKey(serviceKey: string): Service | undefined {
  return data.services.find((s) => s.key === serviceKey);
}

export function getIndustryById(industryId: string): Industry | undefined {
  return data.industries.find((i) => i.id === industryId);
}

export function getIndustryByKey(industryKey: string): Industry | undefined {
  return data.industries.find((i) => i.key === industryKey);
}

export function getIndustryServiceOverride(
  industry: Industry | undefined,
  service: Service | undefined
): IndustryServiceOverride | undefined {
  if (!industry || !service) return undefined;
  const overrides = (industry as unknown as { serviceOverrides?: Record<string, IndustryServiceOverride> })
    .serviceOverrides;
  return overrides?.[service.key];
}

export function getMergedServiceForIndustry(params: {
  serviceId?: string;
  serviceKey?: string;
  industryId?: string;
  industryKey?: string;
}): (Service & { highlights?: string[] }) | undefined {
  const service =
    (params.serviceId ? getServiceById(params.serviceId) : undefined) ??
    (params.serviceKey ? getServiceByKey(params.serviceKey) : undefined);
  const industry =
    (params.industryId ? getIndustryById(params.industryId) : undefined) ??
    (params.industryKey ? getIndustryByKey(params.industryKey) : undefined);

  if (!service) return undefined;

  const override = getIndustryServiceOverride(industry, service);
  if (!override) return service;

  return {
    ...service,
    heroTitle: override.heroTitle ?? service.heroTitle,
    heroSubtitle: override.heroSubtitle ?? service.heroSubtitle,
    heroDescription: override.heroDescription ?? service.heroDescription,
    sections: override.sections ?? service.sections,
    highlights: override.highlights,
  };
}

