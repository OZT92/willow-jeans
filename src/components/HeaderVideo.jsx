import React from "react";
import videoBg from "../assets/videoBg.mp4";
import "./headerVideo.css";

const HeaderVideo = () => {
  return (
    <div className="videoBg">
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      <h1>
        Sustainable & <br />
        High Quality
        <br /> Denim Production
      </h1>
      <p>
        <a href="mailto:someone@example.com">info@willow.com</a>
      </p>
    </div>
  );
};

export default HeaderVideo;
