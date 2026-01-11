"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
    const parallaxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
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
                    className="absolute inset-0 w-full h-[120%] -top-[10%]"
                >
                    <img
                        src="/images/cnc_hero_image.jpg"
                        alt="Charcoal N Chill Lounge Interior"
                        className="w-full h-full object-cover filter brightness-[0.4]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-dark-primary/60 via-dark-primary/40 to-dark-primary/90" />
                </div>

                {/* Animated Smoke/Ambiance Effect */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute bottom-0 left-[10%] w-[500px] h-[500px] bg-gold-primary/10 rounded-full blur-[100px] animate-[smoke-rise_8s_ease-in-out_infinite]" />
                    <div className="absolute bottom-0 left-[50%] w-[400px] h-[400px] bg-brand-red/10 rounded-full blur-[80px] animate-[smoke-rise_8s_ease-in-out_infinite_2s]" />
                    <div className="absolute bottom-0 right-[10%] w-[600px] h-[600px] bg-gold-primary/5 rounded-full blur-[120px] animate-[smoke-rise_8s_ease-in-out_infinite_4s]" />
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none">
                    <Particles count={20} />
                </div>
            </div>


            {/* Hero Content */}
            <div className="relative z-10 container mx-auto px-4 text-center mt-20">
                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass-bg mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <span className="text-gold-primary animate-[pulse-glow_2s_ease-in-out_infinite]">✨</span>
                    <span className="text-sm font-medium uppercase tracking-widest text-gold-primary">Alpharetta&apos;s Premier Destination</span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tight">
                    <span className="block text-xl md:text-2xl font-medium text-gold-light uppercase tracking-[0.3em] mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>Experience The</span>
                    <span className="block gradient-text animate-fade-in-up" style={{ animationDelay: '0.3s' }}>Vibe & Flavor</span>
                    <span className="block text-2xl md:text-3xl font-light text-white/90 mt-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>Hookah Lounge & Indian Grill</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    Immerse yourself in luxury with 50+ premium hookah flavors, authentic Indian cuisine,
                    and electrifying live entertainment. The perfect night out starts here.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                    <Link href="/contact#reserve" className="group relative px-8 py-4 bg-gradient-to-r from-gold-dark to-gold-light text-dark-primary font-bold text-lg rounded-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)]">
                        <span className="relative z-10 flex items-center gap-2">
                            Book Your Table
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-white/20 skew-x-[-20deg] -translate-x-[150%] group-hover:animate-[shimmer_1s_infinite]" />
                    </Link>

                    <button
                        onClick={scrollToMenu}
                        className="group flex items-center gap-2 px-8 py-4 glass-bg hover:bg-white/10 text-white font-semibold text-lg rounded-xl transition-all duration-300 hover:-translate-y-1"
                    >
                        Explore Menu
                        <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
                    </button>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-60 hover:opacity-100 transition-opacity cursor-pointer text-white/50 hover:text-white" onClick={scrollToMenu}>
                    <div className="w-[30px] h-[50px] border-2 border-current rounded-full flex justify-center p-2">
                        <div className="w-1 h-2 bg-current rounded-full animate-scroll-wheel" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
                </div>
            </div>

            {/* Floating Stats Bar */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl glass-bg border-b-0 rounded-t-3xl p-6 hidden md:flex justify-around items-center animate-slide-up" style={{ animationDelay: '1s' }}>
                <div className="text-center group cursor-default">
                    <div className="text-3xl font-black text-gold-primary mb-1 group-hover:scale-110 transition-transform duration-300">50+</div>
                    <div className="text-xs uppercase tracking-widest text-gray-400">Premium Flavors</div>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="text-center group cursor-default">
                    <div className="text-3xl font-black text-gold-primary mb-1 group-hover:scale-110 transition-transform duration-300">4.8★</div>
                    <div className="text-xs uppercase tracking-widest text-gray-400">Google Rating</div>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="text-center group cursor-default">
                    <div className="text-3xl font-black text-gold-primary mb-1 group-hover:scale-110 transition-transform duration-300">2 AM</div>
                    <div className="text-xs uppercase tracking-widest text-gray-400">Open Late Wknds</div>
                </div>
            </div>
        </section>
    );
}

function Particles({ count }: { count: number }) {
    const [particles, setParticles] = useState<Array<{
        id: number;
        style: React.CSSProperties;
    }>>([]);

    useEffect(() => {
        const newParticles = Array.from({ length: count }).map((_, i) => ({
            id: i,
            style: {
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.5 + 0.2,
                '--particle-x': `${(Math.random() - 0.5) * 100}px`
            } as React.CSSProperties
        }));
        setParticles(newParticles);
    }, [count]);

    return (
        <>
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className="absolute w-1 h-1 bg-gold-primary rounded-full animate-[particle-float_10s_ease-in-out_infinite]"
                    style={particle.style}
                />
            ))}
        </>
    );
}
