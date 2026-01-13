"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Flame, Utensils, GlassWater, Wind, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { menuItems } from "@/data/menu";
import { TiltCard } from "@/components/ui/TiltCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

const categories = [
    { id: "all", label: "All Items", icon: Utensils },
    { id: "appetizers", label: "Appetizers", icon: Flame },
    { id: "entrees", label: "Entrees", icon: Utensils },
    { id: "hookah", label: "Hookah", icon: Wind },
    { id: "desserts", label: "Desserts", icon: Utensils },
    { id: "cocktails", label: "Cocktails", icon: GlassWater },
];

export function MenuExplorer() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    // Flatten items for search if needed, or filter by category
    const filteredItems = Object.entries(menuItems).flatMap(([catKey, items]) => {
        // First filter by category
        if (activeCategory !== "all" && catKey !== activeCategory) {
            return [];
        }
        return items.map(item => ({ ...item, category: catKey }));
    }).filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-dark-primary relative" id="menu-explorer">
            {/* Background Glow */}
            <div className="absolute top-0 left-0 right-0 h-[300px] bg-[radial-gradient(ellipse_at_top,_var(--gold-glow)_0%,_transparent_70%)] pointer-events-none" />

            {/* Sticky Navigation / Filter Bar */}
            <div className="sticky top-16 md:top-[72px] z-40 bg-dark-primary/80 backdrop-blur-xl border-b border-white/5 shadow-2xl transition-all duration-300">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
                        {/* Category Tabs */}
                        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={cn(
                                        "flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap border border-transparent magnetic",
                                        activeCategory === cat.id
                                            ? "bg-gradient-to-r from-gold-dark to-gold-light text-black shadow-[0_0_20px_rgba(212,175,55,0.4)] transform scale-105"
                                            : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white hover:border-gold-primary/30"
                                    )}
                                >
                                    <cat.icon size={16} />
                                    {cat.label}
                                </button>
                            ))}
                        </div>

                        {/* Search Bar */}
                        <div className="relative w-full md:w-96 group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-gold-primary transition-colors duration-300" size={18} />
                            <input
                                type="text"
                                placeholder="Search our menu..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-dark-secondary/50 border border-white/10 rounded-full py-3 pl-12 pr-6 text-white placeholder:text-gray-600 focus:outline-none focus:border-gold-primary focus:ring-1 focus:ring-gold-primary/50 transition-all font-light shadow-inner"
                            />
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-primary/20 to-transparent opacity-0 group-focus-within:opacity-100 -z-10 blur-md transition-opacity duration-300" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu Grid */}
            <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
                <AnimatePresence mode="popLayout">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredItems.map((item, index) => (
                            <ScrollReveal key={`${item.name}-${index}`} animation="fade-up" delay={index * 0.05}>
                                <TiltCard className="h-full">
                                    <div className="group h-full bg-dark-secondary/40 backdrop-blur-md rounded-3xl border border-white/5 p-8 relative overflow-hidden transition-all duration-500 hover:bg-dark-secondary/60 hover:border-gold-primary/30">
                                        {/* Hover Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-gold-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        {/* Card Content */}
                                        <div className="relative z-10 flex flex-col h-full">
                                            <div className="flex justify-between items-start mb-4 gap-4">
                                                <h3 className="text-xl font-bold text-white group-hover:text-gold-primary transition-colors leading-tight">
                                                    {item.name}
                                                </h3>
                                                <span className="text-gold-primary font-bold text-lg whitespace-nowrap bg-gold-primary/10 px-3 py-1 rounded-full border border-gold-primary/20">
                                                    {item.price}
                                                </span>
                                            </div>

                                            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light flex-grow">
                                                {item.desc}
                                            </p>

                                            <div className="flex items-center justify-between mt-auto">
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 bg-white/5 px-3 py-1.5 rounded-full group-hover:text-white transition-colors">
                                                    {item.category}
                                                </span>
                                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-gold-primary group-hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0">
                                                    <ArrowRight size={14} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TiltCard>
                            </ScrollReveal>
                        ))}
                    </div>
                </AnimatePresence>

                {/* Empty State */}
                {filteredItems.length === 0 && activeCategory !== "hookah" && activeCategory !== "cocktails" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-600">
                            <Search size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">No flavors found</h3>
                        <p className="text-gray-500">We couldn&apos;t find anything matching &quot;{searchQuery}&quot;.</p>
                    </motion.div>
                )}

                {/* Hookah Guidelines & Info */}
                {activeCategory === "hookah" && (
                    <ScrollReveal animation="fade-up">
                        <div className="mt-12 p-1 bg-gradient-to-r from-gold-dark via-gold-light to-gold-dark rounded-[2rem] shadow-glow">
                            <div className="bg-dark-secondary rounded-[1.9rem] p-8 md:p-12 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-5 text-gold-primary">
                                    <Wind size={200} />
                                </div>
                                <div className="relative z-10 max-w-3xl">
                                    <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-gold-dark mb-6">
                                        PREMIUM HOOKAH EXPERIENCE
                                    </h3>
                                    <div className="space-y-6 text-gray-300">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-full bg-gold-primary/10 flex items-center justify-center text-gold-primary shrink-0">
                                                <span className="text-xl font-bold">21+</span>
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-1">Age Policy</h4>
                                                <p className="font-light">Valid physical government-issued ID required for all guests. No exceptions.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-full bg-gold-primary/10 flex items-center justify-center text-gold-primary shrink-0">
                                                <Wind size={24} />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-1">Our Promise</h4>
                                                <p className="font-light">
                                                    We use only 100% natural coconut coals and premium washed tobacco to ensure the smoothest clouds and purest flavor in every session.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                )}
            </div>
        </div>
    );
}
