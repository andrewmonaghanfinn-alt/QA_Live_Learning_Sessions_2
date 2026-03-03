import "./style.css";
import React, { useState } from "react";
import CounterDisplay from "./components/CounterDisplay";
import IncrementButton from "./components/IncrementButton";
import ResetButton from "./components/ResetButton";

/*

💪 Exercise: Inverse data flow

Here we have a simple counter app. The parent component <App> contains three child components:
  - <CounterDisplay>, which displays the current value of the counter.
  - <IncrementButton>, which should add 1 to the count.
  - <ResetButton>, which should reset the counter to 0.

The count value has been stored in state using useState(). The state has been placed within the parent component so that it can be accessed by the child components (e.g. <CounterDisplay>) via props. 

Think about the <IncrementButton> component. If it's going to change the state in its parent, it will somehow need to communicate up the tree... How can we make this happen? 

🎯 Your task:
- Make the app function as intended.

💡 Tip:
- The functions "handleIncrement" and "handleReset" have been included. If only we could give the relevant components access to these functions...

*/

export default function App() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((previous) => previous + 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <main>
      <CounterDisplay count={count} />
      <IncrementButton increment={handleIncrement} />
      <ResetButton reset={handleReset} />
    </main>
  );
}

/*notes

difficult to remember the syntax and how to correctly pass the callback functions

for future reference: the prop has to be declared and set to the handler
  then the prop must be destructured (or referenced using dot notation)


*/
