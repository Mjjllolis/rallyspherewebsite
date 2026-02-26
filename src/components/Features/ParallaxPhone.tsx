"use client";
import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
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

  const [isHovered, setIsHovered] = useState(false);

  // Mouse-tracking rotation
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateXSpring = useSpring(mouseY, { stiffness: 150, damping: 20 });
  const rotateYSpring = useSpring(mouseX, { stiffness: 150, damping: 20 });

  const baseRotateY = tiltDirection === "right" ? -20 : 20;
  const baseRotateX = 5;

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

  return (
    <div
      ref={ref}
      className={clsx("relative w-full max-w-[340px] mx-auto", className)}
      style={{ perspective: "1200px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative w-full"
        style={{
          y,
          transformStyle: "preserve-3d",
          rotateY: useTransform(rotateYSpring, (v) => baseRotateY + v),
          rotateX: useTransform(rotateXSpring, (v) => baseRotateX + v),
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
            "absolute inset-0 blur-3xl opacity-30 rounded-[2rem] pointer-events-none transition-opacity duration-300",
            isHovered && "opacity-45",
            tiltDirection === "left"
              ? "bg-gradient-to-br from-blue-400 to-cyan-400 -rotate-6"
              : "bg-gradient-to-bl from-cyan-400 to-purple-400 rotate-6"
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
