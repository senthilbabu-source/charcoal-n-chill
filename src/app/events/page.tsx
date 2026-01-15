import { constructMetadata } from "@/lib/metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { JsonLd, getBreadcrumbSchema } from "@/components/layout/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { EventsHero } from "@/components/events/EventsHero";
import { EventsShowcase } from "@/components/events/EventsShowcase";
import { SecretHunt } from "@/components/gamification/SecretHunt";
import { getNextFriday, getNextTuesday } from "@/lib/date-utils";

export const metadata = constructMetadata({
    title: "Events | Live Entertainment, Belly Dancing & Hookah Specials",
    description: "Experience the vibe at Charcoal N Chill. Weekly Belly Dancing (Fri/Sat), Hookah Tuesday Specials, and live DJ nights in Alpharetta.",
    path: "/events",
    keywords: ["belly dancing Alpharetta", "live music Atlanta", "hookah specials", "Afrobeats night", "karaoke night"]
});

export default function EventsPage() {
    return (
        <>
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "EventSeries",
                    "name": "Weekly Entertainment at Charcoal N Chill",
                    "description": "Recurring weekly events including Belly Dancing and Hookah Specials.",
                    "location": {
                        "@type": "Place",
                        "name": "Charcoal N Chill",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "11950 Jones Bridge Rd Ste 103",
                            "addressLocality": "Alpharetta",
                            "addressRegion": "GA",
                            "postalCode": "30005"
                        }
                    },
                    "subEvent": [
                        { "@type": "Event", "name": "Belly Dancing", "startDate": `${getNextFriday()}T22:00:00`, "eventStatus": "https://schema.org/EventScheduled", "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode", "description": "Live belly dancing every Friday and Saturday.", "image": "https://charcoalnchill.com/images/belly-dance-cnc.jpg", "location": { "@type": "Place", "name": "Charcoal N Chill", "address": { "@type": "PostalAddress", "streetAddress": "11950 Jones Bridge Rd Ste 103", "addressLocality": "Alpharetta", "addressRegion": "GA", "postalCode": "30005" } } },
                        { "@type": "Event", "name": "Hookah Tuesday", "startDate": `${getNextTuesday()}T17:00:00`, "eventStatus": "https://schema.org/EventScheduled", "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode", "description": "Hookah specials all night.", "image": "https://charcoalnchill.com/images/hookah-cnc.jpg", "location": { "@type": "Place", "name": "Charcoal N Chill", "address": { "@type": "PostalAddress", "streetAddress": "11950 Jones Bridge Rd Ste 103", "addressLocality": "Alpharetta", "addressRegion": "GA", "postalCode": "30005" } } }
                    ]
                }}
                id="events-series-jsonld"
            />
            <JsonLd data={getBreadcrumbSchema([{ name: "Events", item: "/events" }])} id="breadcrumb-events" />

            <Header />

            <main className="bg-dark-primary">
                {/* Hero Section */}
                <EventsHero />

                <div className="bg-dark-primary relative z-10 border-t border-white/5 -mt-8 rounded-t-[3rem]">
                    <div className="container mx-auto px-4 pt-8">
                        <Breadcrumbs items={[{ label: "Events", href: "/events" }]} />
                    </div>

                    {/* Main Showcase */}
                    <EventsShowcase />

                    {/* Private Events Teaser */}
                    <Section className="pb-24">
                        <div className="relative rounded-[3rem] overflow-hidden group">
                            <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
                                <Image
                                    src="/images/private-party.jpg"
                                    alt="Private Party at CNC"
                                    fill
                                    className="object-cover filter brightness-[0.3]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80" />
                            </div>
                            <div className="relative z-10 py-24 px-6 md:px-20 text-center">
                                <span className="inline-block py-1 px-3 rounded-full bg-gold-primary/20 backdrop-blur-md border border-gold-primary/30 text-gold-primary text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                                    VIP Experience <SecretHunt id="events_ember" locationName="the Events Page" className="inline-block align-middle ml-2" />
                                </span>
                                <h2 className="text-4xl md:text-6xl font-heading font-black text-white uppercase tracking-tight mb-6">
                                    Host Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Moment</span>
                                </h2>
                                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                                    From bachelor parties to corporate buyouts, elevate your celebration with bespoke visuals, curated menus, and VIP service.
                                </p>
                                <Button size="xl" className="bg-gold-primary text-black hover:bg-white hover:text-black font-black uppercase tracking-widest px-12 py-8 text-lg shadow-2xl hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300 border-none" asChild>
                                    <Link href="/parties">
                                        Start Planning
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </Section>
                </div>
            </main>
            <Footer />
        </>
    );
}
