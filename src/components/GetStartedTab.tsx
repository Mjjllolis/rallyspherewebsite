'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

/**
 * Fixed vertical "Get Started" tab anchored to the right edge. Gently nudges
 * inward on an idle loop and slides out further on hover. Hidden on small
 * screens (the mobile header already has the CTA).
 */
const GetStartedTab = () => {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 sm:block"
      initial={reduce ? false : { x: 40, opacity: 0 }}
      animate={reduce ? {} : { x: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href="#cta"
        aria-label="Get started"
        className="group relative flex flex-col items-center gap-2 rounded-l-2xl brand-gradient py-5 pl-3 pr-2.5 text-white shadow-lg shadow-brand/40 transition-all duration-300 hover:pr-4 hover:shadow-xl hover:shadow-brand/60"
      >
        {/* soft pulsing glow */}
        <span className="pointer-events-none absolute inset-0 rounded-l-2xl brand-gradient opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-60" />
        <span className="relative [writing-mode:vertical-rl] rotate-180 text-sm font-bold uppercase tracking-wider">
          Get&nbsp;Started
        </span>
        <FiArrowRight className="relative h-4 w-4 rotate-90 transition-transform duration-300 group-hover:translate-y-1" />
      </Link>
    </motion.div>
  );
};

export default GetStartedTab;
