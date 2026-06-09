"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

/* Pre-created motion components for the tags we use. Defining these at
   module scope (instead of calling motion(tag) during render) keeps a
   stable component identity across renders — no remount flicker. */
const MOTION = {
  div: motion.div,
  section: motion.section,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  a: motion.a,
  span: motion.span,
} as const;

type Tag = keyof typeof MOTION;

type RevealProps = {
  /** stagger index — 1..4 maps to the original data-d delays */
  delay?: number;
  /** which element to render (default "div") */
  as?: Tag;
} & HTMLMotionProps<"div">;

/**
 * Drop-in scroll reveal. Fades + lifts content into place once when it
 * scrolls into view — replaces the IntersectionObserver `.reveal` pattern
 * from the original static site.
 */
export function Reveal({ delay = 0, as = "div", children, ...rest }: RevealProps) {
  const MotionTag = MOTION[as] as typeof motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.7, delay: delay * 0.08, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
