"use client";

import { useMemo } from "react";
import Link from "next/link";
import { Utensils, Music, Wine, Clock, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

import { TextReveal } from "@/components/ui/TextReveal";
import { TiltCard } from "@/components/ui/TiltCard";

const features = [
    {
        icon: Wine,
        title: "50+ Premium Flavors",
        description: "From Starbuzz to Al Fakher, experience the smoothest clouds paired with our signature coconut coals.",
        delay: 0.1,
        href: "/menu?category=hookah",
        cta: "Explore Flavors"
    },
    {
        icon: Utensils,
        title: "Indo-American Eats",
        description: "Savor the rich spices of Chef Ajay's signature Butter Chicken and street-style appetizers.",
        delay: 0.2,
        href: "/menu?category=entrees",
        cta: "View Menu"
    },
    {
        icon: Music,
        title: "Live Entertainment",
        description: "Weekly belly dancing performances, Bollywood nights, and live DJs spinning the hottest tracks.",
        delay: 0.3,
        href: "/events",
        cta: "See Events"
    },
    {
        icon: Clock,
        title: "Open Late Night",
        description: "The party doesn't stop early. We're open until 2 AM on weekends for your late-night cravings.",
        delay: 0.4,
        href: "/contact",
        cta: "Visit Us"
    }
];

export function Features() {
    return (
        <section className="relative py-24 bg-dark-secondary overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold-dark to-transparent opacity-30" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-20">
                    <ScrollReveal animation="fade-up">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                            <span className="block mb-2">What Makes Us</span>
                            <span className="gradient-text">
                                <TextReveal text="Different" mode="char" delay={0.2} />
                            </span>
                        </h2>
                        <div className="h-1 bg-gradient-to-r from-gold-dark to-gold-light mx-auto rounded-full animate-[expand-line_1s_ease-out_both]" />
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <ScrollReveal key={index} animation="fade-up" delay={feature.delay}>
                            <TiltCard className="h-full">
                                <Link href={feature.href} className="block h-full">
                                    <div className="group relative h-full bg-glass-bg border border-glass-border p-8 rounded-3xl overflow-hidden hover:border-gold-primary transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]">
                                        {/* Hover Glow */}
                                        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(212,175,55,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-0 group-hover:scale-[2]" />

                                        {/* Content */}
                                        <div className="relative z-10 flex flex-col h-full">
                                            {/* Icon with Particles */}
                                            <div className="relative w-20 h-20 mb-8">
                                                <div className="absolute inset-0 bg-gradient-to-br from-gold-dark to-gold-light rounded-2xl opacity-10 group-hover:opacity-20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" />
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <feature.icon className="text-gold-primary w-10 h-10 transition-transform duration-500" />
                                                </div>

                                                {/* Particles */}
                                                <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                    {[...Array(3)].map((_, i) => (
                                                        <span
                                                            key={i}
                                                            className="absolute w-1 h-1 bg-gold-primary rounded-full animate-[particle-float_2s_ease-in-out_infinite]"
                                                            style={{
                                                                left: `${20 + i * 30}%`,
                                                                top: '100%',
                                                                animationDelay: `${i * 0.5}s`
                                                            }}
                                                        />
                                                    ))}
                                                </div>
                                            </div>

                                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gold-primary transition-colors duration-300">
                                                {feature.title}
                                            </h3>

                                            <p className="text-gray-400 leading-relaxed font-light text-sm mb-8 flex-grow">
                                                {feature.description}
                                            </p>

                                            <div className="flex items-center text-gold-primary font-medium text-sm mt-auto group/link">
                                                <span className="border-b border-transparent group-hover/link:border-gold-primary transition-all duration-300">
                                                    {feature.cta}
                                                </span>
                                                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </TiltCard>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
