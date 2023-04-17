import React from "react";
import "./highQuality.css";

const HighQuality = () => {
  return (
    <div className="sustainability">
      <div className="sus-text">
        <p className="sus-text__secondary">Premium Products &</p>
        <p className="sus-text__primary">High Quality</p>
      </div>

      <div className="first-part">
        <div className="first-half">
          <div className="bg-grey"></div>
          <div className="first-half-img">
            <img
              className="fhi"
              src="https://lefaxx.com/wp-content/uploads/2020/11/product.jpg"
              alt="3 jeans"
            />
          </div>
        </div>
        <div className="second-half">
          <h2>All In House Production</h2>
          <p>
            Le Faxx Jeans is an all in house production, the company is always
            aiming to invent new strategies, methods, and techniques to get the
            best results with the newest technology.…
          </p>
          <a href="#">View all stages of production →</a>
        </div>
      </div>
    </div>
  );
};

export default HighQuality;
