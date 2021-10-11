import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart ] = useState(false)

  function handleInCart() {
    setInCart((inCart) => !inCart)
    
  }

  const updatedCart = inCart ? "in-cart" : "";
  const colorChange = inCart ? "remove" : "add"

  return (
    <li className={updatedCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
        onClick={handleInCart}
        className={colorChange}> {inCart ? "Remove From Cart" : "Add to Cart"}</button>  
    </li>
  );
}

export default Item;
