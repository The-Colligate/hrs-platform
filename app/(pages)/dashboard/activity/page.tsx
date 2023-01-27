"use client";

import { fileToIcon, resolvePriorityColor } from "@/utils";
import { VolumeHighIcon } from "@/icons";
import { PriorityStatus } from "@/types";
import { Avatar, Card } from "antd";
import { format } from "date-fns";
import Image from "next/image";

const { Meta } = Card;

export default function Dashboard() {
  const announcements = [
    {
      id: 1,
      title: "General Meeting",
      description: `<p>There would be an emergency meeting today at the digital Hub
                  glass house today. The meeting would be held to discuss the
                  future of the company. Do well to be present</p>`,
      priority: "Medium",
      time: new Date(),
      createdBy: "HR",
      attachments: [
        {
          id: 1,
          name: "Future of the company.pdf",
          size: "50kb",
        },
      ],
    },
    {
      id: 2,
      title: "Engineering Standup",
      description: `<p>This is to inform you that the engineering standup has been moved from glasshouse to the training center and shall hold 30 mins earlier (7:30am)</p>`,
      priority: "High",
      time: new Date(),
      createdBy: "Dr Okoro",
    },
    {
      id: 3,
      title: "HR-related Updates",
      description: `
        <div>
          <p>Attention all employees,</p>
          <p>
            As a reminder, the Human Resources department is here to support and assist you in any way we can. If you have any questions or concerns related to your employment, please do not hesitate to reach out to us.
          </p>
          <p>Additionally, please be aware of the following HR-related updates:</p>
          <ul>
            <li>Introduction of new performance evaluation process</li>
            <li>Job fair for internal promotions and transfers</li>
            <li>Introduction of flexible work schedule policy to support work-life balance.</li>
          </ul>
          <p>
            Thank you for your attention, and please do not hesitate to contact us if you need any assistance.
          </p>
          <p>Best,<p>
          <p>Wale Ajisebutu</p> 
          <p>Human Resources Department</>
        </div>
      `,
      priority: "Low",
      time: new Date(),
      createdBy: "HR",
    },
  ];
  return (
    <div className="max-w-4xl h-full flex flex-col flex-grow overflow-auto custom_scrollbar p-5 pt-0">
      <p className="mb-2 font-semibold">Today</p>
      {announcements.map((announcement) => {
        return (
          <Card
            key={announcement.id}
            title={
              <p className="flex">
                <VolumeHighIcon className="text-primary-high mr-2" /> Broadcast
                Created by {announcement.createdBy}
              </p>
            }
            // extra={<a href="#">More</a>}
            className="w-full mb-3 shadow_hover"
          >
            <Meta
              avatar={<Avatar src="/boss.png" />}
              title={
                <div className="flex justify-between items-start">
                  <div>
                    <p>{announcement.title}</p>
                    <p className="text-xs font-light">
                      {format(announcement.time, "hh:mm aa")}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div
                      className={`${resolvePriorityColor(
                        announcement.priority as PriorityStatus
                      )} rounded w-4 h-4 mr-2`}
                    />
                    <p className="text-sm font-light">
                      {announcement.priority}
                    </p>
                  </div>
                </div>
              }
              description={
                <div className="text-black">
                  <div
                    className="html_content"
                    dangerouslySetInnerHTML={{
                      __html: announcement.description,
                    }}
                  ></div>
                  <div className="flex flex-wrap gap-5">
                    {announcement.attachments &&
                      announcement.attachments.map((attachment) => {
                        const { icon } = fileToIcon(attachment.name);
                        return (
                          <div
                            className="flex items-center rounded-lg border divide-x cursor-pointer"
                            key={attachment.id}
                          >
                            <div className="p-3">
                              <Image
                                alt={icon}
                                src={icon}
                                width={30}
                                height={30}
                              />
                            </div>
                            <div className="p-3">
                              <p className="font-semibold">{attachment.name}</p>
                              <p className="text-sm">{attachment.size}</p>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              }
            />
          </Card>
        );
      })}
    </div>
  );
}
