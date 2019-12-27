import React, { useContext } from "react";
import { RoomContext } from "../contexts/Context";
import Loading from "./Loading";
import Room from "./Room";
import data from "../data";

function FeatchhurdRoom() {
  let { data } = useContext(RoomContext);
  data = data[0];
  let { featuredRooms: rooms, loading } = data;

  rooms = rooms.map(room => <Room key={room.id} room={room} />);
  console.log(loading);
  return (
    <div className="featured-rooms">
      <div className="section-title">
        <h4>Featured Room</h4>
        <div></div>
      </div>
      <div className="featured-rooms-center">
        {loading ? <Loading /> : rooms}
      </div>
    </div>
  );
}

export default FeatchhurdRoom;
