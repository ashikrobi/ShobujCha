import React from "react";
import teaPicker from "../../../images/tea-picker-woman.jpg";
import teaBags from "../../../images/tea-bags.jpg";
import teaCup from "../../../images/tea-cup.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const HeaderCarousel = () => {
  return (
    <div className="row d-flex align-items-center">
      <div className="col-md-5 offset-1">
        <h1>
          <span className="text-success display-3">Hello it's tea time</span>{" "}
          <br /> <span className="display-4">drink matcha.</span>
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
          facere corporis sapiente nulla hic tempora officia laborum itaque
          tenetur quisquam.
        </p>
      </div>
      <div className="col-md-6">
        <Carousel>
          <div>
            <img src={teaPicker} alt="" />
            <p className="legend">Freshly Picked Leaves</p>
          </div>
          <div>
            <img src={teaBags} alt="" />
            <p className="legend">Tea Bags Created With Care</p>
          </div>
          <div>
            <img src={teaCup} alt="" />
            <p className="legend">Drink For Health Benefits</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HeaderCarousel;
