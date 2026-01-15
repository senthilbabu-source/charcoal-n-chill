
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd, getBreadcrumbSchema } from "@/components/layout/JsonLd";
import { Section } from "@/components/ui/Section";

import { MenuHero } from "@/components/menu/MenuHero";
import { MenuExplorer } from "@/components/menu/MenuExplorer";
import { AlchemistFlow } from "@/components/gamification/AlchemistFlow";
import { menuItems } from "@/data/menu";
import { SecretHunt } from "@/components/gamification/SecretHunt";

import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
    title: "Our Menu | Charcoal N Chill",
    description: "Explore our diverse menu featuring Indo-American fusion, premium hookah flavors, and craft cocktails.",
    path: "/menu"
});

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

            {/* Rich Snippet Recipe Schemas for Top Dishes */}
            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "Recipe",
                "name": "Butter Chicken Masala",
                "image": "https://charcoalnchill.com/images/butter-chicken.jpg",
                "author": { "@type": "Organization", "name": "Charcoal N Chill" },
                "datePublished": "2024-01-01",
                "description": "Our signature creamy tomato curry with tender tandoori chicken. A local favorite in Alpharetta.",
                "prepTime": "PT20M",
                "cookTime": "PT30M",
                "totalTime": "PT50M",
                "recipeYield": "1 serving",
                "recipeCategory": "Main Course",
                "recipeCuisine": "Indian",
                "keywords": "butter chicken, indian food alpharetta, best curry",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "128"
                },
                "nutrition": { "@type": "NutritionInformation", "calories": "450 calories" }
            }} id="recipe-butter-chicken" />

            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "Recipe",
                "name": "Chicken 65",
                "image": "https://charcoalnchill.com/images/chicken-65.jpg",
                "author": { "@type": "Organization", "name": "Charcoal N Chill" },
                "datePublished": "2024-01-01",
                "description": "Crispy, spicy, deep-fried chicken with curry leaves and green chilies. The perfect hookah appetizer.",
                "prepTime": "PT15M",
                "cookTime": "PT15M",
                "totalTime": "PT30M",
                "recipeYield": "1 serving",
                "recipeCategory": "Appetizer",
                "recipeCuisine": "Indo-Chinese",
                "keywords": "chicken 65, spicy chicken, hookah appetizers",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "reviewCount": "96"
                }
            }} id="recipe-chicken-65" />

            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "Recipe",
                "name": "Gulab Jamun",
                "image": "https://charcoalnchill.com/images/dessert-cnc.jpg",
                "author": { "@type": "Organization", "name": "Charcoal N Chill" },
                "datePublished": "2024-01-01",
                "description": "Warm milk solids soaked in rose-flavored sugar syrup. The ultimate sweet ending.",
                "prepTime": "PT10M",
                "cookTime": "PT20M",
                "totalTime": "PT30M",
                "recipeYield": "2 pieces",
                "recipeCategory": "Dessert",
                "recipeCuisine": "Indian",
                "keywords": "gulab jamun, indian dessert, sweet cravings",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "150"
                }
            }} id="recipe-gulab-jamun" />
            <Header />
            <main className="bg-dark-primary">
                {/* Hero Section */}
                <MenuHero />

                <div className="flex justify-center -mt-10 relative z-20 pointer-events-none">
                    <div className="pointer-events-auto">
                        <SecretHunt id="menu_ember" locationName="the Menu Page" />
                    </div>
                </div>

                <Section id="finder">
                    <AlchemistFlow />
                </Section>

                {/* Interactive Menu Explorer (Client Component) */}
                <MenuExplorer />
            </main>
            <Footer />
        </>
    );
}
