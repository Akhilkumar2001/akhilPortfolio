"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/animations/reveal";
import { skillCategories, techStack } from "@/lib/data/skills";

function SkillBar({
  name,
  level,
  accent,
}: {
  name: string;
  level: number;
  accent: string;
}) {
  return (
    <div className="mb-3.5">
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="font-medium text-foreground/80">{name}</span>
        <span className="font-mono text-xs" style={{ color: accent }}>
          {level}%
        </span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-muted">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${accent}88, ${accent})` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-[120px]"
      />
      <div className="container">
        <SectionHeading
          eyebrow="What I work with"
          title="Technical"
          highlight="Skills"
          description="A full-stack toolkit spanning frontend, mobile, backend, databases and cloud."
        />

        <StaggerGroup className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => (
            <StaggerItem key={cat.title}>
              <div className="glass card-hover h-full rounded-2xl p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${cat.accent}1f` }}
                  >
                    <cat.icon className="h-5 w-5" style={{ color: cat.accent }} />
                  </div>
                  <h3 className="font-display text-lg font-bold">{cat.title}</h3>
                </div>
                {cat.skills.map((s) => (
                  <SkillBar
                    key={s.name}
                    name={s.name}
                    level={s.level}
                    accent={cat.accent}
                  />
                ))}
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      {/* Tech marquee */}
      <div className="relative mt-16 flex flex-col gap-4">
        <p className="container text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          The Stack
        </p>
        <div className="mask-fade-x flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee gap-3 pr-3">
            {[...techStack, ...techStack].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="glass whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium text-foreground/70"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
