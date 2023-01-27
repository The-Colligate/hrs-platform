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

export const fileToIcon = (file: string) => {
  const fileExtension = file.split(".").pop();
  switch (fileExtension) {
    case "pdf":
      return {
        icon: "/file-icons/pdf.png",
        bgColor: "bg-files-pdf",
        textColor: "text-files-pdf-text",
      };
    case "doc":
    case "docx":
      return {
        icon: "/file-icons/word.png",
        bgColor: "bg-files-word",
        textColor: "text-files-word-text",
      };
    case "csv":
    case "xls":
    case "xlsx":
      return {
        icon: "/file-icons/excel.png",
        bgColor: "bg-files-excel",
        textColor: "text-files-excel-text",
      };
    case "ppt":
    case "pptx":
      return {
        icon: "/file-icons/powerpoint.png",
        bgColor: "bg-files-powerpoint",
        textColor: "text-files-powerpoint-text",
      };
    default:
      return {
        icon: "/file-icons/file.png",
        bgColor: "bg-secondary-low",
        textColor: "text-secondary-high",
      };
  }
};
