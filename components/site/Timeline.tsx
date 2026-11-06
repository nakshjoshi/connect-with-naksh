import Link from "next/link";
import { caseStudies, experience } from "@/lib/content";
import SectionHeader from "./SectionHeader";

export default function Timeline() {
  return (
    <section id="experience" className="section border-t border-line">
      <div className="shell">

        <SectionHeader
          index="04"
          label="Experience"
          title="Where the work happened."
          intro="Three roles, two of which put code in front of paying customers."
        />

        <div className="flex flex-col">
          {experience.map((role) => (
            <article
              key={role.company}
              className="grid gap-5 border-t border-line py-8 lg:grid-cols-[13rem_1fr] lg:gap-12 lg:py-10"
            >

              {/* Left rail: when + where */}
              <div className="flex items-start gap-3 lg:flex-col lg:gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center border border-line bg-surface-2">
                  {role.logo ? (
                    <img
                      src={role.logo}
                      alt=""
                      className="h-full w-full object-contain p-1.5"
                    />
                  ) : (
                    <span className="font-jet text-[11px] tracking-tight text-accent">
                      {(() => {
                        const words = role.company
                          .replace(/[^A-Za-z ]/g, "")
                          .split(" ")
                          .filter(Boolean);
                        // One word -> first two letters; otherwise initials.
                        return (
                          words.length === 1
                            ? words[0].slice(0, 2)
                            : words.slice(0, 2).map((w) => w[0]).join("")
                        ).toUpperCase();
                      })()}
                    </span>
                  )}
                </div>
                <div className="font-jet text-[11px] leading-relaxed">
                  <p className="text-fg-muted">{role.period}</p>
                  <p className="text-fg-dim">{role.location}</p>
                </div>
              </div>

              {/* Right: what */}
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-lg font-medium lg:text-xl">{role.role}</h3>
                  <span className="font-jet text-sm text-accent">{role.company}</span>
                  {role.org && (
                    <span className="font-jet text-[11px] text-fg-dim">{role.org}</span>
                  )}
                </div>

                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-fg">{role.summary}</p>

                <ul className="mt-4 flex max-w-2xl flex-col gap-2.5">
                  {role.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-fg-muted">
                      <span className="mt-[9px] h-1 w-1 flex-shrink-0 bg-accent-dim" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {role.stack.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 font-jet text-xs uppercase tracking-wider">
                  {role.work.map((slug) => {
                    const study = caseStudies.find((c) => c.slug === slug);
                    if (!study) return null;
                    return (
                      <Link
                        key={slug}
                        href={`/work/${slug}`}
                        className="text-accent transition-opacity hover:opacity-80"
                      >
                        {study.name} →
                      </Link>
                    );
                  })}
                  {role.letter && (
                    <a
                      href={role.letter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-fg-muted transition-colors hover:text-fg"
                    >
                      Letter ↗
                    </a>
                  )}
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
