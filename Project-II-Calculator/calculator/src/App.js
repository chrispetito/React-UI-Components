import React from "react";
import "./App.css";
// import IndDisplayButton from "./components/ButtonComponents/action";
import ActionButton from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";

const App = () => {
  return (
    <div class="container">
      <ActionButton buttonStyle="action1" text="0" />
      <div class="numbers-container">
        <ActionButton buttonStyle="action2" text="clear" />
        <NumberButton buttonStyle="number" text="1" />
      </div>
      <div class="numbers-container">
        <NumberButton buttonStyle="number" text="1" />
        <NumberButton buttonStyle="number" text="2" />
        <NumberButton buttonStyle="number" text="3" />
        <NumberButton buttonStyle="number" text="1" />
      </div>
      <div class="numbers-container">
        <NumberButton buttonStyle="number" text="4" />
        <NumberButton buttonStyle="number" text="5" />
        <NumberButton buttonStyle="number" text="6" />
        <NumberButton buttonStyle="number" text="1" />
      </div>
      <div class="numbers-container">
        <NumberButton buttonStyle="number" text="7" />
        <NumberButton buttonStyle="number" text="8" />
        <NumberButton buttonStyle="number" text="9" />
        <NumberButton buttonStyle="number" text="1" />
      </div>
      <div class="numbers-container">
        <ActionButton buttonStyle="action2" text="0" />
        <NumberButton buttonStyle="number" text="8" />
      </div>
    </div>
  );
};

export default App;
