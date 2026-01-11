import { constructMetadata } from "@/lib/metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { JsonLd, getBreadcrumbSchema } from "@/components/layout/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CheckCircle2, Star, Users, GlassWater, Clock, Camera, Flame } from "lucide-react";

export const metadata = constructMetadata({
    title: "Private Events & Party Venue | VIP Birthday & Corporate Packages",
    description: "Host your dream event at Charcoal N Chill. Premium party venue for birthdays, corporate events, and bachelor parties in Alpharetta. Capacity up to 60 guests.",
    path: "/private-events",
    keywords: ["private party venue Alpharetta", "birthday party ideas Atlanta", "corporate event lounge", "exclusive venue hire GA"]
});

export default function PrivateEventsPage() {
    return (
        <>
            <JsonLd data={getBreadcrumbSchema([{ name: "Private Events", item: "/private-events" }])} id="breadcrumb-private" />
            <Header />
            <main className="pt-20">
                <Breadcrumbs items={[{ label: "Private Events", href: "/private-events" }]} />
                <section className="bg-[#031322] py-24 md:py-32 border-b border-white/5 mx-auto">
                    <div className="container px-4 md:px-6 text-center space-y-6">
                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-heading font-black text-white uppercase tracking-tighter leading-none mb-4">
                            Host Your <span className="text-gold text-glow">Special Event</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-gray-400 text-xl leading-relaxed font-medium">
                            Charcoal N Chill provides a sophisticated, luxury lounge backdrop for your next celebration. From VIP birthdays to corporate gatherings.
                        </p>
                    </div>
                </section>

                <Section>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Perfect for Every Occasion</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Birthday Parties",
                                    "Bachelor/Bachelorette",
                                    "Corporate Events",
                                    "Anniversary Celebrations",
                                    "Graduation Parties",
                                    "Team Building",
                                    "Social Gatherings",
                                    "Theme Parties"
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-3 text-gray-300">
                                        <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-4 pt-4">
                                <h3 className="text-xl font-bold text-white">Guest Capacity</h3>
                                <p className="text-gray-400">Our venue comfortably accommodates groups from 15 to 60 guests in a semi-private or fully exclusive setting.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 pt-8">
                                <div className="aspect-square rounded-2xl overflow-hidden border border-white/10">
                                    <img src="/images/vip-section.jpg" className="w-full h-full object-cover" />
                                </div>
                                <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
                                    <img src="/images/hookah-prep.jpg" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
                                    <img src="/images/hero-bg.jpg" className="w-full h-full object-cover" />
                                </div>
                                <div className="aspect-square rounded-2xl overflow-hidden border border-white/10">
                                    <img src="/images/event-gathering.jpg" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section className="bg-[#050F18]">
                    <div className="text-center mb-20 flex flex-col items-center gap-6">
                        <h2 className="text-4xl md:text-7xl font-heading font-black text-white uppercase tracking-tight">Premium Features</h2>
                        <div className="w-20 h-1 bg-gold rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {[
                            { icon: <Users size={40} className="text-gold" />, title: "Exclusive Space", desc: "Private and semi-private sections designed for comfort and luxury." },
                            { icon: <Flame size={40} className="text-gold" />, title: "Dedicated Hookah", desc: "Assigned staff to manage and refresh your group's hookah service." },
                            { icon: <GlassWater size={40} className="text-gold" />, title: "Custom Packages", desc: "Tailored food and drink menus to suit your party's taste and budget." },
                            { icon: <Clock size={40} className="text-gold" />, title: "A/V Equipment", desc: "Professional sound system and visual displays for presentations or media." },
                            { icon: <Camera size={40} className="text-gold" />, title: "Themed Decor", desc: "Custom decoration options to bring your event vision to life." },
                            { icon: <Star size={40} className="text-gold" />, title: "VIP Seating", desc: "Luxury Versace couches and high-end furnishings for the ultimate vibe." }
                        ].map((feature, i) => (
                            <div key={i} className="p-10 bg-[#1e1e1e] rounded-3xl border border-white/5 space-y-6 group hover:border-gold/30 transition-all duration-500 hover:gold-glow">
                                <div className="flex justify-center transition-transform group-hover:scale-110">{feature.icon}</div>
                                <h3 className="text-xl font-black text-white uppercase tracking-wider">{feature.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </Section>

                <Section id="pricing" className="bg-[#031322]">
                    <div className="text-center mb-24 flex flex-col items-center gap-6">
                        <h2 className="text-4xl md:text-7xl font-heading font-black text-white uppercase tracking-tight">Event Packages</h2>
                        <p className="text-gray-400 text-lg">Choose the perfect tier for your group. Custom packages also available.</p>
                        <div className="w-20 h-[1px] bg-gold" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Bronze", price: "$500+", limit: "Up to 20 Guests", features: ["Semi-private section", "2 Signature Hookahs", "Appetizer Platter", "Dedicated Server"] },
                            { name: "Silver", price: "$1000+", limit: "Up to 40 Guests", features: ["Priority Lounge Area", "4 Premium Hookahs", "Custom Food Package", "Round of Mocktails", "Event Coordinator"] },
                            { name: "Gold", price: "$1500+", limit: "Up to 60 Guests", features: ["Full Exclusive Space", "Unlimited Hookah Refresh", "Premium Entree Buffet", "A/V Setup Included", "Priority VIP Decor"] }
                        ].map((tier, i) => (
                            <div key={i} className={`p-10 rounded-[3rem] border transition-all duration-500 hover:scale-[1.02] ${i === 1 ? 'bg-gold/5 border-gold gold-glow' : 'bg-[#1e1e1e] border-white/5'} flex flex-col`}>
                                <div className="mb-10 text-left">
                                    <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-wide">{tier.name}</h3>
                                    <div className="text-5xl font-heading font-black text-gold mb-4 text-glow">{tier.price}</div>
                                    <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">{tier.limit}</p>
                                </div>
                                <ul className="space-y-6 flex-grow">
                                    {tier.features.map(f => (
                                        <li key={f} className="flex items-center gap-4 text-sm text-gray-300 font-medium">
                                            <div className="w-2 h-2 rounded-full bg-gold shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <Button className="mt-10" variant={i === 1 ? 'primary' : 'outline'} size="lg" withArrow asChild>
                                    <a href="#inquiry">Reserve Now</a>
                                </Button>
                            </div>
                        ))}
                    </div>
                </Section>

                <Section id="inquiry" className="bg-charcoal">
                    <div className="max-w-4xl mx-auto p-8 md:p-12 bg-black rounded-3xl border border-white/5">
                        <div className="text-center mb-12 space-y-2">
                            <h2 className="text-3xl font-heading font-bold text-white">Event Inquiry</h2>
                            <p className="text-gray-400">Tell us about your event and our coordinator will reach out within 24 hours.</p>
                        </div>
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Full Name</label>
                                <input type="text" className="w-full px-4 py-3 bg-charcoal border border-white/10 rounded-xl focus:border-gold outline-none text-white transition-colors" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Email Address</label>
                                <input type="email" className="w-full px-4 py-3 bg-charcoal border border-white/10 rounded-xl focus:border-gold outline-none text-white transition-colors" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Phone Number</label>
                                <input type="tel" className="w-full px-4 py-3 bg-charcoal border border-white/10 rounded-xl focus:border-gold outline-none text-white transition-colors" placeholder="(470) 546-4866" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Event Type</label>
                                <select className="w-full px-4 py-3 bg-charcoal border border-white/10 rounded-xl focus:border-gold outline-none text-white transition-colors">
                                    <option>Birthday Party</option>
                                    <option>Corporate Event</option>
                                    <option>Bachelor/Bachelorette</option>
                                    <option>Other celebration</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Preferred Date</label>
                                <input type="date" className="w-full px-4 py-3 bg-charcoal border border-white/10 rounded-xl focus:border-gold outline-none text-white transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Estimated Guest Count</label>
                                <input type="number" className="w-full px-4 py-3 bg-charcoal border border-white/10 rounded-xl focus:border-gold outline-none text-white transition-colors" placeholder="20" />
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-sm font-medium text-gray-300">Special Requests / Message</label>
                                <textarea rows={4} className="w-full px-4 py-3 bg-charcoal border border-white/10 rounded-xl focus:border-gold outline-none text-white transition-colors" placeholder="Tell us more about your vision..." />
                            </div>
                            <div className="md:col-span-2">
                                <Button className="w-full py-6 text-lg">Send Inquiry</Button>
                            </div>
                        </form>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
