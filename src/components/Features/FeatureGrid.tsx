"use client";
import { motion } from "framer-motion";
import type { IFeatureCard } from "@/types";

interface Props {
  cards: IFeatureCard[];
}

const FeatureGrid: React.FC<Props> = ({ cards }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, i) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            delay: i * 0.08,
            duration: 0.4,
            ease: "easeOut",
          }}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="group relative p-5 rounded-2xl bg-white/60 hover:bg-white/90 border border-gray-200 hover:border-blue-200 shadow-sm hover:shadow-lg transition-all"
        >
          {/* Hover glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-md mb-3">
              {card.icon}
            </div>
            <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1.5">
              {card.title}
            </h4>
            <p className="text-base text-gray-500 leading-relaxed">
              {card.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureGrid;
