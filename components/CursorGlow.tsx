"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    let x = -200, y = -200;
    let cx = -200, cy = -200;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const animate = () => {
      // Smooth follow with lerp
      cx += (x - cx) * 0.1;
      cy += (y - cy) * 0.1;
      if (el) {
        el.style.transform = `translate(${cx - 200}px, ${cy - 200}px)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-50 w-[400px] h-[400px] rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(57,255,20,0.07) 0%, rgba(57,255,20,0.03) 40%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}
