import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { ValueProps } from "@/components/home/ValueProps";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Premium Web Development | Anthony Hasrouny",
  description:
    "Premium web development services for businesses who value quality and results. Custom Next.js websites and web apps that convert visitors into clients.",
  openGraph: {
    title: "Premium Web Development | Anthony Hasrouny",
    description:
      "Premium web development services for businesses who value quality and results. Custom Next.js websites and web apps that convert visitors into clients.",
    type: "website",
    locale: "en_US",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Web Development | Anthony Hasrouny",
    description:
      "Premium web development services for businesses who value quality and results. Custom Next.js websites and web apps that convert visitors into clients.",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <ValueProps />
      <FeaturedWork />
      <Section className="bg-gray-50">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold text-gray-900 md:text-5xl">
              Ready to elevate your web presence?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-gray-600 md:text-lg">
              Let's discuss how premium web development can transform your
              business and drive measurable results.
            </p>
            <div className="mt-10">
              <Link 
                href="/contact"
                className="inline-block bg-accent hover:bg-accent/90 text-[#1a202c] px-8 py-4 rounded-lg font-medium transition-colors shadow-sm border-2 border-[#1a202c]"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

