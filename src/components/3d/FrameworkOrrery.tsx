"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FRAMEWORKS } from "@/lib/frameworks";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";

export interface FrameworkOrreryProps {
  title?: string;
  className?: string;
}

export const FrameworkOrrery: React.FC<FrameworkOrreryProps> = ({
  title = "Framework Orrery",
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const planeRef = useRef<HTMLDivElement | null>(null);
  const readoutRef = useRef<HTMLSpanElement | null>(null);
  const ariaLiveRef = useRef<HTMLDivElement | null>(null);

  const N = FRAMEWORKS.length;

  // React state only for active framework data display in central lens
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [irisKey, setIrisKey] = useState<number>(0);
  const [keyboardFocusedIndex, setKeyboardFocusedIndex] = useState<number>(0);

  // Imperative state for rAF loop (no React re-renders per frame)
  const rotationRef = useRef<number>(0);
  const targetRotationRef = useRef<number | null>(null);
  const velocityRef = useRef<number>(0);
  const lastMouseXRef = useRef<number>(0);
  const lastMouseTimeRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);
  const isHoveredRef = useRef<boolean>(false);
  const activeIndexRef = useRef<number>(0);

  // Mouse tilt parallax target & current
  const tiltTargetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const tiltCurrentRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const discRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Function to calculate target rotation to bring index i to front anchor (angle = π/2)
  const seekToFramework = (idx: number) => {
    const targetAngle = Math.PI / 2; // Front anchor
    const currentRot = rotationRef.current;
    const baseAngle = idx * ((2 * Math.PI) / N);
    
    // Desired total rotation R such that (R + baseAngle) % 2π = targetAngle
    const desiredModulo = targetAngle - baseAngle;
    
    // Find closest integer k such that R_k = desiredModulo + 2π·k is closest to currentRot
    let diff = (desiredModulo - currentRot) % (2 * Math.PI);
    if (diff > Math.PI) diff -= 2 * Math.PI;
    if (diff < -Math.PI) diff += 2 * Math.PI;

    targetRotationRef.current = currentRot + diff;
    velocityRef.current = 0;
    setKeyboardFocusedIndex(idx);
  };

  useEffect(() => {
    const container = containerRef.current;
    const plane = planeRef.current;
    if (!container || !plane) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // Position statically with index 0 at front
      seekToFramework(0);
      return;
    }

    let animationFrameId: number;
    let isVisible = true;
    let lastTime = performance.now();

    const AUTO_SPIN_SPEED = 0.0028; // ~0.16 rad/s at 60fps

    const animate = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      // Handle seeking interpolation
      if (targetRotationRef.current !== null) {
        const diff = targetRotationRef.current - rotationRef.current;
        if (Math.abs(diff) < 0.001) {
          rotationRef.current = targetRotationRef.current;
          targetRotationRef.current = null;
        } else {
          rotationRef.current += diff * 0.12; // Eased seek
        }
      } else if (!isDraggingRef.current) {
        // Apply momentum decay or auto-spin
        if (Math.abs(velocityRef.current) > 0.0001) {
          rotationRef.current += velocityRef.current;
          velocityRef.current *= Math.pow(0.9, dt * 60);
        } else if (!isHoveredRef.current) {
          rotationRef.current += AUTO_SPIN_SPEED;
        }
      }

      const rot = rotationRef.current;

      // Mouse tilt parallax easing
      tiltCurrentRef.current.x += (tiltTargetRef.current.x - tiltCurrentRef.current.x) * 0.08;
      tiltCurrentRef.current.y += (tiltTargetRef.current.y - tiltCurrentRef.current.y) * 0.08;

      if (plane) {
        plane.style.transform = `rotateX(${tiltCurrentRef.current.x}deg) rotateY(${tiltCurrentRef.current.y}deg)`;
      }

      // Dimensions for ellipse radius
      const planeW = container.clientWidth || 900;
      const planeH = container.clientHeight || 500;
      const Rx = planeW * 0.38;
      const Ry = planeH * 0.30;

      let closestIdx = 0;
      let minDistanceToFront = Infinity;

      // Update positions of all N discs imperatively
      discRefs.current.forEach((discEl, i) => {
        if (!discEl) return;

        const baseAngle = i * ((2 * Math.PI) / N);
        const a = rot + baseAngle;

        // Ellipse coordinate calculation
        const x = Math.cos(a) * Rx;
        const y = Math.sin(a) * Ry;

        // Depth d in [0, 1]: 0 at back (12 o'clock, sin(a)=-1), 1 at front (6 o'clock, sin(a)=1)
        const d = (Math.sin(a) + 1) / 2;

        const scale = 0.6 + d * 0.66; // 0.6 -> 1.26
        const opacity = 0.34 + d * 0.66; // 0.34 -> 1.0
        const zIndex = Math.round(d * 100);

        discEl.style.transform = `translate3d(${x}px, ${y}px, 0px) scale(${scale})`;
        discEl.style.opacity = `${opacity}`;
        discEl.style.zIndex = `${zIndex}`;

        // Find disc closest to front anchor (angle = π/2, where sin(a) is closest to 1)
        const distToFront = Math.abs(1 - Math.sin(a));
        if (distToFront < minDistanceToFront) {
          minDistanceToFront = distToFront;
          closestIdx = i;
        }
      });

      // Handle active framework change
      if (closestIdx !== activeIndexRef.current) {
        activeIndexRef.current = closestIdx;
        setActiveIndex(closestIdx);
        setIrisKey((prev) => prev + 1);

        if (ariaLiveRef.current) {
          ariaLiveRef.current.textContent = `Active Framework: ${FRAMEWORKS[closestIdx].name}`;
        }
      }

      // Update bottom readout text imperatively
      if (readoutRef.current) {
        const normAngle = ((rot % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
        const deg = Math.round((normAngle * 180) / Math.PI);
        readoutRef.current.textContent = `${String(closestIdx + 1).padStart(2, "0")} / ${String(N).padStart(2, "0")} · ${deg}°`;
      }

      if (isVisible) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    // Tab visibility handling
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible) {
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // IntersectionObserver to pause when off-screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting && !document.hidden;
          if (isVisible) {
            lastTime = performance.now();
            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Start rAF loop
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [N]);

  // Pointer drag & tilt handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    targetRotationRef.current = null;
    lastMouseXRef.current = e.clientX;
    lastMouseTimeRef.current = performance.now();
    velocityRef.current = 0;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    // Stage tilt parallax
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      tiltTargetRef.current = {
        x: -relY * 16, // rotateX tilt range +-13 deg
        y: relX * 16,  // rotateY tilt range +-13 deg
      };
    }

    if (!isDraggingRef.current) return;

    const now = performance.now();
    const dx = e.clientX - lastMouseXRef.current;
    const dt = Math.max((now - lastMouseTimeRef.current) / 1000, 0.001);

    const deltaRot = (dx / 350) * Math.PI; // Drag sensitivity
    rotationRef.current += deltaRot;
    velocityRef.current = deltaRot / (dt * 60);

    lastMouseXRef.current = e.clientX;
    lastMouseTimeRef.current = now;
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  const handlePointerLeave = () => {
    isDraggingRef.current = false;
    isHoveredRef.current = false;
    tiltTargetRef.current = { x: 0, y: 0 };
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const nextIdx = (keyboardFocusedIndex + 1) % N;
      seekToFramework(nextIdx);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const prevIdx = (keyboardFocusedIndex - 1 + N) % N;
      seekToFramework(prevIdx);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      seekToFramework(keyboardFocusedIndex);
    }
  };

  const currentFw = FRAMEWORKS[activeIndex] || FRAMEWORKS[0];

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      role="region"
      aria-label={title}
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerLeave}
      onMouseEnter={() => { isHoveredRef.current = true; }}
      className={`relative w-full max-w-[1100px] h-[520px] sm:h-[620px] mx-auto rounded-3xl border border-teal/30 bg-gradient-to-b from-[#0A111F] via-[#16233F] to-[#0A111F] overflow-hidden select-none cursor-grab active:cursor-grabbing focus:outline-none focus:ring-2 focus:ring-teal ${className}`}
    >
      {/* Injected style block for 3D perspective and iris reveal animation */}
      <style jsx>{`
        .orrery-perspective {
          perspective: 1300px;
          perspective-origin: 50% 45%;
        }
        .orrery-plane {
          transform-style: preserve-3d;
          transition: transform 0.1s ease-out;
        }
        @keyframes irisReveal {
          0% {
            clip-path: circle(0% at 50% 50%);
            opacity: 0.4;
          }
          100% {
            clip-path: circle(75% at 50% 50%);
            opacity: 1;
          }
        }
        .iris-bloom {
          animation: irisReveal 720ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Screen Reader ARIA Live Notification */}
      <div
        ref={ariaLiveRef}
        aria-live="polite"
        className="sr-only"
      >
        Active Framework: {currentFw.name}
      </div>

      {/* Top Chrome Hint */}
      <div className="absolute top-4 sm:top-6 left-0 right-0 z-30 pointer-events-none flex items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-amber" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-amber font-bold">
            {title}
          </span>
        </div>
        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest bg-navy-900/80 px-3 py-1 rounded-full border border-navy-700/60">
          Drag to spin • Click disc to focus
        </span>
      </div>

      {/* 3D Perspective Stage Container */}
      <div className="w-full h-full flex items-center justify-center orrery-perspective">
        {/* Tilted Preserve-3D Plane */}
        <div
          ref={planeRef}
          className="relative w-full h-full flex items-center justify-center orrery-plane"
        >
          {/* Faint Dashed Orbit Ellipse Vector */}
          <svg
            aria-hidden="true"
            className="absolute pointer-events-none w-[76%] h-[60%] opacity-25"
            viewBox="0 0 800 450"
            fill="none"
          >
            <ellipse
              cx="400"
              cy="225"
              rx="300"
              ry="135"
              stroke="#0F6E6A"
              strokeWidth="1.5"
              strokeDasharray="6 6"
            />
          </svg>

          {/* Central Glassmorphic Iris Lens */}
          <div className="relative z-20 w-[270px] sm:w-[360px] h-[270px] sm:h-[360px] rounded-full border border-teal/40 bg-navy-900/90 shadow-2xl backdrop-blur-xl flex flex-col justify-between p-6 sm:p-8 text-center overflow-hidden">
            {/* Soft Ambient Radial Glow behind Lens */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-full bg-teal/10 blur-2xl"
              style={{ background: `radial-gradient(circle, ${currentFw.accentColor}25 0%, transparent 70%)` }}
            />

            {/* Iris Bloom Content Layer */}
            <div key={irisKey} className="iris-bloom relative z-10 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase border"
                    style={{
                      borderColor: `${currentFw.accentColor}60`,
                      color: currentFw.accentColor,
                      backgroundColor: `${currentFw.accentColor}15`,
                    }}
                  >
                    {currentFw.badge}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {currentFw.region}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-2">
                  {currentFw.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium line-clamp-3">
                  {currentFw.oneLiner || currentFw.desc}
                </p>
              </div>

              {/* Real Control Domains / Clause References from frameworks.ts */}
              <div className="my-2 space-y-1.5 text-left bg-[#0A111F]/70 p-2.5 sm:p-3 rounded-xl border border-navy-700/60">
                <span className="text-[9px] font-mono uppercase font-bold text-amber block mb-1">
                  Tracked Control Domains:
                </span>
                {currentFw.controlDomains.slice(0, 2).map((domain, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-1.5 text-[10px] text-slate-300 truncate">
                    <CheckCircle2 className="h-3 w-3 text-teal shrink-0" />
                    <span className="truncate">{domain}</span>
                  </div>
                ))}
              </div>

              {/* Workflow Link */}
              <div>
                <Link
                  href={`/frameworks/${currentFw.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-teal hover:text-white transition-colors"
                >
                  <span>Explore {currentFw.code} Workflow</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* N Framework Discs riding the 3D orbit */}
          {FRAMEWORKS.map((fw, idx) => {
            const color = fw.accentColor || "#0F6E6A";
            const isSelected = activeIndex === idx;

            return (
              <button
                key={fw.code}
                ref={(el) => { discRefs.current[idx] = el; }}
                onClick={() => seekToFramework(idx)}
                onMouseEnter={() => seekToFramework(idx)}
                aria-label={fw.name}
                className={`absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 shadow-2xl flex flex-col items-center justify-center transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-amber ${
                  isSelected
                    ? "border-amber shadow-amber/40 scale-110"
                    : "border-teal/50 hover:border-teal"
                }`}
                style={{
                  background: `radial-gradient(circle at 35% 35%, ${color}DD 0%, #0A111F 90%)`,
                  left: "calc(50% - 40px)",
                  top: "calc(50% - 40px)",
                }}
              >
                <span className="text-xs sm:text-sm font-mono font-bold text-white tracking-wider uppercase text-center px-1 leading-tight">
                  {fw.code}
                </span>
                <span
                  className="text-[9px] font-mono font-semibold mt-0.5 px-1.5 py-0.2 rounded-full border"
                  style={{
                    borderColor: `${color}80`,
                    color: "#FFFFFF",
                    backgroundColor: `${color}40`,
                  }}
                >
                  {fw.badge.split(" ")[0]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Readout Chrome */}
      <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 z-30 pointer-events-none flex items-center justify-between px-6 text-xs font-mono">
        <span className="text-slate-400 flex items-center gap-1.5">
          <ShieldCheck className="h-4 w-4 text-teal" />
          <span>{FRAMEWORKS.length} Documented Taxonomies</span>
        </span>
        <span
          ref={readoutRef}
          className="text-amber font-bold bg-navy-900/90 px-3.5 py-1 rounded-full border border-teal/40 shadow-md"
        >
          01 / {String(N).padStart(2, "0")} · 90°
        </span>
      </div>
    </div>
  );
};

export default FrameworkOrrery;
