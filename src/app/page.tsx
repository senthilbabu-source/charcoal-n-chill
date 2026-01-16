import dynamic from "next/dynamic";
import { constructMetadata } from "@/lib/metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { MapFacade } from "@/components/ui/MapFacade";

const HighlightsGrid = dynamic(() => import("@/components/home/HighlightsGrid").then(mod => mod.HighlightsGrid));
const ProductShowcase = dynamic(() => import("@/components/home/ProductShowcase").then(mod => mod.ProductShowcase), {
  loading: () => <div className="min-h-[50vh] bg-dark-primary" />,
});
const SocialWall = dynamic(() => import("@/components/home/SocialWall").then(mod => mod.SocialWall));
const ReviewCarousel = dynamic(() => import("@/components/home/ReviewCarousel").then(mod => mod.ReviewCarousel));

export const metadata = constructMetadata({
  title: "Charcoal N Chill | #1 Hookah & Indo-American Fusion in Alpharetta",
  description: "Alpharetta's top spot for premium hookah, wings, and curry. The best of Indo-American flavor meets local favorites. Open late for VIP dining and live entertainment.",
  path: "/",
  keywords: ["hookah lounge Alpharetta", "Indo-American fusion", "best wings Alpharetta", "Indo-American food near me", "late night food Alpharetta"],
});

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-dark-primary">
        <Hero />
        <HighlightsGrid />
        <ProductShowcase />

        {/* About Teaser */}
        <section className="py-20 bg-dark-secondary relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <ScrollReveal animation="fade-up">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
                Born from a passion for culture and connection, Charcoal N Chill brings the vibrant energy of Indian nightlife to Alpharetta.
                Discover the people and passion behind your favorite lounge.
              </p>
              <a href="/about" className="inline-flex items-center gap-2 text-gold-primary hover:text-white transition-colors font-bold uppercase tracking-widest text-sm">
                Read Our Full Story <ArrowRight size={16} />
              </a>
            </ScrollReveal>
          </div>
        </section>

        {/* Blog Teaser */}
        <section className="py-20 bg-dark-primary relative border-t border-white/5">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
              <ScrollReveal animation="fade-right">
                <div>
                  <span className="text-gold-primary text-sm font-bold tracking-widest uppercase mb-2 block">The Chill Log</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Latest News & Events</h2>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-left">
                <a href="/blog" className="group flex items-center gap-2 text-white hover:text-gold-primary transition-colors">
                  <span className="text-sm font-bold uppercase tracking-widest">Read More Articles</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </ScrollReveal>
            </div>
            {/* Simple Blog Cards Placeholder - Ideally strictly linking to /blog */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ScrollReveal animation="fade-up" delay={0.1}>
                <a href="/blog/bollywood-night-recap" className="block group bg-dark-secondary rounded-2xl p-8 border border-white/5 hover:border-gold-primary/30 transition-colors">
                  <span className="text-gold-primary text-xs font-bold uppercase tracking-widest mb-3 block">Event Recap</span>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-primary transition-colors">Bollywood Night: A Night to Remember</h3>
                  <p className="text-gray-400 text-sm">Highlights from our most electrifying weekend yet. See what you missed!</p>
                </a>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={0.2}>
                <a href="/blog/top-5-hookah-flavors" className="block group bg-dark-secondary rounded-2xl p-8 border border-white/5 hover:border-gold-primary/30 transition-colors">
                  <span className="text-gold-primary text-xs font-bold uppercase tracking-widest mb-3 block">Expert Tips</span>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-primary transition-colors">Top 5 Hookah Flavors for Beginners</h3>
                  <p className="text-gray-400 text-sm">New to hookah? Start with these crowd-pleasing blends curated by our experts.</p>
                </a>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <SocialWall />

        {/* Social Proof & Location */}
        <section className="relative py-24 bg-dark-secondary overflow-hidden content-section">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 pointer-events-none" />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal animation="fade-right">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">Visit Us in <span className="gradient-text">Alpharetta</span></h2>
                    <p className="text-gray-400 text-lg font-light">Located in the heart of Alpharetta, GA. Join us for an unforgettable evening of premium hookah, fine dining, and live entertainment.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-glass-bg border border-glass-border p-6 rounded-2xl hover:border-gold-primary/30 transition-colors duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <MapPin className="text-gold-primary" size={20} />
                        <h3 className="text-white font-bold">Location</h3>
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed">11950 Jones Bridge Rd Ste 103<br />Alpharetta, GA 30005</p>
                    </div>
                    <div className="bg-glass-bg border border-glass-border p-6 rounded-2xl hover:border-gold-primary/30 transition-colors duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <Phone className="text-gold-primary" size={20} />
                        <h3 className="text-white font-bold">Contact</h3>
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed">(470) 546-4866<br />charcoalnchill@gmail.com</p>
                    </div>
                  </div>

                  <div className="near-avalon my-6 p-6 bg-gradient-to-r from-gold-primary/10 to-transparent border-l-4 border-gold-primary rounded-r-xl">
                    <p className="location-highlight text-base leading-relaxed text-gray-300 m-0 italic">
                      "Conveniently serving North Atlanta: Alpharetta, Johns Creek, Roswell, Milton, and Cumming.
                      The perfect post-shopping destination near Avalon."
                    </p>
                  </div>

                  <ReviewCarousel />
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-left" delay={0.2}>
                <div className="h-[500px] rounded-3xl overflow-hidden border border-white/10 relative group bg-dark-tertiary">
                  <MapFacade />
                  <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2 pointer-events-none z-10">
                    <MapPin size={14} className="text-gold-primary" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Alpharetta, GA</span>
                  </div>
                  <div className="absolute inset-0 border-4 border-gold-primary/20 rounded-3xl pointer-events-none" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
