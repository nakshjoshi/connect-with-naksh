"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

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
 * The hero's focal point: one agent run, traced.
 *
 * It plays once on arrival and then rests at the committed state. Motion is a
 * hierarchy lever — spent continuously it stops meaning anything, so the run
 * is replayable on demand instead of looping forever.
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

  /* With reduced motion the run is simply shown already finished. */
  const active = reduced ? LAST : step;
  const done = active >= LAST;

  useEffect(() => {
    if (done) return;
    const timer = setTimeout(() => setStep((i) => i + 1), STAGES[active].dwell);
    return () => clearTimeout(timer);
  }, [active, done]);

  const replay = () => setStep(0);

  return (
    <div className="panel w-full">

      {/* Head */}
      <div className="panel-head justify-between">
        <span className="flex items-center gap-2">
          <span className="status-dot" />
          agent.runtime
        </span>
        <span className="normal-case tracking-normal text-fg-dim">illustrative</span>
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
        <button
          type="button"
          onClick={replay}
          className="text-fg-dim transition-colors hover:text-fg"
        >
          replay ↻
        </button>
      </div>

    </div>
  );
}
