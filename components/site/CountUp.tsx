"use client";

import { useEffect, useRef } from "react";

/**
 * Counts a metric up when it first scrolls into view.
 *
 * The final value is what renders on the server, so crawlers and no-JS
 * visitors see the real number. The animation writes to the DOM node
 * directly rather than through state — a metric should not trigger sixty
 * React renders a second to show one number.
 *
 * Only the numeric part animates; prefixes and suffixes ("~", "%", "10K+",
 * "1GB/1CPU/60s") are preserved verbatim, so non-numeric values just sit there.
 */
export default function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = value.match(/^(\D*)([\d,]+(?:\.\d+)?)(.*)$/);
    if (!match) return;

    const [, prefix, raw, suffix] = match;
    const target = parseFloat(raw.replace(/,/g, ""));
    if (!Number.isFinite(target)) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const decimals = raw.includes(".") ? raw.split(".")[1].length : 0;
    const grouped = raw.includes(",");
    const render = (n: number) => {
      const fixed = n.toFixed(decimals);
      const body = grouped
        ? Number(fixed).toLocaleString(undefined, {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          })
        : fixed;
      return `${prefix}${body}${suffix}`;
    };

    let frame = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();

        const start = performance.now();
        const DURATION = 1100;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / DURATION);
          // easeOutExpo — quick off the mark, settles precisely on the value
          const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
          el.textContent = t === 1 ? value : render(target * eased);
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        el.textContent = render(0);
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      if (frame) cancelAnimationFrame(frame);
      el.textContent = value;
    };
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
    </span>
  );
}
