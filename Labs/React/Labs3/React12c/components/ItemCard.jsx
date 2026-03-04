import React, { useContext } from "react";
import { CartContext, cartProvider } from "../context/cart-context";

export default function ItemCard({ id, symbol, name, price }) {
  const { addToCart } = useContext(CartContext);

  function handleAddToCart() {
    addToCart(id); // this funtion needs to be accessed via context!
  }

  return (
    <div className="item-card">
      <div className="symbol">{symbol}</div>
      <h3>{name}</h3>
      <p>£{price.toFixed(2)}</p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
}
