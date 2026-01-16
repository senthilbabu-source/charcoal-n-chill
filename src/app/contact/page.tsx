import { constructMetadata } from "@/lib/metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd, getBreadcrumbSchema } from "@/components/layout/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/home/ContactForm";
import { MapFacade } from "@/components/ui/MapFacade";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { MapPin } from "lucide-react";

export const metadata = constructMetadata({
    title: "Reservations & Contact - Charcoal N Chill Alpharetta | Book Table Now",
    description: "Reserve your table at Charcoal N Chill. Located at 11950 Jones Bridge Rd, Alpharetta GA. Call (470) 546-4866 or book online. Near Avalon Mall.",
    path: "/contact",
    keywords: ["hookah lounge reservations", "book table Alpharetta", "Charcoal N Chill contact", "group bookings lounge"]
});

export default function ContactPage() {
    return (
        <>
            <JsonLd data={getBreadcrumbSchema([{ name: "Contact", item: "/contact" }])} id="breadcrumb-contact" />
            <Header />
            <main className="bg-dark-primary min-h-screen">
                <ContactHero />

                <div className="relative z-10 border-t border-white/5 -mt-8 rounded-t-[3rem] bg-dark-primary" id="contact-content">
                    <div className="container mx-auto px-4 pt-8">
                        <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />

                        <div className="py-12 lg:py-20">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                                {/* Left Column: Info & Map */}
                                <div className="space-y-12">
                                    <ContactInfo />

                                    {/* Map Section */}
                                    <div className="h-[350px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl relative group w-full">
                                        <MapFacade />
                                        <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2 pointer-events-none z-10">
                                            <MapPin size={14} className="text-gold-primary" />
                                            <span className="text-xs font-bold text-white uppercase tracking-wider">Alpharetta, GA</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Form */}
                                <div className="lg:sticky lg:top-32">
                                    <div className="bg-[#151515] p-8 md:p-12 rounded-[3rem] border border-white/5 shadow-2xl">
                                        <div className="mb-8 text-center">
                                            <h2 className="text-3xl font-heading font-black text-white mb-3 uppercase tracking-wide">Send a Message</h2>
                                            <div className="w-16 h-1 bg-gold-primary mx-auto rounded-full mb-4" />
                                            <p className="text-gray-400 text-sm">Fill out the form below and we&apos;ll get back to you shortly.</p>
                                        </div>
                                        <ContactForm withHeader={false} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
