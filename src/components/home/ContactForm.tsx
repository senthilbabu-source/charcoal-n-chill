"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";

export function ContactForm() {
    const { addToast } = useToast();
    const [isLoading, setIsLoading] = useState(false);

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validatePhone = (phone: string) => {
        // Accepts (123) 456-7890, 123-456-7890, 1234567890, +1 123 456 7890
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
        const message = data.message as string;

        // 1. Strict Required Values Check
        if (!name?.trim() || !email?.trim() || !phone?.trim() || !message?.trim()) {
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
            addToast("Please enter a valid phone number (e.g. 470-555-0123).", "error");
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
                    _subject: `New Contact Inquiry: ${data.subject}`,
                    _template: "table"
                })
            });

            if (response.ok) {
                addToast("Message sent! Check your inbox for confirmation.", "success");
                form.reset();
            } else {
                addToast("Something went wrong. Please try again or call us.", "error");
            }
        } catch (error) {
            console.error("Submission error:", error);
            addToast("Failed to send message. Please call us directly.", "error");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="space-y-8" id="reserve">
            <div className="space-y-2">
                <h2 className="text-3xl font-heading font-bold text-white">Send a Message</h2>
                <p className="text-gray-400">Complete the form below and we&apos;ll get back to you shortly.</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                {/* Honeypot for spam protection */}
                <input type="text" name="_honey" style={{ display: 'none' }} />
                <input type="hidden" name="_captcha" value="false" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="input-group">
                        <label className="input-label">Your Name <span className="text-red-500">*</span></label>
                        <div className="input-wrapper">
                            <input name="name" type="text" className="input" placeholder="John Doe" required />
                        </div>
                    </div>
                    <div className="input-group">
                        <label className="input-label">Email Address <span className="text-red-500">*</span></label>
                        <div className="input-wrapper">
                            <input name="email" type="email" className="input" placeholder="john@example.com" required />
                        </div>
                    </div>
                </div>
                <div className="input-group">
                    <label className="input-label">Phone Number <span className="text-red-500">*</span></label>
                    <div className="input-wrapper">
                        <input name="phone" type="tel" className="input" placeholder="(470) 555-0123" required />
                    </div>
                </div>
                <div className="input-group">
                    <label className="input-label">Subject</label>
                    <div className="select-wrapper">
                        <select name="subject" className="input input-select bg-dark-secondary">
                            <option>General Inquiry</option>
                            <option>Reservation Request</option>
                            <option>Private Event</option>
                            <option>Feedback</option>
                        </select>
                    </div>
                </div>
                <div className="input-group">
                    <label className="input-label">Your Message <span className="text-red-500">*</span></label>
                    <textarea name="message" rows={5} className="input input-textarea" placeholder="How can we help you?" required />
                </div>
                <Button className="w-full py-6 text-lg" isLoading={isLoading} disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send Message"}
                </Button>
            </form>
        </div>
    );
}
