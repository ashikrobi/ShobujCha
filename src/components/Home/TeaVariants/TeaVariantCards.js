import React from "react";

const TeaVariantCards = ({ product, handleShopNow }) => {
  const { variant, price, image } = product;
  return (
    <div className="col-md-4 text-center">
      <img
        style={{ height: "250px" }}
        src={`data:image/png;base64,${image.img}`}
        alt=""
      />
      <h5 className="mt-3 mb-3">{variant}</h5>
      <h5 className="mt-3 mb-3">${price}</h5>
      <button
        className="btn btn-success"
        onClick={() => handleShopNow(product)}
      >
        SHOP NOW
      </button>
    </div>
  );
};

export default TeaVariantCards;
