"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

/** Reads the media query without a setState-in-effect round trip. */
function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false,
  );
}

/**
 * The hero's focal point: an agent run, traced on a loop.
 *
 * The loop pauses whenever the panel scrolls out of view or the tab is
 * hidden, so it never animates where nobody is looking, and it holds at the
 * finished state for anyone who prefers reduced motion.
 */

type Stage = {
  id: string;
  label: string;
  detail: string;
  /** ms this stage holds before the next one starts */
  dwell: number;
};

/* Illustrative, not a trace of any real system — a generic tool-calling loop. */
const STAGES: Stage[] = [
  { id: "receive", label: "receive", detail: "user request", dwell: 900 },
  { id: "plan", label: "plan", detail: "intent → 2 tools", dwell: 750 },
  { id: "call", label: "tool call", detail: "lookup(id) · fetch(doc)", dwell: 1400 },
  { id: "verify", label: "verify", detail: "schema ok · retries 0", dwell: 1050 },
  { id: "respond", label: "respond", detail: "answer + sources", dwell: 0 },
];

const LAST = STAGES.length - 1;

export default function AgentRuntime() {
  const reduced = usePrefersReducedMotion();
  const [step, setStep] = useState(0);
  const [runs, setRuns] = useState(7034);
  const [inView, setInView] = useState(true);
  const [tabVisible, setTabVisible] = useState(true);
  const [paused, setPaused] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  /* With reduced motion the run is simply shown already finished. */
  const active = reduced ? LAST : step;
  const done = active >= LAST;
  const running = !reduced && !paused && inView && tabVisible;

  /* Don't animate a panel nobody is looking at. */
  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;

    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
      threshold: 0.15,
    });
    io.observe(el);

    const onVisibility = () => setTabVisible(!document.hidden);
    onVisibility();
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  useEffect(() => {
    if (!running) return;

    // Hold a beat on the finished state, then start the next run.
    const delay = done ? 2200 : STAGES[active].dwell;
    const timer = setTimeout(() => {
      if (done) {
        setRuns((r) => r + 1);
        setStep(0);
      } else {
        setStep((i) => i + 1);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [active, done, running]);

  return (
    <div ref={panelRef} className="panel w-full">

      {/* Head */}
      <div className="panel-head justify-between">
        <span className="flex items-center gap-2">
          <span className="status-dot" />
          agent.runtime
        </span>
        <span className="flex items-center gap-2 normal-case tracking-normal text-fg-dim">
          <span>illustrative</span>
          <span className="text-line-strong">·</span>
          <span className="tabular-nums">run {runs.toLocaleString()}</span>
        </span>
      </div>

      {/* Trace */}
      <ol className="px-4 py-4">
        {STAGES.map((stage, i) => {
          const isActive = i === active;
          const isPast = i < active;
          const reached = isActive || isPast;

          return (
            <li key={stage.id} className="relative flex gap-3 pb-4 last:pb-0">

              {/* Rail */}
              <div className="flex flex-col items-center self-stretch">
                <span
                  className={`mt-1.5 h-2 w-2 flex-shrink-0 rounded-full transition-colors duration-500 ${
                    isActive && !done
                      ? "bg-accent"
                      : reached
                        ? "bg-accent-dim"
                        : "bg-line-strong"
                  }`}
                />
                {i < LAST && (
                  <span
                    className={`mt-1 w-px flex-1 transition-colors duration-500 ${
                      isPast ? "bg-accent-dim" : "bg-line"
                    }`}
                  />
                )}
              </div>

              {/* Row */}
              <div className="flex min-w-0 flex-1 flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
                <span
                  className={`font-jet text-sm transition-colors duration-500 ${
                    reached ? "text-fg" : "text-fg-dim"
                  }`}
                >
                  {stage.label}
                </span>
                <span
                  className={`truncate font-jet text-[11px] transition-all duration-500 ${
                    reached ? "text-fg-muted opacity-100" : "text-fg-dim opacity-40"
                  }`}
                >
                  {reached ? stage.detail : "—"}
                </span>
              </div>

            </li>
          );
        })}
      </ol>

      {/* Foot */}
      <div className="flex items-center justify-between border-t border-line px-4 py-2.5 font-jet text-[11px]">
        <span className={done ? "text-accent" : "text-fg-dim"}>
          {done ? "loop exited · verified" : "running…"}
        </span>

        {/* Motion is opt-out, not forced */}
        {!reduced && (
          <button
            type="button"
            onClick={() => setPaused((v) => !v)}
            aria-pressed={paused}
            className="text-fg-dim transition-colors hover:text-fg"
          >
            {paused ? "resume ▶" : "pause ⏸"}
          </button>
        )}
      </div>

    </div>
  );
}
