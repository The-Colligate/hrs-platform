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
        <p className="w-full flex justify-between items-center gap-5 py-5">
          <hr className="w-full h-1" />
          <span className="whitespace-nowrap">
            {renderDateLine(message.time)}
          </span>
          <hr className="w-full h-1" />
        </p>
      )}
      <div
        className={`w-full flex flex-col ${mine ? "items-end" : "items-start"}`}
      >
        <div className="flex">
          {!mine && (
            <Avatar
              size={40}
              className="mr-2"
            />
          )}
          <div>
            <div
              className={`bg-white p-4 mb-1 whitespace-pre-wrap  ${
                mine
                  ? "rounded-l-lg rounded-tr-lg"
                  : "rounded-r-lg rounded-tl-lg"
              }`}
              dangerouslySetInnerHTML={{
                __html: message.text,
              }}
            ></div>
            <p
              className={`text-xs text-secondary-high mr-2 ${
                mine ? "text-right" : ""
              }`}
            >
              {message.time.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
