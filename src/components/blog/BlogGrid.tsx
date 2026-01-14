"use client";

import { BlogPost } from "@/data/blog";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BlogGridProps {
    posts: BlogPost[];
}

import Image from "next/image";

// ... (imports remain)

export function BlogGrid({ posts }: BlogGridProps) {
    const [visibleCount, setVisibleCount] = useState(12);
    const visiblePosts = posts.slice(0, visibleCount);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 6);
    };

    // Helper to determine span classes based on index
    const getSpanClasses = (index: number) => {
        const patternIndex = index % 10;
        if (patternIndex === 0) return "md:col-span-2 md:row-span-2";
        if (patternIndex === 6) return "md:col-span-2";
        return "col-span-1";
    };

    return (
        <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[minmax(500px,auto)]">
                <AnimatePresence>
                    {visiblePosts.map((post, index) => {
                        const isLarge = (index % 10 === 0);

                        return (
                            <motion.article
                                key={post.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: index < 12 ? index * 0.05 : 0 }}
                                className={`group relative flex flex-col rounded-3xl overflow-hidden border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500 ${getSpanClasses(index)}`}
                            >
                                {/* Image Section */}
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className={`relative block overflow-hidden ${isLarge ? 'h-[60%]' : 'h-[55%]'} w-full`}
                                >
                                    <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                                        {Array.isArray(post.category) ? (
                                            post.category.map(cat => (
                                                <span key={cat} className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-bold text-gold uppercase tracking-widest">
                                                    {cat}
                                                </span>
                                            ))
                                        ) : (
                                            <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-bold text-gold uppercase tracking-widest">
                                                {post.category}
                                            </span>
                                        )}
                                    </div>
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                                </Link>

                                {/* Content Section */}
                                <div className="flex flex-col flex-grow p-6 sm:p-8 relative">
                                    <div className="flex items-center gap-4 text-xs text-gold/80 font-bold uppercase tracking-widest mb-4">
                                        <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                                        <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                                    </div>

                                    <Link href={`/blog/${post.slug}`} className="block mb-4">
                                        <h2 className={`font-heading font-bold text-white group-hover:text-gold transition-colors leading-tight ${isLarge ? 'text-3xl sm:text-4xl' : 'text-xl sm:text-2xl'}`}>
                                            {post.title}
                                        </h2>
                                    </Link>

                                    <p className={`text-gray-400 leading-relaxed mb-6 line-clamp-3 ${isLarge ? 'text-base sm:text-lg' : 'text-sm'}`}>
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-xs text-gray-400">
                                            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                                                <User size={12} />
                                            </div>
                                            {post.author}
                                        </div>
                                        <Link href={`/blog/${post.slug}`} className="flex items-center gap-2 text-gold font-bold text-sm hover:translate-x-2 transition-transform">
                                            Read More <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </AnimatePresence>
            </div>

            {visibleCount < posts.length && (
                <div className="flex justify-center pt-8">
                    <button
                        onClick={handleLoadMore}
                        className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full"
                    >
                        <div className="absolute inset-0 w-full h-full bg-white/5 group-hover:bg-gold/10 transition-colors duration-300 border border-white/10 group-hover:border-gold/30 rounded-full" />
                        <span className="relative flex items-center gap-3 text-white font-bold tracking-widest uppercase text-sm group-hover:text-gold transition-colors">
                            Load More Stories
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                </div>
            )}

            {posts.length === 0 && (
                <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10">
                    <p className="text-gray-400 text-lg">No posts found in this category yet.</p>
                </div>
            )}
        </div>
    );
}
