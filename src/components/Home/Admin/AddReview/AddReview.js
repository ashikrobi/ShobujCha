import React, { useState } from "react";
import Sidebar from "../SideBar";

const AddReview = () => {
  const [review, setReview] = useState({});
  const handleBlur = (e) => {
    const newReview = { ...review };
    newReview[e.target.name] = e.target.value;
    setReview(newReview);
  };
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("userName", review.userName);
    formData.append("comment", review.comment);

    fetch("https://secret-fjord-76461.herokuapp.com/addReview", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section className="container-fluid row">
      <Sidebar></Sidebar>
      <div
        className="col-md-10 p-4 pr-5"
        style={{
          position: "absolute",
          right: 0,
          backgroundColor: "#CD6858",
          height: "100%",
        }}
      >
        <h5 className="text-brand text-white">Add Review</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="userName">Your Name</label>
            <input
              onBlur={handleBlur}
              type="text"
              className="form-control"
              name="userName"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="comment">Comment:</label>
            <textarea
              onBlur={handleBlur}
              type="text"
              className="form-control"
              rows="5"
              name="comment"
              placeholder="Enter Your Comment Here.."
            />
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddReview;
