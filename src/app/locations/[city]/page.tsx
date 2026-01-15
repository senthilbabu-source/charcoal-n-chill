import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Clock, Star, Navigation } from 'lucide-react';
import { locations } from '@/data/locations';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/layout/JsonLd';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

// 1. Generate Static Params (Build all pages at build time)
export async function generateStaticParams() {
    return locations.map((loc) => ({
        city: loc.slug,
    }));
}

// 2. Dynamic Metadata
export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
    const location = locations.find((l) => l.slug === params.city);
    if (!location) return {};

    const title = `Best Hookah Lounge Near ${location.city} | Charcoal N Chill`;

    return {
        title,
        description: location.metaDescription,
        openGraph: {
            title,
            description: location.metaDescription,
            url: `https://charcoalnchill.com/locations/${location.slug}`,
            siteName: "Charcoal N Chill",
            locale: "en_US",
            type: "website",
        },
        alternates: {
            canonical: `https://charcoalnchill.com/locations/${location.slug}`,
        },
    };
}

// 3. Page Component
export default function LocationPage({ params }: { params: { city: string } }) {
    const location = locations.find((l) => l.slug === params.city);

    if (!location) {
        notFound();
    }

    // JSON-LD Schema for Local Business serving this specific area
    const locationSchema = {
        "@context": "https://schema.org",
        "@type": "HookahBar",
        "name": "Charcoal N Chill",
        "image": "https://charcoalnchill.com/images/hero-bg.jpg",
        "telephone": "+1-470-546-4866",
        "url": "https://charcoalnchill.com",
        "hasMap": "https://maps.app.goo.gl/9Q5Z1Z1Z1Z1Z1Z1Z1", // Placeholder or real text if unavailable, but valid schema
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "11950 Jones Bridge Rd Ste 103",
            "addressLocality": "Alpharetta",
            "addressRegion": "GA",
            "postalCode": "30005",
            "addressCountry": "US"
        },
        "areaServed": {
            "@type": "City",
            "name": location.city
        },
        "priceRange": "$$",
        "ratingValue": "4.8", // Direct rating for LocalBusiness
        "reviewCount": "45",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "45"
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Sunday"],
                "opens": "17:00",
                "closes": "01:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Friday", "Saturday"],
                "opens": "17:00",
                "closes": "02:00"
            }
        ]
    };

    return (
        <main className="bg-dark-primary min-h-screen">
            <JsonLd data={locationSchema} />
            <Header />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-dark-primary z-10" />
                    <Image
                        src="/images/hero-bg.jpg"
                        alt={`Hookah Lounge near ${location.city}`}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-6 animate-fade-in-up">
                        <MapPin className="text-gold" size={16} />
                        <span className="text-sm font-bold uppercase tracking-widest text-white">
                            {location.distance} from {location.city}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight animate-fade-in-up delay-100">
                        The Best Hookah Lounge Near <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-amber-300">{location.city}</span>
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
                        Worth the short drive from {location.city}. Experience premium coconut coals, exotic flavors, and late-night Indo-American fusion.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
                        <Link href="/contact#reserve">
                            <Button size="lg" className="w-full sm:w-auto bg-brand-red hover:bg-red-700 text-white border-none shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                                Book a Table
                            </Button>
                        </Link>
                        <Link href="/menu">
                            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/20 hover:border-gold hover:text-gold">
                                View Menu
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Value Props */}
            <Section className="bg-dark-secondary/30">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-gold/30 transition-colors group">
                        <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Star className="text-gold" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Premium Quality</h3>
                        <p className="text-gray-400">
                            We use 100% natural coconut coals and premium shisha brands. Locals from {location.city} choose us because we never cut corners on quality.
                        </p>
                    </div>
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-gold/30 transition-colors group">
                        <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Clock className="text-brand-red" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Open Late</h3>
                        <p className="text-gray-400">
                            We&apos;re open until 2 AM on weekends. Whether you&apos;re coming from {location.city} for a pre-game or a nightcap, our kitchen and lounge are ready.
                        </p>
                    </div>
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-gold/30 transition-colors group">
                        <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Navigation className="text-blue-400" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Easy Drive</h3>
                        <p className="text-gray-400">
                            Located just {location.distance} {location.direction} of {location.city}. Ample free parking and a location that&apos;s easy to find.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Call to Action Banner */}
            <section className="py-20 bg-brand-red text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-black mb-6">
                        {location.city}&apos;s Favorite Night Out
                    </h2>
                    <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                        Don&apos;t settle for average. Drive the extra few minutes for the best hookah experience in North Georgia.
                    </p>
                    <Link href={`https://www.google.com/maps/dir/${location.city},+GA/Charcoal+N+Chill,+Alpharetta,+GA`} target="_blank">
                        <Button size="lg" className="bg-white text-brand-red hover:bg-gray-100 border-none font-bold text-lg px-8">
                            <Navigation size={20} className="mr-2" />
                            Get Directions
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
