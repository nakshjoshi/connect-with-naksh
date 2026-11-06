import type { Metadata } from "next";
import { education, profile, recognition } from "@/lib/content";

export const metadata: Metadata = {
  title: "About — Nakshatra Joshi",
  description:
    "Software engineer working on backend systems and agentic AI. Final-year B.Tech at RGIPT, available from January 2027.",
};

const beyond = [
  {
    title: "Training & Placement Student Coordinator",
    detail:
      "Career Development Cell, RGIPT. Recruiter relationships, placement drives, pre-placement talks — and the database work underneath all of it.",
  },
  {
    title: "Technical events, IEEE RGIPT SB & E-Cell",
    detail:
      "Technical Executive: event databases, promotional design, and the E-Cell site. Ran the stream for chess tournaments, which is live production with no retakes.",
  },
  {
    title: "Badminton, RGIPT institute team",
    detail:
      "Pre-quarters at Spardha, IIT BHU. Earlier, DAV Zonal quarter-finals representing Tata D.A.V.",
  },
  {
    title: "The Green School Project — Tata Steel & TERI",
    detail: "Led the school team to The Green Trophy in 2018–19.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Masthead */}
      <header className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid opacity-50 grid-fade"
        />
        <div className="shell relative py-16 lg:py-24">
          <span className="eyebrow">About</span>
          <h1 className="mt-5 max-w-3xl text-display font-medium">
            Backend engineer who ended up in the agent layer.
          </h1>
        </div>
      </header>

      <div className="shell grid gap-14 py-16 lg:grid-cols-[1fr_17rem] lg:gap-20 lg:py-24">

        {/* Narrative */}
        <div className="max-w-2xl">
          <div className="flex flex-col gap-6 text-base leading-relaxed lg:text-lg">
            <p>
              I started where most people do — building things that looked finished. What
              changed my work was shipping to users who did not care how clever the code
              was, only whether their documents came back correct.
            </p>
            <p>
              That pushed me toward the backend: queues, job tables, migrations, RBAC,
              retries. Then LLMs arrived in the middle of those systems, and it turned out
              the interesting problem was not prompting — it was building the scaffolding
              that makes a probabilistic component safe to depend on. Reconciliation
              checks. Schema validation. Evaluation harnesses. State machines the model
              moves through rather than invents.
            </p>
            <p>
              Today that means Fastify and FastAPI services on PostgreSQL, Redis-backed
              pipelines, Docker and AWS — with RAG, tool calling and MCP used where they
              genuinely beat a deterministic alternative, and left out where they don&apos;t.
            </p>
            <p>
              I&apos;m in my final year of a B.Tech in Computer Science &amp; Design
              Engineering at RGIPT, and{" "}
              <span className="text-fg">available from January 2027</span> for a six-month
              internship or a full-time role.
            </p>
          </div>

          {/* Recognition */}
          <section className="mt-16">
            <div className="mb-6 flex items-center gap-3">
              <span className="eyebrow">Recognition</span>
              <span className="hairline flex-1" />
            </div>
            <div className="flex flex-col">
              {recognition.map((r) => (
                <div key={r.title} className="border-t border-line py-5 first:border-t-0 first:pt-0">
                  <h3 className="text-base font-medium">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed">{r.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Beyond the terminal */}
          <section className="mt-16">
            <div className="mb-6 flex items-center gap-3">
              <span className="eyebrow">Away from the keyboard</span>
              <span className="hairline flex-1" />
            </div>
            <div className="flex flex-col">
              {beyond.map((b) => (
                <div key={b.title} className="border-t border-line py-5 first:border-t-0 first:pt-0">
                  <h3 className="text-base font-medium">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed">{b.detail}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Facts rail */}
        <aside className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">

          <div className="panel">
            <div className="panel-head">Status</div>
            <div className="flex flex-col gap-2.5 p-4 font-jet text-[11px]">
              <p className="flex items-center gap-2 text-fg-muted">
                <span className="status-dot" />
                {profile.statusShort}
              </p>
              <p className="text-fg-dim">6-month internship or full-time</p>
            </div>
          </div>

          <div className="panel">
            <div className="panel-head">Education</div>
            <ul className="divide-y divide-line">
              {education.map((e) => (
                <li key={e.name} className="p-4">
                  <p className="text-sm font-medium text-fg">{e.name}</p>
                  <p className="mt-1 text-xs leading-relaxed text-fg-muted">
                    {e.qualification}
                  </p>
                  <p className="mt-1.5 font-jet text-[11px] text-fg-dim">
                    {e.period} · {e.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-ghost w-full">
            Full résumé ↗
          </a>

        </aside>

      </div>
    </>
  );
}
