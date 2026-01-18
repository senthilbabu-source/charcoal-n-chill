import { constructMetadata } from "@/lib/metadata";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { JsonLd, getBreadcrumbSchema } from "@/components/layout/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CheckCircle2, Star, Users, GlassWater, Clock, Camera, Flame } from "lucide-react";
import { EventInquiryForm } from "@/components/home/EventInquiryForm";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { SecretHunt } from "@/components/gamification/SecretHunt";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

export const metadata = constructMetadata({
    title: "Private Party Venue - VIP Hookah Lounge Rental | Alpharetta GA",
    description: "Book our luxury VIP lounge for birthdays, corporate events & celebrations. Premium hookah, Indian catering, bottle service. Versace seating. Alpharetta, GA.",
    path: "/private-events",
    keywords: ["private party venue Alpharetta", "birthday party ideas Atlanta", "corporate event lounge", "exclusive venue hire GA"]
});

export default function PrivateEventsPage() {
    return (
        <>
            <JsonLd data={getBreadcrumbSchema([{ name: "Parties", item: "/private-events" }])} id="breadcrumb-private" />
            <Header />
            <main>
                <section className="relative min-h-[60vh] md:min-h-[75vh] flex items-center justify-center overflow-hidden bg-dark-primary pb-20">
                    {/* Parallax Background Layer */}
                    <div className="absolute inset-0 z-0 h-full w-full">
                        <Image
                            src="/images/private-party.jpg"
                            alt="Luxury VIP Section"
                            fill
                            className="object-cover opacity-50 filter saturate-150 animate-pulse-slow"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-dark-primary/60 via-dark-primary/70 to-dark-primary" />
                        <div className="absolute inset-0 bg-black/40" />
                    </div>

                    {/* Animated Smoke Effect */}
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                        <div className="absolute bottom-0 left-[10%] w-[300px] h-[300px] bg-gold/10 rounded-full blur-[80px] animate-smoke-rise" />
                        <div className="absolute bottom-0 right-[20%] w-[400px] h-[400px] bg-brand-red/10 rounded-full blur-[100px] animate-smoke-rise delay-1000" />
                    </div>

                    <div className="container relative z-10 px-4 md:px-6 text-center pt-24">
                        <ScrollReveal animation="fade-up">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-gold text-sm font-bold uppercase tracking-widest mb-8">
                                <Star size={16} className="fill-gold" />
                                <span>VIP Experience</span>
                            </div>
                        </ScrollReveal>

                        <h1 className="text-6xl md:text-8xl font-heading font-black text-white uppercase tracking-tighter mb-2 drop-shadow-2xl">
                            <span className="block mb-2">Host Your</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold bg-[length:200%_auto] animate-shine">
                                Special Event
                            </span>
                        </h1>

                        <ScrollReveal animation="fade-up" delay={0.4}>
                            <p className="max-w-2xl mx-auto text-xl text-gray-300 leading-relaxed font-light mb-10">
                                Charcoal N Chill provides a sophisticated, luxury lounge backdrop for your next celebration. From VIP birthdays to corporate gatherings.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={0.6}>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Button size="lg" className="bg-gold text-black hover:bg-white hover:text-black font-black uppercase tracking-widest shadow-[0_0_20px_rgba(212,175,55,0.3)]" asChild>
                                    <a href="#inquiry">Start Planning</a>
                                </Button>
                                <Button size="lg" variant="outline" className="border-white/20 hover:border-white text-white font-bold uppercase tracking-widest backdrop-blur-sm" asChild>
                                    <a href="#pricing">View Packages</a>
                                </Button>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Scroll Indicator */}
                    {/* Scroll Indicator */}
                    <ScrollIndicator targetId="pricing" label="View Packages" className="bottom-8" />

                    <div className="absolute bottom-10 right-10 z-20">
                        <SecretHunt id="parties_ember" locationName="the Parties Page" />
                    </div>
                </section>

                <div className="container mx-auto px-4 relative z-20 -mt-8 mb-8 pointer-events-none">
                    <Breadcrumbs customItems={[{ label: "Parties", href: "/private-events" }]} className="pointer-events-auto" />
                </div>

                <Section>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal animation="fade-right">
                            <div className="space-y-8">
                                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight">
                                    Perfect for <br />
                                    <span className="gradient-text">Every Occasion</span>
                                </h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {[
                                        "Birthday Parties",
                                        "Bachelor / Bachelorette",
                                        "Corporate Events",
                                        "Anniversary Celebrations",
                                        "Graduation Parties",
                                        "Team Building",
                                        "Social Gatherings",
                                        "Theme Parties"
                                    ].map((item) => (
                                        <div key={item} className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-gold/10 hover:border-gold/30 transition-all duration-300 h-full">
                                            <div className="flex items-center gap-3 relative z-10 h-full">
                                                <CheckCircle2 className="w-5 h-5 text-gold group-hover:scale-110 transition-transform shrink-0" />
                                                <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors flex-1 text-wrap break-words">{item}</span>
                                            </div>
                                            {/* Hover Glow */}
                                            <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 left-[-100%] group-hover:left-[200%] transition-all duration-700 ease-out" />
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-4 pt-4 border-t border-white/10">
                                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                        <Users className="text-gold" /> Guest Capacity
                                    </h3>
                                    <p className="text-gray-400">Our venue comfortably accommodates groups from 15 to 50 guests in a semi-private or fully exclusive setting.</p>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-left">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4 pt-8">
                                    <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 group relative">
                                        <Image src="/images/50-birthday-party-1.jpeg" className="object-cover group-hover:scale-110 transition-transform duration-700" alt="VIP Private Party Section - Luxury Birthday Celebration at Charcoal N Chill Alpharetta" fill sizes="(max-width: 768px) 100vw, 300px" />
                                    </div>
                                    <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 group relative">
                                        <Image src="/images/corporaate-event-company-mixer.jpg" className="object-cover group-hover:scale-110 transition-transform duration-700" alt="Corporate Company Event Venue Rental Alpharetta - Team Building at Charcoal N Chill" fill sizes="(max-width: 768px) 100vw, 300px" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 group relative">
                                        <Image src="/images/private-birthday-party-decor.jpg" className="object-cover group-hover:scale-110 transition-transform duration-700" alt="Private Birthday Party Decor" fill sizes="(max-width: 768px) 100vw, 300px" />
                                    </div>
                                    <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 group relative">
                                        <Image src="/images/private-party-drinks.jpg" className="object-cover group-hover:scale-110 transition-transform duration-700" alt="Private Party Drinks" fill sizes="(max-width: 768px) 100vw, 300px" />
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </Section>

                <Section className="bg-dark-secondary relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

                    <div className="text-center mb-20 flex flex-col items-center gap-6 relative z-10">
                        <ScrollReveal animation="fade-up">
                            <h2 className="text-4xl md:text-6xl font-heading font-black text-white uppercase tracking-tight">
                                Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white">Features</span>
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-gold-dark to-gold-light rounded-full mt-6" />
                        </ScrollReveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                        {[
                            { icon: <Users size={32} />, title: "Exclusive Space", desc: "Private and semi-private sections designed for comfort and luxury." },
                            { icon: <Flame size={32} />, title: "Dedicated Hookah", desc: "Assigned staff to manage and refresh your group's hookah service." },
                            { icon: <GlassWater size={32} />, title: "Custom Packages", desc: "Tailored food and drink menus to suit your party's taste and budget." },
                            { icon: <Clock size={32} />, title: "A/V Equipment", desc: "Professional sound system and visual displays for presentations or media." },
                            { icon: <Camera size={32} />, title: "Themed Decor", desc: "Custom decoration options to bring your event vision to life." },
                            { icon: <Star size={32} />, title: "VIP Seating", desc: "Luxury Versace couches and high-end furnishings for the ultimate vibe." }
                        ].map((feature, i) => (
                            <ScrollReveal key={i} animation="fade-up" delay={i * 0.1}>
                                <TiltCard className="h-full">
                                    <div className="group h-full p-8 bg-white/5 backdrop-blur-sm rounded-[2rem] border border-white/5 hover:border-gold/30 transition-colors duration-500 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        <div className="relative z-10">
                                            <div className="w-16 h-16 rounded-2xl bg-dark-primary border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-gold/50 transition-all duration-300">
                                                <div className="text-gold group-hover:text-white transition-colors duration-300">
                                                    {feature.icon}
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide group-hover:text-gold transition-colors">{feature.title}</h3>
                                            <p className="text-gray-400 leading-relaxed font-light">{feature.desc}</p>
                                        </div>
                                    </div>
                                </TiltCard>
                            </ScrollReveal>
                        ))}
                    </div>
                </Section>

                <Section id="pricing" className="bg-[#031322]">
                    <div className="text-center mb-24 flex flex-col items-center gap-6">
                        <ScrollReveal animation="fade-up">
                            <h2 className="text-4xl md:text-7xl font-heading font-black text-white uppercase tracking-tight">Event Packages</h2>
                            <p className="text-gray-400 text-lg max-w-2xl">Choose the perfect tier for your group. Custom packages also available.</p>
                            <div className="w-20 h-[1px] bg-gold/30 mt-4" />
                        </ScrollReveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Bronze", price: "Call for Price", limit: "Up to 20 Guests", features: ["Semi-private section", "2 Signature Hookahs", "Appetizer Platter", "Dedicated Server"] },
                            { name: "Silver", price: "Call for Price", limit: "Up to 35 Guests", features: ["Priority Lounge Area", "4 Premium Hookahs", "Custom Food Package", "Round of Mocktails", "Event Coordinator"] },
                            { name: "Gold", price: "Call for Price", limit: "Up to 50 Guests", features: ["Full Exclusive Space", "Unlimited Hookah Refresh", "Premium Entree Buffet", "A/V Setup Included", "Priority VIP Decor"] }
                        ].map((tier, i) => (
                            <ScrollReveal key={i} animation="fade-up" delay={0.2 + (i * 0.1)}>
                                <div className={`h-full p-8 md:p-10 rounded-[2.5rem] border transition-all duration-500 group relative overflow-hidden flex flex-col ${i === 1
                                    ? 'bg-gradient-to-b from-gold/20 to-black/50 border-gold/50 shadow-[0_0_50px_rgba(212,175,55,0.1)]'
                                    : 'bg-white/5 backdrop-blur-md border-white/10 hover:border-gold/30'
                                    }`}>

                                    {/* Hover Glow Effect */}
                                    <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                    {i === 1 && (
                                        <div className="absolute top-0 right-0 bg-gold text-black text-xs font-black uppercase tracking-widest px-6 py-2 rounded-bl-3xl shadow-lg z-20">
                                            Most Popular
                                        </div>
                                    )}

                                    <div className="mb-8 text-left relative z-10">
                                        <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-wide group-hover:text-gold transition-colors">{tier.name}</h3>
                                        <div className="text-3xl md:text-4xl font-heading font-black text-white/70 mb-4 group-hover:text-white transition-colors">{tier.price}</div>
                                        <div className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10">
                                            <p className="text-sm text-gold font-bold uppercase tracking-widest">{tier.limit}</p>
                                        </div>
                                    </div>

                                    <ul className="space-y-5 flex-grow relative z-10 border-t border-white/10 pt-8 mb-8">
                                        {tier.features.map(f => (
                                            <li key={f} className="flex items-start gap-4 text-sm text-gray-300 font-medium group/item">
                                                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-gold shrink-0 group-hover/item:scale-150 transition-transform shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                                                <span className="leading-relaxed group-hover:text-white transition-colors">{f}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="relative z-10 mt-auto">
                                        <Button className="w-full shadow-lg" variant={i === 1 ? 'primary' : 'outline'} size="lg" withArrow asChild>
                                            <a href="#inquiry">Reserve Now</a>
                                        </Button>
                                    </div>

                                    {/* Shine Effect */}
                                    <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:animate-shine pointer-events-none" />
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </Section>

                <Section id="inquiry" className="bg-dark-primary relative">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <EventInquiryForm />
                </Section>
            </main>
            <Footer />
        </>
    );
}
