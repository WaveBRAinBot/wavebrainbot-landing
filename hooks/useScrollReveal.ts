"use client";

import { useEffect, useRef } from "react";

function getObserver(): IntersectionObserver {
  const win = window as typeof window & { __scrollRevealObserver?: IntersectionObserver }
  if (!win.__scrollRevealObserver) {
    win.__scrollRevealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.opacity = "1"
            el.style.transform = "translateY(0)"
            win.__scrollRevealObserver?.unobserve(el)
          }
        })
      },
      { threshold: 0.12 }
    )
  }
  return win.__scrollRevealObserver
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(32px)";
    el.style.transition = "opacity 0.65s ease, transform 0.65s ease";

    const observer = getObserver()
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return ref;
}
