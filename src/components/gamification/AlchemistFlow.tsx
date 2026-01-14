"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { moods, flavorProfiles, generateMix, Mood, FlavorProfile, MixRecipe } from "@/data/alchemist";
import { MixResultCard } from "@/components/gamification/MixResultCard";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Sparkles, Wand2 } from "lucide-react";


export function AlchemistFlow() {
    const [step, setStep] = useState<"intro" | "mood" | "profile" | "generating" | "result">("intro");
    const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
    const [, setSelectedProfile] = useState<FlavorProfile | null>(null); // Ignore unused variable
    const [result, setResult] = useState<MixRecipe | null>(null);

    const handleStart = () => setStep("mood");

    const handleMoodSelect = (mood: Mood) => {
        setSelectedMood(mood);
        setStep("profile");
    };

    const handleProfileSelect = (profile: FlavorProfile) => {
        setSelectedProfile(profile);
        setStep("generating");

        // Artificial delay for "AI" effect
        setTimeout(() => {
            const mix = generateMix(selectedMood!, profile);
            setResult(mix);
            setStep("result");
        }, 2500);
    };

    const handleReset = () => {
        setStep("intro");
        setSelectedMood(null);
        setSelectedProfile(null);
        setResult(null);
    };

    return (
        <div className="w-full max-w-4xl mx-auto min-h-[500px] flex items-center justify-center relative">

            {/* Background elements */}
            <div className="absolute inset-0 bg-gold/5 blur-[100px] rounded-full opacity-20 pointer-events-none" />

            <AnimatePresence mode="wait">

                {/* INTRO STEP */}
                {step === "intro" && (
                    <motion.div
                        key="intro"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="text-center space-y-8 relative z-10"
                    >
                        <div className="w-20 h-20 bg-gradient-to-br from-gold to-brand-red rounded-3xl mx-auto flex items-center justify-center rotate-12 shadow-2xl mb-8">
                            <Wand2 size={40} className="text-black" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-heading font-black text-white uppercase tracking-tight">
                            The Flavor <span className="text-gold">Alchemist</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-lg mx-auto leading-relaxed">
                            Can&apos;t decide? Let our AI Mixologist craft the perfect hookah blend for your current mood.
                        </p>
                        <Button
                            size="lg"
                            className="bg-gold text-black hover:bg-white text-lg px-12 py-8 rounded-full shadow-[0_0_30px_rgba(212,175,55,0.3)] animate-pulse-slow"
                            onClick={handleStart}
                        >
                            Start Mixing <Sparkles className="ml-2" />
                        </Button>
                    </motion.div>
                )}

                {/* MOOD STEP */}
                {step === "mood" && (
                    <motion.div
                        key="mood"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        className="w-full relative z-10"
                    >
                        <div className="text-center mb-12">
                            <span className="text-gold font-bold uppercase tracking-widest text-xs mb-2 block">Step 1 of 2</span>
                            <h3 className="text-3xl font-heading font-bold text-white">How&apos;s the vibe tonight?</h3>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {moods.map((m) => (
                                <button
                                    key={m.id}
                                    onClick={() => handleMoodSelect(m.id)}
                                    className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-gold/50 transition-all duration-300 flex flex-col items-center gap-4 hover:-translate-y-1"
                                >
                                    <div
                                        className="w-12 h-12 rounded-full flex items-center justify-center text-black shadow-lg transition-transform group-hover:scale-110"
                                        style={{ backgroundColor: m.color }}
                                    >
                                        <m.icon size={24} />
                                    </div>
                                    <div className="text-center">
                                        <div className="font-bold text-white text-lg mb-1">{m.id}</div>
                                        <div className="text-xs text-gray-400 group-hover:text-gold transition-colors">{m.label}</div>
                                    </div>
                                </button>
                            ))}
                        </div>
                        <div className="mt-8 text-center">
                            <button onClick={handleReset} className="text-gray-500 hover:text-white text-sm flex items-center justify-center gap-2 mx-auto">
                                <ArrowLeft size={14} /> Back to Start
                            </button>
                        </div>
                    </motion.div>
                )}

                {/* PROFILE STEP */}
                {step === "profile" && (
                    <motion.div
                        key="profile"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        className="w-full relative z-10"
                    >
                        <div className="text-center mb-12">
                            <span className="text-gold font-bold uppercase tracking-widest text-xs mb-2 block">Step 2 of 2</span>
                            <h3 className="text-3xl font-heading font-bold text-white">Pick your palate.</h3>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {flavorProfiles.map((p) => (
                                <button
                                    key={p.id}
                                    onClick={() => handleProfileSelect(p.id)}
                                    className="group text-left p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-gold/10 hover:border-gold transition-all duration-300"
                                >
                                    <div className="font-bold text-xl text-white mb-2 group-hover:text-gold">{p.label}</div>
                                    <div className="text-sm text-gray-400 group-hover:text-white/80">{p.description}</div>
                                </button>
                            ))}
                        </div>
                        <div className="mt-8 text-center">
                            <button onClick={() => setStep("mood")} className="text-gray-500 hover:text-white text-sm flex items-center justify-center gap-2 mx-auto">
                                <ArrowLeft size={14} /> Back to Vibe
                            </button>
                        </div>
                    </motion.div>
                )}

                {/* GENERATING STEP */}
                {step === "generating" && (
                    <motion.div
                        key="generating"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.2, filter: "blur(20px)" }}
                        className="text-center space-y-8 relative z-10 flex flex-col items-center"
                    >
                        <div className="relative w-32 h-32">
                            <div className="absolute inset-0 border-4 border-gold/30 rounded-full animate-ping" />
                            <div className="absolute inset-0 border-4 border-brand-red/30 rounded-full animate-ping delay-300" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Sparkles size={48} className="text-white animate-spin-slow" />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white animate-pulse">Consulting the Alchemist...</h3>
                        <p className="text-gray-400 max-w-xs mx-auto">Analyzing flavor compatibility and vibe resonance.</p>
                    </motion.div>
                )}

                {/* RESULT STEP */}
                {step === "result" && result && (
                    <div className="w-full flex flex-col items-center">
                        <MixResultCard mix={result} onReset={handleReset} />
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
