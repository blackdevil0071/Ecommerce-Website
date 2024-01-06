import React from "react";
import { Button } from "react-bootstrap";

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const Cart = () => {
  return (
    <div>
      {cartElements.map((cartItem, index) => (
        
        <div key={index}>
          <p>{cartItem.title}</p>
          <img src={cartItem.imageUrl} alt="Cart Image"></img>
          <p>{cartItem.price}</p>
          <p>{cartItem.quantity}</p>

          <button>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
