"use client";

import Image from "next/image";
import { Avatar, Button, Form, Input } from "antd";
import { CopyIcon, NotificationIcon, SearchIcon } from "@/icons";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen grid grid-cols-10">
      <div className="min-h-full col-span-2 flex flex-col p-5 bg-white pt-10 shadow-lg">
        <p className="text-center text-primary-high mb-10">Welcome, Wale</p>
        <Avatar className="mx-auto mb-10" src="/boss.png" size={100} />
        <p className="text-sm mb-4">EMPLOYEE DETAILS</p>
        <Form layout="vertical">
          <Form.Item name="firstName">
            <label className="text-xs">First name</label>
            <Input
              className="bg-secondary-low p-2"
              bordered={false}
              placeholder="First name"
              value="Wale"
            />
          </Form.Item>
          <Form.Item name="lastName">
            <label className="text-xs">Last name</label>
            <Input
              className="bg-secondary-low p-2"
              bordered={false}
              placeholder="Last name"
              value="Ajisebutu"
            />
          </Form.Item>
          <Form.Item name="email">
            <label className="text-xs">Email Address</label>
            <Input
              className="bg-secondary-low p-2"
              bordered={false}
              type="email"
              placeholder="Email"
              value="wale.ajisebutu@21ctl.com"
              suffix={<CopyIcon className="opacity-70 cursor-pointer" />}
            />
          </Form.Item>
          <Form.Item name="phoneNumber">
            <label className="text-xs">Phone Number</label>
            <Input
              className="bg-secondary-low p-2"
              bordered={false}
              placeholder="Phone number"
              value="+234 8076367487"
              suffix={<CopyIcon className="opacity-70 cursor-pointer" />}
            />
          </Form.Item>
          <Form.Item name="jobTitle">
            <label className="text-xs">Job Title</label>
            <Input
              className="bg-secondary-low p-2"
              bordered={false}
              placeholder="Job title"
              value="Vice Chairman/CEO"
            />
          </Form.Item>
        </Form>
      </div>
      <div className="col-span-8 p-3">
        <div className="flex items-center">
          <div className="flex flex-grow justify-center">
            <Input
              placeholder="Search"
              className="rounded-full border-none max-w-md px-3 py-2"
              prefix={<SearchIcon className="text-secondary-high" />}
            />
          </div>
          <div className="flex items-center">
            <div className="text-secondary-high">
              <NotificationIcon />
            </div>
            <div className="h-6 border-r ml-2 border-primary-high"></div>
            <div className="rounded-full border-primary-high">
              <Avatar className="m-2" src="/boss.png" size={36} />
            </div>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
