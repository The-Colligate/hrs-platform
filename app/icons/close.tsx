import { IconProps } from "@/types";

export const CloseIcon = (props: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.75781 17.2431L12.0008 12.0001M17.2438 6.75708L11.9998 12.0001M11.9998 12.0001L6.75781 6.75708M12.0008 12.0001L17.2438 17.2431"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
