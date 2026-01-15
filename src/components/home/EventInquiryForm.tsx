"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";

export function EventInquiryForm() {
    const { addToast } = useToast();
    const [isLoading, setIsLoading] = useState(false);

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validatePhone = (phone: string) => {
        return /^\+?(\d{1,3})?[-. ]?\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/.test(phone);
    };

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        const email = data.email as string;
        const phone = data.phone as string;
        const name = data.name as string;
        const date = data.date as string;
        const guests = data.guests as string;

        // 1. Strict Required Values Check
        if (!name?.trim() || !email?.trim() || !phone?.trim() || !date || !guests) {
            addToast("Please fill in all required fields.", "error");
            setIsLoading(false);
            return;
        }

        // 2. Strict Regex Validation
        if (!validateEmail(email)) {
            addToast("Please enter a valid email address.", "error");
            setIsLoading(false);
            return;
        }

        if (!validatePhone(phone)) {
            addToast("Please enter a valid phone number.", "error");
            setIsLoading(false);
            return;
        }

        try {
            // 3. Send to FormSubmit.co
            const response = await fetch("https://formsubmit.co/ajax/charcoalnchill@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...data,
                    _subject: `Private Event Inquiry: ${data.eventType}`,
                    _template: "table"
                })
            });

            if (response.ok) {
                addToast("Inquiry sent! Our coordinator will contact you within 24 hours.", "success");
                form.reset();
            } else {
                addToast("Something went wrong. Please try again or call us.", "error");
            }
        } catch (error) {
            console.error("Submission error:", error);
            addToast("Failed to send inquiry. Please call us directly.", "error");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="max-w-4xl mx-auto p-8 md:p-12 bg-black rounded-3xl border border-white/5">
            <div className="text-center mb-12 space-y-2">
                <h2 className="text-3xl font-heading font-bold text-white">Event Inquiry</h2>
                <p className="text-gray-400">Tell us about your event and our coordinator will reach out within 24 hours.</p>
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit} noValidate>
                {/* Honeypot */}
                <input type="text" name="_honey" style={{ display: 'none' }} />
                <input type="hidden" name="_captcha" value="false" />

                <div className="space-y-2">
                    <label htmlFor="inquiry-name" className="text-sm font-medium text-gray-300">Full Name <span className="text-red-500">*</span></label>
                    <input id="inquiry-name" name="name" type="text" className="w-full px-4 py-3 bg-charcoal border border-white/10 rounded-xl focus:border-gold outline-none text-white transition-colors" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                    <label htmlFor="inquiry-email" className="text-sm font-medium text-gray-300">Email Address <span className="text-red-500">*</span></label>
                    <input id="inquiry-email" name="email" type="email" className="w-full px-4 py-3 bg-charcoal border border-white/10 rounded-xl focus:border-gold outline-none text-white transition-colors" placeholder="john@example.com" required />
                </div>
                <div className="space-y-2">
                    <label htmlFor="inquiry-phone" className="text-sm font-medium text-gray-300">Phone Number <span className="text-red-500">*</span></label>
                    <input id="inquiry-phone" name="phone" type="tel" className="w-full px-4 py-3 bg-charcoal border border-white/10 rounded-xl focus:border-gold outline-none text-white transition-colors" placeholder="(470) 546-4866" required />
                </div>
                <div className="space-y-2">
                    <label htmlFor="inquiry-type" className="text-sm font-medium text-gray-300">Event Type</label>
                    <div className="relative">
                        <select id="inquiry-type" name="eventType" className="w-full px-4 py-3 bg-charcoal border border-white/10 rounded-xl focus:border-gold outline-none text-white transition-colors appearance-none cursor-pointer">
                            <option>Birthday Party</option>
                            <option>Corporate Event</option>
                            <option>Bachelor/Bachelorette</option>
                            <option>Other celebration</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
                    </div>
                </div>
                <div className="space-y-2">
                    <label htmlFor="inquiry-date" className="text-sm font-medium text-gray-300">Preferred Date <span className="text-red-500">*</span></label>
                    <input id="inquiry-date" name="date" type="date" className="w-full px-4 py-3 bg-charcoal border border-white/10 rounded-xl focus:border-gold outline-none text-white transition-colors" required />
                </div>
                <div className="space-y-2">
                    <label htmlFor="inquiry-guests" className="text-sm font-medium text-gray-300">Estimated Guest Count <span className="text-red-500">*</span></label>
                    <input id="inquiry-guests" name="guests" type="number" className="w-full px-4 py-3 bg-charcoal border border-white/10 rounded-xl focus:border-gold outline-none text-white transition-colors" placeholder="20" required min="1" />
                </div>
                <div className="md:col-span-2 space-y-2">
                    <label htmlFor="inquiry-message" className="text-sm font-medium text-gray-300">Special Requests / Message</label>
                    <textarea id="inquiry-message" name="message" rows={4} className="w-full px-4 py-3 bg-charcoal border border-white/10 rounded-xl focus:border-gold outline-none text-white transition-colors" placeholder="Tell us more about your vision..." />
                </div>
                <div className="md:col-span-2">
                    <Button className="w-full py-6 text-lg" isLoading={isLoading} disabled={isLoading}>
                        {isLoading ? "Sending Inquiry..." : "Send Inquiry"}
                    </Button>
                </div>
            </form>
        </div>
    );
}
