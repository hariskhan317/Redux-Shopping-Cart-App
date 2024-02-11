import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.itemList);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        <li>
          {cartItems.map(item => (
            <CartItem id={item.id} quantity={item.quantity} price={item.price} name={item.name} total={item.totalPrice} />
          ))}
        </li>
      </ul>
    </div>
  );
};

export default CartItems;
