"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useEffect, useState } from "react";
import { Utensils } from "lucide-react";

export function StickyReservation() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past hero (approx 500px)
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[49] p-4 bg-gradient-to-t from-black via-black/90 to-transparent md:hidden animate-slide-up">
            <div className="flex gap-3">
                <Link href="/menu" className="flex-1">
                    <Button variant="outline" className="w-full bg-black/50 border-white/20 text-white hover:bg-white/10 backdrop-blur-md">
                        Menu
                    </Button>
                </Link>
                <Link href="/contact#reserve" className="flex-[2]">
                    <Button className="w-full bg-brand-red hover:bg-red-700 text-white border-none shadow-xl font-bold">
                        <Utensils size={18} className="mr-2" /> Reserve Table
                    </Button>
                </Link>
            </div>
        </div>
    );
}
