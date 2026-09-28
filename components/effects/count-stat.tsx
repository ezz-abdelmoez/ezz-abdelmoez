"use client";

import { useEffect, useRef, useState } from "react";

export function CountStat({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(match ? 0 : null);

  useEffect(() => {
    if (!match) return;
    const target = Number(match[1]);
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        if (reduce) {
          setShown(target);
          return;
        }
        const start = performance.now();
        const duration = 900;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setShown(Math.round(target * eased));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.45 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [match?.[1]]);

  if (!match || shown === null) {
    return <>{value}</>;
  }

  return (
    <span ref={ref}>
      {shown}
      {match[2]}
    </span>
  );
}
