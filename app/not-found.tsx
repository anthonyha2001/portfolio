import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <Section className="min-h-screen flex items-center">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-serif text-4xl font-bold text-neutral-900 md:text-6xl">
            404
          </h1>
          <h2 className="mt-4 font-serif text-2xl font-bold text-neutral-900 md:text-4xl">
            Page Not Found
          </h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-neutral-600 md:text-lg">
            The page you're looking for doesn't exist or has been moved. Please
            check the URL or return to the homepage.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-block bg-[#1a202c] hover:bg-[#1a202c]/90 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-sm"
            >
              Go Home
            </Link>
            <Link
              href="/portfolio"
              className="inline-block border-2 border-[#1a202c] text-[#1a202c] hover:bg-[#1a202c] hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}

