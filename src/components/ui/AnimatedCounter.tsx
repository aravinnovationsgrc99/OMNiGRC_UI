"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface AnimatedCounterProps {
  value: string | number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  className,
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState<boolean>(false);

  const numericValue = typeof value === "number" ? value : parseFloat(value.toString().replace(/[^0-9.]/g, ""));
  const suffix = typeof value === "string" ? value.replace(/[0-9.]/g, "") : "";

  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const displayValue = useTransform(spring, (current) => {
    if (isNaN(numericValue)) return value;
    if (numericValue % 1 !== 0) {
      return current.toFixed(1) + suffix;
    }
    return Math.floor(current) + suffix;
  });

  const [renderedValue, setRenderedValue] = useState<string | number>(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    if (!isNaN(numericValue)) {
      spring.set(numericValue);
      const unsubscribe = displayValue.on("change", (latest) => {
        setRenderedValue(latest);
      });
      return () => unsubscribe();
    } else {
      setRenderedValue(value);
    }
  }, [isInView, numericValue, spring, displayValue, value]);

  return (
    <motion.span ref={containerRef} className={className}>
      {renderedValue}
    </motion.span>
  );
};
