import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "ecommerce-mobile-app",
    title: "E-Commerce Mobile App",
    category: "Mobile",
    tagline: "A full-featured shopping experience for iOS & Android",
    description:
      "Cross-platform e-commerce app built with React Native — product catalog, cart, order tracking, and seamless Razorpay payment integration with a custom checkout flow.",
    client: "Retail Startup",
    year: "2025",
    timeline: "12 weeks",
    featured: true,
    tech: ["React Native", "Node.js", "MongoDB", "Redux Toolkit", "Razorpay"],
    accent: "#7c5cff",
    liveUrl: "#",
    githubUrl: "#",
    metrics: [
      { label: "Checkout conversion", value: "+34%" },
      { label: "App store rating", value: "4.8★" },
      { label: "Cold start", value: "<1.2s" },
    ],
    features: [
      "Real-time cart sync across devices",
      "One-tap Razorpay checkout",
      "Order tracking with push notifications",
      "Offline-first product browsing",
    ],
    challenge:
      "The client needed a performant native experience with a complex payment flow while keeping a single codebase for both platforms.",
    solution:
      "Architected a Redux Toolkit state layer with optimistic updates and an offline cache, integrated Razorpay's native SDK, and reduced cold start by lazy-loading non-critical screens.",
  },
  {
    slug: "realtime-chat-platform",
    title: "Real-time Chat Platform",
    category: "Web",
    tagline: "Scalable messaging with rooms, presence & history",
    description:
      "Full-stack chat platform powered by Socket.IO — supports rooms, typing indicators, presence, and persistent message history with infinite scroll.",
    client: "SaaS Product",
    year: "2024",
    timeline: "8 weeks",
    featured: true,
    tech: ["React.js", "Node.js", "Socket.IO", "MongoDB", "Express"],
    accent: "#ff6584",
    liveUrl: "#",
    githubUrl: "#",
    metrics: [
      { label: "Concurrent users", value: "5k+" },
      { label: "Message latency", value: "<80ms" },
      { label: "Uptime", value: "99.9%" },
    ],
    features: [
      "Sub-100ms real-time delivery",
      "Typing & presence indicators",
      "Infinite-scroll message history",
      "Horizontal scaling with Redis adapter",
    ],
    challenge:
      "Maintaining low-latency delivery and presence accuracy as concurrent connections scaled past a single server instance.",
    solution:
      "Introduced a Redis pub/sub adapter for Socket.IO to broadcast across instances, paginated history with cursor-based queries, and debounced presence events.",
  },
  {
    slug: "healthcare-management-system",
    title: "Healthcare Management System",
    category: "Web",
    tagline: "End-to-end hospital operations dashboard",
    description:
      "A complete hospital management dashboard for appointments, patient records, and doctor scheduling — built on the MERN stack with role-based access control.",
    client: "Healthcare Provider",
    year: "2024",
    timeline: "16 weeks",
    featured: true,
    tech: ["React.js", "Express.js", "MongoDB", "Redux Toolkit", "Tailwind CSS"],
    accent: "#43e97b",
    liveUrl: "#",
    githubUrl: "#",
    metrics: [
      { label: "Admin time saved", value: "-40%" },
      { label: "Records managed", value: "20k+" },
      { label: "Roles supported", value: "6" },
    ],
    features: [
      "Role-based access (admin, doctor, staff)",
      "Appointment scheduling with conflicts detection",
      "Patient records & history vault",
      "Analytics dashboard with exportable reports",
    ],
    challenge:
      "Different staff roles needed tightly-scoped access to sensitive patient data without slowing down day-to-day workflows.",
    solution:
      "Built a granular RBAC layer on the API, server-side filtered queries per role, and a fast, keyboard-friendly scheduling UI with conflict detection.",
  },
  {
    slug: "service-booking-app",
    title: "On-Demand Service Booking App",
    category: "Mobile",
    tagline: "Uber-style provider matching with live tracking",
    description:
      "On-demand service booking app with provider matching, real-time location tracking, and in-app payments via Stripe.",
    client: "Marketplace Startup",
    year: "2025",
    timeline: "14 weeks",
    featured: false,
    tech: ["React Native", "Node.js", "MongoDB", "Stripe", "Socket.IO"],
    accent: "#f59e0b",
    liveUrl: "#",
    githubUrl: "#",
    metrics: [
      { label: "Match time", value: "<30s" },
      { label: "Bookings/mo", value: "2k+" },
      { label: "Payment success", value: "98%" },
    ],
    features: [
      "Geo-based provider matching",
      "Live tracking on map",
      "In-app Stripe payments & payouts",
      "Ratings & review system",
    ],
    challenge:
      "Matching customers to the nearest available provider in real time while keeping location updates battery-efficient.",
    solution:
      "Used geospatial Mongo queries with throttled location pings over Socket.IO and a matching queue that balanced proximity with provider rating.",
  },
  {
    slug: "nextjs-saas-dashboard",
    title: "Next.js SaaS Dashboard",
    category: "SaaS",
    tagline: "Multi-tenant admin with analytics & billing",
    description:
      "Multi-tenant SaaS admin dashboard with role-based access, analytics, and subscription management built on Next.js and TypeScript.",
    client: "B2B SaaS",
    year: "2025",
    timeline: "10 weeks",
    featured: true,
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "Stripe"],
    accent: "#9c88ff",
    liveUrl: "#",
    githubUrl: "#",
    metrics: [
      { label: "Lighthouse", value: "98" },
      { label: "Tenants", value: "120+" },
      { label: "TTI", value: "<1.5s" },
    ],
    features: [
      "Multi-tenant data isolation",
      "Stripe subscription & billing portal",
      "Server Components for fast loads",
      "Usage analytics with charts",
    ],
    challenge:
      "Delivering a fast, SEO-friendly dashboard while strictly isolating each tenant's data and billing.",
    solution:
      "Leveraged Next.js Server Components and edge caching, scoped every query by tenant ID, and wired Stripe's billing portal for self-serve subscriptions.",
  },
  {
    slug: "social-networking-app",
    title: "Social Networking App",
    category: "Mobile",
    tagline: "Feed, stories, follows & real-time notifications",
    description:
      "Feature-rich social networking app with posts, stories, a follow system, and real-time notifications backed by Redis.",
    client: "Consumer App",
    year: "2024",
    timeline: "18 weeks",
    featured: false,
    tech: ["React Native", "Node.js", "MongoDB", "Redis", "Socket.IO"],
    accent: "#22d3ee",
    liveUrl: "#",
    githubUrl: "#",
    metrics: [
      { label: "Feed load", value: "<400ms" },
      { label: "DAU", value: "8k+" },
      { label: "Push delivery", value: "99%" },
    ],
    features: [
      "Personalized feed ranking",
      "24h ephemeral stories",
      "Follow / unfollow graph",
      "Real-time notifications via Redis",
    ],
    challenge:
      "Serving a personalized, fast feed while handling a rapidly growing social graph and notification fan-out.",
    solution:
      "Cached hot feeds and counters in Redis, precomputed notification fan-out on write, and paginated the feed with cursor-based ranking.",
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
  "Backend",
];
