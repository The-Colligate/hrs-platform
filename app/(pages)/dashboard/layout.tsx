"use client";

import { NavigatorTabs } from "@/components/common";
import { CopyIcon } from "@/icons";
import { Avatar, Form, Input, Steps } from "antd";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();

  const buttonTabs = [
    {
      name: "Activity",
      href: "/dashboard/activity",
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
    <div className="w-full h-screen grid grid-cols-10 overflow-hidden">
      <div className="h-full col-span-10 grid grid-cols-10 overflow-hidden">
        <div className="h-full col-span-2 flex flex-col p-5 bg-white pt-10 shadow-lg">
          <p className="text-center text-primary-high mb-10">Welcome, Wale</p>
          <Avatar
            className="mx-auto mb-10"
            src="/boss.png"
            size={100}
          />
          <p className="text-sm mb-4">EMPLOYEE DETAILS</p>
          <Form layout="vertical">
            <Form.Item>
              <label className="text-xs">First name</label>
              <Form.Item
                name="firstName"
                noStyle
              >
                <Input
                  className="bg-secondary-low p-2"
                  bordered={false}
                  placeholder="First name"
                />
              </Form.Item>
            </Form.Item>
            <Form.Item>
              <label className="text-xs">Last name</label>
              <Form.Item
                name="lastName"
                noStyle
              >
                <Input
                  className="bg-secondary-low p-2"
                  bordered={false}
                  placeholder="Last name"
                />
              </Form.Item>
            </Form.Item>
            <Form.Item>
              <label className="text-xs">Email Address</label>
              <Form.Item
                name="email"
                noStyle
              >
                <Input
                  className="bg-secondary-low p-2"
                  bordered={false}
                  type="email"
                  placeholder="Email"
                  value="wale.ajisebutu@21ctl.com"
                  suffix={<CopyIcon className="opacity-70 cursor-pointer" />}
                />
              </Form.Item>
            </Form.Item>
            <Form.Item>
              <label className="text-xs">Phone Number</label>
              <Form.Item
                name="phoneNumber"
                noStyle
              >
                <Input
                  className="bg-secondary-low p-2"
                  bordered={false}
                  placeholder="Phone number"
                  value="+234 8076367487"
                  suffix={<CopyIcon className="opacity-70 cursor-pointer" />}
                />
              </Form.Item>
            </Form.Item>
            <Form.Item>
              <label className="text-xs">Job Title</label>
              <Form.Item
                name="jobTitle"
                noStyle
              >
                <Input
                  className="bg-secondary-low p-2"
                  bordered={false}
                  placeholder="Job title"
                  value="Vice Chairman/CEO"
                />
              </Form.Item>
            </Form.Item>
          </Form>
        </div>
        <div className="col-span-8 p-3 h-full flex flex-col overflow-hidden">
          <div className="p-5">
            <div className="p-5 rounded-2xl bg-primary-low">
              <Steps
                size="small"
                labelPlacement="vertical"
                current={2}
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
            <NavigatorTabs
              className="mt-10"
              buttonTabs={buttonTabs}
            />
          </div>
          <div className="flex flex-col flex-grow overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
