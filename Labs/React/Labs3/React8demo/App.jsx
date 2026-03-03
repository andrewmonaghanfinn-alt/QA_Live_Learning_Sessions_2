import "./style.css";
import React, { useState } from "react";

export default function App() {
  const [temperature, setTemperature] = useState(20);

  function increaseTemperature() {
    setTemperature(temperature + 1);
    console.log(temperature);
  }

  function decreaseTemperature() {
    setTemperature(temperature - 1);
    console.log(temperature);
  }

  return (
    <main>
      <h1>🌡️ React Thermostat</h1>
      <h2>{temperature}°C</h2>
      <div>
        <button onClick={increaseTemperature}>+</button>
        <button onClick={decreaseTemperature}>-</button>
      </div>
    </main>
  );
}

/*
notes: 

you cannot increment/decrement temperature directly because it has been set
as a const variable, also, temperature is just a snapshot of the current state
that has been destructured for use in the function.

only the useState function setTemperature can be used to update the actual
state.

also, best practice would be to use setTemperature(prev => prev - 1);
apparently
*/
