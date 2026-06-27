import React, { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const mouse = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const dotPos = useRef({ x: -100, y: -100 });
  
  const spotlightRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    // Check if device supports hover / high precision pointing
    const checkDevice = () => {
      const hasMouse = window.matchMedia("(pointer: fine)").matches;
      setIsMobile(!hasMouse);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Set initial positions instantly on first move to prevent jumping
      if (mouse.current.x === -100 && mouse.current.y === -100) {
        dotPos.current = { x: clientX, y: clientY };
        ringPos.current = { x: clientX, y: clientY };
      }

      mouse.current.x = clientX;
      mouse.current.y = clientY;

      // Position the inner dot and spotlight instantly for 1:1 real-time tracking
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(calc(${clientX}px - 50%), calc(${clientY}px - 50%), 0)`;
      }
      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(calc(${clientX}px - 50%), calc(${clientY}px - 50%), 0)`;
      }

      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);
    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    // Dynamic hover detector for interactive elements
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest('[role="button"]') ||
        target.classList.contains("clickable")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mouseover", onMouseOver);

    // Linear interpolation for a snappy lag-free follow effect on the outer ring
    const lerp = (start: number, end: number, amt: number) => {
      return (1 - amt) * start + amt * end;
    };

    const updateRing = () => {
      if (mouse.current.x !== -100 && mouse.current.y !== -100) {
        // snaps quickly but smoothly (0.3 lerp factor ensures immediate response with micro-smoothing)
        const lerpFactor = isHovered ? 0.35 : 0.25;
        ringPos.current.x = lerp(ringPos.current.x, mouse.current.x, lerpFactor);
        ringPos.current.y = lerp(ringPos.current.y, mouse.current.y, lerpFactor);

        if (ringRef.current) {
          ringRef.current.style.transform = `translate3d(calc(${ringPos.current.x}px - 50%), calc(${ringPos.current.y}px - 50%), 0)`;
        }
      }
      requestRef.current = requestAnimationFrame(updateRing);
    };

    requestRef.current = requestAnimationFrame(updateRing);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseover", onMouseOver);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isHovered, isMobile, isVisible]);

  if (isMobile) return null;

  return (
    <div 
      style={{ 
        opacity: isVisible ? 1 : 0, 
        transition: "opacity 0.2s ease-in-out",
        pointerEvents: "none"
      }}
    >
      {/* 1. Hardware-accelerated mouse spotlight overlay */}
      <div
        ref={spotlightRef}
        id="mouse-spotlight"
        className="pointer-events-none fixed z-10 w-[600px] h-[600px] rounded-full bg-radial from-luxury-gold/5 to-transparent blur-3xl left-0 top-0 will-change-transform"
      />

      {/* 2. Responsive outer gold circle - Snappy tracking with CSS transition limited ONLY to shape & scale */}
      <div
        ref={ringRef}
        id="cursor-outer"
        className="pointer-events-none fixed z-110 rounded-full border border-luxury-gold/50 left-0 top-0 will-change-transform"
        style={{
          width: isHovered ? "68px" : isClicking ? "28px" : "48px",
          height: isHovered ? "68px" : isClicking ? "28px" : "48px",
          backgroundColor: isHovered ? "rgba(212, 175, 55, 0.08)" : "transparent",
          boxShadow: isHovered ? "0 0 15px rgba(212, 175, 55, 0.25)" : "none",
          // Strictly exclude 'transform' from CSS transition to eliminate any coordinate interpolation delay
          transition: "width 0.25s cubic-bezier(0.25, 1, 0.5, 1), height 0.25s cubic-bezier(0.25, 1, 0.5, 1), background-color 0.25s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.25s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.25s cubic-bezier(0.25, 1, 0.5, 1)"
        }}
      />

      {/* 3. Snappy center solid gold dot */}
      <div
        ref={dotRef}
        id="cursor-inner"
        className="pointer-events-none fixed z-110 rounded-full bg-gold-gradient shadow-[0_0_8px_#D4AF37] left-0 top-0 will-change-transform"
        style={{
          width: isHovered ? "10px" : isClicking ? "5px" : "8px",
          height: isHovered ? "10px" : isClicking ? "5px" : "8px",
          // Exclude 'transform' from transition to achieve pure 1:1 latency-free rendering
          transition: "width 0.15s ease, height 0.15s ease"
        }}
      />
    </div>
  );
}
