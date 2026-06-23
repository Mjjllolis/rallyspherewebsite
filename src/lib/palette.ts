/**
 * JS mirror of the brand palette for contexts that cannot read CSS variables
 * (three.js materials, canvas, etc.). Keep these in sync with the
 * --accent-* / --navy-* tokens in globals.css.
 */
export const palette = {
  // Accent (blue → sky → cyan)
  blue: "#3b82f6",
  sky: "#38bdf8",
  cyan: "#22d3ee",
  brightBlue: "#0066ff",
  // Navy panel stops
  navy1: "#0b1120",
  navy2: "#152238",
  navy3: "#1a2f50",
} as const;

/** Sphere colors for the hero 3D background, drawn from the accent range. */
export const heroSphereColors = [
  "#0066ff",
  "#00d4ff",
  "#0088ff",
  "#3b82f6",
  "#22d3ee",
  "#0099ff",
  "#38bdf8",
  "#0077ff",
] as const;
