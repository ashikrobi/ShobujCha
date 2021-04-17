import React from "react";
import logo from "../../../images/herbal-tea.png";

const ReviewOfTheDay = () => {
  return (
    <div className="col-md-4 m-auto mb-5 mt-5 pt-5 review">
      <div className="text-center">
        <img className="mb-5" style={{ height: "100px" }} src={logo} alt="" />
        <h5 className="mb-5 text-secondary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
          inventore et illum voluptas tempore quos doloremque, architecto ipsum
          possimus voluptatem.
        </h5>
        <h6>JOHN SULLIVAN</h6>
        <small className="mb-5">Customer</small>
      </div>
    </div>
  );
};

export default ReviewOfTheDay;
