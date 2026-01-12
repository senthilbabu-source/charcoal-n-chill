import { constructMetadata } from "@/lib/metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { JsonLd, getBreadcrumbSchema } from "@/components/layout/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Music, UserCheck, Star } from "lucide-react";

export const metadata = constructMetadata({
    title: "Events & Entertainment | Belly Dancing, Afrobeats & Bollywood",
    description: "Weekly live entertainment at Charcoal N Chill Alpharetta! Professional belly dancing, Afrobeats nights, Latino nights, Bollywood parties. Check calendar.",
    path: "/events",
    keywords: ["belly dancing Alpharetta", "Afrobeats night Atlanta", "Bollywood night Alpharetta", "best nightlife GA"]
});

const events = [
    {
        day: "Thursday",
        name: "Belly Dancing Night",
        time: "9:00 PM - 11:00 PM",
        desc: "Professional belly dancing performances with Middle Eastern music and special hookah flavors.",
        icon: <UserCheck className="w-6 h-6 text-gold" />,
        image: "/images/belly-dancing.jpg"
    },
    {
        day: "Friday",
        name: "Afrobeats Night",
        time: "10:00 PM - 2:00 AM",
        desc: "Live DJ spinning Afrobeats, Dancehall, and Caribbean hits with VIP bottle service specials.",
        icon: <Music className="w-6 h-6 text-gold" />,
        image: "/images/afrobeats-night.jpg"
    },
    {
        day: "Saturday",
        name: "Latino Night",
        time: "10:00 PM - 2:00 AM",
        desc: "Reggaeton, Salsa, and Bachata with special Latin-inspired cocktails and performances.",
        icon: <Star className="w-6 h-6 text-gold" />,
        image: "/images/latino-night.jpg"
    },
    {
        day: "First Sat. of Month",
        name: "Bollywood Night",
        time: "10:00 PM - 2:00 AM",
        desc: "Bollywood DJ, Indo-American cocktails, and hookah specials with themed decorations.",
        icon: <Calendar className="w-6 h-6 text-gold" />,
        image: "/images/bollywood-night.jpg"
    }
];

export default function EventsPage() {
    return (
        <>
            {events.map((event, i) => (
                <JsonLd
                    key={i}
                    data={{
                        "@context": "https://schema.org",
                        "@type": "Event",
                        "name": event.name,
                        "description": event.desc,
                        "eventSchedule": {
                            "@type": "Schedule",
                            "repeatFrequency": "P1W",
                            "byDay": event.day.includes("Thursday") ? "Thursday" : event.day.includes("Friday") ? "Friday" : "Saturday",
                            "startTime": event.time.split(" - ")[0],
                            "endTime": event.time.split(" - ")[1]
                        },
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
                        }
                    }}
                />
            ))}
            <JsonLd data={getBreadcrumbSchema([{ name: "Events", item: "/events" }])} id="breadcrumb-events" />
            <Header />
            <main className="pt-40">
                <Breadcrumbs items={[{ label: "Events", href: "/events" }]} />
                <section className="bg-charcoal py-20 border-b border-white/5 mx-auto">
                    <div className="container px-4 md:px-6 text-center space-y-4">
                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white tracking-tight">
                            Live <span className="text-gold">Entertainment</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-gray-400 text-lg">
                            Join us for weekly world-class performances, live DJs, and themed nights that bring the energy to Alpharetta.
                        </p>
                    </div>
                </section>

                <Section>
                    <div className="space-y-24">
                        {events.map((event, i) => (
                            <div
                                key={i}
                                className={`flex flex-col lg:flex-row gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                <div className="w-full lg:w-1/2 space-y-6">
                                    <div className="inline-block px-4 py-1 bg-gold/10 text-gold text-sm font-bold rounded-full uppercase tracking-widest">
                                        {event.day}
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">{event.name}</h2>
                                        <p className="text-gold font-medium flex items-center gap-2">
                                            <Calendar className="w-4 h-4" /> {event.time}
                                        </p>
                                    </div>
                                    <p className="text-gray-400 text-lg leading-relaxed">{event.desc}</p>
                                    <Button size="lg" asChild>
                                        <Link href="/contact#reserve">Reserve VIP Table</Link>
                                    </Button>
                                </div>

                                <div className="w-full lg:w-1/2 relative group">
                                    <div className="absolute inset-0 bg-gold/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    <div className="relative aspect-video lg:aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                                        <Image
                                            src={event.image}
                                            alt={event.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            width={800}
                                            height={600}
                                            priority={i === 0}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>

                <Section className="bg-black text-center">
                    <div className="max-w-3xl mx-auto space-y-8">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Celebrate Your Special Occasions</h2>
                        <p className="text-gray-400">Planning a birthday, bachelor party, or corporate event? Our venue and entertainment are perfect for any celebration up to 60 guests.</p>
                        <Button variant="outline" size="lg" className="text-white border-white/10" asChild>
                            <Link href="/private-events">Learn More About Private Events</Link>
                        </Button>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
