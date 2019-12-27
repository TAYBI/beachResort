import React from "react";

function Hero({ children, hero, img }) {
  const background = img ? `url(${img})` : "";

  return (
    <header className={hero} style={{ background }}>
      {children}
    </header>
  );
}

export default Hero;

Hero.defaultProps = {
  hero: "defaultHero"
};
