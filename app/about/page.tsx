import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Lightbulb, FileText, Code2, Rocket } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Anthony Hasrouny | Web Developer",
  description:
    "Learn about my approach to premium web development, commitment to quality, and proven process for delivering exceptional results for businesses.",
  openGraph: {
    title: "About Anthony Hasrouny | Web Developer",
    description:
      "Learn about my approach to premium web development, commitment to quality, and proven process for delivering exceptional results for businesses.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Anthony Hasrouny | Web Developer",
    description:
      "Learn about my approach to premium web development, commitment to quality, and proven process for delivering exceptional results for businesses.",
  },
};

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start by understanding your business, goals, and challenges. Through detailed conversations and research, we identify what success looks like for your project.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "I create a comprehensive plan that outlines the project scope, timeline, and deliverables. You'll have complete visibility into the process before we begin.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "With a clear plan in place, I build your solution with attention to detail, regular updates, and opportunities for feedback at every milestone.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We launch your project with thorough testing, optimization, and training. Ongoing support ensures your solution continues to perform at its best.",
  },
];

const processIcons = [Lightbulb, FileText, Code2, Rocket] as const;

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Shopify",
  "Framer Motion",
];

export default function About() {
  return (
    <main>
      {/* About Me Section */}
      <Section id="about">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
              {/* Photo */}
              <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                <Image
                  src="/about-photo.png"
                  alt="Professional headshot"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <h1 className="font-serif text-4xl font-bold text-neutral-900 md:text-6xl">
                  About Me
                </h1>
                <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-neutral-700 md:text-lg">
                  <p>
                    With over a decade of experience in web development, I've
                    helped businesses of all sizes transform their online
                    presence. My journey began with a passion for creating
                    beautiful, functional websites that solve real business
                    problems.
                  </p>
                  <p>
                    I believe in a business-first approach to development. Every
                    line of code, every design decision, and every feature is
                    evaluated through the lens of your business goals. I don't
                    just build websites—I build solutions that drive results.
                  </p>
                  <p>
                    Quality is non-negotiable. I take pride in writing clean,
                    maintainable code and creating experiences that delight users
                    while delivering measurable outcomes. There are no shortcuts
                    when it comes to building something that represents your
                    brand and serves your customers.
                  </p>
                  <p>
                    My commitment extends beyond launch day. I work with you to
                    ensure your solution continues to perform, evolve, and grow
                    with your business. Your success is my success, and that
                    partnership mindset drives everything I do.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* My Process Section */}
      <Section className="bg-gradient-to-b from-white to-neutral-50">
        <Container>
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-serif text-3xl font-bold text-neutral-900 md:text-5xl">
              My Process
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-center font-sans text-base leading-relaxed text-neutral-600 md:text-lg">
              A proven approach that ensures clarity, quality, and results at
              every stage of your project.
            </p>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
              {processSteps.map((step, index) => {
                const Icon = processIcons[index];

                return (
                  <div
                    key={step.number}
                    className="relative flex flex-col items-center rounded-xl border border-neutral-100 bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-sans text-sm font-bold text-white">
                      {index + 1}
                    </div>
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/5 text-primary">
                      <Icon className="h-10 w-10" />
                    </div>
                    <h3 className="mt-6 font-serif text-2xl font-bold text-neutral-900 md:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 font-sans text-base leading-relaxed text-neutral-700 md:text-lg">
                      {step.description}
                    </p>
                    <div className="mt-6 h-1 w-16 rounded-full bg-accent" />
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Tools & Technologies */}
      <Section className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/projects/bg-body.png"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/85" />
        </div>
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-serif text-3xl font-bold text-white md:text-5xl">
              Tools & Technologies
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-center font-sans text-base leading-relaxed text-neutral-200 md:text-lg">
              I work with modern, proven technologies to build fast, scalable,
              and maintainable solutions.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-block px-4 py-2 bg-white/70 text-neutral-900 rounded-full border border-gray-200 hover:scale-110 transition-transform duration-200 font-sans text-base font-medium md:text-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold text-black md:text-5xl">
              Let's connect
            </h2>
            <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-neutral-600 md:text-lg">
              Ready to transform your online presence? Let's discuss how we can
              bring your vision to life with premium web development.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button
                  variant="secondary"
                  size="lg"
                  className="border border-accent hover:bg-black hover:text-white"
                >
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

