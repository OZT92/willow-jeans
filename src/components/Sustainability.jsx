import React from "react";
import "./sustainability.css";

const Sustainability = () => {
  return (
    <div className="sustainability">
      <div className="sus-text">
        <p className="sus-text__secondary">Social Responsibility &</p>
        <p className="sus-text__primary">Sustainability</p>
      </div>
      <div className="sus-img">
        <img
          src="https://lefaxx.com/wp-content/uploads/2021/03/banner2.jpg"
          alt="two kids running on grass."
        />
        <p className="sus-img__text">
          <span className="head">Sustainable</span>
          <br /> Denim Production
          <br />
          <span className="by-willow">by Willow</span>
        </p>
      </div>
      <div className="knotwashed">
        <img
          src="https://lefaxx.com/wp-content/uploads/2021/03/kw-logo-revize.png"
          alt="knotwashed"
          className="knotwashed-logo"
        />
        <img
          src="https://lefaxx.com/wp-content/uploads/2020/12/sustainable-production.png"
          alt="jeans"
          className="knotwashed-product"
        />
        <div className="knotwashed-text">
          <h3 className="knotwashed-text__header">Knotwashed®</h3>
          <p>
            All products are washed with our invented knotwashed technology.
            Knotwashed stands for resource-saving alternative to the
            stonewashed-process. Our special plastic knots, which were designed
            especially for the washing process of Jeans, are made 100 % out of
            recycled plastic! It does not only save energy, CO2, time and 50% of
            water usage, it also saves variety of chemicals used when disposing
            pumice. However, knotwashed assures the same result as “Used Look”.
          </p>
          <h5>www.knotwashed.com</h5>
          <a href="/" class="btn">
            More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
