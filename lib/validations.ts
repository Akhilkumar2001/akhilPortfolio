import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name").max(80),
  email: z.string().email("Enter a valid email address"),
  message: z
    .string()
    .min(10, "Tell me a little more (10+ characters)")
    .max(2000),
});

export type ContactValues = z.infer<typeof contactSchema>;

export const projectTypes = [
  "Web Application",
  "Mobile Application",
  "SaaS Product",
  "Dashboard / Admin Panel",
  "API / Backend",
  "UI/UX to Code",
  "AI Integration",
  "Other",
] as const;

export const budgetRanges = [
  "< $1,000",
  "$1,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
] as const;

export const timelines = [
  "ASAP / Urgent",
  "Within 1 month",
  "1 – 3 months",
  "3 – 6 months",
  "Flexible",
] as const;

export const communications = [
  "Email",
  "WhatsApp",
  "Phone Call",
  "Video Call",
  "Slack",
] as const;

export const bookingSchema = z.object({
  name: z.string().min(2, "Please enter your name").max(80),
  email: z.string().email("Enter a valid email address"),
  company: z.string().max(120).optional().or(z.literal("")),
  projectType: z.enum(projectTypes, {
    errorMap: () => ({ message: "Select a project type" }),
  }),
  budget: z.enum(budgetRanges, {
    errorMap: () => ({ message: "Select a budget range" }),
  }),
  timeline: z.enum(timelines, {
    errorMap: () => ({ message: "Select a timeline" }),
  }),
  communication: z.enum(communications, {
    errorMap: () => ({ message: "Select a preferred channel" }),
  }),
  requirements: z
    .string()
    .min(20, "Describe your project (20+ characters)")
    .max(4000),
});

export type BookingValues = z.infer<typeof bookingSchema>;
