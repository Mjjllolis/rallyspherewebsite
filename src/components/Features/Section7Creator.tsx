"use client";
import { motion } from "framer-motion";
import { section7Highlights } from "@/data/features";

const Section7Creator: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden hero-gradient">
      {/* Grid texture */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-[1600px] mx-auto space-y-12">
          {/* Header */}
          <motion.div
            className="text-center space-y-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Monetize Your Community
            </p>
            <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
              Creator Economy
            </h3>
            <p className="text-lg lg:text-xl text-white/80 leading-relaxed">
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
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white shadow-lg mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-white/70 leading-relaxed">
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
