import MarketingArea from "@/components/Marketing-Area/Marketing-area";
import seoData from "@/data/seo-locations.json";
import {
    getMarketingServices,
    getOrderedMarketingTargetLocations,
    isAllowedMarketingLocationSlug,
} from "@/lib/marketingTargets";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    const services = getMarketingServices();
    const locations = getOrderedMarketingTargetLocations();
    const params: { marketingSlug: string }[] = [];

    for (const loc of locations) {
        params.push({ marketingSlug: `best-digital-marketing-agency-in-${loc.slug}` });
        for (const service of services) {
            params.push({ marketingSlug: `${service.slug}-in-${loc.slug}` });
        }
    }

    return params;
}

function parseSlug(marketingSlug: string) {
    let locationMatch: any = null;
    let serviceMatch: any = null;
    let locationSlug = "";
    
    // Check for legacy slug
    if (marketingSlug.startsWith("best-digital-marketing-agency-in-")) {
        locationSlug = marketingSlug.replace("best-digital-marketing-agency-in-", "");
        serviceMatch = {
            name: "Digital Marketing Agency",
            slug: "best-digital-marketing-agency"
        };
    } else {
        // New slug pattern: [service-slug]-in-[location-slug]
        const parts = marketingSlug.split("-in-");
        if (parts.length >= 2) {
            // Longest slug first so one service prefix cannot steal another (e.g. similar slugs).
            const bySlugLength = [...getMarketingServices()].sort(
                (a, b) => b.slug.length - a.slug.length
            );
            for (const service of bySlugLength) {
                if (marketingSlug.startsWith(`${service.slug}-in-`)) {
                    serviceMatch = service;
                    locationSlug = marketingSlug.replace(`${service.slug}-in-`, "");
                    break;
                }
            }
        }
    }

    if (!serviceMatch || !locationSlug) return { serviceMatch: null, locationMatch: null };

    if (!isAllowedMarketingLocationSlug(locationSlug)) {
        return { serviceMatch: null, locationMatch: null };
    }

    // Find location
    const stateMatch = seoData.states.find((s) => s.slug === locationSlug);
    if (stateMatch) {
        locationMatch = stateMatch;
    } else {
        for (const state of seoData.states) {
            const cityMatch = state.cities.find((c) => c.slug === locationSlug);
            if (cityMatch) {
                locationMatch = cityMatch;
                break;
            }
        }
    }
    
    return { serviceMatch, locationMatch };
}

export async function generateMetadata({ params }: { params: Promise<{ marketingSlug: string }> }) {
    const { marketingSlug } = await params;
    const { serviceMatch, locationMatch } = parseSlug(marketingSlug);
    
    if (!locationMatch || !serviceMatch) {
        return { title: "Page Not Found" };
    }

    // Dynamically replace "Digital Marketing Agency" with the service name in the meta
    const title = locationMatch.meta.title.replace(/Digital Marketing Agency|Digital Marketing/gi, serviceMatch.name);
    const description = locationMatch.meta.description.replace(/Digital Marketing Agency|Digital Marketing/gi, serviceMatch.name);
    
    // Replace in keywords too
    const keywords = (locationMatch.meta.keywords || []).map((k: string) => 
        k.replace(/Digital Marketing Agency|Digital Marketing/gi, serviceMatch.name)
    ).join(", ");

    return {
        title,
        description,
        keywords,
    };
}

export default async function LocationPage({ params }: { params: Promise<{ marketingSlug: string }> }) {
    const { marketingSlug } = await params;
    const { serviceMatch, locationMatch } = parseSlug(marketingSlug);
    
    if (!locationMatch || !serviceMatch) {
        return notFound();
    }

    return (
        <main>
            <MarketingArea locationData={locationMatch as any} serviceData={serviceMatch} />
        </main>
    );
}
