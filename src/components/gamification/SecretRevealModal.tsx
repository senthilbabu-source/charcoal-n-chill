"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X, Gift, Check, Mail, Lock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface SecretRevealModalProps {
    onClose: () => void;
}

export function SecretRevealModal({ onClose }: SecretRevealModalProps) {
    const [step, setStep] = useState<"reveal" | "form">("reveal");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const secretCode = "SECRET20";
    const prizeName = "The Midnight Mist";
    const prizeDesc = "Blackberry • Mint • Vanilla • Mystery";

    const handleClaim = (e: React.FormEvent) => {
        e.preventDefault();

        // Construct email body
        const subject = encodeURIComponent(`SECRET MENU WINNER: ${secretCode}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCode: ${secretCode}\n\nI found the secret ember!`
        );

        // Open mail client
        window.location.href = `mailto:charcoalnchill@gmail.com?subject=${subject}&body=${body}`;

        // Close modal after a short delay
        setTimeout(onClose, 2000);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative w-full max-w-md bg-[#1a1a1a] border border-gold/20 rounded-2xl shadow-2xl overflow-hidden"
            >
                {/* Decorative Glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold/10 rounded-full blur-3xl p-10 animate-pulse" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gold/10 rounded-full blur-3xl p-10 animate-pulse delay-700" />

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-10"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="p-8 relative">
                    {step === "reveal" ? (
                        <div className="text-center space-y-6">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6"
                            >
                                <Gift className="w-10 h-10 text-gold" />
                            </motion.div>

                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold text-white font-serif">
                                    Secret Unlocked!
                                </h2>
                                <p className="text-gray-400">
                                    You&apos;ve discovered a hidden gem.
                                </p>
                            </div>

                            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                                <h3 className="text-gold font-bold text-xl mb-1">{prizeName}</h3>
                                <p className="text-sm text-gray-400 mb-4">{prizeDesc}</p>
                                <div className="flex items-center justify-center gap-2 bg-black/40 py-3 px-4 rounded-lg border border-gold/30">
                                    <Lock className="w-4 h-4 text-gold/60" />
                                    <span className="font-mono text-lg tracking-widest text-gold font-bold">
                                        {secretCode}
                                    </span>
                                </div>
                            </div>

                            <Button
                                variant="primary"
                                size="lg"
                                className="w-full bg-gold text-black hover:bg-white"
                                onClick={() => setStep("form")}
                            >
                                Claim Reward
                            </Button>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            <div className="text-center">
                                <h2 className="text-2xl font-bold text-white font-serif mb-2">
                                    Claim Your Prize
                                </h2>
                                <p className="text-sm text-gray-400">
                                    Enter your details to generate your claim email.
                                </p>
                            </div>

                            <form onSubmit={handleClaim} className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gold/70">Name</label>
                                    <input
                                        required
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-gold/50 transition-colors"
                                        placeholder="Enter your name"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gold/70">Email</label>
                                    <input
                                        required
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-gold/50 transition-colors"
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-gold/70">Phone (Optional)</label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-gold/50 transition-colors"
                                        placeholder="(555) 000-0000"
                                    />
                                </div>

                                <div className="text-[10px] text-gray-500 leading-tight">
                                    By claiming this reward, you agree to join our exclusive VIP list for future news and offers.
                                </div>

                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="lg"
                                    className="w-full bg-gold text-black hover:bg-white"
                                >
                                    <Mail className="w-4 h-4 mr-2" />
                                    Claim via Email
                                </Button>
                            </form>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
