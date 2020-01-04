import React, { Component, createContext, useEffect, useState } from "react";
import items from "../data";

const RoomContext = createContext();

function RoomProvider({ children }) {
  let initState = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };

  let [data, setData] = useState(initState);

  // get data
  useEffect(() => {
    // get data
    let rooms = farmatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);

    let maxPrice = Math.max(...rooms.map(item => item.price));
    let maxSize = Math.max(...rooms.map(item => item.size));

    setData({
      ...data,
      loading: false,
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      price: maxPrice,
      maxPrice,
      maxSize
    });
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
    let rooms = [...data.rooms];
    return rooms.find(room => room.slug === slug);
  };

  const handleChange = e => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;
    setData({ ...data, [name]: value }, filterRoomms());
    const lolo = { ...data };
  };

  const filterRoomms = () => {
    const {
      type,
      capacity,
      price,
      minPrice,
      maxPrice,
      minSize,
      maxSize,
      breakfast,
      pets
    } = data;

    let roomsTmp = [...data.rooms];

    console.log(data);

    // if (type !== "all") roomsTmp = roomsTmp.filter(room => room.type === type);

    setData({ ...data, sortedRooms: roomsTmp });
  };

  return (
    <RoomContext.Provider value={{ data, handleChange, getRoom }}>
      {children}
    </RoomContext.Provider>
  );
}

export { RoomProvider, RoomContext };
