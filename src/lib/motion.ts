import { Variants } from "framer-motion";

// Standard Scroll Reveal (400-600ms ease-out, 16-24px rise)
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Stagger Container (60-100ms between siblings, capped around 5-6 items)
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// Standard Hover-Lift for Cards (150-200ms, 4-8px translate)
export const hoverLift = {
  rest: {
    y: 0,
    boxShadow: "0 0 0px rgba(0, 0, 0, 0)",
    transition: {
      duration: 0.18,
      ease: "easeOut",
    },
  },
  hover: {
    y: -6,
    boxShadow: "0 12px 30px -10px rgba(15, 110, 106, 0.25)",
    transition: {
      duration: 0.18,
      ease: "easeOut",
    },
  },
};

// Fade In Simple Variant
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// Scale Up Variant for Modals & Badges
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
};
