import { constructMetadata } from "@/lib/metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata = constructMetadata({
    title: "Privacy Policy | Charcoal N Chill",
    description: "Privacy Policy for Charcoal N Chill. Learn how we collect, use, and protect your personal information.",
    path: "/privacy-policy"
});

export default function PrivacyPolicyPage() {
    return (
        <>
            <Header />
            <main className="pt-32 pb-20 min-h-screen relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-gold-primary/10 to-transparent pointer-events-none" />

                <div className="container px-4 md:px-6 relative z-10">
                    <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy-policy" }]} />

                    <div className="mt-8 mb-12 text-center space-y-4">
                        <h1 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tight uppercase">
                            Privacy <span className="gradient-text">Policy</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-gray-400 text-lg">
                            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto glass-bg p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl backdrop-blur-xl">
                        <div className="space-y-8 text-gray-300">
                            <section>
                                <h3 className="text-2xl font-heading font-bold text-gold-primary mb-4">1. Introduction</h3>
                                <p className="leading-relaxed">
                                    Welcome to Charcoal N Chill (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or our physical location in Alpharetta, GA.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-heading font-bold text-gold-primary mb-4">2. Information We Collect</h3>
                                <p className="leading-relaxed mb-4">We may collect the following types of information:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong className="text-white">Personal Identification Information:</strong> Name, email address, phone number, and ID information (for age verification).</li>
                                    <li><strong className="text-white">Reservation Data:</strong> Date and time of booking, party size, and special requests.</li>
                                    <li><strong className="text-white">Payment Information:</strong> Credit card details processed securely via our third-party payment providers.</li>
                                    <li><strong className="text-white">Usage Data:</strong> Information on how you access and use our website, including your IP address and browser type.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-2xl font-heading font-bold text-gold-primary mb-4">3. Age Verification & Compliance</h3>
                                <p className="leading-relaxed">
                                    Charcoal N Chill operates as a 21+ hookah lounge during specific hours. We strictly adhere to local and state laws regarding the sale of tobacco products. We may scan or verify government-issued IDs to ensure compliance. We do not knowingly collect personal information from individuals under the legal age.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-heading font-bold text-gold-primary mb-4">4. How We Use Your Information</h3>
                                <p className="leading-relaxed mb-4">We use your information to:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Process and confirm your reservations and private event bookings.</li>
                                    <li>Verify your age for entry and service in compliance with Georgia law.</li>
                                    <li>Send administrative emails, such as reservation confirmations or policy updates.</li>
                                    <li>Improve our website, menu offerings, and customer service.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-2xl font-heading font-bold text-gold-primary mb-4">5. Cookies and Tracking</h3>
                                <p className="leading-relaxed">
                                    We use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect some website functionality.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-heading font-bold text-gold-primary mb-4">6. Third-Party Sharing</h3>
                                <p className="leading-relaxed">
                                    We do not sell your personal data. We may share data with trusted third-party service providers (e.g., reservation platforms, payment processors) solely for the purpose of operating our business.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-heading font-bold text-gold-primary mb-4">7. Contact Us</h3>
                                <p className="leading-relaxed">
                                    If you have questions about this Privacy Policy, please contact us at:<br />
                                    <strong className="text-white block mt-2">Charcoal N Chill</strong>
                                    11950 Jones Bridge Rd Ste 103, Alpharetta, GA 30005<br />
                                    Email: <a href="mailto:charcoalnchill@gmail.com" className="text-gold-primary hover:text-white transition-colors">charcoalnchill@gmail.com</a>
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
