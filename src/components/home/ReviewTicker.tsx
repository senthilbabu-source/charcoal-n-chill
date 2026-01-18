"use client";

import { Star } from "lucide-react";
import Image from "next/image";

const reviews = [
    {
        name: "Sarah Jenkins",
        text: "The best hookah lounge in North Atlanta. The food is authentic and the vibe is unmatched.",
        rating: 5,
        time: "2 days ago"
    },
    {
        name: "Michael Chen",
        text: "Great vibes and tasty bites! Perfect spot for a weekend hang out.",
        rating: 5,
        time: "1 week ago"
    },
    {
        name: "Priya Patel",
        text: "The Butter Chicken and Mint Hookah pairing is absolute perfection. 10/10.",
        rating: 5,
        time: "3 days ago"
    },
    {
        name: "Davon Lewis",
        text: "Staff makes you feel like VIP every time. Love the DJ on Friday nights!",
        rating: 5,
        time: "2 weeks ago"
    },
    {
        name: "Emily R.",
        text: "A true luxury lounge experience right here in the suburbs. Highly recommend.",
        rating: 5,
        time: "1 month ago"
    }
];

export function ReviewTicker() {
    return (
        <div className="w-full bg-dark-tertiary border-y border-white/5 py-4 overflow-hidden relative group">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark-primary to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark-primary to-transparent z-10 pointer-events-none" />



            {/* Header Badge */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-3 py-1 flex items-center gap-2 md:hidden">
                <Image src="/google-g-logo.svg" alt="Google" width={16} height={16} className="w-4 h-4" />
                <span className="text-xs font-bold text-white">4.7</span>
            </div>

            <div className="flex animate-marquee hover:[animation-play-state:paused] gap-6 w-max items-center">
                {/* Duplicate the array 3 times for seamless looping */}
                {[...reviews, ...reviews, ...reviews].map((review, i) => (
                    <div
                        key={i}
                        className="w-[300px] md:w-[350px] bg-dark-secondary/50 backdrop-blur-sm border border-white/5 rounded-xl p-4 flex-shrink-0 hover:border-gold-primary/30 transition-colors cursor-pointer"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-xs font-bold text-white first-letter:uppercase">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-white leading-none">{review.name}</h4>
                                    <div className="flex items-center gap-1 mt-0.5">
                                        <div className="flex text-gold-primary">
                                            {[...Array(5)].map((_, r) => (
                                                <Star key={r} size={10} className="fill-current" />
                                            ))}
                                        </div>
                                        <span className="text-[10px] text-gray-500">{review.time}</span>
                                    </div>
                                </div>
                            </div>
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" width={16} height={16} className="w-4 h-4 opacity-70" />
                        </div>
                        <p className="text-xs text-gray-300 line-clamp-2 italic">
                            &quot;{review.text}&quot;
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
