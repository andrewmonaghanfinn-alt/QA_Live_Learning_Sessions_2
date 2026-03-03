import React from "react";

export default function ItemCard({ isInStock, symbol, name, price }) {
  return (
    <div className="item-card">
      <div className="symbol">{symbol}</div>
      <h3>{name}</h3>
      <p>£{price.toFixed(2)}</p>
      <p>{isInStock ? "In stock" : "Out of stock"}</p>
    </div>
  );
}
