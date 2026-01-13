"use client";

import { weeklyRituals, specialEvents } from "@/data/events";
import { TiltCard } from "@/components/ui/TiltCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Flame, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function EventsShowcase() {
    return (
        <section id="events-showcase" className="py-20 bg-dark-primary relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-gold-primary/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">

                {/* Weekly Rituals */}
                <div className="mb-24">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-heading font-black text-white uppercase tracking-tight mb-4">
                                Weekly <span className="text-gold-primary">Rituals</span>
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-primary to-transparent mx-auto opacity-50" />
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {weeklyRituals.map((event, i) => (
                            <ScrollReveal key={i} delay={i * 0.1} animation="fade-up">
                                <TiltCard className="h-full">
                                    <div className="group relative h-full min-h-[500px] rounded-[2.5rem] bg-dark-secondary/40 backdrop-blur-md border border-white/5 overflow-hidden transition-all duration-500 hover:border-gold-primary/30 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]">

                                        {/* Image Layer - Top Half */}
                                        <div className="absolute top-0 left-0 right-0 h-[45%] z-0 overflow-hidden">
                                            {event.image && (
                                                <Image
                                                    src={event.image}
                                                    alt={event.title}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-[0.9]"
                                                />
                                            )}
                                            {/* Badge Over Image */}
                                            <div className="absolute top-4 right-4 z-10">
                                                <div className="px-3 py-1.5 bg-black/70 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-2">
                                                    <event.icon className="w-3 h-3 text-gold-primary" />
                                                    <span className="text-white text-[10px] font-bold uppercase tracking-widest">{event.day}</span>
                                                </div>
                                            </div>
                                            <div className={cn("absolute inset-0 bg-gradient-to-tr mix-blend-overlay opacity-40", event.color || "from-black")} />
                                        </div>

                                        {/* Content Layer - Bottom Half */}
                                        <div className="absolute top-[45%] bottom-0 left-0 right-0 p-6 flex flex-col bg-dark-secondary/90 backdrop-blur-sm border-t border-white/5">

                                            <div className="flex-1 flex flex-col">
                                                <div className="flex items-center gap-2 mb-2 text-gold-primary/90 font-medium tracking-wide">
                                                    <Flame size={14} className="animate-pulse" />
                                                    <span className="uppercase text-xs font-bold">{event.time}</span>
                                                </div>

                                                <h3 className="text-3xl font-heading font-black text-white uppercase leading-none mb-3 drop-shadow-sm">
                                                    {event.title}
                                                </h3>

                                                <p className="text-gray-400 leading-relaxed text-sm line-clamp-3 mb-4">
                                                    {event.desc}
                                                </p>
                                            </div>

                                            {/* Button at the bottom */}
                                            <div className="mt-auto pt-4 border-t border-white/5">
                                                {event.day === "Coming Soon" ? (
                                                    <div className="w-full py-3 text-center border border-dashed border-white/20 rounded-lg text-gray-500 uppercase tracking-widest text-xs font-bold bg-white/5">
                                                        Launching Soon
                                                    </div>
                                                ) : (
                                                    <Link href="/contact#reserve" className="block w-full">
                                                        <Button className="w-full bg-white text-black hover:bg-gold-primary hover:text-black border-none font-bold uppercase tracking-widest h-12 rounded-lg group/btn text-sm shadow-lg">
                                                            Reserve Table
                                                            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                                        </Button>
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </TiltCard>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>

                {/* Special Events Strip */}
                <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-r from-dark-secondary to-black border border-white/5 p-8 md:p-12">
                    <div className="absolute inset-0 bg-[#050F18]/50 pattern-grid-lg opacity-20" />

                    <div className="relative z-10">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-heading font-black text-white uppercase tracking-tight mb-4">
                                Special <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-white">Showcase</span>
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Exclusive nights featuring local talent and global beats.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {specialEvents.map((item, i) => (
                                <TiltCard key={i} className="h-full" rotationFactor={10}>
                                    <div className="h-full bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/5 hover:bg-white/10 hover:border-gold-primary/20 transition-all duration-300 flex flex-col items-center text-center group">
                                        <div className="w-16 h-16 rounded-full bg-gold-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gold-primary group-hover:text-black transition-all duration-300 text-gold-primary shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                                            <item.icon size={32} />
                                        </div>
                                        <h3 className="text-xl font-black text-white uppercase tracking-wide mb-2">{item.title}</h3>
                                        <p className="text-gold-primary text-xs font-bold uppercase tracking-widest mb-3">{item.tagline}</p>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </TiltCard>
                            ))}
                        </div>

                        <div className="mt-10 text-center">
                            <Button variant="link" className="text-gray-400 hover:text-gold-primary transition-colors uppercase tracking-widest text-xs" asChild>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    Check Instagram for Schedule
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
