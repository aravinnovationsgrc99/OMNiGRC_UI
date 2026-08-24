"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingDepthCardProps {
  children: React.ReactNode;
  className?: string;
  depth?: number;
  maxTilt?: number;
  glowColor?: "orange" | "green" | "gold";
}

export const FloatingDepthCard: React.FC<FloatingDepthCardProps> = ({
  children,
  className,
  depth = 30,
  maxTilt = 6,
  glowColor = "orange",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsTouchDevice(window.matchMedia("(max-width: 768px)").matches);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rotX = ((mouseY - height / 2) / (height / 2)) * -maxTilt;
    const rotY = ((mouseX - width / 2) / (width / 2)) * maxTilt;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const glowStyles = {
    orange: "radial-gradient(500px circle at 50% 50%, rgba(241, 94, 28, 0.18), transparent 70%)",
    green: "radial-gradient(500px circle at 50% 50%, rgba(46, 147, 111, 0.18), transparent 70%)",
    gold: "radial-gradient(500px circle at 50% 50%, rgba(250, 182, 10, 0.18), transparent 70%)",
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: isTouchDevice ? 0 : rotateX,
        rotateY: isTouchDevice ? 0 : rotateY,
        scale: isHovered && !isTouchDevice ? 1.02 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 20,
        mass: 0.5,
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className={cn(
        "relative rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur-md p-6 transition-colors duration-300 w-full shadow-2xl",
        isHovered && "border-brand-orange/40 shadow-brand-orange/10",
        className
      )}
    >
      {/* 3D Glow Background Overlay */}
      {isHovered && !isTouchDevice && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-80 transition duration-300"
          style={{ background: glowStyles[glowColor] }}
        />
      )}

      {/* Layer with Depth Z-Offset */}
      <div
        style={{
          transform: isHovered && !isTouchDevice ? `translateZ(${depth}px)` : "translateZ(0px)",
          transition: "transform 0.3s ease-out",
        }}
        className="relative z-10"
      >
        {children}
      </div>
    </motion.div>
  );
};
