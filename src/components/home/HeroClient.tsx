"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function HeroInteractive() {
    const parallaxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Find the parallax container which is now in the parent or passed via some other way? 
        // Actually, since we are splitting, the Parallax visual effect relies on the Ref being attached to the DIV.
        // So the DIV itself must be in this client component OR we pass a ref from parent (not allowed SC->CC).

        // BETTER STRATEGY: The Background Layer (Parallax) should be its own Client Component.
        // The Buttons should be their own Client Component.
        // The TEXT and IMAGE should remain Server Side.
    }, []);

    // We will implement the Buttons logic here first as that is easy.

    const scrollToMenu = () => {
        const menuSection = document.getElementById('menu-preview');
        menuSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <Link href="/contact#reserve">
                    <MagneticButton as="div" className="px-8 py-4 bg-gradient-to-r from-gold-dark to-gold-light !text-dark-primary hover:!text-white hover:from-dark-secondary hover:to-dark-primary rounded-xl hover:-translate-y-1 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(196,30,58,0.6)] flex items-center gap-2 transition-all">
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
        </>
    );
}

export function HeroParallaxBackground({ children }: { children: React.ReactNode }) {
    const parallaxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.matchMedia("(max-width: 768px)").matches) return;

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

    return (
        <div className="absolute inset-0 z-0">
            <div
                ref={parallaxRef}
                className="absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform"
            >
                {children}
            </div>
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 bg-gradient-to-b from-dark-primary/60 via-dark-primary/40 to-dark-primary/90" />

            {/* Animated Smoke/Ambiance Effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block" aria-hidden="true">
                <div className="absolute bottom-0 left-[10%] w-[500px] h-[500px] bg-gold-primary/10 rounded-full blur-[60px] animate-[smoke-rise_8s_ease-in-out_infinite]" style={{ willChange: 'transform, opacity' }} />
                <div className="absolute bottom-0 left-[50%] w-[400px] h-[400px] bg-brand-red/10 rounded-full blur-[40px] animate-[smoke-rise_12s_ease-in-out_infinite_2s]" style={{ willChange: 'transform, opacity' }} />
                <div className="absolute bottom-0 right-[10%] w-[600px] h-[600px] bg-gold-primary/5 rounded-full blur-[70px] animate-[smoke-rise_10s_ease-in-out_infinite_4s]" style={{ willChange: 'transform, opacity' }} />
            </div>
        </div>
    );
}
