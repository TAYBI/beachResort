import React from "react";

function Hero({ children, hero, img }) {
  return (
    <header className={hero} style={{ background: `url(${img})` }}>
      {children}
    </header>
  );
}

export default Hero;

Hero.defaultProps = {
  hero: "defaultHero"
};
