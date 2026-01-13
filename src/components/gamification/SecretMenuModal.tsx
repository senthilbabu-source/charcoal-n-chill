"use client";

import { useScavengerHunt } from "@/context/ScavengerHuntContext";
import { motion, AnimatePresence } from "framer-motion";
import { X, Crown, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function SecretMenuModal() {
    const { isHuntComplete, resetHunt } = useScavengerHunt();
    const [isOpen, setIsOpen] = useState(true);
    const [copied, setCopied] = useState(false);

    if (!isHuntComplete || !isOpen) return null;

    const copyCode = () => {
        navigator.clipboard.writeText("CNC-VIP-2026");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                />

                {/* Modal */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0, y: 50 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.8, opacity: 0, y: 50 }}
                    className="relative w-full max-w-md bg-dark-secondary border border-gold/30 rounded-3xl p-8 text-center shadow-[0_0_50px_rgba(212,175,55,0.2)] overflow-hidden"
                >
                    {/* Background Shine */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 via-transparent to-transparent pointer-events-none" />

                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
                    >
                        <X size={24} />
                    </button>

                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="w-20 h-20 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl relative"
                    >
                        <div className="absolute inset-0 animate-ping opacity-20 bg-gold rounded-full" />
                        <Crown size={40} className="text-black" />
                    </motion.div>

                    <h2 className="text-3xl font-heading font-black text-white uppercase mb-2">
                        Secret Level <span className="text-gold">Unlocked</span>
                    </h2>
                    <p className="text-gray-400 mb-8">
                        You found all 3 Golden Coals! You are officially a Charcoal N Chill VIP.
                    </p>

                    <div className="bg-black/50 rounded-xl p-4 border border-white/10 mb-8">
                        <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Your Secret Code</p>
                        <div className="flex items-center justify-center gap-3">
                            <code className="text-2xl font-mono text-gold font-bold">CNC-VIP-2026</code>
                            <button
                                onClick={copyCode}
                                className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white"
                                title="Copy Code"
                            >
                                {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                            </button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <p className="text-sm text-gray-400">
                            Show this code to your server to unlock the <strong>Secret Menu</strong> + <strong>10% Off</strong>.
                        </p>
                        <Button
                            onClick={() => setIsOpen(false)} // Or redirect to Menu
                            className="bg-gold text-black hover:bg-white hover:text-black w-full py-6 font-bold uppercase tracking-widest"
                        >
                            Got It
                        </Button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
