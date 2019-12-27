import React, { useState, useContext } from "react";
import defaultBg from "../images/room-1.jpeg";
import { RoomContext } from "../contexts/Context";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

const SinglePage = props => {
  // define the state
  const [state] = useState({
    slug: props.match.params.slug,
    defaultBg
  });

  const { getRoom } = useContext(RoomContext);
  const room = getRoom(state.slug);

  if (!room) {
    return (
      <div className="error">
        <h3>No shuch room could be found ...</h3>
        <Link to="/rooms" className="btn-primary">
          Back to rooms
        </Link>
      </div>
    );
  }
  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images
  } = room;

  const [mainImg, ...defaultImages] = images;

  return (
    <>
      <Hero hero="roomsHero" img={mainImg || defaultBg}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </Hero>
      <section className="single-room">
        <div className="single-room-images">
          {defaultImages.map((image, index) => (
            <img src={image} key={index} alt="" />
          ))}
        </div>

        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>${description}</p>
          </article>

          <article className="info">
            <h3>info</h3>
            <h6>price: ${price}</h6>
            <h6>size: ${size} SQFT</h6>
            <h6>
              max capacity:
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "pet allowed" : "pet not allowed"}</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
          {extras.map((item, index) => (
            <li key={index}>- {item}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default SinglePage;
