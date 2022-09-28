import React from "react";
import Button from "./Button";
import "./Hero.css";

function Hero() {
  return (
    <>
      <div className="hero-container">
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you wating for?</p>
        <div className="hero-btns">
          <Button buttonStyle="btn--outline" buttonSize="btn--large">My Work</Button>
          <Button buttonStyle="btn--primary" buttonSize="btn--large">GitHub!</Button>
        </div>
      </div>
    </>
  );
}

export default Hero;
