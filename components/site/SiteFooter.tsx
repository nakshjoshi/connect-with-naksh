import Link from "next/link";
import { profile } from "@/lib/content";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface/40">
      <div className="shell flex flex-col gap-8 py-10 lg:flex-row lg:items-center lg:justify-between lg:py-12">

        <div className="flex flex-col gap-1.5">
          <span className="font-jet text-sm text-fg">{profile.name}</span>
          <span className="text-xs text-fg-dim">
            {profile.role} · {profile.focus}
          </span>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 font-jet text-label uppercase">
          <Link href="/work" className="text-fg-muted transition-colors hover:text-fg">
            Work
          </Link>
          <Link href="/about" className="text-fg-muted transition-colors hover:text-fg">
            About
          </Link>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-muted transition-colors hover:text-fg"
          >
            GitHub
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-muted transition-colors hover:text-fg"
          >
            LinkedIn
          </a>
          <a
            href={profile.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-muted transition-colors hover:text-fg"
          >
            LeetCode
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-muted transition-colors hover:text-fg"
          >
            Résumé
          </a>
        </nav>

        <p className="font-jet text-[11px] text-fg-dim">
          © {new Date().getFullYear()} · Built with Next.js
        </p>

      </div>
    </footer>
  );
}
