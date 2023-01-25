"use client";

import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  CalendarIcon,
  DashboardIcon,
  DocumentIcon,
  MessagesIcon,
  ScriptTextPlayIcon,
} from "@/icons";

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
      icon: <DocumentIcon />,
      href: "/attendance",
    },
    {
      name: "Messages",
      icon: <MessagesIcon />,
      href: "/messages",
    },
    {
      name: "Leave",
      icon: <CalendarIcon />,
      href: "/leave",
    },
    {
      name: "Payroll",
      icon: <ScriptTextPlayIcon />,
      href: "/payroll",
    },
  ];

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="w-full h-screen grid grid-cols-12 text-white">
          <div className="min-h-full col-span-2 flex flex-col p-5 bg-primary">
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
                <Link key={link.name} href={link.href}>
                  <p
                    className={`flex p-3 rounded-xl text-light hover:bg-light hover:bg-opacity-30 ${
                      path?.startsWith(link.href) ? "bg-white text-primary" : ""
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
              <button className="bg-white py-3 px-6 text-primary rounded-xl font-semibold">
                Contact us
              </button>
            </div>
          </div>
          <div className="col-span-10">
            <div>
              <p>Search</p>
            </div>
            <div>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
