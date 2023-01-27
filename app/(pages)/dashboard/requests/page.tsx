"use client";

import { resolvePriorityColor } from "@/utils";
import { ComposeIcon } from "@/icons";
import { Avatar, Button, Card } from "antd";
import { format } from "date-fns";
import { PriorityStatus } from "@/types";

const { Meta } = Card;

export default function Attachments() {
  const requests = [
    {
      id: 1,
      title: "Request for Air Conditioning repair",
      description: `
        <div>
          <p>
            I am writing to request an air conditioning repair for our office. The unit is located in the glass house. The issue is that the AC is not blowing cool air and it is causing discomfort for the staff.
          </p>
          <p>
            As the temperature is increasing, it is becoming increasingly difficult for staff to work in the current conditions. A prompt repair would be greatly appreciated.
          </p>
          <p>
            Please let me know if there is any additional information you need or if you have any questions.
          </p>
          <p>
            Thank you for your time and attention to this matter.
          </p>
        </div>
      `,
      priority: "High",
      time: new Date(),
    },
  ];
  return (
    <div className="w-full h-full flex flex-col flex-grow overflow-auto custom_scrollbar p-5 pt-0">
      <div className="flex justify-end mb-5">
        <Button className="flex bg-white text-primary-high" size="large">
          Compose <ComposeIcon className="ml-2" />
        </Button>
      </div>
      {requests.map((request) => {
        return (
          <Card
            key={request.id}
            title={null}
            // extra={<a href="#">More</a>}
            className="w-full mb-3 shadow_hover"
          >
            <Meta
              title={
                <div className="flex items-center">
                  <Avatar src="/boss.png" className="mr-4" />
                  <div>
                    <p>{request.title}</p>
                    <p className="text-xs font-light">
                      {format(request.time, "hh:mm aa")}
                    </p>
                  </div>
                  <div className="flex items-center self-start ml-4">
                    <div
                      className={`${resolvePriorityColor(
                        request.priority as PriorityStatus
                      )} rounded w-4 h-4 mr-2`}
                    />
                    <p className="text-sm font-light">{request.priority}</p>
                  </div>
                </div>
              }
              description={
                <div className="text-black">
                  <div
                    className="html_content"
                    dangerouslySetInnerHTML={{
                      __html: request.description,
                    }}
                  ></div>
                </div>
              }
            />
          </Card>
        );
      })}
    </div>
  );
}
