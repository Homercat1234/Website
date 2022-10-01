import React from "react";
import Button from "./Button";
import "./Hero.css";

function Hero() {
  return (
    <div className="background">
      <div className="hero-container">
        <h1 className="hero--h1">WELCOME!</h1>
        <div className="hero-btns">
          <Button
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            Style="border-radius: 2px 0 0 2px;border-bottom: none;"
          >
            My Work
          </Button>
          <a href="https://github.com/Homercat1234">
            <Button
              buttonStyle="btn--primary"
              buttonSize="btn--large"
              Style="border-radius: 0 2px 0px 0;border-bottom: none;"
            >
              GitHub!
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
