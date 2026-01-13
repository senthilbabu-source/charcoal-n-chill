"use client";

import { useScavengerHunt } from "@/context/ScavengerHuntContext";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, X } from "lucide-react";
import { useState } from "react";
import { SecretRevealModal } from "./SecretRevealModal";
import { BurningCoalIcon } from "./BurningCoalIcon";

export function ScavengerHuntTracker() {
    const { foundEmbers, totalEmbers, isComplete } = useScavengerHunt();
    const [showModal, setShowModal] = useState(false);
    const [isExpanded, setIsExpanded] = useState(true);

    // If no embers found, don't show the tracker yet
    if (foundEmbers.length === 0) return null;

    return (
        <>
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 100, opacity: 0 }}
                            className="bg-black/80 backdrop-blur-md border border-gold/30 rounded-full px-6 py-3 flex items-center gap-6 shadow-[0_0_30px_rgba(0,0,0,0.8)]"
                        >
                            <div className="flex items-center gap-3">
                                {Array.from({ length: totalEmbers }).map((_, i) => (
                                    <div
                                        key={i}
                                        className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${i < foundEmbers.length
                                            ? "border-gold bg-gold/10 shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                                            : "border-white/10 bg-white/5"
                                            }`}
                                    >
                                        {i < foundEmbers.length ? (
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                            >
                                                <BurningCoalIcon className="w-8 h-8 drop-shadow-md" />
                                            </motion.div>
                                        ) : (
                                            <div className="w-2 h-2 rounded-full bg-white/20" />
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="h-8 w-[1px] bg-white/10" />

                            {isComplete ? (
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setShowModal(true)}
                                    className="bg-gold text-black px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg flex items-center gap-2 animate-pulse"
                                >
                                    <Gift size={14} />
                                    Claim Reward
                                </motion.button>
                            ) : (
                                <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                                    {foundEmbers.length}/{totalEmbers} Embers Found
                                </div>
                            )}

                            <button
                                onClick={() => setIsExpanded(false)}
                                className="ml-2 text-gray-500 hover:text-white transition-colors"
                            >
                                <X size={14} />
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

                {!isExpanded && (
                    <motion.button
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="bg-black/80 backdrop-blur-md border border-gold/30 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                        onClick={() => setIsExpanded(true)}
                    >
                        <div className="relative">
                            <BurningCoalIcon className="w-8 h-8 opacity-80" />
                            <div className="absolute -top-2 -right-2 w-5 h-5 bg-gold text-black text-[10px] font-bold rounded-full flex items-center justify-center">
                                {foundEmbers.length}
                            </div>
                        </div>
                    </motion.button>
                )}
            </div>

            <AnimatePresence>
                {showModal && <SecretRevealModal onClose={() => setShowModal(false)} />}
            </AnimatePresence>
        </>
    );
}
