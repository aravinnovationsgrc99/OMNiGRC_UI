"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface AnimatedCounterProps {
  value: string | number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  className,
}) => {
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
    if (!isNaN(numericValue)) {
      spring.set(numericValue);
      const unsubscribe = displayValue.on("change", (latest) => {
        setRenderedValue(latest);
      });
      return () => unsubscribe();
    } else {
      setRenderedValue(value);
    }
  }, [numericValue, spring, displayValue, value]);

  return <motion.span className={className}>{renderedValue}</motion.span>;
};
