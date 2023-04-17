import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <Slider {...settings}>
      <div className="slide">
        <div className="slide-item">
          <img
            className="header-img"
            src="https://lefaxx.com/wp-content/uploads/2020/12/Baslik.png"
            alt="motto"
          />
        </div>
      </div>
      <div className="slide">
        <div className="slide-item">
          <img
            className="img"
            src="https://lefaxx.com/wp-content/uploads/2020/12/p-1.png"
            alt="perfection"
          />
          <div className="slide-text">
            <h2>
              Premium & High <br />
              Quality Production
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
              repellat fugiat ea quo perspiciatis repudiandae similique,
              temporibus expedita ipsum obcaecati.
            </p>
          </div>
        </div>
      </div>
      <div className="slide">
        <div className="slide-item">
          <img
            className="img"
            src="https://lefaxx.com/wp-content/uploads/2020/12/e1-1.png"
            alt="experience"
          />
          <div className="slide-text">
            <h2>
              Many Years of
              <br /> Experience
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              mollitia dolor, laboriosam eveniet accusamus deleniti commodi ea
              magni cumque.
            </p>
          </div>
        </div>
      </div>
      <div className="slide">
        <div className="slide-item">
          <img
            className="img"
            src="https://lefaxx.com/wp-content/uploads/2020/12/r-1.png"
            alt="responsibility"
          />
          <div className="slide-text">
            <h2>
              Responsible
              <br /> Towards Nature
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              mollitia dolor, laboriosam eveniet accusamus deleniti commodi ea
              magni cumque.
            </p>
          </div>
        </div>
      </div>
      <div className="slide">
        <div className="slide-item">
          <img
            className="img"
            src="https://lefaxx.com/wp-content/uploads/2020/12/f-1.png"
            alt="future"
          />
          <div className="slide-text">
            <h2>
              Sustainability
              <br /> for a Clean Future
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              mollitia dolor, laboriosam eveniet accusamus deleniti commodi ea
              magni cumque.
            </p>
          </div>
        </div>
      </div>
      <div className="slide">
        <div className="slide-item">
          <img
            className="img"
            src="https://lefaxx.com/wp-content/uploads/2020/12/e2-1.png"
            alt="energy"
          />
          <div className="slide-text">
            <h2>
              Energy Saving
              <br />
              with "Knot Washed®"
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              mollitia dolor, laboriosam eveniet accusamus deleniti commodi ea
              magni cumque.
            </p>
          </div>
        </div>
      </div>
      <div className="slide">
        <div className="slide-item">
          <img
            className="img"
            src="https://lefaxx.com/wp-content/uploads/2020/12/c-1.png"
            alt="client"
          />
          <div className="slide-text">
            <h2>
              Customer Oriented
              <br />
              Product Development
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              mollitia dolor, laboriosam eveniet accusamus deleniti commodi ea
              magni cumque.
            </p>
          </div>
        </div>
      </div>
      <div className="slide">
        <div className="slide-item">
          <img
            className="img"
            src="https://lefaxx.com/wp-content/uploads/2020/12/t.png"
            alt="technology"
          />
          <div className="slide-text">
            <h2>
              High Level
              <br />
              Technology
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              mollitia dolor, laboriosam eveniet accusamus deleniti commodi ea
              magni cumque.
            </p>
          </div>
        </div>
      </div>
    </Slider>
  );
}
