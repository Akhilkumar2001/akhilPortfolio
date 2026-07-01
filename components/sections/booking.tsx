"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Send, CalendarCheck } from "lucide-react";
import { toast } from "sonner";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  bookingSchema,
  budgetRanges,
  communications,
  projectTypes,
  timelines,
  type BookingValues,
} from "@/lib/validations";
import { siteConfig } from "@/lib/site-config";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-xs text-destructive">{message}</p>;
}

export function Booking() {
  const [done, setDone] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      requirements: "",
    },
  });

  async function onSubmit(values: BookingValues) {
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error();
      setDone(true);
      reset();
      toast.success("Project request sent! I'll reply within 24 hours.");
    } catch {
      toast.error("Something went wrong. Please email me directly.");
    }
  }

  return (
    <section id="booking" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute right-1/4 top-0 h-96 w-96 rounded-full bg-brand-pink/10 blur-[130px]"
      />
      <div className="container">
        <SectionHeading
          eyebrow="Start a project"
          title="Book a"
          highlight="Freelance Project"
          description="Tell me about your project and I'll get back with a plan, timeline and quote within 24 hours."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          {/* Left — value props + consultation */}
          <Reveal direction="right">
            <div className="flex h-full flex-col justify-between gap-6">
              <div className="space-y-4">
                {[
                  { t: "Discovery first", d: "We align on goals, scope and success metrics before any code." },
                  { t: "Transparent pricing", d: "Clear, milestone-based quotes with no surprises." },
                  { t: "Senior-level delivery", d: "Production-ready, scalable code — not throwaway prototypes." },
                ].map((item) => (
                  <div key={item.t} className="glass rounded-2xl p-5">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <p className="font-semibold">{item.t}</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {item.d}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={siteConfig.contact.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 rounded-2xl bg-[linear-gradient(135deg,#7c5cff,#ff6584)] p-5 text-white transition-transform hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3">
                  <CalendarCheck className="h-6 w-6" />
                  <div>
                    <p className="font-semibold">Prefer a quick call?</p>
                    <p className="text-sm text-white/80">
                      Book a free 20-min discovery call
                    </p>
                  </div>
                </div>
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>

          {/* Right — form */}
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
                    Request received!
                  </h3>
                  <p className="mt-2 max-w-sm text-muted-foreground">
                    Thanks for reaching out. I&apos;ll review your project and
                    reply within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => setDone(false)}
                  >
                    Submit another
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        className="mt-2"
                        placeholder="Jane Doe"
                        aria-invalid={!!errors.name}
                        {...register("name")}
                      />
                      <FieldError message={errors.name?.message} />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        className="mt-2"
                        placeholder="jane@company.com"
                        aria-invalid={!!errors.email}
                        {...register("email")}
                      />
                      <FieldError message={errors.email?.message} />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company">Company (optional)</Label>
                    <Input
                      id="company"
                      className="mt-2"
                      placeholder="Acme Inc."
                      {...register("company")}
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <SelectField
                      name="projectType"
                      label="Project Type"
                      placeholder="Select type"
                      options={projectTypes}
                      control={control}
                      error={errors.projectType?.message}
                    />
                    <SelectField
                      name="budget"
                      label="Budget Range"
                      placeholder="Select budget"
                      options={budgetRanges}
                      control={control}
                      error={errors.budget?.message}
                    />
                    <SelectField
                      name="timeline"
                      label="Timeline"
                      placeholder="Select timeline"
                      options={timelines}
                      control={control}
                      error={errors.timeline?.message}
                    />
                    <SelectField
                      name="communication"
                      label="Preferred Contact"
                      placeholder="Select channel"
                      options={communications}
                      control={control}
                      error={errors.communication?.message}
                    />
                  </div>

                  <div>
                    <Label htmlFor="requirements">Project Details</Label>
                    <Textarea
                      id="requirements"
                      className="mt-2"
                      rows={5}
                      placeholder="What are you building, who's it for, and what does success look like?"
                      aria-invalid={!!errors.requirements}
                      {...register("requirements")}
                    />
                    <FieldError message={errors.requirements?.message} />
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
                        Send Project Request <Send className="h-4 w-4" />
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

function SelectField({
  name,
  label,
  placeholder,
  options,
  control,
  error,
}: {
  name: keyof BookingValues;
  label: string;
  placeholder: string;
  options: readonly string[];
  control: any;
  error?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value as string}>
            <SelectTrigger className="mt-2" aria-invalid={!!error}>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map((o) => (
                <SelectItem key={o} value={o}>
                  {o}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
      <FieldError message={error} />
    </div>
  );
}
