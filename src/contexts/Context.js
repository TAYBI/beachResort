import React, { createContext, useEffect, useState } from "react";
import items from "../data";

const RoomContext = createContext();

function RoomProvider({ children }) {
  const [data, setData] = useState([
    {
      rooms: [],
      sortedRooms: [],
      featuredRooms: [],
      loading: true
    }
  ]);

  // get data
  useEffect(() => {
    // get data
    let rooms = farmatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);
    setData([
      {
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false
      }
    ]);
  }, []);

  const farmatData = items => {
    let tempItem = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let room = { ...item.fields, id, images };
      return room;
    });

    return tempItem;
  };

  const getRoom = slug => {
    let rooms = [...data[0].rooms];
    return rooms.find(room => room.slug === slug);
  };

  return (
    <RoomContext.Provider value={{ data, getRoom }}>
      {children}
    </RoomContext.Provider>
  );
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
