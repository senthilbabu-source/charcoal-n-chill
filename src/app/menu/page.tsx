import { constructMetadata } from "@/lib/metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { JsonLd, getBreadcrumbSchema } from "@/components/layout/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Flame, Utensils, GlassWater, Wind } from "lucide-react";
import Image from "next/image";

export const metadata = constructMetadata({
    title: "Menu | Authentic Indian Food, Premium Hookah & Craft Cocktails",
    description: "Explore the Charcoal N Chill menu in Alpharetta: authentic Indian curries, 50+ premium hookah flavors, and artisan cocktails. Perfect for late-night dining.",
    path: "/menu",
    keywords: ["Indian food menu Alpharetta", "hookah flavors list", "best curries Alpharetta", "cocktail lounge menu"]
});

const menuSchema = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": "Charcoal N Chill Menu",
    "description": "Authentic Indian cuisine, 50+ hookah flavors, craft cocktails",
    "hasMenuSection": [
        {
            "@type": "MenuSection",
            "name": "Appetizers",
            "hasMenuItem": [
                { "@type": "MenuItem", "name": "Chicken 65", "description": "South Indian spicy fried chicken", "offers": { "@type": "Offer", "price": "11.00", "priceCurrency": "USD" } },
                { "@type": "MenuItem", "name": "Paneer 65", "description": "Spicy deep-fried cottage cheese cubes", "offers": { "@type": "Offer", "price": "10.00", "priceCurrency": "USD" } }
            ]
        }
    ]
};

const menuItems = {
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
        { name: "Chicken 65", price: "$11", desc: "South Indian spicy fried chicken" },
        { name: "Shrimp Pepper", price: "$13", desc: "Jumbo shrimp in peppercorn sauce" },
        { name: "Shrimp Chili", price: "$13", desc: "Spicy Indo-Chinese style shrimp" },
        { name: "Shrimp 65", price: "$13", desc: "Crispy fried shrimp South Indian style" },
    ],
    entrees: [
        { name: "Veg Fried Rice", price: "$11", desc: "Wok-tossed rice with seasonal vegetables" },
        { name: "Egg Fried Rice", price: "$12", desc: "Classic fried rice with scrambled eggs" },
        { name: "Chicken Fried Rice", price: "$13", desc: "Tender chicken with aromatic fried rice" },
        { name: "Shrimp Fried Rice", price: "$15", desc: "Jumbo shrimp with vegetables and rice" },
        { name: "Maggi", price: "$8", desc: "Indian-style instant noodles with spices" },
        { name: "Paneer Butter Masala", price: "$14", desc: "Cottage cheese in creamy tomato sauce, served with naan" },
        { name: "Butter Chicken Masala", price: "$16", desc: "Tender chicken in rich butter sauce, served with naan" },
        { name: "Naan", price: "$3", desc: "Fresh-baked Indian flatbread" },
    ],
    desserts: [
        { name: "Tiramisu Temptation", price: "$8", desc: "Classic Italian dessert with coffee-soaked layers" },
        { name: "Tres Lechesss Cake", price: "$7", desc: "Latin American three-milk sponge cake" },
        { name: "Gulab Jamun", price: "$6", desc: "Traditional Indian milk dumplings in rose syrup" },
    ],
};

const categoryImages = {
    appetizers: "/images/chicken-65.jpg",
    entrees: "/images/butter-chicken.jpg",
    desserts: "/images/lounge-atmosphere.jpg",
    drinks: "/images/craft-cocktails.jpg",
    hookah: "/images/signature-hookah.jpg"
};

