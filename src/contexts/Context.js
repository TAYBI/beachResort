import React, { Component, createContext } from "react";
import items from "../data";

const RoomContext = createContext();

class RoomProvider extends Component {
  state = {
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

  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);
    let maxPrice = Math.max(...rooms.map(item => item.price));
    let maxSize = Math.max(...rooms.map(item => item.size));

    this.setState({
      loading: false,
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      price: maxPrice,
      maxPrice,
      maxSize
    });
  }

  formatData = items => {
    let tempItem = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let room = { ...item.fields, id, images };
      return room;
    });
    return tempItem;
  };

  getRoom = slug => {
    let rooms = [...this.state.rooms];
    return rooms.find(room => room.slug === slug);
  };

  handleChange = e => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value }, this.filterRoomms);
  };

  filterRoomms = () => {
    let {
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state;

    capacity = parseInt(capacity);
    let roomsTmp = [...this.state.rooms];

    if (type !== "all") roomsTmp = roomsTmp.filter(room => room.type === type);

    if (capacity > 1)
      roomsTmp = roomsTmp.filter(room => room.capacity >= capacity);

    roomsTmp = roomsTmp.filter(room => room.price <= price);

    roomsTmp = roomsTmp.filter(
      room => room.size >= minSize && room.size <= maxSize
    );

    if (pets) roomsTmp = roomsTmp.filter(room => room.pets === true);

    if (breakfast) roomsTmp = roomsTmp.filter(room => room.breakfast === true);

    this.setState({ sortedRooms: roomsTmp });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          handleChange: this.handleChange,
          getRoom: this.getRoom
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

export { RoomProvider, RoomContext };
