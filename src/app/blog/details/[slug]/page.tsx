import BlogDetailsSections from "@/components/main/BlogDetailsSections";
import type { Metadata, ResolvingMetadata } from "next";
import blogsData from "@/data/blogs.json";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const post = blogsData.find((b) => b.slug === slug) || blogsData[0];

  return {
    title: post.metaTitle || `${post.title} | Brandbanalo`,
    description: post.metaDescription,
    keywords: post.secondaryKeywords || [],
  };
}

export default async function BlogDetailsPage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const post = blogsData.find((b) => b.slug === slug) || blogsData[0];

  return (
    <main>
      <BlogDetailsSections title={post.title} slug={slug} />
    </main>
  );
}
