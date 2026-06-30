"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/data/experience";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-1/3 h-96 w-96 rounded-full bg-brand-pink/5 blur-[120px]"
      />
      <div className="container max-w-4xl">
        <SectionHeading
          eyebrow="Where I've worked"
          title="Experience"
          highlight="Timeline"
          description="Three-plus years across four companies — from intern to senior engineer."
        />

        <div className="relative mt-16">
          <div className="absolute left-[18px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-primary via-brand-purple to-emerald-400 sm:block" />
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative sm:pl-14"
              >
                <span
                  className="absolute left-[11px] top-7 hidden h-4 w-4 items-center justify-center rounded-full border-2 border-background sm:flex"
                  style={{
                    backgroundColor: exp.accent,
                    boxShadow: `0 0 14px ${exp.accent}99`,
                  }}
                >
                  {exp.current && (
                    <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-white" />
                  )}
                </span>

                <div className="glass card-hover rounded-2xl p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-lg font-bold">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <Badge
                            className="border-transparent"
                            style={{
                              backgroundColor: `${exp.accent}22`,
                              color: exp.accent,
                            }}
                          >
                            Current
                          </Badge>
                        )}
                        <Badge variant="muted">{exp.type}</Badge>
                      </div>
                      <p
                        className="mt-1.5 flex items-center gap-1.5 text-sm font-semibold"
                        style={{ color: exp.accent }}
                      >
                        <Briefcase className="h-3.5 w-3.5" />
                        {exp.company}
                      </p>
                    </div>
                    <div className="space-y-1 text-right text-xs text-muted-foreground">
                      <p className="flex items-center justify-end gap-1">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </p>
                      <p className="flex items-center justify-end gap-1">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <div className="my-4 h-px bg-border" />

                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: exp.accent }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {exp.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border px-3 py-1 text-xs"
                          style={{
                            borderColor: `${exp.accent}40`,
                            color: exp.accent,
                            backgroundColor: `${exp.accent}10`,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
