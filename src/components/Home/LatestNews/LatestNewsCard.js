import React from "react";

const LatestNewsCard = ({ news }) => {
  const { date, img, procedure, title } = news;
  console.log(news);
  return (
    <div class="card ml-5 mt-5" style={{ width: "30rem" }}>
      <img src={img} class="card-img-top" alt="..." />
      <div class="card-body">
        <p className="text-success">{date}</p>
        <h4>{title}</h4>
        <p class="card-text">{procedure}</p>
      </div>
    </div>
  );
};

export default LatestNewsCard;
