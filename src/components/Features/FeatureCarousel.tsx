"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { ICarouselSlide } from "@/types";

interface Props {
  slides: ICarouselSlide[];
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -200 : 200,
    opacity: 0,
  }),
};

const FeatureCarousel: React.FC<Props> = ({ slides }) => {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);

  const goTo = (index: number) => {
    setActiveIndex([index, index > activeIndex ? 1 : -1]);
  };

  const slide = slides[activeIndex];

  return (
    <div className="space-y-8">
      {/* Tab buttons */}
      <div className="flex justify-center gap-2 sm:gap-3">
        {slides.map((s, i) => (
          <button
            key={s.label}
            onClick={() => goTo(i)}
            className={`px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              i === activeIndex
                ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Carousel content */}
      <div className="grid lg:grid-cols-[minmax(0,380px)_1fr] gap-8 lg:gap-12 items-center">
        {/* Phone */}
        <div className="relative mx-auto w-full max-w-[280px] lg:max-w-none" style={{ perspective: "2000px" }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative"
              style={{
                transformStyle: "preserve-3d",
                transform: "rotateY(12deg)",
              }}
            >
              <div className="absolute inset-0 blur-3xl opacity-25 rounded-[2rem] bg-gradient-to-br from-blue-400 to-cyan-400 -rotate-3 pointer-events-none" />
              <Image
                src={slide.imageSrc}
                alt={slide.label}
                width={380}
                height={760}
                quality={100}
                className="relative z-10 w-full h-auto drop-shadow-2xl select-none rounded-[2rem]"
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bullets */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-5"
          >
            {slide.bullets.map((bullet, i) => (
              <motion.div
                key={bullet.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                className="flex gap-4 group p-4 rounded-xl bg-white/60 hover:bg-white/90 transition-colors shadow-sm hover:shadow-md"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-lg">
                  {bullet.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {bullet.title}
                  </h4>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {bullet.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "bg-blue-600 w-8"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureCarousel;
