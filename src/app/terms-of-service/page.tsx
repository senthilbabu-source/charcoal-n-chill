import { constructMetadata } from "@/lib/metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
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
            <main className="pt-20">
                <Breadcrumbs items={[{ label: "Terms of Service", href: "/terms-of-service" }]} />
                <section className="bg-charcoal py-20 border-b border-white/5 mx-auto">
                    <div className="container px-4 md:px-6 text-center space-y-4">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">
                            Terms of <span className="text-gold">Service</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
                            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>
                </section>

                <Section>
                    <div className="max-w-4xl mx-auto prose prose-invert prose-lg text-gray-300">
                        <h3>1. Agreement to Terms</h3>
                        <p>
                            By accessing our website or visiting Charcoal N Chill, you agree to these Terms of Service. If you do not agree, please do not use our services.
                        </p>

                        <h3>2. Age Requirement (21+)</h3>
                        <p>
                            Charcoal N Chill is strictly a 21+ establishment for hookah services. Valid, government-issued photo identification is required for entry. We reserve the right to refuse service to anyone unable to provide valid ID or who appears to be under the influence.
                        </p>

                        <h3>3. Reservations & Cancellations</h3>
                        <ul>
                            <li>Reservations constitute a commitment to your table. Please arrive on time.</li>
                            <li>We offer a 15-minute grace period for reservations. After 15 minutes, your table may be released to walk-in guests.</li>
                            <li>For large parties or private events, specific cancellation policies and deposits may apply as detailed in your booking agreement.</li>
                        </ul>

                        <h3>4. Code of Conduct</h3>
                        <p>
                            To ensure a premium and relaxing atmosphere for all guests:
                        </p>
                        <ul>
                            <li>A smart casual dress code is enforced.</li>
                            <li>Disruptive, aggressive, or inappropriate behavior will not be tolerated and will result in immediate removal from the premises.</li>
                            <li>Respect for other guests and staff is mandatory.</li>
                        </ul>

                        <h3>5. Liability & Hookah Safety</h3>
                        <p>
                            You acknowledge the inherent risks associated with the use of hookah and consumption of hot coals. Charcoal N Chill is not liable for incidental damage to clothing or personal property resulting from the use of hookah equipment. Please do not touch or move the coals yourself; ask a staff member for assistance.
                        </p>

                        <h3>6. Changes to Terms</h3>
                        <p>
                            We reserve the right to modify these terms at any time. Continued use of our services following any changes indicates your acceptance of the new terms.
                        </p>

                        <h3>7. Governing Law</h3>
                        <p>
                            These terms are governed by the laws of the State of Georgia.
                        </p>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
