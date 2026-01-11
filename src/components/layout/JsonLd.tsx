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
    "url": "https://charcoalnchill.com",
    "logo": "https://charcoalnchill.com/logo.png",
    "description": "Alpharetta's premier hookah lounge and authentic Indian restaurant featuring 50+ premium flavors, live entertainment, and luxury VIP seating near Avalon Mall.",
    "foundingDate": "2015",
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-470-546-4866",
        "contactType": "reservations",
        "areaServed": "US",
        "availableLanguage": ["en"],
        "email": "charcoalnchill@gmail.com"
    },
    "sameAs": [
        "https://www.facebook.com/profile.php?id=61571869656813",
        "https://www.instagram.com/charcoal_n_chill/",
        "https://www.yelp.com/biz/charcoal-n-chill-alpharetta"
    ],
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "11950 Jones Bridge Rd Ste 103",
        "addressLocality": "Alpharetta",
        "addressRegion": "GA",
        "postalCode": "30005",
        "addressCountry": "US"
    }
};

export const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Charcoal N Chill",
    "image": [
        "https://charcoalnchill.com/images/final-cnc-hero.jpg",
        "https://charcoalnchill.com/logo.png",
        "https://charcoalnchill.com/images/chicken-65.jpg",
        "https://charcoalnchill.com/images/butter-chicken.jpg",
        "https://charcoalnchill.com/images/hookah-cnc.jpg",
        "https://charcoalnchill.com/images/cocktails.jpg",
        "https://charcoalnchill.com/images/hookah-le-blog.jpg",
        "https://charcoalnchill.com/images/crispy-corn-cnc.jpg",
        "https://charcoalnchill.com/images/private-party-cnc.jpeg"
    ],
    "@id": "https://charcoalnchill.com",
    "url": "https://charcoalnchill.com",
    "telephone": "+14705464866",
    "email": "charcoalnchill@gmail.com",
    "priceRange": "$$",
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
        "latitude": 34.0705,
        "longitude": -84.2830
    },
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Tuesday", "Wednesday", "Thursday"],
            "opens": "17:00",
            "closes": "01:00"
        },
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Friday", "Saturday"],
            "opens": "17:00",
            "closes": "02:00"
        },
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Sunday",
            "opens": "17:00",
            "closes": "01:00"
        }
    ],
    "servesCuisine": ["Indian", "American", "Indo-American Fusion", "Hookah Lounge"],
    "acceptsReservations": "True",
    "menu": "https://charcoalnchill.com/menu",
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "45",
        "bestRating": "5",
        "worstRating": "1"
    },
    "paymentAccepted": "Cash, Credit Card, Debit Card",
    "currenciesAccepted": "USD"
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
