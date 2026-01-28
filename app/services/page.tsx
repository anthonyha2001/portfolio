import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/services/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Web Development Services | Anthony Hasrouny",
  description:
    "Premium web development services by Anthony Hasrouny. Custom websites, web apps, and e-commerce experiences tailored to your business goals.",
  openGraph: {
    title: "Web Development Services | Anthony Hasrouny",
    description:
      "Premium web development services by Anthony Hasrouny. Custom websites, web apps, and e-commerce experiences tailored to your business goals.",
    type: "website",
    locale: "en_US",
    url: "/services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Services | Anthony Hasrouny",
    description:
      "Premium web development services by Anthony Hasrouny. Custom websites, web apps, and e-commerce experiences tailored to your business goals.",
  },
};

export default function Services() {
  return (
    <main>
      <Section id="services">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-bold text-neutral-900 md:text-6xl">
              Services
            </h1>
            <p className="mx-auto mt-6 font-sans text-base leading-relaxed text-neutral-600 md:text-lg">
              Premium web development services for businesses who value quality,
              performance, and results. Every project is approached with your
              business goals in mind, ensuring we deliver solutions that drive
              measurable outcomes and long-term success.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}

