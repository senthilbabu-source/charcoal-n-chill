import { constructMetadata } from "@/lib/metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd, getBreadcrumbSchema } from "@/components/layout/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { MenuHero } from "@/components/menu/MenuHero";
import { MenuExplorer } from "@/components/menu/MenuExplorer";
import { menuItems } from "@/data/menu";

// ... existing metadata ...

const menuSchema = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": "Charcoal N Chill Menu",
    "description": "Indo-American Eats, American Classics, 50+ hookah flavors, craft cocktails",
    "hasMenuSection": [
        {
            "@type": "MenuSection",
            "name": "Appetizers",
            "hasMenuItem": menuItems.appetizers.map(item => ({
                "@type": "MenuItem",
                "name": item.name,
                "description": item.desc,
                "offers": { "@type": "Offer", "price": item.price.replace('$', ''), "priceCurrency": "USD" }
            }))
        },
        {
            "@type": "MenuSection",
            "name": "Main Entrees",
            "hasMenuItem": menuItems.entrees.map(item => ({
                "@type": "MenuItem",
                "name": item.name,
                "description": item.desc,
                "offers": { "@type": "Offer", "price": item.price.replace('$', ''), "priceCurrency": "USD" }
            }))
        },
        {
            "@type": "MenuSection",
            "name": "Desserts",
            "hasMenuItem": menuItems.desserts.map(item => ({
                "@type": "MenuItem",
                "name": item.name,
                "description": item.desc,
                "offers": { "@type": "Offer", "price": item.price.replace('$', ''), "priceCurrency": "USD" }
            }))
        }
    ]
};

export default function MenuPage() {
    return (
        <>
            <JsonLd data={menuSchema} />
            <JsonLd data={getBreadcrumbSchema([{ name: "Menu", item: "/menu" }])} id="breadcrumb-menu" />
            <Header />
            <main className="bg-dark-primary">
                {/* Hero Section */}
                <MenuHero />

                {/* Interactive Menu Explorer (Client Component) */}
                <MenuExplorer />
            </main>
            <Footer />
        </>
    );
}
