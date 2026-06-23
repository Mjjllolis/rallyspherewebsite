import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // ← ✅ Enable class-based dark mode
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ---- Role-based design tokens ----
        bg: "var(--bg)",
        surface: {
          1: "var(--surface-1)",
          2: "var(--surface-2)",
          3: "var(--surface-3)",
          inverse: "var(--surface-inverse)",
        },
        ink: {
          DEFAULT: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          "on-accent": "var(--text-on-accent)",
          "on-inverse": "var(--text-on-inverse)",
          "on-inverse-muted": "var(--text-on-inverse-muted)",
        },
        brand: {
          DEFAULT: "var(--brand)",
          strong: "var(--brand-strong)",
        },
        accent: {
          from: "var(--accent-from)",
          via: "var(--accent-via)",
          to: "var(--accent-to)",
        },
        navy: {
          1: "var(--navy-1)",
          2: "var(--navy-2)",
          3: "var(--navy-3)",
        },
        line: "var(--border)",
        "line-strong": "var(--border-strong)",
        ring: "var(--ring)",
      },
      borderColor: {
        DEFAULT: "var(--border)",
      },
      ringColor: {
        DEFAULT: "var(--ring)",
      },
      width: {
        '30': '7.5rem', // 120px
        '64': '16rem', // 256px
        '72': '18rem', // 288px
        '80': '20rem', // 320px
        '96': '24rem', // 384px
      },
      height: {
        '30': '7.5rem', // 120px
        '64': '16rem', // 256px
        '72': '18rem', // 288px
        '80': '20rem', // 320px
        '96': '24rem', // 384px
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
    },
  },
  plugins: [],
};

export default config;