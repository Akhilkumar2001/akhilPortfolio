import type { Certification, Testimonial } from "@/lib/types";

export const testimonials: Testimonial[] = [
  {
    quote:
      "Akhil took ownership of our mobile app from day one. The architecture decisions he made early saved us months of rework. Rare to find an engineer who thinks about the product, not just the code.",
    name: "Product Lead",
    title: "Head of Product",
    company: "Retail Startup",
    initials: "PL",
  },
  {
    quote:
      "Our real-time platform needed to scale fast and Akhil delivered. Sub-100ms messaging, clean code, and he communicated clearly at every step. Easily one of the best contractors we've worked with.",
    name: "Engineering Manager",
    title: "Engineering Manager",
    company: "SaaS Product",
    initials: "EM",
  },
  {
    quote:
      "He rebuilt our dashboard and cut admin time by 40%. Akhil is fast, reliable, and genuinely cares about the end user. We keep coming back to him for new projects.",
    name: "Operations Director",
    title: "Director of Operations",
    company: "Healthcare Provider",
    initials: "OD",
  },
  {
    quote:
      "From Figma to a production Next.js app, the fidelity was incredible. Lighthouse scores in the high 90s out of the box. Highly recommend for any premium web work.",
    name: "Founder",
    title: "Founder & CEO",
    company: "B2B SaaS",
    initials: "FC",
  },
];

export const certifications: Certification[] = [
  {
    title: "Full-Stack Web Development",
    issuer: "Self-Directed · Production Experience",
    year: "2022",
    accent: "#7c5cff",
  },
  {
    title: "React & React Native Specialization",
    issuer: "Industry Practice",
    year: "2023",
    accent: "#22d3ee",
  },
  {
    title: "Backend & System Design",
    issuer: "On-the-job · Cyberbells",
    year: "2024",
    accent: "#ff6584",
  },
  {
    title: "TypeScript & Scalable Architecture",
    issuer: "Continuous Learning",
    year: "2025",
    accent: "#43e97b",
  },
];
