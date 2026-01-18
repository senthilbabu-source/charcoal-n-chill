"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";


export function MenuHero() {
    // Hidden unused handleScroll function removed
    const heroRef = useRef<HTMLElement>(null);
    const [particles, setParticles] = useState<Array<{ left: string; top: string; delay: string; opacity: number }>>([]);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (heroRef.current && window.innerWidth > 768) {
                        const scrolled = window.scrollY;
                        const parallaxLayers = heroRef.current.querySelectorAll('.parallax-layer');
                        parallaxLayers.forEach((layer: Element) => {
                            const speed = 0.5;
                            (layer as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
                        });
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        // Generate particles only on client
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setParticles([...Array(20)].map(() => ({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            delay: `${Math.random() * 5}s`,
            opacity: 0.6
        })));

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    return (
        <section ref={heroRef} className="relative min-h-[60vh] md:min-h-[75vh] flex items-center justify-center overflow-hidden bg-black pb-20">
            {/* Parallax Background */}
            <div className="absolute inset-0 z-0 parallax-layer will-change-transform">
                <Image
                    src="/images/cocktails.jpg"
                    alt="Authentic Indo-American Fusion Cuisine at Charcoal N Chill - Butter Chicken & Premium Hookah"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {particles.map((p, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-gold-primary rounded-full animate-[particle-float_10s_ease-in-out_infinite]"
                        style={{
                            left: p.left,
                            top: p.top,
                            animationDelay: p.delay,
                            opacity: p.opacity
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10 text-center">
                <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-gold-primary/30 bg-black/30 backdrop-blur-sm animate-fade-in-up">
                    <span className="text-gold-primary text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
                        Culinary Experience
                    </span>
                </div>

                <h1 className="text-5xl md:text-8xl font-heading font-black text-white uppercase tracking-tighter mb-2 drop-shadow-2xl">
                    <span className="block mb-2">Taste The</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary via-white to-gold-primary bg-[length:200%_auto] animate-shine">
                        Vibe
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed animate-fade-in-up [animation-delay:0.6s]">
                    From authentic Indian street food to premium hookah blends,
                    explore a menu designed to ignite your senses.
                </p>



            </div>

            {/* Scroll Indicator */}
            <ScrollIndicator targetId="menu-explorer" />
        </section>
    );
}
