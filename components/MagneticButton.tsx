"use client";

import { useRef, useState, MouseEvent } from "react";
import { cn } from "@/lib/utils";

export default function MagneticButton({
  children,
  className,
  as: Component = "button",
  ...props
}: any) {
  const ref = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = e;
    if (!ref.current) return;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.15, y: middleY * 0.15 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <Component
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className={cn("transition-transform duration-100 ease-out", className)}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        ...props.style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
