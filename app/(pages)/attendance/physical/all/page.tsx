"use client";

import { ChevronDownIcon } from "@/icons";
import { statusToColor } from "@/utils";
import { Button, Card, Checkbox, DatePicker, Popover, Table, Tag } from "antd";
import { format, subHours } from "date-fns";

export default function AllPhysical() {
  return (
    <div className="w-full h-full grid grid-cols-11 gap-5 flex-grow p-5 largeTablet:p-3">
      <Card className="col-span-11 shadow">
        <div className="flex justify-between w-full smallTablet:flex-col">
          <p className="uppercase font-semibold text-lg">Attendance</p>
          <div className="flex gap-3 smallTablet:my-3">
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
          pagination={{
            position: ["bottomCenter"],
          }}
          className="mt-5 smallTablet:mt-0 smallTablet:-mb-5"
          bordered={false}
          scroll={{ x: 600 }}
        />
      </Card>
    </div>
  );
}

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
    key: "2",
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
  {
    key: "5",
    date: new Date(),
    checkIn: subHours(new Date(), 8),
    checkOut: new Date(),
    type: "Physical",
    status: "Early",
  },
  {
    key: "6",
    date: new Date(),
    checkIn: subHours(new Date(), 8),
    checkOut: new Date(),
    type: "Online",
    status: "Early",
  },
  {
    key: "7",
    date: new Date(),
    checkIn: subHours(new Date(), 8),
    checkOut: new Date(),
    type: "Physical",
    status: "Late",
  },
  {
    key: "8",
    date: new Date(),
    checkIn: subHours(new Date(), 8),
    checkOut: new Date(),
    type: "Physical",
    status: "Late",
  },
  {
    key: "9",
    date: new Date(),
    checkIn: subHours(new Date(), 8),
    checkOut: new Date(),
    type: "Physical",
    status: "Early",
  },
  {
    key: "10",
    date: new Date(),
    checkIn: subHours(new Date(), 8),
    checkOut: new Date(),
    type: "Online",
    status: "Early",
  },
];

const attendanceColumns: {
  title: string;
  dataIndex: string;
  key: string;
  render?: (value: any) => JSX.Element;
  fixed?: "left" | "right";
}[] = [
  {
    title: "Date",
    dataIndex: "date",
    key: "key",
    render: (value: Date) => (
      <p className="whitespace-nowrap">{format(value, "MMM dd, yyyy")}</p>
    ),
    fixed: "left",
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
