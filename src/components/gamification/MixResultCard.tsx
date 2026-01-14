"use client";

import { motion } from "framer-motion";
import { MixRecipe } from "@/data/alchemist";
import { TiltCard } from "@/components/ui/TiltCard";
import { Share2, Sparkles, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface MixResultCardProps {
    mix: MixRecipe;
    onReset: () => void;
}

export function MixResultCard({ mix, onReset }: MixResultCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateX: 10 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="w-full max-w-md mx-auto perspective-1000"
        >
            <TiltCard className="w-full" rotationFactor={10}>
                <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#1a1a1a] to-black border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] p-1">
                    {/* Dynamic Glow based on mix color */}
                    <div
                        className="absolute top-0 inset-x-0 h-32 opacity-30 blur-[60px]"
                        style={{ backgroundColor: mix.color }}
                    />

                    <div className="relative z-10 bg-black/40 backdrop-blur-xl rounded-[2.3rem] p-8 text-center flex flex-col items-center h-full">

                        {/* Header Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
                            <Sparkles size={14} className="text-gold" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold">AI Recommended</span>
                        </div>

                        {/* Mix Name */}
                        <h2 className="text-3xl md:text-4xl font-heading font-black text-white uppercase tracking-tight mb-2 leading-none">
                            {mix.name}
                        </h2>

                        <div className="w-16 h-1 my-4 rounded-full" style={{ backgroundColor: mix.color }} />

                        {/* Ingredients */}
                        <div className="space-y-2 mb-6">
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">The Formula</p>
                            <div className="flex flex-wrap justify-center gap-2">
                                {mix.ingredients.map(ing => (
                                    <span key={ing} className="bg-white/10 px-3 py-1 rounded-lg text-sm text-gray-200 font-medium">
                                        {ing}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xs mx-auto italic">
                            &quot;{mix.description}&quot;
                        </p>

                        {/* CTA Section */}
                        <div className="w-full bg-white/5 rounded-2xl p-4 border border-white/10 mb-6">
                            <p className="text-xs text-center text-gold font-bold uppercase tracking-widest mb-1">
                                Unlock this Flavor
                            </p>
                            <p className="text-[10px] text-gray-500 text-center">
                                Show this card to your server at Charcoal N Chill
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-4 w-full">
                            <Button
                                variant="outline"
                                className="flex-1 border-white/20 hover:border-white text-white"
                                onClick={onReset}
                            >
                                <RefreshCw size={16} className="mr-2" /> Restart
                            </Button>
                            <Button
                                className="flex-1 bg-gold text-black hover:bg-white"
                                onClick={async () => {
                                    if (navigator.share) {
                                        try {
                                            await navigator.share({
                                                title: `My Hookah Vibe: ${mix.name}`,
                                                text: `I got matched with ${mix.name} at Charcoal N Chill!`,
                                                url: window.location.href
                                            });
                                        } catch (error) {
                                            if ((error as Error).name !== 'AbortError') {
                                                console.error('Error sharing:', error);
                                            }
                                        }
                                    }
                                }}
                            >
                                <Share2 size={16} className="mr-2" /> Share
                            </Button>
                        </div>
                    </div>
                </div>
            </TiltCard>
        </motion.div>
    );
}
