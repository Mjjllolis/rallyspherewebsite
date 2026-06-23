"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import { useTilt } from "@/lib/useTilt";

interface Props {
  src: string;
  alt: string;
  tiltDirection?: "left" | "right";
  parallaxRange?: [number, number];
  className?: string;
}

const ParallaxPhone: React.FC<Props> = ({
  src,
  alt,
  tiltDirection = "left",
  parallaxRange = [80, -80],
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : parallaxRange);

  const baseRotateY = tiltDirection === "right" ? -20 : 20;
  const { isHovered, rotateX, rotateY, handlers } = useTilt({
    baseRotateX: 5,
    baseRotateY,
  });

  return (
    <div
      ref={ref}
      className={clsx("relative w-full max-w-[340px] mx-auto", className)}
      style={{ perspective: "1200px" }}
      {...handlers}
    >
      <motion.div
        className="relative w-full"
        style={{
          y,
          transformStyle: "preserve-3d",
          rotateY,
          rotateX,
        }}
      >
        {/* Shadow on surface */}
        <div
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[70%] h-12 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(0,0,0,0.25) 0%, transparent 70%)",
            transform: `translateZ(-60px) ${tiltDirection === "left" ? "translateX(-10%)" : "translateX(10%)"}`,
          }}
        />

        {/* Glow */}
        <div
          className={clsx(
            "absolute inset-0 blur-3xl opacity-30 rounded-[2rem] pointer-events-none transition-opacity duration-300 brand-gradient-br",
            isHovered && "opacity-45",
            tiltDirection === "left" ? "-rotate-6" : "rotate-6"
          )}
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
          src={src}
          alt={alt}
          width={400}
          height={800}
          quality={100}
          className="relative z-10 w-full h-auto select-none rounded-[2rem]"
          draggable={false}
          style={{
            filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.3))",
          }}
        />
      </motion.div>
    </div>
  );
};

export default ParallaxPhone;
