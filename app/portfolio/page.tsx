import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | Anthony Hasrouny",
  description:
    "Explore the portfolio of premium web development projects by Anthony Hasrouny. Real business results, modern UX, and high-performance web experiences.",
  openGraph: {
    title: "Portfolio & Case Studies | Anthony Hasrouny",
    description:
      "Explore the portfolio of premium web development projects by Anthony Hasrouny. Real business results, modern UX, and high-performance web experiences.",
    type: "website",
    locale: "en_US",
    url: "/portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio & Case Studies | Anthony Hasrouny",
    description:
      "Explore the portfolio of premium web development projects by Anthony Hasrouny. Real business results, modern UX, and high-performance web experiences.",
  },
};

export default function Portfolio() {
  return (
    <main>
      <Section id="portfolio">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-bold text-neutral-900 md:text-6xl">
              Portfolio
            </h1>
            <p className="mx-auto mt-6 font-sans text-base leading-relaxed text-neutral-600 md:text-lg">
              Real projects, real results. Explore our work and see how we've
              helped businesses achieve their goals through premium web
              development.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}

