import Link from "next/link";
import {
  Download,
  Linkedin,
  Github,
  Mail,
  Clock,
  Globe,
  CheckCircle2,
  CalendarClock,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/animations/magnetic";
import { siteConfig } from "@/lib/site-config";

const quickFacts = [
  { icon: CheckCircle2, label: "Status", value: siteConfig.availability.status },
  { icon: Clock, label: "Notice Period", value: siteConfig.availability.noticePeriod },
  { icon: Globe, label: "Timezone", value: siteConfig.timezone },
  { icon: CalendarClock, label: "Experience", value: "3+ years" },
];

export function Hire() {
  return (
    <section id="hire" className="relative py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="For recruiters"
          title="Looking to"
          highlight="Hire?"
          description="Everything you need to evaluate me at a glance — and one click to my résumé."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <Reveal direction="right">
            <div className="border-gradient glass relative overflow-hidden rounded-3xl p-8">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl"
              />
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                <span className="h-2 w-2 animate-pulse-glow rounded-full bg-emerald-400" />
                {siteConfig.availability.label}
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold sm:text-3xl">
                {siteConfig.name}
              </h3>
              <p className="mt-1 text-muted-foreground">
                {siteConfig.role} · {siteConfig.location}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-2">
                {quickFacts.map((f) => (
                  <div key={f.label} className="rounded-2xl bg-muted/50 p-4">
                    <f.icon className="h-4 w-4 text-primary" />
                    <p className="mt-2 text-xs text-muted-foreground">
                      {f.label}
                    </p>
                    <p className="text-sm font-semibold">{f.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {siteConfig.availability.openTo.map((o) => (
                  <span
                    key={o}
                    className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {o}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <div className="flex h-full flex-col gap-4">
              <Magnetic strength={0.2}>
                <Button
                  asChild
                  variant="gradient"
                  size="lg"
                  className="w-full"
                  data-cursor="hover"
                >
                  <a href={siteConfig.resumeUrl} download>
                    <Download className="h-4 w-4" /> Download Résumé (PDF)
                  </a>
                </Button>
              </Magnetic>

              <div className="grid grid-cols-1 gap-3">
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass card-hover flex items-center gap-3 rounded-2xl p-4"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0a66c2]/15 text-[#0a66c2]">
                    <Linkedin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">LinkedIn</p>
                    <p className="text-xs text-muted-foreground">
                      Connect & view recommendations
                    </p>
                  </div>
                </a>
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass card-hover flex items-center gap-3 rounded-2xl p-4"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/10">
                    <Github className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">GitHub</p>
                    <p className="text-xs text-muted-foreground">
                      Browse code & contributions
                    </p>
                  </div>
                </a>
                <Link
                  href="#contact"
                  className="glass card-hover flex items-center gap-3 rounded-2xl p-4"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Get in touch</p>
                    <p className="text-xs text-muted-foreground">
                      I reply within 24 hours
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
