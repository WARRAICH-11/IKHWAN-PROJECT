"use client";

import { useEffect } from "react";

export function MotionInit() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (reduce) {
      targets.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const node = entry.target as HTMLElement;
          node.classList.add("is-visible");
          observer.unobserve(node);
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach((target, index) => {
      target.style.setProperty("--stagger", `${Math.min(index * 0.08, 0.6)}s`);
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}

