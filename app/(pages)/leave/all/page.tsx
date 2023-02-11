"use client";

import { LeaveProgress } from "@/components/common";
import { ChevronLeftIcon } from "@/icons";
import { statusToColor } from "@/utils";
import { Button, Card, Tag } from "antd";
import { format, subDays } from "date-fns";
import { useRouter } from "next/navigation";

const data = [
  {
    name: "Sick Leave",
    used: 4,
    total: 5,
    color: "#283E55",
    textColorClass: "text-[#283E55]",
    bgColor: "bg-[#283E55]",
  },
  {
    name: "Casual Leave",
    used: 1,
    total: 4,
    color: "#EA8146",
    textColorClass: "text-[#EA8146]",
    bgColor: "bg-[#EA8146]",
  },
  {
    name: "Holiday",
    used: 1,
    total: 4,
    color: "#66D1A1",
    textColorClass: "text-[#66D1A1]",
    bgColor: "bg-[#66D1A1]",
  },
  {
    name: "Parental",
    used: 0,
    total: 2,
    color: "#0076AD",
    textColorClass: "text-[#0076AD]",
    bgColor: "bg-[#0076AD]",
  },
  {
    name: "Beareavement",
    used: 3,
    total: 3,
    color: "#597322",
    textColorClass: "text-[#597322]",
    bgColor: "bg-[#597322]",
  },
  {
    name: "Vacation Leave",
    used: 3,
    total: 3,
    color: "#FE5D58",
    textColorClass: "text-[#FE5D58]",
    bgColor: "bg-[#FE5D58]",
  },
  {
    name: "Unpaid Leave",
    used: 3,
    total: 3,
    color: "#41287B",
    textColorClass: "text-[#41287B]",
    bgColor: "bg-[#41287B]",
  },
  {
    name: "Sabatical Leave",
    used: 1,
    total: 2,
    color: "#118C8F",
    textColorClass: "text-[#118C8F]",
    bgColor: "bg-[#118C8F]",
  },
  {
    name: "Time off as gift",
    used: 3,
    total: 4,
    color: "#1890FF",
    textColorClass: "text-[#1890FF]",
    bgColor: "bg-[#1890FF]",
  },
  {
    name: "Study Leave",
    used: 3,
    total: 3,
    color: "#D300D8",
    textColorClass: "text-[#D300D8]",
    bgColor: "bg-[#D300D8]",
  },
  {
    name: "Religious Observance",
    used: 3,
    total: 3,
    color: "#CA433F",
    textColorClass: "text-[#CA433F]",
    bgColor: "bg-[#CA433F]",
  },
];

export default function LeaveAll() {
  const router = useRouter();
  return (
    <div className="w-full h-full flex flex-col flex-grow p-5 largeTablet:p-3">
      <div className="flex items-center mb-5">
        <Button
          className="bg-white mr-2 flex items-center"
          icon={<ChevronLeftIcon className="ml-1" />}
          size="large"
          onClick={() => router.back()}
        />
        <p className="text-2xl smallTablet:text-xl">Available Leaves</p>
      </div>
      <div className="w-full grid grid-cols-5 gap-5 mb-5 largeTablet:gap-3 largeTablet:grid-cols-4 tablet:grid-cols-3 smallTablet:grid-cols-2 phone:grid-cols-1">
        {data.map((item) => (
          <Card
            key={item.name}
            className="col-span-1 shadow h-min"
          >
            <LeaveProgress
              used={item.used}
              total={item.total}
              color={item.color}
              active={item.used < item.total}
            />
            <div className="flex flex-col items-center mt-5">
              <p
                className={`text-xl font-semibold text-center ${item.textColorClass} text-center w-full overflow-hidden whitespace-nowrap text-ellipsis`}
              >
                {item.name}
              </p>
              <Button
                className={`${item.bgColor} text-white mt-5 border-none`}
                size="large"
                disabled={item.used >= item.total}
              >
                Apply
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

const leaveDataSource = [
  {
    key: "1",
    startDate: subDays(new Date(), 2),
    endDate: new Date(),
    type: "Sick Leave",
    status: "Pending",
  },
  {
    key: "2",
    startDate: subDays(new Date(), 2),
    endDate: new Date(),
    type: "Sick Leave",
    status: "Declined",
  },
  {
    key: "3",
    startDate: subDays(new Date(), 2),
    endDate: new Date(),
    type: "Vacation",
    status: "Approved",
  },
  {
    key: "4",
    startDate: subDays(new Date(), 2),
    endDate: new Date(),
    type: "Vacation",
    status: "Approved",
  },
  {
    key: "5",
    startDate: subDays(new Date(), 2),
    endDate: new Date(),
    type: "Sick Leave",
    status: "Pending",
  },
  {
    key: "6",
    startDate: subDays(new Date(), 2),
    endDate: new Date(),
    type: "Sick Leave",
    status: "Declined",
  },
  {
    key: "7",
    startDate: subDays(new Date(), 2),
    endDate: new Date(),
    type: "Vacation",
    status: "Approved",
  },
  {
    key: "8",
    startDate: subDays(new Date(), 2),
    endDate: new Date(),
    type: "Vacation",
    status: "Approved",
  },
];

const leaveColumns = [
  {
    title: "Leave Date",
    dataIndex: "startDate",
    key: "key",
    render: (
      value: Date,
      record: {
        key: string;
        startDate: Date;
        endDate: Date;
        type: string;
        status: string;
      },
    ) => (
      <p>
        {format(record.startDate, "MMM dd, yyyy")}&nbsp;-&nbsp;
        {format(record.endDate, "MMM dd, yyyy")}
      </p>
    ),
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "key",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "key",
    render: (value: string) => {
      const { textColor, bgColor } = statusToColor(value);
      return (
        <Tag className={`${textColor} ${bgColor} border-none px-2 py-1`}>
          {value}
        </Tag>
      );
    },
  },
];
