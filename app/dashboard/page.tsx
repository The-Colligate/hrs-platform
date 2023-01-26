"use client";

import { Steps } from "antd";

export default function Dashboard() {
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
    </div>
  );
}
