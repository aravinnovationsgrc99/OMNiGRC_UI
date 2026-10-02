"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FRAMEWORKS } from "@/lib/frameworks";
import { ArrowRight, Sparkles, ShieldCheck, Check } from "lucide-react";

export interface FrameworkOrreryProps {
  title?: string;
  className?: string;
  compact?: boolean;
}

export const FrameworkOrrery: React.FC<FrameworkOrreryProps> = ({
  title = "FRAMEWORK SOLAR SYSTEM",
  className = "",
  compact = false,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const planeRef = useRef<HTMLDivElement | null>(null);
  const readoutRef = useRef<HTMLSpanElement | null>(null);
  const ariaLiveRef = useRef<HTMLDivElement | null>(null);

  const N = FRAMEWORKS.length;

  // Active framework index state
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [irisKey, setIrisKey] = useState<number>(0);
  const [keyboardFocusedIndex, setKeyboardFocusedIndex] = useState<number>(0);

  // Imperative state for smooth 60fps loop
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

  // Seek to bring target framework disc to front center anchor (angle = π/2)
  const seekToFramework = (idx: number) => {
    const targetAngle = Math.PI / 2; // Front anchor
    const currentRot = rotationRef.current;
    const baseAngle = idx * ((2 * Math.PI) / N);
    
    // Desired total rotation R such that (R + baseAngle) % 2π = targetAngle
    const desiredModulo = targetAngle - baseAngle;
    
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

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      seekToFramework(0);
      return;
    }

    let animationFrameId: number;
    let isVisible = true;
    let lastTime = performance.now();

    // Increased spin speed: negative value rotates discs from LEFT to RIGHT across the front
    const BASE_SPIN_SPEED = -0.0075;

    const animate = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      const speedScale = dt * 60; // Framerate independence multiplier

      // Handle seeking interpolation (smooth lerp to target framework)
      if (targetRotationRef.current !== null) {
        const diff = targetRotationRef.current - rotationRef.current;
        if (Math.abs(diff) < 0.001) {
          rotationRef.current = targetRotationRef.current;
          targetRotationRef.current = null;
        } else {
          rotationRef.current += diff * 0.1 * speedScale;
        }
      } else if (!isDraggingRef.current) {
        if (Math.abs(velocityRef.current) > 0.0001) {
          rotationRef.current += velocityRef.current * speedScale;
          velocityRef.current *= Math.pow(0.92, speedScale);
        } else {
          // Continuous rotation: full speed normally, 40% speed on hover so it never freezes or lags
          const currentSpeed = isHoveredRef.current ? BASE_SPIN_SPEED * 0.4 : BASE_SPIN_SPEED;
          rotationRef.current += currentSpeed * speedScale;
        }
      }

      const rot = rotationRef.current;

      // Mouse tilt parallax easing
      tiltCurrentRef.current.x += (tiltTargetRef.current.x - tiltCurrentRef.current.x) * 0.08;
      tiltCurrentRef.current.y += (tiltTargetRef.current.y - tiltCurrentRef.current.y) * 0.08;

      if (plane) {
        plane.style.transform = `rotateX(${tiltCurrentRef.current.x}deg) rotateY(${tiltCurrentRef.current.y}deg)`;
      }

      const planeW = container.clientWidth || 700;
      const planeH = container.clientHeight || 480;
      const Rx = planeW * 0.36;
      const Ry = planeH * 0.28;

      let closestIdx = 0;
      let minDistanceToFront = Infinity;

      // Position all N framework discs imperatively
      discRefs.current.forEach((discEl, i) => {
        if (!discEl) return;

        const baseAngle = i * ((2 * Math.PI) / N);
        const a = rot + baseAngle;

        // Ellipse coordinate calculation
        const x = Math.cos(a) * Rx;
        const y = Math.sin(a) * Ry;

        // Depth d in [0, 1]
        const d = (Math.sin(a) + 1) / 2;

        const scale = 0.62 + d * 0.62;
        const opacity = 0.42 + d * 0.58;
        const zIndex = Math.round(d * 100);

        discEl.style.transform = `translate3d(${x}px, ${y}px, 0px) scale(${scale})`;
        discEl.style.opacity = `${opacity}`;
        discEl.style.zIndex = `${zIndex}`;

        const distToFront = Math.abs(1 - Math.sin(a));
        if (distToFront < minDistanceToFront) {
          minDistanceToFront = distToFront;
          closestIdx = i;
        }
      });

      // Synchronize active framework when frontmost disc changes
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

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible) {
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

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

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [N]);

  // Pointer & Touch Handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    targetRotationRef.current = null;
    lastMouseXRef.current = e.clientX;
    lastMouseTimeRef.current = performance.now();
    velocityRef.current = 0;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    const isTouchDevice = typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
    if (!isTouchDevice && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      tiltTargetRef.current = {
        x: -relY * 12,
        y: relX * 12,
      };
    }

    if (!isDraggingRef.current) return;

    const now = performance.now();
    const dx = e.clientX - lastMouseXRef.current;
    const dt = Math.max((now - lastMouseTimeRef.current) / 1000, 0.001);

    const deltaRot = (dx / 320) * Math.PI;
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

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      isDraggingRef.current = true;
      targetRotationRef.current = null;
      lastMouseXRef.current = e.touches[0].clientX;
      lastMouseTimeRef.current = performance.now();
      velocityRef.current = 0;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current || e.touches.length === 0) return;
    const now = performance.now();
    const touchX = e.touches[0].clientX;
    const dx = touchX - lastMouseXRef.current;
    const dt = Math.max((now - lastMouseTimeRef.current) / 1000, 0.001);

    const deltaRot = (dx / 280) * Math.PI;
    rotationRef.current += deltaRot;
    velocityRef.current = deltaRot / (dt * 60);

    lastMouseXRef.current = touchX;
    lastMouseTimeRef.current = now;
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

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
    <div className="w-full max-w-7xl 2xl:max-w-[1600px] mx-auto">
      {/* 2-COLUMN DESKTOP COMPOSITION / VERTICAL MOBILE FLOW */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        
        {/* LEFT SIDE (7 COLS): 3D Orbital Gallery Stage Container */}
        <div className="lg:col-span-7 w-full flex flex-col justify-center">
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
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={() => { isHoveredRef.current = true; }}
            className={`relative w-full ${compact ? "h-[320px] sm:h-[380px]" : "h-[380px] sm:h-[460px] lg:h-[480px]"} rounded-3xl border border-slate-200 dark:border-navy-700 bg-gradient-to-b from-white via-[#FFF8F0] to-[#FFFDF9] dark:from-[#0A111F] dark:via-[#16233F] dark:to-[#0A111F] overflow-hidden select-none cursor-grab active:cursor-grabbing focus:outline-none focus:ring-2 focus:ring-[#2E936F] shadow-xl touch-pan-y ${className}`}
          >
            {/* Perspective CSS & Iris reveal */}
            <style jsx>{`
              .orrery-perspective {
                perspective: 1200px;
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

            {/* Screen Reader ARIA Live */}
            <div ref={ariaLiveRef} aria-live="polite" className="sr-only">
              Active Framework: {currentFw.name}
            </div>

            {/* Top Chrome Hint */}
            <div className="absolute top-4 sm:top-5 left-0 right-0 z-30 pointer-events-none flex items-center justify-between px-4 sm:px-6">
              <div className="flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-[#F15E1C]" />
                <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#F15E1C] font-bold">
                  {title}
                </span>
              </div>
              <span className="text-xs font-mono text-slate-600 dark:text-slate-300 uppercase tracking-widest bg-white/90 dark:bg-[#0A111F]/90 px-3 py-1 rounded-full border border-slate-200 dark:border-[#2E936F]/40 hidden sm:inline-block shadow-sm font-semibold">
                Drag to spin • Click node to focus
              </span>
            </div>

            {/* 3D Stage Canvas */}
            <div className="w-full h-full flex items-center justify-center orrery-perspective">
              <div
                ref={planeRef}
                className="relative w-full h-full flex items-center justify-center orrery-plane"
              >
                {/* Orbit Ellipse Vector */}
                <svg
                  aria-hidden="true"
                  className="absolute pointer-events-none w-[84%] h-[68%] opacity-40"
                  viewBox="0 0 800 450"
                  fill="none"
                >
                  <ellipse
                    cx="400"
                    cy="225"
                    rx="300"
                    ry="135"
                    stroke="#2E936F"
                    strokeWidth="1.5"
                    strokeDasharray="6 6"
                  />
                </svg>

                {/* Central Lens */}
                <div className={`relative z-20 ${compact ? "w-[140px] sm:w-[170px] h-[140px] sm:h-[170px]" : "w-[170px] sm:w-[210px] h-[170px] sm:h-[210px]"} rounded-full border-2 border-[#2E936F] bg-white/95 dark:bg-[#070e1c]/95 shadow-2xl backdrop-blur-xl flex flex-col items-center justify-center p-3 text-center overflow-hidden`}>
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-full blur-2xl opacity-30"
                    style={{ background: `radial-gradient(circle, ${currentFw.accentColor}50 0%, transparent 70%)` }}
                  />

                  <div key={irisKey} className="iris-bloom relative z-10 flex flex-col items-center justify-center text-center px-2">
                    <span
                      className="px-2.5 py-0.5 mb-1 rounded-full text-[10px] sm:text-xs font-mono font-extrabold uppercase border shadow-sm"
                      style={{
                        borderColor: `${currentFw.accentColor}60`,
                        color: currentFw.accentColor,
                        backgroundColor: `${currentFw.accentColor}15`,
                      }}
                    >
                      {currentFw.badge}
                    </span>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-none mb-1">
                      {currentFw.code}
                    </h3>

                    <span className="text-[11px] font-mono font-bold text-slate-600 dark:text-slate-300">
                      {currentFw.region}
                    </span>
                  </div>
                </div>

                {/* Framework Orbital Discs */}
                {FRAMEWORKS.map((fw, idx) => {
                  const color = fw.accentColor || "#2E936F";
                  const isSelected = activeIndex === idx;

                  return (
                    <button
                      key={fw.code}
                      ref={(el) => { discRefs.current[idx] = el; }}
                      onClick={() => seekToFramework(idx)}
                      aria-label={fw.name}
                      className={`absolute w-14 h-14 sm:w-18 sm:h-18 rounded-full border-2 shadow-xl flex flex-col items-center justify-center transition-all duration-300 focus:outline-none cursor-pointer ${
                        isSelected
                          ? "border-[#F15E1C] shadow-[#F15E1C]/40 scale-110 ring-4 ring-[#F15E1C]/30"
                          : "border-[#2E936F]/60 hover:border-[#2E936F]"
                      }`}
                      style={{
                        background: `radial-gradient(circle at 35% 35%, ${color} 0%, #16233F 100%)`,
                        left: "calc(50% - 28px)",
                        top: "calc(50% - 28px)",
                      }}
                    >
                      <span className="text-[11px] sm:text-xs font-mono font-extrabold text-white tracking-wider uppercase text-center px-1 leading-tight drop-shadow-sm">
                        {fw.code}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Readout Chrome */}
            <div className="absolute bottom-3 left-0 right-0 z-30 pointer-events-none flex items-center justify-between px-4 sm:px-6 text-xs font-mono">
              <span className="text-slate-600 dark:text-slate-300 flex items-center gap-1.5 font-bold">
                <ShieldCheck className="h-4 w-4 text-[#2E936F]" />
                <span>{FRAMEWORKS.length} Standard Taxonomies</span>
              </span>
              <span
                ref={readoutRef}
                className="text-[#F15E1C] font-extrabold bg-white/95 dark:bg-[#070e1c]/90 px-3 py-1 rounded-full border border-slate-200 dark:border-[#2E936F]/40 shadow-sm text-xs"
              >
                01 / {String(N).padStart(2, "0")} · 90°
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (5 COLS): Synchronized Highlighted Framework Detail Panel */}
        <div className="lg:col-span-5 w-full flex flex-col justify-between">
          <div
            key={`readout-${irisKey}`}
            className="iris-bloom w-full h-full rounded-3xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-900 p-6 sm:p-7 shadow-xl backdrop-blur-xl flex flex-col justify-between relative overflow-hidden space-y-6"
          >
            {/* Orange/Brand Accent Bar on Left Edge */}
            <div
              className="absolute top-0 left-0 bottom-0 w-2 rounded-l-3xl transition-colors duration-300"
              style={{ backgroundColor: currentFw.accentColor }}
            />

            {/* Framework Quick Switcher Tabs & Details */}
            <div className="space-y-4 pl-2">
              <div className="flex flex-wrap gap-1.5 pb-3 border-b border-slate-200 dark:border-navy-800">
                {FRAMEWORKS.map((fw, idx) => {
                  const active = activeIndex === idx;
                  return (
                    <button
                      key={fw.code}
                      onClick={() => seekToFramework(idx)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                        active
                          ? "bg-[#2E936F] text-white shadow-sm"
                          : "bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-navy-700"
                      }`}
                    >
                      {fw.code}
                    </button>
                  );
                })}
              </div>

              {/* Active Framework Header */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span
                    className="px-2.5 py-0.5 rounded text-xs font-mono font-extrabold uppercase border"
                    style={{
                      borderColor: `${currentFw.accentColor}60`,
                      color: currentFw.accentColor,
                      backgroundColor: `${currentFw.accentColor}15`,
                    }}
                  >
                    {currentFw.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold">{currentFw.region}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-snug">
                  {currentFw.name}
                </h3>
              </div>

              {/* One-Liner Description */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                {currentFw.oneLiner || currentFw.desc}
              </p>

              {/* Mapped Control Domains */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono font-extrabold uppercase tracking-wider text-[#F15E1C] block">
                  Mapped Control Domains:
                </span>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  {currentFw.controlDomains.slice(0, 3).map((domain, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-[#2E936F] shrink-0 mt-0.5" />
                      <span className="font-semibold">{domain}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Citations Badges */}
              <div className="space-y-1.5 pt-2">
                <span className="text-xs font-mono font-extrabold uppercase tracking-wider text-[#F15E1C] block">
                  Authentic Clause Citations:
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentFw.citations.map((cit, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-2.5 py-1 rounded bg-[#E6F4EF] dark:bg-navy-950 border border-[#2E936F]/30 text-[#2E936F] font-mono font-bold text-xs"
                    >
                      {cit}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="pt-4 border-t border-slate-200 dark:border-navy-800 pl-2">
              <Link
                href={`/frameworks/${currentFw.slug}`}
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-xl bg-[#2E936F] hover:bg-[#277e5f] text-white font-extrabold text-sm shadow-md transition-all group"
              >
                <span>Explore {currentFw.code} Workflow</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default FrameworkOrrery;
