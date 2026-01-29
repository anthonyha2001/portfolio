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
  url?: string;
}

export const projects: Project[] = [
  {
    slug: "elicheradicelb-ai-chat",
    title: "Elicheradicelb - AI Chat Website",
    tagline: "A modern web platform featuring an intelligent AI-powered chat system for enhanced user engagement",
    problem:
      "The client needed a dynamic website with an integrated AI chat system to provide instant, intelligent responses to user inquiries. The challenge was building a scalable real-time chat interface that could handle conversations seamlessly while maintaining fast response times and a smooth user experience across all devices.",
    solution:
      "Developed a full-stack web application using Next.js for server-side rendering and optimal performance. Built a real-time AI chat system with a responsive, modern interface using React and TypeScript. Implemented a robust Express.js backend API to handle chat requests and manage conversation state. Designed a PostgreSQL database schema for efficient message storage and retrieval. Created a polished UI with Tailwind CSS ensuring a seamless experience across desktop and mobile devices.",
    results: [
      "Real-time AI chat functionality with instant responses",
      "Fully responsive design optimized for all screen sizes",
      "Scalable architecture supporting concurrent users",
      "Fast page load times with Next.js optimization",
      "Secure and efficient data management with PostgreSQL",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    thumbnail: "/images/projects/project-1.png",
    images: [
      "/images/projects/project-1.png",
    ],
    featured: true,
    url: "https://elicheradicelb.com",
  },
];

