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
        : blogPosts.filter(post => post.category === activeCategory);

    return (
        <>
            <JsonLd data={getBreadcrumbSchema([{ name: "Blog", item: "/blog" }])} id="breadcrumb-blog" />
            <Header />
            <main className="pt-40">
                <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />
                <section className="bg-charcoal py-20 border-b border-white/5 mx-auto">
                    <div className="container px-4 md:px-6 text-center space-y-4">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white tracking-tight">
                            Blog & <span className="text-gold">News</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-gray-400 text-lg">
                            Insights into Indo-American Cuisine, Hookah Culture, Craft Cocktails & Nightlife Trends
                        </p>
                    </div>
                </section>

                <Section>
                    {/* Category Filter - Client Component for Interactivity */}
                    <Suspense fallback={<div className="h-12 w-full animate-pulse bg-white/5 rounded-full mb-12" />}>
                        <BlogFilter categories={categories} activeCategory={activeCategory} />
                    </Suspense>

                    {/* Blog Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {filteredPosts.map((post) => (
                            <article
                                key={post.id}
                                className="group flex flex-col space-y-6"
                            >
                                <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/5">
                                    <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-bold text-gold uppercase tracking-widest">
                                        {post.category}
                                    </div>
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        width="800"
                                        height="600"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                </Link>

                                <div className="space-y-4 flex-grow">
                                    <div className="flex items-center gap-6 text-xs text-gold font-bold uppercase tracking-widest">
                                        <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                                        <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                                        <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                                    </div>

                                    <Link href={`/blog/${post.slug}`}>
                                        <h2 className="text-2xl font-heading font-bold text-white group-hover:text-gold transition-colors line-clamp-2">
                                            {post.title}
                                        </h2>
                                    </Link>

                                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-white/5">
                                    <Link href={`/blog/${post.slug}`} className="flex items-center gap-2 text-gold font-bold text-sm hover:translate-x-2 transition-transform">
                                        Read More <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>

                    {filteredPosts.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-lg">No posts found in this category yet.</p>
                        </div>
                    )}
                </Section>
            </main>
            <Footer />
        </>
    );
}
