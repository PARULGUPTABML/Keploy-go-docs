"use client";
import { useState } from "react";
import { Play, RotateCcw, CheckCircle2, Clock } from "lucide-react";

type Status = "idle" | "running" | "passed" | "failed";

const TEST_CASES = [
  { id: "test-1", method: "POST", path: "/url",     desc: "Create short URL",         expectedStatus: 200, timing: 12 },
  { id: "test-2", method: "POST", path: "/url",     desc: "Create second short URL",  expectedStatus: 200, timing: 9  },
  { id: "test-3", method: "GET",  path: "/abc123",  desc: "Redirect by short code",   expectedStatus: 302, timing: 8  },
];

export function InteractiveTestRunner() {
  const [statuses, setStatuses] = useState<Record<string, Status>>({});
  const [running, setRunning]   = useState(false);
  const [done, setDone]         = useState(false);

  async function runTests() {
    setStatuses({});
    setDone(false);
    setRunning(true);

    for (const tc of TEST_CASES) {
      setStatuses(prev => ({ ...prev, [tc.id]: "running" }));
      await new Promise(r => setTimeout(r, 700 + Math.random() * 500));
      setStatuses(prev => ({ ...prev, [tc.id]: "passed" }));
      await new Promise(r => setTimeout(r, 150));
    }

    setRunning(false);
    setDone(true);
  }

  function reset() {
    setStatuses({});
    setRunning(false);
    setDone(false);
  }

  const allPassed = done && TEST_CASES.every(tc => statuses[tc.id] === "passed");

  return (
    <div className="test-runner">
      {/* Header */}
      <div className="test-runner-header">
        <div className="test-runner-title">
          <CheckCircle2 size={16} className="test-runner-title-icon" />
          Interactive Test Runner
          <span className="test-runner-badge">Live Demo</span>
        </div>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {done && (
            <button className="test-reset-btn" onClick={reset} type="button">
              <RotateCcw size={12} />
              Reset
            </button>
          )}
          <button
            className="test-run-btn"
            onClick={runTests}
            disabled={running}
            type="button"
          >
            <Play size={13} />
            {running ? "Running…" : done ? "Run Again" : "▶ Run Tests"}
          </button>
        </div>
      </div>

      {/* Test list */}
      <div className="test-cases">
        {TEST_CASES.map((tc) => {
          const status = statuses[tc.id] ?? "idle";
          const isGet = tc.method === "GET";

          return (
            <div
              key={tc.id}
              className={`test-case${status !== "idle" ? " test-case-" + status : ""}`}
            >
              {/* Status circle */}
              <div className={`test-case-status ${status}`}>
                {status === "running" && <span style={{ fontSize: 14 }}>⟳</span>}
                {status === "passed"  && <CheckCircle2 size={12} />}
                {status === "failed"  && <span>✕</span>}
                {status === "idle"    && <span style={{ opacity: 0.3 }}>○</span>}
              </div>

              {/* Info */}
              <div className="test-case-info">
                <div className="test-case-name">
                  <span
                    className="test-method-badge"
                    style={{
                      background: isGet ? "rgba(56,189,248,.15)" : "rgba(52,211,153,.15)",
                      color:      isGet ? "#38bdf8"              : "var(--accent)",
                    }}
                  >
                    {tc.method}
                  </span>
                  {tc.path}
                </div>
                <div className="test-case-detail">
                  {tc.desc} · Expected <strong>{tc.expectedStatus}</strong>
                </div>
              </div>

              {/* Timing */}
              <div className={`test-case-timing${status === "passed" ? " visible" : ""}`}>
                <Clock size={11} />
                {tc.timing}ms
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary bar */}
      <div className={`test-runner-summary${allPassed ? " visible" : ""}`}>
        <div className="test-summary-stats">
          <div className="test-stat">
            <span className="test-stat-num">3</span>
            <span className="test-stat-label">tests</span>
          </div>
          <div className="test-stat">
            <span className="test-stat-num green">3</span>
            <span className="test-stat-label">passed</span>
          </div>
          <div className="test-stat">
            <span className="test-stat-num red">0</span>
            <span className="test-stat-label">failed</span>
          </div>
          <div className="test-stat">
            <Clock size={13} />
            <span className="test-stat-num">29ms</span>
            <span className="test-stat-label">total</span>
          </div>
        </div>
        <div className="test-all-passed">
          <CheckCircle2 size={15} />
          All tests passed!
        </div>
      </div>
    </div>
  );
}
