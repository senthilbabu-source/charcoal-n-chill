"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
    {
        text: "The best hookah lounge in North Atlanta. The food is authentic and the vibe is unmatched. Highly recommend the Butter Chicken and their signature mint hookah!",
        author: "Satisfied Customer",
        initials: "SC",
        rating: 5
    },
    {
        text: "Great vibes and tasty bites! Perfect spot for a weekend hang out. The music playlist is always on point and the staff makes you feel like VIP every time.",
        author: "Local Guide",
        initials: "LG",
        rating: 5
    },
    {
        text: "Charcoal N Chill is a gem in Alpharetta. The fusion of Indian cuisine and hookah is unique. The Lamb Chops are a must-try!",
        author: "Foodie Lover",
        initials: "FL",
        rating: 5
    },
    {
        text: "Professional staff and excellent service. The exotic flavors like 'Queen of Chaotic' are amazing. Definitely my go-to spot for late nights.",
        author: "Regular Guest",
        initials: "RG",
        rating: 5
    },
    {
        text: "An unforgettable evening. The live entertainment on Friday nights is incredible. A true luxury lounge experience right here in the suburbs.",
        author: "Party Planner",
        initials: "PP",
        rating: 5
    }
];

export function ReviewCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % reviews.length);
        }, 6000); // Change every 6 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="p-8 bg-glass-bg rounded-2xl border border-glass-border relative overflow-hidden group hover:border-gold-primary/30 transition-colors duration-500 min-h-[300px] flex flex-col justify-center">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                <Quote size={100} className="text-gold-primary rotate-180" />
            </div>

            <div className="relative z-10">
                {/* Static Rating Header */}
                <div className="flex items-center gap-1 text-gold-primary mb-6">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                    <span className="ml-2 text-white font-bold">4.8/5</span>
                </div>

                {/* Animated Review Content */}
                <div className="relative h-[160px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0"
                        >
                            <p className="text-gray-300 italic text-lg leading-relaxed mb-6">
                                &quot;{reviews[currentIndex].text}&quot;
                            </p>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-dark to-gold-light flex items-center justify-center text-dark-primary font-bold text-sm shadow-lg shadow-gold-primary/20">
                                    {reviews[currentIndex].initials}
                                </div>
                                <div>
                                    <p className="text-gold-primary text-sm font-bold">{reviews[currentIndex].author}</p>
                                    <p className="text-gray-500 text-xs">Google Review</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Indicators */}
                <div className="flex gap-2 mt-8 justify-center">
                    {reviews.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-6 bg-gold-primary" : "w-1.5 bg-gray-600 hover:bg-gray-500"
                                }`}
                            aria-label={`Go to review ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
