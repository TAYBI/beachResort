import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Hero>
      <Banner title="luxurious Rooms" subtitle="deluxe Room strat at $99">
        <Link to="/rooms" className="btn-primary">
          Our Rooms
        </Link>
      </Banner>
    </Hero>
  );
};
