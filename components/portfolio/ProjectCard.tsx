"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/Card";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
    >
      <Link href={`/portfolio/${project.slug}`} className="group block">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="overflow-hidden rounded-lg bg-neutral-100">
          <div className="relative aspect-video w-full">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-serif text-xl font-bold text-neutral-900 transition-colors group-hover:text-accent md:text-2xl">
            {project.title}
          </h3>
          <p className="mt-2 font-sans text-sm leading-relaxed text-neutral-600 md:text-base">
            {project.tagline}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-neutral-100 border border-neutral-200 px-3 py-1 font-sans text-xs text-neutral-700 transition-colors group-hover:bg-accent/10 group-hover:text-accent group-hover:border-accent/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </Link>
    </motion.div>
  );
}

