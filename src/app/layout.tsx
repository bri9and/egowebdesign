import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { LayoutShell } from "@/components/layout-shell";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "KPT Designs | Modern Websites That Convert",
    template: "%s | KPT Designs",
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
  authors: [{ name: "KPT Designs" }],
  creator: "KPT Designs",
  publisher: "KPT Designs",
  metadataBase: new URL("https://kptdesigns.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "KPT Designs",
    title: "KPT Designs | Modern Websites That Convert",
    description:
      "We modernize outdated websites into fast, beautiful, high-converting experiences. Custom-coded, no templates, you own everything.",
  },
  twitter: {
    card: "summary_large_image",
    title: "KPT Designs | Modern Websites That Convert",
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
    name: "KPT Designs",
    description:
      "We modernize outdated websites into fast, beautiful, high-converting experiences. Custom-coded, no templates, you own everything.",
    url: "https://kptdesigns.vercel.app",
    email: "hello@kptdesigns.com",
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
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}>
        <ClerkProvider
          appearance={{
            variables: {
              colorPrimary: "#FF8000",
              colorBackground: "#1A1A1A",
              colorText: "#ffffff",
              colorTextSecondary: "rgba(255, 255, 255, 0.6)",
              colorInputBackground: "#0A0A0A",
              colorInputText: "#ffffff",
              borderRadius: "2px",
            },
          }}
        >
          <span style={{ position: 'fixed', top: 8, right: 12, fontSize: 11, color: 'rgba(0, 0, 0, 0.25)', zIndex: 9999, fontFamily: 'monospace', pointerEvents: 'none' }}>v3.0</span>
          <LayoutShell>{children}</LayoutShell>
        </ClerkProvider>
      </body>
    </html>
  );
}
