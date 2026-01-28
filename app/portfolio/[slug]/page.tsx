import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CaseStudy } from "@/components/portfolio/CaseStudy";
import { projects } from "@/data/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Anthony Hasrouny",
      description: "The requested project could not be found in the portfolio.",
    };
  }

  const description = `${project.tagline} | Case study by Anthony Hasrouny`;

  return {
    title: `${project.title} | Portfolio | Anthony Hasrouny`,
    description,
    openGraph: {
      title: `${project.title} | Anthony Hasrouny`,
      description,
      type: "article",
      locale: "en_US",
      url: `/portfolio/${project.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Anthony Hasrouny`,
      description,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <CaseStudy project={project} />;
}

