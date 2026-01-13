"use client";

import { useScavengerHunt } from "@/context/ScavengerHuntContext";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

interface GoldenCoalProps {
    id: string;
    hint?: string;
    className?: string;
}

export function GoldenCoal({ id, hint = "You found a Golden Coal!", className }: GoldenCoalProps) {
    const { foundItems, findItem } = useScavengerHunt();
    const isFound = foundItems.includes(id);

    if (isFound) return null;

    return (
        <motion.button
            whileHover={{ scale: 1.2, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => findItem(id)}
            className={`cursor-pointer group relative ${className}`}
            aria-label="Golden Coal"
        >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gold blur-lg opacity-50 group-hover:opacity-80 transition-opacity animate-pulse" />

            {/* The Coal Icon */}
            <div className="relative z-10 w-8 h-8 rounded-full bg-gradient-to-br from-gold to-yellow-600 border border-white/20 shadow-lg flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-30 mix-blend-overlay" />
                <div className="w-full h-1/2 absolute bottom-0 bg-gradient-to-t from-red-600/50 to-transparent animate-pulse" />
                <span className="text-xs font-bold text-black opacity-80">$</span>
            </div>

            {/* Sparkles */}
            <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-white animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Hint Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black/90 text-gold text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gold/20 pointer-events-none">
                {hint}
            </div>
        </motion.button>
    );
}
