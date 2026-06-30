import type { LucideIcon } from "lucide-react";

export type ProjectCategory = "Web" | "Mobile" | "SaaS" | "Backend";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  tagline: string;
  description: string;
  client: string;
  year: string;
  timeline: string;
  featured: boolean;
  tech: string[];
  accent: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  metrics: ProjectMetric[];
  features: string[];
  challenge: string;
  solution: string;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  type: string;
  accent: string;
  current: boolean;
  highlights: string[];
  tags: string[];
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  accent: string;
  skills: { name: string; level: number }[];
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  initials: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  accent: string;
}
