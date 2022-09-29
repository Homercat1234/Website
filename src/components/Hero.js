import React from "react";
import Button from "./Button";
import "./Hero.css";

function Hero() {
  return (
    <div className="background">
      <div className="hero-container">
        <div className="hero-btns">
          <Button buttonStyle="btn--outline" buttonSize="btn--large" Style='border-radius: 2px 0 0 2px;'>My Work</Button>
          <Button buttonStyle="btn--primary" buttonSize="btn--large" Style='border-radius: 0 2px 2px 0;'>GitHub!</Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
