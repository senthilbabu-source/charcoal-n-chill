import { constructMetadata } from "@/lib/metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata = constructMetadata({
    title: "Terms of Service | Charcoal N Chill",
    description: "Terms of Service for Charcoal N Chill. Rules regarding reservations, age requirements, and liability.",
    path: "/terms-of-service"
});

export default function TermsPage() {
    return (
        <>
            <Header />
            <main className="pt-32 pb-20 min-h-screen relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-gold-primary/10 to-transparent pointer-events-none" />

                <div className="container px-4 md:px-6 relative z-10">
                    <Breadcrumbs className="text-gray-400" />

                    <div className="mt-8 mb-12 text-center space-y-4">
                        <h1 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tight uppercase">
                            Terms of <span className="gradient-text">Service</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-gray-400 text-lg">
                            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto glass-bg p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl backdrop-blur-xl">
                        <div className="space-y-8 text-gray-300">
                            <section>
                                <h3 className="text-2xl font-heading font-bold text-gold-primary mb-4">1. Agreement to Terms</h3>
                                <p className="leading-relaxed">
                                    By accessing our website or visiting Charcoal N Chill, you agree to these Terms of Service. If you do not agree, please do not use our services.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-heading font-bold text-gold-primary mb-4">2. Age Requirement (21+)</h3>
                                <p className="leading-relaxed">
                                    Charcoal N Chill is strictly a 21+ establishment for hookah services. Valid, government-issued photo identification is required for entry. We reserve the right to refuse service to anyone unable to provide valid ID or who appears to be under the influence.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-heading font-bold text-gold-primary mb-4">3. Reservations & Cancellations</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Reservations constitute a commitment to your table. Please arrive on time.</li>
                                    <li>We offer a 15-minute grace period for reservations. After 15 minutes, your table may be released to walk-in guests.</li>
                                    <li>For large parties or private events, specific cancellation policies and deposits may apply as detailed in your booking agreement.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-2xl font-heading font-bold text-gold-primary mb-4">4. Code of Conduct</h3>
                                <p className="leading-relaxed mb-4">To ensure a premium and relaxing atmosphere for all guests:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>A smart casual dress code is enforced.</li>
                                    <li>Disruptive, aggressive, or inappropriate behavior will not be tolerated and will result in immediate removal from the premises.</li>
                                    <li>Respect for other guests and staff is mandatory.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-2xl font-heading font-bold text-gold-primary mb-4">5. Liability & Hookah Safety</h3>
                                <p className="leading-relaxed">
                                    You acknowledge the inherent risks associated with the use of hookah and consumption of hot coals. Charcoal N Chill is not liable for incidental damage to clothing or personal property resulting from the use of hookah equipment. Please do not touch or move the coals yourself; ask a staff member for assistance.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-heading font-bold text-gold-primary mb-4">6. Changes to Terms</h3>
                                <p className="leading-relaxed">
                                    We reserve the right to modify these terms at any time. Continued use of our services following any changes indicates your acceptance of the new terms.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-heading font-bold text-gold-primary mb-4">7. Governing Law</h3>
                                <p className="leading-relaxed">
                                    These terms are governed by the laws of the State of Georgia.
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
