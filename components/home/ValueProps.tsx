"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

interface ValueProp {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const valueProps: ValueProp[] = [
  {
    icon: (
      <svg
        className="h-12 w-12 text-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: "Business-First Approach",
    description:
      "Every decision is made with your business goals in mind. We focus on ROI and measurable results, not just the latest technology. Your success metrics drive our development process, ensuring every feature delivers real value to your bottom line.",
  },
  {
    icon: (
      <svg
        className="h-12 w-12 text-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
    title: "Premium Quality",
    description:
      "Attention to detail is non-negotiable. We don't take shortcuts or cut corners. Every line of code is written with care, every design decision is intentional, and every interaction is polished. You're investing in quality that stands the test of time.",
  },
  {
    icon: (
      <svg
        className="h-12 w-12 text-accent"
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
    ),
    title: "Reliable Delivery",
    description:
      "Clear communication, transparent timelines, and on-time completion. We follow a proven process that keeps you informed every step of the way. No surprises, no delays, no excuses. When we commit to a deadline, we deliver.",
  },
];

export function ValueProps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section className="relative bg-neutral-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <Image
          src="/images/UI/anthonyha2001_Minimalist_dot_grid_pattern_very_light_navy_blu_249653fa-af76-49bf-9d73-6319a85dffef_1.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <Container>
        <div
          ref={ref}
          className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12"
        >
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="text-center"
            >
              <div className="mb-6 flex justify-center">{prop.icon}</div>
              <h3 className="mb-4 font-serif text-2xl font-bold text-neutral-900 md:text-3xl">
                {prop.title}
              </h3>
              <p className="font-sans text-base leading-relaxed text-neutral-600 md:text-lg">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

