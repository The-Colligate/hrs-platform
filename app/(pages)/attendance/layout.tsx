"use client";

import { NavigatorTabs } from "@/components/common";
import { usePathname } from "next/navigation";

export default function AttendanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();

  const buttonTabs = [
    {
      name: "Physical",
      href: "/attendance/physical",
    },
    {
      name: "Online",
      href: "/attendance/online",
    },
  ];

  return (
    <div className="w-full h-full col-span-10 flex flex-col overflow-hidden">
      <div className="p-5 pt-0">
        <NavigatorTabs
          className="mt-10"
          buttonTabs={buttonTabs}
        />
      </div>
      <div className="col-span-10 flex flex-col flex-grow overflow-hidden">
        {children}
      </div>
    </div>
  );
}
