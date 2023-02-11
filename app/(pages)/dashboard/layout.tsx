"use client";

import { NavigatorTabs } from "@/components/common";
import { CopyIcon } from "@/icons";
import { Avatar, Button, Form, Input, Steps } from "antd";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [currentStep, setCurrentStep] = useState(3);

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

  const defaultFormValues = {
    firstName: "Wale",
    lastName: "Ajisebutu",
    email: "wale.ajisebutu@21ctl.com",
    phoneNumber: "+234 8076367487",
    jobTitle: "Vice Chairman/CEO",
    department: "Management",
    division: "People",
  };

  return (
    <div className="h-full w-full grid grid-cols-10 overflow-hidden pb-3 largeTablet:overflow-y-visible largeTablet:grid-cols-8">
      <div className="h-full col-span-2 flex flex-col p-5 bg-white pt-10 shadow-lg largeTablet:hidden">
        <p className="text-center text-primary-high mb-10">Welcome, Wale</p>
        <Avatar
          className="mx-auto mb-10"
          src="/boss.png"
          size={100}
        />
        <p className="text-sm mb-4">EMPLOYEE DETAILS</p>
        <Form
          layout="vertical"
          initialValues={defaultFormValues}
        >
          <Form.Item>
            <label className="text-xs">First name</label>
            <Form.Item
              name="firstName"
              noStyle
            >
              <Input
                className="bg-secondary-low border-secondary-low p-2"
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
                className="bg-secondary-low border-secondary-low p-2"
                placeholder="Last name"
              />
            </Form.Item>
          </Form.Item>
          <Form.Item className="relative">
            <label className="text-xs">Email Address</label>
            <Form.Item
              name="email"
              className="relative"
              noStyle
            >
              <Input
                className="bg-secondary-low border-secondary-low p-2 pr-10"
                type="email"
                placeholder="Email"
              />
            </Form.Item>
            <Button
              type="text"
              icon={<CopyIcon className="opacity-70" />}
              className="absolute right-0 bottom-1 w-min"
            />
          </Form.Item>
          <Form.Item className="relative">
            <label className="text-xs">Phone Number</label>
            <Form.Item
              name="phoneNumber"
              noStyle
            >
              <Input
                className="bg-secondary-low border-secondary-low p-2 pr-10"
                placeholder="Phone number"
              />
            </Form.Item>
            <Button
              type="text"
              icon={<CopyIcon className="opacity-70" />}
              className="absolute right-0 bottom-1 w-min"
            />
          </Form.Item>
          <Form.Item>
            <label className="text-xs">Job Title</label>
            <Form.Item
              name="jobTitle"
              noStyle
            >
              <Input
                className="bg-secondary-low border-secondary-low p-2"
                placeholder="Job title"
              />
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <label className="text-xs">Department</label>
            <Form.Item
              name="department"
              noStyle
            >
              <Input
                className="bg-secondary-low border-secondary-low p-2"
                placeholder="Department"
              />
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <label className="text-xs">Division</label>
            <Form.Item
              name="division"
              noStyle
            >
              <Input
                className="bg-secondary-low border-secondary-low p-2"
                placeholder="Division"
              />
            </Form.Item>
          </Form.Item>
        </Form>
      </div>
      <div className="col-span-8 px-3 h-full flex flex-col overflow-hidden largeTablet:overflow-y-visible">
        <div className="p-5 largeTablet:p-0">
          {showOnboarding && (
            <div className="p-5 rounded-2xl bg-primary-low largeTablet:p-3 overflow-auto">
              <Steps
                size="small"
                labelPlacement="vertical"
                current={currentStep}
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
                onChange={(step) => setCurrentStep(step)}
              />
            </div>
          )}
          <div
            className={`flex justify-end ${showOnboarding ? "mt-2" : "mt-0"}`}
          >
            <Button
              type="link"
              size="small"
              onClick={() => setShowOnboarding(!showOnboarding)}
            >
              {showOnboarding ? "Hide" : "Show"} Onboarding Progress
            </Button>
          </div>
          <NavigatorTabs
            className="mt-10 w-min largeTablet:mt-2 smallTablet:w-full"
            buttonTabs={buttonTabs}
          />
        </div>
        <div className="flex flex-col flex-grow overflow-hidden largeTablet:mt-3 largeTablet:overflow-y-visible">
          {children}
        </div>
      </div>
    </div>
  );
}
