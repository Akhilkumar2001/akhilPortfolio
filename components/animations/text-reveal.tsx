"use client";

import type { ElementType } from "react";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: (stagger: number) => ({
    transition: { staggerChildren: stagger },
  }),
};

const word: Variants = {
  hidden: { opacity: 0, y: "0.6em", rotateX: -40 },
  show: {
    opacity: 1,
    y: "0em",
    rotateX: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Word-by-word text reveal. Pass `as` to control the element.
 */
export function TextReveal({
  text,
  className,
  wordClassName,
  stagger = 0.08,
  delay = 0,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  stagger?: number;
  delay?: number;
  as?: ElementType;
}) {
  const words = text.split(" ");
  const MotionTag = motion(Tag as any);
  return (
    <MotionTag
      className={className}
      style={{ perspective: 600 }}
      variants={container}
      custom={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delayChildren: delay }}
    >
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          className="inline-block overflow-hidden align-bottom"
        >
          <motion.span
            variants={word}
            className={`inline-block ${wordClassName ?? ""}`}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
