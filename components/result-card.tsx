import { CheckCircle2, TestTube2 } from "lucide-react";

export function ResultCard() {
  return (
    <section className="result-card">
      <div className="result-card-top">
        <div className="result-icon">
          <CheckCircle2 size={24} />
        </div>

        <div>
          <p className="result-eyebrow">Keploy test run</p>
          <h3>Replay completed successfully</h3>
        </div>
      </div>

      <div className="result-stats">
        <div className="result-stat">
          <span className="result-number">2</span>
          <span className="result-label">Tests passed</span>
        </div>

        <div className="result-stat">
          <span className="result-number">0</span>
          <span className="result-label">Tests failed</span>
        </div>

        <div className="result-stat">
          <span className="result-number">1</span>
          <span className="result-label">Test set</span>
        </div>
      </div>

      <div className="result-tests">
        <div>
          <TestTube2 size={16} />
          <code>post-create-1</code>
          <span>Passed</span>
        </div>

        <div>
          <TestTube2 size={16} />
          <code>post-create-2</code>
          <span>Passed</span>
        </div>
      </div>
    </section>
  );
}