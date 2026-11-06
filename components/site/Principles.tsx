import { principles } from "@/lib/content";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function Principles() {
  return (
    <section id="approach" className="section border-t border-line bg-surface/30">
      <div className="shell">

        <SectionHeader
          index="02"
          label="How I work"
          title="Four rules I've paid for."
          intro="Every one of these exists because a system taught it to me the expensive way."
        />

        <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
          {principles.map((p) => (
            <Reveal key={p.n} className="bg-surface">
            <article className="h-full p-6 lg:p-8">
              <span className="font-jet text-label text-accent">{p.n}</span>
              <h3 className="mt-4 text-lg font-medium">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed">{p.body}</p>
            </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
