import React from "react";
import Room from "./Room";

function RoomList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>
          <span role="img" aria-label="(*)__(*)">
            😥
          </span>{" "}
          no rooms matched your search
        </h3>
      </div>
    );
  }
  return (
    <div className="roomslist">
      <div className="roomslist-center">
        {rooms.map(room => (
          <Room room={room} key={room.id} />
        ))}
      </div>
    </div>
  );
}

export default RoomList;
