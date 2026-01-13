
export const menuItems = {
    appetizers: [
        { name: "Chicken Tenders", price: "$8", desc: "Crispy golden tenders with choice of dipping sauce" },
        { name: "Veg Spring Rolls", price: "$7", desc: "Fresh vegetables wrapped and fried to perfection" },
        { name: "Chill Chips & Dips", price: "$6", desc: "House-made chips with trio of signature dips" },
        { name: "Cauliflower Bites", price: "$8", desc: "Crispy battered cauliflower florets" },
        { name: "Truffle Cloud Fries", price: "$9", desc: "Hand-cut fries with truffle oil and parmesan" },
        { name: "Egg Pepper Roast", price: "$8", desc: "Spiced hard-boiled eggs in pepper masala" },
        { name: "Omelette", price: "$7", desc: "Fluffy omelette with fresh herbs and spices" },
        { name: "Crispy Corn", price: "$8", desc: "Sweet corn kernels tossed in Indo-Chinese spices" },
        { name: "Pappad Masala", price: "$6", desc: "Crispy lentil crackers with onion and tomato topping" },
        { name: "Peanut Masala", price: "$6", desc: "Roasted peanuts in spicy masala" },
        { name: "Wings", price: "$10", desc: "Jumbo wings in Buffalo, Lemon Pepper, BBQ, Honey Chilli, or Honey Mustard" },
        { name: "Paneer Chilli", price: "$10", desc: "Indo-Chinese cottage cheese with bell peppers and onions" },
        { name: "Paneer 65", price: "$10", desc: "Spicy deep-fried cottage cheese cubes" },
        { name: "Chicken Pepper", price: "$11", desc: "Tender chicken in black pepper sauce" },
        { name: "Chicken Chili", price: "$11", desc: "Indo-Chinese chicken with peppers and sauce" },
        { name: "Chicken 65", price: "$11", desc: "Indo-Chinese spicy fried chicken" },
        { name: "Shrimp Pepper", price: "$13", desc: "Jumbo shrimp in peppercorn sauce" },
        { name: "Shrimp Chili", price: "$13", desc: "Spicy Indo-Chinese style shrimp" },
        { name: "Shrimp 65", price: "$13", desc: "Crispy fried shrimp Indo-Chinese style" },
    ],
    entrees: [
        { name: "Veg Fried Rice", price: "$11", desc: "Wok-tossed rice with seasonal vegetables" },
        { name: "Egg Fried Rice", price: "$12", desc: "Classic fried rice with scrambled eggs" },
        { name: "Chicken Fried Rice", price: "$13", desc: "Tender chicken with aromatic fried rice" },
        { name: "Shrimp Fried Rice", price: "$15", desc: "Jumbo shrimp with vegetables and rice" },
        { name: "Maggi", price: "$8", desc: "Indo-American style instant noodles with spices" },
        { name: "Paneer Butter Masala", price: "$14", desc: "Cottage cheese in creamy tomato sauce, served with naan" },
        { name: "Butter Chicken Masala", price: "$16", desc: "Tender chicken in rich butter sauce, served with naan" },
        { name: "Naan", price: "$3", desc: "Fresh-baked Tandoori flatbread" },
    ],
    desserts: [
        { name: "Tiramisu Temptation", price: "$8", desc: "Classic Italian dessert with coffee-soaked layers" },
        { name: "Tres Lechesss Cake", price: "$7", desc: "Latin American three-milk sponge cake" },
        { name: "Gulab Jamun", price: "$6", desc: "Traditional milk dumplings in rose syrup" },
    ],
    drivers: [], // Placeholder to prevent types if strictly typed, but seemingly loose
    cocktails: [
        { name: "Mocktails", price: "$8", desc: "Pina Colada, Mojito, Citrus & Vine, Sunriser" },
        { name: "Signature Cocktails", price: "$16", desc: "Smoke Runner, Chocolate Lava Delight, Peach Bourbon Smash, Lemon Drop Martini, Espresso Martini, Whiskey Sour, Long Island, Moscow Mule, House Margarita, Bulleit Old Fashion" },
        { name: "Premium Selection", price: "MP", desc: "Imported & Craft beers, Premium Spirits, and Bottle Service (Casamigos, Grey Goose, Don Julio 1942). Ask server for complete list." }
    ],
    hookah: [
        { name: "Standard Hookah", price: "$25", desc: "Choose from our extensive collection of classic and exotic flavors. 50+ flavors to choose from. (Refill $15)" },
        { name: "Breeze Titanic", price: "$40", desc: "A refreshing oceanic blend of icy mint and tropical waves, with hints of cucumber and melon. (Refill $20)" },
        { name: "CNC Special", price: "$40", desc: "Signature blend combining exotic spices, sweet vanilla cream, and a whisper of cardamom. (Refill $20)" },
        { name: "Mint Mocha", price: "$40", desc: "Decadent dark chocolate meets cool peppermint, finished with espresso undertones. (Refill $20)" },
        { name: "Queen of Chaotic", price: "$40", desc: "Bold fusion of wild berries, passion fruit, and dragon fruit with a twist of rose petals. (Refill $20)" },
        { name: "Savior Surprise", price: "$40", desc: "Mystery meets mastery in this ever-evolving blend of premium fruits and exotic florals. (Refill $20)" },
        { name: "The Exotic Edit", price: "$40", desc: "Symphony of saffron, pistachio, and honey with subtle notes of jasmine. (Refill $20)" }
    ]
};

export const categoryImages = {
    appetizers: "/images/chicken-65.jpg",
    entrees: "/images/butter-chicken.jpg",
    desserts: "/images/dessert-cnc.jpg",
    cocktails: "/images/cocktails.jpg",
    hookah: "/images/hookah-cnc.jpg"
};
