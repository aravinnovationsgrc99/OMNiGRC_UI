"use client";

import React, { useEffect, useRef } from "react";

interface AmbientGridBackgroundProps {
  fullPage?: boolean;
}

// 21 circles from public/circle-scatter-haikei.svg in exact document order
const RAW_CIRCLES = [
  { r: 58, cx: 446, cy: 378 }, // 0: Teal
  { r: 4, cx: 819, cy: 521 },  // 1: Teal
  { r: 37, cx: 608, cy: 429 }, // 2: Teal
  { r: 36, cx: 231, cy: 209 }, // 3: Teal
  { r: 39, cx: 735, cy: 315 }, // 4: AMBER (5th circle, 0-indexed 4)
  { r: 54, cx: 380, cy: 236 }, // 5: Teal
  { r: 8, cx: 136, cy: 497 },  // 6: Teal
  { r: 10, cx: 552, cy: 278 }, // 7: Teal
  { r: 24, cx: 360, cy: 489 }, // 8: Teal
  { r: 7, cx: 58, cy: 94 },    // 9: AMBER (10th circle, 0-indexed 9)
  { r: 55, cx: 248, cy: 538 }, // 10: Teal
  { r: 4, cx: 817, cy: 66 },   // 11: Teal
  { r: 39, cx: 471, cy: 520 }, // 12: Teal
  { r: 10, cx: 598, cy: 141 }, // 13: Teal
  { r: 44, cx: 106, cy: 270 }, // 14: AMBER (15th circle, 0-indexed 14)
  { r: 17, cx: 209, cy: 340 }, // 15: Teal
  { r: 53, cx: 736, cy: 198 }, // 16: Teal
  { r: 40, cx: 235, cy: 79 },  // 17: Teal
  { r: 7, cx: 728, cy: 446 },  // 18: Teal
  { r: 41, cx: 423, cy: 99 },  // 19: AMBER (20th circle, 0-indexed 19)
  { r: 37, cx: 829, cy: 388 }, // 20: Teal
];

// Pre-calculate circle metadata (color split, opacity range 10-20%, animation params)
const PROCESSED_CIRCLES = RAW_CIRCLES.map((c, index) => {
  // Deterministic 20% amber rule: every 5th circle in document order (4, 9, 14, 19)
  const isAmber = index % 5 === 4;
  
  // High-contrast vibrant brand colors for rich dark-mode aesthetics
  const fill = isAmber ? "#B5750A" : "#14B8A6";
  const glowColor = isAmber ? "#F59E0B" : "#2DD4BF";

  // Per-circle opacity variation based on radius depth: 10% (0.10) to 20% (0.20)
  const normalizedRadius = (c.r - 4) / (58 - 4);
  const opacity = 0.10 + normalizedRadius * 0.10;

  // Motion formula parameters
  const duration = 25 + (index % 5) * 3; // 25s - 37s
  const delay = (index * 1.7) % 20;       // 0s - 20s
  const ampX = 16 + (index % 4) * 4;       // 16 - 28px in viewBox space
  const ampY = 12 + (index % 3) * 5;       // 12 - 22px in viewBox space

  return {
    ...c,
    index,
    isAmber,
    fill,
    glowColor,
    opacity,
    duration,
    delay,
    ampX,
    ampY,
  };
});

export const AmbientGridBackground: React.FC<AmbientGridBackgroundProps> = ({ fullPage = false }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let isIntersecting = true;
    const startTime = performance.now();

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      const dpr = window.devicePixelRatio || 1;

      let displayWidth = window.innerWidth;
      let displayHeight = window.innerHeight;

      if (!fullPage && parent) {
        displayWidth = parent.clientWidth;
        displayHeight = parent.clientHeight;
      }

      canvas.width = Math.floor(displayWidth * dpr);
      canvas.height = Math.floor(displayHeight * dpr);
      canvas.style.width = `${displayWidth}px`;
      canvas.style.height = `${displayHeight}px`;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const render = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      // SVG viewBox dimensions (900x600)
      const viewBoxWidth = 900;
      const viewBoxHeight = 600;

      // Fit SVG viewBox with preserveAspectRatio="xMidYMid slice"
      const scale = Math.max(width / viewBoxWidth, height / viewBoxHeight);
      const offsetX = (width - viewBoxWidth * scale) / 2;
      const offsetY = (height - viewBoxHeight * scale) / 2;

      const elapsedSeconds = (performance.now() - startTime) / 1000;

      PROCESSED_CIRCLES.forEach((circle) => {
        let dx = 0;
        let dy = 0;

        if (!prefersReducedMotion) {
          const tEff = elapsedSeconds + circle.delay;
          const phase = (2 * Math.PI * tEff) / circle.duration;
          // Loose figure-8 / elliptical drift path
          dx = circle.ampX * Math.sin(phase);
          dy = circle.ampY * Math.sin(2 * phase);
        }

        const finalX = offsetX + (circle.cx + dx) * scale;
        const finalY = offsetY + (circle.cy + dy) * scale;
        const finalR = circle.r * scale;

        // Soft radial glow depth
        const grad = ctx.createRadialGradient(finalX, finalY, 0, finalX, finalY, finalR);
        grad.addColorStop(0, circle.glowColor);
        grad.addColorStop(0.65, circle.fill);
        grad.addColorStop(1, circle.fill);

        ctx.fillStyle = grad;
        ctx.globalAlpha = circle.opacity;
        ctx.beginPath();
        ctx.arc(finalX, finalY, finalR, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.restore();

      if (!prefersReducedMotion && isVisible && isIntersecting) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    // Tab visibility listener
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible && isIntersecting && !prefersReducedMotion) {
        cancelAnimationFrame(animationFrameId);
        render();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // IntersectionObserver if not fullPage
    let observer: IntersectionObserver | null = null;
    if (!fullPage) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            isIntersecting = entry.isIntersecting;
            if (isVisible && isIntersecting && !prefersReducedMotion) {
              cancelAnimationFrame(animationFrameId);
              render();
            }
          });
        },
        { threshold: 0.05 }
      );
      observer.observe(canvas);
    }

    // Initial render call
    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (observer) observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [fullPage]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none z-0 ${
        fullPage ? "fixed inset-0 h-screen w-screen" : "absolute inset-0 h-full w-full"
      }`}
    />
  );
};

export default AmbientGridBackground;
