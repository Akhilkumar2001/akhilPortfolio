"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Briefcase,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/animations/magnetic";
import { RotatingRole } from "@/components/sections/rotating-role";

const HeroScene = dynamic(() => import("@/components/three/hero-scene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-40 w-40 animate-pulse-glow rounded-full bg-primary/20 blur-2xl" />
    </div>
  ),
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />
        <div className="absolute right-1/4 top-1/3 h-[28rem] w-[28rem] translate-x-1/2 rounded-full bg-brand-pink/15 blur-[140px]" />
        <div className="absolute inset-0 bg-grid-pattern bg-[size:64px_64px] opacity-[0.04]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      <div className="container grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left — copy */}
        <div className="max-w-2xl">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show">
            <span className="section-label glass inline-flex rounded-full px-4 py-2 normal-case tracking-normal">
              <span className="h-2 w-2 animate-pulse-glow rounded-full bg-emerald-400" />
              {siteConfig.availability.label}
            </span>
          </motion.div>

          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 font-mono text-sm text-muted-foreground"
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-2 font-display text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl"
          >
            {siteConfig.name.split(" ")[0]}{" "}
            <span className="gradient-text-animated">
              {siteConfig.name.split(" ").slice(1).join(" ")}
            </span>
          </motion.h1>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-4 flex items-center gap-2 text-xl font-medium text-muted-foreground sm:text-2xl"
          >
            <Sparkles className="h-5 w-5 text-primary" />
            <RotatingRole
              roles={[
                "Senior Software Engineer",
                "Full-Stack Developer",
                "React & React Native Specialist",
                "MERN Stack Architect",
              ]}
            />
          </motion.div>

          <motion.p
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {siteConfig.valueProposition} With{" "}
            <span className="font-semibold text-foreground">3+ years</span>{" "}
            shipping production web & mobile apps, I turn ambitious ideas into
            polished, scalable products.
          </motion.p>

          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Magnetic strength={0.3}>
              <Button asChild variant="gradient" size="lg" data-cursor="hover">
                <Link href="#hire">
                  <Briefcase className="h-4 w-4" /> Hire Me
                </Link>
              </Button>
            </Magnetic>
            <Magnetic strength={0.3}>
              <Button asChild variant="glass" size="lg" data-cursor="hover">
                <Link href="#booking">Book a Freelance Project</Link>
              </Button>
            </Magnetic>
            <Button asChild variant="ghost" size="lg" data-cursor="hover">
              <Link href="#work">
                View My Work <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" data-cursor="hover">
              <a href={siteConfig.resumeUrl} download>
                <Download className="h-4 w-4" /> Resume
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.dl
            custom={6}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-12 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {siteConfig.stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl p-4 text-center">
                <dd className="gradient-text font-display text-2xl font-black">
                  {s.value}
                  {s.suffix}
                </dd>
                <dt className="mt-1 text-[11px] font-medium text-muted-foreground">
                  {s.label}
                </dt>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Right — 3D scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[360px] w-full lg:h-[560px]"
        >
          <div className="absolute left-4 top-4 z-10 font-mono text-[10px] uppercase tracking-widest text-primary/60">
            [ interactive_3d ]
          </div>
          <HeroScene />
          <div className="absolute bottom-4 right-4 z-10 font-mono text-[10px] uppercase tracking-widest text-primary/60">
            [ drag · hover ]
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-muted-foreground"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="h-4 w-4" />
      </motion.a>
    </section>
  );
}
