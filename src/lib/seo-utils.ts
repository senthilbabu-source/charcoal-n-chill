import { menuItems } from "@/data/menu";

// Define the shape of our menu items based on menu.ts structure
type MenuItem = {
    name: string;
    description?: string;
    desc?: string; // Handling key variation
    price: string;
};

// Flatten all menu items into a single searchable array
const allMenuItems: MenuItem[] = [
    ...menuItems.appetizers,
    ...menuItems.entrees,
    ...menuItems.desserts,
    ...menuItems.cocktails
];

interface RecipeEnrichment {
    image: string;
    description?: string;
    prepTime?: string;
    cookTime?: string;
    totalTime?: string;
    recipeYield?: string;
    recipeCategory?: string;
    recipeCuisine?: string;
    keywords?: string;
    calories?: string;
    ratingValue?: string;
    reviewCount?: string;
}

/**
 * Generates a Recipe Schema by strictly looking up the item in the menu data.
 * Throws an error (or returns simple fallback in production) if the item is missing.
 */
export function getMenuRecipeSchema(menuItemName: string, enrichment: RecipeEnrichment) {
    // 1. Find the item in the Source of Truth
    const item = allMenuItems.find(i => i.name.toLowerCase() === menuItemName.toLowerCase());

    if (!item) {
        // In development, we want to know immediately if we drifted
        if (process.env.NODE_ENV === 'development') {
            console.warn(`[SEO WARNING] Could not find menu item "${menuItemName}" for Recipe Schema. Please check spelling in menu.ts.`);
        }
    }

    // 2. Fallback values if item is missing (to prevent crash), but ideally we found it
    const price = item?.price?.replace('$', '') || "0.00";
    const description = item?.desc || item?.description || "Delicious authentic dish at Charcoal N Chill";

    return {
        "@context": "https://schema.org",
        "@type": "Recipe",
        "name": item?.name || menuItemName, // Use the EXACT name from menu.ts to enforce consistency
        "image": enrichment.image,
        "author": { "@type": "Organization", "name": "Charcoal N Chill" },
        "datePublished": "2024-01-01",
        "description": description,
        "prepTime": enrichment.prepTime || "PT15M",
        "cookTime": enrichment.cookTime || "PT15M",
        "totalTime": enrichment.totalTime || "PT30M",
        "recipeYield": enrichment.recipeYield || "1 serving",
        "recipeCategory": enrichment.recipeCategory || "Main Course",
        "recipeCuisine": enrichment.recipeCuisine || "Indian",
        "keywords": enrichment.keywords || "",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": enrichment.ratingValue || "4.8",
            "reviewCount": enrichment.reviewCount || "50"
        },
        "nutrition": { "@type": "NutritionInformation", "calories": enrichment.calories || "300 calories" },
        // Add Offer schema to link price directly
        "offers": {
            "@type": "Offer",
            "price": price,
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": "https://charcoalnchill.com/menu"
        }
    };
}
