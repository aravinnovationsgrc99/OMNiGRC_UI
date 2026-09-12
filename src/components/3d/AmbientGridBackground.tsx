"use client";

import React, { useEffect, useRef } from "react";

interface AmbientGridBackgroundProps {
  fullPage?: boolean;
}

export const AmbientGridBackground: React.FC<AmbientGridBackgroundProps> = ({ fullPage = false }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resizeCanvas = () => {
      if (fullPage) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      } else if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Node & grid setup
    const nodeCount = fullPage ? 50 : 35;
    const nodes: Array<{ x: number; y: number; vx: number; vy: number; radius: number; alpha: number }> = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: Math.random() * 1.5 + 1,
        alpha: Math.random() * 0.35 + 0.15,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDark = document.documentElement.classList.contains("dark");

      // Draw faint dot grid lines
      const gridSize = 48;
      ctx.strokeStyle = isDark ? "rgba(15, 110, 106, 0.05)" : "rgba(15, 110, 106, 0.08)";
      ctx.lineWidth = 1;

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw drifting nodes and interconnecting lines
      nodes.forEach((node, i) => {
        if (!prefersReducedMotion && isVisible) {
          node.x += node.vx;
          node.y += node.vy;

          if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
          if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        }

        ctx.fillStyle = isDark
          ? `rgba(14, 165, 233, ${node.alpha * 0.9})`
          : `rgba(15, 110, 106, ${node.alpha * 1.2})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.strokeStyle = isDark
              ? `rgba(139, 92, 246, ${0.1 * (1 - dist / 130)})`
              : `rgba(181, 117, 10, ${0.12 * (1 - dist / 130)})`;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      });

      if (!prefersReducedMotion && isVisible) {
        animationFrameId = requestAnimationFrame(draw);
      }
    };

    // Tab visibility listener
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible && !prefersReducedMotion) {
        draw();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // IntersectionObserver if not fullPage
    let observer: IntersectionObserver | null = null;
    if (!fullPage) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            isVisible = entry.isIntersecting && !document.hidden;
            if (isVisible && !prefersReducedMotion) {
              cancelAnimationFrame(animationFrameId);
              draw();
            }
          });
        },
        { threshold: 0.05 }
      );
      observer.observe(canvas);
    }

    // Initial render
    draw();

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
      className={`pointer-events-none z-0 opacity-40 ${
        fullPage ? "fixed inset-0 h-screen w-screen" : "absolute inset-0 h-full w-full"
      }`}
    />
  );
};

export default AmbientGridBackground;
