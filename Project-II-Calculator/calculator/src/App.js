import React from "react";
import "./App.css";
// import IndDisplayButton from "./components/ButtonComponents/action";
import ActionButton from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import DisplayButton from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="container">
      <div></div>
      <DisplayButton buttonStyle="action1" text="0" />
      <div className="numbers-container">
        <ActionButton buttonStyle="action2" text="clear" />
        <ActionButton buttonStyle="display-button" text="÷" />
      </div>
      <div className="numbers-container">
        <NumberButton buttonStyle="number" text="7" />
        <NumberButton buttonStyle="number" text="8" />
        <NumberButton buttonStyle="number" text="9" />
        <ActionButton buttonStyle="display-button" text="×" />
      </div>
      <div className="numbers-container">
        <NumberButton buttonStyle="number" text="4" />
        <NumberButton buttonStyle="number" text="5" />
        <NumberButton buttonStyle="number" text="6" />
        <ActionButton buttonStyle="display-button" text="−" />
      </div>
      <div className="numbers-container">
        <NumberButton buttonStyle="number" text="1" />
        <NumberButton buttonStyle="number" text="2" />
        <NumberButton buttonStyle="number" text="3" />
        <ActionButton buttonStyle="display-button" text="+" />
      </div>
      <div className="numbers-container">
        <ActionButton buttonStyle="action2" text="0" />
        <ActionButton buttonStyle="display-button" text="=" />
      </div>
    </div>
  );
};

export default App;
