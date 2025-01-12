"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "up" | "down";
  pauseOnHover?: boolean;
  className?: string;
  gap?: number;
}

export const VerticalMarquee: React.FC<MarqueeProps> = ({
  children,
  speed = 50,
  direction = "up",
  pauseOnHover = true,
  className = "",
  gap = 0,
}) => {
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.offsetHeight);
    }
  }, [children, gap]);

  const marqueeVariants = {
    animate: {
      y: direction === "down" ? [-contentHeight, 0] : [0, -contentHeight],
    },
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        variants={marqueeVariants}
        animate="animate"
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: contentHeight / speed,
          ease: "linear",
        }}
        className={`flex flex-col ${pauseOnHover ? "hover:pause" : ""}`}
      >
        <div
          ref={contentRef}
          className={`flex flex-col`}
          style={{ gap: `${gap}px` }}
        >
          {React.Children.map(children, (child) => (
            <div className={`py-${gap / 2} first:mt-6`}>{child}</div>
          ))}
        </div>
        <div
          className={`flex flex-col`}
          style={{ gap: `${gap}px` }}
          aria-hidden="true"
        >
          {React.Children.map(children, (child) => (
            <div className={`py-${gap / 2} first:mt-6`}>{child}</div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
