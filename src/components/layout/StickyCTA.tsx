"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { UtensilsCrossed } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 500px (past hero)
            setIsVisible(window.scrollY > 500);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="fixed bottom-6 right-6 z-50"
                >
                    <Link href="/contact#reserve">
                        <button className="group relative flex items-center gap-2 pl-4 pr-5 py-3 bg-gold-primary text-black font-black uppercase tracking-widest text-sm rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:scale-105 transition-all duration-300">
                            <span className="bg-black/10 rounded-full p-1.5 group-hover:bg-black/20 transition-colors">
                                <UtensilsCrossed size={16} />
                            </span>
                            <span>Book Now</span>

                            {/* Ripple/Glow effect wrapper */}
                            <div className="absolute inset-0 rounded-full ring-2 ring-white/20 animate-pulse" />
                        </button>
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
