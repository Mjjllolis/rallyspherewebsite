"use client";
import { motion } from "framer-motion";
import FeatureCarousel from "./FeatureCarousel";
import { section2Slides } from "@/data/features";

const Section2Carousel: React.FC = () => {
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
              Clubs &middot; Events &middot; Profiles
            </p>
            <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gradient-animated">
              Everything Your Community Needs
            </h3>
            <p className="text-lg text-ink-secondary leading-relaxed">
              From browsing clubs to managing events — all the tools in one place.
            </p>
          </motion.div>

          {/* Carousel */}
          <FeatureCarousel slides={section2Slides} />
        </div>
      </div>
    </section>
  );
};

export default Section2Carousel;
