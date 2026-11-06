import { writing } from "@/lib/content";
import SectionHeader from "./SectionHeader";

export default function Writing() {
  return (
    <section id="writing" className="section border-t border-line">
      <div className="shell">

        <SectionHeader
          index="03"
          label="Writing"
          title="Explaining the thing I claim to build."
          intro="If I can't explain how an agent actually works, I don't understand it well enough to ship one."
        />

        <div className="flex flex-col gap-5">
          {writing.map((article) => (
            <a
              key={article.url}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="panel-link group block"
            >
              <div className="panel-head justify-between">
                <span>Medium</span>
                <span className="normal-case tracking-normal">{article.published}</span>
              </div>

              <div className="grid gap-8 p-5 lg:grid-cols-[1.3fr_1fr] lg:gap-12 lg:p-7">

                {/* The pitch */}
                <div>
                  <h3 className="text-xl font-medium transition-colors group-hover:text-accent lg:text-2xl">
                    {article.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-relaxed lg:text-base">
                    {article.standfirst}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
                    {article.tags.map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                    <span className="font-jet text-[11px] text-fg-dim">
                      {article.shape}
                    </span>
                  </div>

                  <span className="mt-6 inline-flex items-center gap-2 font-jet text-xs uppercase tracking-wider text-accent">
                    Read it
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      ↗
                    </span>
                  </span>
                </div>

                {/* What it covers — the depth, without the full TOC */}
                <div className="lg:border-l lg:border-line lg:pl-8">
                  <span className="eyebrow">Covers</span>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {article.covers.map((c) => (
                      <li key={c} className="flex gap-2.5 text-xs leading-relaxed text-fg-muted">
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 bg-accent-dim" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
