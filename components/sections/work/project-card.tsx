"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { TiltCard } from "@/components/shared/tilt-card";
import type { Project } from "@/lib/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="perspective"
    >
      <TiltCard className="glass group h-full overflow-hidden rounded-3xl">
        {/* Visual header */}
        <div
          className="relative h-44 overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${project.accent}33, ${project.accent}08)`,
          }}
        >
          <div className="absolute inset-0 bg-grid-pattern bg-[size:28px_28px] opacity-[0.08]" />
          {/* Device mockup */}
          <div className="absolute inset-x-8 bottom-0 top-8 rounded-t-xl border border-white/10 bg-background/60 backdrop-blur-sm">
            <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-red-400/70" />
              <span className="h-2 w-2 rounded-full bg-amber-400/70" />
              <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
            </div>
            <div className="space-y-2 p-3">
              <div className="h-2 w-2/3 rounded-full bg-foreground/10" />
              <div className="h-2 w-1/2 rounded-full bg-foreground/10" />
              <div
                className="h-8 w-full rounded-lg"
                style={{ backgroundColor: `${project.accent}22` }}
              />
            </div>
          </div>
          <span
            className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur"
            style={{
              backgroundColor: `${project.accent}22`,
              color: project.accent,
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Body */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-lg font-bold leading-snug">
              {project.title}
            </h3>
            <span className="shrink-0 font-mono text-xs text-muted-foreground">
              {project.year}
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {project.tagline}
          </p>

          {/* Metrics */}
          <div className="mt-4 grid grid-cols-3 gap-2">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl bg-muted/60 p-2 text-center"
              >
                <p
                  className="font-display text-sm font-bold"
                  style={{ color: project.accent }}
                >
                  {m.value}
                </p>
                <p className="mt-0.5 text-[10px] leading-tight text-muted-foreground">
                  {m.label}
                </p>
              </div>
            ))}
          </div>

          {/* Tech */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((t) => (
              <span
                key={t}
                className="rounded-md border border-border bg-muted/40 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
              >
                {t}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="rounded-md px-2 py-0.5 text-[11px] text-muted-foreground">
                +{project.tech.length - 4}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="mt-5 flex items-center gap-2">
            <Link
              href={`/work/${project.slug}`}
              className="group/btn inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Case Study
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Link>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live demo"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub repository"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}
