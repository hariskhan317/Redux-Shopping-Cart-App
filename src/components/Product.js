import React from "react";
import {addToCart} from "../store/cartSlice";
import "./Product.css";
import { useDispatch } from "react-redux";
const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch();
  

  const handleCart = (() => {
    dispatch(addToCart({
      name,id,price,
    }))
  })
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={handleCart}>Add to cart</button>
    </div>
  );
};

export default Product;
