"use client";

// https://github.com/mxkaske/openstatus/blob/main/apps/web/src/app/_components/background.tsx

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React from "react";
import { useLifecycles } from "react-use";

export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function mouseMoveEvent(e: MouseEvent) {
    const scale = window.visualViewport?.scale;
    if (scale === 1) {
      const targetX = e.clientX;
      const targetY = e.clientY;

      mouseX.set(targetX);
      mouseY.set(targetY);
    }
  }

  useLifecycles(
    () => document.addEventListener("mousemove", mouseMoveEvent),
    () => document.removeEventListener("mousemove", mouseMoveEvent)
  );

  return (
    <>
      <div className="fixed h-full w-full">
        <div className="absolute inset-0 z-[-1] bg-primary-500/20" />
        <motion.div
          className="absolute z-[-1] h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-primary-500/80 from-0% to-transparent to-90% blur-md"
          style={{
            left: useMotionTemplate`${mouseX}px`,
            top: useMotionTemplate`${mouseY}px`,
          }}
        />
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern
              id="dotted-pattern"
              width="16"
              height="16"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="black" />
            </pattern>
            <mask id="dots-mask">
              <rect width="100%" height="100%" fill="white" />
              <rect width="100%" height="100%" fill="url(#dotted-pattern)" />
            </mask>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="hsl(var(--background))"
            mask="url(#dots-mask)"
          />
        </svg>
      </div>
      {children}
    </>
  );
}
