import React, { useState, useEffect } from "react";
import ReviewsCard from "./ReviewsCard";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="d-flex justify-content-center">
      <div className="w-75 row mt-5 pt-5 pb-5 mb-5">
        {reviews.map((review) => (
          <ReviewsCard review={review} key={review._id}></ReviewsCard>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
