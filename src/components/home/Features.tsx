"use client";

import { useMemo } from "react";
import { Utensils, Music, Wine, Clock } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

import { TextReveal } from "@/components/ui/TextReveal";
import { TiltCard } from "@/components/ui/TiltCard";

const features = [
    {
        icon: Wine,
        title: "50+ Premium Flavors",
        description: "From Starbuzz to Al Fakher, experience the smoothest clouds paired with our signature coconut coals.",
        delay: 0.1
    },
    {
        icon: Utensils,
        title: "Authentic Indo-American Cuisine",
        description: "Savor the rich spices of Chef Ajay's signature Butter Chicken and street-style appetizers.",
        delay: 0.2
    },
    {
        icon: Music,
        title: "Live Entertainment",
        description: "Weekly belly dancing performances, Bollywood nights, and live DJs spinning the hottest tracks.",
        delay: 0.3
    },
    {
        icon: Clock,
        title: "Open Late Night",
        description: "The party doesn't stop early. We're open until 2 AM on weekends for your late-night cravings.",
        delay: 0.4
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
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="block mb-2">Why Choose</span>
                            <span className="gradient-text">
                                <TextReveal text="Charcoal N Chill?" mode="char" delay={0.2} />
                            </span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-gold-dark to-gold-light mx-auto rounded-full" />
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <ScrollReveal key={index} animation="fade-up" delay={feature.delay}>
                            <TiltCard className="h-full">
                                <div className="group relative h-full bg-glass-bg border border-glass-border p-8 rounded-3xl overflow-hidden hover:border-gold-primary/50 transition-colors duration-500">
                                    {/* Hover Glow */}
                                    <div className="absolute inset-0 bg-gold-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-gold-primary/20 blur-[50px] group-hover:bg-gold-primary/30 transition-all duration-500" />

                                    <div className="relative z-10">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-dark to-gold-light p-0.5 mb-6 group-hover:scale-110 transition-transform duration-500">
                                            <div className="w-full h-full bg-dark-secondary rounded-2xl flex items-center justify-center">
                                                <feature.icon className="text-gold-primary group-hover:text-white transition-colors duration-300" size={28} />
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gold-primary transition-colors duration-300">
                                            {feature.title}
                                        </h3>

                                        <p className="text-gray-400 leading-relaxed font-light text-sm">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </TiltCard>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
