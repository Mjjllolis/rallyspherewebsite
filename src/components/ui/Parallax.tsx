"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import clsx from "clsx";

interface ParallaxProps {
  children: React.ReactNode;
  /** Vertical travel in px across the scroll range, [enter, exit]. */
  range?: [number, number];
  className?: string;
}

/**
 * Consistent scroll-linked vertical parallax. Disabled (no transform) when the
 * user prefers reduced motion.
 */
const Parallax: React.FC<ParallaxProps> = ({ children, range = [80, -80], className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : range);

  return (
    <div ref={ref} className={clsx(className)}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
};

export default Parallax;
