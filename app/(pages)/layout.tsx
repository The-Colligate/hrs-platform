"use client";

import {
  CalendarIcon,
  ClipboardTaskFilledIcon,
  CloseIcon,
  DashboardIcon,
  LeaveIcon,
  MenuIcon,
  MessagesIcon,
  NairaCashIcon,
  NotificationIcon,
  SearchIcon,
} from "@/icons";
import "@/styles/globals.scss";
import { Avatar, Button, ConfigProvider, Input } from "antd";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const router = useRouter();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarLinks = [
    {
      name: "Dashboard",
      icon: <DashboardIcon />,
      href: "/dashboard/activity",
    },
    {
      name: "Attendance",
      icon: <ClipboardTaskFilledIcon />,
      href: "/attendance/physical",
    },
    {
      name: "Calendar",
      icon: <CalendarIcon />,
      href: "#",
    },
    {
      name: "Payroll",
      icon: <NairaCashIcon />,
      href: "#",
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
    colorLink: string;
  };

  const customTheme: ThemeData = {
    borderRadius: 8,
    colorPrimary: "#283E55",
    colorSecondary: "#E0E5EC",
    colorLink: "#283E55",
  };

  return (
    <ConfigProvider theme={{ token: { ...customTheme } }}>
      <html lang="en">
        {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head />
        <body className="custom_scrollbar bg-secondary-low overflow-hidden">
          <div className="max-w-full h-screen grid grid-cols-12 overflow-hidden largeTablet:overflow-y-visible largeTablet:grid-cols-10">
            <div
              className={`h-screen col-span-2 flex flex-col p-5 bg-primary-high text-white largeTablet:absolute largeTablet:z-10 largeTablet:w-9/12 largeTablet:h-full ${
                sidebarOpen
                  ? "largeTablet:translate-x-0"
                  : "largeTablet:-translate-x-full"
              } largeTablet:overflow-hidden largeTablet:transition-all largeTablet:duration-300 largeTablet:ease-in-out largeTablet:shadow-lg largeTablet:rounded-r-3xl`}
            >
              <div className="flex justify-center mb-10 largeTablet:hidden">
                <Image
                  src="/logo_dark.png"
                  alt="21st Century Technologies logo"
                  width={76}
                  height={73}
                />
              </div>
              <div className="hidden items-center mb-10 largeTablet:flex">
                <Avatar
                  className="mr-3"
                  src="/boss.png"
                  size={70}
                />
                <div>
                  <p>Wale Ajisebutu</p>
                  <p className="text-xs text-secondary-high">CEO</p>
                </div>
              </div>
              <div className="w-full max-h-full flex flex-col space-y-5 flex-grow">
                {sidebarLinks.map((link) => (
                  <p
                    key={link.name}
                    role="button"
                    className={`flex p-3 rounded-xl text-secondary-low hover:bg-secondary-low hover:bg-opacity-30 ${
                      path?.startsWith(link.href)
                        ? "bg-white text-primary-high"
                        : ""
                    }`}
                    onClick={() => {
                      router.push(link.href);
                      setSidebarOpen(false);
                    }}
                  >
                    <span className="mr-4">{link.icon}</span>
                    {link.name}
                  </p>
                ))}
              </div>
              <div className="flex flex-col items-center justify-self-end space-y-3 largeTablet:hidden">
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
            <div className="col-span-10 h-full flex flex-col overflow-hidden bg-secondary-low largeTablet:overflow-y-visible ">
              <div className="flex items-center p-1 largeTablet:justify-between">
                <Button
                  type="text"
                  className="hidden largeTablet:block"
                  icon={<MenuIcon className="opacity-50" />}
                  onClick={() => setSidebarOpen(true)}
                />
                <div className="flex w-full justify-center largeTablet:hidden">
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

          {sidebarOpen && (
            <>
              <div
                className="bg-white rounded-full p-4 absolute z-10 right-2 top-2"
                role="button"
                onClick={() => setSidebarOpen(false)}
              >
                <CloseIcon />
              </div>
              <div className="w-screen h-screen bg-black bg-opacity-30 absolute top-0"></div>
            </>
          )}
        </body>
      </html>
    </ConfigProvider>
  );
}
