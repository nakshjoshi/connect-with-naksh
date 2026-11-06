"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/lib/content";

const LINKS = [
  { href: "/#work", label: "Work", section: "work" },
  { href: "/#approach", label: "Approach", section: "approach" },
  { href: "/#writing", label: "Writing", section: "writing" },
  { href: "/#experience", label: "Experience", section: "experience" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scroll-spy: highlight whichever section is currently in the reading zone. */
  useEffect(() => {
    const ids = LINKS.map((l) => l.section).filter(Boolean) as string[];
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => Boolean(n));
    if (!nodes.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.2, 0.6] },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  // Lock the page behind the mobile sheet
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-canvas/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="shell flex h-16 items-center justify-between">

        {/* Mark */}
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-6 w-6 items-center justify-center border border-accent font-jet text-[11px] text-accent">
            NJ
          </span>
          <span className="font-jet text-sm text-fg">{profile.name}</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={l.section && active === l.section ? "true" : undefined}
              className={`relative font-jet text-sm transition-colors hover:text-fg ${
                l.section && active === l.section ? "text-fg" : "text-fg-muted"
              }`}
            >
              {l.label}
              <span
                aria-hidden
                className={`absolute -bottom-1.5 left-0 h-px bg-accent transition-all duration-300 ${
                  l.section && active === l.section ? "w-full opacity-100" : "w-0 opacity-0"
                }`}
              />
            </Link>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="font-jet text-sm text-fg-muted transition-colors hover:text-fg"
          >
            Résumé ↗
          </a>
          <Link href="/#contact" className="btn-ghost !py-2 !px-4">
            Get in touch
          </Link>
        </nav>

        {/* Mobile trigger */}
        <button
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span
            className={`block h-px w-5 bg-fg transition-transform duration-200 ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-fg transition-transform duration-200 ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>

      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="border-t border-line bg-canvas lg:hidden">
          <nav className="shell flex flex-col py-4">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 font-jet text-base text-fg-muted transition-colors hover:text-fg"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-line py-4 font-jet text-base text-fg-muted"
            >
              Résumé ↗
            </a>
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-5"
            >
              Get in touch
            </Link>
          </nav>
        </div>
      )}

    </header>
  );
}
