"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TextReveal } from "@/components/ui/TextReveal";
import { Button } from "@/components/ui/Button";
import { Mail, Phone } from "lucide-react";

export function ContactHero() {
    const heroRef = useRef<HTMLElement>(null);
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

        // Generate particles only on client
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setParticles([...Array(15)].map(() => ({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            delay: `${Math.random() * 5}s`,
            opacity: 0.3 + Math.random() * 0.4
        })));

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToContent = () => {
        const element = document.getElementById('contact-content');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section ref={heroRef} className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-black">
            {/* Parallax Background */}
            <div className="absolute inset-0 z-0 parallax-layer will-change-transform">
                <Image
                    src="/images/get-in-touch.jpg"
                    alt="Contact Charcoal N Chill"
                    fill
                    className="object-cover opacity-40 scale-110"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000_100%)] opacity-70" />
            </div>

            {/* Particles */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {particles.map((p, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white/30 rounded-full animate-[particle-float_12s_ease-in-out_infinite]"
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
                <div className="mb-8">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-gold-primary text-xs font-bold uppercase tracking-[0.3em] mb-6 animate-fade-in-up">
                        Reservations & Inquiries
                    </span>
                    <h1 className="text-5xl md:text-7xl font-heading font-black text-white uppercase tracking-tighter leading-none mb-6">
                        Get In <span className="text-gold-primary text-glow">Touch</span>
                    </h1>
                </div>

                <div className="max-w-2xl mx-auto mb-10">
                    <TextReveal
                        text="Whether you're looking to reserve a VIP table, plan a private event, or just have a question, we're here to help."
                        className="text-gray-300 text-lg md:text-xl font-light leading-relaxed"
                        delay={0.2}
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <Button
                        size="lg"
                        className="bg-gold-primary text-black hover:bg-gold-light font-bold"
                        onClick={scrollToContent}
                    >
                        Send a Message
                    </Button>
                    <a href="tel:4705464866">
                        <Button
                            variant="outline"
                            size="lg"
                            className="group"
                        >
                            <div className="flex items-center">
                                <Phone className="w-4 h-4 mr-2 group-hover:text-gold-primary transition-colors" />
                                (470) 546-4866
                            </div>
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    );
}
