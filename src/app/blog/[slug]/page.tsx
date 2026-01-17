import { CommentWrapper } from "@/components/blog/CommentWrapper";
import { notFound } from "next/navigation";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog-utils";
import { RelatedEvents } from "@/components/blog/RelatedEvents";
import Image from "next/image";
import { constructMetadata } from "@/lib/metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Calendar, User, ArrowLeft, Tag, Clock } from "lucide-react";
import Link from "next/link";
import { JsonLd, getArticleSchema } from "@/components/layout/JsonLd";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

// Generate dynamic metadata for each post
export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const post = await getBlogPostBySlug(slug);

    if (!post) {
        return {
            title: "Post Not Found | Charcoal N Chill",
        };
    }

    return constructMetadata({
        title: `${post.title} | Charcoal N Chill`,
        description: post.excerpt,
        image: post.image,
        path: `/blog/${post.slug}`,
    });
}

// Generate static params for all known posts at build time
export async function generateStaticParams() {
    const posts = await getAllBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = await getBlogPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const allPosts = await getAllBlogPosts();

    // Find related posts (same category, excluding current)
    const postCategories = Array.isArray(post.category) ? post.category : [post.category];
    const relatedPosts = allPosts
        .filter((p) => {
            if (p.id === post.id) return false;
            const pCategories = Array.isArray(p.category) ? p.category : [p.category];
            // Check intersection
            return pCategories.some(c => postCategories.includes(c));
        })
        .slice(0, 3);

    return (
        <>
            <JsonLd data={getArticleSchema(post)} id={`article-${post.id}`} />
            <Header />
            <main className="pt-40">
                <Breadcrumbs
                    customItems={[
                        { label: "Blog", href: "/blog" },
                        { label: post.title, href: `/blog/${post.slug}` },
                    ]}
                />

                <article>
                    {/* Hero Section */}
                    <div className="relative h-[60vh] w-full overflow-hidden">
                        <div className="absolute inset-0 bg-black/50 z-10" />
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 z-20 flex items-center justify-center">
                            <div className="container px-4 text-center space-y-6">
                                <span className="inline-block px-4 py-1 rounded-full bg-gold text-charcoal font-bold text-sm uppercase tracking-wider">
                                    {Array.isArray(post.category) ? post.category.join(" & ") : post.category}
                                </span>
                                <h1 className="text-4xl md:text-6xl font-heading font-bold text-white max-w-4xl mx-auto leading-tight">
                                    {post.title}
                                </h1>
                                <div className="flex items-center justify-center gap-6 text-gray-300 text-sm font-medium uppercase tracking-widest">
                                    <span className="flex items-center gap-2"><Calendar size={16} className="text-gold" /> {post.date}</span>
                                    <span className="flex items-center gap-2"><Clock size={16} className="text-gold" /> {post.readTime}</span>
                                    <span className="flex items-center gap-2"><User size={16} className="text-gold" /> {post.author}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <Section className="bg-charcoal">
                        <div className="container px-4 max-w-4xl mx-auto">
                            <div className="prose prose-lg prose-invert mx-auto 
                                prose-headings:font-heading prose-headings:font-bold prose-headings:text-white
                                prose-h3:text-gold prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                                prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                                prose-a:text-gold prose-a:no-underline prose-a:font-bold hover:prose-a:underline
                                prose-strong:text-white prose-strong:font-bold
                                prose-ul:text-gray-300 prose-li:marker:text-gold
                                prose-ol:text-gray-300 prose-li:marker:text-gold
                                prose-img:rounded-3xl prose-img:shadow-2xl prose-img:border prose-img:border-white/10
                                ">
                                <div dangerouslySetInnerHTML={{ __html: post.content || "" }} />
                            </div>

                            {/* CTA Section */}
                            <div className="mt-12 text-center border-t border-white/5 pt-8">
                                <p className="text-xl font-heading font-bold text-white mb-4">
                                    Ready to Experience the Vibe?
                                </p>
                                <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-gold font-bold uppercase tracking-wider text-sm">
                                    <Link href="/contact#reserve" className="hover:text-white transition-colors">
                                        Book Your Table
                                    </Link>
                                    <span className="text-gray-600">|</span>
                                    <Link href="/menu" className="hover:text-white transition-colors">
                                        View Full Menu
                                    </Link>
                                    <span className="text-gray-600">|</span>
                                    <Link href="/events" className="hover:text-white transition-colors">
                                        See Upcoming Events
                                    </Link>
                                </div>
                            </div>

                            {/* Tags / Categories */}
                            <div className="mt-12 pt-8 border-t border-white/5 flex items-center gap-4">
                                <Tag className="text-gold" size={20} />
                                <span className="text-gray-400">Filed under:</span>
                                {Array.isArray(post.category) ? (
                                    <span className="flex items-center gap-2">
                                        {post.category.map((cat, i) => (
                                            <span key={cat}>
                                                <Link
                                                    href={`/blog?category=${cat}`}
                                                    className="text-white hover:text-gold transition-colors font-bold"
                                                >
                                                    {cat}
                                                </Link>
                                                {i < post.category.length - 1 && <span className="text-gray-600">, </span>}
                                            </span>
                                        ))}
                                    </span>
                                ) : (
                                    <Link
                                        href={`/blog?category=${post.category}`}
                                        className="text-white hover:text-gold transition-colors font-bold"
                                    >
                                        {post.category}
                                    </Link>
                                )}
                            </div>

                            {/* Comment Section */}
                            <CommentSection
                                slug={post.slug}
                                title={post.title}
                                id={post.id}
                            />
                        </div>
                    </Section>
                </article>

                {/* Comment Section */}
                <div className="mt-16 pt-16 border-t border-white/10">
                    <CommentWrapper id={post.id} title={post.title} slug={slug} />
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <Section className="bg-dark-secondary border-t border-white/5">
                        <div className="container px-4">
                            <h2 className="text-3xl font-heading font-bold text-white mb-12 text-center">
                                More in <span className="text-gold">{Array.isArray(post.category) ? post.category.join(" & ") : post.category}</span>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {relatedPosts.map((related) => (
                                    <Link key={related.id} href={`/blog/${related.slug}`} className="group block space-y-4">
                                        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/5">
                                            <Image
                                                src={related.image}
                                                alt={related.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                            />
                                        </div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors line-clamp-2">
                                            {related.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm line-clamp-2">{related.excerpt}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </Section>
                )}

                {/* Related Events Cross-Link */}
                <RelatedEvents />

                {/* Navigation Footer */}
                <div className="bg-charcoal py-12 border-t border-white/5 text-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-white hover:text-gold transition-colors font-bold uppercase tracking-widest"
                    >
                        <ArrowLeft size={20} /> Back to Blog
                    </Link>
                </div>
            </main>
            <Footer />
        </>
    );
}
