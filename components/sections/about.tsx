import Image from "next/image";
import { Code2, Rocket, Users, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/animations/reveal";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { siteConfig } from "@/lib/site-config";

const traits = [
  {
    icon: Code2,
    title: "Clean Architecture",
    desc: "Maintainable, scalable codebases built on proven patterns.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    desc: "Production-ready solutions shipped on tight timelines.",
  },
  {
    icon: Users,
    title: "Team Player",
    desc: "Mentored juniors, strong client communication & ownership.",
  },
  {
    icon: Sparkles,
    title: "Always Learning",
    desc: "Continuously adopting modern tools and best practices.",
  },
];

const journey = [
  { year: "2022", label: "Started as React.js Intern", accent: "#43e97b" },
  { year: "2023", label: "React Developer · client projects", accent: "#22d3ee" },
  { year: "2024", label: "Joined Cyberbells · full ownership", accent: "#9c88ff" },
  { year: "2025", label: "Leading web & mobile delivery", accent: "#7c5cff" },
  { year: "2026", label: "Backend & system-design mastery", accent: "#ff6584" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Get to know me"
          title="About"
          highlight="Me"
          description="A developer who cares as much about the product and the people as the code itself."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="right">
            {/* Profile */}
            <div className="mb-8 flex items-center gap-5">
              <div className="relative shrink-0">
                <div
                  aria-hidden
                  className="absolute -inset-1 rounded-3xl bg-[linear-gradient(135deg,#7c5cff,#ff6584)] opacity-70 blur-md"
                />
                <div className="relative h-28 w-24 overflow-hidden rounded-3xl border border-white/10 bg-muted sm:h-32 sm:w-28">
                  <Image
                    src={siteConfig.photo}
                    alt={siteConfig.name}
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                </div>
                <span className="absolute -bottom-1 -right-1 flex h-6 items-center gap-1 rounded-full border border-background bg-emerald-500 px-2 text-[10px] font-semibold text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" /> Open
                </span>
              </div>
              <div>
                <p className="font-display text-xl font-bold">
                  {siteConfig.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {siteConfig.role}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {siteConfig.location} · {siteConfig.timezone}
                </p>
              </div>
            </div>

            <h3 className="font-display text-2xl font-bold">
              I build things that{" "}
              <span className="gradient-text">people love to use.</span>
            </h3>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                I&apos;m{" "}
                <span className="font-semibold text-foreground">
                  Akhil Kumar
                </span>
                , a Senior Software Engineer based in {siteConfig.location} with{" "}
                <span className="font-semibold text-foreground">3+ years</span>{" "}
                building modern web and mobile applications.
              </p>
              <p>
                I started in 2022 as a React.js intern and grew into a senior
                role owning full project lifecycles — from architecture to
                client delivery. Currently at{" "}
                <span className="font-semibold text-primary">
                  Cyberbells, Chandigarh
                </span>
                , delivering 15+ web &amp; mobile products across retail,
                language-tech and SaaS.
              </p>
              <p>
                My focus today is{" "}
                <span className="font-semibold text-foreground">
                  scalable backend systems
                </span>{" "}
                — Redis caching, real-time Socket.IO apps, payment integrations
                and type-safe architecture.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {siteConfig.stats.map((s) => (
                <div key={s.label}>
                  <AnimatedCounter
                    value={s.value}
                    suffix={s.suffix}
                    className="gradient-text font-display text-3xl font-black"
                  />
                  <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Career Timeline
            </h4>
            <div className="relative mt-6 pl-8">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-brand-pink to-emerald-400" />
              <div className="space-y-5">
                {journey.map((j) => (
                  <div key={j.year} className="relative flex items-center gap-4">
                    <span
                      className="absolute -left-[26px] h-3.5 w-3.5 rounded-full border-2 border-background"
                      style={{
                        backgroundColor: j.accent,
                        boxShadow: `0 0 12px ${j.accent}99`,
                      }}
                    />
                    <div className="glass card-hover flex flex-1 items-center gap-3 rounded-xl px-4 py-3">
                      <span
                        className="rounded-md px-2 py-0.5 text-xs font-black"
                        style={{ color: j.accent, backgroundColor: `${j.accent}1f` }}
                      >
                        {j.year}
                      </span>
                      <span className="text-sm text-foreground/80">{j.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <StaggerGroup className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {traits.map((t) => (
            <StaggerItem key={t.title}>
              <div className="glass card-hover h-full rounded-2xl p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <t.icon className="h-5 w-5 text-primary" />
                </div>
                <h5 className="mt-4 font-display font-bold">{t.title}</h5>
                <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
