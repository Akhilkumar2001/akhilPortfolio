import { Layout, Server, Database, Smartphone, Cloud, Wrench } from "lucide-react";
import type { SkillCategory } from "@/lib/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Layout,
    accent: "#7c5cff",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 88 },
      { name: "TypeScript", level: 78 },
      { name: "Redux Toolkit", level: 88 },
    ],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    accent: "#22d3ee",
    skills: [
      { name: "React Native", level: 92 },
      { name: "Expo", level: 80 },
      { name: "Push Notifications", level: 78 },
      { name: "Native Modules", level: 70 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    accent: "#ff6584",
    skills: [
      { name: "Node.js", level: 84 },
      { name: "Express.js", level: 84 },
      { name: "REST APIs", level: 90 },
      { name: "Socket.IO", level: 72 },
      { name: ".NET Core", level: 55 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    accent: "#43e97b",
    skills: [
      { name: "MongoDB", level: 82 },
      { name: "Redis", level: 64 },
      { name: "Mongoose", level: 85 },
      { name: "SQL Basics", level: 60 },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    accent: "#f59e0b",
    skills: [
      { name: "Vercel", level: 85 },
      { name: "Git & GitHub", level: 90 },
      { name: "CI/CD", level: 65 },
      { name: "Docker (basics)", level: 55 },
    ],
  },
  {
    title: "Payments & Tools",
    icon: Wrench,
    accent: "#9c88ff",
    skills: [
      { name: "Stripe", level: 70 },
      { name: "Razorpay", level: 75 },
      { name: "Postman", level: 88 },
      { name: "Figma → Code", level: 82 },
    ],
  },
];

export const techStack = [
  "React",
  "Next.js",
  "React Native",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Redis",
  "Socket.IO",
  "Redux",
  "Tailwind CSS",
  "Stripe",
  "Razorpay",
  "GraphQL",
  "Git",
  "Vercel",
  "Figma",
  "GSAP",
];
