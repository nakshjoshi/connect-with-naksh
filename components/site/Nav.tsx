"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/lib/content";

const LINKS = [
  { href: "/#work", label: "Work" },
  { href: "/#approach", label: "Approach" },
  { href: "/#experience", label: "Experience" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
              className="font-jet text-sm text-fg-muted transition-colors hover:text-fg"
            >
              {l.label}
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
