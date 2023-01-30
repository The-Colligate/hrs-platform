import { Progress } from "antd";

export const LeaveProgress = (props: {
  used: number;
  total: number;
  color: string;
  active?: boolean;
  className?: string;
}) => {
  const { used, total, color, className, active } = props;
  return (
    <div
      className={`flex items-center gap-5 max-w-lg mx-auto ${className}`}
      style={{ color }}
    >
      <div className="text-center">
        <p className="text-4xl">{used}</p>
        <p className="text-secondary-high">Used</p>
      </div>
      <Progress
        percent={(used / total) * 100}
        status={active ? "active" : "normal"}
        showInfo={false}
        strokeColor={color}
      />
      <div className="text-center">
        <p className="text-4xl">{total - used}</p>
        <p className="text-secondary-high">Left</p>
      </div>
    </div>
  );
};
