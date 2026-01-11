import { constructMetadata } from "@/lib/metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { JsonLd, getBreadcrumbSchema } from "@/components/layout/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata = constructMetadata({
    title: "About Us | Atlanta's Premier Hookah Lounge & Social Hub",
    description: "Discover the story of Charcoal N Chill, Alpharetta's finest destination for premium hookah, authentic Indian food, and luxury lounge vibes.",
    path: "/about",
    keywords: ["about Charcoal N Chill", "best lounge Alpharetta", "Indian restaurant founders", "hookah lounge story"]
});

export default function AboutPage() {
    return (
        <>
            <JsonLd data={getBreadcrumbSchema([{ name: "About", item: "/about" }])} id="breadcrumb-about" />
            <Header />
            <main className="pt-20">
                <Breadcrumbs items={[{ label: "About", href: "/about" }]} />
                <section className="relative py-32 md:py-48 overflow-hidden border-b border-white/5 bg-[#031322]">
                    <div className="container px-4 md:px-6 relative z-10 text-center space-y-8">
                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-heading font-black text-white uppercase tracking-tighter leading-none mb-4">
                            Where Culture <br />& <span className="text-gold text-glow">Cuisine Unite</span>
                        </h1>
                        <p className="max-w-3xl mx-auto text-xl text-gray-400 leading-relaxed font-medium">
                            Charcoal N Chill is Atlanta&apos;s premier destination for those who seek the perfect blend of luxury, entertainment, and authentic flavor.
                        </p>
                    </div>
                </section>

                <Section>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-6xl font-heading font-black text-white uppercase tracking-tight">Our Story</h2>
                            <div className="w-16 h-[1px] bg-gold" />
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Located in the heart of Alpharetta, we&apos;ve created a one-of-a-kind experience that brings together the finest hookah culture, authentic Indian flavors, and vibrant nightlife.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Our vision was simple: create a space where friends gather, cultures blend, and memories are made. Whether you&apos;re celebrating a special occasion, enjoying an evening with friends, or hosting a private event, Charcoal N Chill delivers an unforgettable experience.
                            </p>
                        </div>
                        <div className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src="/images/lounge-atmosphere.jpg"
                                alt="Charcoal N Chill Atmosphere"
                                className="w-full h-full object-cover"
                                width="800"
                                height="600"
                                loading="lazy" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                    </div>
                </Section>

                <Section className="bg-black">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">What Sets Us Apart</h2>
                        <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "50+ Hookah Flavors",
                                desc: "Carefully curated selection from traditional to exotic blends."
                            },
                            {
                                title: "Authentic Indian Kitchen",
                                desc: "Recipes passed down through generations, prepared by experienced chefs."
                            },
                            {
                                title: "Craft Cocktail Bar",
                                desc: "Expert mixologists creating signature drinks and premium bottle service."
                            },
                            {
                                title: "Live Entertainment",
                                desc: "Weekly belly dancing, DJ nights featuring Afrobeats, Latino, and Bollywood music."
                            },
                            {
                                title: "Luxury Atmosphere",
                                desc: "Versace couches, VIP sections, and modern luxury design."
                            },
                            {
                                title: "Private Events",
                                desc: "Dedicated space and customizable packages for groups up to 60 guests."
                            }
                        ].map((feature, i) => (
                            <div key={i} className="p-10 bg-[#1e1e1e] rounded-3xl border border-white/5 space-y-6 group hover:border-gold transition-colors">
                                <div className="space-y-4">
                                    <h3 className="text-xl font-black text-white uppercase tracking-wider group-hover:text-gold transition-colors leading-tight">{feature.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>

                <Section>
                    <div className="p-12 md:p-20 bg-gradient-to-br from-charcoal to-muted rounded-[3rem] border border-white/5 text-center space-y-8">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">Our Commitment</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
                            <div className="space-y-2">
                                <h4 className="text-gold font-bold">Quality First</h4>
                                <p className="text-sm text-gray-400">Exceptional ingredients and authentic preparation in everything we serve.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-gold font-bold">Service Excellence</h4>
                                <p className="text-sm text-gray-400">Our dedicated staff ensures every guest receives the VIP treatment.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-gold font-bold">Safe & Clean</h4>
                                <p className="text-sm text-gray-400">A clean, safe, and professional environment for all our patrons.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-gold font-bold">Halal Friendly</h4>
                                <p className="text-sm text-gray-400">We offer halal-friendly options to accommodate all dietary preferences.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-gold font-bold">Late Night Vibe</h4>
                                <p className="text-sm text-gray-400">Late-night service for the night owls, open till 2 AM on weekends.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-gold font-bold">All inclusive</h4>
                                <p className="text-sm text-gray-400">A space where everyone is welcome to celebrate life and culture.</p>
                            </div>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
