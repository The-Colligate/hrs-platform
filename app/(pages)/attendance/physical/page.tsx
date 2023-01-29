"use client";

import { ColorIndicator } from "@/components/common";
import { ChevronDownIcon, HeartIcon } from "@/icons";
import { statusToColor } from "@/utils";
import {
  Button,
  Card,
  Checkbox,
  DatePicker,
  Popover,
  Progress,
  Table,
  Tag,
} from "antd";
import { format, subDays, subHours } from "date-fns";
import Link from "next/link";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Present",
    value: 65,
    color: "#283E55",
  },
  {
    name: "Excuses",
    value: 10,
    color: "#687788",
  },
  {
    name: "Expected",
    value: 10,
    color: "#A9B1BB",
  },
  {
    name: "Unassigned",
    value: 15,
    color: "#DDDDDD",
  },
];

export default function Physical() {
  return (
    <div className="w-full h-full grid grid-cols-11 grid-rows-2 gap-5 flex-grow p-5">
      <Card
        className="col-span-6 shadow"
        bodyStyle={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
        }}
      >
        <div className="flex justify-between w-full">
          <p className="uppercase font-semibold text-lg">Attendance</p>
          <DatePicker
            picker="month"
            size="large"
          />
        </div>
        <div className="w-full max-w-4xl h-full grid grid-cols-4">
          <div className="col-span-3">
            <ResponsiveContainer
              aspect={1}
              height="100%"
            >
              <PieChart
              // onMouseEnter={this.onPieEnter}
              >
                <Pie
                  data={data}
                  cx={"35%"}
                  cy={180}
                  innerRadius={90}
                  outerRadius={130}
                  fill="#8884d8"
                  paddingAngle={0}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      className="rounded-full"
                      fill={entry.color}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <ul className="col-span-1 mt-16">
            {data.slice(0, -1).map((entry) => (
              <li
                key={entry.name}
                className="flex items-center mb-3s"
              >
                <ColorIndicator
                  className="mr-2"
                  style={{ backgroundColor: entry.color }}
                />
                <div className="">
                  <p className="text-lg">{entry.name}</p>
                  <p className="text-center text-secondary-high">
                    {entry.value}%
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Card>
      <Card className="col-span-5 shadow">
        <div className="flex justify-between">
          <p className="flex items-center text-lg font-semibold">
            <HeartIcon className="text-bright-red mr-2" /> LEAVES
          </p>
          <Button
            className="bg-bright-red text-white"
            size="large"
          >
            Request Leave
          </Button>
        </div>
        <div className="flex items-center gap-5 max-w-lg  mx-auto mt-5">
          <div className="text-center">
            <p className="text-4xl">4</p>
            <p className="text-secondary-high">Used</p>
          </div>
          <Progress
            percent={40}
            status="active"
            showInfo={false}
            strokeColor="#283E55"
          />
          <div className="text-center">
            <p className="text-4xl">6</p>
            <p className="text-secondary-high">Left</p>
          </div>
        </div>
        <Table
          dataSource={leaveDataSource}
          columns={leaveColumns}
          pagination={false}
          className="mt-5"
          bordered={false}
          size="middle"
        />
      </Card>
      <Card className="col-span-11 shadow">
        <div className="flex justify-between w-full">
          <p className="uppercase font-semibold text-lg">Attendance</p>
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
          dataSource={atendanceDataSource}
          columns={attendanceColumns}
          pagination={false}
          className="mt-5"
          bordered={false}
          size="middle"
        />
        <div className="flex justify-end mt-5">
          <Link
            href="/attendance/physical/all"
            className="text-active"
          >
            View all
          </Link>
        </div>
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
    render: (value: string) => (
      <p className={`${statusToColor(value)}`}>{value}</p>
    ),
  },
];

const atendanceDataSource = [
  {
    key: "1",
    date: new Date(),
    checkIn: subHours(new Date(), 8),
    checkOut: new Date(),
    type: "Physical",
    status: "Early",
  },
  {
    key: "8",
    date: new Date(),
    checkIn: subHours(new Date(), 8),
    checkOut: new Date(),
    type: "Online",
    status: "Early",
  },
  {
    key: "3",
    date: new Date(),
    checkIn: subHours(new Date(), 8),
    checkOut: new Date(),
    type: "Physical",
    status: "Late",
  },
  {
    key: "4",
    date: new Date(),
    checkIn: subHours(new Date(), 8),
    checkOut: new Date(),
    type: "Physical",
    status: "Late",
  },
];

const attendanceColumns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "key",
    render: (value: Date) => <p>{format(value, "MMM dd, yyyy")}</p>,
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "key",
  },
  {
    title: "Check In",
    dataIndex: "checkIn",
    key: "key",
    render: (value: Date) => <p>{format(value, "hh:mm aa")}</p>,
  },
  {
    title: "Check Out",
    dataIndex: "checkOut",
    key: "key",
    render: (value: Date) => <p>{format(value, "hh:mm aa")}</p>,
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
