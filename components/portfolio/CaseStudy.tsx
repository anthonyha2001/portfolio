import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import type { Project } from "@/data/projects";

interface CaseStudyProps {
  project: Project;
}

export function CaseStudy({ project }: CaseStudyProps) {
  const heroImage = project.images[0] || project.thumbnail;

  return (
    <>
      {/* Hero Image */}
      <div className="relative h-[50vh] w-full md:h-[60vh]">
        <Image
          src={heroImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
      </div>

      {/* Title and Tagline */}
      <Section>
        <Container>
          <div className="mx-auto max-w-4xl">
            <h1 className="font-serif text-4xl font-bold text-neutral-900 md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-4 font-sans text-xl leading-relaxed text-neutral-600 md:text-2xl">
              {project.tagline}
            </p>
          </div>
        </Container>
      </Section>

      {/* The Challenge */}
      <Section className="bg-neutral-50">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-3xl font-bold text-neutral-900 md:text-4xl">
              The Challenge
            </h2>
            <p className="mt-6 font-sans text-base leading-relaxed text-neutral-700 md:text-lg">
              {project.problem}
            </p>
          </div>
        </Container>
      </Section>

      {/* The Solution */}
      <Section>
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-3xl font-bold text-neutral-900 md:text-4xl">
              The Solution
            </h2>
            <p className="mt-6 font-sans text-base leading-relaxed text-neutral-700 md:text-lg">
              {project.solution}
            </p>
          </div>
        </Container>
      </Section>

      {/* Results */}
      <Section className="bg-neutral-50">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-3xl font-bold text-neutral-900 md:text-4xl">
              Results
            </h2>
            <ul className="mt-6 space-y-4">
              {project.results.map((result, index) => (
                <li key={index} className="flex items-start gap-4">
                  <svg
                    className="mt-1 h-6 w-6 flex-shrink-0 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="font-sans text-base leading-relaxed text-neutral-700 md:text-lg">
                    {result}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Tech Stack */}
      <Section className="relative">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/projects/bg-body.png"
            alt="Abstract grid background"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <Container>
          <div className="mx-auto max-w-4xl text-white">
            <h2 className="font-serif text-3xl font-bold md:text-4xl">
              Technologies Used
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 font-sans text-sm font-medium text-white md:text-base"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold md:text-4xl">
              Interested in similar results?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-neutral-200 md:text-lg">
              Let's discuss how we can help your business achieve similar
              outcomes through premium web development.
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
      </Section>
    </>
  );
}

