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
      fontFamily: {
        sans: ["var(--font-ibm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-ibm-mono)", "monospace"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: {
          DEFAULT: "#16233F",
          50: "#f2f5fa",
          100: "#e1e7f3",
          200: "#c7d3e7",
          300: "#a0b4d6",
          400: "#738ebf",
          500: "#516fa7",
          600: "#3d558b",
          700: "#324571",
          800: "#1d2945",
          900: "#16233F",
          950: "#0A111F",
        },
        teal: {
          DEFAULT: "#0F6E6A",
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#0F6E6A",
          600: "#0d5c59",
          700: "#0b4a48",
          800: "#0a3d3b",
          900: "#083332",
        },
        amber: {
          DEFAULT: "#B5750A",
          50: "#fffbe6",
          100: "#fff3c2",
          200: "#ffe585",
          300: "#ffd247",
          400: "#d99110",
          500: "#B5750A",
          600: "#965e06",
          700: "#784807",
          800: "#643b0c",
          900: "#54320f",
        },
        rose: {
          DEFAULT: "#B23A48",
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#B23A48",
          600: "#9f2b38",
          700: "#85202b",
          800: "#701e26",
          900: "#5e1d23",
        },
        // ── Light-mode primary action ─────────────────────────────────────
        // #F15E1C passes WCAG AA for large/bold text (≥ 18pt or ≥ 14pt bold)
        // Use orange-600 (#D4521A) for small-text labels where contrast is tighter
        orange: {
          DEFAULT: "#F15E1C",
          600: "#D4521A",
          700: "#B8451A",
        },
        // ── Light-mode secondary / positive accent ────────────────────────
        green: {
          DEFAULT: "#2E936F",
          600: "#25785A",
          700: "#1E6048",
        },
        // ── Light-mode card / panel surface ──────────────────────────────
        peach: {
          DEFAULT: "#F7D7B0",
          200: "#F7D7B0",
          border: "#E8C090",
        },
        // ── Light-mode accent fills (FILL USE ONLY — never as text color) ─
        goldenYellow: "#FAB60A",
        lightYellow: "#FFEC69",
        // ── Shared tokens ─────────────────────────────────────────────────
        canvas: {
          // Light mode: pure white. Dark mode is controlled via dark:bg-[#0A111F]
          DEFAULT: "#FFFFFF",
          dark: "#0A111F",
        },
        cardWarm: "#F7D7B0",
        cardBorderWarm: "#E8C090",
        slateText: "#5B6672",
        slateSoft: "#8B95A1",
        brand: {
          navy: "#16233F",
          teal: "#0F6E6A",
          amber: "#B5750A",
          rose: "#B23A48",
          canvas: "#FFFFFF",
          slate: "#5B6672",
          slateSoft: "#8B95A1",
          dark: "#0A111F",
          orange: "#F15E1C",
          green: "#2E936F",
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
        "hero-gradient": "radial-gradient(circle at 50% 20%, rgba(15, 110, 106, 0.25) 0%, rgba(181, 117, 10, 0.12) 35%, rgba(10, 17, 31, 1) 75%)",
        "card-gradient": "linear-gradient(135deg, rgba(22, 35, 63, 0.9) 0%, rgba(10, 17, 31, 0.95) 100%)",
        "teal-amber-gradient": "linear-gradient(135deg, #0F6E6A 0%, #B5750A 100%)",
        "teal-rose-gradient": "linear-gradient(135deg, #0F6E6A 0%, #B23A48 100%)",
        "orange-gradient": "linear-gradient(135deg, #F15E1C 0%, #D4521A 100%)",
        "green-gradient": "linear-gradient(135deg, #2E936F 0%, #25785A 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
