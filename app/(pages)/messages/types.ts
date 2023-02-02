export interface RoomType {
  id: number;
  name: string;
  description: string;
  members: {
    id: number;
    username: string;
    name: string;
  }[];
  lastMessage: {
    id: number;
    text: string;
    time: Date;
  };
}

export interface MessageType {
  id: number;
  text: string;
  time: Date;
  user: {
    id: number;
    username: string;
    name: string;
  };
}
