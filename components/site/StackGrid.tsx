import { stack } from "@/lib/content";
import SectionHeader from "./SectionHeader";

export default function StackGrid() {
  return (
    <section id="stack" className="section border-t border-line bg-surface/30">
      <div className="shell">

        <SectionHeader
          index="05"
          label="Stack"
          title="Tools I reach for without looking them up."
          intro="Listed by what I've shipped with, not what I've read about."
        />

        <div className="grid gap-px border border-line bg-line lg:grid-cols-2">
          {stack.map((group) => (
            <div key={group.group} className="bg-surface">
              <div className="panel-head">{group.group}</div>
              <ul className="flex flex-wrap gap-1.5 p-4">
                {group.items.map((item) => (
                  <li key={item} className="chip">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
