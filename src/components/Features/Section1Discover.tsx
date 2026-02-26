"use client";
import { motion } from "framer-motion";
import ParallaxPhone from "./ParallaxPhone";
import { section1Bullets } from "@/data/features";

const Section1Discover: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden hero-gradient">
      {/* Grid texture */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-[1fr_minmax(0,380px)] gap-10 lg:gap-16 items-center max-w-[1600px] mx-auto">
          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <motion.p
                className="text-sm font-semibold uppercase tracking-widest text-cyan-400"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Home Feed
              </motion.p>
              <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
                Discover Your Community
              </h3>
              <p className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-xl">
                A personalized home feed that puts the right events, clubs, and
                people right at your fingertips.
              </p>
            </div>

            <div className="space-y-4">
              {section1Bullets.map((bullet, i) => (
                <motion.div
                  key={bullet.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.3 }}
                  className="flex gap-4 group p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white shadow-lg">
                    {bullet.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {bullet.title}
                    </h4>
                    <p className="text-base text-white/70 leading-relaxed">
                      {bullet.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Phone */}
          <ParallaxPhone
            src="/images/Mockup Images/Home.png"
            alt="RallySphere Home Feed"
            tiltDirection="left"
          />
        </div>
      </div>
    </section>
  );
};

export default Section1Discover;
