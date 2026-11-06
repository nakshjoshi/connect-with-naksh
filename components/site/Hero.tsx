import Link from "next/link";
import { metrics, profile } from "@/lib/content";
import AgentRuntime from "./AgentRuntime";
import CountUp from "./CountUp";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">

      {/* Engineering grid, faded at the edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid opacity-[0.55] grid-fade"
      />

      <div className="shell relative pt-16 pb-14 lg:pt-28 lg:pb-20">

        {/* Status line — first thing in the F-pattern */}
        <div className="mb-10 flex flex-wrap items-center gap-x-3 gap-y-2 font-jet text-label uppercase">
          <span className="flex items-center gap-2 text-fg-muted">
            <span className="status-dot" />
            {profile.statusShort}
          </span>
          <span className="text-line-strong">/</span>
          <span className="text-fg-dim">{profile.role}</span>
          <span className="text-line-strong">/</span>
          <span className="text-fg-dim">{profile.location}</span>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

          {/* Left: the claim */}
          <div>
            <h1 className="text-display font-medium">
              I build agents that
              <br />
              <span className="text-accent">survive production.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed lg:text-lg">
              I&apos;m {profile.name} — a software engineer working where LLMs meet real
              backends. Typed services on PostgreSQL, Redis-backed job pipelines, and
              tool-calling agents that are gated by checks rather than trusted on vibes.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="#work" className="btn-primary">
                See the work
              </Link>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Résumé ↗
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="btn !px-0 text-fg-muted underline-offset-4 hover:text-fg hover:underline"
              >
                {profile.email}
              </a>
            </div>
          </div>

          {/* Right: the proof, running */}
          <div className="lg:pt-2">
            <AgentRuntime />
          </div>

        </div>
      </div>

      {/* Metric strip — the horizontal bar that closes the Z */}
      <div className="relative border-t border-line bg-surface/60">
        <div className="shell">
          <dl className="grid grid-cols-2 lg:grid-cols-4">
            {metrics.map((m, i) => (
              <div
                key={m.label}
                /* 2-up on mobile, 4-up on desktop: a cell gets a left border
                   whenever it isn't first in its row, and a top border on the
                   second mobile row only. */
                className={[
                  "border-line py-6 lg:py-7",
                  i % 2 === 1 ? "border-l pl-5" : "",
                  i >= 2 ? "border-t lg:border-t-0" : "",
                  i > 0 ? "lg:border-l lg:pl-6" : "lg:border-l-0",
                ].join(" ")}
              >
                <dt className="font-jet text-2xl tabular-nums text-fg lg:text-3xl">
                  <CountUp value={m.value} />
                </dt>
                <dd className="mt-1.5 text-xs leading-snug text-fg-muted">
                  {m.label}
                  <span className="mt-0.5 block font-jet text-[10px] uppercase tracking-wider text-fg-dim">
                    {m.source}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

    </section>
  );
}
