"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/components/layout/Analytics";

export function HeroCTAs() {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Button
                size="lg"
                withArrow
                asChild
                onClick={() => trackEvent('reservation_click', { location: 'hero' })}
            >
                <Link href="/contact#reserve">Book Your Table</Link>
            </Button>
            <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10"
                asChild
                onClick={() => trackEvent('menu_preview_click', { location: 'hero' })}
            >
                <Link href="/menu">
                    Explore Menu
                </Link>
            </Button>
        </div>
    );
}
