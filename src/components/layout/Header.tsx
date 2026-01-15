"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Gift, Lock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

const VelvetRopeModal = dynamic(() => import("@/components/gamification/VelvetRopeModal").then(mod => mod.VelvetRopeModal), {
    ssr: false,
    loading: () => null
});

const navLeft = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Events", href: "/events" },
];

const navRight = [
    { name: "Parties", href: "/private-events" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

const allNavItems = [...navLeft, ...navRight];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showRewards, setShowRewards] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const sentinel = document.getElementById("scroll-sentinel");
        if (!sentinel) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setScrolled(!entry.isIntersecting);
            },
            { rootMargin: "-20px 0px 0px 0px" }
        );

        observer.observe(sentinel);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsOpen(false);
    }, [pathname]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-black/90 backdrop-blur-md py-4 shadow-lg border-b border-white/5"
                    : "bg-transparent py-8"
            )}
            role="banner"
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between relative">
                    {/* Left Nav (Desktop) */}
                    <nav className="hidden md:flex flex-1 items-center gap-8 lg:gap-12 justify-start">
                        {navLeft.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-xs font-bold uppercase tracking-[0.2em] transition-all hover:text-gold-primary whitespace-nowrap relative group",
                                    pathname === item.href ? "text-gold-primary" : "text-white/90"
                                )}
                            >
                                {item.name}
                                <span className={cn(
                                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-dark to-gold-light transition-all duration-300 group-hover:w-full",
                                    pathname === item.href && "w-full"
                                )} />
                            </Link>
                        ))}
                        <button
                            onClick={() => setShowRewards(true)}
                            className="hidden lg:flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold hover:text-white transition-colors animate-pulse-slow ml-2"
                        >
                            <Gift size={16} /> Rewards
                        </button>
                    </nav>

                    {/* Centered Logo */}
                    <Link href="/" className="relative z-10 flex-shrink-0 group mx-auto px-4">
                        <div className="absolute inset-0 bg-gold-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className={cn(
                            "relative z-10 transition-all duration-500 filter drop-shadow-2xl",
                            scrolled ? "h-14 md:h-16 w-auto" : "h-20 md:h-24 w-auto"
                        )}>
                            <Image
                                src="/logo.png"
                                alt="Charcoal N Chill"
                                width={800}
                                height={212}
                                className="h-full w-auto object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Right Nav (Desktop) */}
                    <nav className="hidden md:flex flex-1 items-center gap-8 lg:gap-12 justify-end">
                        {navRight.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-xs font-bold uppercase tracking-[0.2em] transition-all hover:text-gold-primary whitespace-nowrap relative group",
                                    pathname === item.href ? "text-gold-primary" : "text-white/90"
                                )}
                            >
                                {item.name}
                                <span className={cn(
                                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-dark to-gold-light transition-all duration-300 group-hover:w-full",
                                    pathname === item.href && "w-full"
                                )} />
                            </Link>
                        ))}
                        <Link
                            href="/admin/login"
                            className="hidden lg:flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors ml-2"
                        >
                            <Lock size={16} /> Admin
                        </Link>
                    </nav>
                    <button
                        className="md:hidden text-white hover:text-gold-primary transition-colors relative z-20"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Backdrop */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
                        onClick={() => setIsOpen(false)}
                        aria-hidden="true"
                    />
                )}
            </AnimatePresence>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 z-50 bg-black border-b border-white/10 shadow-2xl md:hidden overflow-hidden"
                        id="mobile-menu"
                    >
                        <div className="container mx-auto px-4 py-6">
                            <nav className="grid grid-cols-2 gap-4">
                                {allNavItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={cn(
                                            "flex items-center justify-center py-3 px-4 rounded-xl bg-white/5 border border-white/5 text-sm font-bold uppercase tracking-wider transition-all hover:bg-white/10 hover:border-gold/30 hover:text-gold",
                                            pathname === item.href ? "bg-white/10 border-gold/50 text-gold" : "text-white/80"
                                        )}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>

                            <div className="mt-6 pt-6 border-t border-white/10 space-y-4">
                                <Button
                                    className="w-full py-6 text-base font-bold bg-white/10 border border-gold/30 text-gold hover:bg-gold/20"
                                    onClick={() => {
                                        setIsOpen(false);
                                        setShowRewards(true);
                                    }}
                                >
                                    <Gift size={20} className="mr-2" /> Spin to Win
                                </Button>
                                <Button className="w-full py-6 text-base font-bold bg-gold text-charcoal hover:bg-gold-light" asChild>
                                    <Link href="/contact#reserve" onClick={() => setIsOpen(false)}>
                                        Reserve A Table
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <VelvetRopeModal isOpen={showRewards} onClose={() => setShowRewards(false)} />
        </header>
    );
}
