"use client";
import { motion } from "framer-motion";
import { section7Highlights } from "@/data/features";

const Section7Creator: React.FC = () => {
  return (
    <section className="relative py-28 lg:py-40 overflow-hidden surface-navy text-ink-on-inverse">
      {/* Grid texture */}
      <div className="absolute inset-0 z-0 grid-overlay opacity-60" />

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-[1600px] mx-auto space-y-16">
          {/* Header */}
          <motion.div
            className="text-center space-y-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-gradient inline-block">
              Monetize Your Community
            </p>
            <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-ink-on-inverse">
              Creator Economy
            </h3>
            <p className="text-lg lg:text-xl text-ink-on-inverse-muted leading-relaxed">
              Everything clubs need to generate revenue and grow sustainably.
            </p>
          </motion.div>

          {/* 4-column highlight cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {section7Highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative p-6 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-white/25 transition-all"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl brand-gradient-br opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl brand-gradient-br flex items-center justify-center text-ink-on-accent shadow-lg mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold text-ink-on-inverse group-hover:text-accent-via transition-colors mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-ink-on-inverse-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7Creator;