export default function MenuPage() {
    return (
        <>
            <JsonLd data={menuSchema} />
            <JsonLd data={getBreadcrumbSchema([{ name: "Menu", item: "/menu" }])} id="breadcrumb-menu" />
            <Header />
            <main className="pt-20">
                <Breadcrumbs items={[{ label: "Menu", href: "/menu" }]} />

                {/* Hero Section */}
                <section className="bg-[#031322] py-24 md:py-32 border-b border-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-red/5 to-transparent opacity-50" />
                    <div className="container px-4 md:px-6 text-center relative z-10 space-y-6">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white uppercase tracking-tighter leading-none mb-4">
                            Our <span className="text-gold text-glow">Menu</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-xl text-gray-400">
                            Discover a fusion of authentic Indian flavors, premium hookah, and artisan cocktails.
                        </p>
                    </div>
                </section>

                {/* Categories Navigation */}
                <div className="sticky top-16 md:top-[72px] bg-[#031322]/95 backdrop-blur-md z-40 border-b border-white/5 overflow-x-auto no-scrollbar">
                    <div className="container mx-auto flex items-center justify-center gap-10 py-6 min-w-max px-4">
                        {["Appetizers", "Entrees", "Desserts", "Drinks", "Hookah"].map((cat) => (
                            <a
                                key={cat}
                                href={`#${cat.toLowerCase()}`}
                                className="text-xs font-black text-gray-400 hover:text-gold transition-all uppercase tracking-[0.2em]"
                            >
                                {cat}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Appetizers */}
                <Section id="appetizers" className="bg-[#031322]">
                    <div className="relative w-full h-[400px] mb-20 rounded-[3rem] overflow-hidden group">
                        <Image
                            src={categoryImages.appetizers}
                            alt="Authentic Indian Appetizers"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-6">
                            <Utensils className="w-12 h-12 text-gold gold-glow mb-4" />
                            <h2 className="text-5xl md:text-6xl font-heading font-black text-white uppercase tracking-tight">Appetizers</h2>
                            <div className="w-16 h-[1px] bg-gold mt-4" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {menuItems.appetizers.map((item, i) => (
                            <div key={i} className="group p-8 bg-[#1e1e1e] rounded-3xl border border-white/5 hover:border-gold/20 transition-all duration-500 hover:gold-glow">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="font-black text-xl text-white uppercase tracking-wide group-hover:text-gold transition-colors leading-tight">{item.name}</h3>
                                    <span className="text-gold font-black text-lg">{item.price}</span>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* Entrees */}
                <Section id="entrees" className="bg-[#050F18]">
                    <div className="relative w-full h-[400px] mb-20 rounded-[3rem] overflow-hidden group">
                        <Image
                            src={categoryImages.entrees}
                            alt="Signature Indian Entrees"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-6">
                            <Flame className="w-12 h-12 text-gold gold-glow mb-4" />
                            <h2 className="text-5xl md:text-6xl font-heading font-black text-white uppercase tracking-tight">Main Entrees</h2>
                            <div className="w-16 h-[1px] bg-gold mt-4" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {menuItems.entrees.map((item, i) => (
                            <div key={i} className="group p-8 bg-charcoal rounded-3xl border border-white/5 hover:border-gold/20 transition-all duration-500 hover:gold-glow">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="font-black text-xl text-white uppercase tracking-wide group-hover:text-gold transition-colors leading-tight">{item.name}</h3>
                                    <span className="text-gold font-black text-lg">{item.price}</span>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* Desserts */}
                <Section id="desserts" className="bg-[#031322]">
                    <div className="relative w-full h-[400px] mb-20 rounded-[3rem] overflow-hidden group">
                        <Image
                            src={categoryImages.desserts}
                            alt="Decadent Desserts"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-6">
                            <Utensils className="w-12 h-12 text-gold gold-glow mb-4" />
                            <h2 className="text-5xl md:text-6xl font-heading font-black text-white uppercase tracking-tight">Desserts</h2>
                            <div className="w-16 h-[1px] bg-gold mt-4" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {menuItems.desserts.map((item, i) => (
                            <div key={i} className="group p-8 bg-black rounded-3xl border border-white/5 hover:border-gold/20 transition-all text-center">
                                <h3 className="font-black text-xl text-white mb-2 group-hover:text-gold transition-colors uppercase tracking-wide">{item.name}</h3>
                                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{item.desc}</p>
                                <span className="text-gold font-black text-lg">{item.price}</span>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* Drinks */}
                <Section id="drinks" className="bg-[#050F18]">
                    <div className="relative w-full h-[400px] mb-20 rounded-[3rem] overflow-hidden group">
                        <Image
                            src={categoryImages.drinks}
                            alt="Craft Cocktails and Mocktails"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-6">
                            <GlassWater className="w-12 h-12 text-gold gold-glow mb-4" />
                            <h2 className="text-5xl md:text-6xl font-heading font-black text-white uppercase tracking-tight">Craft Drinks</h2>
                            <div className="w-16 h-[1px] bg-gold mt-4" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="group p-8 bg-charcoal rounded-3xl border border-white/5 hover:border-gold/20 transition-all">
                            <h4 className="text-gold font-black mb-4 uppercase text-sm tracking-[0.2em]">Mocktails</h4>
                            <p className="text-gray-300 font-medium mb-4 leading-relaxed">Pina Colada, Mojito, Citrus & Vine, Sunriser</p>
                            <span className="text-gold font-black text-lg">$8</span>
                        </div>
                        <div className="group p-8 bg-charcoal rounded-3xl border border-white/5 hover:border-gold/20 transition-all">
                            <h4 className="text-gold font-black mb-4 uppercase text-sm tracking-[0.2em]">Cocktails</h4>
                            <p className="text-gray-300 font-medium mb-4 leading-relaxed">Smoke Runner, Chocolate Lava Delight, Peach Bourbon Smash, Lemon Drop Martini, Espresso Martini, Whiskey Sour, Long Island, Moscow Mule, House Margarita, Bulleit Old Fashion</p>
                            <span className="text-gold font-black text-lg">$11-$14</span>
                        </div>
                        <div className="group p-8 bg-charcoal rounded-3xl border border-brand-red/20 hover:border-brand-red/40 transition-all">
                            <h4 className="text-brand-red font-black mb-4 uppercase text-sm tracking-[0.2em]">Premium Selection</h4>
                            <p className="text-sm text-gray-400 leading-relaxed italic">Imported & Craft beers, Premium Spirits, and Bottle Service (Casamigos, Grey Goose, Don Julio 1942). Ask server for complete list.</p>
                        </div>
                    </div>
                </Section>

                {/* Premium Hookah Menu */}
                <Section id="hookah" className="bg-[#031322]">
                    <div className="relative w-full h-[500px] mb-20 rounded-[3rem] overflow-hidden group">
                        <Image
                            src={categoryImages.hookah}
                            alt="Premium Hookah Lounge - 50+ Flavors"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col items-center justify-center text-center p-6">
                            <Wind className="w-16 h-16 text-gold gold-glow mb-6 animate-pulse" />
                            <h2 className="text-6xl md:text-7xl font-heading font-black text-white uppercase tracking-tight mb-4">Premium Hookah</h2>
                            <div className="w-24 h-[2px] bg-gold mb-6" />
                            <p className="text-xl md:text-2xl text-gold font-bold uppercase tracking-widest">50+ Luxury Flavors</p>
                            <p className="text-gray-300 mt-4 max-w-2xl text-lg">Versace Couches • VIP Seating • Late-Night Service</p>
                        </div>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                        <div className="relative p-10 bg-gradient-to-br from-charcoal to-black rounded-[2rem] border-2 border-gold/20 overflow-hidden group hover:border-gold/40 transition-all">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/10 transition-all" />
                            <div className="relative z-10">
                                <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tight">Standard Hookah</h3>
                                <div className="flex items-baseline gap-3 mb-6">
                                    <span className="text-5xl font-black text-gold">$25</span>
                                    <span className="text-gray-400 text-sm uppercase tracking-wider">Refill $15</span>
                                </div>
                                <p className="text-gray-300 leading-relaxed">Choose from our extensive collection of classic and exotic flavors</p>
                            </div>
                        </div>
                        <div className="relative p-10 bg-gradient-to-br from-gold/10 to-black rounded-[2rem] border-2 border-gold/40 overflow-hidden group hover:border-gold/60 transition-all hover:gold-glow">
                            <div className="absolute -top-10 -right-10 text-9xl font-black text-gold/5 uppercase">VIP</div>
                            <div className="relative z-10">
                                <div className="inline-block px-4 py-1 bg-gold/20 rounded-full mb-4">
                                    <span className="text-gold text-xs font-black uppercase tracking-widest">Signature</span>
                                </div>
                                <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tight">House Curated Pick</h3>
                                <div className="flex items-baseline gap-3 mb-6">
                                    <span className="text-5xl font-black text-gold">$40</span>
                                    <span className="text-gray-400 text-sm uppercase tracking-wider">Refill $20</span>
                                </div>
                                <p className="text-gray-300 leading-relaxed">Exclusive blends crafted by our hookah masters</p>
                            </div>
                        </div>
                    </div>

                    {/* House Curated Picks - Featured */}
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
                                House <span className="text-gold text-glow">Curated</span> Picks
                            </h3>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Exclusive signature blends you won't find anywhere else</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { name: "Breeze Titanic", desc: "A refreshing oceanic blend of icy mint and tropical waves, with hints of cucumber and melon that transport you to a Mediterranean coastline" },
                                { name: "CNC Special", desc: "Our signature house blend combining exotic spices, sweet vanilla cream, and a whisper of cardamom - the essence of luxury in every puff" },
                                { name: "Mint Mocha", desc: "Decadent dark chocolate meets cool peppermint in this sophisticated blend, finished with espresso undertones for the ultimate indulgence" },
                                { name: "Queen of Chaotic", desc: "A bold fusion of wild berries, passion fruit, and dragon fruit with an unexpected twist of rose petals - beautifully unpredictable" },
                                { name: "Savior Surprise", desc: "Mystery meets mastery in this ever-evolving blend of premium fruits and exotic florals, curated fresh daily by our hookah artisans" },
                                { name: "The Exotic Edit", desc: "A carefully orchestrated symphony of saffron, pistachio, and honey with subtle notes of jasmine - pure Middle Eastern opulence" }
                            ].map((item, i) => (
                                <div key={i} className="group relative p-8 bg-gradient-to-br from-charcoal via-charcoal to-black rounded-3xl border border-gold/20 hover:border-gold/40 transition-all duration-500 overflow-hidden hover:gold-glow">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/10 transition-all" />
                                    <div className="relative z-10">
                                        <div className="flex items-start justify-between mb-4">
                                            <h4 className="font-black text-xl text-white uppercase tracking-wide group-hover:text-gold transition-colors leading-tight flex-1">{item.name}</h4>
                                            <Wind className="w-6 h-6 text-gold/40 group-hover:text-gold transition-colors flex-shrink-0 ml-3" />
                                        </div>
                                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                        <div className="mt-6 pt-6 border-t border-white/5">
                                            <span className="text-gold font-black text-lg">$40</span>
                                            <span className="text-gray-500 text-xs ml-2">• Refill $20</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Flavor Categories */}
                    <div className="space-y-16">
                        {/* Fruit Flavors */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-gold" />
                                <h3 className="text-3xl font-black text-white uppercase tracking-tight">Fruit Flavors</h3>
                                <div className="flex-1 h-[2px] bg-gradient-to-r from-gold to-transparent" />
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                <div className="space-y-3">
                                    <h4 className="text-gold font-black text-sm uppercase tracking-wider mb-4">Classic Fruits</h4>
                                    {["Apple", "Watermelon", "Strawberry", "Peach", "Mango", "Pineapple", "Cherry", "Blueberry", "Grape", "Orange", "Lemon"].map((flavor, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 bg-charcoal/50 rounded-xl hover:bg-charcoal transition-all group">
                                            <div className="w-1.5 h-1.5 rounded-full bg-gold/60 group-hover:bg-gold transition-all" />
                                            <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">{flavor}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-brand-red font-black text-sm uppercase tracking-wider mb-4">Tropical Fruits</h4>
                                    {["Guava", "Passion Fruit", "Coconut", "Lychee", "Dragon Fruit", "Pomegranate", "Kiwi"].map((flavor, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 bg-charcoal/50 rounded-xl hover:bg-charcoal transition-all group">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-red/60 group-hover:bg-brand-red transition-all" />
                                            <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">{flavor}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Mint Varieties */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-brand-red" />
                                <h3 className="text-3xl font-black text-white uppercase tracking-tight">Mint Varieties</h3>
                                <div className="flex-1 h-[2px] bg-gradient-to-r from-brand-red to-transparent" />
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                                {["Double Apple Mint", "Watermelon Mint", "Grape Mint", "Lemon Mint", "Orange Mint", "Pure Mint", "Spearmint", "Peppermint"].map((flavor, i) => (
                                    <div key={i} className="p-4 bg-gradient-to-br from-brand-red/5 to-charcoal rounded-2xl border border-brand-red/10 hover:border-brand-red/30 transition-all group">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-brand-red group-hover:scale-125 transition-transform" />
                                            <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{flavor}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Exotic & Specialty Blends */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-gold" />
                                <h3 className="text-3xl font-black text-white uppercase tracking-tight">Exotic & Specialty Blends</h3>
                                <div className="flex-1 h-[2px] bg-gradient-to-r from-gold to-transparent" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-8 bg-gradient-to-br from-charcoal to-black rounded-3xl border border-white/5">
                                    <h4 className="text-gold font-black text-lg uppercase tracking-wider mb-6">Sweet & Creamy</h4>
                                    <div className="grid grid-cols-2 gap-3">
                                        {["Vanilla", "Caramel", "Chocolate Mint", "Tiramisu", "Cookies & Cream", "Bubble Gum", "Candy", "Cotton Candy"].map((flavor, i) => (
                                            <div key={i} className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition-all group">
                                                <div className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold transition-all" />
                                                <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{flavor}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-8 bg-gradient-to-br from-charcoal to-black rounded-3xl border border-white/5">
                                    <h4 className="text-gold font-black text-lg uppercase tracking-wider mb-6">Unique Blends</h4>
                                    <div className="grid grid-cols-2 gap-3">
                                        {["Rose", "Jasmine", "Honey Dew", "Spiced Chai", "Cardamom", "Pan (Betel Leaf)", "Saffron", "Pistachio"].map((flavor, i) => (
                                            <div key={i} className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition-all group">
                                                <div className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold transition-all" />
                                                <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{flavor}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Premium Flavors */}
                        <div className="p-10 bg-gradient-to-br from-gold/5 via-charcoal to-black rounded-[2rem] border-2 border-gold/20">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="px-4 py-2 bg-gold/20 rounded-full">
                                    <span className="text-gold font-black text-xs uppercase tracking-widest">+$5 Premium</span>
                                </div>
                                <h3 className="text-3xl font-black text-white uppercase tracking-tight">Premium Flavors</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                                {[
                                    { name: "Al Fakher Premium Line", desc: "Authentic Middle Eastern excellence" },
                                    { name: "Starbuzz Exotic Series", desc: "Bold American innovation" },
                                    { name: "Fumari Specialty Blends", desc: "California crafted perfection" },
                                    { name: "Tangiers Premium", desc: "Rich, full-bodied experience" },
                                    { name: "Social Smoke Elite", desc: "Smooth, sophisticated flavors" }
                                ].map((brand, i) => (
                                    <div key={i} className="p-6 bg-black/40 rounded-2xl border border-gold/10 hover:border-gold/30 transition-all group">
                                        <h4 className="font-black text-white text-sm uppercase tracking-wide mb-2 group-hover:text-gold transition-colors leading-tight">{brand.name}</h4>
                                        <p className="text-gray-400 text-xs leading-relaxed">{brand.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Rules & Info */}
                        <div className="p-10 bg-gradient-to-br from-charcoal via-black to-charcoal rounded-[2rem] border border-white/5 text-center">
                            <div className="max-w-3xl mx-auto">
                                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gold/10 rounded-full mb-6">
                                    <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                                    <span className="text-gold font-black text-sm uppercase tracking-widest">Important Information</span>
                                </div>
                                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-6">Hookah Guidelines</h3>
                                <div className="space-y-4 text-gray-300">
                                    <p className="text-lg"><span className="text-gold font-black">Age Requirement:</span> 21+ (Valid ID Required)</p>
                                    <p className="text-sm text-gray-400 leading-relaxed max-w-2xl mx-auto">
                                        Experience premium hookah in our luxury lounge featuring Versace couches, VIP seating, and late-night service.
                                        All flavors available for custom mixing upon request.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
