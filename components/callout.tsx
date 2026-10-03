import {
  AlertTriangle,
  Info,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";

type CalloutType = "info" | "tip" | "warning" | "success";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

const config = {
  info: {
    icon: Info,
    label: "Info",
  },
  tip: {
    icon: Lightbulb,
    label: "Tip",
  },
  warning: {
    icon: AlertTriangle,
    label: "Warning",
  },
  success: {
    icon: CheckCircle2,
    label: "Success",
  },
};

export function Callout({
  type = "info",
  title,
  children,
}: CalloutProps) {
  const { icon: Icon, label } = config[type];

  return (
    <div className={`callout callout-${type}`}>
      <div className="callout-icon">
        <Icon size={19} />
      </div>

      <div className="callout-content">
        <div className="callout-title">{title || label}</div>
        <div className="callout-body">{children}</div>
      </div>
    </div>
  );
}