"use client";

import { LeaveProgress } from "@/components/common";
import { ChevronDownIcon, ChevronRightIcon } from "@/icons";
import { statusToColor } from "@/utils";
import { Button, Card, Checkbox, DatePicker, Popover, Table, Tag } from "antd";
import { format, subDays } from "date-fns";
import Link from "next/link";

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
];

export default function Leave() {
  return (
    <div className="w-full h-full flex flex-col flex-grow p-5 overflow-auto custom_scrollbar">
      <div className="flex justify-between mb-5">
        <p className="text-2xl">Available Leave</p>
        <Link
          href="/leave/all"
          className="text-active flex items-center"
        >
          See All <ChevronRightIcon className="ml-2" />
        </Link>
      </div>
      <div className="w-full grid grid-cols-10 gap-5 mb-5">
        {data.map((item) => (
          <Card
            key={item.name}
            className="col-span-2 shadow h-min"
          >
            <LeaveProgress
              used={item.used}
              total={item.total}
              color={item.color}
              active={item.used < item.total}
            />
            <div className="flex flex-col items-center mt-5">
              <p className={`text-3xl font-semibold ${item.textColorClass}`}>
                {item.name}
              </p>
              <Button
                className={`${item.bgColor} text-white mt-5`}
                size="large"
                disabled={item.used >= item.total}
              >
                Apply
              </Button>
            </div>
          </Card>
        ))}
      </div>
      <Card className="col-span-10 shadow">
        <div className="flex justify-between w-full">
          <p className="uppercase font-semibold text-lg">Leave Log</p>
          <div className="flex gap-3">
            <Popover
              placement="bottom"
              content={
                <div>
                  <p>Status</p>
                  <Checkbox.Group
                    value={["All"]}
                    className="flex flex-col space-x-0 mb-2"
                  >
                    <Checkbox value="All">All</Checkbox>
                    <Checkbox value="Approved">Approved</Checkbox>
                    <Checkbox value="Pending">Pending</Checkbox>
                    <Checkbox value="Declined">Declined</Checkbox>
                  </Checkbox.Group>
                  <p>Type</p>
                  <Checkbox.Group
                    value={["All"]}
                    className="flex flex-col space-x-0"
                  >
                    <Checkbox value="All">All</Checkbox>
                    <Checkbox value="Vacation">Vacation</Checkbox>
                    <Checkbox value="Sick Leave">Sick Leave</Checkbox>
                    <Checkbox value="Parental">Parental</Checkbox>
                  </Checkbox.Group>
                </div>
              }
              trigger="click"
            >
              <Button
                size="large"
                className="flex items-center"
              >
                Filter <ChevronDownIcon className="ml-2" />
              </Button>
            </Popover>
            <DatePicker
              picker="month"
              size="large"
            />
          </div>
        </div>
        <Table
          dataSource={leaveDataSource}
          columns={leaveColumns}
          pagination={{
            position: ["bottomCenter"],
          }}
          className="mt-5"
          bordered={false}
          size="large"
        />
      </Card>
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
