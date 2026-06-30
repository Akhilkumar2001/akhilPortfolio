"use client";

import { Reveal } from "@/components/animations/reveal";
import { TextReveal } from "@/components/animations/text-reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  className,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <Reveal>
        <span className="section-label">
          <span className="h-1 w-1 rounded-full bg-primary" />
          {eyebrow}
        </span>
      </Reveal>
      <TextReveal
        as="h2"
        text={highlight ? `${title} ${highlight}` : title}
        className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl"
      />
      {description && (
        <Reveal delay={0.15}>
          <p className="mt-4 text-balance text-base text-muted-foreground sm:text-lg">
            {description}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.2}>
        <div
          className={cn(
            "mt-6 h-1 w-16 rounded-full bg-[linear-gradient(90deg,#7c5cff,#ff6584)]",
            align === "center" && "mx-auto"
          )}
        />
      </Reveal>
    </div>
  );
}
