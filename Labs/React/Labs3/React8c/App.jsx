import "./style.css";
import React, { useState } from "react";

/*

💪 Exercise: Powers of two app

🎯 Your task:
- The value displayed in the h2 tag should initially be 1.
- Whenever the "x2" button is clicked, the value displayed in the h2 tag should double.
  - i.e. the first time the button is clicked, the app will display 2, then 4, then 8, 16 etc.
- Use state to achieve this (with the useState hook).

💡 Tip:
- Make sure to import { useState } from 'react'.
- If you need to, use the previous example as a reference.
  https://stackblitz.com/edit/react-example-changing-state-based-on-previous-state?file=src/App.jsx
- Bonus: if you want nice comma formatting, use the toLocaleString() method.
  - For example: (2048).toLocaleString() returns '2,048'

*/

export default function App() {
  const [count, setCount] = useState(1);

  function double() {
    setCount(count * 2);
  }

  return (
    <main>
      <h1>📈 Powers of two</h1>
      <h2>{count.toLocaleString()}</h2>
      <button onClick={double}>x2</button>
    </main>
  );
}
