"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export function StorySection() {
    return (
        <section id="our-story" className="py-24 bg-dark-primary relative overflow-hidden">

            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Sticky Image Side */}
                    <div className="relative lg:sticky lg:top-32 h-[500px] lg:h-[70vh] rounded-[2.5rem] overflow-hidden group">
                        <Image
                            src="/images/cocktails.jpg" // Using an elegant image
                            alt="Atmosphere at CNC"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                        <div className="absolute bottom-10 left-10 p-6 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10 max-w-xs transform transition-all duration-500 hover:translate-x-2">
                            <p className="text-gold-primary font-heading font-bold text-2xl mb-1">20+</p>
                            <p className="text-gray-300 text-sm uppercase tracking-wider">Years of Combined Experience</p>
                        </div>
                    </div>

                    {/* Text Content Side */}
                    <div className="space-y-16 pt-10">
                        <ScrollReveal>
                            <div>
                                <h2 className="text-4xl md:text-6xl font-heading font-black text-white uppercase tracking-tight mb-6 leading-none">
                                    Our <span className="text-gold-primary">Story</span>
                                </h2>
                                <div className="w-20 h-1 bg-gold-primary rounded-full mb-8" />
                                <p className="text-xl text-gray-300 leading-relaxed font-light">
                                    Located in the heart of Alpharetta, <span className="text-white font-medium">Charcoal N Chill</span> was born from a simple vision: to create a space where cultures blend, friendships deepen, and the vibe is always right.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <div className="pl-6 border-l-2 border-gold-primary/30 hover:border-gold-primary transition-colors">
                                <h3 className="text-2xl font-bold text-white mb-4">The Experience</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Since 2015, we've redefined the lounge experience by merging the finest hookah culture with authentic Indo-American cuisine. It's not just about the smoke or the food—it's about the atmosphere. From our luxury Versace seating to our curated playlists, every detail is designed to transport you.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.4}>
                            <div className="pl-6 border-l-2 border-gold-primary/30 hover:border-gold-primary transition-colors">
                                <h3 className="text-2xl font-bold text-white mb-4">The Community</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    We are more than a business; we are a social hub. Whether you're celebrating a milestone, unwinding after work, or just catching up with old friends, our doors are open. We pride ourselves on creating a safe, inclusive, and electrifying environment for everyone.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.6}>
                            <div className="bg-white/5 p-8 rounded-3xl border border-white/5">
                                <blockquote className="text-lg italic text-gold-primary mb-4">
                                    "We didn't just want to build a restaurant. We wanted to build a vibe."
                                </blockquote>
                                <cite className="text-white font-bold not-italic uppercase tracking-widest text-sm">— The Founders</cite>
                            </div>
                        </ScrollReveal>
                    </div>

                </div>
            </div>
        </section>
    );
}
