import MarketingArea from "@/components/Marketing-Area/Marketing-area";
import seoData from "@/data/seo-locations.json";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    const params: { state: string; city: string }[] = [];
    seoData.states.forEach((state) => {
        state.cities.forEach((city) => {
            params.push({ state: state.slug, city: city.slug });
        });
    });
    return params;
}

export async function generateMetadata({ params }: { params: Promise<{ state: string; city: string }> }) {
    const { state: stateSlug, city: citySlug } = await params;
    const state = seoData.states.find((s) => s.slug === stateSlug);
    if (!state) return { title: "Page Not Found" };

    const city = state.cities.find((c) => c.slug === citySlug);
    if (!city) return { title: "Page Not Found" };

    return {
        title: city.meta.title,
        description: city.meta.description,
        keywords: city.meta.keywords.join(", "),
    };
}

export default async function CityPage({ params }: { params: Promise<{ state: string; city: string }> }) {
    const { state: stateSlug, city: citySlug } = await params;
    const state = seoData.states.find((s) => s.slug === stateSlug);
    if (!state) return notFound();

    const city = state.cities.find((c) => c.slug === citySlug);
    if (!city) return notFound();

    return (
        <main>
            <MarketingArea locationData={city as any} />
        </main>
    );
}
