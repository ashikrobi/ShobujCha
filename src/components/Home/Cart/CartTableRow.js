import React from "react";

const CartTableRow = ({ cartItem, index }) => {
  const { variant, price } = cartItem;
  console.log(variant, price);
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td colSpan="2">{variant}</td>
      <td>{price}</td>
    </tr>
  );
};

export default CartTableRow;
