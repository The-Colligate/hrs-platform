"use client";

import {
  ChevronDownIcon,
  EmojiIcon,
  FilterIcon,
  MicrophoneIcon,
  OverflowMenuVerticalIcon,
  PaperclipIcon,
  PeopleAddIcon,
  PhoneIcon,
  SearchIcon,
  SendAltFilledIcon,
  VideoCameraIcon,
} from "@/icons";
import { Avatar, Button, Collapse, Input } from "antd";
import { format, isToday, isYesterday, subDays } from "date-fns";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import RoomListItem from "./RoomListItem";
import SingleMessage from "./SingleMessage";

const { Panel } = Collapse;

export default function Messages() {
  const router = useRouter();
  const query = useSearchParams();

  useEffect(() => {
    console.log(query.get("room"));
  }, [query]);

  const renderDateLine = (date: Date) => {
    if (isToday(date)) return "Today";
    if (isYesterday(date)) return "Yesterday";
    return format(date, "dd MMMM yyyy");
  };

  const onRoomSelected = (roomId: number) => {
    router.push(
      `/messages?${new URLSearchParams({ room: String(roomId) }).toString()}`,
    );
  };

  return (
    <div className="grid grid-cols-10 w-full h-full overflow-hidden">
      <div className="h-full col-span-2 flex flex-col bg-white p-2 shadow-lg">
        <div className="flex items-center mb-5">
          <Avatar
            className="m-2"
            src="/boss.png"
            size={50}
          />
          <div>
            <p className="font-semibold">Wale Ajisebutu</p>
            <p className="text-xs font-light flex items-center">
              At work <ChevronDownIcon />
            </p>
          </div>
          <OverflowMenuVerticalIcon className="ml-auto" />
        </div>
        <div className="flex items-center gap-1">
          <Input
            prefix={<SearchIcon className="text-secondary-high" />}
            placeholder="Search"
          />
          <Button
            icon={<FilterIcon className="text-primary-high" />}
            type="text"
          />
          <Button
            icon={<PeopleAddIcon className="text-primary-high" />}
            type="text"
          />
        </div>
        <Button
          type="link"
          className="self-start p-0"
        >
          Colleagues (100)
        </Button>
        <div className="mt-3">
          <Collapse
            defaultActiveKey={["public", "private"]}
            expandIconPosition="end"
            ghost
          >
            <Panel
              header={<p className="-ml-[14px]">Public Rooms</p>}
              key="public"
            >
              <div className="-mx-6 -mt-5">
                {chatRooms.publicRooms.map((room) => {
                  return (
                    <RoomListItem
                      key={room.id}
                      room={room}
                      active={room.id === Number(query.get("room"))}
                      onClick={onRoomSelected}
                    />
                  );
                })}
              </div>
            </Panel>
            <Panel
              header={<p className="-ml-[14px]">Private Rooms</p>}
              key="private"
            >
              <div className="-mx-6 -mt-5">
                {chatRooms.privateRooms.map((room) => {
                  return (
                    <RoomListItem
                      key={room.id}
                      room={room}
                      active={room.id === Number(query.get("room"))}
                      onClick={onRoomSelected}
                    />
                  );
                })}
              </div>
            </Panel>
          </Collapse>
        </div>
      </div>
      <div className="col-span-8 h-full flex flex-col flex-grow overflow-auto custom_scrollbar px-3 pt-0">
        <div className="flex justify-between items-center p-4 rounded-lg bg-white">
          <div className="flex">
            <Avatar
              size={40}
              className="min-w-[40px] min-h-[40px]"
            />
            <div className="ml-3">
              <p className="font-semibold">All Staff (89)</p>
              <p className="text-xs text-secondary-high font-light truncate">
                {chatRooms.publicRooms[0].members
                  .map((member, i, list) => member.name)
                  .join(", ")}
              </p>
            </div>
          </div>
          <div className="self-end ml-3 flex gap-3">
            <Button
              className="bg-primary-low text-primary-high flex items-center justify-center"
              size="large"
              shape="circle"
              icon={<PhoneIcon className="opacity-20" />}
            />
            <Button
              className="bg-primary-low text-primary-high flex items-center justify-center"
              size="large"
              shape="circle"
              icon={<VideoCameraIcon className="opacity-20" />}
            />
            <Button
              className="bg-primary-low text-primary-high flex items-center justify-center"
              size="large"
              shape="circle"
              icon={<OverflowMenuVerticalIcon className="opacity-20" />}
            />
          </div>
        </div>
        <div className="flex flex-col flex-grow mt-5 overflow-auto custom_scrollbar px-2">
          {sampleTexts.map((message, i, list) => (
            <SingleMessage
              message={message}
              index={i}
              list={list}
              key={message.id}
            />
          ))}
        </div>
        <div className="py-3 flex items-center gap-3">
          <Input
            placeholder="Type your message"
            className="rounded-full p-2"
            prefix={
              <Button
                shape="circle"
                type="text"
                className="flex justify-center items-center opacity-40"
                icon={<MicrophoneIcon />}
              />
            }
            suffix={
              <>
                <Button
                  shape="circle"
                  type="text"
                  className="flex justify-center items-center opacity-40"
                  icon={<EmojiIcon />}
                />
                <Button
                  shape="circle"
                  type="text"
                  className="flex justify-center items-center opacity-40"
                  icon={<PaperclipIcon />}
                />
              </>
            }
          />
          <Button
            shape="circle"
            size="large"
            className="bg-primary-low"
            icon={<SendAltFilledIcon className="text-primary-high" />}
          />
        </div>
      </div>
    </div>
  );
}

