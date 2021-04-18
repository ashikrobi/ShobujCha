import React from "react";

const LatestNewsCard = ({ news }) => {
  const { date, img, procedure, title } = news;
  // console.log(news);
  return (
    <div className="card ml-5 mt-5" style={{ width: "30rem" }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="text-success">{date}</p>
        <h4>{title}</h4>
        <p className="card-text">{procedure}</p>
      </div>
    </div>
  );
};

export default LatestNewsCard;
