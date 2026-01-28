import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  const email = "anthonyhasrouny8@gmail.com";

  const quickLinks = [
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/quote", label: "Request Quote" },
  ];

  const socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      href: "https://github.com/yourusername",
      icon: (
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/yourusername",
      icon: (
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Email",
      href: `mailto:${email}`,
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      {/* CTA Section */}
      <div className="border-b border-neutral-800 bg-neutral-800/50 py-12">
        <Container>
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
              Ready to start your project?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-sans text-base text-neutral-400 md:text-lg">
              Let's discuss how we can bring your vision to life with premium
              web development services.
            </p>
            <div className="mt-8">
              <Link href="/quote">
                <Button
                  variant="primary"
                  size="lg"
                  className="border border-white"
                >
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Footer Content */}
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* About Column */}
            <div>
              <h3 className="font-serif text-xl font-bold text-white">
                About
              </h3>
              <p className="mt-4 font-sans text-sm leading-relaxed text-neutral-400 md:text-base">
                Premium web development services focused on creating
                high-performance, beautiful websites that drive results for your
                business.
              </p>
            </div>

            {/* Quick Links Column */}
            <div>
              <h3 className="font-serif text-xl font-bold text-white">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-sans text-sm text-neutral-400 transition-colors hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-neutral-900 rounded-sm md:text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="font-serif text-xl font-bold text-white">
                Contact
              </h3>
              <div className="mt-4 space-y-3">
                <a
                  href={`mailto:${email}`}
                  className="block font-sans text-sm text-neutral-400 transition-colors hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-neutral-900 rounded-sm md:text-base"
                >
                  {email}
                </a>
                <div className="flex gap-4 pt-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 transition-colors hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-neutral-900 rounded-sm"
                      aria-label={`Visit ${social.name} profile`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Social */}
        <div className="border-t border-neutral-800 py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="font-sans text-sm text-neutral-500">
              © {currentYear} Anthony Hasrouny. All rights reserved.
            </p>
            <SocialLinks size={20} />
          </div>
        </div>
      </Container>
    </footer>
  );
}

