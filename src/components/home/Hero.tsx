import Image from "next/image";
import { BokehOverlay } from "@/components/ui/BokehOverlay";
import { HeroInteractive, HeroParallaxBackground } from "./HeroClient";

export function Hero() {
    return (
        <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-dark-primary">
            {/* Parallax Background Layer (Client Component for scroll effect, but children are Server Rendered) */}
            <HeroParallaxBackground>
                <Image
                    src="/images/final-cnc-hero.jpg"
                    alt="Luxury Hookah Lounge Interior at Charcoal N Chill Alpharetta - Versace Seating & Ambient Lighting"
                    fill
                    priority={true}
                    fetchPriority="high"
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 100vw"
                    quality={60}
                />
            </HeroParallaxBackground>

            {/* Bokeh Overlay - Is this client? Yes usually. */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <BokehOverlay className="z-1" />
            </div>

            {/* Hero Content (Static HTML for SEO & Speed) */}
            <div className="relative z-10 container mx-auto px-4 text-center mt-0 md:-mt-12">
                <div className="inline-flex flex-col md:flex-row items-center gap-2 px-4 md:px-6 py-2 rounded-full glass-bg mb-8 animate-fade-in-up md:max-w-none max-w-[90vw]" style={{ animationDelay: '0.1s' }}>
                    <span className="text-gold-primary animate-pulse text-lg">✨</span>
                    <span className="text-xs md:text-sm font-medium uppercase tracking-wider md:tracking-widest text-gold-primary text-center whitespace-normal md:whitespace-nowrap">Alpharetta&apos;s Premier Destination</span>
                </div>

                <div className="mb-6">
                    <span className="block text-xl md:text-2xl font-medium text-gold-light uppercase tracking-[0.3em] mb-4 md:animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Experience The
                    </span>
                    {/* LCP Element: Render instantly on mobile, animate on desktop with minimal delay */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight mb-4 md:animate-fade-in-up drop-shadow-lg" style={{ animationDelay: '0.1s' }}>
                        <span className="block gradient-text pb-2">
                            Vibe & Flavor
                        </span>
                    </h1>
                    <span className="block text-2xl md:text-3xl font-light text-white/90 mt-4 md:animate-fade-in-up drop-shadow-lg" style={{ animationDelay: '0.4s' }}>
                        Hookah Lounge & Indo-American Grill
                    </span>
                </div>

                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light md:animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    Immerse yourself in luxury with 50+ premium hookah flavors, Indo-American Eats,
                    and electrifying live entertainment. The perfect night out starts here.
                </p>

                {/* Interactive Buttons & Scroll Indicator (Client Component) */}
                <HeroInteractive />
            </div>

            {/* Floating Stats Bar (Static HTML) */}
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


