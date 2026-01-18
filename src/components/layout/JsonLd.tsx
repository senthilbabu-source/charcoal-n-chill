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
    "description": "Alpharetta's premier hookah lounge and Indo-American Eats featuring 50+ premium flavors, live entertainment, and luxury VIP seating near Avalon Mall.",
    "foundingDate": "2015",
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-470-546-4866",
        "contactType": "reservations",
        "areaServed": "US",
        "availableLanguage": ["en"],
        "email": "charcoalnchill@gmail.com"
    },
    // Flattened contact info for direct Knowledge Graph access
    "telephone": "+14705464866",
    "email": "charcoalnchill@gmail.com",
    "sameAs": [
        "https://www.facebook.com/profile.php?id=61571869656813",
        "https://www.instagram.com/charcoal_n_chill/",
        "https://www.yelp.com/biz/charcoal-n-chill-alpharetta"
    ],
    "image": "https://charcoalnchill.com/images/final-cnc-hero.jpg",
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
        "latitude": 34.07189517824684,
        "longitude": -84.20413993771884
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
    ]
};

export const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Charcoal N Chill",
    "alternateName": "Charcoal and Chill",
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
    "hasMap": "https://www.google.com/maps/place/Charcoal+N+Chill/@34.070478,-84.283038,15z/data=!4m2!3m1!1s0x0:0x1234567890abcdef?sa=X&ved=2ahUKEwj",
    "areaServed": [
        "Alpharetta", "Milton", "Roswell", "Johns Creek", "Cumming",
        "Sandy Springs", "Dunwoody", "Suwanee", "Duluth", "Marietta",
        "Woodstock", "Norcross", "Buckhead", "Brookhaven", "Canton",
        "Kennesaw", "Buford", "Sugar Hill", "Peachtree Corners", "Smyrna"
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
        "latitude": 34.07189517824684,
        "longitude": -84.20413993771884
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
    "servesCuisine": ["Indian", "American", "Fusion", "Hookah Lounge", "Halal", "Vegetarian", "Vegan", "Gluten-Free"],
    "acceptsReservations": "True",
    "menu": "https://charcoalnchill.com/menu",
    "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Free Parking", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Hookah Lounge", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Live Entertainment", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "VIP Lounge", "value": true }
    ],
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "45",
        "bestRating": "5",
        "worstRating": "1"
    },
    "paymentAccepted": "Cash, Credit Card, Debit Card",
    "currenciesAccepted": "USD",
    "potentialAction": {
        "@type": "ReserveAction",
        "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://charcoalnchill.com/contact#reserve",
            "inLanguage": "en-US",
            "actionPlatform": [
                "http://schema.org/DesktopWebPlatform",
                "http://schema.org/IOSPlatform",
                "http://schema.org/AndroidPlatform"
            ]
        },
        "name": "Book Table"
    },
    "starRating": {
        "@type": "Rating",
        "ratingValue": "4.7"
    },
    "smokingAllowed": true,
    "review": [
        {
            "@type": "Review",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5"
            },
            "author": {
                "@type": "Person",
                "name": "Local Guide"
            },
            "reviewBody": "Amazing hookah experience with smooth pulls and great flavors. The food is also top tier - chicken 65 is a must try."
        }
    ]
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

export function getArticleSchema(post: { id: string; title: string; image: string; date: string; author: string; excerpt: string }, faqs?: { q: string; a: string }[]) {
    const article = {
        "@type": "BlogPosting",
        "headline": post.title,
        "image": [post.image],
        "datePublished": post.date,
        "author": {
            "@type": "Person",
            "name": post.author
        },
        "description": post.excerpt,
        "publisher": {
            "@type": "Organization",
            "name": "Charcoal N Chill",
            "logo": {
                "@type": "ImageObject",
                "url": "https://charcoalnchill.com/logo.png"
            }
        }
    };

    if (faqs && faqs.length > 0) {
        return {
            "@context": "https://schema.org",
            "@graph": [
                article,
                {
                    "@type": "FAQPage",
                    "mainEntity": faqs.map(faq => ({
                        "@type": "Question",
                        "name": faq.q,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": faq.a
                        }
                    }))
                }
            ]
        };
    }

    return {
        "@context": "https://schema.org",
        ...article
    };
}
