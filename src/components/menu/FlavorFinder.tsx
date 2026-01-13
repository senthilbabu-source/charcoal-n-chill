"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, RefreshCw, Flame, Snowflake, Candy, Citrus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

type Preference = "Fruity" | "Sweet" | "Minty" | "Spicy";
type Strength = "Smooth" | "Strong";

interface FlavorRecommendation {
    name: string;
    description: string;
    image: string; // Placeholder for now or mapped to existing
    tags: string[];
}

const flavorDatabase: Record<string, FlavorRecommendation> = {
    "Fruity-Smooth": {
        name: "Queen of Chaotic",
        description: "A bold fusion of wild berries, passion fruit, and dragon fruit with a twist of rose petals. Perfect for a relaxing, flavorful session.",
        image: "/images/hookah-cnc.jpg",
        tags: ["Berries", "Floral", "Exotic"]
    },
    "Fruity-Strong": {
        name: "Breeze Titanic",
        description: "A refreshing oceanic blend of icy mint and tropical waves (cucumber & melon). Hits with a cool, strong buzz.",
        image: "/images/hookah-cnc.jpg",
        tags: ["Melon", "Cucumber", "Icy"]
    },
    "Sweet-Smooth": {
        name: "The Exotic Edit",
        description: "A symphony of saffron, pistachio, and honey with subtle notes of jasmine. Like a dessert in smoke form.",
        image: "/images/hookah-cnc.jpg",
        tags: ["Saffron", "Honey", "Nutty"]
    },
    "Sweet-Strong": {
        name: "CNC Special",
        description: "Our signature blend combining exotic spices, sweet vanilla cream, and a whisper of cardamom. Rich and robust.",
        image: "/images/hookah-cnc.jpg",
        tags: ["Vanilla", "Spice", "Creamy"]
    },
    "Minty-Smooth": {
        name: "Breeze Titanic",
        description: "A smooth yet cooling mix of melon and cucumber with a distinct minty finish.",
        image: "/images/hookah-cnc.jpg",
        tags: ["Fresh", "Cool", "Melon"]
    },
    "Minty-Strong": {
        name: "Mint Mocha",
        description: "Decadent dark chocolate meets cool peppermint, finished with espresso undertones. Strong coffee kick.",
        image: "/images/hookah-cnc.jpg",
        tags: ["Coffee", "Chocolate", "Menthol"]
    },
    "Spicy-Smooth": {
        name: "The Exotic Edit",
        description: "Exotic saffron and pistachio offer a mild, nutty spice that is incredibly smooth on the exhale.",
        image: "/images/hookah-cnc.jpg",
        tags: ["Saffron", "Pistachio", "Warm"]
    },
    "Spicy-Strong": {
        name: "CNC Special",
        description: "Cardamom and exotic spices take center stage here. A bold choice for seasoned smokers.",
        image: "/images/hookah-cnc.jpg",
        tags: ["Cardamom", "Bold", "Signature"]
    }
};

