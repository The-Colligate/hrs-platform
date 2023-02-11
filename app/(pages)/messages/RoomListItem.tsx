import { Avatar, Badge } from "antd";
import { format } from "date-fns";
import { RoomType } from "./types";

export default function RoomListItem({
  room,
  active,
  onClick,
}: {
  room: RoomType;
  active?: boolean;
  onClick?: (roomId: number) => void;
}) {
  return (
    <div
      key={room.id}
      className={`flex w-full gap-2 border-l-4 border-white p-4 cursor-pointer rounded-l ${
        active
          ? "border-active bg-active bg-opacity-[15%]"
          : "hover:border-secondary-low hover:bg-secondary-low"
      }`}
      onClick={() => {
        if (onClick) {
          onClick(room.id);
        }
      }}
    >
      <Avatar
        size={40}
        className="min-w-[40px] min-h-[40px]"
      />
      <div className="grid grid-cols-12 flex-grow">
        <div className="w-full font-semibold flex justify-between items-center col-span-12 gap-1">
          <p className="w-full truncate overflow-hidden">{room.name}</p>
          <small className="whitespace-nowrap font-light mt-1">
            {format(room.lastMessage.time, "hh:mm aa")}
          </small>
        </div>
        <div className="w-full overflow-hidden flex justify-between col-span-12 gap-1">
          <p className="text-xs w-full truncate overflow-hidden">
            {room.lastMessage.text}
          </p>
          <Badge
            className="ml-auto"
            size="small"
            count={3}
            style={{ backgroundColor: "#283E55" }}
          />
        </div>
      </div>
    </div>
  );
}
