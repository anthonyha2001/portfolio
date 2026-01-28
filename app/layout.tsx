import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["700"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://anthonyhasrouny.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Premium Web Development Portfolio | Anthony Hasrouny",
  description:
    "Premium web development services by Anthony Hasrouny. High-performance, conversion-focused websites and web apps for businesses who value quality and results.",
  keywords: [
    "Anthony Hasrouny",
    "web development",
    "web developer",
    "Next.js",
    "React",
    "premium websites",
    "portfolio",
  ],
  authors: [{ name: "Anthony Hasrouny" }],
  openGraph: {
    title: "Premium Web Development Portfolio | Anthony Hasrouny",
    description:
      "Premium web development services by Anthony Hasrouny. High-performance, conversion-focused websites and web apps for businesses who value quality and results.",
    type: "website",
    locale: "en_US",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Web Development Portfolio | Anthony Hasrouny",
    description:
      "Premium web development services by Anthony Hasrouny. High-performance, conversion-focused websites and web apps for businesses who value quality and results.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Anthony Hasrouny",
    url: siteUrl,
    jobTitle: "Web Developer",
    description:
      "Premium web developer specializing in high-performance, conversion-focused websites and web applications.",
    sameAs: [
      "https://github.com/yourusername",
      "https://linkedin.com/in/yourusername",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          // JSON-LD must be a string
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}

