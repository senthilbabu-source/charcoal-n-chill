
export interface MenuItem {
    name: string;
    price: string;
    desc: string;
    dietary?: ('veg' | 'halal' | 'gf')[];
    pairsWith?: { name: string; type: 'drink' | 'food' };
}

export const menuItems: Record<string, MenuItem[]> = {
    appetizers: [
        { name: "Chicken Tenders", price: "$13.95", desc: "Crispy golden tenders with choice of dipping sauce", dietary: ['halal'], pairsWith: { name: "Mojito", type: "drink" } },
        { name: "Veg Spring Rolls", price: "$9.95", desc: "Fresh vegetables wrapped and fried to perfection", dietary: ['veg'] },
        { name: "Chill Chips & Dips", price: "$9.95", desc: "House-made chips with trio of signature dips", dietary: ['veg', 'gf'] },
        { name: "Cauliflower Bites", price: "$10.95", desc: "Crispy battered cauliflower florets", dietary: ['veg'] },
        { name: "Truffle Cloud Fries", price: "$9.95", desc: "Hand-cut fries with truffle oil and parmesan", dietary: ['veg', 'gf'] },
        { name: "Egg Pepper Roast", price: "$9.95", desc: "Spiced hard-boiled eggs in pepper masala", dietary: ['gf', 'veg'], pairsWith: { name: "Kingfisher Beer", type: "drink" } },
        { name: "Omelette", price: "$9.95", desc: "Fluffy omelette with fresh herbs and spices", dietary: ['gf', 'veg'] },
        { name: "Crispy Corn", price: "$9.95", desc: "Sweet corn kernels tossed in Indo-Chinese spices", dietary: ['veg'] },
        { name: "Pappad Masala", price: "$6", desc: "Crispy lentil crackers with onion and tomato topping", dietary: ['veg', 'gf'] },
        { name: "Peanut Masala", price: "$9.95", desc: "Roasted peanuts in spicy masala", dietary: ['veg', 'gf'] },
        { name: "Wings", price: "$13.95", desc: "Jumbo wings in Buffalo, Lemon Pepper, BBQ, Honey Chili, or Honey Mustard", dietary: ['halal', 'gf'] },
        { name: "Chili Paneer", price: "$14.95", desc: "Indo-Chinese cottage cheese with bell peppers and onions", dietary: ['veg'] },
        { name: "Paneer 65", price: "$14.95", desc: "Spicy deep-fried cottage cheese cubes", dietary: ['veg', 'gf'] },
        { name: "Pepper Chicken", price: "$15.95", desc: "Tender chicken in black pepper sauce", dietary: ['halal', 'gf'] },
        { name: "Chili Chicken", price: "$15.95", desc: "Indo-Chinese chicken with peppers and sauce", dietary: ['halal'] },
        { name: "Chicken 65", price: "$15.95", desc: "Indo-Chinese spicy fried chicken", dietary: ['halal', 'gf'] },
        { name: "Shrimp Pepper Fry", price: "$18.95", desc: "Jumbo shrimp in peppercorn sauce", dietary: ['gf'] },
        { name: "Chili Shrimp", price: "$18.95", desc: "Spicy Indo-Chinese style shrimp" },
        { name: "Shrimp 65", price: "$18.95", desc: "Crispy fried shrimp Indo-Chinese style", dietary: ['gf'] },
    ],
    entrees: [
        { name: "Veg Fried Rice", price: "$13.95", desc: "Wok-tossed rice with seasonal vegetables", dietary: ['veg'] },
        { name: "Egg Fried Rice", price: "$14.95", desc: "Classic fried rice with scrambled eggs", dietary: ['veg'] },
        { name: "Chicken Fried Rice", price: "$15.95", desc: "Tender chicken with aromatic fried rice", dietary: ['halal'] },
        { name: "Shrimp Fried Rice", price: "$18.95", desc: "Jumbo shrimp with vegetables and rice" },
        { name: "Maggi", price: "$9.95", desc: "Indo-American style instant noodles with spices", dietary: ['veg'] },
        { name: "Paneer Butter Masala", price: "$14", desc: "Cottage cheese in creamy tomato sauce, served with naan", dietary: ['veg', 'gf'] },
        { name: "Butter Chicken", price: "$15.95", desc: "Tender chicken in rich butter sauce, served with naan", dietary: ['halal', 'gf'] },
        { name: "Naan", price: "$3.00", desc: "Fresh-baked Tandoori flatbread", dietary: ['veg'] },
    ],
    desserts: [
        { name: "Tiramisu Temptation", price: "$10.95", desc: "Classic Italian dessert with coffee-soaked layers", dietary: ['veg'] },
        { name: "Tres Leches Cake", price: "$10.00", desc: "Latin American three-milk sponge cake", dietary: ['veg'] },
        { name: "Gulab Jamun", price: "$6.95", desc: "Traditional milk dumplings in rose syrup", dietary: ['veg'] },
    ],
    drivers: [],
    cocktails: [
        { name: "Mocktails", price: "$10", desc: "Pina Colada, Mojito, Citrus & Vine, Sunriser", dietary: ['veg', 'gf'] },
        { name: "Signature Cocktails", price: "$16", desc: "Smoke Runner, Chocolate Lava Delight, Peach Bourbon Smash, Lemon Drop Martini, Espresso Martini, Whiskey Sour, Long Island, Moscow Mule, House Margarita, Bulleit Old Fashion", dietary: ['veg', 'gf'] },
        { name: "Premium Selection", price: "MP", desc: "Imported & Craft beers, Premium Spirits, and Bottle Service (Casamigos, Grey Goose, Don Julio 1942). Ask server for complete list.", dietary: ['veg', 'gf'] }
    ],
    hookah: [
        { name: "Standard Hookah", price: "$25", desc: "Choose from our extensive collection of classic and exotic flavors. 50+ flavors to choose from. (Refill $15)", pairsWith: { name: "Mint Tea", type: "drink" } },
        { name: "Breeze Titanic", price: "$40", desc: "A refreshing oceanic blend of icy mint and tropical waves, with hints of cucumber and melon. (Refill $20)", pairsWith: { name: "Mojito", type: "drink" } },
        { name: "CNC Special", price: "$40", desc: "Signature blend combining exotic spices, sweet vanilla cream, and a whisper of cardamom. (Refill $20)", pairsWith: { name: "Masala Chai", type: "drink" } },
        { name: "Mint Mocha", price: "$40", desc: "Decadent dark chocolate meets cool peppermint, finished with espresso undertones. (Refill $20)", pairsWith: { name: "Espresso Martini", type: "drink" } },
        { name: "Queen of Chaotic", price: "$40", desc: "Bold fusion of wild berries, passion fruit, and dragon fruit with a twist of rose petals. (Refill $20)", pairsWith: { name: "Cosmopolitan", type: "drink" } },
        { name: "Savior Surprise", price: "$40", desc: "Mystery meets mastery in this ever-evolving blend of premium fruits and exotic florals. (Refill $20)", pairsWith: { name: "Mystery Mocktail", type: "drink" } },
        { name: "The Exotic Edit", price: "$40", desc: "Symphony of saffron, pistachio, and honey with subtle notes of jasmine. (Refill $20)", pairsWith: { name: "Saffron Milk Cake", type: "food" } }
    ]
};

export const categoryImages = {
    appetizers: "/images/chicken-65.jpg",
    entrees: "/images/butter-chicken.jpg",
    desserts: "/images/dessert-cnc.jpg",
    cocktails: "/images/cocktails.jpg",
    hookah: "/images/hookah-cnc.jpg"
};
