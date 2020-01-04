import React, { useContext } from "react";
import { RoomContext } from "../contexts/Context";

// get all unique values

const getUnique = (items, value) => {
  // set is push unique item only
  return [...new Set(items.map(item => item[value]))];
};

function RoomFilter({ rooms }) {
  const data = useContext(RoomContext);

  const {
    handleChange,
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

  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  let guests = getUnique(rooms, "capacity");
  guests = guests.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  return (
    <section className="filter-container">
      <div className="section-title">
        <h4>Search Rooms</h4>
        <div></div>
      </div>
      <form action="" className="filter-form">
        {/* start type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end */}

        {/* start guest */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {guests}
          </select>
        </div>
        {/* end */}
      </form>
    </section>
  );
}

export default RoomFilter;
