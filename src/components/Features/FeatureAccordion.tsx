"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import type { IAccordionItem } from "@/types";

interface Props {
  items: IAccordionItem[];
}

const FeatureAccordion: React.FC<Props> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.title}
            className="rounded-2xl border border-line bg-surface-1 hover:bg-surface-2 transition-colors"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="flex items-center justify-between w-full px-5 py-4 text-left"
            >
              <span className="text-lg font-semibold text-ink">{item.title}</span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <FiChevronDown size={20} className="text-ink-muted" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="px-5 pb-5 space-y-3">
                    {item.bullets.map((bullet) => (
                      <div
                        key={bullet.title}
                        className="flex gap-3 p-3 rounded-xl bg-surface-2 hover:bg-surface-3 transition-colors"
                      >
                        <div className="flex-shrink-0 w-11 h-11 rounded-lg brand-gradient-br flex items-center justify-center text-ink-on-accent">
                          {bullet.icon}
                        </div>
                        <div>
                          <h5 className="text-base font-semibold text-ink">
                            {bullet.title}
                          </h5>
                          <p className="text-sm leading-relaxed text-ink-secondary">
                            {bullet.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default FeatureAccordion;
