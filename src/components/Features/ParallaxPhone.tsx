"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import clsx from "clsx";

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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], parallaxRange);

  return (
    <div
      ref={ref}
      className={clsx("relative w-full max-w-[300px] mx-auto", className)}
      style={{ perspective: "2000px" }}
    >
      <motion.div
        className="relative w-full"
        style={{
          y,
          transformStyle: "preserve-3d",
          transform: `rotateY(${tiltDirection === "right" ? -12 : 12}deg)`,
        }}
      >
        {/* Glow */}
        <div
          className={clsx(
            "absolute inset-0 blur-3xl opacity-30 rounded-[2rem] pointer-events-none",
            tiltDirection === "left"
              ? "bg-gradient-to-br from-blue-400 to-cyan-400 -rotate-6"
              : "bg-gradient-to-bl from-cyan-400 to-purple-400 rotate-6"
          )}
          style={{ transform: "translateZ(-50px)" }}
        />

        <Image
          src={src}
          alt={alt}
          width={400}
          height={800}
          quality={100}
          className="relative z-10 w-full h-auto drop-shadow-2xl select-none rounded-[2rem]"
          draggable={false}
        />
      </motion.div>
    </div>
  );
};

export default ParallaxPhone;
