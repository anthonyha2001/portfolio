export interface Service {
  slug: string;
  title: string;
  description: string;
  deliverables: string[];
  idealFor: string;
}

export const services: Service[] = [
  {
    slug: "custom-web-development",
    title: "Custom Web Development",
    description:
      "Build a website that perfectly represents your brand and drives conversions. From concept to launch, we create custom solutions tailored to your business goals.",
    deliverables: [
      "Fully responsive website design",
      "Custom functionality and features",
      "Content management system",
      "SEO optimization",
      "Performance optimization",
      "Launch and deployment",
    ],
    idealFor: "Businesses needing a unique online presence that stands out",
  },
  {
    slug: "ecommerce-solutions",
    title: "E-commerce Solutions",
    description:
      "Transform your online store into a revenue-generating machine. We build high-converting e-commerce platforms that turn visitors into customers.",
    deliverables: [
      "E-commerce platform setup",
      "Shopping cart and checkout",
      "Payment gateway integration",
      "Inventory management",
      "Order tracking system",
      "Analytics and reporting",
    ],
    idealFor: "Retailers and businesses selling products online",
  },
  {
    slug: "web-applications",
    title: "Web Applications",
    description:
      "Powerful, scalable web applications that solve complex business problems. From dashboards to SaaS platforms, we build applications that grow with you.",
    deliverables: [
      "Custom web application",
      "User authentication system",
      "Database design and setup",
      "API development",
      "Admin dashboard",
      "Ongoing maintenance",
    ],
    idealFor: "Companies needing custom software solutions",
  },
];

