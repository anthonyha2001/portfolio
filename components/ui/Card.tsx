import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-lg bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-xl md:p-8 ${className}`}
    >
      {children}
    </div>
  );
}

