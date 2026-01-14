"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { BokehOverlay } from "@/components/ui/BokehOverlay";

import Image from "next/image";

export function Hero() {
    const parallaxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Disable parallax on mobile/tablet for performance
        if (window.matchMedia("(max-width: 768px)").matches) return;

        const handleScroll = () => {
            if (parallaxRef.current) {
                const scrolled = window.scrollY;
                const speed = 0.5;
                parallaxRef.current.style.transform = `translateY(${scrolled * speed}px)`;
            }
        };

        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToMenu = () => {
        const menuSection = document.getElementById('menu-preview');
        menuSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-dark-primary">
            {/* Parallax Background Layer */}
            <div className="absolute inset-0 z-0">
                <div
                    ref={parallaxRef}
                    className="absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform"
                >
                    <Image
                        src="/images/final-cnc-hero.jpg"
                        alt="Charcoal N Chill Lounge Interior - Premium Hookah & Dining"
                        fill
                        priority={true}
                        fetchPriority="high"
                        className="object-cover filter brightness-[0.4]"
                        sizes="(max-width: 768px) 100vw, 100vw"
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-dark-primary/60 via-dark-primary/40 to-dark-primary/90" />
                </div>

                {/* Animated Smoke/Ambiance Effect - Keeping CSS only, it is efficient enough */}
                {/* Animated Smoke/Ambiance Effect */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block" aria-hidden="true">
                    <div className="absolute bottom-0 left-[10%] w-[500px] h-[500px] bg-gold-primary/10 rounded-full blur-[100px] animate-[smoke-rise_8s_ease-in-out_infinite]" />
                    <div className="absolute bottom-0 left-[50%] w-[400px] h-[400px] bg-brand-red/10 rounded-full blur-[80px] animate-[smoke-rise_12s_ease-in-out_infinite_2s]" />
                    <div className="absolute bottom-0 right-[10%] w-[600px] h-[600px] bg-gold-primary/5 rounded-full blur-[120px] animate-[smoke-rise_10s_ease-in-out_infinite_4s]" />
                </div>

                {/* Bokeh Overlay */}
                <BokehOverlay intensity={20} className="z-1" />
            </div>


            {/* Hero Content */}
            <div className="relative z-10 container mx-auto px-4 text-center mt-0 md:-mt-12">
                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass-bg mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <span className="text-gold-primary animate-pulse">✨</span>
                    <span className="text-sm font-medium uppercase tracking-widest text-gold-primary">Alpharetta&apos;s Premier Destination</span>
                </div>

                <div className="mb-6">
                    <span className="block text-xl md:text-2xl font-medium text-gold-light uppercase tracking-[0.3em] mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Experience The
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight mb-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <span className="block gradient-text pb-2">
                            Vibe & Flavor
                        </span>
                    </h1>
                    <span className="block text-2xl md:text-3xl font-light text-white/90 mt-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        Hookah Lounge & Indo-American Grill
                    </span>
                </div>

                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    Immerse yourself in luxury with 50+ premium hookah flavors, Indo-American Eats,
                    and electrifying live entertainment. The perfect night out starts here.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                    <Link href="/contact#reserve">
                        <MagneticButton className="px-8 py-4 bg-gradient-to-r from-gold-dark to-gold-light !text-dark-primary hover:!text-white hover:from-dark-secondary hover:to-dark-primary rounded-xl hover:-translate-y-1 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(196,30,58,0.6)] flex items-center gap-2 transition-all">
                            <span>Book Your Table</span>
                            <ArrowRight size={20} />
                        </MagneticButton>
                    </Link>

                    <MagneticButton
                        onClick={scrollToMenu}
                        className="px-8 py-4 glass-bg hover:bg-white/10 text-white rounded-xl flex items-center gap-2"
                        aria-label="Explore Menu"
                    >
                        <span>Explore Menu</span>
                        <ArrowDown size={20} />
                    </MagneticButton>
                </div>

            </div>

            {/* Scroll Indicator */}
            <button
                className="absolute bottom-32 md:bottom-40 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 animate-bounce opacity-80 md:opacity-60 hover:opacity-100 transition-opacity cursor-pointer text-white/70 hover:text-white bg-transparent border-none"
                onClick={scrollToMenu}
                aria-label="Scroll to Menu"
            >
                <div className="w-[30px] h-[50px] border-2 border-current rounded-full flex justify-center p-2">
                    <div className="w-1 h-2 bg-current rounded-full animate-scroll-wheel" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
            </button>

            {/* Floating Stats Bar */}
            <div className="absolute bottom-0 inset-x-0 mx-auto w-[95%] max-w-7xl glass-bg border-b-0 rounded-t-3xl p-6 hidden md:flex justify-center gap-8 lg:gap-12 items-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                <div className="text-center group cursor-default">
                    <div className="text-3xl font-black text-gold-primary mb-1 group-hover:scale-110 transition-transform duration-300">Fusion</div>
                    <div className="text-xs uppercase tracking-widest text-gray-400">Indo-American Eats</div>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="text-center group cursor-default">
                    <div className="text-3xl font-black text-gold-primary mb-1 group-hover:scale-110 transition-transform duration-300">50+</div>
                    <div className="text-xs uppercase tracking-widest text-gray-400">Premium Flavors</div>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="text-center group cursor-default">
                    <div className="text-3xl font-black text-gold-primary mb-1 group-hover:scale-110 transition-transform duration-300">4.7★</div>
                    <div className="text-xs uppercase tracking-widest text-gray-400">Google Rating</div>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="text-center group cursor-default">
                    <div className="text-3xl font-black text-gold-primary mb-1 group-hover:scale-110 transition-transform duration-300">2 AM</div>
                    <div className="text-xs uppercase tracking-widest text-gray-400">Open Late Wknds</div>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="text-center group cursor-default">
                    <div className="text-3xl font-black text-gold-primary mb-1 group-hover:scale-110 transition-transform duration-300">Live</div>
                    <div className="text-xs uppercase tracking-widest text-gray-400">Belly Dance Wknds</div>
                </div>
            </div>
        </section>
    );
}


