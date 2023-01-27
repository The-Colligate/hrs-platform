import { PriorityStatus } from "@/types";

export const resolvePriorityColor = (priority: PriorityStatus) => {
  switch (priority) {
    case "Low":
      return "bg-priority-low";
    case "Medium":
      return "bg-priority-medium";
    case "High":
      return "bg-priority-high";
    default:
      return "";
  }
};
