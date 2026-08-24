import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          orange: {
            DEFAULT: "#f15e1c",
            50: "#fff5f0",
            100: "#ffe8dc",
            200: "#ffd0b8",
            300: "#ffac89",
            400: "#f97e50",
            500: "#f15e1c",
            600: "#e0420b",
            700: "#ba3009",
            800: "#94280e",
            900: "#77240f",
          },
          green: {
            DEFAULT: "#2e936f",
            50: "#f0fdf6",
            100: "#dcfce9",
            200: "#bcf5d6",
            300: "#86e8b8",
            400: "#4cd396",
            500: "#2e936f",
            600: "#1f785a",
            700: "#1b6049",
            800: "#184d3c",
            900: "#154033",
          },
          yellow: {
            DEFAULT: "#ffec69",
            50: "#fffde6",
            100: "#fffbbf",
            200: "#fff68f",
            300: "#ffec69",
            400: "#ffe033",
          },
          gold: {
            DEFAULT: "#fab60a",
            50: "#fffbe6",
            100: "#fff4b8",
            200: "#ffe685",
            300: "#ffd347",
            400: "#fab60a",
            500: "#e29b04",
          },
          peach: {
            DEFAULT: "#f7d7b0",
            50: "#fffaf5",
            100: "#fdf0e1",
            200: "#f7d7b0",
            300: "#f2ba7c",
          },
          dark: {
            DEFAULT: "#0B0F17",
            slate: "#0F172A",
            card: "#1E293B",
            cardHover: "#27354D",
            border: "rgba(241, 94, 28, 0.25)",
            borderHover: "rgba(241, 94, 28, 0.5)",
          },
        },
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "pulse-glow": "pulseGlow 6s ease-in-out infinite",
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(circle at 50% 20%, rgba(241, 94, 28, 0.2) 0%, rgba(250, 182, 10, 0.1) 35%, rgba(11, 15, 23, 1) 75%)",
        "card-gradient": "linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)",
        "orange-gold-gradient": "linear-gradient(135deg, #f15e1c 0%, #fab60a 100%)",
        "orange-green-gradient": "linear-gradient(135deg, #f15e1c 0%, #2e936f 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
