import { constructMetadata } from "@/lib/metadata";
export const dynamic = 'force-dynamic';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { JsonLd, getBreadcrumbSchema } from "@/components/layout/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { blogPosts, categories } from "@/data/blog";
import Link from "next/link";
import { Suspense } from "react";
import { BlogFilter } from "@/components/blog/BlogFilter";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { PageHero } from "@/components/ui/PageHero";

export const metadata = constructMetadata({
    title: "Blog & News | Charcoal N Chill",
    description: "Latest updates, hookah guides, and nightlife news from Charcoal N Chill.",
    path: "/blog"
});

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
    const { category } = await searchParams;
    const activeCategory = category || "All";

    const filteredPosts = activeCategory === "All"
        ? blogPosts
        : blogPosts.filter(post =>
            Array.isArray(post.category)
                ? post.category.includes(activeCategory as any)
                : post.category === activeCategory
        );

    return (
        <>
            <JsonLd data={getBreadcrumbSchema([{ name: "Blog", item: "/blog" }])} id="breadcrumb-blog" />
            <Header />
            <main className="pt-40">
                <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />

                <PageHero
                    title={<>Blog & <span className="text-gold text-glow">News</span></>}
                    description="Insights into Indo-American Cuisine, Hookah Culture, Craft Cocktails & Nightlife Trends"
                />

                <Section>
                    {/* Category Filter - Client Component for Interactivity */}
                    <Suspense fallback={<div className="h-12 w-full animate-pulse bg-white/5 rounded-full mb-12" />}>
                        <BlogFilter categories={categories} activeCategory={activeCategory} />
                    </Suspense>

                    {/* Blog Bento Grid */}
                    <div className="mt-12">
                        <BlogGrid posts={filteredPosts} />
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
