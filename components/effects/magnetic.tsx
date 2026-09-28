"use client";

import {
  useRef,
  type AnchorHTMLAttributes,
  type MouseEvent,
} from "react";
import { cn } from "@/lib/utils";

export function Magnetic({
  children,
  className,
  strength = 10,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { strength?: number }) {
  const ref = useRef<HTMLAnchorElement>(null);

  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate3d(0,0,0)";
  };

  const onMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate3d(${(x / rect.width) * strength}px, ${(y / rect.height) * strength}px, 0)`;
  };

  return (
    <a
      ref={ref}
      className={cn("will-change-transform transition-transform duration-200 ease-out", className)}
      onMouseMove={onMove}
      onMouseLeave={reset}
      {...props}
    >
      {children}
    </a>
  );
}
