"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { fadeUp } from "@/lib/motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  /** Animation variant to use; defaults to a gentle fade-up. */
  variants?: Variants;
  className?: string;
  /** Extra delay (seconds) before the reveal begins. */
  delay?: number;
  /** Fraction of the element that must be visible to trigger (0–1). */
  amount?: number;
}

/**
 * Single, consistent scroll-reveal wrapper used across every section.
 * Honors prefers-reduced-motion by rendering content statically.
 */
const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variants = fadeUp,
  className,
  delay = 0,
  amount = 0.2,
}) => {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
