"use client";

import { fileToIcon } from "@/app/utils";
import { FilterIcon, SearchIcon } from "@/icons";
import { Button, Input } from "antd";
import Image from "next/image";

export default function Attachments() {
  const files = [
    {
      id: 1,
      name: "Report.xlsx",
      size: "50kb",
    },
    {
      id: 2,
      name: "Presentation.pptx",
      size: "2.5mb",
    },
    {
      id: 3,
      name: "Resume.docx",
      size: "120kb",
    },
    {
      id: 4,
      name: "Contract Letter.pdf",
      size: "200kb",
    },
  ];
  return (
    <div className="w-full h-full flex flex-col flex-grow overflow-auto custom_scrollbar p-5">
      <div className="flex items-center space-x-5 mb-8">
        <Input
          placeholder="Search attachments"
          className="rounded-full border-none w-full px-4 py-3"
          prefix={<SearchIcon className="text-secondary-high" />}
        />
        <Button icon={<FilterIcon className="ml-0.5" />} type="text" />
      </div>
      <div className="grid grid-cols-4 gap-10">
        {files.map((file) => {
          const { icon, bgColor, textColor } = fileToIcon(file.name);
          return (
            <div
              key={file.id}
              className={`${bgColor} ${textColor} rounded-lg p-6 text-center shadow_hover cursor-pointer`}
            >
              <Image
                alt={icon}
                src={icon}
                width={50}
                height={50}
                className="mx-auto mb-8"
              />
              <p className="font-semibold mb-2">{file.name}</p>
              <p>{file.size}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
