import Script from "next/script";

interface JsonLdProps {
    data: Record<string, unknown>;
    id?: string;
}

export function JsonLd({ data, id = "json-ld" }: JsonLdProps) {
    return (
        <Script
            id={id}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Charcoal N Chill",
    "url": "https://www.charcoalnchill.com",
    "logo": "https://www.charcoalnchill.com/logo.png",
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+14705464866",
        "email": "charcoalnchill@gmail.com",
        "contactType": "customer service",
        "areaServed": "US",
        "availableLanguage": "en"
    },
    "sameAs": [
        "https://www.facebook.com/charcoalnchill",
        "https://www.instagram.com/charcoalnchill",
        "https://www.tiktok.com/@charcoalnchill"
    ]
};

export const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Charcoal N Chill - Lounge & Grill",
    "image": "https://www.charcoalnchill.com/images/hero-bg.jpg",
    "@id": "https://www.charcoalnchill.com",
    "url": "https://www.charcoalnchill.com",
    "telephone": "+14705464866",
    "priceRange": "$$",
    "paymentAccepted": "Cash, Credit Card, Apple Pay",
    "currenciesAccepted": "USD",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "11950 Jones Bridge Rd Ste 103",
        "addressLocality": "Alpharetta",
        "addressRegion": "GA",
        "postalCode": "30005",
        "addressCountry": "US"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 34.0753762,
        "longitude": -84.2940899
    },
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Sunday", "Tuesday", "Wednesday", "Thursday"],
            "opens": "17:00",
            "closes": "01:00"
        },
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Friday", "Saturday"],
            "opens": "17:00",
            "closes": "02:00"
        }
    ],
    "servesCuisine": "Indian, Indo-Chinese",
    "acceptsReservations": "True",
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "150"
    },
    "areaServed": [
        { "@type": "City", "name": "Alpharetta" },
        { "@type": "City", "name": "Johns Creek" },
        { "@type": "City", "name": "Roswell" },
        { "@type": "City", "name": "Milton" },
        { "@type": "City", "name": "Duluth" }
    ],
    "hasMenu": "https://www.charcoalnchill.com/menu",
    "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Hookah Lounge", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Full Bar", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Live Entertainment", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "VIP Seating", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Private Events", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Free Parking", "value": true }
    ],
    "potentialAction": {
        "@type": "ReserveAction",
        "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.charcoalnchill.com/contact#reserve",
            "inLanguage": "en-US",
            "actionPlatform": [
                "http://schema.org/DesktopWebPlatform",
                "http://schema.org/MobileWebPlatform"
            ]
        },
        "result": {
            "@type": "Reservation",
            "name": "Book a Table"
        }
    }
};

export function getBreadcrumbSchema(items: { name: string; item: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": `https://www.charcoalnchill.com${item.item}`
        }))
    };
}

export function getFaqSchema(faqs: { q: string; a: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };
}
