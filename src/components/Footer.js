import React from "react";
import "./Footer.css";
import Youtube from "./assests/youtube.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <ul>
          <a href="https://www.youtube.com/channel/UCd-DZ0mE4lFrzp0g--YSFzQ">
            <img className="youtube" src={Youtube} alt="Youtube"></img>
          </a>
        </ul>
      </div>
    </>
  );
}

export default Footer;
