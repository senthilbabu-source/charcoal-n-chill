"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowDown } from "lucide-react";
import { TextReveal } from "@/components/ui/TextReveal";

export function EventsHero() {
    const heroRef = useRef<HTMLDivElement>(null);

    const [particles, setParticles] = useState<Array<{ left: string; top: string; delay: string; opacity: number }>>([]);

    useEffect(() => {
        const handleScroll = () => {
            if (heroRef.current && window.innerWidth > 768) {
                const scrolled = window.scrollY;
                const parallaxLayers = heroRef.current.querySelectorAll('.parallax-layer');
                parallaxLayers.forEach((layer: Element) => {
                    const speed = 0.5;
                    (layer as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
                });
            }
        };

        // Generate particles only on client to avoid hydration mismatch
        setParticles([...Array(20)].map(() => ({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            delay: `${Math.random() * 5}s`,
            opacity: 0.5 + Math.random() * 0.5
        })));

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToEvents = () => {
        const element = document.getElementById('events-showcase');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section ref={heroRef} className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-dark-primary">
            {/* Parallax Background */}
            <div className="absolute inset-0 z-0 parallax-layer will-change-transform">
                <Image
                    src="/images/crowded-club-cnc.jpg"
                    alt="Energetic Crowd at Charcoal N Chill"
                    fill
                    className="object-cover opacity-50 filter saturate-150"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-dark-primary/60 via-dark-primary/70 to-dark-primary" />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Particles */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {particles.map((p, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-gold-primary rounded-full animate-[particle-float_15s_ease-in-out_infinite]"
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
                <div className="mb-6">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gold-primary text-sm font-bold uppercase tracking-[0.2em] mb-4">
                        Nightlife Reimagined
                    </span>
                    <h1 className="text-6xl md:text-8xl font-heading font-black text-white uppercase tracking-tighter mb-2 drop-shadow-2xl">
                        Experience <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary via-white to-gold-primary bg-[length:200%_auto] animate-shine">
                            The Ritual
                        </span>
                    </h1>
                </div>

                <div className="max-w-2xl mx-auto mb-10">
                    <TextReveal
                        text="From hypnotic belly dancing to high-energy DJ sets, every night brings a new vibe to Alpharetta."
                        className="text-gray-300 text-lg md:text-xl font-light leading-relaxed"
                    />
                </div>

                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    <Button
                        size="xl"
                        onClick={scrollToEvents}
                        className="bg-white text-black hover:bg-gold-primary hover:text-black font-black uppercase tracking-widest min-w-[200px] shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-all duration-500"
                    >
                        View Lineup
                    </Button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-20" onClick={scrollToEvents}>
                <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Explore</span>
                    <ArrowDown className="text-gold-primary w-6 h-6" />
                </div>
            </div>
        </section>
    );
}
