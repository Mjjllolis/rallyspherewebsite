"use client";
import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
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
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateXSpring = useSpring(mouseY, { stiffness: 150, damping: 20 });
  const rotateYSpring = useSpring(mouseX, { stiffness: 150, damping: 20 });

  const rotateXFinal = useTransform(rotateXSpring, (v) => 5 + v);
  const rotateYFinal = useTransform(rotateYSpring, (v) => 20 + v);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = (e.clientX - centerX) / (rect.width / 2);
      const yPos = (e.clientY - centerY) / (rect.height / 2);
      mouseX.set(x * 8);
      mouseY.set(-yPos * 5);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

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
        <div
          className="relative mx-auto w-full max-w-[280px] lg:max-w-none"
          style={{ perspective: "1200px" }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
        >
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
                rotateX: rotateXFinal,
                rotateY: rotateYFinal,
              }}
            >
              {/* Shadow on surface */}
              <div
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[70%] h-12 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse, rgba(0,0,0,0.25) 0%, transparent 70%)",
                  transform: "translateZ(-60px) translateX(-10%)",
                }}
              />

              <div
                className={`absolute inset-0 blur-3xl opacity-25 rounded-[2rem] bg-gradient-to-br from-blue-400 to-cyan-400 -rotate-3 pointer-events-none transition-opacity duration-300 ${isHovered ? "opacity-40" : ""}`}
                style={{ transform: "translateZ(-50px)" }}
              />

              {/* Phone bezel */}
              <div
                className="absolute inset-[-3px] rounded-[2.2rem] bg-gradient-to-b from-gray-700 via-gray-900 to-gray-800 z-[5]"
                style={{ transform: "translateZ(-2px)" }}
              />

              {/* Screen reflection */}
              <div
                className="absolute inset-0 rounded-[2rem] z-20 pointer-events-none opacity-[0.07]"
                style={{
                  background: "linear-gradient(135deg, white 0%, transparent 50%)",
                }}
              />

              <Image
                src={slide.imageSrc}
                alt={slide.label}
                width={380}
                height={760}
                quality={100}
                className="relative z-10 w-full h-auto select-none rounded-[2rem]"
                draggable={false}
                style={{
                  filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.3))",
                }}
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
