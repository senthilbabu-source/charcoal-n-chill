"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppFloat() {
    return (
        <motion.a
            href="https://wa.me/14705464866"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center w-[60px] h-[60px] p-[15px] bg-[#25D366] text-white rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.4)] transition-shadow group"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
            aria-label="Chat with us on WhatsApp"
        >
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:animate-ping opacity-20" />
            <MessageCircle size={28} fill="currentColor" className="relative z-10" aria-hidden="true" />
            <span className="absolute right-full mr-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-white/10">
                Chat with us!
            </span>
        </motion.a>
    );
}
