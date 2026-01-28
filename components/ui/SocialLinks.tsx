"use client";

import Link from "next/link";
import type { HTMLAttributes } from "react";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

import type { SocialLink } from "@/data/social";
import { socialLinks } from "@/data/social";

type SocialIconName = keyof typeof Icons;

interface SocialLinksProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
  className?: string;
}

export function SocialLinks({
  size = 24,
  className = "",
  ...props
}: SocialLinksProps) {
  return (
    <div
      className={`flex items-center gap-4 ${className}`}
      {...props}
    >
      {socialLinks.map((social: SocialLink) => {
        const Icon =
          (Icons[social.icon as SocialIconName] as LucideIcon) ??
          Icons.Link;

        return (
          <Link
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="text-neutral-400 transition-transform duration-200 hover:scale-110"
          >
            <Icon
              size={size}
              className={`transition-colors duration-200 ${social.color}`}
            />
          </Link>
        );
      })}
    </div>
  );
}


