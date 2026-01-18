"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Flame, Wind } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { weeklyRituals } from "@/data/events";

export function WeekendCountdown() {
    const [isVisible, setIsVisible] = useState(false);
    const [promo, setPromo] = useState<{
        title: string;
        subtitle: string;
        icon: React.ElementType;
        pulseColor?: string;
        link: string;
    } | null>(null);

    // Simplified effect: Just check time, no layout layout shifts
    useEffect(() => {
        const checkTime = () => {
            const now = new Date();
            const day = now.getDay(); // 0=Sun, 1=Mon, 2=Tue...

            // Finds the event for the current day
            let activeEvent = null;
            let displayTitle = "";
            let displaySubtitle = "";
            let displayIcon = Flame;
            let shouldShow = false;

            // Tuesday (2) - Hookah Tuesday
            if (day === 2) {
                activeEvent = weeklyRituals.find(e => e.title.includes("Hookah Tuesday"));
                if (activeEvent) {
                    displayTitle = "Hookah Tuesday Live!";
                    displaySubtitle = "Exclusive specials on premium flavors all night.";
                    displayIcon = Wind;
                    shouldShow = true;
                }
            }
            // Friday (5) & Saturday (6) - Weekend Vibes / Belly Dancing
            else if (day === 5 || day === 6) {
                // Find Belly Dancing or generic Fri/Sat event
                activeEvent = weeklyRituals.find(e => e.day.includes("Fri") || e.day.includes("Sat"));

                displayTitle = "Weekend Vibes Loading...";
                // If we found the belly dancing event, specificy it in subtitle
                if (activeEvent && activeEvent.title.includes("Belly")) {
                    displaySubtitle = `Live Belly Dancing @ 10PM • Tables Filling Fast!`;
                } else {
                    displaySubtitle = "Live DJ • Belly Dancing • Open until 2 AM";
                }
                displayIcon = Flame;
                shouldShow = true;
            }
            // Optional: Sunday (0) ?

            if (shouldShow) {
                setPromo({
                    title: displayTitle,
                    subtitle: displaySubtitle,
                    icon: displayIcon,
                    link: "/contact#reserve" // Always drive to reservation for now
                });
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        checkTime();
        const interval = setInterval(checkTime, 60000); // Check every minute
        return () => clearInterval(interval);
    }, []);

    if (!isVisible || !promo) return null;

    const Icon = promo.icon;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="relative z-[60] bg-gradient-to-r from-brand-red via-red-600 to-brand-red text-white"
            >
                <div className="container mx-auto px-4 py-2">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center sm:text-left text-xs sm:text-sm font-bold tracking-wider uppercase">
                        <div className="flex items-center gap-2 animate-pulse">
                            <Icon size={16} className="text-yellow-300" />
                            <span className="text-yellow-300">{promo.title}</span>
                        </div>

                        <span className="hidden sm:inline opacity-50">|</span>

                        <div className="flex items-center gap-2">
                            <span>{promo.subtitle}</span>
                        </div>

                        <Link
                            href={promo.link}
                            className="bg-white !text-black font-extrabold px-4 py-1 rounded-full flex items-center gap-1 hover:bg-gray-100 transition-colors shadow-lg"
                            style={{ color: 'black' }}
                        >
                            <span>Book Now</span>
                            <ArrowRight size={12} />
                        </Link>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
