import { Award, Github } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerGroup, StaggerItem, Reveal } from "@/components/animations/reveal";
import { certifications } from "@/lib/data/testimonials";
import { siteConfig } from "@/lib/site-config";

// A deterministic faux contribution grid (53 weeks × 7 days).
const WEEKS = 53;
const DAYS = 7;
function level(week: number, day: number) {
  const seed = (week * 7 + day * 13) % 11;
  return seed > 8 ? 4 : seed > 6 ? 3 : seed > 4 ? 2 : seed > 2 ? 1 : 0;
}
const levelColor = [
  "bg-muted",
  "bg-primary/25",
  "bg-primary/45",
  "bg-primary/70",
  "bg-primary",
];

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Credentials & activity"
          title="Certifications &"
          highlight="Open Source"
          description="Continuous learning, backed by consistent shipping."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <StaggerGroup className="grid gap-4 sm:grid-cols-2">
            {certifications.map((c) => (
              <StaggerItem key={c.title}>
                <div className="glass card-hover h-full rounded-2xl p-5">
                  <div className="flex items-center justify-between">
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${c.accent}1f` }}
                    >
                      <Award className="h-5 w-5" style={{ color: c.accent }} />
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {c.year}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold leading-snug">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {c.issuer}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal direction="left" delay={0.1}>
            <div className="glass h-full rounded-3xl p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Github className="h-5 w-5" />
                  <h3 className="font-display font-bold">GitHub Activity</h3>
                </div>
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-primary hover:underline"
                >
                  @{siteConfig.social.githubUsername}
                </a>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                A year of consistent contributions.
              </p>

              <div className="mask-fade-x mt-6 overflow-x-auto pb-2">
                <div className="flex gap-[3px]">
                  {Array.from({ length: WEEKS }).map((_, w) => (
                    <div key={w} className="flex flex-col gap-[3px]">
                      {Array.from({ length: DAYS }).map((_, d) => (
                        <span
                          key={d}
                          className={`h-2.5 w-2.5 rounded-[3px] ${levelColor[level(w, d)]}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-end gap-2 text-[11px] text-muted-foreground">
                <span>Less</span>
                {levelColor.map((c, i) => (
                  <span key={i} className={`h-2.5 w-2.5 rounded-[3px] ${c}`} />
                ))}
                <span>More</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
