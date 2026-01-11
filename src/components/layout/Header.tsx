"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Dropdown } from "@/components/ui/Dropdown";

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
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-[#031322]/95 backdrop-blur-md border-b border-white/5 py-4"
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
                                    "text-xs font-bold uppercase tracking-[0.2em] transition-all hover:text-gold whitespace-nowrap",
                                    pathname === item.href ? "text-gold" : "text-white/90"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="w-24" aria-hidden="true"></div>
                    </nav>
                    {/* Centered Logo */}
                    <Link href="/" className="relative z-10 flex-shrink-0 group mx-auto">
                        <div className="absolute inset-0 bg-gold/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        <img
                            src="/logo.png"
                            alt="Charcoal N Chill - Premium Hookah & Indian Restaurant"
                            className={cn(
                                "transition-all duration-500 relative z-10",
                                scrolled ? "h-14 md:h-16" : "h-20 md:h-24"
                            )}
                        />
                    </Link>
                    {/* Right Nav (Desktop) */}
                    <nav className="hidden md:flex flex-1 items-center gap-8 lg:gap-12 justify-end">
                        {navRight.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-xs font-bold uppercase tracking-[0.2em] transition-all hover:text-gold whitespace-nowrap",
                                    pathname === item.href ? "text-gold" : "text-white/90"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}

                    </nav>
                </div>
                <button
                    className="md:hidden text-white hover:text-gold transition-colors relative z-20"
                    onClick={() => setIsOpen(!isOpen)}
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
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col p-8 md:hidden overflow-y-auto"
                    >
                        <div className="flex justify-center mb-12">
                            <img src="/logo.png" alt="Charcoal N Chill" className="h-20" />
                        </div>
                        <nav className="flex flex-col gap-6 items-center">
                            {allNavItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "text-2xl font-heading font-medium transition-colors hover:text-gold",
                                        pathname === item.href ? "text-gold" : "text-white/80"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="mt-8 pt-8 border-t border-white/10 w-full text-center">
                                <Button className="w-full text-lg py-6" asChild>
                                    <Link href="/contact#reserve">Reserve Table</Link>
                                </Button>
                            </div>
                        </nav>
                        <button
                            className="absolute top-8 right-8 text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={32} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
