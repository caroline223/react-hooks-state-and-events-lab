import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart ] = useState(false)

  function handleInCart() {
    setInCart((inCart) => !inCart)
  }

  const updatedCart = inCart ? "in-cart" : "";

  return (
    <li className={updatedCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
        onClick={handleInCart}
        className={inCart ? "remove" : "add"}>Add to Cart</button>
        {inCart ? "Remove from" : "Add to"}
    </li>
  );
}

export default Item;
