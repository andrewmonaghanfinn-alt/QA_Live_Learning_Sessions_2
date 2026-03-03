import "./style.css";
import React from "react";
import addConfetti from "./addConfetti";

/*

💪 Exercise: Event handling

🎯 Your task:
  - Currently the confetti button is broken and does nothing.
  - Notice the addConfetti function imported at the top of this file. Make it so that this function is called when the confetti button is clicked. 
  - To achieve this, you'll need to add an onClick handler to the <button> element.

*/

export default function App() {
  return (
    <main>
      <h1>The Confetti Button</h1>
      <Button />
    </main>
  );
}

function Button() {
  const handleClick = () => {
    addConfetti();
    console.log();
  };
  return <button onClick={handleClick}>Confetti!</button>;
}

/*notes for later:

-this is really weird, there seems to be some sort of timing issue
 that makes using a function component explicitly 
 (instead of calling addConfetti inline as suggested in the 
 solution) cause the button to stop working from time to time

*/
