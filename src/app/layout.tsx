import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { JsonLd, organizationSchema } from "@/components/layout/JsonLd";
import { Analytics } from "@/components/layout/Analytics";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Charcoal N Chill",
    default: "Charcoal N Chill | Premium Hookah Lounge & Indian Restaurant",
  },
  description: "Experience Atlanta's finest hookah lounge in Alpharetta. 50+ premium flavors, authentic Indian cuisine, craft cocktails, live belly dancing. Open late.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={cn(
          raleway.variable,
          "antialiased bg-background text-foreground font-sans min-h-screen"
        )}
        suppressHydrationWarning
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only fixed top-4 left-4 z-[100] bg-gold text-black px-6 py-3 rounded-full font-black uppercase tracking-widest text-sm shadow-2xl transition-all outline-none focus:ring-2 focus:ring-brand-red"
        >
          Skip to Content
        </a>
        <JsonLd data={organizationSchema} id="org-schema" />
        <Analytics />
        <div id="main-content" tabIndex={-1} className="outline-none">
          {children}
        </div>
      </body>
    </html>
  );
}
