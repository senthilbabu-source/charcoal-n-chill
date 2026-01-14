"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuxuryWheel } from "./LuxuryWheel";
import { rewards, spinWheel, Reward } from "@/data/rewards";
import { Button } from "@/components/ui/Button";
import { X, Sparkles, Mail, CheckCircle2 } from "lucide-react";

interface VelvetRopeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function VelvetRopeModal({ isOpen, onClose }: VelvetRopeModalProps) {
    const [step, setStep] = useState<"intro" | "spinning" | "capture" | "success">("intro");
    const [winner, setWinner] = useState<Reward | null>(null);
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSpin = () => {
        setStep("spinning");
        const result = spinWheel();
        setWinner(result);
        // Wheel component handles the timing of the animation completion
    };

    const handleSpinComplete = () => {
        setTimeout(() => setStep("capture"), 500);
    };

    const handleClaim = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsLoading(false);
        setStep("success");
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 0 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-2xl bg-[#111] border border-white/10 rounded-3xl p-8 md:p-12 overflow-visible shadow-2xl flex flex-col items-center justify-center my-auto"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors z-20"
                        >
                            <X size={24} />
                        </button>

                        {/* Background Decor */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold/5 blur-[80px] rounded-full pointer-events-none" />
                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-red/5 blur-[80px] rounded-full pointer-events-none" />

                        <div className="relative z-10 min-h-[400px] flex flex-col items-center justify-center">

                            {/* STEP: INTRO */}
                            {step === "intro" && (
                                <div className="text-center space-y-6">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/10">
                                        <Sparkles size={14} className="text-gold" />
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">Charcoal N Chill Rewards</span>
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase tracking-tight leading-none">
                                        Spin to <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-amber-200">Win</span>
                                    </h2>
                                    <p className="text-gray-400 max-w-xs mx-auto text-sm leading-relaxed">
                                        Join the inner circle. Spin for exclusive perks, free flavors, and VIP upgrades.
                                    </p>

                                    <div className="py-4">
                                        <LuxuryWheel
                                            rewards={rewards}
                                            spinning={false}
                                            onSpinComplete={() => { }}
                                            winner={null}
                                        />
                                    </div>

                                    <Button
                                        size="lg"
                                        className="w-full bg-gold text-black hover:bg-white font-bold"
                                        onClick={handleSpin}
                                    >
                                        Spin the Wheel
                                    </Button>
                                </div>
                            )}

                            {/* STEP: SPINNING */}
                            {step === "spinning" && (
                                <div className="text-center w-full">
                                    <LuxuryWheel
                                        rewards={rewards}
                                        spinning={true}
                                        onSpinComplete={handleSpinComplete}
                                        winner={winner}
                                    />
                                    <p className="mt-8 text-gold font-bold animate-pulse tracking-widest uppercase text-sm">
                                        Good Luck...
                                    </p>
                                </div>
                            )}

                            {/* STEP: CAPTURE */}
                            {step === "capture" && winner && (
                                <div className="text-center w-full space-y-6">
                                    <motion.div
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        className="w-20 h-20 mx-auto rounded-full bg-gold flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                                    >
                                        <Sparkles size={40} className="text-black" />
                                    </motion.div>

                                    <div>
                                        <p className="text-sm font-bold text-gold uppercase tracking-widest mb-2">You Won!</p>
                                        <h3 className="text-3xl font-heading font-black text-white mb-4">{winner.label}</h3>
                                        <p className="text-gray-400 text-sm max-w-xs mx-auto">
                                            {winner.description}
                                        </p>
                                    </div>

                                    <form onSubmit={handleClaim} className="space-y-4 max-w-xs mx-auto w-full">
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-3 text-gray-500" size={20} />
                                            <input
                                                type="email"
                                                placeholder="Enter email to claim reward"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-gold transition-colors"
                                            />
                                        </div>
                                        <Button
                                            type="submit"
                                            className="w-full bg-gold text-black hover:bg-white"
                                            disabled={isLoading}
                                        >
                                            {isLoading ? "Claiming..." : "Claim My Reward"}
                                        </Button>
                                        <p className="text-[10px] text-gray-600 text-center">
                                            By claiming, you agree to receive exclusive offers from CNC. Unsubscribe anytime.
                                        </p>
                                    </form>
                                </div>
                            )}

                            {/* STEP: SUCCESS */}
                            {step === "success" && winner && (
                                <div className="text-center w-full space-y-6">
                                    <motion.div
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        className="w-24 h-24 mx-auto"
                                    >
                                        <CheckCircle2 size={96} className="text-green-500" />
                                    </motion.div>

                                    <div>
                                        <h3 className="text-3xl font-heading font-black text-white mb-2">You&apos;re In!</h3>
                                        <p className="text-gray-300">
                                            Your code for <strong>{winner.label}</strong> has been sent to <span className="text-gold">{email}</span>.
                                        </p>
                                    </div>

                                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 mt-4">
                                        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Your Code</p>
                                        <p className="text-2xl font-mono font-bold text-gold tracking-widest">
                                            CNC-WIN24
                                        </p>
                                    </div>

                                    <p className="text-xs text-gray-500">
                                        Show this code to your server tonight to redeem.
                                    </p>

                                    <Button variant="outline" onClick={onClose} className="w-full mt-4">
                                        Close
                                    </Button>
                                </div>
                            )}

                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
