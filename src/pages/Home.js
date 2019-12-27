import React from "react";

import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";

import { Link } from "react-router-dom";
import FeatchhurdRoom from "../components/FeatuerdRoom";

export const Home = () => {
  return (
    <>
      <Hero>
        <Banner title="luxurious Rooms" subtitle="deluxe Room strat at $99">
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeatchhurdRoom />
    </>
  );
};
