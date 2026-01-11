import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative z-10 bg-[#031322] border-t border-white/5 pt-24 pb-12" role="contentinfo">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand Section */}
                    <div className="space-y-8">
                        <Link href="/" className="inline-block group">
                            <div className="absolute inset-0 bg-gold/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                            <img src="/logo.png" alt="Charcoal N Chill" className="h-16 md:h-20 relative z-10" />
                        </Link>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Atlanta&apos;s premier destination for high-end hookah and authentic flavor. Experience the luxury of Charcoal N Chill.
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://instagram.com/charcoalnchill" className="text-gray-400 hover:text-gold transition-colors" aria-label="Follow us on Instagram" target="_blank" rel="noopener noreferrer">
                                <Instagram size={20} />
                            </Link>
                            <Link href="https://facebook.com/charcoalnchill" className="text-gray-400 hover:text-gold transition-colors" aria-label="Follow us on Facebook" target="_blank" rel="noopener noreferrer">
                                <Facebook size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            {["Home", "Menu", "About", "Events", "Private Events", "FAQ", "Blog", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                                        className="text-gray-400 hover:text-gold transition-colors text-sm"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Contact Us</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                                <span>
                                    11950 Jones Bridge Rd Ste 103<br />
                                    Alpharetta, GA 30005
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-gold shrink-0" />
                                <a href="tel:4705464866" className="hover:text-white transition-colors">
                                    (470) 546-4866
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-gold shrink-0" />
                                <a href="mailto:charcoalnchill@gmail.com" className="hover:text-white transition-colors">
                                    charcoalnchill@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Hours</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex justify-between">
                                <span>Tu - Th</span>
                                <span>5:00 PM - 1:00 AM</span>
                            </li>
                            <li className="flex justify-between text-white">
                                <span>Fr - Sa</span>
                                <span>5:00 PM - 2:00 AM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sunday</span>
                                <span>5:00 PM - 1:00 AM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Monday</span>
                                <span>Closed</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-xs tracking-widest uppercase">
                        &copy; {new Date().getFullYear()} Charcoal N Chill. All Rights Reserved.
                    </p>
                    <div className="flex gap-10">
                        {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
                            <Link key={item} href="#" className="text-xs text-gray-500 hover:text-gold uppercase tracking-widest transition-colors font-bold">
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
