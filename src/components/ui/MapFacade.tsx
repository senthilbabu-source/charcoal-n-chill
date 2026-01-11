"use client";

import { useState } from "react";
import { Play } from "lucide-react";

export function MapFacade() {
    const [isLoaded, setIsLoaded] = useState(false);

    if (isLoaded) {
        return (
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.907531938293!2d-84.20671332334975!3d34.071884573149525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f59f9b40880aed%3A0x7520302548fe7a5!2sCharcoal%20N%20Chill!5e0!3m2!1sen!2sus!4v1768075947383!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
            />
        );
    }

    return (
        <button
            onClick={() => setIsLoaded(true)}
            className="w-full h-full bg-[#1a1a1a] flex flex-col items-center justify-center group cursor-pointer relative overflow-hidden"
            aria-label="Load Google Maps"
        >
            {/* Abstract Map Background Pattern */}
            <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, #333 1px, transparent 0)',
                backgroundSize: '20px 20px'
            }} />

            <div className="w-16 h-16 rounded-full bg-gold-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border border-gold-primary/30 z-10">
                <Play className="w-8 h-8 text-gold-primary fill-gold-primary" />
            </div>
            <p className="mt-4 text-gray-400 font-medium uppercase tracking-widest text-sm z-10">
                Load Interactive Map
            </p>
        </button>
    );
}
