"use client";

import { useCallback, useState } from "react";
import { useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";

interface TiltOptions {
  /** Base resting rotation on the X axis (degrees). */
  baseRotateX?: number;
  /** Base resting rotation on the Y axis (degrees). */
  baseRotateY?: number;
  /** Horizontal mouse sensitivity (degrees added to Y rotation). */
  intensityX?: number;
  /** Vertical mouse sensitivity (degrees added to X rotation). */
  intensityY?: number;
}

/**
 * Mouse-tracking 3D tilt. Extracted from the duplicated logic that lived in
 * ParallaxPhone and FeatureCarousel. Respects prefers-reduced-motion: when the
 * user opts out, the element rests at its base rotation and ignores the mouse.
 */
export function useTilt({
  baseRotateX = 5,
  baseRotateY = 20,
  intensityX = 8,
  intensityY = 5,
}: TiltOptions = {}) {
  const reduce = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateXSpring = useSpring(mouseY, { stiffness: 150, damping: 20 });
  const rotateYSpring = useSpring(mouseX, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(rotateXSpring, (v) => baseRotateX + v);
  const rotateY = useTransform(rotateYSpring, (v) => baseRotateY + v);

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reduce) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = (e.clientX - centerX) / (rect.width / 2);
      const y = (e.clientY - centerY) / (rect.height / 2);
      mouseX.set(x * intensityX);
      mouseY.set(-y * intensityY);
    },
    [reduce, mouseX, mouseY, intensityX, intensityY]
  );

  const onMouseEnter = useCallback(() => setIsHovered(true), []);
  const onMouseLeave = useCallback(() => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return {
    isHovered,
    rotateX,
    rotateY,
    handlers: { onMouseMove, onMouseEnter, onMouseLeave },
  };
}
