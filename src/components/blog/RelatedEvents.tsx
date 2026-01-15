import Link from "next/link";
import Image from "next/image";
import { weeklyRituals } from "@/data/events";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export function RelatedEvents() {
    // Take first 3 events for now, or random
    const events = weeklyRituals.slice(0, 3);

    return (
        <div className="bg-dark-secondary border-t border-white/5 py-12">
            <div className="container px-4">
                <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-white uppercase tracking-widest">
                        Upcoming <span className="text-gold-primary">Vibes</span>
                    </h2>
                    <Link
                        href="/events"
                        className="group flex items-center gap-2 text-sm font-bold text-gold-primary hover:text-white transition-colors mt-4 md:mt-0"
                    >
                        View Full Calendar <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {events.map((event, idx) => (
                        <Link
                            key={idx}
                            href="/events"
                            className="group relative bg-black/40 border border-white/10 rounded-xl overflow-hidden hover:border-gold-primary/30 transition-all duration-300"
                        >
                            <div className="flex items-start gap-4 p-4">
                                <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                                    <Image
                                        src={event.image || "/images/hero-bg.jpg"}
                                        alt={event.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 text-xs font-bold text-gold-primary mb-1">
                                        <Calendar size={12} /> {event.day}
                                    </div>
                                    <h3 className="text-white font-bold mb-1 group-hover:text-gold-primary transition-colors">
                                        {event.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-xs text-gray-400">
                                        <Clock size={12} /> {event.time}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
