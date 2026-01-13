"use client";

import { TiltCard } from "@/components/ui/TiltCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { MapPin, Phone, Mail, Clock, ParkingCircle, Instagram, Facebook } from "lucide-react";

export function ContactInfo() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
            {/* Address & Contact */}
            <ScrollReveal className="h-full">
                <TiltCard className="h-full">
                    <div className="h-full bg-[#1e1e1e] p-8 rounded-[2rem] border border-white/5 flex flex-col justify-between group hover:border-gold-primary/30 transition-colors">
                        <div className="space-y-8">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-gold-primary/10 p-2 rounded-lg">
                                        <MapPin className="text-gold-primary w-5 h-5" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white uppercase tracking-wide">Visit Us</h3>
                                </div>
                                <p className="text-gray-400 leading-relaxed pl-12">
                                    11950 Jones Bridge Rd<br />
                                    Ste 103<br />
                                    Alpharetta, GA 30005
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-gold-primary/10 p-2 rounded-lg">
                                        <Phone className="text-gold-primary w-5 h-5" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white uppercase tracking-wide">Contact</h3>
                                </div>
                                <div className="pl-12 space-y-2">
                                    <a href="tel:4705464866" className="block text-gray-400 hover:text-white transition-colors">
                                        (470) 546-4866
                                    </a>
                                    <a href="mailto:charcoalnchill@gmail.com" className="block text-gray-400 hover:text-white transition-colors">
                                        charcoalnchill@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/5 flex gap-4 pl-2">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-primary hover:text-black transition-all duration-300">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-primary hover:text-black transition-all duration-300">
                                <Facebook size={18} />
                            </a>
                        </div>
                    </div>
                </TiltCard>
            </ScrollReveal>

            {/* Hours & Parking */}
            <div className="space-y-6">
                <ScrollReveal delay={0.1}>
                    <TiltCard>
                        <div className="bg-[#1e1e1e] p-8 rounded-[2rem] border border-white/5 group hover:border-gold-primary/30 transition-colors">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-gold-primary/10 p-2 rounded-lg">
                                    <Clock className="text-gold-primary w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-bold text-white uppercase tracking-wide">Hours</h3>
                            </div>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between text-gray-400 border-b border-white/5 pb-2">
                                    <span>Tue - Thu</span>
                                    <span className="text-white">5 PM - 1 AM</span>
                                </div>
                                <div className="flex justify-between text-gray-400 border-b border-white/5 pb-2">
                                    <span>Fri - Sat</span>
                                    <span className="text-gold-primary font-bold">5 PM - 2 AM</span>
                                </div>
                                <div className="flex justify-between text-gray-400 border-b border-white/5 pb-2">
                                    <span>Sunday</span>
                                    <span className="text-white">5 PM - 1 AM</span>
                                </div>
                                <div className="flex justify-between text-brand-red/80 font-medium">
                                    <span>Monday</span>
                                    <span>Closed</span>
                                </div>
                            </div>
                        </div>
                    </TiltCard>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <TiltCard>
                        <div className="bg-[#1e1e1e] p-8 rounded-[2rem] border border-white/5 group hover:border-gold-primary/30 transition-colors">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-gold-primary/10 p-2 rounded-lg">
                                    <ParkingCircle className="text-gold-primary w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-bold text-white uppercase tracking-wide">Parking</h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Ample free parking available in the lot directly in front of the lounge. Handicap accessible spots are located near the entrance.
                            </p>
                        </div>
                    </TiltCard>
                </ScrollReveal>
            </div>
        </div>
    );
}
