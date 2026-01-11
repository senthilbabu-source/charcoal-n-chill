import { constructMetadata } from "@/lib/metadata";
import { JsonLd, restaurantSchema } from "@/components/layout/JsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { Flame, Utensils, Music, Users } from "lucide-react";
import { HeroCTAs } from "@/components/home/HeroCTAs";

export const metadata = constructMetadata({
  title: "Charcoal N Chill | #1 Hookah Lounge & Indian Restaurant in Alpharetta",
  description: "Experience Atlanta's premier hookah lounge in Alpharetta. 50+ premium flavors, authentic Indian cuisine, craft cocktails, and live belly dancing. Book your VIP table now!",
  path: "/",
  keywords: ["best hookah lounge Alpharetta", "Indian dining near me", "VIP lounge Atlanta", "late night kitchen Alpharetta"]
});

export default function Home() {
  return (
    <>
      <JsonLd data={restaurantSchema} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "ImageObject",
        "contentUrl": "https://www.charcoalnchill.com/images/hero-bg.jpg",
        "description": "Premium Hookah Lounge and Indian Restaurant Ambiance in Alpharetta",
        "name": "Charcoal N Chill Main Lounge"
      }} id="image-hero" />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden tropical-bg" id="hero">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/cnc_hero_image.jpg"
              className="w-full h-full object-cover scale-105"
              alt="Lounge background"
              width="1920"
              height="1080"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
          </div>

          <div className="container relative z-10 px-4 md:px-6 text-center space-y-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black text-white uppercase tracking-tighter leading-none mb-4 animate-float">Alpharetta&apos;s Premier Hookah Lounge & Indian Grill</h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-200 font-medium">Experience the perfect blend of 50+ premium hookah flavors, authentic Indian cuisine, and electrifying live entertainment in a luxury VIP setting.</p>
            <HeroCTAs />
          </div>

          {/* Scroll depth indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-0.5 h-12 bg-gradient-to-b from-gold to-transparent opacity-50" />
          </div>
        </section>

        {/* What Makes Us Different */}
        <Section id="features" className="bg-[#031322]">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-heading font-black text-white uppercase tracking-tight">What Makes Us Different</h2>
            <div className="flex justify-center items-center gap-4">
              <div className="w-12 h-[1px] bg-gold" />
              <Utensils className="w-6 h-6 text-gold" />
              <div className="w-12 h-[1px] bg-gold" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Flame className="w-8 h-8 text-gold" />,
                title: "50+ Hookah Flavors",
                desc: "Premium selection from traditional to exotic blends prepared by experts."
              },
              {
                icon: <Utensils className="w-8 h-8 text-gold" />,
                title: "Authentic Indian Kitchen",
                desc: "Recipes passed down through generations, prepared with fresh ingredients."
              },
              {
                icon: <Music className="w-8 h-8 text-gold" />,
                title: "Live Entertainment Weekly",
                desc: "From professional belly dancing to themed DJ nights (Afrobeats, Latino, Bollywood)."
              },
              {
                icon: <Users className="w-8 h-8 text-gold" />,
                title: "VIP & Private Events",
                desc: "Luxury Versace couches and dedicated spaces for groups up to 60 guests."
              }
            ].map((feature, i) => (
              <div key={i} className="group p-10 bg-[#1e1e1e] rounded-3xl border border-white/5 hover:border-gold/30 transition-all duration-500 gold-glow">
                <div className="mb-8 inline-block p-4 bg-gold/10 rounded-2xl group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-black text-white mb-4 uppercase tracking-wider">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </Section>


        {/* Featured Menu Preview */}
        <Section id="menu-preview">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="space-y-6 max-w-2xl text-left">
              <h2 className="text-4xl md:text-6xl font-heading font-black text-white uppercase tracking-tight leading-none">Experience <br />The Perfection</h2>
              <p className="text-gray-400 text-lg">A taste of what awaits you at Charcoal N Chill. From sizzling appetizers to authentic Indian entrees.</p>
            </div>
            <Button variant="outline" size="lg" className="border-white/10" asChild>
              <Link href="/menu">Discover More</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Chicken 65",
                price: "$11",
                category: "Appetizer",
                image: "/images/chicken-65.jpg"
              },
              {
                title: "Butter Chicken",
                price: "$16",
                category: "Entree",
                image: "/images/butter-chicken.jpg"
              },
              {
                title: "Signature Hookah",
                price: "$35+",
                category: "Specialty",
                image: "/images/signature-hookah.jpg"
              }
            ].map((item, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl aspect-[4/5]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  width="400"
                  height="300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 space-y-2">
                  <span className="text-gold text-xs font-bold uppercase tracking-widest">{item.category}</span>
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    <span className="text-gold font-bold">{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Social Proof & Location */}
        <Section className="bg-black/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">Visit Us in Alpharetta</h2>
                <p className="text-gray-400">Located in the heart of Alpharetta, GA. Join us for an unforgettable evening of premium hookah, fine dining, and live entertainment.</p>
                <p className="text-gray-600 mt-4">Conveniently located near Avalon Mall on Jones Bridge Road, Charcoal N Chill is just 3 minutes from Alpharetta&apos;s premier shopping and entertainment district. Easy access, ample free parking, and the perfect post-shopping destination for premium hookah and authentic Indian cuisine.</p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-white font-bold mb-2">Location</h4>
                  <p className="text-sm text-gray-400">11950 Jones Bridge Rd Ste 103<br />Alpharetta, GA 30005</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Contact</h4>
                  <p className="text-sm text-gray-400">(470) 546-4866<br />charcoalnchill@gmail.com</p>
                </div>
              </div>

              <div className="p-8 bg-charcoal rounded-2xl border border-white/5 space-y-4">
                <div className="flex items-center gap-1 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-white font-bold">4.8/5</span>
                </div>
                <p className="text-gray-300 italic">&quot;The best hookah lounge in North Atlanta. The food is authentic and the vibe is unmatched. Highly recommend the Butter Chicken and their signature mint hookah!&quot;</p>
                <p className="text-gold text-sm font-bold">— Satisfied Customer</p>
              </div>
            </div>

            <div className="h-[430px] rounded-2xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.907531938293!2d-84.20671332334975!3d34.071884573149525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f59f9b40880aed%3A0x7520302548fe7a5!2sCharcoal%20N%20Chill!5e0!3m2!1sen!2sus!4v1768075947383!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
