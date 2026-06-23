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
          className="group relative p-5 rounded-2xl bg-surface-1 hover:bg-surface-2 border border-line hover:border-brand/40 shadow-sm hover:shadow-lg transition-all"
        >
          {/* Hover glow */}
          <div className="absolute inset-0 rounded-2xl brand-gradient-br opacity-0 group-hover:opacity-[0.06] transition-opacity pointer-events-none" />

          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl brand-gradient-br flex items-center justify-center text-ink-on-accent shadow-md mb-3">
              {card.icon}
            </div>
            <h4 className="text-lg font-semibold text-ink group-hover:text-brand transition-colors mb-1.5">
              {card.title}
            </h4>
            <p className="text-base text-ink-secondary leading-relaxed">
              {card.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureGrid;
