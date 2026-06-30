import {
  Layers,
  Globe,
  Smartphone,
  Boxes,
  LayoutDashboard,
  Palette,
  Plug,
  Server,
  Network,
  Gauge,
  Sparkles,
  Lightbulb,
} from "lucide-react";
import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    title: "Full-Stack Development",
    description: "End-to-end product engineering — from database schema to polished UI.",
    icon: Layers,
    accent: "#7c5cff",
  },
  {
    title: "Web Applications",
    description: "Fast, SEO-ready web apps built with React, Next.js and modern tooling.",
    icon: Globe,
    accent: "#9c88ff",
  },
  {
    title: "Mobile Applications",
    description: "Cross-platform iOS & Android apps with React Native and native polish.",
    icon: Smartphone,
    accent: "#22d3ee",
  },
  {
    title: "SaaS Development",
    description: "Multi-tenant SaaS platforms with billing, auth and analytics baked in.",
    icon: Boxes,
    accent: "#ff6584",
  },
  {
    title: "Dashboard Development",
    description: "Data-dense, beautiful dashboards with charts, filters and exports.",
    icon: LayoutDashboard,
    accent: "#43e97b",
  },
  {
    title: "UI/UX Development",
    description: "Pixel-perfect, accessible interfaces translated faithfully from Figma.",
    icon: Palette,
    accent: "#f59e0b",
  },
  {
    title: "API Development",
    description: "Robust, documented REST APIs with auth, rate-limiting and validation.",
    icon: Plug,
    accent: "#7c5cff",
  },
  {
    title: "Backend Development",
    description: "Scalable Node.js services with Redis caching and real-time sockets.",
    icon: Server,
    accent: "#22d3ee",
  },
  {
    title: "System Architecture",
    description: "Clean, scalable architecture decisions that age well as you grow.",
    icon: Network,
    accent: "#ff6584",
  },
  {
    title: "Performance Optimization",
    description: "Lighthouse 95+, fast loads, and buttery-smooth interactions.",
    icon: Gauge,
    accent: "#43e97b",
  },
  {
    title: "AI Integration",
    description: "LLM-powered features, chat, and automation wired into your product.",
    icon: Sparkles,
    accent: "#9c88ff",
  },
  {
    title: "Technical Consulting",
    description: "Architecture reviews, tech-stack decisions and team mentoring.",
    icon: Lightbulb,
    accent: "#f59e0b",
  },
];
