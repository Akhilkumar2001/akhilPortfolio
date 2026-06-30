"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MessageCircle,
  Linkedin,
  Github,
  CalendarCheck,
  Send,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { toast } from "sonner";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contactSchema, type ContactValues } from "@/lib/validations";
import { siteConfig } from "@/lib/site-config";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    accent: "#7c5cff",
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`,
    accent: "#22d3ee",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Message me",
    href: siteConfig.contact.whatsapp,
    accent: "#43e97b",
  },
  {
    icon: CalendarCheck,
    label: "Calendly",
    value: "Book a call",
    href: siteConfig.contact.calendly,
    accent: "#ff6584",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect",
    href: siteConfig.social.linkedin,
    accent: "#0a66c2",
  },
  {
    icon: Github,
    label: "GitHub",
    value: `@${siteConfig.social.githubUsername}`,
    href: siteConfig.social.github,
    accent: "#8b5cf6",
  },
];

export function Contact() {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  async function onSubmit(values: ContactValues) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error();
      setDone(true);
      reset();
      toast.success("Message sent! Talk soon.");
    } catch {
      toast.error("Couldn't send. Please email me directly.");
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Let's connect"
          title="Get in"
          highlight="Touch"
          description="Have a role, a project, or just want to say hi? Pick your favourite channel."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <Reveal direction="right">
            <div className="grid gap-3 sm:grid-cols-2">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass card-hover flex items-center gap-3 rounded-2xl p-4"
                >
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${c.accent}1f` }}
                  >
                    <c.icon className="h-5 w-5" style={{ color: c.accent }} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">{c.label}</p>
                    <p className="truncate text-sm font-semibold">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="glass mt-4 rounded-2xl border border-emerald-400/20 p-5">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 animate-pulse-glow rounded-full bg-emerald-400" />
                <div>
                  <p className="text-sm font-semibold">Currently available</p>
                  <p className="text-xs text-muted-foreground">
                    Open to full-time roles & freelance projects · {siteConfig.timezone}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <div className="glass rounded-3xl p-6 sm:p-8">
              {done ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <CheckCircle2 className="h-14 w-14 text-emerald-400" />
                  <h3 className="mt-4 font-display text-2xl font-bold">
                    Message sent!
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    I&apos;ll get back to you within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => setDone(false)}
                  >
                    Send another
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div>
                    <Label htmlFor="c-name">Name</Label>
                    <Input
                      id="c-name"
                      className="mt-2"
                      placeholder="Your name"
                      aria-invalid={!!errors.name}
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-destructive">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="c-email">Email</Label>
                    <Input
                      id="c-email"
                      type="email"
                      className="mt-2"
                      placeholder="you@example.com"
                      aria-invalid={!!errors.email}
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-destructive">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="c-message">Message</Label>
                    <Textarea
                      id="c-message"
                      className="mt-2"
                      rows={5}
                      placeholder="Tell me what's on your mind…"
                      aria-invalid={!!errors.message}
                      {...register("message")}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-destructive">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                      </>
                    ) : (
                      <>
                        Send Message <Send className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
