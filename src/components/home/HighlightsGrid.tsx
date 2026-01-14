"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Music, Utensils, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface HighlightItem {
    id: string;
    title: string;
    description: string;
    image: string;
    link: string;
    cta: string;
    icon: React.ElementType;
    size: "large" | "tall" | "wide" | "standard";
    className?: string;
}

const highlights: HighlightItem[] = [
    {
        id: "menu",
        title: "The Flavor Experience",
        description: "From our signature Butter Chicken to Tandoori Wings, explore a fusion of Indo-American tastes.",
        image: "/images/butter-chicken.jpg",
        link: "/menu",
        cta: "View Full Menu",
        icon: Utensils,
        size: "large",
        className: "md:col-span-2 md:row-span-2"
    },
    {
        id: "events",
        title: "Live Events",
        description: "Belly dancing, Bollywood nights, and live DJs every weekend.",
        image: "/images/belly-dance-cnc.jpg",
        link: "/events",
        cta: "See Schedule",
        icon: Music,
        size: "tall",
        className: "md:col-span-1 md:row-span-2"
    },
    {
        id: "hookah",
        title: "Premium Hookah",
        description: "50+ exotic flavors with ice hose upgrades.",
        image: "/images/hookah-cnc.jpg",
        link: "/menu",
        cta: "Explore Flavors",
        icon: Star,
        size: "standard",
        className: ""
    },
    {
        id: "private",
        title: "Private Parties",
        description: "Book the VIP lounge for your next celebration.",
        image: "/images/vip-section.jpg",
        link: "/contact",
        cta: "Book VIP",
        icon: Calendar,
        size: "standard",
        className: ""
    }
];

export function HighlightsGrid() {
    return (
        <section className="py-24 bg-dark-primary relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold-primary/5 via-transparent to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold mb-6 text-white"
                    >
                        Experience <span className="gradient-text">The Vibe</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg font-light"
                    >
                        More than just a lounge. It&apos;s a destination for flavor, rhythm, and relaxation.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={cn(
                                "group relative overflow-hidden rounded-3xl border border-white/10 bg-dark-secondary",
                                item.className
                            )}
                        >
                            {/* Background Image with Zoom Effect */}
                            <div className="absolute inset-0 z-0">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                                <div className="absolute inset-0 w-full h-full group-hover:scale-110 transition-transform duration-700">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative z-20 h-full flex flex-col justify-end p-8">
                                <div className="mb-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-4 group-hover:translate-y-0">
                                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-4">
                                        <item.icon className="text-gold-primary" size={24} />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gold-primary transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-300 mb-6 line-clamp-2 group-hover:text-white transition-colors">
                                        {item.description}
                                    </p>

                                    <Link href={item.link}>
                                        <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gold-primary hover:text-white transition-colors group/btn">
                                            {item.cta}
                                            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
