"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set cursor visible after component mounts (prevents SSR mismatch)
    const timeout = setTimeout(() => setIsVisible(true), 500);

    // Using requestAnimationFrame for smoother cursor movement
    let rafId: number;
    const updateMousePosition = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Track hover states on interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, input, [role="button"]'
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, []);

  return (
    <>
      {isVisible && (
        <>
          {/* Main cursor dot - using direct style for better performance */}
          <div
            className="pointer-events-none fixed z-50 h-3 w-3 rounded-full bg-purple-500 mix-blend-difference"
            style={{
              transform: `translate(${mousePosition.x - 6}px, ${
                mousePosition.y - 6
              }px) scale(${isClicking ? 0.5 : 1})`,
              transition: "transform 0.1s ease-out",
            }}
          />

          {/* Cursor ring - using direct style for better performance */}
          <div
            className="pointer-events-none fixed z-50 h-10 w-10 rounded-full border-2 border-white mix-blend-difference"
            style={{
              transform: `translate(${mousePosition.x - 20}px, ${
                mousePosition.y - 20
              }px) scale(${isHovering ? 1.8 : isClicking ? 0.8 : 1})`,
              opacity: isHovering ? 0.6 : 1,
              transition: "transform 0.15s ease-out, opacity 0.2s ease-out",
            }}
          />
        </>
      )}
    </>
  );
}
