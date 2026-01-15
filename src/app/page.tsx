import dynamic from "next/dynamic";
import { constructMetadata } from "@/lib/metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { MapPin, Phone } from "lucide-react";

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
  keywords: ["hookah lounge Alpharetta", "Indo-American fusion", "best wings Alpharetta", "Indo-American food near me", "late night food Alpharetta"]
});

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-dark-primary">
        <Hero />
        <HighlightsGrid />
        <ProductShowcase />
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
                      &quot;Conveniently located near Avalon Mall on Jones Bridge Road, Charcoal N Chill
                      is just 5.1 miles from Alpharetta&apos;s premier shopping and entertainment district.
                      Easy access, ample free parking, and the perfect post-shopping destination.&quot;
                    </p>
                  </div>

                  <ReviewCarousel />
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-left" delay={0.2}>
                <div className="h-[500px] rounded-3xl overflow-hidden border border-white/10 relative group bg-dark-tertiary">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.907531938293!2d-84.20671332334975!3d34.071884573149525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f59f9b40880aed%3A0x7520302548fe7a5!2sCharcoal%20N%20Chill!5e0!3m2!1sen!2sus!4v1768075947383!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Charcoal N Chill Location Map"
                    className="grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                  />
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
