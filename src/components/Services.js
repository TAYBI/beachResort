import React, { useState } from "react";

import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

function Services() {
  const [services] = useState([
    {
      icon: <FaCocktail />,
      title: "Free Cocktails",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, quo!"
    },
    {
      icon: <FaHiking />,
      title: "Endless Hiking",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, quo!"
    },
    {
      icon: <FaShuttleVan />,
      title: "Free Shuttle",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, quo!"
    },
    {
      icon: <FaBeer />,
      title: "Strongess Beer",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, quo!"
    }
  ]);

  return (
    <div className="services">
      <div className="section-title">
        <h4>Services</h4>
        <div></div>
      </div>
      <div className="services-center">
        {services.map((service, index) => {
          return (
            <article className="service" key={index}>
              <span>{service.icon}</span>
              <h6>{service.title}</h6>
              <p>{service.text}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
