import { Wind, UserCheck, Dice5, Mic, Music, Sparkles } from "lucide-react";
import React from "react";

export type EventItem = {
    day: string;
    title: string;
    time: string;
    desc: string;
    icon: React.ElementType; // Lucide icon
    image?: string;
    highlight?: string;
    color?: string; // Gradient color class base
    tagline?: string;
};

export const weeklyRituals: EventItem[] = [
    {
        day: "Every Tuesday",
        title: "Hookah Tuesday",
        time: "All Night",
        desc: "The perfect mid-week break. Enjoy exclusive specials on our premium hookah flavors.",
        icon: Wind,
        image: "/images/hookah-cnc.jpg",
        highlight: "Special Deals",
        color: "from-blue-900/40"
    },
    {
        day: "Fri & Sat",
        title: "Belly Dancing",
        time: "10:00 PM (2 Hours)",
        desc: "Mesmerizing live performances by professional belly dancers. The ultimate dinner and a show experience.",
        icon: UserCheck,
        image: "/images/belly-dance-cnc.jpg",
        highlight: "Main Event",
        color: "from-purple-900/40"
    },
    {
        day: "Coming Soon",
        title: "Lucky Hours",
        time: "Daily 5:00 PM - 8:00 PM",
        desc: "Roll the dice and win! Discounts on appetizers, drinks, and hookah during our happy hour.",
        icon: Dice5,
        image: "/images/cocktails.jpg",
        highlight: "Roll the Dice",
        color: "from-gold-900/40"
    }
];

export const specialEvents: EventItem[] = [
    {
        day: "Special",
        title: "Live Karaoke",
        tagline: "Local Talents Spotlight",
        time: "Check Schedule",
        desc: "Take the stage or cheer on local singers. A night of music, laughter, and community vibes.",
        icon: Mic
    },
    {
        day: "Special",
        title: "DJ Nights",
        tagline: "Global Beats",
        time: "Weekend Nights",
        desc: "Top local DJs spinning Afrobeats, Bollywood, Amapiano, and Top 40 hits.",
        icon: Music
    },
    {
        day: "Special",
        title: "Themed Parties",
        tagline: "Friday/Saturday Specials",
        time: "Monthly",
        desc: "From Retro Nights to Bollywood Galas, check our social media for the next big theme.",
        icon: Sparkles
    }
];
