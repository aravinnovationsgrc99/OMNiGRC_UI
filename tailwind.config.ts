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
          teal: {
            DEFAULT: "#0F766E",
            50: "#f0fdfa",
            100: "#ccfbf1",
            200: "#99f6e4",
            300: "#5eead4",
            400: "#2dd4bf",
            500: "#14b8a6",
            600: "#0d9488",
            700: "#0f766e",
            800: "#115e59",
            900: "#134e4a",
            950: "#042f2e",
          },
          cyan: {
            DEFAULT: "#06B6D4",
            50: "#ecfeff",
            100: "#cffaff",
            200: "#a5f3fc",
            300: "#67e8f9",
            400: "#22d3ee",
            500: "#06b6d4",
            600: "#0891b2",
            700: "#0e7490",
            800: "#155e75",
            900: "#164e63",
          },
          dark: {
            DEFAULT: "#0B0F17",
            slate: "#0F172A",
            card: "#1E293B",
            cardHover: "#24334A",
            border: "rgba(15, 118, 110, 0.25)",
            borderHover: "rgba(6, 182, 212, 0.4)",
          },
          emerald: "#10B981",
          amber: "#F59E0B",
        },
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(3deg)" },
        },
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "marquee-fast": "marquee 20s linear infinite",
        "marquee-reverse": "marqueeReverse 35s linear infinite",
        "pulse-glow": "pulseGlow 6s ease-in-out infinite",
        float: "float 8s ease-in-out infinite",
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(circle at 50% 20%, rgba(15, 118, 110, 0.25) 0%, rgba(6, 182, 212, 0.1) 35%, rgba(11, 15, 23, 1) 75%)",
        "card-gradient": "linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)",
        "teal-cyan-gradient": "linear-gradient(135deg, #0F766E 0%, #06B6D4 100%)",
        "teal-glow": "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(15, 118, 110, 0.15), transparent 40%)",
      },
    },
  },
  plugins: [],
};

export default config;
