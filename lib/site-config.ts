/**
 * ─────────────────────────────────────────────────────────────
 *  CENTRAL SITE CONFIG  —  EDIT YOUR REAL DETAILS HERE
 * ─────────────────────────────────────────────────────────────
 *  Everything that is personal / contactable lives in this file.
 *  Replace the PLACEHOLDER values below with your real links.
 *  Search for "TODO" to find every value you should update.
 */

export const siteConfig = {
  name: "Akhil Kumar",
  initials: "AK",
  role: "Senior Software Engineer",
  tagline: "Full-Stack & React Native Developer",
  // Used for SEO / OpenGraph / canonical URLs.
  url: "https://akhilkumar.dev", // TODO: your production domain
  location: "India",
  timezone: "Asia/Kolkata (GMT+5:30)",
  description:
    "Akhil Kumar — Senior Software Engineer building premium, scalable web & mobile products with React, React Native and the MERN stack. 3+ years shipping production software.",
  valueProposition:
    "I design and engineer high-end digital products — from pixel-perfect interfaces to scalable backends.",

  // ── Availability (drives the Hiring section) ───────────────
  availability: {
    status: "Available", // "Available" | "Open to offers" | "Booked"
    label: "Available for full-time & freelance",
    noticePeriod: "Immediate / 15 days",
    openTo: ["Full-time roles", "Freelance projects", "Consulting"],
  },

  // ── Contact + Social  (TODO: replace placeholders) ─────────
  contact: {
    email: "thakuraksingh1@gmail.com", // TODO
    phone: "+91 75600 29425", // TODO
    whatsapp: "https://wa.me/917560029425", // TODO (digits only, no +)
    calendly: "https://calendly.com/thakuraksingh1/30min", // TODO
  },

  social: {
    github: "https://github.com/devakhil-kumar", // TODO verify
    linkedin: "https://www.linkedin.com/in/akhil-kumar-553010222/", // TODO verify
    twitter: "https://twitter.com/devakhilkumar", // TODO
    githubUsername: "devakhil-kumar",
  },

  // ── Resume (drop your PDF at /public/akhil-kumar-resume.pdf) ─
  resumeUrl: "/akhil-kumar-resume.pdf", // TODO add the file

  // ── Profile photo (at /public/profile.png) ─
  photo: "/profile.png",

  // ── Headline stats ─────────────────────────────────────────
  stats: [
    { value: 3, suffix: "+", label: "Years Experience" },
    { value: 25, suffix: "+", label: "Projects Delivered" },
    { value: 4, suffix: "", label: "Companies" },
    { value: 100, suffix: "%", label: "Client Satisfaction" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
