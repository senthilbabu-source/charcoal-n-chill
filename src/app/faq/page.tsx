import { constructMetadata } from "@/lib/metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { JsonLd, getBreadcrumbSchema } from "@/components/layout/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { HelpCircle, ChevronDown } from "lucide-react";

export const metadata = constructMetadata({
    title: "Frequently Asked Questions | Charcoal N Chill Hookah & Dining",
    description: "Frequently asked questions about Charcoal N Chill hookah lounge in Alpharetta. Reservations, hookah flavors, menu, hours, parking, age requirements & more.",
    path: "/faq",
    keywords: ["hookah lounge FAQ", "age requirement hookah bar", "parking Charcoal N Chill", "hookah lounge rules"]
});

const faqs = [
    {
        category: "General",
        items: [
            { q: "What are your hours?", a: "We're open Tuesday-Thursday 5 PM-1 AM, Friday-Saturday 5 PM-2 AM, Sunday 5 PM-1 AM, Closed-Monday." },
            { q: "Do I need a reservation?", a: "Reservations recommended for weekends and events. Walk-ins welcome based on availability." },
            { q: "What's the age requirement?", a: "21+ only. Valid ID required for entry." }
        ]
    },
    {
        category: "Hookah",
        items: [
            { q: "How many hookah flavors do you have?", a: "50+ premium flavors including fruit, mint, exotic blends, and house specialties." },
            { q: "How long does a hookah session last?", a: "Typically 45-60 minutes depending on flavor and usage." },
            { q: "Can I share a hookah?", a: "Yes! Hookahs are perfect for sharing with 2-4 people." }
        ]
    },
    {
        category: "Food & Drinks",
        items: [
            { q: "Do you serve vegetarian options?", a: "Yes! We have extensive vegetarian menu including Paneer dishes, veg appetizers, and more." },
            { q: "Is your food halal?", a: "We offer halal-friendly options. Please ask your server for details." },
            { q: "Do you have a full bar?", a: "Yes! Full bar with craft cocktails, premium spirits, beer, wine, and bottle service." }
        ]
    },
    {
        category: "Operations",
        items: [
            { q: "Is parking available?", a: "Yes, free parking lot with handicap accessible spaces." },
            { q: "Can I book a private event?", a: "Yes! We accommodate up to 60 guests. Visit our Private Events page for details." }
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
                "text": item.a
            }
        }))
    };

    return (
        <>
            <JsonLd data={faqSchema} />
            <JsonLd data={getBreadcrumbSchema([{ name: "FAQ", item: "/faq" }])} id="breadcrumb-faq" />
            <Header />
            <main className="pt-40">
                <Breadcrumbs items={[{ label: "FAQ", href: "/faq" }]} />
                <section className="bg-charcoal py-20 border-b border-white/5 mx-auto">
                    <div className="container px-4 md:px-6 text-center space-y-4">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white tracking-tight">
                            Common <span className="text-gold">Questions</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-gray-400 text-lg">
                            Everything you need to know about your visit to Charcoal N Chill.
                        </p>
                    </div>
                </section>

                <Section>
                    <div className="max-w-4xl mx-auto space-y-16">
                        {faqs.map((category, idx) => (
                            <div key={idx} className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <HelpCircle className="w-6 h-6 text-gold" />
                                    <h2 className="text-2xl font-heading font-bold text-white uppercase tracking-widest">{category.category}</h2>
                                </div>

                                <div className="space-y-4">
                                    {category.items.map((item, i) => (
                                        <details key={i} className="group p-6 bg-black rounded-2xl border border-white/5 hover:border-gold/20 transition-all">
                                            <summary className="flex items-center justify-between cursor-pointer list-none">
                                                <h3 className="text-lg font-bold text-white group-open:text-gold transition-colors">{item.q}</h3>
                                                <ChevronDown className="w-5 h-5 text-gold group-open:rotate-180 transition-transform" />
                                            </summary>
                                            <div className="mt-4 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                                                {item.a}
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
