"use client";

import { features, commitments } from "@/data/about";
import { TiltCard } from "@/components/ui/TiltCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CheckCircle2 } from "lucide-react";

export function FeaturesGrid() {
    return (
        <section className="py-24 bg-[#050F18] border-t border-white/5">
            <div className="container mx-auto px-4">

                {/* What Sets Us Apart */}
                <div className="mb-32">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase tracking-tight mb-4">
                                What Sets Us <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-white">Apart</span>
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                We don&apos;t just serve customers; we curate experiences. Here is why CNC stands out.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <TiltCard className="h-full">
                                    <div className="h-full bg-gradient-to-br from-[#1a1a1a] to-[#111] p-10 rounded-[2rem] border border-white/5 hover:border-gold-primary/30 transition-all duration-300 group shadow-lg">
                                        <div className="w-12 h-1 bg-gold-primary mb-6 transition-all duration-500 group-hover:w-full" />
                                        <h3 className="text-xl font-black text-white uppercase tracking-wide mb-4 group-hover:text-gold-primary transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed font-light">
                                            {feature.desc}
                                        </p>
                                    </div>
                                </TiltCard>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>

                {/* Our Commitment */}
                <ScrollReveal>
                    <div className="p-12 md:p-20 bg-gradient-to-br from-dark-secondary to-black rounded-[3rem] border border-white/5 relative overflow-hidden">
                        {/* Decorative Patterns */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-primary/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

                        <div className="relative z-10">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase tracking-tight mb-6">
                                    Our Commitment
                                </h2>
                                <div className="w-16 h-1 bg-white/20 mx-auto" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
                                {commitments.map((item, i) => (
                                    <div key={i} className="flex gap-4 group">
                                        <div className="mt-1">
                                            <CheckCircle2 className="w-6 h-6 text-gold-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg mb-2 group-hover:text-gold-primary transition-colors">{item.title}</h4>
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
}
