import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, PenLine } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on full-stack development, React, React Native, system design and shipping premium products.",
  alternates: { canonical: "/blog" },
};

const drafts = [
  "Building a real-time chat that scales past one server",
  "React Native performance: from janky to 60fps",
  "Designing multi-tenant SaaS data isolation",
];

export default function BlogPage() {
  return (
    <div className="container min-h-[70vh] pb-24 pt-32">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back home
      </Link>

      <div className="mt-8 max-w-2xl">
        <span className="section-label">
          <PenLine className="h-3.5 w-3.5" /> Writing
        </span>
        <h1 className="mt-4 font-display text-4xl font-black tracking-tight sm:text-5xl">
          The <span className="gradient-text">Blog</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Deep-dives on engineering, architecture and craft are on the way.
          This section is SEO-ready and wired into the sitemap — just add MDX
          posts.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {drafts.map((title) => (
          <div key={title} className="glass rounded-2xl p-6">
            <span className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
              Coming soon
            </span>
            <h2 className="mt-4 font-display text-lg font-bold leading-snug">
              {title}
            </h2>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Button asChild variant="outline">
          <Link href="/#contact">Get notified when I publish</Link>
        </Button>
      </div>
    </div>
  );
}
