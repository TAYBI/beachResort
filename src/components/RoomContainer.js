import React, { useContext } from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import { RoomContext } from "../contexts/Context";
import Loading from "./Loading";

function RoomContainer() {
  const { data } = useContext(RoomContext);
  const { rooms, sortedRooms, loading } = data;

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
}

export default RoomContainer;
