interface StepBadgeProps {
  n: number;
  label?: string;
}

export function StepBadge({ n, label }: StepBadgeProps) {
  return (
    <span className="step-badge-wrap">
      <span className="step-badge">{n}</span>
      {label && <span className="step-badge-label">{label}</span>}
    </span>
  );
}