export function FlavorFinder() {
    const [step, setStep] = useState<0 | 1 | 2 | 3>(0);
    const [preference, setPreference] = useState<Preference | null>(null);
    const [strength, setStrength] = useState<Strength | null>(null);

    const getRecommendation = () => {
        if (!preference || !strength) return null;
        const key = `${preference}-${strength}`;
        return flavorDatabase[key] || flavorDatabase["Fruity-Smooth"];
    };

    const recommendation = getRecommendation();

    const resetQuiz = () => {
        setStep(0);
        setPreference(null);
        setStrength(null);
    };

    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="text-gold text-sm font-bold uppercase tracking-widest mb-2 block">
                        Can't Decide?
                    </span>
                    <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase mb-4">
                        Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white">Flavor</span>
                    </h2>
                    <p className="text-gray-400 max-w-md mx-auto">
                        Take our 30-second quiz and let us match you with your perfect hookah blend.
                    </p>
                </div>

                {/* Quiz Card */}
                <div className="bg-dark-secondary/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 min-h-[400px] flex items-center justify-center relative shadow-2xl">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent rounded-3xl pointer-events-none" />

                    <AnimatePresence mode="wait">
                        {step === 0 && (
                            <motion.div
                                key="step-0"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                className="text-center space-y-8"
                            >
                                <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto ring-1 ring-gold/30">
                                    <Sparkles className="w-10 h-10 text-gold animate-pulse" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Ready for your match?</h3>
                                <Button
                                    onClick={() => setStep(1)}
                                    className="bg-gold text-black hover:bg-white hover:text-black font-bold uppercase tracking-widest px-10 py-6 text-lg rounded-xl shadow-lg hover:shadow-gold/20 transition-all"
                                >
                                    <span className="flex items-center gap-2 whitespace-nowrap">
                                        Start Quiz <ArrowRight className="w-5 h-5" />
                                    </span>
                                </Button>
                            </motion.div>
                        )}

                        {step === 1 && (
                            <motion.div
                                key="step-1"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                className="w-full max-w-2xl space-y-8"
                            >
                                <h3 className="text-2xl font-bold text-white text-center">What's your vibe tonight?</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { label: "Fruity", icon: Citrus, color: "text-orange-400" },
                                        { label: "Sweet", icon: Candy, color: "text-pink-400" },
                                        { label: "Minty", icon: Snowflake, color: "text-cyan-400" },
                                        { label: "Spicy", icon: Flame, color: "text-red-500" }
                                    ].map((opt) => (
                                        <button
                                            key={opt.label}
                                            onClick={() => {
                                                setPreference(opt.label as Preference);
                                                setStep(2);
                                            }}
                                            className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-gold/50 transition-all flex flex-col items-center gap-4 py-10"
                                        >
                                            <opt.icon className={`w-12 h-12 ${opt.color} group-hover:scale-110 transition-transform`} />
                                            <span className="text-xl font-bold text-white uppercase tracking-wider">{opt.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step-2"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                className="w-full max-w-2xl space-y-8"
                            >
                                <h3 className="text-2xl font-bold text-white text-center">How do you like it?</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <button
                                        onClick={() => {
                                            setStrength("Smooth");
                                            setStep(3);
                                        }}
                                        className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-gold-primary/50 transition-all text-center space-y-4"
                                    >
                                        <div className="text-4xl">☁️</div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white uppercase mb-1">Smooth & Light</h4>
                                            <p className="text-sm text-gray-400">Easy on the throat, big clouds, relaxing.</p>
                                        </div>
                                    </button>

                                    <button
                                        onClick={() => {
                                            setStrength("Strong");
                                            setStep(3);
                                        }}
                                        className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-gold/50 transition-all text-center space-y-4"
                                    >
                                        <div className="text-4xl">⚡</div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white uppercase mb-1">Strong & Buzzy</h4>
                                            <p className="text-sm text-gray-400">Bold flavor, heavier hit, maximum effect.</p>
                                        </div>
                                    </button>
                                </div>
                                <button onClick={() => setStep(1)} className="text-gray-500 hover:text-white text-sm mx-auto block mt-8">
                                    Back
                                </button>
                            </motion.div>
                        )}

                        {step === 3 && recommendation && (
                            <motion.div
                                key="step-3"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center w-full max-w-lg mx-auto"
                            >
                                <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">
                                    Your Perfect Match
                                </span>
                                <h3 className="text-4xl font-heading font-black text-white uppercase mb-6 drop-shadow-lg">
                                    {recommendation.name}
                                </h3>
                                <div className="flex justify-center gap-2 mb-6">
                                    {recommendation.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-gray-300 border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-gray-300 leading-relaxed text-lg mb-8">
                                    {recommendation.description}
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button asChild className="bg-gold text-black hover:bg-white hover:text-black font-bold uppercase tracking-widest px-8 py-6 rounded-xl">
                                        <Link href="/contact">Reserve This Mix</Link>
                                    </Button>
                                    <Button
                                        onClick={resetQuiz}
                                        variant="outline"
                                        className="border-white/20 text-white hover:bg-white/10 font-bold uppercase tracking-widest px-8 py-6 rounded-xl"
                                    >
                                        <RefreshCw className="mr-2 w-4 h-4" /> Try Again
                                    </Button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

export default FlavorFinder;
