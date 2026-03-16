import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LayoutShell } from "@/components/layout-shell";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ego Web Design | Modern Websites That Convert",
    template: "%s | Ego Web Design",
  },
  description:
    "We modernize outdated websites into fast, beautiful, high-converting experiences. Custom-coded, no templates, you own everything.",
  keywords: [
    "web design",
    "website modernization",
    "website redesign",
    "custom web development",
    "modern websites",
    "responsive design",
    "ecommerce website",
    "website hosting",
    "IT consulting",
    "small business website",
  ],
  authors: [{ name: "Ego Web Design" }],
  creator: "Ego Web Design",
  publisher: "Ego Web Design",
  metadataBase: new URL("https://egowebdesign.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Ego Web Design",
    title: "Ego Web Design | Modern Websites That Convert",
    description:
      "We modernize outdated websites into fast, beautiful, high-converting experiences. Custom-coded, no templates, you own everything.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ego Web Design | Modern Websites That Convert",
    description:
      "We modernize outdated websites into fast, beautiful, high-converting experiences. Custom-coded, no templates, you own everything.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Ego Web Design",
    description:
      "We modernize outdated websites into fast, beautiful, high-converting experiences. Custom-coded, no templates, you own everything.",
    url: "https://egowebdesign.com",
    email: "hello@egowebdesign.com",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    priceRange: "$$",
    serviceType: [
      "Web Design",
      "Website Redesign",
      "Web Development",
      "Ecommerce",
      "IT Consulting",
      "Managed Hosting",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <span style={{ position: 'fixed', top: 8, right: 12, fontSize: 11, color: 'rgba(0, 0, 0, 0.25)', zIndex: 9999, fontFamily: 'monospace', pointerEvents: 'none' }}>v2.0</span>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
