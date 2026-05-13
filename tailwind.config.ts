import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nadi: {
          hero: "#2D1B14",
          "hero-mid": "#3A241C",
          "hero-light": "#4A2C21",
          cream: "#F5F2EE",
          beige: "#D1C7BD",
          ink: "#1A120E",
          muted: "#6B635C",
          "muted-light": "#9A928A",
          gold: "#8B6B47",
          terracotta: "#C4704D",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxury: "0.22em",
        wide: "0.14em",
        nav: "0.12em",
      },
      maxWidth: {
        "hero-copy": "34rem",
        mission: "17.5rem",
        vision: "22rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "hero-glow": {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.75", transform: "scale(1.04)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "hero-glow": "hero-glow 14s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
