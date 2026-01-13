import { constructMetadata } from "@/lib/metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd, getBreadcrumbSchema } from "@/components/layout/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AboutHero } from "@/components/about/AboutHero";
import { StorySection } from "@/components/about/StorySection";
import { FeaturesGrid } from "@/components/about/FeaturesGrid";

export const metadata = constructMetadata({
    title: "About Us | Atlanta's Premier Hookah Lounge & Social Hub",
    description: "Learn about Charcoal N Chill, Alpharetta's premier hookah lounge since 2015. Luxury Versace seating, Indo-American Eats by Chef Ajay, live entertainment.",
    path: "/about",
    keywords: ["about Charcoal N Chill", "best lounge Alpharetta", "Indo-American restaurant founders", "hookah lounge story"]
});

export default function AboutPage() {
    return (
        <>
            <JsonLd data={getBreadcrumbSchema([{ name: "About", item: "/about" }])} id="breadcrumb-about" />
            <Header />
            <main className="bg-dark-primary">
                {/* Hero Section */}
                <AboutHero />

                <div className="bg-dark-primary relative z-10 border-t border-white/5 -mt-8 rounded-t-[3rem]">
                    <div className="container mx-auto px-4 pt-8">
                        <Breadcrumbs items={[{ label: "About", href: "/about" }]} />
                    </div>

                    {/* Story Section */}
                    <StorySection />

                    {/* Features & Commitments */}
                    <FeaturesGrid />
                </div>
            </main>
            <Footer />
        </>
    );
}
