import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative z-[100] bg-dark-primary border-t border-white/5 pt-24 pb-12 overflow-hidden" role="contentinfo">
            {/* Ambient Glow */}
            <div className="absolute top-0 left-0 right-0 h-[200px] bg-[radial-gradient(ellipse_at_top,_var(--gold-glow)_0%,_transparent_70%)] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand Section */}
                    <div className="space-y-8">
                        <Link href="/" className="inline-block group relative">
                            <div className="absolute inset-0 bg-gold-primary/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <img src="/logo.png" alt="Charcoal N Chill - Premium Hookah & Indian Restaurant" className="h-16 md:h-20 w-auto object-contain relative z-10" loading="lazy" />
                        </Link>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Atlanta&apos;s premier destination for high-end hookah and authentic flavor. Experience the luxury of Charcoal N Chill.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/charcoal_n_chill/" className="w-10 h-10 flex items-center justify-center rounded-full bg-glass-bg border border-glass-border text-gray-400 hover:bg-gold-primary hover:text-dark-primary hover:-translate-y-1 transition-all duration-300" aria-label="Follow us on Instagram" target="_blank" rel="noopener noreferrer">
                                <Instagram size={20} />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61571869656813" className="w-10 h-10 flex items-center justify-center rounded-full bg-glass-bg border border-glass-border text-gray-400 hover:bg-gold-primary hover:text-dark-primary hover:-translate-y-1 transition-all duration-300" aria-label="Follow us on Facebook" target="_blank" rel="noopener noreferrer">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gold-primary relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-gold-primary">Quick Links</h4>
                        <ul className="space-y-2">
                            {[
                                { name: "Home", href: "/" },
                                { name: "Menu", href: "/menu" },
                                { name: "About", href: "/about" },
                                { name: "Events", href: "/events" },
                                { name: "Private Events", href: "/private-events" },
                                { name: "FAQ", href: "/faq" },
                                { name: "Blog", href: "/blog" },
                                { name: "Contact", href: "/contact" }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-400 hover:text-gold-primary hover:pl-2 transition-all duration-300 text-sm flex items-center gap-2 group"
                                    >
                                        <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-gold-primary">→</span>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gold-primary relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-gold-primary">Contact Us</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-start gap-3 group">
                                <MapPin size={18} className="text-gold-primary shrink-0 mt-0.5 group-hover:text-gold-light transition-colors" />
                                <span>
                                    11950 Jones Bridge Rd Ste 103<br />
                                    Alpharetta, GA 30005
                                </span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <Phone size={18} className="text-gold-primary shrink-0 group-hover:text-gold-light transition-colors" />
                                <a href="tel:4705464866" className="hover:text-white transition-colors">
                                    (470) 546-4866
                                </a>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <Mail size={18} className="text-gold-primary shrink-0 group-hover:text-gold-light transition-colors" />
                                <a href="mailto:charcoalnchill@gmail.com" className="hover:text-white transition-colors">
                                    charcoalnchill@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gold-primary relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-gold-primary">Hours</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex justify-between border-b border-white/5 pb-2">
                                <span>Tu - Th</span>
                                <span>5:00 PM - 1:00 AM</span>
                            </li>
                            <li className="flex justify-between text-white font-medium border-b border-white/5 pb-2">
                                <span>Fr - Sa</span>
                                <span>5:00 PM - 2:00 AM</span>
                            </li>
                            <li className="flex justify-between border-b border-white/5 pb-2">
                                <span>Sunday</span>
                                <span>5:00 PM - 1:00 AM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Monday</span>
                                <span className="text-brand-red">Closed</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-xs tracking-widest uppercase">
                        &copy; {new Date().getFullYear()} Charcoal N Chill. All Rights Reserved.
                    </p>
                    <div className="flex gap-10 items-center">
                        {/* Sitemap Link */}
                        <Link href="/sitemap.xml" className="text-xs text-gray-400 hover:text-gold-primary uppercase tracking-widest transition-colors font-bold">
                            Sitemap
                        </Link>
                        {/* Existing policy links */}
                        <Link href="/privacy-policy" className="text-xs text-gray-400 hover:text-gold-primary uppercase tracking-widest transition-colors font-bold">
                            Privacy Policy
                        </Link>
                        <Link href="/terms-of-service" className="text-xs text-gray-400 hover:text-gold-primary uppercase tracking-widest transition-colors font-bold">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
