import Link from "next/link";
import { archive, caseStudies, featuredSlugs } from "@/lib/content";
import SectionHeader from "./SectionHeader";

const featured = featuredSlugs
  .map((slug) => caseStudies.find((c) => c.slug === slug))
  .filter((c): c is NonNullable<typeof c> => Boolean(c));

export default function SelectedWork() {
  return (
    <section id="work" className="section">
      <div className="shell">

        <SectionHeader
          index="01"
          label="Selected work"
          title="Three systems, and what they had to get right."
          intro="Each one is written up as a case study — the constraint, the decisions, and what I'd do differently."
          action={{ href: "/work", text: "All work" }}
        />

        {/* Full-width rows beat a card grid here: each project gets
            room for numbers, and the eye tracks down one column. */}
        <div className="border-t border-line">
          {featured.map((study, i) => (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              className="group block border-b border-line py-8 transition-colors duration-200 hover:bg-surface/50 lg:py-10"
            >
              <div className="grid gap-6 lg:grid-cols-[auto_1fr_auto] lg:items-start lg:gap-10">

                {/* Index + kind */}
                <div className="flex items-center gap-3 lg:w-28 lg:flex-col lg:items-start lg:gap-2">
                  <span className="font-jet text-label text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-jet text-label uppercase text-fg-dim">
                    {study.kind} · {study.year}
                  </span>
                </div>

                {/* Body */}
                <div className="min-w-0">
                  <h3 className="text-xl font-medium text-fg transition-colors group-hover:text-accent lg:text-2xl">
                    {study.name}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed lg:text-base">
                    {study.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {study.stack.slice(0, 6).map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                    {study.stack.length > 6 && (
                      <span className="chip border-dashed text-fg-dim">
                        +{study.stack.length - 6}
                      </span>
                    )}
                  </div>
                </div>

                {/* Numbers */}
                <dl className="flex gap-6 lg:w-44 lg:flex-col lg:gap-3 lg:border-l lg:border-line lg:pl-6">
                  {study.stats.map((s) => (
                    <div key={s.label}>
                      <dt className="font-jet text-lg tabular-nums text-fg">{s.value}</dt>
                      <dd className="text-[11px] leading-snug text-fg-dim">{s.label}</dd>
                    </div>
                  ))}
                </dl>

              </div>

              <span className="mt-6 inline-flex items-center gap-2 font-jet text-xs uppercase tracking-wider text-accent">
                Read case study
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>

        {/* The archive link people actually use: full width, at the point
            where they have just finished reading and want more. */}
        <Link
          href="/work"
          className="group mt-8 flex flex-col gap-4 border border-line bg-surface p-6 transition-colors
                     hover:border-accent hover:bg-surface-2 sm:flex-row sm:items-center sm:justify-between lg:p-7"
        >
          <span>
            <span className="block text-lg font-medium text-fg transition-colors group-hover:text-accent lg:text-xl">
              See everything I&apos;ve built
            </span>
            <span className="mt-1.5 block text-sm text-fg-muted">
              {caseStudies.length} full case studies and {archive.length} more shipped projects
            </span>
          </span>

          <span className="btn-primary flex-shrink-0">
            All work
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </span>
        </Link>

      </div>
    </section>
  );
}
