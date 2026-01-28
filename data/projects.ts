export interface Project {
  slug: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  results: string[];
  technologies: string[];
  thumbnail: string;
  images: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "luxe-fashion-ecommerce",
    title: "Luxe Fashion E-commerce Platform",
    tagline: "Transforming a legacy Shopify store into a modern, high-converting shopping experience",
    problem:
      "A premium fashion retailer was struggling with a 15-year-old Shopify theme that was slow, difficult to maintain, and failing to convert visitors. Mobile experience was particularly poor, with 40% of mobile users abandoning their carts. The outdated design didn't reflect their luxury brand positioning, and they were losing market share to competitors with modern online experiences.",
    solution:
      "I redesigned and rebuilt their entire e-commerce platform using Shopify's latest theme architecture with custom Liquid templates. Implemented a mobile-first design approach with optimized product pages, streamlined checkout flow, and integrated advanced filtering. Added custom features including size guides, virtual try-on integration, and personalized product recommendations. Built a custom admin dashboard for inventory management and analytics.",
    results: [
      "45% increase in conversion rate within 3 months",
      "60% reduction in page load time (from 4.2s to 1.7s)",
      "38% increase in mobile revenue",
      "25% reduction in cart abandonment rate",
      "$2.3M additional annual revenue attributed to the redesign",
    ],
    technologies: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "Tailwind CSS",
      "Shopify API",
      "WebP Optimization",
    ],
    thumbnail: "/images/projects/project-1.png",
    images: [
      "/images/projects/project-1.png",
    ],
    featured: true,
  },
  {
    slug: "analytics-saas-dashboard",
    title: "Analytics SaaS Dashboard",
    tagline: "Building a scalable analytics platform for growing SaaS companies",
    problem:
      "A B2B SaaS startup needed a comprehensive analytics dashboard to help their customers track key metrics, but their existing solution was slow, unreliable, and couldn't handle their growing user base. The dashboard frequently crashed under load, real-time data updates were inconsistent, and the UI was confusing for non-technical users. They were losing customers to competitors with better analytics offerings.",
    solution:
      "Developed a modern, real-time analytics dashboard using React with a Node.js backend. Implemented WebSocket connections for live data updates, built custom data visualization components using Chart.js, and created an intuitive drag-and-drop interface for custom report building. Designed a scalable architecture using microservices to handle 10x traffic growth. Added role-based access control and export functionality for reports.",
    results: [
      "99.9% uptime achieved (up from 94%)",
      "80% reduction in page load time",
      "3x increase in daily active users",
      "Customer retention improved by 35%",
      "Successfully scaled to handle 50,000+ concurrent users",
    ],
    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "WebSockets",
      "Chart.js",
      "Express",
      "Redis",
    ],
    thumbnail: "/images/projects/project-2.png",
    images: [
      "/images/projects/project-2.png",
    ],
    featured: true,
  },
  {
    slug: "tech-startup-marketing",
    title: "Tech Startup Marketing Website",
    tagline: "A high-performance marketing site that drives qualified leads",
    problem:
      "A fast-growing tech startup needed a new marketing website to support their Series A fundraising and customer acquisition goals. Their existing WordPress site was slow, difficult to update, and didn't effectively communicate their value proposition. The marketing team couldn't make updates without developer help, and the site wasn't generating the quality leads they needed to hit growth targets.",
    solution:
      "Built a modern, content-driven marketing website using Next.js with a headless CMS (Contentful) for easy content management. Implemented server-side rendering for optimal SEO performance, created conversion-optimized landing pages, and integrated marketing automation tools. Designed a component-based architecture that allows the marketing team to build new pages without code. Added A/B testing capabilities and comprehensive analytics tracking.",
    results: [
      "150% increase in organic traffic within 6 months",
      "65% improvement in lead quality score",
      "40% increase in demo request conversions",
      "95+ Lighthouse performance score",
      "Marketing team can now publish content independently",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Contentful CMS",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
      "Google Analytics",
    ],
    thumbnail: "/images/projects/project-3.png",
    images: [
      "/images/projects/project-3.png",
    ],
    featured: true,
  },
  {
    slug: "healthcare-portal",
    title: "Healthcare Patient Portal",
    tagline: "Secure, accessible patient portal improving healthcare delivery",
    problem:
      "A regional healthcare network needed to modernize their patient portal to meet new regulatory requirements and improve patient engagement. Their legacy system was difficult to use, especially for elderly patients, and didn't integrate with their electronic health records (EHR) system. Low adoption rates meant patients weren't accessing important health information, and staff were spending excessive time on phone support.",
    solution:
      "Developed a HIPAA-compliant patient portal with focus on accessibility and user experience. Built secure authentication, appointment scheduling, prescription refill requests, and lab results viewing. Created a responsive design optimized for all devices with large, clear typography and intuitive navigation. Integrated with existing EHR system via secure APIs. Implemented comprehensive security measures including two-factor authentication and encrypted data transmission.",
    results: [
      "75% patient portal adoption rate (up from 22%)",
      "50% reduction in phone support calls",
      "100% HIPAA compliance achieved",
      "4.8/5 patient satisfaction score",
      "30% improvement in appointment show-up rates",
    ],
    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "AWS",
      "OAuth 2.0",
      "HL7 FHIR",
      "Tailwind CSS",
    ],
    thumbnail: "/images/projects/healthcare-portal-thumb.png",
    images: [
      "/images/projects/healthcare-portal-thumb.png",
      "/images/projects/anthonyha2001_Set_of_three_minimalist_icons_handshake_busines_0b854f80-f6cb-402a-9569-0f24e84d3857_0.png",
      "/images/projects/anthonyha2001_Set_of_three_minimalist_icons_handshake_busines_da185060-e063-404b-8dcb-b8cf6e3b61c8_2.png",
    ],
    featured: false,
  },
];

