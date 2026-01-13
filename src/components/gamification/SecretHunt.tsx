"use client";

import { useScavengerHunt } from "@/context/ScavengerHuntContext";
import { motion, AnimatePresence } from "framer-motion";
import { BurningCoalIcon } from "./BurningCoalIcon";

interface SecretHuntProps {
    id: string;
    locationName: string;
    className?: string; // Allow custom positioning if needed
}

export function SecretHunt({ id, locationName, className }: SecretHuntProps) {
    const { foundEmbers, findEmber } = useScavengerHunt();
    const isFound = foundEmbers.includes(id);

    return (
        <div className={`inline-block ${className || "fixed bottom-4 right-4 z-40 md:static"}`}>
            <AnimatePresence>
                {!isFound && (
                    <motion.button
                        layout
                        onClick={() => findEmber(id, locationName)}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            filter: "brightness(1)",
                        }}
                        exit={{ opacity: 0, scale: 0, rotate: 180 }}
                        whileHover={{
                            scale: 1.2,
                            rotate: 15,
                            filter: "brightness(1.2)"
                        }}
                        whileTap={{ scale: 0.9 }}
                        transition={{
                            opacity: { duration: 1 },
                            scale: { duration: 1 },
                        }}
                        className="group relative cursor-pointer"
                        aria-label={`Found secret in ${locationName}`}
                    >
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-orange-500/30 blur-xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />

                        {/* Vector Ember Icon */}
                        <BurningCoalIcon className="w-12 h-12 drop-shadow-[0_0_15px_rgba(251,146,60,0.6)]" />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}
