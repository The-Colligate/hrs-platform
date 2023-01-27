"use client";

import { Button, Steps } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Attachments() {
  const path = usePathname();

  const buttonTabs = [
    {
      name: "Activity",
      href: "/dashboard",
    },
    {
      name: "Attachments",
      href: "/dashboard/attachments",
    },
    {
      name: "Requests",
      href: "/dashboard/requests",
    },
  ];

  return (
    <div className="flex flex-grow flex-col p-5 mt-5">
      <div className="p-5 rounded-2xl bg-primary-low">
        <Steps
          size="small"
          labelPlacement="vertical"
          current={0}
          items={[
            {
              title: "Recruitment",
            },
            {
              title: "Touring",
            },
            {
              title: "Contract Signing",
            },
            {
              title: "Engagement",
            },
            {
              title: "Orientation",
            },
            {
              title: "Resumption",
            },
          ]}
        />
      </div>
      <div className="flex items-center bg-white w-min rounded-lg mt-5">
        {buttonTabs.map((tab) => {
          const active = path?.startsWith(tab.href);

          return (
            <Link key={tab.name} href={tab.href}>
              <Button
                size="large"
                type={active ? "default" : "text"}
                className={`${active ? "bg-active text-white shadow" : ""}`}
              >
                {tab.name}
              </Button>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
