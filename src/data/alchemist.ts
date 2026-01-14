import { Flame, Snowflake, Zap, Heart, Coffee, Sun, LucideIcon } from "lucide-react";

export type Mood = "Chill" | "Energetic" | "Romantic" | "Focused" | "Adventurous" | "Social";
export type FlavorProfile = "Fruity" | "Minty" | "Creamy" | "Spicy" | "Floral" | "Citrus";

export interface MixRecipe {
    id: string;
    name: string;
    description: string;
    ingredients: string[];
    moods: Mood[];
    profiles: FlavorProfile[];
    color: string; // Hex for gradient
    strength: "Mild" | "Medium" | "Strong";
}

export const moods: { id: Mood; label: string; icon: LucideIcon; color: string }[] = [
    { id: "Chill", label: "Relaxed & Low Key", icon: Snowflake, color: "#a8e6cf" }, // Mint/Pastel Green
    { id: "Energetic", label: "Hype & Ready", icon: Zap, color: "#ff8b94" }, // Energetic Red/Pink
    { id: "Social", label: "Vibing with Friends", icon: Sun, color: "#fdffab" }, // Sunny Yellow
    { id: "Romantic", label: "Date Night", icon: Heart, color: "#ffaaa5" }, // Soft Red
    { id: "Adventurous", label: "Surprise Me", icon: Flame, color: "#ffd3b6" }, // Orange
    { id: "Focused", label: "Deep Convo", icon: Coffee, color: "#dcedc1" }, // Calm Green
];

export const flavorProfiles: { id: FlavorProfile; label: string; description: string }[] = [
    { id: "Fruity", label: "Sweet & Fruity", description: "Berry, Melon, Peach vibes" },
    { id: "Minty", label: "Ice Cold", description: "Refreshing & Crisp" },
    { id: "Citrus", label: "Zesty Citrus", description: "Lemon, Orange, Grapefruit" },
    { id: "Creamy", label: "Smooth & Creamy", description: "Vanilla, Coffee, Dessert" },
    { id: "Floral", label: "Floral & Aromatic", description: "Rose, Jasmine, Pan" },
    { id: "Spicy", label: "Spiced & Bold", description: "Chai, Cinnamon, Cardamom" },
];

export const mixRecipes: MixRecipe[] = [
    {
        id: "blue-mist-magic",
        name: "Miami Midnight",
        description: "A legendary crowd-pleaser. Smooth blueberry notes with a refreshing icy finish. Perfect for long conversations.",
        ingredients: ["Blue Mist (Starbuzz)", "Simply Mint", "Ice Hose"],
        moods: ["Chill", "Social", "Focused"],
        profiles: ["Fruity", "Minty"],
        color: "#3b82f6", // Blue
        strength: "Mild"
    },
    {
        id: "love-66-remix",
        name: "Velvet Crush",
        description: "A passionate blend of melon, passion fruit, and mint. Sweet, vibrant, and impossible to forget.",
        ingredients: ["Love 66 (Adalya)", "Lady Killer", "Watermelon"],
        moods: ["Romantic", "Energetic", "Social"],
        profiles: ["Fruity", "Minty"],
        color: "#ec4899", // Pink
        strength: "Medium"
    },
    {
        id: "citrus-explosion",
        name: "Electric Sunset",
        description: "Wake up your senses. A zesty collision of orange, lemon, and a secret mint blend.",
        ingredients: ["Orange", "Lemon Mint", "Grapefruit"],
        moods: ["Energetic", "Adventurous"],
        profiles: ["Citrus", "Minty"],
        color: "#f97316", // Orange
        strength: "Strong"
    },
    {
        id: "creamy-chai",
        name: "Golden Hour",
        description: "Smooth, rich, and comforting. Spiced chai notes with a vanilla undertone. A dessert you can smoke.",
        ingredients: ["Spiced Chai", "French Vanilla", "Milk Base"],
        moods: ["Chill", "Focused"],
        profiles: ["Creamy", "Spicy"],
        color: "#d4af37", // Gold
        strength: "Medium"
    },
    {
        id: "paan-rasna",
        name: "The Royal Paan",
        description: "An exotic journey. Traditional Paan flavors balanced with sweet floral notes. For the true connoisseur.",
        ingredients: ["Paan Raas", "Spring Water", "Rose"],
        moods: ["Adventurous", "Focused"],
        profiles: ["Floral", "Spicy"],
        color: "#10b981", // Emerald
        strength: "Strong"
    },
    {
        id: "peach-party",
        name: "Peachy Keen",
        description: "Summer vibes all year round. Sweet peach with a hint of cool mist.",
        ingredients: ["White Peach", "Fuzzy Navel", "Mint"],
        moods: ["Social", "Energetic", "Chill"],
        profiles: ["Fruity", "Minty"],
        color: "#fb923c", // Peach
        strength: "Mild"
    }
];

export function generateMix(mood: Mood, profile: FlavorProfile): MixRecipe {
    // Logic to find best match
    // 1. Exact Match (Mood + Profile)
    // 2. Profile Match
    // 3. Fallback to a popular one

    let match = mixRecipes.find(r => r.moods.includes(mood) && r.profiles.includes(profile));

    if (!match) {
        match = mixRecipes.find(r => r.profiles.includes(profile));
    }

    if (!match) {
        // Fallback based on mood alone just in case
        match = mixRecipes.find(r => r.moods.includes(mood));
    }

    return match || mixRecipes[0]; // Ultimate fallback
}