const chatRooms = {
  publicRooms: [
    {
      id: 1,
      name: "All staff",
      description: "General discussion",
      members: [
        {
          id: 1,
          username: "wale.ajisebutu",
          name: "Wale Ajisebutu",
        },
        {
          id: 2,
          username: "okoro.raymond",
          name: "Okoro Raymond",
        },
        {
          id: 3,
          username: "ajike.chimaobi",
          name: "Ajike Chimaobi",
        },
        {
          id: 4,
          username: "blessed.madukoma",
          name: "Blessed Madukoma",
        },
      ],
      lastMessage: {
        id: 1,
        text: "Good afternoon everyone! Do we have any ideas on the new project.",
        time: new Date(),
      },
    },
  ],
  privateRooms: [
    {
      id: 2,
      name: "Okoro Raymond",
      description: "Chat with Okoro Raymond",
      members: [
        {
          id: 1,
          username: "okoro.raymond",
          name: "Okoro Raymond",
        },
        {
          id: 2,
          username: "wale.ajisebutu",
          name: "Wale Ajisebutu",
        },
      ],
      lastMessage: {
        id: 1,
        text: "Hello sir, just giving you a heads up on the new project.",
        time: subDays(new Date(), 1),
      },
    },
    {
      id: 3,
      name: "Okoro Raymond",
      description: "Chat with Okoro Raymond",
      members: [
        {
          id: 1,
          username: "okoro.raymond",
          name: "Okoro Raymond",
        },
        {
          id: 2,
          username: "wale.ajisebutu",
          name: "Wale Ajisebutu",
        },
      ],
      lastMessage: {
        id: 1,
        text: "Hello sir, just giving you a heads up on the new project.",
        time: subDays(new Date(), 1),
      },
    },
    {
      id: 4,
      name: "Okoro Raymond",
      description: "Chat with Okoro Raymond",
      members: [
        {
          id: 1,
          username: "okoro.raymond",
          name: "Okoro Raymond",
        },
        {
          id: 2,
          username: "wale.ajisebutu",
          name: "Wale Ajisebutu",
        },
      ],
      lastMessage: {
        id: 1,
        text: "Hello sir, just giving you a heads up on the new project.",
        time: subDays(new Date(), 1),
      },
    },
    {
      id: 5,
      name: "Okoro Raymond",
      description: "Chat with Okoro Raymond",
      members: [
        {
          id: 1,
          username: "okoro.raymond",
          name: "Okoro Raymond",
        },
        {
          id: 2,
          username: "wale.ajisebutu",
          name: "Wale Ajisebutu",
        },
      ],
      lastMessage: {
        id: 1,
        text: "Hello sir, just giving you a heads up on the new project.",
        time: subDays(new Date(), 1),
      },
    },
  ],
};

const sampleTexts = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur. Varius scelerisque.",
    time: subDays(new Date(), 3),
    user: {
      id: 1,
      username: "okoro.raymond",
      name: "Okoro Raymond",
    },
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet consectetur. Varius scelerisque.",
    time: subDays(new Date(), 2),
    user: {
      id: 2,
      username: "wale.ajisebutu",
      name: "Wale Ajisebutu",
    },
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet \nconsectetur. Varius scelerisque.",
    time: subDays(new Date(), 2),
    user: {
      id: 3,
      username: "ajike.chimaobi",
      name: "Ajike Chimaobi",
    },
  },
  {
    id: 4,
    text: "Lorem ipsum dolor sit amet \nconsectetur. Varius scelerisque.",
    time: subDays(new Date(), 1),
    user: {
      id: 1,
      username: "okoro.raymond",
      name: "Okoro Raymond",
    },
  },
  {
    id: 5,
    text: "Lorem ipsum dolor sit amet \nconsectetur. Varius scelerisque.",
    time: new Date(),
    user: {
      id: 1,
      username: "okoro.raymond",
      name: "Okoro Raymond",
    },
  },
  {
    id: 6,
    text: "Lorem ipsum dolor sit amet \nconsectetur. Varius scelerisque.",
    time: new Date(),
    user: {
      id: 3,
      username: "ajike.chimaobi",
      name: "Ajike Chimaobi",
    },
  },
  {
    id: 7,
    text: "Lorem ipsum dolor sit amet \nconsectetur. Varius scelerisque.",
    time: new Date(),
    user: {
      id: 4,
      username: "blessed.madukoma",
      name: "Blessed Madukoma",
    },
  },
  {
    id: 8,
    text: "Lorem ipsum dolor sit amet \nconsectetur. Varius scelerisque.",
    time: new Date(),
    user: {
      id: 5,
      username: "victor.adekunle",
      name: "Victor Adekunle",
    },
  },
  {
    id: 9,
    text: "Lorem ipsum dolor sit amet \nconsectetur. Varius scelerisque.",
    time: new Date(),
    user: {
      id: 1,
      username: "okoro.raymond",
      name: "Okoro Raymond",
    },
  },
  {
    id: 10,
    text: "Lorem ipsum dolor sit amet \nconsectetur. Varius scelerisque.",
    time: new Date(),
    user: {
      id: 1,
      username: "okoro.raymond",
      name: "Okoro Raymond",
    },
  },
  {
    id: 11,
    text: "Lorem ipsum dolor sit amet \nconsectetur. Varius scelerisque.",
    time: new Date(),
    user: {
      id: 6,
      username: "sarah.tokes",
      name: "Sarah Tokes",
    },
  },
];
