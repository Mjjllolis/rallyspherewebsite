"use client";
import { motion } from "framer-motion";
import ParallaxPhone from "./ParallaxPhone";
import FeatureAccordion from "./FeatureAccordion";
import { section5Accordion } from "@/data/features";

const Section5Admin: React.FC = () => {
  return (
    <section className="relative py-28 lg:py-40 overflow-hidden bg-bg text-ink">
      {/* Subtle grid background */}
      <div className="absolute inset-0 -z-10 grid-overlay opacity-40" />

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
              Admin &middot; Payouts &middot; Analytics
            </p>
            <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gradient-animated">
              Powerful Admin Tools
            </h3>
            <p className="text-lg text-ink-secondary leading-relaxed">
              Full control over your club — members, payouts, and analytics all in one dashboard.
            </p>
          </motion.div>

          {/* Layout: dual phones + accordion */}
          <div className="grid lg:grid-cols-[1fr_minmax(0,500px)] gap-10 lg:gap-16 items-center">
            {/* Dual phones */}
            <div className="flex justify-center gap-4 sm:gap-6">
              <div className="w-1/2 max-w-[280px]">
                <ParallaxPhone
                  src="/images/Mockup Images/Admin Dashboard.png"
                  alt="Admin Dashboard"
                  tiltDirection="left"
                  parallaxRange={[60, -60]}
                />
              </div>
              <div className="w-1/2 max-w-[280px] mt-12">
                <ParallaxPhone
                  src="/images/Mockup Images/Analytics.png"
                  alt="Analytics Dashboard"
                  tiltDirection="right"
                  parallaxRange={[40, -80]}
                />
              </div>
            </div>

            {/* Accordion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <FeatureAccordion items={section5Accordion} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5Admin;
