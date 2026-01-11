"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";


const navLeft = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
];

const navRight = [
    { name: "Private Events", href: "/private-events" },
    { name: "FAQ", href: "/faq" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

const allNavItems = [...navLeft, ...navRight];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
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
                        <div className="w-24" aria-hidden="true"></div>
                    </nav>
                    {/* Centered Logo */}
                    <Link href="/" className="relative z-10 flex-shrink-0 group mx-auto">
                        <div className="absolute inset-0 bg-gold-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className={cn(
                            "relative z-10 transition-all duration-500 filter drop-shadow-2xl",
                            scrolled ? "h-14 md:h-16 w-auto" : "h-20 md:h-24 w-auto"
                        )}>
                            <Image
                                src="/logo.png"
                                alt="Charcoal N Chill - Premium Hookah & Indian Restaurant"
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

                    </nav>
                </div>
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


            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        className="fixed inset-0 z-[60] bg-dark-primary/98 backdrop-blur-xl flex flex-col justify-center p-8 md:hidden overflow-y-auto"
                        id="mobile-menu"
                    >
                        <nav className="flex flex-col gap-4 items-center">
                            {allNavItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "text-2xl font-heading font-bold uppercase tracking-widest transition-colors hover:text-gold-primary",
                                        pathname === item.href ? "text-gold-primary" : "text-white/80"
                                    )}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="mt-8 pt-8 border-t border-white/10 w-full text-center">
                                <Button className="w-full text-lg py-6 bg-gradient-to-r from-gold-dark to-gold-light text-dark-primary hover:shadow-glow font-bold" asChild>
                                    <Link href="/contact#reserve" onClick={() => setIsOpen(false)}>Reserve Table</Link>
                                </Button>
                            </div>
                        </nav>
                        <button
                            className="absolute top-6 right-6 text-white hover:text-gold-primary transition-colors p-2"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close menu"
                        >
                            <X size={32} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
