import Link from "next/link";
import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";

export const metadata: Metadata = {
  title: "Contact | Anthony Hasrouny",
  description:
    "Get in touch with Anthony Hasrouny for premium web development projects, collaborations, and consulting. Reach out via email, WhatsApp, or social media.",
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <Section className="bg-neutral-50">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-bold text-neutral-900 md:text-6xl">
              Let&apos;s Connect
            </h1>
            <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-neutral-700 md:text-lg">
              Whether you&apos;re ready to start a project or exploring what&apos;s
              possible, I&apos;d love to hear from you. Choose the channel that works
              best for you.
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact Methods */}
      <Section>
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Email */}
              <div className="rounded-lg bg-white p-6 shadow-md transition-transform transition-shadow duration-200 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h2 className="mt-4 font-serif text-xl font-semibold text-neutral-900 md:text-2xl">
                    Email
                  </h2>
                  <Link
                    href="mailto:anthony.hasrouny@gmail.com"
                    className="mt-3 font-sans text-base text-primary underline underline-offset-4"
                  >
                    anthony.hasrouny@gmail.com
                  </Link>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="rounded-lg bg-white p-6 shadow-md transition-transform transition-shadow duration-200 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h2 className="mt-4 font-serif text-xl font-semibold text-neutral-900 md:text-2xl">
                    WhatsApp
                  </h2>
                  <Link
                    href="https://wa.me/96181802886"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 font-sans text-base text-primary underline underline-offset-4"
                  >
                    Chat on WhatsApp
                  </Link>
                </div>
              </div>

              {/* Location */}
              <div className="rounded-lg bg-white p-6 shadow-md transition-transform transition-shadow duration-200 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h2 className="mt-4 font-serif text-xl font-semibold text-neutral-900 md:text-2xl">
                    Location
                  </h2>
                  <p className="mt-3 font-sans text-base text-neutral-700">
                    Based in Lebanon, working with clients worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Social Media */}
      <Section className="bg-neutral-50">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold text-neutral-900 md:text-5xl">
              Follow Me
            </h2>
            <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-neutral-700 md:text-lg">
              Stay connected and see what I&apos;m working on across social media.
            </p>
            <div className="mt-8 flex justify-center">
              <SocialLinks />
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      {/* <Section className="bg-primary">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold text-black md:text-5xl">
              Ready to start your project?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-neutral-600 md:text-lg">
              Share your goals, timeline, and budget, and I&apos;ll follow up with a
              tailored plan for your project.
            </p>
            <div className="mt-10">
              <Link href="/quote">
                <Button variant="secondary" size="lg">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section> */}
    </main>
  );
}


