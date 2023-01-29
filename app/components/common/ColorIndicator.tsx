import { CSSProperties } from "react";

export const ColorIndicator = (props: {
  className?: string;
  style?: CSSProperties;
}) => {
  const { className, style } = props;
  return (
    <div
      className={`${className} rounded w-4 h-4 mr-2`}
      style={style}
    />
  );
};
