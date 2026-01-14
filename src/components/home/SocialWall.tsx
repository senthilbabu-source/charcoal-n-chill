"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Instagram } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const socialPosts = [
    {
        id: 1,
        user: "@hookah_vibes_atl",
        image: "/images/hookah-cnc.jpg",
        caption: "Friday nights at Charcoal N Chill are unmatched! 💨✨ #AlpharettaNightlife #HookahLounge",
        likes: "1.2k",
        delay: 0
    },
    {
        id: 2,
        user: "@foodie_jess",
        image: "/images/butter-chicken.jpg",
        caption: "The Butter Chicken here is literally to die for. 🍗🌶️ Best Indo-American fusion in town.",
        likes: "856",
        delay: 0.1
    },
    {
        id: 3,
        user: "@party_king_99",
        image: "/images/cocktails.jpg",
        caption: "Cheers to the weekend! 🍸 The mixologists here know what they're doing.",
        likes: "2.3k",
        delay: 0.2
    },
    {
        id: 4,
        user: "@atl_eats_official",
        image: "/images/chicken-65.jpg",
        caption: "Hidden Gem Alert: Charcoal N Chill in Alpharetta. Validated ✅",
        likes: "5.4k",
        delay: 0.3
    },
    {
        id: 5,
        user: "@sarah_styles",
        image: "/images/final-cnc-hero.jpg",
        caption: "Interior goals. The vibe is so premium. ✨",
        likes: "920",
        delay: 0.15
    },
    {
        id: 6,
        user: "@dessert_lover",
        image: "/images/dessert-cnc.jpg",
        caption: "Ending the night sweetly. 🍰 #DessertPorn",
        likes: "1.1k",
        delay: 0.25
    }
];

export function SocialWall() {
    return (
        <section className="py-24 bg-dark-primary relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--dark-secondary)_0%,_var(--dark-primary)_100%)] z-0" />

            <div className="container mx-auto px-4 relative z-10">
                <ScrollReveal animation="fade-up">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                            <Instagram className="text-gold-primary" size={18} />
                            <span className="text-sm font-bold uppercase tracking-widest text-white">@CHARCOAL_N_CHILL</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                            Join The <span className="gradient-text">Community</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Tag us in your stories and posts for a chance to be featured on our wall.
                            See how others are experiencing the vibe.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {socialPosts.map((post) => (
                        <ScrollReveal key={post.id} animation="fade-up" delay={post.delay}>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="break-inside-avoid bg-dark-secondary border border-white/5 rounded-2xl overflow-hidden group hover:border-gold-primary/30 transition-colors duration-300"
                            >
                                {/* Pinned Image */}
                                <div className="relative aspect-[4/5] w-full overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.caption}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                                    {/* Overlay Content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-white font-bold text-sm">{post.user}</span>
                                            <div className="flex items-center gap-1 text-gold-primary">
                                                <Heart size={14} className="fill-current" />
                                                <span className="text-xs font-bold">{post.likes}</span>
                                            </div>
                                        </div>
                                        <p className="text-gray-300 text-sm line-clamp-2 group-hover:line-clamp-none transition-all duration-300 mb-0 group-hover:mb-2">
                                            {post.caption}
                                        </p>
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-2 border-t border-white/10 flex items-center gap-2 text-xs text-gray-400 uppercase tracking-wider font-bold">
                                            <Instagram size={12} />
                                            View on Instagram
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="https://www.instagram.com/charcoal_n_chill/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold uppercase tracking-widest shadow-lg hover:shadow-purple-500/50 transition-all hover:-translate-y-1"
                    >
                        <Instagram size={20} />
                        Follow Us
                    </a>
                </div>
            </div>
        </section>
    );
}
