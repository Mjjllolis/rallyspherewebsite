"use client";
import { motion } from "framer-motion";
import FeatureCarousel from "./FeatureCarousel";
import { section2Slides } from "@/data/features";

const Section2Carousel: React.FC = () => {
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
              Clubs &middot; Events &middot; Profiles
            </p>
            <h3 className="text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Everything Your Community Needs
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
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
