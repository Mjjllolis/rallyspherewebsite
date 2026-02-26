"use client";
import { motion } from "framer-motion";
import ParallaxPhone from "./ParallaxPhone";
import FeatureAccordion from "./FeatureAccordion";
import { section3Accordion } from "@/data/features";

const Section3Commerce: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden hero-gradient">
      {/* Grid texture */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-[minmax(0,380px)_1fr] gap-10 lg:gap-16 items-center max-w-[1600px] mx-auto">
          {/* Phone */}
          <ParallaxPhone
            src="/images/Mockup Images/RallyStore.png"
            alt="RallySphere Store"
            tiltDirection="right"
            parallaxRange={[60, -60]}
          />

          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
          >
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                Store &middot; Payments &middot; Subscriptions
              </p>
              <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
                Built-In Commerce
              </h3>
              <p className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-xl">
                Sell merchandise, collect payments, and manage subscriptions
                — all without leaving the app.
              </p>
            </div>

            <FeatureAccordion items={section3Accordion} isDark />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section3Commerce;
