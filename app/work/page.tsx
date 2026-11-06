import type { Metadata } from "next";
import Link from "next/link";
import { archive, caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work — Nakshatra Joshi",
  description:
    "Case studies on production backend systems, agentic AI pipelines and document-extraction infrastructure.",
};

export default function WorkPage() {
  return (
    <>
      {/* Masthead */}
      <header className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid opacity-50 grid-fade"
        />
        <div className="shell relative py-16 lg:py-24">
          <span className="eyebrow">Work</span>
          <h1 className="mt-5 max-w-3xl text-display font-medium">
            Systems, written up honestly.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed">
            Six case studies covering the constraint each system was built against, the
            decisions that followed, and what I would change on a second pass.
          </p>
        </div>
      </header>

      {/* Case studies */}
      <section className="shell py-16 lg:py-20">
        <div className="border-t border-line">
          {caseStudies.map((study, i) => (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              className="group block border-b border-line py-8 transition-colors hover:bg-surface/50 lg:py-10"
            >
              <div className="grid gap-5 lg:grid-cols-[auto_1fr_auto] lg:items-start lg:gap-10">

                <div className="flex items-center gap-3 lg:w-28 lg:flex-col lg:items-start lg:gap-2">
                  <span className="font-jet text-label text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-jet text-label uppercase text-fg-dim">
                    {study.kind} · {study.year}
                  </span>
                </div>

                <div className="min-w-0">
                  <h2 className="text-xl font-medium transition-colors group-hover:text-accent lg:text-2xl">
                    {study.name}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed lg:text-base">
                    {study.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {study.stack.slice(0, 6).map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>
                </div>

                <dl className="flex gap-6 lg:w-40 lg:flex-col lg:gap-3 lg:border-l lg:border-line lg:pl-6">
                  {study.stats.map((s) => (
                    <div key={s.label}>
                      <dt className="font-jet text-lg tabular-nums text-fg">{s.value}</dt>
                      <dd className="text-[11px] leading-snug text-fg-dim">{s.label}</dd>
                    </div>
                  ))}
                </dl>

              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Archive */}
      <section className="border-t border-line bg-surface/30 py-16 lg:py-20">
        <div className="shell">
          <div className="mb-10 flex items-center gap-3">
            <span className="eyebrow">Also built</span>
            <span className="hairline flex-1" />
          </div>

          <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {archive.map((p) => (
              <article key={p.name} className="flex flex-col bg-surface p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-base font-medium">{p.name}</h3>
                  <span className="font-jet text-[11px] text-fg-dim">{p.year}</span>
                </div>

                <p className="mt-2.5 flex-1 text-sm leading-relaxed">{p.blurb}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>

                <div className="mt-5 flex gap-4 font-jet text-label uppercase">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-fg-muted transition-colors hover:text-accent"
                    >
                      Live ↗
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-fg-dim transition-colors hover:text-fg"
                    >
                      Source ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
