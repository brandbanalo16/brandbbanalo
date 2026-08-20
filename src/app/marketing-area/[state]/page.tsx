import MarketingArea from "@/components/Marketing-Area/Marketing-area";
import seoData from "@/data/seo-locations.json";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return seoData.states.map((state) => ({
        state: state.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }) {
    const { state: stateSlug } = await params;
    const state = seoData.states.find((s) => s.slug === stateSlug);
    if (!state) return { title: "Page Not Found" };

    return {
        title: state.meta.title,
        description: state.meta.description,
        keywords: state.meta.keywords.join(", "),
    };
}

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
    const { state: stateSlug } = await params;
    const state = seoData.states.find((s) => s.slug === stateSlug);

    if (!state) {
        return notFound();
    }

    return (
        <main>
            <MarketingArea locationData={state as any} />
        </main>
    );
}
