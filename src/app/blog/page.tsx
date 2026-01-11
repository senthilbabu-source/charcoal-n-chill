import { constructMetadata } from "@/lib/metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";

import { JsonLd, getBreadcrumbSchema } from "@/components/layout/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

import { Calendar, User, ArrowRight } from "lucide-react";

export const metadata = constructMetadata({
    title: "Blog & Insights | Hookah Culture & Indian Cuisine in Alpharetta",
    description: "Deep dive into hookah culture, authentic Indian recipes, and the best nightlife tips from Charcoal N Chill. Your guide to premium lounge experiences in GA.",
    path: "/blog",
    keywords: ["hookah tips blog", "Indian food guides", "Atlanta nightlife blog", "lounge culture insights"]
});

const posts = [
    {
        title: "The Ultimate Guide to Hookah Flavors: Finding Your Perfect Blend",
        excerpt: "New to hookah? Learn about different flavor profiles, from fruity favorites to traditional mints, and how to find the perfect mix for your palate.",
        date: "Jan 5, 2026",
        author: "Admin",
        image: "https://images.unsplash.com/photo-1542332213-9b5a5a3fab35?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Top 5 Indian Dishes to Try at Charcoal N Chill",
        excerpt: "Explore the authentic flavors of our kitchen. From the spicy kick of Chicken 65 to the creamy comfort of Butter Chicken Masala.",
        date: "Dec 28, 2025",
        author: "Chef Raj",
        image: "https://images.unsplash.com/photo-1626777552726-4a6b547b4e5c?q=80&w=1925&auto=format&fit=crop"
    },
    {
        title: "How to Host the Perfect Private Event in Alpharetta",
        excerpt: "Planning a celebration? We share professional tips on coordinating guest lists, choosing the right menu, and creating a VIP atmosphere.",
        date: "Dec 15, 2025",
        author: "Events Team",
        image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2070&auto=format&fit=crop"
    }
];

export default function BlogPage() {
    return (
        <>
            <JsonLd data={getBreadcrumbSchema([{ name: "Blog", item: "/blog" }])} id="breadcrumb-blog" />
            <Header />
            <main className="pt-20">
                <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />
                <section className="bg-charcoal py-20 border-b border-white/5 mx-auto">
                    <div className="container px-4 md:px-6 text-center space-y-4">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white tracking-tight">
                            Blog & <span className="text-gold">News</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-gray-400 text-lg">
                            Insights into hookah culture, authentic Indian cuisine, and nightlife trends.
                        </p>
                    </div>
                </section>

                <Section>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {posts.map((post, i) => (
                            <article key={i} className="group flex flex-col space-y-6">
                                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/5">
                                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" width="800" height="600" loading="lazy" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                </div>

                                <div className="space-y-4 flex-grow">
                                    <div className="flex items-center gap-6 text-xs text-gold font-bold uppercase tracking-widest">
                                        <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                                        <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                                    </div>

                                    <h2 className="text-2xl font-heading font-bold text-white group-hover:text-gold transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>

                                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-white/5">
                                    <button className="flex items-center gap-2 text-gold font-bold text-sm hover:translate-x-2 transition-transform">
                                        Read More <ArrowRight size={16} />
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
