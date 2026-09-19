import { useState, useEffect, useRef, RefObject } from "react";

export function useInView(threshold = 0.3): { ref: RefObject<HTMLDivElement>; inView: boolean } {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export function useCounter(to: number): { ref: RefObject<HTMLSpanElement>; val: number } {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  useEffect(() => {
    if (!inView) return;
    let cur = 0;
    const step = Math.ceil(to / 50);
    const id = setInterval(() => {
      cur += step;
      if (cur >= to) { setVal(to); clearInterval(id); }
      else setVal(cur);
    }, 30);
    return () => clearInterval(id);
  }, [inView, to]);
  return { ref, val };
}

export function useScrolled(threshold = 20): boolean {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, [threshold]);
  return scrolled;
}

export function useScrollTo(): (id: string) => void {
  return (id: string) => document.getElementById(id)?.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
  });
}
