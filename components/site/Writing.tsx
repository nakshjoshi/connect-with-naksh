import Image from "next/image";
import { writing } from "@/lib/content";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

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

        <div className="flex flex-col gap-6">
          {writing.map((article) => (
            <Reveal key={article.url}>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="panel-link group block overflow-hidden"
              >
                {/* Browser chrome — the page is real, so frame it like one */}
                <div className="flex items-center gap-3 border-b border-line px-4 py-2.5">
                  <span className="flex flex-shrink-0 gap-1.5" aria-hidden>
                    <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
                    <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
                    <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
                  </span>

                  <span className="flex min-w-0 flex-1 items-center gap-2 border border-line bg-canvas px-2.5 py-1">
                    <span className="flex-shrink-0 text-accent" aria-hidden>⌁</span>
                    <span className="truncate font-jet text-[11px] text-fg-dim">
                      {article.displayUrl ?? article.url}
                    </span>
                  </span>

                  <span className="hidden flex-shrink-0 font-jet text-[11px] text-fg-dim sm:block">
                    {article.published}
                  </span>
                </div>

                <div className="grid lg:grid-cols-[0.95fr_1fr]">

                  {/* Live-ish preview of the article page itself */}
                  {article.cover && (
                    <div className="relative h-56 overflow-hidden border-b border-line bg-white lg:h-auto lg:border-b-0 lg:border-r">
                      <Image
                        src={article.cover}
                        alt={`Opening of "${article.title}"`}
                        width={880}
                        height={712}
                        className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                      {/* Bleeds the page into the panel instead of ending on a hard edge */}
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface to-transparent"
                      />
                    </div>
                  )}

                  {/* The pitch */}
                  <div className="p-5 lg:p-7">
                    <h3 className="text-xl font-medium transition-colors group-hover:text-accent lg:text-2xl">
                      {article.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed">{article.standfirst}</p>

                    <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
                      {article.tags.map((t) => (
                        <span key={t} className="chip">{t}</span>
                      ))}
                      <span className="font-jet text-[11px] text-fg-dim">{article.shape}</span>
                    </div>

                    <ul className="mt-6 flex flex-col gap-2 border-t border-line pt-5">
                      {article.covers.map((c) => (
                        <li key={c} className="flex gap-2.5 text-xs leading-relaxed text-fg-muted">
                          <span className="mt-1.5 h-1 w-1 flex-shrink-0 bg-accent-dim" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>

                    <span className="mt-6 inline-flex items-center gap-2 font-jet text-xs uppercase tracking-wider text-accent">
                      Read it on Medium
                      <span className="transition-transform duration-200 group-hover:translate-x-1">↗</span>
                    </span>
                  </div>

                </div>
              </a>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
