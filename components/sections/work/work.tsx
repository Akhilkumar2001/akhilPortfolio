"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Input } from "@/components/ui/input";
import { projects, projectCategories } from "@/lib/data/projects";
import { ProjectCard } from "@/components/sections/work/project-card";

export function Work() {
  const [category, setCategory] = useState<(typeof projectCategories)[number]>(
    "All"
  );
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesCat = category === "All" || p.category === category;
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q));
      return matchesCat && matchesQuery;
    });
  }, [category, query]);

  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]"
      />
      <div className="container">
        <SectionHeading
          eyebrow="Selected work"
          title="Work"
          highlight="Showcase"
          description="A selection of products I've designed and engineered across web, mobile and SaaS. Filter or search to explore."
        />

        {/* Controls */}
        <div className="mt-12 flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <SlidersHorizontal className="mr-1 h-4 w-4 text-muted-foreground" />
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors"
              >
                {category === cat && (
                  <motion.span
                    layoutId="work-pill"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span
                  className={
                    category === cat
                      ? "relative text-primary-foreground"
                      : "relative text-muted-foreground hover:text-foreground"
                  }
                >
                  {cat}
                </span>
              </button>
            ))}
          </div>

          <div className="relative w-full max-w-xs">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects or tech…"
              className="pl-10"
              aria-label="Search projects"
            />
          </div>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-muted-foreground">
            No projects match “{query}”. Try a different search.
          </p>
        )}
      </div>
    </section>
  );
}
