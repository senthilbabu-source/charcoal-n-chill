import { constructMetadata } from "@/lib/metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { JsonLd, getBreadcrumbSchema } from "@/components/layout/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { HelpCircle, ChevronDown, MapPin, Clock, Calendar } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import Link from "next/link";
import { GoldenCoal } from "@/components/gamification/GoldenCoal";
import { SecretHunt } from "@/components/gamification/SecretHunt";

export const metadata = constructMetadata({
    title: "FAQ | Charcoal N Chill - Alpharetta's Premier Hookah Lounge",
    description: "Find answers about Charcoal N Chill in Alpharetta. Questions about hookah flavors, BYOB policy, age requirements (21+), parking, and private event bookings.",
    path: "/faq",
    keywords: ["hookah lounge Alpharetta FAQ", "Charcoal N Chill dress code", "hookah price Alpharetta", "late night food Alpharetta", "private party venue Alpharetta"]
});

const faqs = [
    {
        category: "Location & Hours",
        items: [
            {
                q: "Where is Charcoal N Chill located in Alpharetta?",
                a: "We are conveniently located at **11950 Jones Bridge Rd Ste 103, Alpharetta, GA 30005**. We are easily accessible from Johns Creek, Milton, and arguably the best hookah lounge near Avalon."
            },
            {
                q: "What are the operating hours for Charcoal N Chill?",
                a: "We are open for late-night vibes! **Tuesday-Thursday: 5 PM - 1 AM**, **Friday-Saturday: 5 PM - 2 AM**, and **Sunday: 5 PM - 1 AM**. We are closed on Mondays."
            },
            {
                q: "Is there free parking available at the lounge?",
                a: "Yes, we offer **plenty of free parking** directly in front of the lounge. Our lot is well-lit and handicap accessible for your convenience."
            }
        ]
    },
    {
        category: "Hookah & Experience",
        items: [
            {
                q: "How many premium hookah flavors do you offer?",
                a: "We offer over **50+ premium flavors** from top brands like Al Fakher, Starbuzz, and Eternal Smoke. You can explore our full flavor list on our [Menu](/menu)."
            },
            {
                q: "What is the age requirement to enter?",
                a: "Charcoal N Chill is strictly a **21+ venue**. We require a valid physical government-issued ID (Driver's License or Passport) for entry. No exceptions."
            },
            {
                q: "Do you allow walk-ins or are reservations required?",
                a: "We welcome walk-ins! However, for Friday and Saturday nights, we **highly recommend** making a reservation to secure your table. You can book directly on our [Contact Page](/contact)."
            }
        ]
    },
    {
        category: "Food & Drinks",
        items: [
            {
                q: "Do you serve a full dinner menu?",
                a: "Yes! We serve a variety of **Indian, Indo-Chinese, and American specialties**. Our menu features favorites like **Butter Chicken Masala**, **Paneer 65**, **Chicken Fried Rice**, **Chicken Tenders**, **Fries**, and **Wings**. Check out our full [Food Menu](/menu)."
            },
            {
                q: "Do you have a full bar or is it BYOB?",
                a: "We feature a **full-service bar** with signature craft cocktails, premium spirits, wines, and beers. We are **not** a BYOB venue."
            },
            {
                q: "Are there vegetarian or halal options available?",
                a: "Yes! We cater to diverse dietary needs with a wide selection of **vegetarian appetizers** like *Veg Spring Rolls* and *Paneer Chilli*. Most of our chicken items are Halal—please ask your server for the day's confirmation."
            }
        ]
    },
    {
        category: "Private Events",
        items: [
            {
                q: "How do I book a private event or birthday party?",
                a: "We specialize in hosting unforgettable events! For birthdays, corporate mixers, or private parties, please visit our [Parties](/private-events) page to view packages and submit an inquiry."
            },
            {
                q: "What is the capacity for private venue rentals?",
                a: "Our intimate and luxurious space can comfortably accommodate up to **50 guests**. We offer full venue buyouts for exclusive access to the lounge."
            }
        ]
    }
];

export default function FAQPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.flatMap(cat => cat.items).map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '$1') // Strip markdown links for Schema text
            }
        }))
    };

    return (
        <>
            <JsonLd data={faqSchema} />
            <JsonLd data={getBreadcrumbSchema([{ name: "FAQ", item: "/faq" }])} id="breadcrumb-faq" />
            <Header />
            <main className="pt-32 pb-20 bg-dark-primary min-h-screen relative overflow-hidden">
                {/* Background Ambient Glow */}
                <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--gold-glow)_0%,_transparent_70%)] pointer-events-none" />

                <Breadcrumbs items={[{ label: "FAQ", href: "/faq" }]} />

                <PageHero
                    title={<>Common <span className="text-gold text-glow">Questions</span></>}
                    description="Everything you need to know about your luxury experience at Charcoal N Chill in Alpharetta."
                />

                <Section className="relative z-10">
                    <div className="max-w-4xl mx-auto space-y-16">
                        {faqs.map((category, idx) => (
                            <div key={idx} className="space-y-6">
                                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                                    <HelpCircle className="w-6 h-6 text-gold" />
                                    <h2 className="text-2xl font-heading font-bold text-white uppercase tracking-widest">{category.category}</h2>
                                </div>

                                <div className="space-y-4">
                                    {category.items.map((item, i) => (
                                        <details key={i} className="group p-6 bg-dark-secondary/50 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-gold/30 transition-all duration-300 open:bg-dark-secondary/80 open:border-gold/20">
                                            <summary className="flex items-center justify-between cursor-pointer list-none select-none">
                                                <h3 className="text-lg font-bold text-white group-hover:text-gold group-open:text-gold transition-colors pr-8">{item.q}</h3>
                                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors shrink-0">
                                                    <ChevronDown className="w-5 h-5 text-gold group-open:rotate-180 transition-transform duration-300" />
                                                </div>
                                            </summary>
                                            <div className="mt-4 text-gray-300 text-base leading-relaxed border-t border-white/5 pt-4 pl-1">
                                                {/* Render answer with support for Markdown-style links */}
                                                <div dangerouslySetInnerHTML={{
                                                    __html: item.a.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
                                                        .replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2" class="text-gold hover:underline font-bold">$1</a>')
                                                }} />
                                                {/* Secret Hunt Trigger for the specific FAQ item */}
                                                {item.q.includes("hookah flavors") && (
                                                    <div className="inline-block align-middle ml-2">
                                                        <SecretHunt id="faq_ember" locationName="the FAQ Page" />
                                                    </div>
                                                )}
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Still have questions CTA */}
                    <div className="max-w-2xl mx-auto mt-20 text-center p-8 rounded-3xl bg-gradient-to-br from-dark-secondary to-black border border-white/10 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Still have questions?</h3>
                        <p className="text-gray-400 mb-8 relative z-10">We're here to help! Give us a call or send us an email.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                            <Link href="/contact" className="px-8 py-3 bg-gold text-black font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors">
                                Contact Us
                            </Link>
                            <a href="tel:4705464866" className="px-8 py-3 bg-white/5 text-white font-bold uppercase tracking-widest rounded-full hover:bg-white/10 border border-white/10 transition-colors">
                                (470) 546-4866
                            </a>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
