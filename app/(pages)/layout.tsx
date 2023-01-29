"use client";

import {
  CalendarIcon,
  ClipboardTaskFilledIcon,
  DashboardIcon,
  LeaveIcon,
  MessagesIcon,
  NairaCashIcon,
  NotificationIcon,
  SearchIcon,
} from "@/icons";
import "@/styles/globals.scss";
import { Avatar, Button, ConfigProvider, Input } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();

  const sidebarLinks = [
    {
      name: "Dashboard",
      icon: <DashboardIcon />,
      href: "/dashboard",
    },
    {
      name: "Attendance",
      icon: <ClipboardTaskFilledIcon />,
      href: "/attendance",
    },
    {
      name: "Calendar",
      icon: <CalendarIcon />,
      href: "/calendar",
    },
    {
      name: "Payroll",
      icon: <NairaCashIcon />,
      href: "/payroll",
    },
    {
      name: "Leave",
      icon: <LeaveIcon />,
      href: "/leave",
    },
    {
      name: "Messages",
      icon: <MessagesIcon />,
      href: "/messages",
    },
  ];

  type ThemeData = {
    borderRadius: number;
    colorPrimary: string;
    colorSecondary: string;
  };

  const customTheme: ThemeData = {
    borderRadius: 8,
    colorPrimary: "#283E55",
    colorSecondary: "#E0E5EC",
  };

  return (
    <ConfigProvider theme={{ token: { ...customTheme } }}>
      <html lang="en">
        {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head />
        <body>
          <div className="w-full h-screen grid grid-cols-12 overflow-hidden">
            <div className="h-screen col-span-2 flex flex-col p-5 bg-primary-high text-white">
              <div className="flex justify-center mb-10">
                <Image
                  src="/logo_dark.png"
                  alt="21st Century Technologies logo"
                  width={76}
                  height={73}
                />
              </div>
              <div className="w-full max-h-full flex flex-col space-y-5 flex-grow">
                {sidebarLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                  >
                    <p
                      className={`flex p-3 rounded-xl text-secondary-low hover:bg-secondary-low hover:bg-opacity-30 ${
                        path?.startsWith(link.href)
                          ? "bg-white text-primary-high"
                          : ""
                      }`}
                    >
                      <span className="mr-4">{link.icon}</span>
                      {link.name}
                    </p>
                  </Link>
                ))}
              </div>
              <div className="flex flex-col items-center justify-self-end space-y-3">
                <p className="font-semibold">Hello, Wale</p>
                <p>Do you need any help?</p>
                <Button
                  className="bg-white"
                  size="large"
                >
                  Contact us
                </Button>
              </div>
            </div>
            <div className="col-span-10 h-screen flex flex-col overflow-hidden bg-secondary-low">
              <div className="flex items-center col-span-10 p-1">
                <div className="flex w-full justify-center">
                  <Input
                    placeholder="Search"
                    className="rounded-full max-w-md px-3 py-2"
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
                    <Avatar
                      className="m-2"
                      src="/boss.png"
                      size={36}
                    />
                  </div>
                </div>
              </div>
              {children}
            </div>
          </div>
        </body>
      </html>
    </ConfigProvider>
  );
}
