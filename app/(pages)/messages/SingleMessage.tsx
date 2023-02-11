"use client";

import { Avatar } from "antd";
import { format, isSameDay, isToday, isYesterday } from "date-fns";
import { MessageType } from "./types";

export default function SingleMessage({
  message,
  index,
  list,
}: {
  message: MessageType;
  index: number;
  list: MessageType[];
}) {
  const mine = message.user.id === 1;
  const prevMessage = list[index - 1];

  const showDateLine =
    !prevMessage || !isSameDay(prevMessage.time, message.time);

  const renderDateLine = (date: Date) => {
    if (isToday(date)) return "Today";
    if (isYesterday(date)) return "Yesterday";
    return format(date, "dd MMMM yyyy");
  };

  return (
    <div
      className="flex flex-col w-full mb-3"
      key={message.id}
    >
      {showDateLine && (
        <div className="w-full flex justify-between items-center gap-5 py-5">
          <hr className="w-full h-1" />
          <span className="whitespace-nowrap">
            {renderDateLine(message.time)}
          </span>
          <hr className="w-full h-1" />
        </div>
      )}
      <div
        className={`w-full flex flex-col ${
          mine ? "items-end pl-8" : "items-start pr-8"
        }`}
      >
        <div className="flex">
          {!mine && (
            <Avatar
              size={35}
              className="mr-2 min-w-[35px]"
            />
          )}
          <div>
            <div
              className={`bg-white p-4 mb-1 whitespace-pre-wrap  ${
                mine
                  ? "rounded-l-lg rounded-tr-lg"
                  : "rounded-r-lg rounded-tl-lg"
              } phone:p-2`}
            >
              {message.text}
            </div>
            <p
              className={`text-xs text-secondary-high mr-2 ${
                mine ? "text-right" : ""
              }`}
            >
              {format(message.time, "HH:mm aaa")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
