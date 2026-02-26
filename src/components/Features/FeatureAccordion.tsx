"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import type { IAccordionItem } from "@/types";

interface Props {
  items: IAccordionItem[];
  isDark?: boolean;
}

const FeatureAccordion: React.FC<Props> = ({ items, isDark = false }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.title}
            className={`rounded-2xl border transition-colors ${
              isDark
                ? "border-white/15 bg-white/5 hover:bg-white/10"
                : "border-gray-200 bg-white/60 hover:bg-white/90"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="flex items-center justify-between w-full px-5 py-4 text-left"
            >
              <span
                className={`text-lg font-semibold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {item.title}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <FiChevronDown
                  size={20}
                  className={isDark ? "text-white/60" : "text-gray-400"}
                />
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
                        className={`flex gap-3 p-3 rounded-xl transition-colors ${
                          isDark
                            ? "bg-white/5 hover:bg-white/10"
                            : "bg-gray-50 hover:bg-gray-100"
                        }`}
                      >
                        <div
                          className={`flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center ${
                            isDark
                              ? "bg-gradient-to-br from-cyan-400 to-blue-500 text-white"
                              : "bg-gradient-to-br from-blue-500 to-cyan-500 text-white"
                          }`}
                        >
                          {bullet.icon}
                        </div>
                        <div>
                          <h5
                            className={`text-base font-semibold ${
                              isDark ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {bullet.title}
                          </h5>
                          <p
                            className={`text-sm leading-relaxed ${
                              isDark ? "text-white/70" : "text-gray-500"
                            }`}
                          >
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
