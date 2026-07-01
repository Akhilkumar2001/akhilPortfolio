import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "church-translator",
    title: "ChurchTranslator",
    category: "AI",
    tagline: "Real-time voice-to-voice translation for live events",
    description:
      "A real-time voice-to-voice translation platform on mobile and web. It translates live speech into multiple languages instantly, letting people follow conversations, sermons and events in their preferred language — enabling seamless communication across countries and languages.",
    client: "Language Tech",
    year: "2025",
    featured: true,
    tech: ["React.js", "React Native", "Node.js", "MongoDB", "Python"],
    accent: "#7c5cff",
    liveUrl: "http://churchtranslator.com/",
    metrics: [
      { label: "Mode", value: "Voice → Voice" },
      { label: "Platforms", value: "Web + Mobile" },
      { label: "Languages", value: "Multi" },
    ],
    features: [
      "Instant live speech translation",
      "Multi-language audio output",
      "Mobile and web experience",
      "Built for sermons, events & conversations",
    ],
    challenge:
      "Delivering low-latency voice translation that feels live during sermons and events, across both mobile and web.",
    solution:
      "Built a React Native + React platform on a Node.js backend with a Python translation pipeline, streaming translated audio to each listener in their chosen language.",
  },
  {
    slug: "onelinguo",
    title: "Onelinguo",
    category: "AI",
    tagline: "Live voice translation for global communication",
    description:
      "A live voice-to-voice translation platform designed for global communication. It translates spoken content in real time and delivers the translated audio in the user's selected language, so people from different countries can understand each other effortlessly.",
    client: "Language Tech",
    year: "2025",
    featured: true,
    tech: ["React.js", "React Native", "Node.js", "MongoDB", "Python"],
    accent: "#22d3ee",
    liveUrl: "http://onelinguo.com/",
    metrics: [
      { label: "Mode", value: "Real-time" },
      { label: "Platforms", value: "Web + Mobile" },
      { label: "Reach", value: "Global" },
    ],
    features: [
      "Real-time spoken-content translation",
      "Audio delivered in the user's language",
      "Cross-country communication",
      "Shared codebase across web & mobile",
    ],
    challenge:
      "Enabling natural cross-language conversation in real time without breaking the flow of speech.",
    solution:
      "Engineered a streaming translation flow with a Python language pipeline behind a Node.js API, surfaced through polished React and React Native clients.",
  },
  {
    slug: "talkbrush",
    title: "TalkBrush",
    category: "Mobile",
    tagline: "Real-time voice translation, in your pocket",
    description:
      "A real-time voice translation app that converts spoken conversations into the listener's preferred language. It translates and delivers speech instantly, helping users communicate naturally across language barriers. Published on the Google Play Store.",
    client: "Language Tech",
    year: "2025",
    featured: true,
    tech: ["React Native", "Node.js", "MongoDB", "Python", "React.js"],
    accent: "#ff6584",
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.talkbrush&hl=en_IN",
    metrics: [
      { label: "Platform", value: "Android" },
      { label: "Mode", value: "Voice translation" },
      { label: "Status", value: "On Play Store" },
    ],
    features: [
      "Instant conversation translation",
      "Listener's-language audio output",
      "Natural cross-language chat",
      "Published native Android app",
    ],
    challenge:
      "Packaging a real-time translation experience into a smooth, store-ready mobile app.",
    solution:
      "Shipped a React Native app backed by a Node.js + Python translation service, optimised for low-latency audio and a clean conversational UI.",
  },
  {
    slug: "wolf-dashboard",
    title: "Wolf Dashboard",
    category: "SaaS",
    tagline: "Sales performance & dynamic commission engine",
    description:
      "A dashboard to manage store sales performance, calculate employee commissions dynamically from sales data, and track targets on a fortnightly basis. It provides reporting, performance monitoring, target management and commission calculations across multiple store locations.",
    client: "Retail · Australia",
    year: "2025",
    featured: true,
    tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
    accent: "#9c88ff",
    liveUrl: "http://170.64.177.174/",
    metrics: [
      { label: "Engine", value: "Dynamic commissions" },
      { label: "Targets", value: "Fortnightly" },
      { label: "Scope", value: "Multi-store" },
    ],
    features: [
      "Dynamic commission calculation from sales data",
      "Fortnightly target setting & tracking",
      "Performance monitoring & reporting",
      "Multi-store location support",
    ],
    challenge:
      "Commission rules differ per store and period, and must stay accurate as sales data and targets change every fortnight.",
    solution:
      "Built a configurable commission engine on a MERN stack with fortnightly target tracking and reporting dashboards across all store locations.",
  },
  {
    slug: "ballarat-store",
    title: "Ballarat Store",
    category: "SaaS",
    tagline: "Store sales & commission management dashboard",
    description:
      "A store management platform for sales performance, dynamic commission calculation from sales data, and fortnightly target tracking — with reporting, performance monitoring and commission management across multiple locations.",
    client: "Retail · Australia",
    year: "2024",
    featured: false,
    tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
    accent: "#43e97b",
    liveUrl: "http://170.64.175.132/",
    metrics: [
      { label: "Engine", value: "Commissions" },
      { label: "Targets", value: "Fortnightly" },
      { label: "Reporting", value: "Built-in" },
    ],
    features: [
      "Sales performance tracking",
      "Dynamic commission calculation",
      "Fortnightly target management",
      "Reporting & performance monitoring",
    ],
    challenge:
      "Giving store managers a clear, real-time view of performance and accurate commissions without manual spreadsheets.",
    solution:
      "Delivered a MERN dashboard that automates commission math and target tracking, with reporting that managers can act on.",
  },
  {
    slug: "cyberpulse",
    title: "CyberPulse",
    category: "SaaS",
    tagline: "In-house platform across web & mobile",
    description:
      "An in-house CyberPulse product spanning web and mobile, built with the MERN stack and React Native. A full-stack platform delivered end-to-end by the Cyberbells team.",
    client: "Cyberbells · In-House",
    year: "2024",
    featured: true,
    tech: ["React.js", "React Native", "Node.js", "MongoDB"],
    accent: "#7c5cff",
    liveUrl: "https://cyberpulse360.com/",
    metrics: [
      { label: "Type", value: "In-House" },
      { label: "Platforms", value: "Web + Mobile" },
      { label: "Stack", value: "MERN + RN" },
    ],
    features: [
      "Full-stack web application",
      "Companion mobile app",
      "Shared MERN backend",
      "End-to-end in-house delivery",
    ],
    challenge:
      "Building and maintaining a cohesive product across web and mobile from a single backend.",
    solution:
      "Architected a shared Node.js/MongoDB backend serving both a React web app and a React Native mobile app for a consistent experience.",
  },
  {
    slug: "juco-pipeline",
    title: "Juco Pipeline",
    category: "Web",
    tagline: "Pipeline management web platform",
    description:
      "A web platform for managing pipeline operations and data, built with the MERN stack. Currently in active development.",
    client: "Industrial",
    year: "2026",
    featured: false,
    tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
    accent: "#f59e0b",
    liveUrl: "https://jucopipeline.ai/",
    metrics: [
      { label: "Domain", value: "Pipeline ops" },
      { label: "Stack", value: "MERN" },
      { label: "Type", value: "Web app" },
    ],
    features: [
      "Operational data management",
      "MERN web application",
      "Reporting & tracking",
      "Built for scale",
    ],
    challenge:
      "Turning complex pipeline operations into a clear, manageable web workflow.",
    solution:
      "Developing a MERN web application focused on structured data management and an intuitive operator workflow.",
  },
  {
    slug: "onepulse-work",
    title: "OnePulseWork",
    category: "SaaS",
    tagline: "Work & operations management platform",
    description:
      "A work management platform spanning web and mobile, built with the MERN stack and React Native to streamline day-to-day operations.",
    client: "HR / Work Tech",
    year: "2026",
    featured: false,
    tech: ["React.js", "React Native", "Node.js", "MongoDB"],
    accent: "#22d3ee",
    liveUrl: "https://onepulsework.com/",
    metrics: [
      { label: "Platforms", value: "Web + Mobile" },
      { label: "Stack", value: "MERN + RN" },
      { label: "Focus", value: "Operations" },
    ],
    features: [
      "Web & mobile experience",
      "Operations management",
      "Shared MERN backend",
      "Built for teams",
    ],
    challenge:
      "Unifying work management across desktop and on-the-go mobile use.",
    solution:
      "Building a cross-platform MERN + React Native product with a shared backend for consistent data everywhere.",
  },
  {
    slug: "society-smart-hub",
    title: "SocietySmartHub",
    category: "SaaS",
    tagline: "Smart society & community management",
    description:
      "A community management platform for residential societies, spanning web and mobile. Built with the MERN stack and React Native to handle society operations end-to-end.",
    client: "PropTech",
    year: "2026",
    featured: false,
    tech: ["React.js", "React Native", "Node.js", "MongoDB"],
    accent: "#43e97b",
    liveUrl: undefined,
    metrics: [
      { label: "Platforms", value: "Web + Mobile" },
      { label: "Stack", value: "MERN + RN" },
      { label: "Domain", value: "Community mgmt" },
    ],
    features: [
      "Society operations management",
      "Resident-facing mobile app",
      "Web admin platform",
      "Shared MERN backend",
    ],
    challenge:
      "Coordinating residents, admins and society operations in one connected system.",
    solution:
      "Developing a MERN + React Native platform that links a resident mobile app with a web admin dashboard.",
  },
  {
    slug: "ugive",
    title: "Ugive",
    category: "Web",
    tagline: "Giving & community platform (web + mobile)",
    description:
      "A giving and community platform available on web and mobile, built with the MERN stack and React Native. Currently in active development.",
    client: "Charity · Australia",
    year: "2026",
    featured: false,
    tech: ["React.js", "React Native", "Node.js", "MongoDB"],
    accent: "#ff6584",
    liveUrl: "http://ugive.com.au/",
    metrics: [
      { label: "Platforms", value: "Web + Mobile" },
      { label: "Stack", value: "MERN + RN" },
      { label: "Domain", value: "Giving" },
    ],
    features: [
      "Web & mobile apps",
      "Community engagement features",
      "Shared MERN backend",
      "Built for reach",
    ],
    challenge:
      "Making giving simple and engaging across both web and mobile audiences.",
    solution:
      "Building a cross-platform MERN + React Native experience with a unified backend.",
  },
  {
    slug: "viteride",
    title: "ViteRide",
    category: "Mobile",
    tagline: "Ride & mobility mobile app",
    description:
      "A mobility / ride application built with React Native on a Node.js and MongoDB backend. Currently in active development.",
    client: "Mobility",
    year: "2026",
    featured: false,
    tech: ["React Native", "Node.js", "MongoDB"],
    accent: "#9c88ff",
    liveUrl: undefined,
    metrics: [
      { label: "Platform", value: "Mobile" },
      { label: "Stack", value: "RN + Node" },
      { label: "Domain", value: "Mobility" },
    ],
    features: [
      "Native mobile ride experience",
      "Node.js + MongoDB backend",
      "Built for real-time use",
      "Scalable architecture",
    ],
    challenge:
      "Delivering a responsive, real-time ride experience on mobile.",
    solution:
      "Developing a React Native app backed by a Node.js/MongoDB service designed for live, location-driven flows.",
  },
  {
    slug: "switchedon-store",
    title: "SwitchedOn Store",
    category: "SaaS",
    tagline: "Store sales & commission dashboard",
    description:
      "A store management dashboard for sales performance, dynamic commission calculation, and fortnightly target tracking with reporting and performance monitoring across multiple locations. Currently in development.",
    client: "Retail · Australia",
    year: "2026",
    featured: false,
    tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
    accent: "#f59e0b",
    liveUrl: undefined,
    metrics: [
      { label: "Engine", value: "Commissions" },
      { label: "Targets", value: "Fortnightly" },
      { label: "Scope", value: "Multi-store" },
    ],
    features: [
      "Sales performance tracking",
      "Dynamic commission calculation",
      "Fortnightly target management",
      "Multi-location reporting",
    ],
    challenge:
      "Replicating a robust commission and target system for a new retail brand.",
    solution:
      "Building a configurable MERN dashboard reusing a proven commission engine across store locations.",
  },
  {
    slug: "cyberpulse-2",
    title: "CyberPulse 2.0",
    category: "SaaS",
    tagline: "Next-gen in-house platform",
    description:
      "The next generation of the in-house CyberPulse product, spanning web and mobile with the MERN stack and React Native. Currently in development.",
    client: "Cyberbells · In-House",
    year: "2026",
    featured: false,
    tech: ["React.js", "React Native", "Node.js", "MongoDB"],
    accent: "#7c5cff",
    liveUrl: undefined,
    metrics: [
      { label: "Type", value: "In-House" },
      { label: "Platforms", value: "Web + Mobile" },
      { label: "Edition", value: "2.0" },
    ],
    features: [
      "Rebuilt web platform",
      "Companion mobile app",
      "Shared MERN backend",
      "Improved architecture",
    ],
    challenge:
      "Evolving the original CyberPulse into a more scalable, refined product.",
    solution:
      "Re-architecting the platform across web and mobile with a cleaner MERN + React Native foundation.",
  },
  {
    slug: "flock-customer-app",
    title: "Flock — Customer App",
    category: "Mobile",
    tagline: "Customer-facing mobile application",
    description:
      "A customer-facing mobile application built with React Native, delivered end-to-end.",
    client: "Consumer",
    year: "2024",
    featured: false,
    tech: ["React Native"],
    accent: "#22d3ee",
    liveUrl: undefined,
    metrics: [
      { label: "Platform", value: "Mobile" },
      { label: "Stack", value: "React Native" },
      { label: "Audience", value: "Customers" },
    ],
    features: [
      "Native customer mobile app",
      "Smooth, responsive UI",
      "Cross-platform build",
      "End-to-end delivery",
    ],
    challenge:
      "Delivering a polished customer mobile experience on a single codebase.",
    solution:
      "Built the customer app in React Native with a focus on smooth navigation and a clean UX.",
  },
  {
    slug: "ethionest",
    title: "EthioNest",
    category: "Web",
    tagline: "Web & mobile platform (MERN + React Native)",
    description:
      "A web and mobile platform built with the MERN stack and React Native, delivered as a full-stack product.",
    client: "Real Estate",
    year: "2025",
    featured: false,
    tech: ["React.js", "React Native", "Node.js", "MongoDB"],
    accent: "#43e97b",
    liveUrl: undefined,
    metrics: [
      { label: "Platforms", value: "Web + Mobile" },
      { label: "Stack", value: "MERN + RN" },
      { label: "Type", value: "Full-stack" },
    ],
    features: [
      "Web & mobile experience",
      "Shared MERN backend",
      "Responsive interfaces",
      "Scalable foundation",
    ],
    challenge:
      "Shipping a consistent product across web and mobile from one backend.",
    solution:
      "Built a MERN + React Native platform sharing a single API across both clients.",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const projectCategories: ("All" | Project["category"])[] = [
  "All",
  "Web",
  "Mobile",
  "SaaS",
  "AI",
];
