"use client";

import { ChevronLeftIcon } from "@/icons";
import { Button } from "antd";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface NavigatorTabsProps {
  buttonTabs: {
    href: string;
    name: string;
  }[];
  className?: string;
}

export const NavigatorTabs = (props: NavigatorTabsProps) => {
  const { buttonTabs, className } = props;

  const router = useRouter();
  const path = usePathname();

  const checkForNestedPage = (
    tabs: {
      href: string;
      name: string;
    }[],
  ) => {
    let isExact = false;

    for (let i = 0; i < tabs.length; i++) {
      if (tabs[i].href === path) isExact = true;
    }

    return !isExact;
  };

  const isNested = checkForNestedPage(buttonTabs);

  return (
    <div className={`flex items-center ${className}`}>
      {isNested && (
        <Button
          className="bg-white mr-2 flex items-center"
          icon={<ChevronLeftIcon />}
          size="large"
          onClick={() => router.back()}
        />
      )}
      <div className="flex items-center bg-white w-min rounded-lg">
        {buttonTabs.map((tab) => {
          const active = path?.startsWith(tab.href);

          return (
            <Link
              key={tab.name}
              href={tab.href}
            >
              <Button
                size="large"
                type={active ? "default" : "text"}
                className={`${
                  active
                    ? "bg-active text-white shadow hover:!text-white"
                    : "hover:text-black"
                }`}
              >
                {tab.name}
              </Button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
