"use client";

import { useEffect, useState } from "react";

const PROVIDERS = ["Model A", "API B", "Dataset C", "Tool D"];
const EVALUATORS = ["Evaluator A", "Evaluator B", "Evaluator C"];

// Each frame is one moment of the loop: provider scores under the current judge, and what just changed.
const FRAMES = [
  { scores: [86, 72, 61, 40], judge: 0, note: <>Model A leads, measured by <strong>Evaluator A</strong>.</> },
  { scores: [78, 91, 63, 44], judge: 0, note: <>API B improves. <strong>Better intelligence replaces the winner.</strong></> },
  { scores: [74, 81, 93, 52], judge: 1, note: <>Evaluator B measures better. <strong>Better evaluation replaces the judge.</strong></> },
];
const FRAME_MS = 3200;
const SHOWN = 3;
const ROW = 40;
const EVAL_ROW = 44; // row height plus gap in the Evaluators list

/** Hero diagram: two competitions feeding one ranking, cycling through FRAMES. */
export function HeroViz() {
  const [f, setF] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setF((x) => (x + 1) % FRAMES.length), FRAME_MS);
    return () => clearInterval(id);
  }, []);

  const { scores, judge, note } = FRAMES[f];
  const order = PROVIDERS.map((_, i) => i).sort((a, b) => scores[b] - scores[a]);
  const rankOf = (i: number) => order.indexOf(i);
  // The judge moves to the top of the Evaluators list; the challengers keep their order below it.
  const evalOrder = [judge, ...EVALUATORS.map((_, i) => i).filter((i) => i !== judge)];

  return (
    <div className="wp-system" aria-label="Intelligence and evaluation compete; the ranking routes demand">
      <div className="wp-system-head">
        <span>Task · Screen this wallet</span>
        <span className="wp-live">
          <span className="wp-dot" aria-hidden="true" /> Live
        </span>
      </div>

      <div className="wp-lanes">
        <div className="wp-lane">
          <p className="wp-lane-label">Intelligence competes</p>
          <ul>
            {PROVIDERS.map((p, i) => (
              <li key={p} className={rankOf(i) === 0 ? "is-top" : ""}>
                <span className="wp-lane-row">
                  <span>{p}</span>
                  <small>{scores[i]}</small>
                </span>
                <i className="wp-bar">
                  <i style={{ width: `${scores[i]}%` }} />
                </i>
              </li>
            ))}
          </ul>
        </div>
        <div className="wp-lane">
          <p className="wp-lane-label">Evaluation competes</p>
          <ul className="wp-eval-list" style={{ height: EVALUATORS.length * EVAL_ROW - 7 }}>
            {EVALUATORS.map((e, i) => (
              <li
                key={e}
                className={i === judge ? "is-judge" : ""}
                style={{ transform: `translateY(${evalOrder.indexOf(i) * EVAL_ROW}px)` }}
              >
                <span className="wp-lane-row">
                  <span>{e}</span>
                  <small>{i === judge ? "judge" : "challenger"}</small>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="wp-replace" aria-live="polite">{note}</p>

      <div className="wp-ranking">
        <p className="wp-ranking-title">
          <span>Finalized ranking</span>
          <span>Current task</span>
        </p>
        <ol style={{ height: SHOWN * ROW }}>
          {PROVIDERS.map((p, i) => {
            const r = rankOf(i);
            return (
              <li
                key={p}
                style={{ transform: `translateY(${r * ROW}px)`, opacity: r < SHOWN ? 1 : 0 }}
                className={r === 0 ? "is-top" : ""}
              >
                <span className="wp-rank-no">{r + 1}</span>
                {p}
                {r === 0 && <span className="wp-demand">demand →</span>}
              </li>
            );
          })}
        </ol>
        <p className="wp-route">
          Ranking routes demand to <strong>{PROVIDERS[order[0]]}</strong>.
        </p>
      </div>
    </div>
  );
}
