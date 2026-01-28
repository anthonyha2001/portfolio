"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/projects";

export function FeaturedWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <Section id="portfolio">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-bold text-neutral-900 md:text-5xl">
              Featured Work
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-sans text-base text-neutral-600 md:text-lg">
              Real projects, real results. See how we've helped businesses
              achieve their goals through premium web development.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group block"
                >
                  <div className="overflow-hidden rounded-lg bg-neutral-100">
                    <div className="relative aspect-video w-full">
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-serif text-xl font-bold text-neutral-900 transition-colors group-hover:text-accent md:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-2 font-sans text-sm text-neutral-600 md:text-base">
                      {project.tagline}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-neutral-100 border border-neutral-200 px-3 py-1 font-sans text-xs text-neutral-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/portfolio"
              className="inline-block border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-black px-8 py-4 rounded-lg font-medium transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

