"use client";
import { motion, useReducedMotion } from "framer-motion";
import { FiShoppingBag, FiCreditCard, FiTag, FiZap } from "react-icons/fi";
import ParallaxPhone from "./ParallaxPhone";
import SectionDivider from "../ui/SectionDivider";
import { section3Accordion } from "@/data/features";

// Floating chips that orbit the phone for a playful, "live storefront" feel.
const chips = [
  { icon: <FiShoppingBag size={16} />, label: "RallyStore", pos: "top-4 -left-3 sm:-left-8", delay: 0 },
  { icon: <FiCreditCard size={16} />, label: "Apple&nbsp;Pay", pos: "top-1/3 -right-4 sm:-right-10", delay: 0.7 },
  { icon: <FiTag size={16} />, label: "$24.00", pos: "bottom-16 -left-4 sm:-left-12", delay: 1.4 },
  { icon: <FiZap size={16} />, label: "Instant checkout", pos: "bottom-4 -right-2 sm:-right-8", delay: 2.1 },
];

const Section3Commerce: React.FC = () => {
  const reduce = useReducedMotion();

  return (
    <section className="relative py-28 lg:py-40 overflow-hidden surface-navy text-ink-on-inverse">
      {/* Grid texture */}
      <div className="absolute inset-0 z-0 grid-overlay opacity-60" />

      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-accent-from/20 blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 h-80 w-80 rounded-full bg-accent-to/20 blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-[1600px] mx-auto space-y-20">
          {/* Centered header */}
          <motion.div
            className="text-center space-y-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-ink-on-inverse-muted">
              <FiShoppingBag className="text-accent-via" />
              Store · Payments · Subscriptions (Coming Soon)
            </span>
            <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold">
              Built-In <span className="text-gradient-animated">Commerce</span>
            </h3>
            <p className="text-lg lg:text-xl text-ink-on-inverse-muted leading-relaxed">
              Sell merchandise and collect payments — all without leaving the app.
              Subscriptions coming soon.
            </p>
          </motion.div>

          {/* Phone with orbiting chips */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative">
              <ParallaxPhone
                src="/images/Mockup Images/RallyStore.png"
                alt="RallySphere Store"
                tiltDirection="right"
                parallaxRange={[60, -60]}
                className="!max-w-[220px]"
              />

              {/* Floating chips */}
              {chips.map((chip) => (
                <motion.div
                  key={chip.label}
                  className={`absolute ${chip.pos} z-20 hidden sm:flex items-center gap-2 rounded-full border border-white/15 bg-navy-2/80 px-3 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur-md`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + chip.delay * 0.15, duration: 0.4 }}
                >
                  <motion.span
                    className="flex items-center gap-2"
                    animate={reduce ? {} : { y: [0, -7, 0] }}
                    transition={{ duration: 3 + chip.delay, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="text-accent-via">{chip.icon}</span>
                    <span dangerouslySetInnerHTML={{ __html: chip.label }} />
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <SectionDivider inverse />

          {/* 3-column card row */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {section3Accordion.map((group, gi) => (
              <motion.div
                key={group.title}
                className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-6 lg:p-7 space-y-4 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/30 hover:bg-white/[0.08]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + gi * 0.1, duration: 0.4 }}
              >
                {/* hover glow sweep */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl brand-gradient-br opacity-0 transition-opacity duration-300 group-hover:opacity-[0.08]" />
                <h4 className="relative text-lg font-bold text-ink-on-inverse">{group.title}</h4>
                <div className="relative space-y-2">
                  {group.bullets.map((bullet) => (
                    <div key={bullet.title} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg brand-gradient-br flex items-center justify-center text-ink-on-accent transition-transform duration-300 group-hover:scale-110">
                        {bullet.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-ink-on-inverse">{bullet.title}</p>
                        <p className="text-xs text-ink-on-inverse-muted leading-snug">{bullet.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3Commerce;
