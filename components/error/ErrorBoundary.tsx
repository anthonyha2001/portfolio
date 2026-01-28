"use client";

import { Component, type ReactNode } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === "development") {
      console.error("ErrorBoundary caught an error:", error, errorInfo);
    }
    // In production, you could log to an error reporting service
    // e.g., Sentry, LogRocket, etc.
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <Section className="min-h-screen flex items-center">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="font-serif text-4xl font-bold text-neutral-900 md:text-6xl">
                Something went wrong
              </h1>
              <p className="mt-6 font-sans text-base leading-relaxed text-neutral-600 md:text-lg">
                We apologize for the inconvenience. An unexpected error has
                occurred. Please try refreshing the page or return to the
                homepage.
              </p>
              {process.env.NODE_ENV === "development" && this.state.error && (
                <div className="mt-6 rounded-lg bg-red-50 p-4 text-left">
                  <p className="font-sans text-sm font-semibold text-red-900">
                    Error Details (Development Only):
                  </p>
                  <pre className="mt-2 overflow-auto font-mono text-xs text-red-700">
                    {this.state.error.toString()}
                    {this.state.error.stack}
                  </pre>
                </div>
              )}
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button
                  onClick={() => window.location.reload()}
                  className="inline-block bg-[#1a202c] hover:bg-[#1a202c]/90 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-sm"
                >
                  Refresh Page
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

    return this.props.children;
  }
}

