import React from "react";

const ReviewsCard = ({ review }) => {
  const { userName, comment } = review;
  return (
    <div className="col-md-4 d-flex align-items-center text-secondary shadow p-3 mb-5 bg-body rounded mr-3">
      <div>
        <h5 className="mt-3 mb-3 p-3">{comment}</h5>
        <h5 className="mt-3 mb-3 text-success text-center">{userName}</h5>
      </div>
    </div>
  );
};

export default ReviewsCard;
