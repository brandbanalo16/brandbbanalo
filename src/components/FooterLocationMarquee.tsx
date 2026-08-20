import Link from "next/link";
import { getMarketingServices, getOrderedMarketingTargetLocations } from "@/lib/marketingTargets";
import marketingConfig from "@/data/marketing-services.json";

export default function FooterLocationMarquee() {
  const services = getMarketingServices();
  const allLocations = getOrderedMarketingTargetLocations();
  const allowedSlugs = new Set(marketingConfig.targetLocationSlugs);
  const locations = allLocations.filter(loc => allowedSlugs.has(loc.slug));
  const locationLinks: { label: string; url: string }[] = [];

  for (const loc of locations) {
    for (const service of services) {
      locationLinks.push({
        label: `${service.name} in ${loc.name}`,
        url: `/${service.slug}-in-${loc.slug}/`,
      });
    }
  }

  return (
    <div className="location-marquee-container">
      <div className="location-marquee-track">
        {locationLinks.map((loc, i) => (
          <span key={i} className="location-marquee-item">
            <Link href={loc.url} prefetch={false}>{loc.label}</Link>
            <span className="marquee-separator">|</span>
          </span>
        ))}
        {/* Duplicate the items for infinite scrolling effect */}
        {locationLinks.map((loc, i) => (
          <span key={`dup-${i}`} className="location-marquee-item">
            <Link href={loc.url} prefetch={false}>{loc.label}</Link>
            <span className="marquee-separator">|</span>
          </span>
        ))}
      </div>
    </div>
  );
}
