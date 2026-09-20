"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * AuroraSVGBackground
 * 
 * Dynamic Organic Liquid Wave Aurora (HTML5 Canvas 2D).
 * 
 * Features:
 * - Light Mode Palette: Crisp White (#FFFFFF), Vibrant Orange (#F97316, #FF7E36), and Luminous Light Mint Green (#34D399, #6EE7B7, #5EEAD4, #A7F3D0).
 * - Equal Full-Viewport Color Spread (Left, Center, Right, Top, Bottom).
 * - Dynamic Liquid Wave Motion (Speed 0.75–1.25, Amplitudes 140–200px).
 * - Dark Mode Palette: Electric Purple (#8B5CF6, #A855F7, #7C3AED), Glowing Pink (#EC4899, #F472B6), Neon Lavender (#D8B4FE).
 * - 0% CSS blur / feGaussianBlur. Pure Canvas 2D radial geometry.
 * - Respects prefers-reduced-motion (renders static frame, stops rAF).
 */

interface WaveBlobConfig {
  getCenter: (w: number, h: number, t: number, isDark?: boolean) => { x: number; y: number };
  getBaseRadius: (w: number, h: number) => number;
  stopsLight: { offset: number; color: string }[];
  stopsDark: { offset: number; color: string }[];
  alphaLight: number;
  alphaDark: number;
  freq1: number;
  freq2: number;
  speed1: number;
  speed2: number;
  amp1: number;
  amp2: number;
}

export const AuroraSVGBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let startTime = performance.now();

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isReducedMotion = mediaQuery.matches;

    const handleMotionChange = (e: MediaQueryListEvent) => {
      isReducedMotion = e.matches;
    };
    mediaQuery.addEventListener("change", handleMotionChange);

    // Track light/dark mode dynamically
    let isDark = document.documentElement.classList.contains("dark");
    const observer = new MutationObserver(() => {
      isDark = document.documentElement.classList.contains("dark");
      renderFrame(performance.now());
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // ─── 6 Organic Wave Layers (Light: Full-Spread, Dark: Deep Concentrated Waves in Center) ───
    const waveLayers: WaveBlobConfig[] = [
      {
        // Layer 1: Central Deep Violet & Indigo Core Wave
        getCenter: (w, h, t, isDark) => ({
          x: isDark
            ? w * 0.48 + Math.sin(t * 0.75) * w * 0.12
            : w * 0.20 + Math.sin(t * 0.75) * w * 0.18,
          y: isDark
            ? h * 0.42 + Math.cos(t * 0.60) * h * 0.12
            : h * 0.28 + Math.cos(t * 0.60) * h * 0.16,
        }),
        getBaseRadius: (w, h) => Math.max(w, h) * (isDark ? 0.44 : 0.52),
        stopsLight: [
          { offset: 0, color: "rgba(255, 126, 54, 0.95)" },   // Vibrant Orange #FF7E36
          { offset: 0.35, color: "rgba(249, 115, 22, 0.80)" }, // #F97316
          { offset: 0.70, color: "rgba(254, 215, 170, 0.45)" },// Peach #FED7AA
          { offset: 1, color: "rgba(255, 247, 239, 0)" },
        ],
        stopsDark: [
          { offset: 0, color: "rgba(109, 40, 217, 0.85)" },   // Deep Royal Purple #6D28D9
          { offset: 0.40, color: "rgba(76, 29, 149, 0.60)" },  // Dark Indigo Violet #4C1D95
          { offset: 0.75, color: "rgba(49, 46, 129, 0.30)" },  // Midnight Blue #312E81
          { offset: 1, color: "rgba(10, 17, 31, 0)" },
        ],
        alphaLight: 0.58,
        alphaDark: 0.70,
        freq1: 3,
        freq2: 2,
        speed1: 1.10,
        speed2: 0.80,
        amp1: 170,
        amp2: 110,
      },
      {
        // Layer 2: Center Core Deep Magenta & Violet Wave
        getCenter: (w, h, t, isDark) => ({
          x: isDark
            ? w * 0.50 + Math.cos(t * 0.65 + 1.2) * w * 0.10
            : w * 0.50 + Math.cos(t * 0.65 + 1.2) * w * 0.20,
          y: isDark
            ? h * 0.45 + Math.sin(t * 0.55 + 0.8) * h * 0.10
            : h * 0.45 + Math.sin(t * 0.55 + 0.8) * h * 0.18,
        }),
        getBaseRadius: (w, h) => Math.max(w, h) * (isDark ? 0.46 : 0.54),
        stopsLight: [
          { offset: 0, color: "rgba(52, 211, 153, 0.88)" },   // Luminous Mint Green #34D399
          { offset: 0.35, color: "rgba(110, 231, 183, 0.70)" },// Light Emerald #6EE7B7
          { offset: 0.70, color: "rgba(94, 234, 212, 0.40)" }, // Soft Light Teal #5EEAD4
          { offset: 1, color: "rgba(255, 247, 239, 0)" },
        ],
        stopsDark: [
          { offset: 0, color: "rgba(157, 23, 77, 0.80)" },    // Dark Pink-Magenta #9D174D
          { offset: 0.45, color: "rgba(124, 58, 237, 0.55)" }, // Electric Violet #7C3AED
          { offset: 0.80, color: "rgba(30, 27, 75, 0.25)" },   // Dark Slate #1E1B4B
          { offset: 1, color: "rgba(10, 17, 31, 0)" },
        ],
        alphaLight: 0.56,
        alphaDark: 0.68,
        freq1: 4,
        freq2: 3,
        speed1: 0.95,
        speed2: 0.70,
        amp1: 160,
        amp2: 100,
      },
      {
        // Layer 3: Central Right Deep Violet Accent
        getCenter: (w, h, t, isDark) => ({
          x: isDark
            ? w * 0.54 + Math.sin(t * 0.70 + 2.5) * w * 0.10
            : w * 0.80 + Math.sin(t * 0.70 + 2.5) * w * 0.18,
          y: isDark
            ? h * 0.40 + Math.cos(t * 0.58 + 1.8) * h * 0.12
            : h * 0.25 + Math.cos(t * 0.58 + 1.8) * h * 0.16,
        }),
        getBaseRadius: (w, h) => Math.max(w, h) * (isDark ? 0.42 : 0.50),
        stopsLight: [
          { offset: 0, color: "rgba(255, 255, 255, 0.99)" },   // Pure White
          { offset: 0.30, color: "rgba(255, 126, 54, 0.85)" }, // Vibrant Orange
          { offset: 0.65, color: "rgba(167, 243, 208, 0.48)" },// Pale Mint #A7F3D0
          { offset: 1, color: "rgba(255, 247, 239, 0)" },
        ],
        stopsDark: [
          { offset: 0, color: "rgba(139, 92, 246, 0.80)" },   // Purple #8B5CF6
          { offset: 0.40, color: "rgba(91, 33, 182, 0.55)" },  // Deep Purple #5B21B6
          { offset: 0.75, color: "rgba(15, 23, 42, 0.25)" },   // Navy Slate
          { offset: 1, color: "rgba(10, 17, 31, 0)" },
        ],
        alphaLight: 0.58,
        alphaDark: 0.66,
        freq1: 3,
        freq2: 5,
        speed1: 1.20,
        speed2: 0.82,
        amp1: 155,
        amp2: 95,
      },
      {
        // Layer 4: Central Lower-Left Midnight Violet Wave
        getCenter: (w, h, t, isDark) => ({
          x: isDark
            ? w * 0.46 + Math.cos(t * 0.60 + 3.8) * w * 0.10
            : w * 0.25 + Math.cos(t * 0.60 + 3.8) * w * 0.18,
          y: isDark
            ? h * 0.48 + Math.sin(t * 0.68 + 3.2) * h * 0.12
            : h * 0.75 + Math.sin(t * 0.68 + 3.2) * h * 0.18,
        }),
        getBaseRadius: (w, h) => Math.max(w, h) * (isDark ? 0.44 : 0.52),
        stopsLight: [
          { offset: 0, color: "rgba(110, 231, 183, 0.88)" },  // Light Emerald #6EE7B7
          { offset: 0.35, color: "rgba(52, 211, 153, 0.72)" }, // Mint Green #34D399
          { offset: 0.70, color: "rgba(249, 115, 22, 0.45)" }, // Orange #F97316
          { offset: 1, color: "rgba(255, 247, 239, 0)" },
        ],
        stopsDark: [
          { offset: 0, color: "rgba(76, 29, 149, 0.82)" },    // Dark Purple #4C1D95
          { offset: 0.45, color: "rgba(190, 24, 93, 0.50)" },  // Deep Rose #BE185D
          { offset: 1, color: "rgba(10, 17, 31, 0)" },
        ],
        alphaLight: 0.55,
        alphaDark: 0.68,
        freq1: 5,
        freq2: 3,
        speed1: 1.05,
        speed2: 0.88,
        amp1: 165,
        amp2: 105,
      },
      {
        // Layer 5: Central Lower-Right Deep Purple Wave
        getCenter: (w, h, t, isDark) => ({
          x: isDark
            ? w * 0.52 + Math.sin(t * 0.62 + 4.5) * w * 0.10
            : w * 0.78 + Math.sin(t * 0.62 + 4.5) * w * 0.18,
          y: isDark
            ? h * 0.46 + Math.cos(t * 0.52 + 4.0) * h * 0.12
            : h * 0.78 + Math.cos(t * 0.52 + 4.0) * h * 0.16,
        }),
        getBaseRadius: (w, h) => Math.max(w, h) * (isDark ? 0.45 : 0.54),
        stopsLight: [
          { offset: 0, color: "rgba(249, 115, 22, 0.92)" },   // Orange #F97316
          { offset: 0.35, color: "rgba(255, 126, 54, 0.78)" }, // #FF7E36
          { offset: 0.70, color: "rgba(167, 243, 208, 0.45)" },// Pale Mint #A7F3D0
          { offset: 1, color: "rgba(255, 247, 239, 0)" },
        ],
        stopsDark: [
          { offset: 0, color: "rgba(124, 58, 237, 0.85)" },   // Electric Violet #7C3AED
          { offset: 0.45, color: "rgba(67, 56, 202, 0.55)" },  // Deep Indigo #4338CA
          { offset: 1, color: "rgba(10, 17, 31, 0)" },
        ],
        alphaLight: 0.58,
        alphaDark: 0.68,
        freq1: 4,
        freq2: 2,
        speed1: 1.00,
        speed2: 0.78,
        amp1: 150,
        amp2: 95,
      },
      {
        // Layer 6: Center-Top Deep Plum Wave
        getCenter: (w, h, t, isDark) => ({
          x: isDark
            ? w * 0.50 + Math.sin(t * 0.80 + 5.2) * w * 0.06
            : w * 0.50 + Math.sin(t * 0.80 + 5.2) * w * 0.16,
          y: isDark
            ? h * 0.38 + Math.cos(t * 0.65 + 4.8) * h * 0.08
            : h * 0.15 + Math.cos(t * 0.65 + 4.8) * h * 0.12,
        }),
        getBaseRadius: (w, h) => Math.max(w, h) * (isDark ? 0.40 : 0.46),
        stopsLight: [
          { offset: 0, color: "rgba(255, 255, 255, 0.99)" },   // Pure White
          { offset: 0.30, color: "rgba(52, 211, 153, 0.80)" }, // Light Mint #34D399
          { offset: 0.65, color: "rgba(255, 126, 54, 0.50)" }, // Orange #FF7E36
          { offset: 1, color: "rgba(255, 247, 239, 0)" },
        ],
        stopsDark: [
          { offset: 0, color: "rgba(168, 85, 247, 0.82)" },   // Purple #A855F7
          { offset: 0.40, color: "rgba(109, 40, 217, 0.55)" },// Deep Violet #6D28D9
          { offset: 0.75, color: "rgba(30, 27, 75, 0.30)" },  // Dark Slate
          { offset: 1, color: "rgba(10, 17, 31, 0)" },
        ],
        alphaLight: 0.56,
        alphaDark: 0.66,
        freq1: 5,
        freq2: 4,
        speed1: 1.25,
        speed2: 0.90,
        amp1: 140,
        amp2: 85,
      },
    ];

    const renderFrame = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);

      // Clear canvas frame
      ctx.clearRect(0, 0, width, height);

      // Use source-over for true dark wave saturation behind text (not additive screen!)
      ctx.globalCompositeOperation = "source-over";

      for (const layer of waveLayers) {
        const { x: cx, y: cy } = layer.getCenter(width, height, elapsed, isDark);
        const baseRadius = layer.getBaseRadius(width, height);

        // Draw dynamic liquid fluid wave polygon using harmonic sine deformation
        ctx.beginPath();
        const numPoints = 48;

        const points: { x: number; y: number }[] = [];
        for (let i = 0; i < numPoints; i++) {
          const angle = (i / numPoints) * Math.PI * 2;
          const deformation =
            Math.sin(angle * layer.freq1 + elapsed * layer.speed1) * layer.amp1 +
            Math.cos(angle * layer.freq2 - elapsed * layer.speed2) * layer.amp2;

          const r = baseRadius + deformation;
          points.push({
            x: cx + Math.cos(angle) * r,
            y: cy + Math.sin(angle) * r,
          });
        }

        // Draw smooth Bezier spline through points for organic fluid wave edge
        ctx.moveTo(
          (points[0].x + points[numPoints - 1].x) / 2,
          (points[0].y + points[numPoints - 1].y) / 2
        );

        for (let i = 0; i < numPoints; i++) {
          const next = (i + 1) % numPoints;
          const midX = (points[i].x + points[next].x) / 2;
          const midY = (points[i].y + points[next].y) / 2;
          ctx.quadraticCurveTo(points[i].x, points[i].y, midX, midY);
        }

        ctx.closePath();

        // Create multi-stop radial gradient for natural translucent fluid diffusion
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, baseRadius * 1.40);
        const stops = isDark ? layer.stopsDark : layer.stopsLight;

        for (const stop of stops) {
          grad.addColorStop(stop.offset, stop.color);
        }

        ctx.globalAlpha = isDark ? layer.alphaDark : layer.alphaLight;
        ctx.fillStyle = grad;
        ctx.fill();
      }

      ctx.restore();
    };

    const loop = (now: number) => {
      renderFrame(now);
      if (!isReducedMotion) {
        animId = requestAnimationFrame(loop);
      }
    };

    if (isReducedMotion) {
      renderFrame(performance.now());
    } else {
      animId = requestAnimationFrame(loop);
    }

    return () => {
      mediaQuery.removeEventListener("change", handleMotionChange);
      observer.disconnect();
      if (animId) cancelAnimationFrame(animId);
    };
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
