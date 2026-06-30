"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/animations/reveal";
import { services } from "@/lib/data/services";

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="How I can help"
          title="Services &"
          highlight="Capabilities"
          description="From a single feature to an entire product — here's how I deliver value end-to-end."
        />

        <StaggerGroup
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          amount={0.05}
        >
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group glass relative h-full overflow-hidden rounded-2xl p-6 transition-colors hover:border-primary/30"
              >
                <div
                  aria-hidden
                  className="absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                  style={{ backgroundColor: `${s.accent}40` }}
                />
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${s.accent}1f` }}
                >
                  <s.icon className="h-5 w-5" style={{ color: s.accent }} />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
                <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="mt-12 flex justify-center">
          <Link
            href="#booking"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-6 py-3 text-sm font-medium backdrop-blur transition-colors hover:border-primary/40"
          >
            Have something else in mind? Let&apos;s talk
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
