"use client";

import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const showcaseItems = [
    {
        id: "hookah",
        title: "Signature Hookah",
        category: "Premium Blends",
        image: "/images/hookah-cnc.jpg",
        description: "Hand-packed, coconut coals, 50+ flavors",
        price: "From $25",
        colSpan: "md:col-span-2",
        rowSpan: "md:row-span-2"
    },
    {
        id: "chicken65",
        title: "Chicken 65",
        category: "Appetizers",
        image: "/images/chicken-65.jpg",
        description: "Deep-fried spicy chicken, curry leaves",
        price: "$14",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-1"
    },
    {
        id: "cocktails",
        title: "Craft Cocktails",
        category: "Bar Menu",
        image: "/images/cocktails.jpg",
        description: "Signature mixes & premium spirits",
        price: "$16",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-1"
    },
    {
        id: "butterchicken",
        title: "Butter Chicken",
        category: "Entrees",
        image: "/images/butter-chicken.jpg",
        description: "Creamy tomato sauce, tender chicken",
        price: "$18",
        colSpan: "md:col-span-2",
        rowSpan: "md:row-span-1"
    }
];

import { TextReveal } from "@/components/ui/TextReveal";

export function ProductShowcase() {
    return (
        <section className="relative py-24 bg-dark-primary" id="menu-preview">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <ScrollReveal animation="fade-right">
                        <div>
                            <span className="text-gold-primary text-sm font-bold tracking-widest uppercase mb-2 block">Our Menu</span>
                            <h2 className="text-4xl md:text-5xl font-black text-white">
                                <span className="block mb-2">Experience</span>
                                <span className="gradient-text">
                                    <TextReveal text="Perfection" mode="char" delay={0.2} />
                                </span>
                            </h2>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-left">
                        <Link href="/menu" className="group flex items-center gap-2 text-white hover:text-gold-primary transition-colors">
                            <span className="text-sm font-bold uppercase tracking-widest">View Full Menu</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
                    {showcaseItems.map((item, index) => (
                        <ScrollReveal
                            key={item.id}
                            animation="zoom-in"
                            delay={index * 0.1}
                            className={`${item.colSpan} ${item.rowSpan} group relative rounded-3xl overflow-hidden cursor-pointer bg-dark-secondary border border-white/5 hover:border-gold-primary/30 transition-colors duration-500`}
                        >
                            <Link href="/menu" className="block w-full h-full">
                                {/* Image */}
                                <div className="absolute inset-0 w-full h-full overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-1"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 transition-opacity duration-300" />
                                </div>

                                {/* Content */}
                                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="flex justify-between items-end mb-2">
                                            <span className="text-gold-primary text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-2 group-hover:translate-y-0 delay-75 drop-shadow-md">
                                                {item.category}
                                            </span>
                                            <span className="text-white font-bold bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-sm shadow-lg">
                                                {item.price}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">{item.title}</h3>
                                        <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 max-w-[90%] drop-shadow-md font-medium">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Quick View Button */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-all duration-300 delay-100">
                                        <div className="w-16 h-16 rounded-full bg-glass-bg backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-gold-primary hover:text-dark-primary transition-colors cursor-pointer shadow-lg">
                                            <Eye size={24} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
