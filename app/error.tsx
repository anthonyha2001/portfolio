"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console in development
    if (process.env.NODE_ENV === "development") {
      console.error("Next.js error boundary caught:", error);
    }
    // In production, log to error reporting service
  }, [error]);

  return (
    <Section className="min-h-screen flex items-center">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-serif text-4xl font-bold text-neutral-900 md:text-6xl">
            Something went wrong
          </h1>
          <p className="mt-6 font-sans text-base leading-relaxed text-neutral-600 md:text-lg">
            We apologize for the inconvenience. An unexpected error has
            occurred. Please try again or return to the homepage.
          </p>
          {process.env.NODE_ENV === "development" && (
            <div className="mt-6 rounded-lg bg-red-50 p-4 text-left">
              <p className="font-sans text-sm font-semibold text-red-900">
                Error Details (Development Only):
              </p>
              <pre className="mt-2 overflow-auto font-mono text-xs text-red-700">
                {error.message}
                {error.stack}
              </pre>
              {error.digest && (
                <p className="mt-2 font-mono text-xs text-red-700">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          )}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={reset}
              className="inline-block bg-[#1a202c] hover:bg-[#1a202c]/90 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-sm"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="inline-block border-2 border-[#1a202c] text-[#1a202c] hover:bg-[#1a202c] hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Go Home
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}

