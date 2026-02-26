"use client";
import { motion } from "framer-motion";
import ParallaxPhone from "./ParallaxPhone";
import { section3Accordion } from "@/data/features";

const Section3Commerce: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden hero-gradient">
      {/* Grid texture */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-[1600px] mx-auto space-y-12">
          {/* Centered header */}
          <motion.div
            className="text-center space-y-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Store &middot; Payments &middot; Subscriptions
            </p>
            <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
              Built-In Commerce
            </h3>
            <p className="text-lg lg:text-xl text-white/80 leading-relaxed">
              Sell merchandise, collect payments, and manage subscriptions
              — all without leaving the app.
            </p>
          </motion.div>

          {/* Centered phone */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ParallaxPhone
              src="/images/Mockup Images/RallyStore.png"
              alt="RallySphere Store"
              tiltDirection="right"
              parallaxRange={[60, -60]}
              className="!max-w-[200px]"
            />
          </motion.div>

          {/* 3-column card row */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {section3Accordion.map((group, gi) => (
              <motion.div
                key={group.title}
                className="rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 transition-colors p-5 space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + gi * 0.1, duration: 0.4 }}
              >
                <h4 className="text-lg font-bold text-white">{group.title}</h4>
                <div className="space-y-2">
                  {group.bullets.map((bullet) => (
                    <div key={bullet.title} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white">
                        {bullet.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{bullet.title}</p>
                        <p className="text-xs text-white/60 leading-snug">{bullet.description}</p>
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
