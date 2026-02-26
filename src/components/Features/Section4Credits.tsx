"use client";
import { motion } from "framer-motion";
import { section4Cards } from "@/data/features";

const Section4Credits: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden hero-gradient">
      {/* Grid texture */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-[1600px] mx-auto">
          {/* Glass card container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="relative p-8 lg:p-12 rounded-3xl bg-white/[0.07] backdrop-blur-sm border border-white/15 shadow-2xl overflow-hidden"
          >
            {/* Animated gradient border effect */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none">
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 opacity-20 animate-spin-gradient" />
            </div>

            <div className="relative z-10 space-y-10">
              {/* Header */}
              <div className="text-center space-y-4">
                <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                  Loyalty System
                </p>
                <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
                  Rally Credits
                </h3>
                <p className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                  Earn credits from events, redeem them for rewards, and give
                  clubs powerful insights into player engagement.
                </p>
              </div>

              {/* 3-column cards */}
              <div className="grid md:grid-cols-3 gap-5">
                {section4Cards.map((card, i) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.4 }}
                    className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] transition-all border border-white/10 hover:border-white/20"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white shadow-lg mb-4">
                      {card.icon}
                    </div>
                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                      {card.title}
                    </h4>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {card.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section4Credits;
