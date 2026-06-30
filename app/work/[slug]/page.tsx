import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Github,
  Target,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";
import { getProject, projects } from "@/lib/data/projects";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} — Case Study`,
    description: project.description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title} — Case Study`,
      description: project.description,
      url: `${siteConfig.url}/work/${project.slug}`,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const meta = [
    { label: "Client", value: project.client },
    { label: "Year", value: project.year },
    { label: "Timeline", value: project.timeline },
    { label: "Category", value: project.category },
  ];

  return (
    <article className="pb-24 pt-32">
      {/* Hero banner */}
      <header className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background: `radial-gradient(60% 80% at 50% 0%, ${project.accent}22, transparent 70%)`,
          }}
        />
        <div className="container">
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to work
          </Link>

          <Reveal className="mt-8">
            <span
              className="rounded-full px-3 py-1 text-xs font-semibold"
              style={{
                backgroundColor: `${project.accent}22`,
                color: project.accent,
              }}
            >
              {project.category}
            </span>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-black tracking-tight sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              {project.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <Button asChild variant="gradient">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild variant="outline">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" /> Source
                </a>
              </Button>
            )}
          </Reveal>
        </div>
      </header>

      {/* Visual */}
      <div className="container mt-12">
        <div
          className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-border"
          style={{
            background: `linear-gradient(135deg, ${project.accent}28, ${project.accent}05)`,
          }}
        >
          <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-[0.06]" />
          <div className="absolute inset-x-10 bottom-0 top-12 rounded-t-2xl border border-white/10 bg-background/50 backdrop-blur-sm">
            <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
            </div>
          </div>
        </div>
      </div>

      {/* Meta + metrics */}
      <div className="container mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {meta.map((m) => (
          <div key={m.label} className="glass rounded-2xl p-5">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              {m.label}
            </p>
            <p className="mt-1 font-display text-lg font-bold">{m.value}</p>
          </div>
        ))}
      </div>

      <div className="container mt-6 grid gap-4 sm:grid-cols-3">
        {project.metrics.map((m) => (
          <div
            key={m.label}
            className="rounded-2xl border border-border p-6 text-center"
          >
            <p
              className="font-display text-3xl font-black"
              style={{ color: project.accent }}
            >
              {m.value}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{m.label}</p>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="container mt-16 grid gap-12 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-10">
          <section>
            <h2 className="flex items-center gap-2 font-display text-2xl font-bold">
              <Target className="h-5 w-5 text-primary" /> The Challenge
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {project.challenge}
            </p>
          </section>
          <section>
            <h2 className="flex items-center gap-2 font-display text-2xl font-bold">
              <Lightbulb className="h-5 w-5 text-primary" /> The Solution
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {project.solution}
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold">Key Features</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 rounded-xl bg-muted/50 p-4 text-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {f}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="space-y-6">
          <div className="glass sticky top-28 rounded-2xl p-6">
            <h3 className="font-display font-bold">Tech Stack</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border bg-muted/40 px-2.5 py-1 text-xs font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-6 border-t border-border pt-6">
              <p className="text-sm text-muted-foreground">
                Want something similar built?
              </p>
              <Button asChild variant="gradient" className="mt-3 w-full">
                <Link href="/#booking">
                  Start a project <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
