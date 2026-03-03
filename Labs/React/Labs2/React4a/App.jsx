import React from "react";
import ItemCard from "./components/ItemCard";
import "./style.css";
import itemsData from "./itemsData.json";

/*

💪 Exercise: Render a list from data

Here's our fruit market app - but where are the fruits? We want to see all the different items on sale, but this time we are going to achieve this by rendering a list of <ItemCard> components from the data found in src/itemsData.json.

🎯 Your task:
  - Import the fruit market items data from itemsData.json.
  - Render a list of <ItemCard> components from this data.

💡 Tips:
  - Use the array map() function to transform the array of data into an array of components.
  - Make sure each <ItemCard> receives a "symbol" prop, a "name" prop and a "price" prop.
  - Don't forget to give each <ItemCard> a unique "key" prop. What uniquely identifies each item in the dataset?

*/

export default function App() {
  return (
    <main>
      <h1>React Fruit Market</h1>
      <div className="items-grid">
        {itemsData.map(({ id, symbol, name, price }) => (
          <ItemCard symbol={symbol} name={name} price={price} key={id} />
        ))}
      </div>
    </main>
  );
}
