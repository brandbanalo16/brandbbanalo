import seoData from "@/data/seo-locations.json";
import marketingConfig from "@/data/marketing-services.json";

export type MarketingServiceItem = (typeof marketingConfig)["services"][number];

export function getMarketingServices(): MarketingServiceItem[] {
  return marketingConfig.services;
}

export function isAllowedMarketingLocationSlug(slug: string): boolean {
  if (seoData.states.some((s) => s.slug === slug)) return true;
  for (const state of seoData.states) {
    if (state.cities.some((c) => c.slug === slug)) return true;
  }
  return false;
}

type SeoCity = (typeof seoData.states)[number]["cities"][number];

/** All states and cities from seo-locations for generating static paths. */
export function getOrderedMarketingTargetLocations(): { slug: string; name: string }[] {
  const locations: { slug: string; name: string }[] = [];
  for (const state of seoData.states) {
    locations.push({ slug: state.slug, name: state.name });
    for (const city of state.cities) {
      locations.push({ slug: city.slug, name: city.name });
    }
  }
  return locations;
}

/** Full city rows from seo-locations. */
export function getOrderedMarketingTargetCities(): SeoCity[] {
  const cities: SeoCity[] = [];
  for (const state of seoData.states) {
    for (const city of state.cities) {
      cities.push(city);
    }
  }
  return cities;
}
