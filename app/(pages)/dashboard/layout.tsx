"use client";

import { Avatar, Button, Form, Input, Steps } from "antd";
import { CopyIcon, NotificationIcon, SearchIcon } from "@/app/icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function RootLayout({
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
      <div className="h-screen col-span-2 flex flex-col p-5 bg-white pt-10 shadow-lg">
        <p className="text-center text-primary-high mb-10">Welcome, Wale</p>
        <Avatar className="mx-auto mb-10" src="/boss.png" size={100} />
        <p className="text-sm mb-4">EMPLOYEE DETAILS</p>
        <Form layout="vertical">
          <Form.Item>
            <label className="text-xs">First name</label>
            <Form.Item name="firstName" noStyle>
              <Input
                className="bg-secondary-low p-2"
                bordered={false}
                placeholder="First name"
              />
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <label className="text-xs">Last name</label>
            <Form.Item name="lastName" noStyle>
              <Input
                className="bg-secondary-low p-2"
                bordered={false}
                placeholder="Last name"
              />
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <label className="text-xs">Email Address</label>
            <Form.Item name="email" noStyle>
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
            <Form.Item name="phoneNumber" noStyle>
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
            <Form.Item name="jobTitle" noStyle>
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
      <div className="col-span-8 p-3 h-screen flex flex-col overflow-hidden">
        <div className="flex items-center">
          <div className="flex w-full justify-center">
            <Input
              placeholder="Search"
              className="rounded-full border-none max-w-md px-3 py-2"
              prefix={<SearchIcon className="text-secondary-high" />}
            />
          </div>
          <div className="flex items-center ml-2">
            <Button
              icon={<NotificationIcon />}
              className="text-secondary-high border-none"
            />

            <div className="h-6 border-r ml-2 border-primary-high"></div>
            <div className="rounded-full border-primary-high">
              <Avatar className="m-2" src="/boss.png" size={36} />
            </div>
          </div>
        </div>
        <div className="p-5">
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
          <div className="flex items-center bg-white w-min rounded-lg mt-10">
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
        <div className="flex flex-col flex-grow overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
