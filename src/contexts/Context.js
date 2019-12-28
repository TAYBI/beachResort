import React, { createContext, useEffect, useState } from "react";
import items from "../data";

const RoomContext = createContext();

function RoomProvider({ children }) {
  const [data, setData] = useState([
    {
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
    }
  ]);

  // get data
  useEffect(() => {
    // get data
    let rooms = farmatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);

    let maxPrice = Math.max(...rooms.map(item => item.price));
    let maxSize = Math.max(...rooms.map(item => item.size));

    setData([
      {
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        price: maxPrice,
        maxPrice,
        maxSize
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

  const handleChange = e => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;

    // console.log(`name ${name} - value ${value}`);

    setData(
      [
        ...data,
        {
          [name]: value
        }
      ],
      filterRoomms
    );
  };

  const filterRoomms = () => {
    // let tmpRooms = [...data[0].rooms];
    console.log(data[0].rooms);
  };

  return (
    <RoomContext.Provider value={{ data, getRoom, handleChange }}>
      {children}
    </RoomContext.Provider>
  );
}

export { RoomProvider, RoomContext };
