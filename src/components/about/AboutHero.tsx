"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { TextReveal } from "@/components/ui/TextReveal";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

export function AboutHero() {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (heroRef.current && window.innerWidth > 768) {
                        const scrolled = window.scrollY;
                        const parallaxLayers = heroRef.current.querySelectorAll('.parallax-layer');
                        parallaxLayers.forEach((layer: Element) => {
                            const speed = 0.4;
                            (layer as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
                        });
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section ref={heroRef} className="relative min-h-[60vh] md:min-h-[75vh] flex items-center justify-center overflow-hidden bg-dark-primary pb-20">
            {/* Parallax Background */}
            <div className="absolute inset-0 z-0 parallax-layer will-change-transform">
                <Image
                    src="/images/about-us-cnc.jpg"
                    alt="Charcoal N Chill Atmosphere"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-dark-primary/60 via-dark-primary/40 to-dark-primary" />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#050F18_100%)] opacity-90" />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
                <div className="mb-8">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-gold-primary text-xs font-bold uppercase tracking-[0.3em] mb-6 animate-fade-in-up">
                        Est. 2015
                    </span>
                    <h1 className="text-4xl md:text-8xl font-heading font-black text-white uppercase tracking-tighter leading-none mb-6 drop-shadow-2xl">
                        Where Culture <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary via-white to-gold-primary animate-shine bg-[length:200%_auto]">
                            & Cuisine Unite
                        </span>
                    </h1>
                </div>

                <div className="max-w-3xl mx-auto">
                    <TextReveal
                        text="Charcoal N Chill is Atlanta's premier destination for those who seek the perfect blend of luxury, entertainment, and authentic flavor."
                        className="text-gray-300 text-lg md:text-2xl font-light leading-relaxed"
                        delay={0.5}
                    />
                </div>
            </div>



            {/* Scroll Indicator */}
            <ScrollIndicator targetId="our-story" label="Our Story" />
        </section>
    );
}
