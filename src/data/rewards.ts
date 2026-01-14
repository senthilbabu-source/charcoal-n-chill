export interface Reward {
    id: string;
    label: string;
    description: string;
    probability: number; // 0-100
    color: string;
    textColor: string;
}

export const rewards: Reward[] = [
    {
        id: "free-app",
        label: "Free Appetizer",
        description: "Chef's Choice Appetizer on the house.",
        probability: 10,
        color: "#D4AF37", // Gold
        textColor: "#000000"
    },
    {
        id: "10-off",
        label: "10% Off VIP",
        description: "10% Discount on VIP Section Booking.",
        probability: 20,
        color: "#1a1a1a", // Black
        textColor: "#D4AF37" // Gold text
    },
    {
        id: "flavor-upgrade",
        label: "Flavor Upgrade",
        description: "Free upgrade to a Premium Flavor.",
        probability: 30,
        color: "#D4AF37",
        textColor: "#000000"
    },
    {
        id: "soft-drink",
        label: "Free Drink",
        description: "Complimentary Soft Drink or Tea.",
        probability: 25,
        color: "#1a1a1a",
        textColor: "#D4AF37"
    },
    {
        id: "mystery",
        label: "Mystery Prize",
        description: "Ask your server what you won!",
        probability: 15,
        color: "#D4AF37",
        textColor: "#000000"
    }
];

// Helper to determine winner based on weights
export function spinWheel(): Reward {
    const totalWeight = rewards.reduce((sum, item) => sum + item.probability, 0);
    const random = Math.random() * totalWeight;

    let currentWeight = 0;
    for (const reward of rewards) {
        currentWeight += reward.probability;
        if (random <= currentWeight) {
            return reward;
        }
    }

    return rewards[0]; // Fallback
}
