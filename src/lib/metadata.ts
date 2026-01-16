import { Metadata } from "next";

export const BASE_URL = "https://charcoalnchill.com";

interface MetadataProps {
    title: string;
    description: string;
    path: string;
    image?: string;
    keywords?: string[];
    type?: "website" | "article"; // standard types
}

export function constructMetadata({
    title,
    description,
    path,
    image = "/og-image.jpg",
    keywords = [],
    type = "website",
}: MetadataProps): Metadata {
    const url = `${BASE_URL}${path}`;

    return {
        title,
        description,
        keywords: [
            "hookah lounge Alpharetta",
            "Indo-American restaurant Alpharetta",
            "hookah bar near me",
            "late night hookah",
            "VIP lounge",
            "craft cocktails Alpharetta",
            "belly dancing restaurant Atlanta",
            ...keywords,
        ],
        openGraph: {
            title,
            description,
            url,
            siteName: "Charcoal N Chill",
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            locale: "en_US",
            type: type, // No cast needed if restricted to valid types
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image === "/og-image.jpg" ? "/twitter-image.jpg" : image],
        },
        other: {
            "geo.region": "US-GA",
            "geo.placename": "Alpharetta",
            "geo.position": "34.0753762;-84.2940899",
            ICBM: "34.0753762, -84.2940899",
        },
        alternates: {
            canonical: url,
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}
