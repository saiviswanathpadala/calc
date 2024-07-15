import React from "react";
import "./App.css";
import Keypad from "./keypad";

function App() {
  const [input, setInput] = React.useState("");
  function handleClick(value) {
    setInput(input + value);       
  }
  function calculate(value) {
    //let outputval=eval(input)
    //setInput(outputval)
    try {
      let outputval = eval(input);
      setInput(outputval);
    } catch {
      setInput("Syntax Error");
    }
  }
  function handleClear() {
    setInput("");
  }
  function handleBack() {
    setInput((Input) => Input.slice(0, -1));
  }
  return (
    <div className="container">
      <h1>Calculator App</h1>
      <div>
        <input type="text" value={input} className="output"></input>
        <Keypad
          handleClick={handleClick}
          handleClear={handleClear}
          calculate={calculate}
          handleBack={handleBack}
        ></Keypad>
      </div>
    </div>
  );
}

export default App;

/*import React, { useState } from 'react';
import './Calculator.css'; // Optional: For styling

const App = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleBackspace = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input}</div>
      <div className="buttons">
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={handleClear}>C</button>
        <button onClick={handleBackspace}>←</button>
      </div>
    </div>
  );
};

export default App;*/
