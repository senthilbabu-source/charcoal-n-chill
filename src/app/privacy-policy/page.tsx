import { constructMetadata } from "@/lib/metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
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
            <main className="pt-20">
                <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy-policy" }]} />
                <section className="bg-charcoal py-20 border-b border-white/5 mx-auto">
                    <div className="container px-4 md:px-6 text-center space-y-4">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">
                            Privacy <span className="text-gold">Policy</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
                            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>
                </section>

                <Section>
                    <div className="max-w-4xl mx-auto prose prose-invert prose-lg text-gray-300">
                        <h3>1. Introduction</h3>
                        <p>
                            Welcome to Charcoal N Chill ("we," "our," or "us"). We respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or our physical location in Alpharetta, GA.
                        </p>

                        <h3>2. Information We Collect</h3>
                        <p>We may collect the following types of information:</p>
                        <ul>
                            <li><strong>Personal Identification Information:</strong> Name, email address, phone number, and ID information (for age verification).</li>
                            <li><strong>Reservation Data:</strong> Date and time of booking, party size, and special requests.</li>
                            <li><strong>Payment Information:</strong> Credit card details processed securely via our third-party payment providers.</li>
                            <li><strong>Usage Data:</strong> Information on how you access and use our website, including your IP address and browser type.</li>
                        </ul>

                        <h3>3. Age Verification & Compliance</h3>
                        <p>
                            Charcoal N Chill operates as a 21+ hookah lounge during specific hours. We strictly adhere to local and state laws regarding the sale of tobacco products. We may scan or verify government-issued IDs to ensure compliance. We do not knowingly collect personal information from individuals under the legal age.
                        </p>

                        <h3>4. How We Use Your Information</h3>
                        <p>We use your information to:</p>
                        <ul>
                            <li>Process and confirm your reservations and private event bookings.</li>
                            <li>Verify your age for entry and service in compliance with Georgia law.</li>
                            <li>Send administrative emails, such as reservation confirmations or policy updates.</li>
                            <li>Improve our website, menu offerings, and customer service.</li>
                        </ul>

                        <h3>5. Cookies and Tracking</h3>
                        <p>
                            We use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect some website functionality.
                        </p>

                        <h3>6. Third-Party Sharing</h3>
                        <p>
                            We do not sell your personal data. We may share data with trusted third-party service providers (e.g., reservation platforms, payment processors) solely for the purpose of operating our business.
                        </p>

                        <h3>7. Contact Us</h3>
                        <p>
                            If you have questions about this Privacy Policy, please contact us at:<br />
                            <strong>Charcoal N Chill</strong><br />
                            11950 Jones Bridge Rd Ste 103, Alpharetta, GA 30005<br />
                            Email: charcoalnchill@gmail.com
                        </p>
                    </div>
                </Section>
            </main>
            <Footer />
        </>
    );
}
