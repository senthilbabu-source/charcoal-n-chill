"use client";

import { useState, useEffect, useRef } from "react";
import { Loader2 } from "lucide-react";

export function MapFacade() {
    const [isLoaded, setIsLoaded] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 } // Load when 10% is visible
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={containerRef}
            className="w-full h-full relative bg-[#1a1a1a] overflow-hidden"
        >
            {isLoaded ? (
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.907531938293!2d-84.20671332334975!3d34.071884573149525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f59f9b40880aed%3A0x7520302548fe7a5!2sCharcoal%20N%20Chill!5e0!3m2!1sen!2sus!4v1768075947383!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full animate-in fade-in duration-1000"
                />
            ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    {/* Abstract Map Background Pattern */}
                    <div className="absolute inset-0 opacity-20" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, #333 1px, transparent 0)',
                        backgroundSize: '20px 20px'
                    }} />

                    <div className="z-10 flex flex-col items-center gap-3">
                        <Loader2 className="w-8 h-8 text-gold-primary animate-spin" />
                        <p className="text-gold-primary/70 text-sm tracking-widest uppercase">
                            Locating...
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
