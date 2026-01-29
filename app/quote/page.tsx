import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { QuoteForm } from "@/components/forms/QuoteForm";

export const metadata: Metadata = {
  title: "Request a Quote | Anthony Hasrouny",
  description:
    "Request a custom quote for your next web project with Anthony Hasrouny. Share your goals and receive a tailored proposal within 24 hours.",
  openGraph: {
    title: "Request a Quote | Anthony Hasrouny",
    description:
      "Request a custom quote for your next web project with Anthony Hasrouny. Share your goals and receive a tailored proposal within 24 hours.",
    type: "website",
    locale: "en_US",
    url: "/quote",
  },
  twitter: {
    card: "summary_large_image",
    title: "Request a Quote | Anthony Hasrouny",
    description:
      "Request a custom quote for your next web project with Anthony Hasrouny. Share your goals and receive a tailored proposal within 24 hours.",
  },
};

export default function Quote() {
  return (
    <main className="bg-gray-50">
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-bold text-neutral-900 md:text-6xl">
              Request a Quote
            </h1>
            <p className="mx-auto mt-6 font-sans text-base leading-relaxed text-neutral-600 md:text-lg">
              Let's discuss your project. I'll respond within 24 hours.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-6xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              {/* Form - Takes 2 columns */}
              <div className="lg:col-span-2">
                <QuoteForm />
              </div>

              {/* Info Sidebar - Takes 1 column */}
              <div className="lg:col-span-1">
                <div className="rounded-lg bg-neutral-50 p-8">
                  <h2 className="font-serif text-2xl font-bold text-neutral-900 md:text-3xl">
                    What to Expect
                  </h2>

                  <div className="mt-8 space-y-6">
                    <div>
                      <div className="flex items-center gap-3">
                        <svg
                          className="h-6 w-6 text-accent"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <h3 className="font-sans text-lg font-semibold text-neutral-900">
                          Response Time
                        </h3>
                      </div>
                      <p className="mt-2 font-sans text-base text-neutral-700">
                        I'll review your request and respond within 24 hours
                        with a detailed proposal tailored to your needs.
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-3">
                        <svg
                          className="h-6 w-6 text-accent"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                          />
                        </svg>
                        <h3 className="font-sans text-lg font-semibold text-neutral-900">
                          The Process
                        </h3>
                      </div>
                      <ul className="mt-2 space-y-2 font-sans text-base text-neutral-700">
                        <li className="flex items-start gap-2">
                          <span className="mt-1 text-accent">•</span>
                          <span>Initial consultation call</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 text-accent">•</span>
                          <span>Detailed project proposal</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 text-accent">•</span>
                          <span>Timeline and milestone review</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 text-accent">•</span>
                          <span>Project kickoff</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-3">
                        <svg
                          className="h-6 w-6 text-accent"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                        <h3 className="font-sans text-lg font-semibold text-neutral-900">
                          Confidentiality
                        </h3>
                      </div>
                      <p className="mt-2 font-sans text-base text-neutral-700">
                        All project details are kept confidential. Your
                        information is secure and will only be used to provide
                        you with a quote.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

