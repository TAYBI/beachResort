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

        {/* Room  Price */}
        <div className="form-group">
          <label htmlFor="price">room price {price}$</label>
          <div className="price-input">
            <input
              type="range"
              name="price"
              id="price"
              min={minPrice}
              max={maxPrice}
              value={price}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
        {/* end */}

        {/* Room min max */}
        <div className="form-group">
          <label htmlFor="size">min and max size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end */}

        {/* room that have pets or breakfast or both*/}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              onChange={handleChange}
              checked={pets}
            />
            <label htmlFor="pets">pets</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              onChange={handleChange}
              checked={breakfast}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
        </div>
        {/* end */}
      </form>
    </section>
  );
}

export default RoomFilter;
