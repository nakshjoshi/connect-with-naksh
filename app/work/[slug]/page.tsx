import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/lib/content";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return {
    title: `${study.name} — Nakshatra Joshi`,
    description: study.tagline,
    openGraph: {
      title: `${study.name} — Nakshatra Joshi`,
      description: study.tagline,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const index = caseStudies.findIndex((c) => c.slug === slug);
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <article>

      {/* ── Masthead ─────────────────────────────────────── */}
      <header className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid opacity-50 grid-fade"
        />

        <div className="shell relative py-16 lg:py-24">

          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-jet text-xs uppercase tracking-wider
                       text-fg-muted transition-colors hover:text-accent"
          >
            ← All work
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-jet text-label uppercase text-fg-dim">
            <span className="text-accent">{study.kind}</span>
            <span className="text-line-strong">/</span>
            <span>{study.year}</span>
          </div>

          <h1 className="mt-5 max-w-3xl text-display font-medium">{study.name}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed">{study.tagline}</p>

          {/* Pipeline: the shape of the system, in one line */}
          <div className="mt-10 flex flex-wrap items-center gap-2">
            {study.pipeline.map((node, i) => (
              <span key={node} className="flex items-center gap-2">
                <span className="border border-line bg-surface px-2.5 py-1.5 font-jet text-[11px] text-fg-muted">
                  {node}
                </span>
                {i < study.pipeline.length - 1 && (
                  <span className="font-jet text-xs text-accent-dim">→</span>
                )}
              </span>
            ))}
          </div>

          {/* Links */}
          {(study.links.live || study.links.repo) && (
            <div className="mt-9 flex flex-wrap gap-3">
              {study.links.live && (
                <a
                  href={study.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Live ↗
                </a>
              )}
              {study.links.repo && (
                <a
                  href={study.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  Source ↗
                </a>
              )}
            </div>
          )}

        </div>

        {/* Stats strip */}
        <div className="relative border-t border-line bg-surface/60">
          <div className="shell">
            <dl className="grid grid-cols-1 sm:grid-cols-3">
              {study.stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`py-6 ${i > 0 ? "border-t border-line sm:border-l sm:border-t-0 sm:pl-6" : ""}`}
                >
                  <dt className="font-jet text-2xl tabular-nums text-fg">{s.value}</dt>
                  <dd className="mt-1 text-xs text-fg-muted">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </header>

      {/* ── Body ─────────────────────────────────────────── */}
      <div className="shell grid gap-12 py-16 lg:grid-cols-[1fr_15rem] lg:gap-16 lg:py-24">

        <div className="min-w-0 max-w-2xl">

          <section>
            <h2 className="eyebrow">The problem</h2>
            <p className="mt-4 text-base leading-relaxed lg:text-lg">{study.problem}</p>
          </section>

          <section className="mt-14">
            <h2 className="eyebrow">Approach</h2>
            <div className="mt-6 flex flex-col">
              {study.approach.map((step, i) => (
                <div key={step.title} className="border-t border-line py-7 first:border-t-0 first:pt-0">
                  <div className="flex gap-4">
                    <span className="font-jet text-label text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg font-medium">{step.title}</h3>
                      <p className="mt-2.5 text-sm leading-relaxed lg:text-base">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14">
            <h2 className="eyebrow">Outcome</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {study.outcome.map((o) => (
                <li key={o} className="flex gap-3 text-sm leading-relaxed lg:text-base">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-accent" />
                  <span className="text-fg-muted">{o}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-14 border-l-2 border-accent-dim bg-surface/50 p-6">
            <h2 className="eyebrow">What I&apos;d do differently</h2>
            <p className="mt-3 text-sm leading-relaxed lg:text-base">{study.reflection}</p>
          </section>

        </div>

        {/* Sidebar */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="panel">
            <div className="panel-head">Stack</div>
            <ul className="flex flex-wrap gap-1.5 p-4">
              {study.stack.map((t) => (
                <li key={t} className="chip">{t}</li>
              ))}
            </ul>
          </div>
        </aside>

      </div>

      {/* ── Next ─────────────────────────────────────────── */}
      <div className="border-t border-line">
        <Link
          href={`/work/${next.slug}`}
          className="group block transition-colors hover:bg-surface/50"
        >
          <div className="shell flex flex-col gap-2 py-12 lg:flex-row lg:items-center lg:justify-between lg:py-16">
            <div>
              <span className="eyebrow">Next case study</span>
              <h2 className="mt-3 text-display-sm font-medium transition-colors group-hover:text-accent">
                {next.name}
              </h2>
            </div>
            <span className="font-jet text-2xl text-fg-dim transition-all duration-200 group-hover:translate-x-2 group-hover:text-accent">
              →
            </span>
          </div>
        </Link>
      </div>

    </article>
  );
}
