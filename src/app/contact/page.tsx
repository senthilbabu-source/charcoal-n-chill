import { constructMetadata } from "@/lib/metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { JsonLd, getBreadcrumbSchema } from "@/components/layout/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/home/ContactForm";
import { MapFacade } from "@/components/ui/MapFacade";
import { MapPin, Phone, Mail, Clock, ParkingCircle, ChevronRight } from "lucide-react";

export const metadata = constructMetadata({
    title: "Contact & Reservations | Book Your Table at Charcoal N Chill",
    description: "Visit Charcoal N Chill at 11950 Jones Bridge Rd, Alpharetta near Avalon. Call (470) 546-4866 to reserve your table. Open til 2 AM on weekends!",
    path: "/contact",
    keywords: ["hookah lounge reservations", "book table Alpharetta", "Charcoal N Chill contact", "group bookings lounge"]
});

export default function ContactPage() {
    return (
        <>
            <JsonLd data={getBreadcrumbSchema([{ name: "Contact", item: "/contact" }])} id="breadcrumb-contact" />
            <Header />
            <main className="pt-40">
                <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
                <section className="bg-charcoal py-20 border-b border-white/5 mx-auto">
                    <div className="container px-4 md:px-6 text-center space-y-4">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white tracking-tight">
                            Get In <span className="text-gold">Touch</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
                            Whether you&apos;re looking to reserve a table, plan an event, or just have a question, we&apos;re here to help.
                        </p>
                    </div>
                </section>

                <Section>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <ContactForm />
                    </div>

                    {/* Info & Map */}
                    <div className="space-y-12">
                        <div className="space-y-8">
                            <h2 className="text-3xl font-heading font-bold text-white">Our Location</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="text-gold shrink-0 mt-1" />
                                        <div className="text-gray-300">
                                            <p className="font-bold text-white">Address</p>
                                            <p className="text-sm">11950 Jones Bridge Rd Ste 103<br />Alpharetta, GA 30005</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Phone className="text-gold shrink-0 mt-1" />
                                        <div className="text-gray-300">
                                            <p className="font-bold text-white">Phone</p>
                                            <a href="tel:4705464866" className="text-sm hover:text-gold transition-colors">(470) 546-4866</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Mail className="text-gold shrink-0 mt-1" />
                                        <div className="text-gray-300">
                                            <p className="font-bold text-white">Email</p>
                                            <a href="mailto:charcoalnchill@gmail.com" className="text-sm hover:text-gold transition-colors">charcoalnchill@gmail.com</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <Clock className="text-gold shrink-0 mt-1" />
                                        <div className="text-gray-300">
                                            <p className="font-bold text-white">Hours</p>
                                            <p className="text-xs">Tue - Thu: 5 PM - 1 AM</p>
                                            <p className="text-xs">Fri - Sat: 5 PM - 2 AM</p>
                                            <p className="text-xs">Sun -: 5 PM - 1 AM</p>
                                            <p className="text-xs">Mon -: Closed</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <ParkingCircle className="text-gold shrink-0 mt-1" />
                                        <div className="text-gray-300">
                                            <p className="font-bold text-white">Parking</p>
                                            <p className="text-sm">Free lot available.<br />Handicap accessible.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="h-[350px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
                            <MapFacade />
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-white">Getting Here</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { from: "Johns Creek", time: "10 mins via GA-141" },
                                    { from: "Roswell", time: "15 mins via GA-400" },
                                    { from: "Milton", time: "12 mins via GA-9" },
                                    { from: "Duluth", time: "18 mins via GA-120" }
                                ].map((route, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 bg-black rounded-xl border border-white/5">
                                        <ChevronRight size={16} className="text-gold" />
                                        <div>
                                            <p className="text-xs font-bold text-white">{route.from}</p>
                                            <p className="text-[10px] text-gray-500">{route.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
