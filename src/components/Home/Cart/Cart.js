import React, { useContext } from "react";
import NavBar from "../NavBar/NavBar";
import shoppingCart from "../../../images/shopping-cart.png";
import { OrderContext } from "../../../App";
import CartTableRow from "./CartTableRow";

const Cart = () => {
  const [order, setOrder] = useContext(OrderContext);
  console.log(order);
  return (
    <div>
      <NavBar></NavBar>
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center mt-5">
          <div>
            <img
              className="mb-5"
              src={shoppingCart}
              style={{ height: "240px" }}
              alt=""
            />
            <h3 className="text-secondary">My Shopping Cart</h3>
          </div>
        </div>
        <div className="col-md-6">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col" colSpan="2">
                  Item
                </th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {order.map((cartItem, index) => (
                <CartTableRow cartItem={cartItem} index={index}></CartTableRow>
              ))}
              <tr>
                <th scope="row"></th>
                <td colSpan="2">Total:</td>
                <td>$100</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td colSpan="2"></td>
                <td>
                  <button className="btn btn-success">Order</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
