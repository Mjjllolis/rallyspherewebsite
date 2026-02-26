"use client";
import { motion } from "framer-motion";
import ParallaxPhone from "./ParallaxPhone";
import FeatureAccordion from "./FeatureAccordion";
import { section5Accordion } from "@/data/features";

const Section5Admin: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Light gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/30 -z-10" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#0066ff06_1px,transparent_1px),linear-gradient(to_bottom,#0066ff06_1px,transparent_1px)] bg-[size:60px_60px]" />

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
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Admin &middot; Payouts &middot; Analytics
            </p>
            <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Powerful Admin Tools
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
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
              <FeatureAccordion items={section5Accordion} isDark={false} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5Admin;
