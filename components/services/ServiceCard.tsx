"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
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
      <Card className="group h-full border-2 border-neutral-200 transition-all duration-300 hover:border-accent hover:shadow-lg">
      <div className="flex h-full flex-col">
        <h3 className="mb-4 font-serif text-2xl font-bold text-neutral-900 md:text-3xl">
          {service.title}
        </h3>

        <p className="mb-6 flex-grow font-sans text-base leading-relaxed text-neutral-600 md:text-lg">
          {service.description}
        </p>

        <div className="mb-6">
          <h4 className="mb-3 font-sans text-sm font-semibold uppercase tracking-wide text-neutral-500">
            Deliverables
          </h4>
          <ul className="space-y-2">
            {service.deliverables.map((deliverable, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="font-sans text-sm text-neutral-700 md:text-base">
                  {deliverable}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6 border-t border-neutral-200 pt-6">
          <p className="font-sans text-sm text-neutral-600">
            <span className="font-semibold text-primary">Ideal for:</span>{" "}
            {service.idealFor}
          </p>
        </div>

        <div className="mt-auto">
          <Link href="/quote">
            <Button variant="primary" size="md" className="w-full">
              Get a Quote
            </Button>
          </Link>
        </div>
      </div>
    </Card>
    </motion.div>
  );
}

